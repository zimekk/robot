import { Router } from "express";
import { diffString } from "json-diff";
import { z } from "zod";
import { query } from "@dev/sql";
import { Schema, DiffSchema, ItemSchema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router()
    .get("/stock", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query(
            "SELECT * FROM stock ORDER BY created DESC LIMIT $1 OFFSET $2",
            [limit, start],
          ),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/stock/v1", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query(
            "SELECT * FROM stock ORDER BY created DESC LIMIT $1 OFFSET $2",
            [limit, start],
          ),
        )
        .then((data) => ItemSchema.array().parseAsync(data.rows))
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/stock/delete", (req, res, next) =>
      query("DELETE FROM stock WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next),
    );

export const getNextPage = (
  url: string,
  { totalCount }: { totalCount: number },
) => {
  const u = new URL(url);
  const { startIndex, maxResults } = Object.fromEntries(
    u.searchParams.entries(),
  );
  const nextStartIndex = Number(startIndex) + Number(maxResults);

  if (nextStartIndex < Math.min(totalCount, 120)) {
    u.searchParams.set("startIndex", String(nextStartIndex));
    return u.toString();
  }
  return "";
};

export const update = async (
  _id: string | number,
  data: { url: string },
  { json }: { json: unknown },
) =>
  Schema.transform(
    ({
      json: {
        hits = [],
        metadata: { totalCount },
      },
    }) =>
      hits
        .reduce(
          (result, { vehicle: item }) =>
            result.then(async () => {
              const { documentId: id } = item;
              console.log({ id, item });
              const result = await query(
                "SELECT * FROM stock WHERE item=$1 ORDER BY created DESC LIMIT 1",
                [id],
              );
              if (result.rowCount && result.rowCount > 0) {
                const { id, data } = result.rows[0];
                const diff = diffString(
                  DiffSchema.parse(data),
                  DiffSchema.parse(item),
                );
                console.info({ id, diff });
                if (!diff) {
                  await query(
                    "UPDATE stock SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                    [id],
                  );
                  return;
                }
                // await query(
                //   "UPDATE stock SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
                //   [item, id]
                // );
                // return;
              }
              await query("INSERT INTO stock (item, data) VALUES ($1, $2)", [
                id,
                item,
              ]);
            }),
          Promise.resolve(),
        )
        .then(() => {
          const nextPage = getNextPage(data.url, { totalCount });
          console.log({ totalCount, nextPage });
          return nextPage ? [{ ...data, url: nextPage }] : [];
        }),
  ).parseAsync({ json });
