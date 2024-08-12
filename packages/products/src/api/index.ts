import { Router } from "express";
import { diffString } from "json-diff";
import { z } from "zod";
import { query } from "@dev/sql";
import { DiffSchema, type PaginationState, Schema } from "../schema";

const PagerSchema = z.object({
  start: z.coerce.number().default(0),
  limit: z.coerce.number().default(100),
});

export const router = () =>
  Router()
    .get("/products", (req, res, next) =>
      PagerSchema.parseAsync(req.query)
        .then(({ start, limit }) =>
          query(
            "SELECT * FROM products ORDER BY created DESC LIMIT $1 OFFSET $2",
            [limit, start],
          ),
        )
        .then((data) => data.rows)
        .then((result) => res.json({ result }))
        .catch(next),
    )
    .get("/products/delete", (req, res, next) =>
      query("DELETE FROM products WHERE id=$1", [req.query.id])
        .then((data) => (console.log(data), res.json({ status: "ok" })))
        .catch(next),
    );

export const getNextPage = (
  url: string,
  { paginationState }: { paginationState: PaginationState },
) => {
  const { currentPage, totalPages } = paginationState;

  if (currentPage < totalPages) {
    const u = new URL(url);
    const page = String(currentPage + 1);
    const params = Object.assign(
      Array.from(u.searchParams.entries()).reduce(
        (params, [key, value]) => Object.assign(params, { [key]: value }),
        { page },
      ),
      { page },
    );
    return new URL(
      `${u.origin}${u.pathname}?${new URLSearchParams(params)}`,
    ).toString();
  }
  return "";
};

export const update = async (
  _id: string | number,
  { url }: { url: string },
  { json }: { json: unknown },
) =>
  Schema.transform(
    ({
      json: {
        app: {
          listing: { paginationState },
          products,
        },
      },
    }) =>
      Object.values(products)
        .reduce(
          (result, item) =>
            result.then(async () => {
              const { id } = item;
              console.log({ id, item });
              if (!item.featureSummary) {
                return;
              }
              const result = await query(
                "SELECT * FROM products WHERE item=$1 ORDER BY created DESC LIMIT 1",
                [id],
              );
              if (result.rowCount && result.rowCount > 0) {
                const { id, data } = result.rows[0];
                const diff = diffString(
                  DiffSchema.parse(data),
                  DiffSchema.parse(item),
                );
                if (!diff) {
                  await query(
                    "UPDATE products SET checked=CURRENT_TIMESTAMP WHERE id=$1",
                    [id],
                  );
                  return;
                }
                // await query(
                //   "UPDATE products SET updated=CURRENT_TIMESTAMP, data=$1 WHERE id=$2",
                //   [item, id]
                // );
                // return;
              }
              await query("INSERT INTO products (item, data) VALUES ($1, $2)", [
                id,
                item,
              ]);
            }),
          Promise.resolve(),
        )
        .then(() => {
          const nextPage = getNextPage(url, { paginationState });
          console.log({ paginationState, nextPage });
          return nextPage ? [{ url: nextPage }] : [];
        }),
  ).parseAsync({ json });
