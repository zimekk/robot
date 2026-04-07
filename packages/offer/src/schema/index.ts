import { z } from "zod";

const ItemSchema = z.object({
  brand: z.string(),
  description: z.string(),
  gtin: z.string().optional(),
  gtin13: z.string().optional(),
  image: z.string().optional(),
  name: z.string(),
  productID: z.string().optional(),
  sku: z.string(),
  url: z.string().optional(),
  offers: z.object({
    availability: z.string().optional(),
    price: z.number(),
    priceCurrency: z.string(),
    // priceValidUntil: z.string().optional(),
    url: z.string(),
  }),
});

export const JsonSchema = z.object({
  results: ItemSchema.array(),
});

export const DataSchema = ItemSchema;

export const DiffSchema = DataSchema;

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
