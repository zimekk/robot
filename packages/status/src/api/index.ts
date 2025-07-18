import { Router } from "express";
import { query } from "@dev/sql";
import { exec } from "child_process";
import { createTransport } from "nodemailer";
import os from "os";
import sslChecker from "ssl-checker";
import type { SchemaType } from "../schema";
import { getTotal } from "../utils";

async function notify(data: {
  total?: number;
  ssl?: object[];
  url?: Record<string, boolean>;
}) {
  const subject = data.url
    ? `Robot Notification - URL`
    : data.ssl
      ? `Robot Notification - SSL`
      : `Robot Notification - Usage ${data.total}%`;
  const text = JSON.stringify(data, null, 2);

  const transporter = createTransport(process.env.SMTP_URL, {
    from: process.env.MAIL_FROM,
  });

  const info = await transporter.sendMail({
    to: process.env.MAIL_TO,
    subject,
    text,
  });
  console.log(info);

  // only needed when using pooled connections
  transporter.close();
}

const diskFree = () =>
  new Promise<string[]>((resolve, reject) =>
    exec("df -h", (error, stdout) =>
      error
        ? reject(error)
        : resolve(stdout.split("\n").filter((name) => name.match("^/dev/"))),
    ),
  );

// https://stackoverflow.com/questions/56771030/node-js-how-to-check-get-ssl-certificate-expiry-date
const sslCheck = () =>
  Promise.all(
    (process.env.SSL_CHECK || "")
      .split(":")
      .concat([
        // "badssl.com",
        // "expired.badssl.com",
      ])
      .map((hostname) => sslChecker(hostname, { method: "GET", port: 443 })),
  );

const urlCheck = () =>
  Promise.all(
    (process.env.URL_CHECK || "")
      .split("|")
      .concat([
        // "http://example.com/",
      ])
      .filter(Boolean)
      .map((url) =>
        fetch(url)
          .then((res) => res.ok)
          .catch(() => false)
          .then((ok) => ({ url, ok })),
      ),
  );

export const router = () =>
  Router().get("/status", (_req, res, next) =>
    Promise.all([
      diskFree(),
      process.env.DATABASE_URL
        ? query(
            "SELECT pg_database.datname AS name, pg_size_pretty(pg_database_size(pg_database.datname)) AS size FROM pg_database",
            [],
          ).catch(() => null)
        : null,
      process.env.DATABASE_URL
        ? query(
            "SELECT table_name AS name, pg_size_pretty(pg_total_relation_size(quote_ident(table_name))) AS size FROM information_schema.tables where table_schema=$1;",
            ["public"],
          ).catch(() => null)
        : null,
      sslCheck(),
      urlCheck().then((url) =>
        url.reduce(
          (result, { url, ok }) =>
            Object.assign(result, {
              [url.substring(0, 15)]: ok,
            }),
          {},
        ),
      ),
    ])
      .then(([usage, data, tables, ssl, url]) =>
        res.json({
          result: {
            databases: ([] as any[])
              .concat(data ? data.rows : [])
              .concat(tables ? tables.rows : []),
            cpus: os.cpus(),
            freemem: os.freemem(),
            totalmem: os.totalmem(),
            hostname: os.hostname(),
            loadavg: os.loadavg(),
            platform: os.platform(),
            type: os.type(),
            uptime: os.uptime(),
            usage,
            total: getTotal(usage),
            ssl,
            url,
          },
        }),
      )
      .catch(next),
  );

export const status = async (data: SchemaType) =>
  Promise.all([
    diskFree().then((usage) => getTotal(usage)),
    sslCheck().then((ssl) =>
      ssl.filter(({ daysRemaining }) => daysRemaining <= 20),
    ),
    urlCheck(),
  ]).then(async ([total, ssl, url]) => {
    if (total > 95) {
      await notify({ total });
    }
    if (ssl.length > 0) {
      await notify({ ssl });
    }
    if (url.filter(({ ok }) => !ok).length > 0) {
      await notify({
        url: url.reduce(
          (result, { url, ok }) =>
            Object.assign(result, {
              [url]: ok,
            }),
          {},
        ),
      });
    }
    return {
      json: {
        ssl,
        total,
        ...data,
      },
    };
  });
