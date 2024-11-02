import { z } from "zod";

const Result = z.object({
  productSKU: z.string(),
  bvProductSku: z.string(),
  productName: z.string(),
  stockStatus: z.string(),
  productId: z.string(),
  fullPrice: z.string(),
  saleprice: z.string(),
  primaryImageUrl: z.string(),
  badge: z.object({ theme: z.string(), text: z.string() }),
  review: z.object({ number: z.number(), stars: z.coerce.string() }),
  promotionalPriceCopy: z.string().optional(),
  parents: z.array(z.string()),
});

export const JsonSchema = z.object({
  results: Result.strict().array(),
});

export const DataSchema = Result;

export const DiffSchema = DataSchema.pick({
  productName: true,
  stockStatus: true,
  productId: true,
  fullPrice: true,
  saleprice: true,
});

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
