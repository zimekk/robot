import { z } from "zod";

const Ad = z.object({
  id: z.number(),
  slug: z.string(),
});

const JsonSchema = z
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
          data: z.object({
            searchAds: z.object({
              items: Ad.passthrough().array(), //.transform(() => null),
            }), //.passthrough()
          }),
          // .optional(),
        }), //.passthrough()
      })
      .passthrough(),
    // .optional(),
  })
  .passthrough();

export const DataSchema = Ad;

export const DiffSchema = Ad;

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof DataSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: JsonSchema,
});
