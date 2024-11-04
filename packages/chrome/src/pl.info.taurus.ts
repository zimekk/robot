import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

const Result = z.object({
  brand: z.string(),
  category: z.string(),
  id: z.number(),
  image: z.string(),
  name: z.string(),
  price: z.coerce.number(),
  url: z.string(),
  variant: z.string(),
});

const JsonSchema = z.object({
  results: Result.array(),
});

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

      // const e = `dataLayer.filter(({ event }) => ["productImpression"].includes(event)).flatMap(({ ecommerce }) => ecommerce.impressions)`;
      const e = `[...document.querySelectorAll('[data-product-card-details]')].map(e => Object.assign(JSON.parse(e.dataset['productCardDetails']), { image: [...e.querySelectorAll('img')].map(i => i.src).pop() }))`;
      console.log(["page.evaluate"], e);
      const results = (await page.evaluate(e)) as unknown;
      console.log({ results });
      const json = { results };
      return JsonSchema.parseAsync(json).then((json) => ({
        url,
        json,
        html: undefined,
      }));
    })
    .finally(() => page.close());
