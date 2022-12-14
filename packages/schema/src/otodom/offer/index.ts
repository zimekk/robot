import { parse } from "node-html-parser";
import { z } from "zod";

export const Schema = z
  .object({
    props: z
      .object({
        pageProps: z.object({
          featureFlags: z.any().transform(() => null),
          translations: z.any().transform(() => null),
          tracking: z.any().transform(() => null),
          // data: z.any().transform(() => null),
          ad: z
            .object({
              id: z.number(),
              slug: z.string(),
            })
            .passthrough()
            .optional(),
          data: z
            .object({
              searchAds: z.object({
                items: z
                  .object({
                    id: z.number(),
                    slug: z.string(),
                  })
                  // .passthrough()
                  .array(), //.transform(() => null),
              }), //.passthrough()
            })
            .optional(),
        }), //.passthrough()
      })
      .passthrough()
      .optional(),
  })
  .passthrough();

export default ({ html }: { html: string }) => ({
  json: Schema.parse(
    JSON.parse(parse(html).querySelector("script#__NEXT_DATA__")?.text || "{}")
  ),
});
