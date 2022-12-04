import Queue from "bull";
import { json } from "body-parser";
import { fetch } from "cross-fetch";
import { format, sub } from "date-fns";
import { config } from "dotenv";
import { Router } from "express";
import { seconds } from "milliseconds";
import { resolve } from "path";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { z } from "zod";
import { EntrySchema, Type } from "@dev/schema";

config({ path: resolve(__dirname, "../../../.env") });

const { REDIS_URL, QUEUE_NAME } = z
  .object({
    REDIS_URL: z.string().default("redis://127.0.0.1:6379"),
    QUEUE_NAME: z.string().default("robot"),
  })
  .parse(process.env);

type Data = { url: string; body?: object };

export const client = () => {
  const NAME = "chrome";
  const queue = new Queue<Data>(QUEUE_NAME, REDIS_URL, {
    limiter: {
      max: 1, // Max number of jobs processed
      duration: 15000, // per duration in milliseconds
    },
  });

  const q = {
    async produce(
      data: Data,
      opts = {
        delay: seconds(1),
        // repeat: { cron: "1 10,22 * * *" },
      }
    ) {
      await queue.add(NAME, data, opts);
      return q;
    },
    process() {
      queue
        .on(
          "completed",
          async ({ id, name, data, opts, finishedOn }, returnvalue) => {
            console.log(["completed"], { id, name, data, opts, finishedOn });

            const jobs = await queue.getJobs(["completed", "active"]);

            const urls = jobs.map(({ data }) => data.url);

            console.log(urls);

            await EntrySchema.parseAsync({ id, data, returnvalue }).then(
              async ({ data, type, returnvalue }) => {
                if (type === Type.AUTOS) {
                  const { $count } = returnvalue.json;

                  return z
                    .object({
                      url: z.string(),
                      body: z
                        .object({
                          $match: z.object({}).passthrough(),
                          $skip: z.number(),
                          $limit: z.number(),
                        })
                        .transform(({ $skip, $limit, ...body }) => ({
                          ...body,
                          $skip: $skip + $limit,
                          $limit,
                        })),
                    })
                    .parseAsync(data)
                    .then((data) =>
                      data.body.$skip < $count.$total ? q.produce(data) : null
                    );
                } else if (type === Type.OTODOM) {
                  const { items } =
                    returnvalue.json.props.pageProps.data?.searchAds || {};
                  return (
                    items &&
                    Promise.resolve(
                      items
                        .map(({ slug }) => ({
                          url: `${new URL(data.url).origin}/pl/oferta/${slug}`,
                        }))
                        .filter(({ url }) => !urls.includes(url))
                        .slice(0, 15)
                    )
                      .then((list) => (console.log({ list }), list))
                      .then((list) =>
                        Promise.all(list.map((data) => q.produce(data)))
                      )
                  );
                } else if (type === Type.PROMO) {
                  return Promise.resolve(
                    returnvalue.json.list
                      .map((data) => ({ ...data, url: data.href }))
                      .filter(({ url }) => new RegExp("//promocje.").test(url))
                      .filter(({ url }) => !urls.includes(url))
                      .slice(0, 15)
                  )
                    .then((list) => (console.log({ list }), list))
                    .then((list) =>
                      Promise.all(list.map((data) => q.produce(data)))
                    );
                } else if (type === Type.RATES) {
                  return Promise.resolve(returnvalue.json)
                    .then(({ date }: { date: string }) =>
                      format(
                        sub(new Date(date), {
                          days: 1,
                        }),
                        "yyyy-MM-dd"
                      )
                    )
                    .then((date) => {
                      if (
                        date <
                        format(
                          sub(new Date(), {
                            days: 7,
                          }),
                          "yyyy-MM-dd"
                        )
                      ) {
                        return [];
                      }
                      const url = new URL(data.url);
                      url.searchParams.set("date", date);
                      return [{ url: url.toString() }]
                        .filter(({ url }) => !urls.includes(url))
                        .filter(({ url }) => !urls.includes(url));
                    })
                    .then((list) => (console.log({ list }), list))
                    .then((list) =>
                      Promise.all(list.map((data) => q.produce(data)))
                    );
                }
              }
            );
          }
        )
        .process(NAME, async function (job) {
          const { data } = job;

          console.log(["process"], NAME, data);
          await job.log(`process ${NAME}`);
          await job.progress(50);

          const returnvalue = data.body
            ? await fetch(data.url, {
                method: "post",
                body: JSON.stringify(data.body),
              }).then(
                async (res) =>
                  ({ url: data.url, json: await res.json() } as {
                    url: string;
                    html?: string | undefined;
                    json?: object | undefined;
                  })
              )
            : await chrome(data.url);

          await job.progress(100);

          if (returnvalue.html && returnvalue.url !== data.url) {
            console.log(["failure"], NAME);
            throw new Error(`Invalid response url: ${returnvalue.url}`);
          }

          console.log(["success"], NAME);
          await job.log(`success ${NAME}`);

          return returnvalue;
        });

      return q;
    },
    close() {
      return queue.close();
    },
    queue,
  };

  return q;
};

export const broker = async (
  url = "https://zimekk.github.io/robot/",
  ...args: string[]
) => {
  console.log(["broker"], url, ...args);

  const worker = client();
  await worker.produce({ url });
  await worker.close().then(() => console.log(["close"]));
};

export const chrome = async (...args: string[]) =>
  (await import("@dev/chrome")).chrome(...args);

export const router = () => {
  const BASE_PATH = "/board";

  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath(BASE_PATH);

  const worker = client();

  worker.process();

  createBullBoard({
    queues: [new BullAdapter(worker.queue)],
    serverAdapter,
  });

  return Router()
    .post("/process", json(), async (req, res) => {
      const { data, opts } = await z
        .object({
          data: z.object({
            url: z.string(),
            body: z.object({}).passthrough().optional(),
          }),
          opts: z
            .object({
              delay: z.number().default(0),
              repeat: z
                .object({
                  cron: z.string().optional(),
                })
                .optional(),
            })
            .optional(),
        })
        .parseAsync(req.body);

      await worker.produce(data, opts);

      return res.json({ status: "ok" });
    })
    .post("/entries", json(), async (req, res) =>
      z
        .object({
          start: z.number().default(0),
          limit: z.number().default(250),
          data: z.boolean().default(false),
          returnvalue: z.boolean().default(true),
        })
        .parseAsync(req.body)
        .then(async ({ start, limit, data }) => {
          const list = await worker.queue.getCompleted(
            start,
            start + limit - 1
          );
          if (data) {
            return z
              .object({
                id: z.string(),
                data: z.object({
                  url: z.string(),
                }),
              })
              .array()
              .parseAsync(list);
          }
          return EntrySchema.array().parseAsync(list);
        })
        .then((entries) => res.json(entries))
    )
    .get("/entry/:id", async (req, res) =>
      Promise.resolve(req.params).then(({ id }) =>
        worker.queue
          .getJob(id)
          .then((item) => EntrySchema.parseAsync(item))
          .then((json) => res.send(json))
      )
    )
    .get("/:type/:id/", async (req, res) =>
      Promise.resolve(req.params).then(({ id, type = "" }) =>
        worker.queue
          .getJob(id)
          .then((job) =>
            z
              .union([
                z.null(),
                z.object({
                  id: z.string(),
                  name: z.string(),
                  data: z.any(),
                  returnvalue: z.any(),
                }),
              ])
              .parseAsync(job)
          )
          .then((item) => (item ? item.returnvalue[type] || item : null))
          .then((json) => (type === "html" ? res.send(json) : res.json(json)))
      )
    )
    .post("/cleanup", async (_req, res) => {
      const queue = worker.queue;
      await Promise.all(
        (
          await queue.getRepeatableJobs()
        ).map(
          async ({ key }) =>
            Boolean(console.log(["cleanup"], { key })) ||
            (await queue.removeRepeatableByKey(key))
        )
      );
      return res.json({ status: "ok" });
    })
    .use(BASE_PATH, serverAdapter.getRouter());
};

export const status = async (...args: string[]) => {
  console.log(["status"], ...args);

  const queue = client().queue;

  await queue.getCompleted().then((jobs) =>
    console.log(
      ["getCompleted"],
      jobs.map(({ id, name, data, returnvalue }) => ({
        id,
        name,
        data,
        returnvalue,
      }))
    )
  );

  await queue
    .whenCurrentJobsFinished()
    .then(() => console.log(["whenCurrentJobsFinished"]));

  await queue.close().then(() => console.log(["close"]));
};

export const worker = async () => {
  console.log(["worker"]);

  client().process();
};
