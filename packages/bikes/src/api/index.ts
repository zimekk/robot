import { Router } from "express";
// import { notify } from "@dev/notify";
import { z } from "zod";
import { query } from "@dev/sql";
import { PREFIX } from "../constants";
import { Schema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router().use(
    `/${PREFIX}`,
    Router()
      .get("/", (req, res, next) =>
        PagerSchema.parseAsync(req.query)
          .then(({ start, limit }) =>
            query(
              "SELECT * FROM bikes ORDER BY created DESC LIMIT $1 OFFSET $2",
              [limit, start],
            ),
          )
          .then((data) => data.rows)
          .then((result) => res.json({ result }))
          .catch(next),
      )
      .get("/delete", (req, res, next) =>
        query("delete from bikes where id=$1", [req.query.id])
          .then((data) => (console.log(data), res.json({ status: "ok" })))
          .catch(next),
      ),
  );

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: { json: unknown },
) =>
  Schema.transform(
    ({
      json: {
        listing: {
          listing: { ads: results },
        },
      },
    }) =>
      results
        .reduce(
          (result, item) =>
            result.then(async () => {
              const { id } = item;
              console.log({ id, item });
              const result = await query(
                "SELECT * FROM bikes WHERE item=$1 ORDER BY created DESC LIMIT 1",
                [id],
              );
              if (result.rowCount && result.rowCount > 0) {
                const { id } = result.rows[0];
                // const diff = diffString(data, item);
                // console.info({ id, diff });
                if (id) {
                  await query(
                    "UPDATE bikes SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                    [id],
                  );
                  return;
                }
                // await query(
                //   "UPDATE bikes SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
                //   [item, id]
                // );
                // return;
              }
              await query("INSERT INTO bikes (item, data) VALUES ($1, $2)", [
                id,
                item,
              ]);
            }),
          Promise.resolve(),
        )
        .then(() => []),
  ).parseAsync({ json });
