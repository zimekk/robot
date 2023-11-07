import { Router } from "express";
import { diffString } from "json-diff";
import { z } from "zod";
import { query } from "@dev/sql";
import { Schema, DiffSchema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router()
    .get("/euro", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query("SELECT * FROM euro ORDER BY created DESC LIMIT $1 OFFSET $2", [
            limit,
            start,
          ]),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/euro/delete", (req, res, next) =>
      query("DELETE FROM euro WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next),
    );

export const getNextPage = (
  url: string,
  { productsCount }: { productsCount: number },
) => {
  const u = new URL(url);
  const { startFrom, numberOfItems } = Object.fromEntries(
    u.searchParams.entries(),
  );
  const nextStartIndex = Number(startFrom) + Number(numberOfItems);

  if (nextStartIndex < Math.min(productsCount, 120)) {
    u.searchParams.set("startFrom", String(nextStartIndex));
    return u.toString();
  }
  return "";
};

export const update = async (
  _id: string | number,
  data: { url: string },
  { json }: { json: unknown },
) =>
  Schema.transform(({ json: { productsCount, results } }) =>
    results
      .reduce(
        (result, item) =>
          result.then(async () => {
            const {
              identifiers: { plu: id },
            } = item;
            console.log({ id, item });
            const result = await query(
              "SELECT * FROM euro WHERE item=$1 ORDER BY created DESC LIMIT 1",
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
                  "UPDATE euro SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                  [id],
                );
                return;
              }
              // await query(
              //   "UPDATE euro SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
              //   [item, id]
              // );
              // return;
            }
            await query("INSERT INTO euro (item, data) VALUES ($1, $2)", [
              id,
              item,
            ]);
          }),
        Promise.resolve(),
      )
      .then(() => {
        const nextPage = getNextPage(data.url, { productsCount });
        console.log({ productsCount, nextPage });
        return nextPage ? [{ ...data, url: nextPage }] : [];
      }),
  ).parseAsync({ json });
