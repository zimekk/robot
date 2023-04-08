import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/depots", (_req, res, next) =>
      query("select * from depots", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/depots/insert", (_req, res, next) =>
      query("insert into depots (json) values ($1)", [{ test: { key: 2 } }])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    )
    .get("/depots/delete", (req, res, next) =>
      query("delete from depots where id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown }
) =>
  Schema.parseAsync({ json }).then(({ json }) =>
    json.listing.listing.ads.reduce(
      (result, item) =>
        result.then(async () => {
          // https://node-postgres.com/features/types#uuid--json--jsonb
          // https://itnext.io/storing-json-in-postgres-using-node-js-c8ff50337013
          // https://jaredpogi.medium.com/how-safely-upsert-in-postgresql-with-nodejs-44487b5aa90d
          const result = await query("select id from depots where id=$1", [
            item.id,
          ]);
          if (result.rowCount === 0) {
            await query("insert into depots (id, json) values ($1, $2)", [
              item.id,
              item,
            ]);
            // return notify(id, data);
          }
        }),
      Promise.resolve()
    )
  );
