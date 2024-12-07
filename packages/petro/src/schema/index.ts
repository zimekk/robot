import { z } from "zod";

const Result = z.object({
  availability: z.string(),
  brand: z.string(),
  category: z.string(),
  id: z.string(),
  image: z.string().optional(),
  name: z.string(),
  price: z.number(),
  priceCurrency: z.string(),
  url: z.string(),
});

export const JsonSchema = z.object({
  results: Result.strict().array(),
});

export const DataSchema = Result;

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
