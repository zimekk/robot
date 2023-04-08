import { Router } from "express";
import { diffString } from "json-diff";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/thule", (_req, res, next) =>
      query("SELECT * FROM thule ORDER BY created DESC", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/thule/delete", (req, res, next) =>
      query("DELETE FROM thule WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown }
) =>
  Schema.transform(({ json: products }) =>
    Object.values(products).reduce(
      (result, item) =>
        result.then(async () => {
          const { ProductId: id } = item;
          console.log({ id, item });
          const result = await query(
            "SELECT * FROM thule WHERE item=$1 ORDER BY created DESC LIMIT 1",
            [id]
          );
          if (result.rowCount > 0) {
            const { id, data } = result.rows[0];
            const diff = diffString(data, item);
            console.info({ id, diff });
            if (!diff) {
              await query(
                "UPDATE thule SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                [id]
              );
              return;
            }
            // await query(
            //   "UPDATE thule SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
            //   [item, id]
            // );
            // return;
          }
          await query("INSERT INTO thule (item, data) VALUES ($1, $2)", [
            id,
            item,
          ]);
        }),
      Promise.resolve()
    )
  ).parseAsync({ json });
