import { z } from "zod";

export const DataSchema = z.object({
  id: z.string(),
  itemOffered: z.object({
    description: z.string(),
    name: z.string(),
    image: z.string(),
    address: z.object({
      addressCountry: z.string(),
      addressLocality: z.string(),
      addressRegion: z.string(),
    }),
    url: z.string(),
    geo: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }),
  }),
  url: z.string(),
  availability: z.string(),
  priceCurrency: z.string(),
  price: z.number(),
});

export const DiffSchema = DataSchema.extend({});

export type Data = z.infer<typeof DataSchema>;

export interface Item {
  id: number;
  item: string;
  data: Data;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

const JsonSchema = z.object({
  "@context": z.string(),
  "@type": z.literal("WebPage"),
  url: z.string(),
  mainEntity: z.object({
    "@type": z.literal("OfferCatalog"),
    name: z.string(),
    itemListElement: z
      .object({
        "@type": z.literal("Offer"),
        itemOffered: z.object({
          "@type": z.literal("Place"),
          description: z.string(),
          name: z.string(),
          image: z.string(),
          address: z.object({
            "@type": z.literal("PostalAddress"),
            addressCountry: z.string(),
            addressLocality: z.string(),
            addressRegion: z.string(),
          }),
          url: z.string(),
          geo: z.object({
            "@type": z.literal("GeoCoordinates"),
            latitude: z.number(),
            longitude: z.number(),
          }),
        }),
        url: z.string(),
        availability: z.string(),
        priceCurrency: z.string(),
        price: z.number(),
      })
      .array(),
  }),
});

export const Schema = z.object({
  json: JsonSchema,
});
