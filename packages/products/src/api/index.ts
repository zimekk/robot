import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/products", (_req, res, next) =>
      query("select * from products", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/products/delete", (req, res, next) =>
      query("delete from products where id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  id: string | number,
  data: { url: string },
  { json }: any
) =>
  Schema.parseAsync({ json }).then(({ json }) =>
    Object.values(json.app.products).reduce(
      (result, item) =>
        result.then(async () => {
          const result = await query("select id from products where id=$1", [
            item.id,
          ]);
          if (result.rowCount === 0) {
            const result = await query(
              "insert into products (id, json) values ($1, $2)",
              [item.id, item]
            );
          }
        }),
      Promise.resolve()
    )
  );
