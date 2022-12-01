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

export const Schema = z.object({
  date: z.string(),
  rates: z.record(RateSchema.array()),
  range: z.object({ minRateDate: z.string(), maxRateDate: z.string() }),
});
