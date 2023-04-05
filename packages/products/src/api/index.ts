import { Router } from "express";
import { diffString } from "json-diff";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/products", (_req, res, next) =>
      query("select * from products order by created desc", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/products/delete", (req, res, next) =>
      query("delete from products where id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: any
) =>
  Schema.transform(
    ({
      json: {
        app: { products },
      },
    }) => (
      console.log({ products }),
      Object.values(products).reduce(
        (result, item) =>
          result.then(async () => {
            const result = await query(
              "select * from products where item=$1 order by created desc limit 1",
              [item.id]
            );
            if (result.rowCount > 0) {
              console.info(diffString(result.rows[0].data, item));
            }
            if (
              result.rowCount === 0 ||
              diffString(result.rows[0].data, item)
            ) {
              const result = await query(
                "insert into products (item, data) values ($1, $2)",
                [item.id, item]
              );
            }
          }),
        Promise.resolve()
      )
    )
  ).parseAsync({ json });
