import { json } from "body-parser";
import fetch from "cross-fetch";
import { Router } from "express";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";
import { z } from "zod";
import { DataSchema, EntrySchema, OptsSchema } from "@dev/schema";

import { chrome, client, parse } from "../client";

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
    .get("/shops/:id", json(), async (req, res, next) =>
      z
        .object({
          id: z.string(),
        })
        .parseAsync(req.params)
        .then(({ id }) =>
          z
            .object({
              areaName: z.string(),
            })
            .parseAsync(req.query)
            .then(
              ({ areaName }) =>
                `https://www.euro.com.pl/rest/api/products/${id}/shops?areaName=${encodeURIComponent(
                  areaName
                )}`
            )
            .then(
              (url) => (
                console.log(["fetch"], url),
                fetch(url).then((res) => res.json())
              )
            )
        )
        .then((json) => (console.log(json), res.json(json)))
        .catch(next)
    )
    .post("/scrap", json(), async (req, res, next) =>
      z
        .object({
          id: z.string(),
          data: DataSchema,
        })
        .parseAsync(req.body)
        .then(({ id, data }) =>
          (console.log(["scrap"], { data }), chrome(data.url))
            .then((returnvalue) => {
              if (returnvalue.html && returnvalue.url !== data.url) {
                throw new Error(`Invalid response url: ${returnvalue.url}`);
              }
              return returnvalue;
            })
            .then((returnvalue) => res.json({ id, data, returnvalue }))
        )
        .catch(next)
    )
    .post("/parse", json({ limit: "10mb" }), async (req, res, next) =>
      z
        .object({
          id: z.string(),
          data: DataSchema,
          returnvalue: z.unknown(),
        })
        .parseAsync(req.body)
        .then(
          ({ id, data, returnvalue }) => (
            console.log(["parse"], { data }),
            parse({ id, data, returnvalue }).then(() =>
              res.json({ status: "ok" })
            )
          )
        )
        .catch(next)
    )
    .post("/process", json(), async (req, res) => {
      const { data, opts } = await z
        .object({
          data: DataSchema,
          opts: OptsSchema.optional(),
        })
        .parseAsync(req.body);

      await worker.produce(data, opts);

      return res.json({ status: "ok" });
    })
    .post("/entries/delete", json(), async (req, res) =>
      z
        .object({
          selected: z.string().array(),
        })
        .parseAsync(req.body)
        .then(async ({ selected }) =>
          selected
            .reduce(
              (promise, id) => promise.then(() => worker.queue.removeJobs(id)),
              Promise.resolve()
            )
            .then(() => res.json({ status: "ok" }))
        )
    )
    .post("/entries", json(), async (req, res, next) =>
      z
        .object({
          start: z.number().default(0),
          limit: z.number().default(250),
          type: z.string().default(""),
          data: z.boolean().default(false),
          returnvalue: z.boolean().default(true),
        })
        .parseAsync(req.body)
        .then(async ({ start, limit, type, data }) => {
          const list = await worker.queue.getCompleted(
            start,
            start + limit - 1
          );
          return EntrySchema.array()
            .parseAsync(list)
            .then((list) =>
              list.filter((item) => type === "" || item.type === type)
            )
            .then((list) =>
              data
                ? z
                    .object({
                      id: z.string(),
                      data: DataSchema,
                      opts: OptsSchema.optional(),
                      type: z.string(),
                    })
                    .array()
                    .parseAsync(list)
                : list
            );
        })
        .then((entries) => res.json(entries))
        .catch(next)
    )
    .post("/delayed", json(), async (req, res) =>
      z
        .object({})
        .parseAsync(req.body)
        .then(async () => {
          const list = await worker.queue.getDelayed();
          return z.object({}).passthrough().array().parseAsync(list);
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
    .get("/delete/:id", async (req, res) =>
      Promise.resolve(req.params).then(({ id }) =>
        worker.queue.removeJobs(id).then(() => res.json({ status: "ok" }))
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
