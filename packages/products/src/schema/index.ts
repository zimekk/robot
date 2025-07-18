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

export const ProductSchema = z
  .object({
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
    badges: z
      .object({
        id: z.number(),
        promoLabel: z.string(),
        promoIcon: z.string(),
        promoVariant: z.string(),
      })
      .array()
      .optional(),
    installmentMinimum: z.number().optional(),
    alternativeGroupId: z.string().optional(),
    alternativeProducts: z.unknown().array().optional(),
    mark: z.string().optional(),
    oldPrice: z.number().optional(),
    priceInfo: z.object({
      price: z.number().optional(),
      oldPrice: z.number().nullable().optional(),
      isPriceVisible: z.boolean(),
    }),
    producer: z.object({ id: z.string(), name: z.string() }),
    isEsd: z.boolean().optional(),
    esdType: z.string().optional(),
    isGiftCard: z.boolean().optional(),
    productLink: z.string(),
    photo: PhotoSchema,
    rating: z.number().optional(),
    ratingCount: z.number().optional(),
    ratingFivePoints: z.number().optional(),
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
        customerLimit: z.number().nullable(),
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
  })
  .extend({
    photos: PhotoSchema.array().optional(),
    comments: z.unknown().array().optional(),
    departmentsAvailability: z.unknown().array().optional(),
    shipmentCosts: z.unknown().array().optional(),
    productDescription: z.string().optional(),
    banners: z.unknown().array().optional(),
    isExtendedConfiguration: z.boolean().optional(),
    isAvailableInDepartments: z.boolean().optional(),
    leasingInfo: z.unknown().array().optional(),
    productMarksExtended: z.unknown().array().optional(),
    movies: z.unknown().array().optional(),
    galleryItemsCount: z.number().optional(),
    hasPromotionPrices: z.boolean().optional(),
    minPriceInfo: z.unknown().optional(),
    secondaryCategory: z.unknown().array().optional(),
    commentStatistics: z.unknown(),
    features: z.unknown().array().optional(),
    complementaryProducts: z.unknown().array().optional(),
    orderIn: z.string().optional(),
    timeToBuy: z.string().optional(),
    onlineAvailability: z.unknown(),
  })
  .extend({
    isPriceVisible: z.boolean().optional(),
    markText: z.string().optional(),
    productId: z.number().optional(),
    productName: z.string().optional(),
    group: z.unknown().optional(),
    parentCategory: z.unknown().optional(),
    productParameters: z.unknown().optional(),
    productPromotionInfo: z
      .object({
        code: z.unknown(),
        discountedPrice: z.number(),
        promotionEndDate: z.string(),
        customerLimit: z.number(),
        promotionStartDate: z.string(),
      })
      .optional(),
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
    listing: z
      .object({
        paginationState: PaginationSchema,
      })
      .optional(),
    products: z.record(z.string(), ProductSchema.strict()),
  }),
});

export const Schema = z.object({
  json: JsonSchema,
});
