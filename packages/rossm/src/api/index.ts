import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

// yarn workspace @dev/sql run migrate create create rossm
// yarn workspace @dev/sql run migrate:up

export const router = () =>
  Router()
    .get("/rossm", async (_req, res) => {
      const data = await query("select * from rossm", []);

      return res.json({ result: data.rows });
    })
    .get("/rossm/delete", async (req, res) => {
      const data = await query("delete from rossm where id=$1", [req.query.id]);
      console.log(data);
      return res.json({ status: "ok" });
    });

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
