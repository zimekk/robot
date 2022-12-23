import { z } from "zod";

export const PhotoSchema = z.object({
  Url: z.string(),
  ThumbnailUrl: z.string(),
  UrlTemplate: z.string().nullable(),
});

const CategorySchema = z.object({
  Type: z.string(),
  Hint: z.string(),
  PhotoUrlTemplate: z.string(),
  CategoryHeader: z.object({
    Id: z.string(),
    NameSingular: z.string(),
    NamePlural: z.string(),
    Photo: PhotoSchema,
    ParentCategory: z
      .object({
        Id: z.string(),
        NameSingular: z.null(),
        NamePlural: z.null(),
        Photo: z.null(),
        ParentCategory: z.null(),
        ParentGroup: z.object({ Id: z.string(), Name: z.string() }),
      })
      .nullable(),
    ParentGroup: z.object({ Id: z.string(), Name: z.string() }).nullable(),
  }),
  ProductQueryCriteria: z.null(),
  ProductHeader: z.null(),
  Url: z.null(),
});

const ProductSchema = z.object({
  Type: z.string(),
  Hint: z.string(),
  PhotoUrlTemplate: z.string(),
  CategoryHeader: z.null(),
  ProductQueryCriteria: z.null(),
  ProductHeader: z.object({
    CommentsRating: z.number(),
    CommentsCount: z.number(),
    ProducerCode: z.string(),
    Id: z.string(),
    Name: z.string(),
    Price: z.number(),
    OldPrice: z.number().nullable(),
    PriceInfo: z.object({
      Price: z.number(),
      OldPrice: z.number().nullable(),
      IsPriceVisible: z.boolean(),
    }),
    Producer: z.object({ Id: z.string(), Name: z.string() }),
    Category: z.object({
      Id: z.string(),
      NameSingular: z.string(),
      NamePlural: z.string(),
      Photo: PhotoSchema,
      ParentCategory: z
        .object({
          Id: z.string(),
          NameSingular: z.null(),
          NamePlural: z.string().nullable(),
          Photo: z.null(),
          ParentCategory: z.null(),
          ParentGroup: z.object({ Id: z.string(), Name: z.string() }),
        })
        .nullable(),
      ParentGroup: z.object({ Id: z.string(), Name: z.string() }).nullable(),
    }),
    SecondaryCategory: z.null(),
    MainPhoto: z.any().nullable(),
    WebUrl: z.string(),
    IsEsd: z.boolean(),
    EsdType: z.string(),
  }),
  Url: z.null(),
});

export default z.union([CategorySchema, ProductSchema]).array();
