import { Router } from "express";
import { z } from "zod";
import { query } from "@dev/sql";
import { type Item, ListSchema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
  parse: z.coerce.number().default(1),
});

export const router = () =>
  Router()
    .get("/prods/history", (req, res, next) =>
      z
        .object({
          item: z.string(),
          parse: z.coerce.number().default(1),
        })
        .parseAsync(req.query)
        .then(({ item, parse }) =>
          z
            .tuple([z.enum(["xkom", "euro"]), z.string()])
            .parseAsync(item.split("-"))
            .then(([type, item]) =>
              query(
                {
                  xkom: `SELECT 'xkom-' || id AS id, 'xkom-' || item AS item, 'xkom' AS type, data, created, updated FROM products
            WHERE item=$1
            ORDER BY created DESC`,
                  euro: `SELECT 'euro-' || id AS id, 'euro-' || item AS item, 'euro' AS type, data, created, updated FROM euro
            WHERE item=$1
            ORDER BY created DESC`,
                }[type],
                [item],
              )
                .then((data) => data.rows)
                .then((list) =>
                  parse
                    ? ListSchema.parseAsync(list).then((list: Item[]) => list)
                    : list,
                ),
            ),
        )
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/prods", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit, parse }) =>
          query(
            `SELECT 'xkom-' || id AS id, 'xkom-' || item AS item, 'xkom' AS type, data, created, updated FROM products
            UNION SELECT 'euro-' || id, 'euro-' || item, 'euro', data, created, updated FROM euro
            UNION SELECT 'expert-' || id, 'expert-' || item, 'expert', data, created, updated FROM expert
            ORDER BY created DESC LIMIT $1 OFFSET $2`,
            [limit, start],
          )
            .then((data) => data.rows)
            .then((list) =>
              parse
                ? ListSchema.parseAsync(list).then((list: Item[]) => list)
                : list,
            ),
        )
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/prods/delete", (_req, res) => res.json({ status: "ok" }));
