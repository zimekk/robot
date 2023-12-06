import { z } from "zod";

const OfferSchema = z.object({
  "@type": z.literal("Offer"),
  itemOffered: z.object({
    "@type": z.literal("Place"),
    description: z.string(),
    name: z.string(),
    image: z.string().optional(),
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
});

const WebPageSchema = z.object({
  "@context": z.string(),
  "@type": z.literal("WebPage"),
  url: z.string(),
  mainEntity: z.object({
    "@type": z.literal("OfferCatalog"),
    name: z.string(),
    itemListElement: OfferSchema.array(),
  }),
});

export const DataSchema = OfferSchema.extend({
  id: z.string(),
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

const JsonSchema = WebPageSchema;

export const Schema = z.object({
  json: JsonSchema,
});
