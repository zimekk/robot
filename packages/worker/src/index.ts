import Queue from "bull";
import { json } from "body-parser";
import { config } from "dotenv";
import { Router } from "express";
import { seconds } from "milliseconds";
import { resolve } from "path";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { z } from "zod";

config({ path: resolve(__dirname, "../../../.env") });

const { REDIS_URL, QUEUE_NAME } = z
  .object({
    REDIS_URL: z.string().default("redis://127.0.0.1:6379"),
    QUEUE_NAME: z.string().default("robot"),
  })
  .parse(process.env);

const NAME = "task";

export const client = () => new Queue(QUEUE_NAME, REDIS_URL);

export const broker = async (number = "1", ...args: string[]) => {
  console.log(["broker"], number, ...args);

  const queue = client();

  await queue
    .add(
      NAME,
      {
        number: Number(number),
      },
      {
        delay: seconds(5),
        // repeat: { cron: "1 10,22 * * *" },
      }
    )
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue.close().then(() => console.log(["close"]));
};

export const chrome = async (...args: string[]) => {
  (await import("@dev/chrome")).chrome(...args);
};

export const router = () => {
  const BASE_PATH = "/board";
  const NAME = "chrome";

  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath(BASE_PATH);

  const queue = client();

  queue.process(NAME, async function ({ data }) {
    console.log(["process"], data);
    await chrome(data.url);
  });

  createBullBoard({
    queues: [new BullAdapter(queue)],
    serverAdapter,
  });

  return Router()
    .post("/process", json(), async (req, res) => {
      const { url } = req.body;
      console.log(req.body);

      await queue.add(
        NAME,
        {
          url,
        },
        {
          delay: seconds(5),
        }
      );

      return res.json({ status: "ok" });
    })
    .use(BASE_PATH, serverAdapter.getRouter());
};

export const status = async (...args: string[]) => {
  console.log(["status"], ...args);

  const queue = client();

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

  const queue = client();

  queue.process(NAME, async function ({ data }) {
    console.log(["process"], data);
    return data.number + 1;
  });
};
