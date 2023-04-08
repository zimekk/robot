import { Router } from "express";
// import { notify } from "@dev/notify";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/plots", (_req, res, next) =>
      query("select * from plots", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/plots/insert", (_req, res, next) =>
      query("insert into plots (json) values ($1)", [{ test: { key: 2 } }])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    )
    .get("/plots/delete", (req, res, next) =>
      query("delete from plots where id=$1", [req.query.id])
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
          const result = await query("select id from plots where id=$1", [
            item.id,
          ]);
          if (result.rowCount === 0) {
            await query("insert into plots (id, json) values ($1, $2)", [
              item.id,
              item,
            ]);
            // return notify(id, data);
          }
        }),
      Promise.resolve()
    )
  );
