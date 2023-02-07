import { Router } from "express";
import { notify } from "@dev/notify";
import { query } from "@dev/sql";
import { Schema } from "./schema";

export const router = () =>
  Router()
    .get("/plots", async (_req, res) => {
      const data = await query("select * from plots", []);

      return res.json({ result: data.rows });
    })
    .get("/plots/insert", async (_req, res) => {
      const data = await query("insert into plots (json) values ($1)", [
        { test: { key: 2 } },
      ]);
      console.log(data);
      return res.json({ status: "ok" });
    })
    .get("/plots/delete", async (req, res) => {
      const data = await query("delete from plots where id=$1", [req.query.id]);
      console.log(data);
      return res.json({ status: "ok" });
    });

export const update = async (
  id: string | number,
  data: { url: string },
  { json }: any
) =>
  Schema.parseAsync({ json }).then(({ json }) =>
    json.listing.listing.ads.reduce(
      (result, item) =>
        result.then(async () => {
          // https://node-postgres.com/features/types#uuid--json--jsonb
          // https://itnext.io/storing-json-in-postgres-using-node-js-c8ff50337013
          // https://jaredpogi.medium.com/how-safely-upsert-in-postgresql-with-nodejs-44487b5aa90d
          const result = await query("select id from plots where id=$1", [
            item.id,
          ]);
          if (result.rowCount === 0) {
            const result = await query(
              "insert into plots (id, json) values ($1, $2)",
              [item.id, item]
            );
            // return notify(id, data);
          }
        }),
      Promise.resolve()
    )
  );
