import { z } from "zod";

const Result = z.object({
  productSKU: z.string(),
  bvProductSku: z.string().optional(),
  productName: z.string(),
  stockStatus: z.string(),
  productId: z.string(),
  fullPrice: z.string(),
  saleprice: z.string(),
  primaryImageUrl: z.string(),
  badge: z.object({
    theme: z.string().or(z.boolean()),
    text: z.string().or(z.boolean()),
  }),
  review: z.object({ number: z.coerce.number(), stars: z.coerce.number() }),
  promotionalPriceCopy: z.string().optional(),
  parents: z.string().array().optional(),
});

export const JsonSchema = z.object({
  results: Result.strict().array(),
});

export const DataSchema = Result;

export const DiffSchema = DataSchema.omit({
  review: true,
});
// .pick({
//   productName: true,
//   stockStatus: true,
//   productId: true,
//   fullPrice: true,
//   saleprice: true,
// });

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
