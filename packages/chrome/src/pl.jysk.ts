import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

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
      const e = `[...document.querySelectorAll('script[type="application/ld+json"]')].map(e => JSON.parse(unescape(e.textContent))).find(item => item['@type'] === 'Product')`;
      console.log(["page.evaluate"], e);
      const properties = (await page.evaluate(e)) as object;
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
            .transform(([s]) => s)
            .or(z.string())
            .transform((s) => s.trim()),
          sku: z
            .string()
            .array()
            .transform(([s]) => s)
            .or(z.string())
            .transform((s) => s.trim()),
          description: z
            .string()
            .array()
            .transform(([s]) => s.trim())
            .nullable(),
          offers: z
            .object({
              price: z
                .string()
                .array()
                .transform(([s]) => s)
                .or(z.string())
                .transform((s) => Number(s)),
              priceValidUntil: z
                .string()
                .array()
                .transform(([s]) => s)
                .or(z.string()),
              priceCurrency: z
                .string()
                .array()
                .transform(([s]) => s)
                .or(z.string()),
              url: z
                .string()
                .array()
                .transform(([s]) => s)
                .or(z.string()),
              availability: z
                .string()
                .array()
                .transform(([s]) => s.split("/").pop())
                .optional(),
            })
            .optional(),
          brand: z
            .object({
              name: z
                .string()
                .array()
                .transform(([s]) => s)
                .or(z.string())
                .default("JYSK"),
            })
            .transform(({ name }) => name),
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
