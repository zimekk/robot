import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

const { toJson } = require("microdata-node");

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (["document"].includes(req.resourceType())) {
        console.log(["request"], {
          req: req.url(),
          resourceType: req.resourceType(),
        });
        req.continue();
      } else {
        req.abort();
      }
    })
    .on("response", async (res: HTTPResponse) => {
      console.log([res.url(), res.status()]);
    })
    .goto(url, {
      waitUntil: "networkidle2",
      // timeout: 60_000,
    })
    .then(async () => {
      console.log(await page.title());

      const html = await page.content();
      const json = await z
        .object({
          items: z
            .object({
              properties: z.unknown(),
              type: z.string().array(),
            })
            .array(),
        })
        .parseAsync(toJson(html));

      const { properties } =
        json.items.find((item) =>
          item.type.map((url) => new URL(url).pathname).includes("/Product"),
        ) || {};

      console.log(properties);

      const item = await z
        .object({
          url: z
            .string()
            .array()
            .transform(([s]) => s)
            .optional(),
          image: z
            .string()
            .array()
            .transform(([s]) => s),
          name: z
            .string()
            .array()
            .transform(([s]) => s.trim()),
          sku: z
            .string()
            .array()
            .transform(([s]) => s.trim()),
          productID: z
            .string()
            .array()
            .transform(([s]) => s)
            .optional(),
          gtin: z
            .string()
            .array()
            .transform(([s]) => s)
            .optional(),
          gtin13: z
            .string()
            .array()
            .transform(([s]) => s.trim())
            .optional(),
          description: z
            .string()
            .array()
            .transform(([s]) => s.trim()),
          offers: z
            .object({
              properties: z
                .object({
                  price: z
                    .string()
                    .array()
                    .transform(([s]) => Number(s)),
                  priceValidUntil: z
                    .string()
                    .array()
                    .transform(([s]) => s),
                  priceCurrency: z
                    .string()
                    .array()
                    .transform(([s]) => s),
                  url: z
                    .string()
                    .array()
                    .transform(([s]) => s),
                  availability: z
                    .string()
                    .array()
                    .transform(([s]) => s.split("/").pop())
                    .optional(),
                })
                .loose(),
              type: z
                .string()
                .array()
                .transform(([s]) => s),
            })
            .array()
            .transform(([s]) => s.properties)
            .optional(),
          brand: z
            .object({
              properties: z
                .object({
                  name: z
                    .string()
                    .array()
                    .transform(([s]) => s),
                })
                .transform(({ name }) => name),
              type: z.string().array(),
            })
            .array()
            .transform(([s]) => s.properties),
        })
        .parseAsync(properties);

      console.log(item);

      return Promise.resolve([item])
        .then((results) => ({ results }))
        .then((json) => ({
          url,
          json,
          html: undefined,
        }));
    })
    .finally(() => page.close());
