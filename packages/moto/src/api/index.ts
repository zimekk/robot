import { Router } from "express";
import { z } from "zod";
import { query } from "@dev/sql";
import { Schema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router()
    .get("/moto", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query("SELECT * FROM moto ORDER BY created DESC LIMIT $1 OFFSET $2", [
            limit,
            start,
          ])
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next)
    )
    .get("/moto/delete", async (req, res, next) =>
      query("delete from moto where id=$1", [req.query.id])
        .then(() => res.json({ status: "ok" }))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown }
) =>
  Schema.transform(
    ({ json: list }) => (
      console.log({ list }),
      list.reduce(
        (result, item) =>
          result.then(async () => {
            const result = await query("select id from moto where id=$1", [
              item.id,
            ]);
            if (result.rowCount === 0) {
              await query("insert into moto (id, data) values ($1, $2)", [
                item.id,
                item,
              ]);
            }
          }),
        Promise.resolve()
      )
    )
  ).parseAsync({ json });
