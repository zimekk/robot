import { z } from "zod";

export const PhotoSchema = z.object({
  Url: z.string(),
  ThumbnailUrl: z.string(),
  UrlTemplate: z.string().nullable(),
});

export const HotShotSchema = z.object({
  Id: z.string(),
  Price: z.number(),
  OldPrice: z.number(),
  PromotionGainText: z.string().optional(),
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
    ProductDescription: z.string().nullable(),
    WebUrl: z.string(),
  }),
});

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof HotShotSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

// const HotShotErrorSchema = z.object({
//   Message: z.string(),
// });

export const Schema = z.object({
  // json: z.union([HotShotErrorSchema, HotShotSchema]),
  json: HotShotSchema,
});
