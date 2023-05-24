import { z } from "zod";

const Result = z.object({
  name: z.string(),
  baseAttributes: z.array(
    z.object({
      name: z.string(),
      attributes: z.array(
        z.object({
          name: z.string(),
          value: z.array(
            z.object({
              name: z.string(),
              definitionId: z.number().nullable(),
              url: z.null(),
            })
          ),
          definitionId: z.number().nullable(),
        })
      ),
    })
  ),
  prices: z.object({
    mainPrice: z.number(),
    promotionalPrice: z
      .object({
        price: z.number(),
        fromDatetime: z.string(),
        toDatetime: z.string(),
      })
      .nullable(),
    voucherDiscountedPrice: z.number().nullable(),
    lowestPrice: z.object({ price: z.number().nullable(), show: z.boolean() }),
  }),
  images: z.array(z.object({ url: z.string(), type: z.string() })),
  productGroupName: z.string(),
  productType: z.string(),
  deliveryAvailability: z.object({
    shopDeliveryAvailability: z
      .object({
        code: z.string(),
        deliveryDate: z.null(),
      })
      .nullable(),
    homeDeliveryAvailability: z
      .object({
        code: z.string(),
        deliveryDate: z.null(),
      })
      .nullable(),
    commonDeliveryAvailability: z
      .object({
        code: z.string(),
        deliveryDate: z.null(),
      })
      .nullable(),
    reserveAndCollectAvailable: z.boolean(),
  }),
  labels: z.array(
    z.object({
      name: z.string(),
      color: z.null(),
      backgroundColor: z.null(),
    })
  ),
  brand: z.string(),
  brandLogo: z.null(),
  variantBasicData: z.object({
    variantGroups: z.array(
      z.object({
        variantGroupName: z.string(),
        variants: z.array(
          z.object({
            variantValue: z.string(),
            currentProduct: z.boolean(),
            colorCodes: z.string().array().nullable(),
          })
        ),
      })
    ),
  }),
  outletDetails: z
    .object({
      deliveryAvailability: z.object({
        shopDeliveryAvailability: z.object({
          code: z.string(),
          deliveryDate: z.null(),
        }),
        homeDeliveryAvailability: z.object({
          code: z.string(),
          deliveryDate: z.null(),
        }),
        commonDeliveryAvailability: z.null(),
        reserveAndCollectAvailable: z.boolean(),
      }),
      outletCategories: z.array(
        z.object({
          categoryName: z.string(),
          categoryDescription: z.string(),
          categoryId: z.number(),
          price: z.number(),
          instalment: z
            .object({
              code: z.string(),
              instalmentPrice: z.number(),
              numberOfInstalments: z.number(),
              loanInterest: z.number(),
              label: z.string(),
              hasPromotionDetails: z.boolean(),
              shortPromotionDescription: z.null(),
              rrso: z.number(),
              usingDiscountedPrice: z.boolean(),
            })
            .nullable(),
        })
      ),
    })
    .nullable(),
  opinionsSummary: z.object({
    averageGrade: z.number(),
    opinionsNumber: z.number(),
  }),
  splitPayment: z.boolean(),
  productName: z.string(),
  energyLabel: z.null(),
  productAdvertisingPlacements: z.array(z.unknown()),
  voucherDetails: z
    .object({
      voucherName: z.string().nullable(),
      voucherCode: z.string(),
      automatic: z.boolean(),
      beginTime: z.string(),
      endTime: z.string(),
      usageLimit: z.null(),
      description: z.string(),
    })
    .nullable(),
  deliveryPriceMessage: z.string().nullable(),
  instalment: z
    .object({
      code: z.string(),
      instalmentPrice: z.number(),
      numberOfInstalments: z.number(),
      loanInterest: z.number(),
      label: z.string(),
      hasPromotionDetails: z.boolean(),
      shortPromotionDescription: z.string().nullable(),
      rrso: z.number(),
      usingDiscountedPrice: z.boolean(),
    })
    .nullable(),
  identifiers: z.object({
    plu: z.string(),
    productLinkName: z.string(),
    productGroupLinkName: z.string(),
    huCode: z.null(),
  }),
  presentationBox: z
    .object({
      backgroundColor: z.string(),
      promotionBackgroundColor: z.string(),
      promotionTextColor: z.string(),
      infoTextColor: z.string(),
      voucherCodeTextColor: z.string(),
      dateTextColor: z.string(),
      gaugeBackgroundColor: z.string(),
      gaugeBorderColor: z.string(),
      discountedPriceColor: z.string(),
      priceColor: z.string(),
      boxBorderColor: z.string(),
      tabTextColor: z.string(),
    })
    .nullable(),
  productLinks: z.array(z.unknown()),
  callCenterPhoneNumber: z.string(),
  paymentTypeDescriptions: z.array(z.unknown()),
  videos: z.array(z.unknown()),
  relatedPromotion: z.null(),
});

export const JsonSchema = z.object({
  productsCount: z.number(),
  results: Result.strict().array(),
  suggestion: z.null().optional(),
});

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof Result>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: JsonSchema,
});
