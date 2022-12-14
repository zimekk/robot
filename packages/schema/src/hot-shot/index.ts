import { z } from "zod";
import { PhotoSchema } from "../products";

const HotShotSchema = z.object({
  Id: z.string(),
  Price: z.number(),
  OldPrice: z.number(),
  PromotionGainText: z.string(),
  PromotionGainTextLines: z.string().array(),
  PromotionGainValue: z.number(),
  PromotionTotalCount: z.number(),
  SaleCount: z.number(),
  MaxBuyCount: z.number(),
  PromotionName: z.string(),
  PromotionEnd: z.string(),
  PromotionPhoto: PhotoSchema,
  Product: z.object({
    AvailabilityStatus: z.enum(["Available", "Unavailable"]),
    IsEsd: z.boolean(),
    Name: z.string(),
    MainPhoto: PhotoSchema,
    // Photos: PhotoSchema.array(),
    Price: z.number(),
    ProducerCode: z.string(),
    Producer: z.object({
      Id: z.string(),
      Name: z.string(),
    }),
    ProductDescription: z.string(),
    WebUrl: z.string(),
  }),
});

const HotShotErrorSchema = z.object({
  Message: z.string(),
});

export const Schema = z.union([HotShotErrorSchema, HotShotSchema]);
