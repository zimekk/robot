import { Router } from "express";
import { diffString } from "json-diff";
import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/shots", (_req, res, next) =>
      query("select * from shots order by created desc", [])
        .then((data) => (console.log(data), res.json({ result: data.rows })))
        .catch(next)
    )
    .get("/shots/delete", (req, res, next) =>
      query("delete from shots where id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next)
    );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: any
) =>
  Schema.transform(
    ({ json: item }) => (
      console.log({ item }),
      [item].reduce(
        (result, item) =>
          result.then(async () => {
            const { Id: id } = item;
            const result = await query(
              "SELECT * FROM shots WHERE item=$1 ORDER BY created DESC LIMIT 1",
              [id]
            );
            if (result.rowCount === 0) {
              await query("INSERT INTO shots (item, data) VALUES ($1, $2)", [
                id,
                item,
              ]);
            } else if (diffString(result.rows[0].data, item)) {
              console.info(diffString(result.rows[0].data, item));
              await query(
                "UPDATE shots SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
                [item, id]
              );
            } else {
              await query(
                "UPDATE shots SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                [id]
              );
            }
          }),
        Promise.resolve()
      )
    )
  ).parseAsync({ json });
