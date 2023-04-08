import { Router } from "express";
import { diffString } from "json-diff";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/funds", (_req, res, next) =>
      query("SELECT * FROM funds ORDER BY created DESC", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/funds/delete", (req, res, next) =>
      query("DELETE FROM funds WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

const DiffSchema = Schema.shape.json.omit({ objects: true });

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown }
) =>
  Schema.transform(({ json: item }) =>
    [item].reduce(
      (result, item) =>
        result.then(async () => {
          const {
            meta: { id },
          } = item;
          console.log({ id, item });
          const result = await query(
            "SELECT * FROM funds WHERE item=$1 ORDER BY created DESC LIMIT 1",
            [id]
          );
          if (result.rowCount > 0) {
            const { id, data } = result.rows[0];
            const diff = diffString(
              DiffSchema.parse(data),
              DiffSchema.parse(item)
            );
            console.info({ id, diff });
            if (!diff) {
              await query(
                "UPDATE funds SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                [id]
              );
              return;
            }
            // await query(
            //   "UPDATE funds SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
            //   [item, id]
            // );
            // return;
          }
          await query("INSERT INTO funds (item, data) VALUES ($1, $2)", [
            id,
            item,
          ]);
        }),
      Promise.resolve()
    )
  ).parseAsync({ json });
