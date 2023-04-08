import { z } from "zod";

export const RateSchema = z.object({
  code: z.string(),
  units: z.number(),
  buy: z.string(),
  sell: z.string(),
  spread: z.string(),
  date: z.string(),
  time: z.string(),
});

export const RatesSchema = z.object({
  date: z.string(),
  rates: z.record(RateSchema.array()),
  range: z.object({ minRateDate: z.string(), maxRateDate: z.string() }),
});

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof RatesSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: RatesSchema,
});
