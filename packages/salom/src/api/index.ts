import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

// yarn workspace @dev/sql run migrate create create rossm
// yarn workspace @dev/sql run migrate:up

export const router = () =>
  Router()
    .get("/salom", (_req, res, next) =>
      query("select * from rossm", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/salom/delete", (req, res, next) =>
      query("delete from rossm where id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: any
) =>
  Schema.transform(
    ({ json: list }) => (
      console.log({ list }),
      list
        .map((item) => ({ id: item.productInfo.articleNumber, ...item }))
        .reduce(
          (result, item) =>
            result.then(async () => {
              const result = await query("select id from rossm where id=$1", [
                item.id,
              ]);
              if (result.rowCount === 0) {
                const result = await query(
                  "insert into rossm (id, json) values ($1, $2)",
                  [item.id, item]
                );
              }
            }),
          Promise.resolve()
        )
    )
  ).parseAsync({ json });
