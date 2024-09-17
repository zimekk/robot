import { z } from "zod";

const OfferSchema = z.object({
  "@type": z.literal("Offer"),
  itemOffered: z.object({
    "@type": z.literal("Place"),
    description: z.string(),
    name: z.string().optional(),
    image: z.string().optional(),
    address: z.object({
      "@type": z.literal("PostalAddress"),
      addressCountry: z.string(),
      addressLocality: z.string(),
      addressRegion: z.string(),
    }),
    geo: z
      .object({
        "@type": z.literal("GeoCoordinates"),
        latitude: z.number(),
        longitude: z.number(),
      })
      .optional(),
  }),
  url: z.string(),
  name: z.string().optional(),
  availability: z.string(),
  priceCurrency: z.string(),
  price: z.coerce.number(),
});

const WebPageSchema = z.object({
  "@context": z.string(),
  "@type": z.literal("Product"),
  url: z.string(),
  additionalType: z.literal("RealEstateListing"),
  name: z.string(),
  offers: z.object({
    "@type": z.literal("AggregateOffer"),
    priceCurrency: z.literal("PLN"),
    offerCount: z.number(),
    lowPrice: z.coerce.number(),
    highPrice: z.coerce.number(),
    businessFunction: z.string(),
    offers: OfferSchema.transform(
      ({ itemOffered, name = itemOffered.name, ...rest }) => ({
        itemOffered,
        name,
        ...rest,
      }),
    ).array(),
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
