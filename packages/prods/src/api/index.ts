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
    .get("/prods", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit, parse }) =>
          query(
            `SELECT 'xkom-' || id AS id, 'xkom-' || item AS item, 'xkom' AS type, data, created, updated FROM products
            UNION SELECT 'euro-' || id, 'euro-' || item, 'euro', data, created, updated FROM euro
            UNION SELECT 'expert-' || id, 'expert-' || item, 'expert', data, created, updated FROM expert
            ORDER BY created DESC LIMIT $1 OFFSET $2`,
            [limit, start]
          )
            .then((data) => data.rows)
            .then((list) =>
              parse
                ? ListSchema.parseAsync(list).then((list: Item[]) => list)
                : list
            )
        )
        .then((result) => res.json({ result }))
        .catch(next)
    )
    .get("/prods/delete", (_req, res) => res.json({ status: "ok" }));
