import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

// yarn workspace @dev/sql run migrate create create thule
// yarn workspace @dev/sql run migrate:up

export const router = () =>
  Router()
    .get("/thule", (_req, res, next) =>
      query("select * from thule", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/thule/delete", (req, res, next) =>
      query("delete from thule where id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: any
) =>
  Schema.transform(
    ({ json: products }) => (
      console.log({ products }),
      products.reduce(
        (result, item) =>
          result.then(async () => {
            const result = await query("select id from thule where id=$1", [
              item.ProductId,
            ]);
            if (result.rowCount === 0) {
              const result = await query(
                "insert into thule (id, data) values ($1, $2)",
                [item.ProductId, item]
              );
            }
          }),
        Promise.resolve()
      )
    )
  ).parseAsync({ json });
