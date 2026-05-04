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
        .preprocess(
          ({ offers, productID, sku = productID, ...product }: any) => ({
            sku,
            ...product,
            offers: Array.isArray(offers) ? offers[0] : offers,
          }),
          z.object({
            url: z
              .string()
              .array()
              .transform(([s]) => s)
              .optional(),
            image: z
              .string()
              .array()
              .transform(([s]) => s)
              .or(z.string()),
            name: z
              .string()
              .array()
              .transform(([s]) => s)
              .or(z.string()),
            sku: z
              .string()
              .array()
              .transform(([s]) => s)
              .or(z.string()),
            description: z
              .string()
              .array()
              .transform(([s]) => s)
              .or(z.string().nullable()),
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
                  .or(z.string())
                  .optional(),
                priceCurrency: z
                  .string()
                  .array()
                  .transform(([s]) => s)
                  .or(z.string()),
                url: z
                  .string()
                  .array()
                  .transform(([s]) => s)
                  .or(z.string().default(url)),
                availability: z
                  .string()
                  .array()
                  .transform(([s]) => s)
                  .or(z.string())
                  .transform((s) => s.split("/").pop())
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
              .transform(({ name }) => name)
              .or(z.string()),
          }),
        )
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
