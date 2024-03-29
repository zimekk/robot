import { z } from "zod";

export const FundsSchema = z.object({
  meta: z.object({
    currency: z.string(),
    division: z.string(),
    end_date: z.string(),
    end_value: z.number(),
    id: z.number(),
    limit: z.number(),
    name: z.string(),
    next: z.string(),
    offset: z.number(),
    only_full: z.boolean(),
    previous: z.null(),
    roi: z.number(),
    start_date: z.string(),
    start_value: z.number(),
    synthetic_value_to: z.string().nullable(),
    total_count: z.number(),
  }),
  objects: z.array(
    z.object({
      date: z.string(),
      roi: z.number(),
      unit: z.string(),
      value: z.number(),
    })
  ),
});

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof FundsSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: FundsSchema,
});
