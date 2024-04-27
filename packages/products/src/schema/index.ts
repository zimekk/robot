import { z } from "zod";

export const PaginationSchema = z.object({
  currentPage: z.number(),
  itemsPerPageActive: z.number(),
  itemsPerPage: z.number().array(),
  totalPages: z.number(),
  pageSize: z.number(),
  sort: z.object({ rule: z.string(), sort: z.string() }),
});

export type PaginationState = Pick<
  z.infer<typeof PaginationSchema>,
  "currentPage" | "totalPages"
>;

export const PhotoSchema = z.object({
  url: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  urlTemplate: z.string().optional(),
});

export const ProductSchema = z.object({
  featureSummary: z.string().array().optional(),
  featureSummaryStructured: z
    .object({
      shortName: z.string(),
      description: z.string().nullable(),
      valueSeparator: z.string(),
      valueGroups: z
        .object({ shortName: z.string(), description: z.string().nullable() })
        .array(),
    })
    .array()
    .optional(),
  availabilityStatus: z.enum(["Available", "Unavailable"]).optional(),
  producerCode: z.string().optional(),
  freeInstallment: z.boolean().optional(),
  installmentMinimum: z.number().optional(),
  alternativeGroupId: z.string().optional(),
  alternativeProducts: z.unknown().array().optional(),
  mark: z.string().optional(),
  oldPrice: z.number().optional(),
  priceInfo: z.object({
    price: z.number(),
    oldPrice: z.number().nullable(),
    isPriceVisible: z.boolean(),
  }),
  producer: z.object({ id: z.string(), name: z.string() }),
  isEsd: z.boolean(),
  esdType: z.string(),
  isGiftCard: z.boolean().optional(),
  productLink: z.string(),
  photo: PhotoSchema,
  rating: z.number().optional(),
  ratingCount: z.number().optional(),
  commentsCount: z.number().optional(),
  commentsRatingFivePoints: z.number().optional(),
  freeShipping: z.boolean().optional(),
  id: z.string(),
  name: z.string(),
  price: z.number(),
  promotionInfo: z
    .object({
      code: z.null(),
      discountedPrice: z.number(),
      promotionEndDate: z.string(),
      customerLimit: z.number(),
      promotionStartDate: z.string(),
    })
    .optional(),
  category: z.object({
    id: z.string(),
    parentGroupId: z.string().optional(),
  }),
  questionsAndAnswers: z.boolean().optional(),
  promotionGainValue: z.unknown().nullable().optional(),
  isFetching: z.boolean(),
});
// .strict();

export const DataSchema = ProductSchema;

export const DiffSchema = DataSchema.pick({
  availabilityStatus: true,
  name: true,
  oldPrice: true,
  price: true,
  priceInfo: true,
  promotionInfo: true,
});

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof DataSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

const JsonSchema = z.object({
  app: z.object({
    listing: z.object({
      paginationState: PaginationSchema,
    }),
    products: z.record(ProductSchema.strict()),
  }),
});

export const Schema = z.object({
  json: JsonSchema,
});
