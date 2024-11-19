import { format } from "date-fns";
import { Router } from "express";
import { z } from "zod";
import { PREFIX } from "../constants";

const formatTime = (time = Date.now()) => format(time, "HH:mm:ss.SS");

const log = (...args: unknown[]) =>
  console.log(`[${formatTime(Date.now())}]`, ...args);

export const router = () =>
  Router().use(
    `/${PREFIX}`,
    Router()
      .get("/", (req, res, next) => {
        function close() {
          console.info(["connection:close"], { ping: req.query.ping });
        }
        req.socket.on("close", close);
        return z
          .object({
            ping: z.coerce.number().default(1),
            timeout: z.coerce.number().default(1000),
          })
          .parseAsync(req.query)
          .then(({ ping, timeout }) =>
            new Promise((resolve) => {
              log("req", { ping, timeout });
              setTimeout(resolve, timeout);
            }).then(() => {
              const pong = ping;
              log("res", { pong });
              res.json({ pong });
            }),
          )
          .finally(() => {
            req.socket.off("close", close);
          })
          .catch(next);
      })
      .get("/error", (_req, res) => {
        const error = true;
        log("err", { error });
        res.json({ error });
      }),
  );
