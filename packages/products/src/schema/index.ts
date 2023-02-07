import { z } from "zod";

export const PhotoSchema = z.object({
  url: z.string(),
  thumbnailUrl: z.string(),
  urlTemplate: z.string(),
});

export const ProductSchema = z.object({
  featureSummary: z.string().array(),
  featureSummaryStructured: z
    .object({
      shortName: z.string(),
      description: z.null(),
      valueSeparator: z.string(),
      valueGroups: z
        .object({ shortName: z.string(), description: z.null() })
        .array(),
    })
    .array(),
  availabilityStatus: z.string(),
  producerCode: z.string(),
  installmentMinimum: z.number(),
  alternativeGroupId: z.string().optional(),
  alternativeProducts: z.unknown().array().optional(),
  priceInfo: z.object({
    price: z.number(),
    oldPrice: z.null(),
    isPriceVisible: z.boolean(),
  }),
  producer: z.object({ id: z.string(), name: z.string() }),
  isEsd: z.boolean(),
  esdType: z.string(),
  productLink: z.string(),
  photo: PhotoSchema,
  rating: z.number(),
  ratingCount: z.number(),
  commentsCount: z.number(),
  freeShipping: z.boolean(),
  id: z.string(),
  name: z.string(),
  price: z.number(),
  category: z.object({ id: z.string(), parentGroupId: z.string() }),
  questionsAndAnswers: z.boolean(),
  isFetching: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;

const JsonSchema = z.object({
  app: z.object({
    products: z.record(ProductSchema),
  }),
});

export const Schema = z.object({
  json: JsonSchema,
});
