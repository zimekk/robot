import { Router } from "express";
import { z } from "zod";
import { query } from "@dev/sql";
import { ListSchema } from "../schema";

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
            ORDER BY created DESC LIMIT $1 OFFSET $2`,
            [limit, start]
          )
            .then((data) => data.rows)
            .then((list) => (parse ? ListSchema.parseAsync(list) : list))
        )
        .then((result) => res.json({ result }))
        .catch(next)
    )
    .get("/prods/delete", (req, res, next) => res.json({ status: "ok" }));
