import { config } from "dotenv";
import express, { Router } from "express";
import { createServer } from "http";
import { AddressInfo } from "net";
import { dirname, resolve } from "path";
import { z } from "zod";
import { router as workerRouter } from "@dev/worker";

export const router = Router()
  .use("/api/data.json", (_req, res) => res.json({ hello: "Hello" }))
  .use(workerRouter());

export const server = () => {
  const env = config({ path: resolve(__dirname, "../../../.env") });
  const { PORT: port } = z
    .object({
      PORT: z.string().default("8080").transform(Number),
    })
    .parse(env.parsed);

  const server = createServer(
    express()
      .use(router)
      .use(
        express.static(
          resolve(dirname(require.resolve("@dev/web/package")), "public")
        )
      )
  );
  server.listen({ port }, () => {
    const { port } = server.address() as AddressInfo;
    console.log(`Listening on port: ${port}`);
  });
};
