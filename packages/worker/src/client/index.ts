import Queue from "bull";
import { fetch } from "cross-fetch";
import { config } from "dotenv";
import { seconds } from "milliseconds";
import { resolve } from "path";
import { z } from "zod";
import { Type, getTypeByUrl } from "@dev/schema";
import parse, { type Data } from "./parse";

config({ path: resolve(__dirname, "../../../.env") });

const { REDIS_URL, QUEUE_NAME } = z
  .object({
    REDIS_URL: z.string().default("redis://127.0.0.1:6379"),
    QUEUE_NAME: z.string().default("robot"),
  })
  .parse(process.env);

async function fetchWithTimeout(url: string, options: object) {
  // https://github.com/node-fetch/node-fetch#request-cancellation-with-abortsignal
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, seconds(30));

  try {
    console.log(["fetch"], { url });
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export { parse };

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
        // repeat: { cron: "1 10,22 * * *" },
      },
    ) {
      await queue.add(NAME, data, {
        attempts: 1, // 5 - If job fails it will retry till 5 times
        backoff: seconds(10), // 5000 - static 5 sec delay between retry
        delay: seconds(1),
        ...opts,
      });
      return q;
    },
    process() {
      queue
        .on(
          "completed",
          async ({ id, name, data, opts, finishedOn }, returnvalue) => {
            console.log(["completed"], { id, name, data, opts, finishedOn });

            const jobs = await queue.getJobs(["completed", "active"]);

            parse({ id, data, returnvalue }, { jobs })
              .then((list) =>
                list.reduce(
                  (promise: Promise<any>, data: { url: string }) =>
                    promise.then(() => q.produce(data)),
                  Promise.resolve(),
                ),
              )
              .catch(console.error);
          },
        )
        .process(NAME, async function (job) {
          const { data } = job;

          await job.log(`process ${NAME}`);
          await job.progress(50);

          const type = getTypeByUrl(data.url);

          console.log(["process"], NAME, data, type);

          const returnvalue = await (
            {
              // [Type.EURO]: async () =>
              //   await fetchWithTimeout(data.url, {
              //     headers: {},
              //   }).then(async (res) => {
              //     if (res.url !== data.url) {
              //       throw new Error(`Invalid response url: ${res.url}`);
              //     }
              //     return { url: data.url, json: await res.json() } as {
              //       url: string;
              //       html?: string | undefined;
              //       json?: object | undefined;
              //     };
              //   }),
              [Type.ROADS]: async () =>
                await fetchWithTimeout(data.url, {
                  headers: {},
                }).then(async (res) => {
                  if (res.url !== data.url) {
                    throw new Error(`Invalid response url: ${res.url}`);
                  }
                  return { url: data.url, json: await res.json() } as {
                    url: string;
                    html?: string | undefined;
                    json?: object | undefined;
                  };
                }),
              [Type.STATUS]: async () =>
                require("@dev/status/api").status(data),
              [Type.STOCK]: async () =>
                await fetchWithTimeout(data.url, {
                  method: "post",
                  body: JSON.stringify(data.body),
                  headers: data.url.match("bmw.cloud/similarity")
                    ? {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "x-api-key": "XW2bOyFf6gteDp3GZ3QonjkDoWMFylG5s0FInTCD",
                      }
                    : {},
                }).then(async (res) => {
                  if (res.url !== data.url) {
                    throw new Error(`Invalid response url: ${res.url}`);
                  }
                  return { url: data.url, json: await res.json() } as {
                    url: string;
                    html?: string | undefined;
                    json?: object | undefined;
                  };
                }),
            }[type] ||
            (async () =>
              await chrome(data.url).then((returnvalue) => {
                if (returnvalue.html && returnvalue.url !== data.url) {
                  console.log(["failure"], NAME);
                  throw new Error(`Invalid response url: ${returnvalue.url}`);
                }
                return returnvalue;
              }))
          )();

          await job.progress(100);

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
