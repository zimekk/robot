import fetch from "cross-fetch";
import { Router } from "express";
import { diffString } from "json-diff";
import { z } from "zod";
import { query } from "@dev/sql";
import { DiffSchema, Schema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router()
    .get("/rossm/assets/delete", (req, res, next) =>
      query("DELETE FROM rossm_asset WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next),
    )
    .get("/rossm/assets", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query(
            "SELECT * FROM rossm_asset ORDER BY created DESC LIMIT $1 OFFSET $2",
            [limit, start],
          ),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/rossm/assets/:id/:name", (req, res, next) =>
      query("SELECT type, blob FROM rossm_asset WHERE id=$1", [req.params.id])
        .then((data) => data.rows[0])
        .then(({ type, blob }) => res.type(type).end(blob))
        .catch(next),
    )
    .get("/rossm/{:item}", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          req.params.item
            ? query(
                "SELECT * FROM rossm WHERE item=$3 ORDER BY created DESC LIMIT $1 OFFSET $2",
                [limit, start, req.params.item],
              )
            : query(
                "SELECT * FROM rossm ORDER BY created DESC LIMIT $1 OFFSET $2",
                [limit, start],
              ),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/rossm/delete", (req, res, next) =>
      query("DELETE FROM rossm WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next),
    );

const assets = async (list: string[]) =>
  list.reduce(
    (result, item) =>
      result.then(async (list) => {
        const blob = await fetch(
          new URL(item, "https://localhost").toString(),
        ).then((res) => res.blob());
        console.log({ blob });
        const arrayBuffer = await blob.arrayBuffer();
        await query(
          "INSERT INTO rossm_asset (item, type, size, blob) VALUES ($1, $2, $3, $4)",
          [item, blob.type, blob.size, Buffer.from(arrayBuffer)],
        );
      }),
    Promise.resolve(),
  );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown },
) =>
  Schema.transform(({ json: list }) =>
    list.reduce(
      (result, item) =>
        result.then(async () => {
          if (!item) return;
          const { id } = item;
          console.log({ id, item });
          const result = await query(
            "SELECT * FROM rossm WHERE item=$1 ORDER BY created DESC LIMIT 1",
            [id],
          );
          if (result.rowCount && result.rowCount > 0) {
            const { id, data } = result.rows[0];
            const diff = diffString(
              DiffSchema.parse(data),
              DiffSchema.parse(item),
            );
            console.info({ id, diff });
            if (!diff) {
              await query(
                "UPDATE rossm SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                [id],
              );
              return;
            }
            // await query(
            //   "UPDATE rossm SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
            //   [item, id]
            // );
            // return;
          }
          await query("INSERT INTO rossm (item, data) VALUES ($1, $2)", [
            id,
            item,
          ]);
          await assets(item.pictures.slice(0, 3).map((item) => item.small));
        }),
      Promise.resolve(),
    ),
  ).parseAsync({ json });
