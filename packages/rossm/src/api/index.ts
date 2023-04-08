import { Router } from "express";
import { diffString } from "json-diff";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/rossm", (_req, res, next) =>
      query("SELECT * FROM rossm ORDER BY created DESC", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/rossm/delete", (req, res, next) =>
      query("DELETE FROM rossm WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown }
) =>
  Schema.transform(({ json: list }) =>
    list.reduce(
      (result, item) =>
        result.then(async () => {
          const { id } = item;
          console.log({ id, item });
          const result = await query(
            "SELECT * FROM rossm WHERE item=$1 ORDER BY created DESC LIMIT 1",
            [id]
          );
          if (result.rowCount > 0) {
            const { id, data } = result.rows[0];
            const diff = diffString(data, item);
            console.info({ id, diff });
            if (!diff) {
              await query(
                "UPDATE rossm SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                [id]
              );
              return;
            }
            // await query(
            //   "UPDATE rossm SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
            //   [item, id]
            // );
            // return;
          }
          await query("INSERT INTO rossm (item, data) VALUES ($1, $2)", [
            id,
            item,
          ]);
        }),
      Promise.resolve()
    )
  ).parseAsync({ json });
