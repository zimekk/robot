import cors from "cors";
import { config } from "dotenv";
import express, { Router } from "express";
import { createServer } from "http";
import { type AddressInfo } from "net";
import { dirname, resolve } from "path";
import { z } from "zod";

export const router = Router()
  .use("/api/data.json", (_req, res) => res.json({ hello: "Hello" }))
  .use(require("@dev/bikes/api").router())
  .use(require("@dev/depots/api").router())
  .use(require("@dev/dyson/api").router())
  .use(require("@dev/euro/api").router())
  .use(require("@dev/expert/api").router())
  .use(require("@dev/flats/api").router())
  .use(require("@dev/fuels/api").router())
  .use(require("@dev/funds/api").router())
  .use(require("@dev/gratka/api").router())
  .use(require("@dev/moto/api").router())
  .use(require("@dev/petro/api").router())
  .use(require("@dev/plots/api").router())
  .use(require("@dev/polling/api").router())
  .use(require("@dev/prods/api").router())
  .use(require("@dev/products/api").router())
  .use(require("@dev/promo/api").router())
  .use(require("@dev/props/api").router())
  .use(require("@dev/rates/api").router())
  .use(require("@dev/roads/api").router())
  .use(require("@dev/rossm/api").router())
  .use(require("@dev/rynek/api").router())
  .use(require("@dev/salom/api").router())
  .use(require("@dev/shots/api").router())
  .use(require("@dev/status/api").router())
  .use(require("@dev/stock/api").router())
  .use(require("@dev/taurus/api").router())
  .use(require("@dev/thule/api").router())
  .use(require("@dev/vehicles/api").router())
  .use(require("@dev/worker").router());

export const server = () => {
  const env = config({ path: resolve(__dirname, "../../../.env") });
  const { PORT: port } = z
    .object({
      PORT: z.string().default("8080").transform(Number),
    })
    .parse(env.parsed);

  const server = createServer(
    express()
      .use(cors({ origin: "*" }))
      .use(router)
      .use(
        express.static(
          resolve(dirname(require.resolve("@dev/web/package")), "public"),
        ),
      ),
  );
  server.listen({ port }, () => {
    const { port } = server.address() as AddressInfo;
    console.log(`Listening on port: ${port}`);
  });
};
