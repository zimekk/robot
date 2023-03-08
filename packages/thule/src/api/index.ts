import { Router } from "express";
import { query } from "@dev/sql";
import { Schema } from "../schema";

// yarn workspace @dev/sql run migrate create create thule
// yarn workspace @dev/sql run migrate:up

export const router = () =>
  Router()
    .get("/thule", async (_req, res) => {
      const data = await query("select * from thule", []);

      return res.json({ result: data.rows });
    })
    .get("/thule/delete", async (req, res) => {
      const data = await query("delete from thule where id=$1", [req.query.id]);
      console.log(data);
      return res.json({ status: "ok" });
    });

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: any
) =>
  Schema.transform(
    ({ json: products }) => (
      console.log({ products }),
      products.reduce(
        (result, item) =>
          result.then(async () => {
            const result = await query("select id from thule where id=$1", [
              item.ProductId,
            ]);
            if (result.rowCount === 0) {
              const result = await query(
                "insert into thule (id, data) values ($1, $2)",
                [item.ProductId, item]
              );
            }
          }),
        Promise.resolve()
      )
    )
  ).parseAsync({ json });
