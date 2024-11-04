import { z } from "zod";

const Result = z.object({
  brand: z.string(),
  category: z.string(),
  id: z.number(),
  image: z.string(),
  name: z.string(),
  price: z.number(),
  url: z.string(),
  variant: z.string(),
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
