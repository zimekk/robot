import { Router } from "express";
import { query } from "@dev/sql";
import { exec } from "child_process";
import os from "os";
import sslChecker from "ssl-checker";

const diskFree = () =>
  new Promise((resolve, reject) =>
    exec("df -h", (error, stdout) =>
      error
        ? reject(error)
        : resolve(stdout.split("\n").filter((name) => name.match("^/dev/")))
    )
  );

export const router = () =>
  Router().get("/status", (_req, res, next) =>
    Promise.all([
      diskFree(),
      query(
        "SELECT pg_database.datname AS name, pg_size_pretty(pg_database_size(pg_database.datname)) AS size FROM pg_database",
        []
      ),
      // https://stackoverflow.com/questions/56771030/node-js-how-to-check-get-ssl-certificate-expiry-date
      Promise.all(
        [
          // "badssl.com",
          // "expired.badssl.com",
        ].map((hostname) => sslChecker(hostname, { method: "GET", port: 443 }))
      ),
    ])
      .then(([usage, data, ssl]) =>
        res.json({
          result: {
            databases: data.rows,
            cpus: os.cpus(),
            freemem: os.freemem(),
            totalmem: os.totalmem(),
            hostname: os.hostname(),
            loadavg: os.loadavg(),
            platform: os.platform(),
            type: os.type(),
            uptime: os.uptime(),
            usage,
            ssl,
          },
        })
      )
      .catch(next)
  );

export const status = (data: unknown) => data;
