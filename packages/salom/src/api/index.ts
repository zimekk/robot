import { Router } from "express";
import { diffString } from "json-diff";
import { query } from "@dev/sql";
import { Schema } from "../schema";

// yarn workspace @dev/sql run migrate create create rossm
// yarn workspace @dev/sql run migrate:up

export const router = () =>
  Router()
    .get("/salom", (_req, res, next) =>
      query("select * from salom order by created desc", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/salom/delete", (req, res, next) =>
      query("delete from salom where id=$1", [req.query.id])
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
              const result = await query(
                "select * from salom where item=$1 order by created desc limit 1",
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
                  "insert into salom (item, data) values ($1, $2)",
                  [item.id, item]
                );
              }
            }),
          Promise.resolve()
        )
    )
  ).parseAsync({ json });
