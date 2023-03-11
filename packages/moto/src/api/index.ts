import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

// yarn workspace @dev/sql run migrate create create moto
// yarn workspace @dev/sql run migrate:up

export const router = () =>
  Router()
    .get("/moto", (_req, res, next) =>
      query("select * from moto", [])
        .then((data) => res.json({ result: data.rows }))
        .catch(next)
    )
    .get("/moto/delete", async (req, res, next) =>
      query("delete from moto where id=$1", [req.query.id])
        .then((_data) => res.json({ status: "ok" }))
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
      list.reduce(
        (result, item) =>
          result.then(async () => {
            const result = await query("select id from moto where id=$1", [
              item.id,
            ]);
            if (result.rowCount === 0) {
              const result = await query(
                "insert into moto (id, data) values ($1, $2)",
                [item.id, item]
              );
            }
          }),
        Promise.resolve()
      )
    )
  ).parseAsync({ json });
