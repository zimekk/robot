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
    .get("/flats", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query(
            "SELECT * FROM flats ORDER BY created DESC LIMIT $1 OFFSET $2",
            [limit, start]
          )
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next)
    )
    .get("/flats/delete", (req, res, next) =>
      query("DELETE FROM flats WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown }
) =>
  Schema.transform(
    ({
      json: {
        listing: {
          listing: { ads },
        },
      },
    }) =>
      ads.reduce(
        (result, item) =>
          result.then(async () => {
            const { id } = item;
            console.log({ id, item });
            const result = await query(
              "SELECT * FROM flats WHERE item=$1 ORDER BY created DESC LIMIT 1",
              [id]
            );
            if (result.rowCount > 0) {
              const { id, data } = result.rows[0];
              const diff = diffString(
                DiffSchema.parse(data),
                DiffSchema.parse(item)
              );
              console.info({ id, diff });
              if (!diff) {
                await query(
                  "UPDATE flats SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                  [id]
                );
                return;
              }
              // await query(
              //   "UPDATE flats SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
              //   [item, id]
              // );
              // return;
            }
            await query("INSERT INTO flats (item, data) VALUES ($1, $2)", [
              id,
              item,
            ]);
          }),
        Promise.resolve()
      )
  ).parseAsync({ json });
