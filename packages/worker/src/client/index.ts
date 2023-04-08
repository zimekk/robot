import Queue from "bull";
import { fetch } from "cross-fetch";
import { format, sub } from "date-fns";
import { config } from "dotenv";
import { headingDistanceTo } from "geolocation-utils";
import { days, seconds } from "milliseconds";
import { resolve } from "path";
import { z } from "zod";
import { CompletedSchema, EntrySchema, Type } from "@dev/schema";

config({ path: resolve(__dirname, "../../../.env") });

const { REDIS_URL, QUEUE_NAME } = z
  .object({
    REDIS_URL: z.string().default("redis://127.0.0.1:6379"),
    QUEUE_NAME: z.string().default("robot"),
  })
  .parse(process.env);

type Data = { url: string; body?: object };

export const AutosSchema = z
  .object({
    data: z.object({
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
    }),
    returnvalue: z.object({
      json: z.object({
        $count: z.object({
          $total: z.number(),
        }),
        $list: z
          .object({
            id: z.number(),
          })
          .array(),
      }),
    }),
  })
  .transform(
    ({
      data,
      returnvalue: {
        json: { $count, $list },
      },
    }) => ({
      next: data.body.$skip < $count.$total ? data : null,
      list: $list.map(({ id }) => ({
        url: data.url.replace(/\/search$/, `/vehicle/${id}/`),
      })),
    })
  );

export const limiter = (jobs: unknown, period: number) => {
  const Schema = CompletedSchema.transform(
    ({ timestamp, url }) =>
      `${format(timestamp - (timestamp % period), "yyyyMMdd_HHmmss")}:${url}`
  );

  const urls = Schema.array().parse(jobs);
  console.log(urls);

  return (data: unknown) => !urls.includes(Schema.parse({ data }));
};

export const chrome = async (...args: string[]) =>
  (await import("@dev/chrome")).chrome(...args);

export const client = () => {
  const NAME = "chrome";
  const queue = new Queue<Data>(QUEUE_NAME, REDIS_URL, {
    limiter: {
      max: 1, // Max number of jobs processed
      duration: seconds(15), // per duration in milliseconds
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

            await EntrySchema.parseAsync({ id, data, returnvalue })
              .then(async ({ data, type, returnvalue }) => {
                if (type === Type.AUTOS) {
                  return AutosSchema.parseAsync({
                    data,
                    type,
                    returnvalue,
                  }).then(({ list, next }) =>
                    list
                      .filter(limiter(jobs, days(7)))
                      .slice(0, 150)
                      .concat(next ? [next] : [])
                  );
                } else if (type === Type.AUTOS_ITEM) {
                  return require("@dev/vehicles/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.HOTSHOT) {
                  return require("@dev/shots/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.OTODOM) {
                  const { items = [] } =
                    returnvalue.json.props?.pageProps.data?.searchAds || {};
                  return Promise.resolve(
                    items
                      .map(({ slug }) => ({
                        url: `${new URL(data.url).origin}/pl/oferta/${slug}`,
                      }))
                      .filter(limiter(jobs, days(7)))
                      .slice(0, 150)
                  );
                } else if (type === Type.OTOMOTO) {
                  return require("@dev/moto/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                  // const { list = [] } =
                  //   returnvalue.json.props?.pageProps.urqlState || {};
                  // return Promise.resolve(
                  //   list
                  //     .map(({ url }) => ({
                  //       url,
                  //     }))
                  //     .filter(limiter(jobs, days(7)))
                  //     .slice(0, 150)
                  // );
                } else if (type === Type.DEPOT) {
                  return require("@dev/depots/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.PLOTS) {
                  return require("@dev/plots/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.PRODUCTS2) {
                  return require("@dev/products/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.ROSSM) {
                  return require("@dev/rossm/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.SALOM) {
                  return require("@dev/salom/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.THULE) {
                  return require("@dev/thule/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
                } else if (type === Type.PROMO) {
                  return Promise.resolve(
                    returnvalue.json.list
                      .map((data) => ({ ...data, url: data.href }))
                      .filter(
                        ({ url }) => url && new RegExp("//promocje.").test(url)
                      )
                      .filter(limiter(jobs, days(3)))
                  );
                } else if (type === Type.PROMO_ITEM) {
                  return require("@dev/promo/api")
                    .update(id, data, returnvalue)
                    .then(() => []);
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
                      return [{ url: url.toString() }].filter(
                        limiter(jobs, days(7))
                      );
                    });
                } else if (type === Type.STATIONS) {
                  const { url } = data;
                  return Promise.resolve(
                    returnvalue.json
                      .map((data: { station_id: string }) => ({
                        ...data,
                        url: `${
                          new URL(url).origin
                        }/ac-ajax/stations-get-station?station_id=${
                          data.station_id
                        }`,
                      }))
                      .filter(
                        ({ x: lat, y: lng }: { x: number; y: number }) =>
                          [
                            `${52.17}:${21.06}:${10000}`,
                            `${52.46}:${21.29}:${10000}`,
                            `${53.12}:${23.09}:${10000}`,
                          ]
                            .map((line) =>
                              z
                                .tuple([
                                  z.string().transform(Number),
                                  z.string().transform(Number),
                                  z.string().transform(Number),
                                ])
                                .transform(([lat, lng, $radius]) => ({
                                  $center: { lat, lng },
                                  $radius,
                                }))
                                .parse(line.split(":"))
                            )
                            .findIndex(
                              ({ $center, $radius }) =>
                                headingDistanceTo($center, { lat, lng })
                                  .distance < $radius
                            ) >= 0
                      )
                      .filter(limiter(jobs, days(1)))
                  );
                }
                return [];
              })
              .then((list) =>
                Promise.all(
                  list.map((data: { url: string }) => q.produce(data))
                )
              )
              .catch(console.error);
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
