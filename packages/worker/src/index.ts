import Queue from "bull";
import { json } from "body-parser";
import { config } from "dotenv";
import { Router } from "express";
import { seconds } from "milliseconds";
import { resolve } from "path";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { parse } from "node-html-parser";
import { z } from "zod";

config({ path: resolve(__dirname, "../../../.env") });

const { REDIS_URL, QUEUE_NAME } = z
  .object({
    REDIS_URL: z.string().default("redis://127.0.0.1:6379"),
    QUEUE_NAME: z.string().default("robot"),
  })
  .parse(process.env);

export const client = () => {
  const NAME = "chrome";
  const queue = new Queue(QUEUE_NAME, REDIS_URL, {
    limiter: {
      max: 1, // Max number of jobs processed
      duration: 15000, // per duration in milliseconds
    },
  });

  const q = {
    async produce(
      data: object,
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
          async ({ id, name, data, opts, finishedOn }, result) => {
            console.log(["completed"], { id, name, data, opts, finishedOn });
            // https://www.otodom.pl/pl/oferta/nowoczesny-dom-blisko-wkd-w-komorowie-ID4h6cW
            if (data.url.match("/oferty/sprzedaz/")) {
              const list = z
                .object({
                  props: z.object({
                    pageProps: z.object({
                      data: z.object({
                        searchAds: z.object({
                          items: z
                            .object({
                              id: z.number(),
                              slug: z.string(),
                            })
                            .array(),
                        }),
                      }),
                    }),
                  }),
                })
                .transform(({ props }) => props.pageProps.data.searchAds.items)
                .parse(
                  JSON.parse(
                    parse(result.html).querySelector("script#__NEXT_DATA__")
                      ?.text || "{}"
                  )
                )
                .map(
                  ({ slug }) => `${new URL(data.url).origin}/pl/oferta/${slug}`
                )
                .slice(0, 3);

              await Promise.all(list.map((url) => q.produce({ url })));
              console.log({ list });
            }
          }
        )
        .process(NAME, async function (job) {
          const { data } = job;

          console.log(["process"], NAME, data);
          await job.log(`process ${NAME}`);
          await job.progress(50);

          const returnValue = await chrome(data.url);

          console.log(["success"], NAME, returnValue);
          await job.log(`success ${NAME}`);
          await job.progress(100);

          return returnValue;
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
      console.log(req.body);

      await worker.produce(data, opts);

      return res.json({ status: "ok" });
    })
    .post("/entries", async (_req, res) => {
      const queue = worker.queue;
      const entries = await queue.getCompleted().then(
        z
          .object({
            id: z.string(),
            data: z.object({
              url: z.string(),
            }),
            returnvalue: z.object({
              html: z.any(),
              json: z.any(),
            }),
          })
          .array().parseAsync
      );
      return res.json(
        entries.map((item) =>
          item.returnvalue.html
            ? Object.assign(item, {
                returnvalue: {
                  // ...item.returnvalue,
                  json: JSON.parse(
                    parse(item.returnvalue.html).querySelector(
                      "script#__NEXT_DATA__"
                    )?.text || "{}"
                  ),
                },
              })
            : item
        )
        // .filter(({ returnvalue }) => !returnvalue.json.Message)
      );
    })
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
