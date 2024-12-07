import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

const { toJson } = require("microdata-node");

const ItemSchema = z.object({
  name: z.string(),
  id: z.string(),
  price: z.string(),
  brand: z.string(),
  category: z.string(),
});

const OfferSchema = z
  .object({
    properties: z.object({
      name: z
        .string()
        .array()
        .transform(([s]) => s)
        .optional(),
      image: z
        .string()
        .array()
        .transform(([s]) => s)
        .optional(),
      price: z.coerce
        .number()
        .array()
        .transform(([n]) => n),
      priceCurrency: z
        .literal("PLN")
        .array()
        .transform(([n]) => n),
      availability: z
        .string()
        .array()
        .transform(([s]) => s),
      url: z
        .string()
        .array()
        .transform(([s]) => s),
    }),
    type: z.literal("http://schema.org/Offer").array(),
  })
  .transform(({ properties }) => properties);

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
      const json = toJson(html).items.find((item: any) =>
        item.type.includes("http://schema.org/Product"),
      ).properties;

      const p = `[...document.querySelectorAll('script')].map(e => e.textContent).find(s => s.match(/dataLayer/))`;
      const s = await page.evaluate(p);
      const e =
        s +
        `window.dataLayer.filter(([type, name]) => ["event"].includes(type) && ["view_item"].includes(name)).flatMap(([_name, _type, data]) => data.items).pop()`;
      console.log(["page.evaluate"], e);
      const item = (await page.evaluate(e)) as unknown;

      return ItemSchema.parseAsync(item)
        .then((item) =>
          OfferSchema.array()
            .parseAsync(json.offers)
            .then((offers) =>
              offers.map((offer) => ({
                ...item,
                ...offer,
                id: (([_, m]) => m || item.id)(
                  offer.url.match(/#w(\d+)$/) || [],
                ),
              })),
            ),
        )
        .then((results) => ({ results }))
        .then((json) => ({
          url,
          json,
          html: undefined,
        }));
    })
    .finally(() => page.close());
