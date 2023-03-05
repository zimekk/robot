import { Router } from "express";
// import { query } from "@dev/sql";
import { Schema } from "../schema";

export const router = () =>
  Router()
    .get("/thule", async (_req, res) => {
      // const data = await query("select * from depots", []);

      return res.json({ result: [] });
    })
    .get("/thule/insert", async (_req, res) => {
      // const data = await query("insert into depots (json) values ($1)", [
      //   { test: { key: 2 } },
      // ]);
      // console.log(data);
      return res.json({ status: "ok" });
    })
    .get("/thule/delete", async (req, res) => {
      // const data = await query("delete from depots where id=$1", [
      //   req.query.id,
      // ]);
      // console.log(data);
      return res.json({ status: "ok" });
    });

export const update = async (
  _id: string | number,
  _data: { url: string },
  { json }: any
) => Schema.parseAsync({ json });
