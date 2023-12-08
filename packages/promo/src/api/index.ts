import { Router } from "express";
import { diffString } from "json-diff";
import { z } from "zod";
import { query } from "@dev/sql";
import { Schema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router()
    .get("/promo", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query(
            "SELECT * FROM promo ORDER BY created DESC LIMIT $1 OFFSET $2",
            [limit, start],
          ),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/promo/v2", (req, res, next) =>
      PagerSchema.extend({
        ilike: z.string().default(""),
        orderBy: z.enum(["date_start", "price"]).default("date_start"),
      })
        .parseAsync(req.query)
        .then(({ start, limit, ilike, orderBy }) =>
          query(
            `SELECT
              g.general, product
            FROM
              promo,
              jsonb_to_record(data) g(general jsonb),
              jsonb_array_elements(data->'products') product
            WHERE product->>'name' ILIKE '%' || $3 || '%'
            ${
              {
                date_start: `ORDER BY general->'date_start' DESC`,
                price: `ORDER BY product->'price'`,
              }[orderBy]
            }
            LIMIT $1 OFFSET $2`,
            [limit, start, ilike],
          ),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/promo/delete", (req, res, next) =>
      query("DELETE FROM promo WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next),
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown },
) =>
  Schema.transform(({ json: { data } }) =>
    [data].reduce(
      (result, item) =>
        result.then(async () => {
          const {
            general: { id },
          } = item;
          console.log({ id, item });
          const result = await query(
            "SELECT * FROM promo WHERE item=$1 ORDER BY created DESC LIMIT 1",
            [id],
          );
          if (result.rowCount && result.rowCount > 0) {
            const { id, data } = result.rows[0];
            const diff = diffString(data, item);
            console.info({ id, diff });
            if (!diff) {
              await query(
                "UPDATE promo SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                [id],
              );
              return;
            }
            // await query(
            //   "UPDATE promo SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
            //   [item, id]
            // );
            // return;
          }
          await query("INSERT INTO promo (item, data) VALUES ($1, $2)", [
            id,
            item,
          ]);
        }),
      Promise.resolve(),
    ),
  ).parseAsync({ json });
