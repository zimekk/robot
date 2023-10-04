import { z } from "zod";

const DeliveryAvailability = z.object({
  code: z.string(),
  deliveryDate: z.string().nullable(),
});

const Instalment = z.object({
  code: z.string(),
  instalmentPrice: z.number(),
  numberOfInstalments: z.number(),
  loanInterest: z.number(),
  label: z.string().nullable(),
  hasPromotionDetails: z.boolean(),
  shortPromotionDescription: z.string().nullable(),
  rrso: z.number(),
  usingDiscountedPrice: z.boolean(),
});

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
    shopDeliveryAvailability: DeliveryAvailability.nullable(),
    homeDeliveryAvailability: DeliveryAvailability.nullable(),
    commonDeliveryAvailability: DeliveryAvailability.nullable(),
    reserveAndCollectAvailable: z.boolean(),
  }),
  labels: z.array(
    z.object({
      name: z.string().nullable(),
      color: z.string().nullable(),
      backgroundColor: z.string().nullable(),
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
        shopDeliveryAvailability: DeliveryAvailability,
        homeDeliveryAvailability: DeliveryAvailability,
        commonDeliveryAvailability: z.null(),
        reserveAndCollectAvailable: z.boolean(),
      }),
      outletCategories: z.array(
        z.object({
          categoryName: z.string(),
          categoryDescription: z.string(),
          categoryId: z.number(),
          price: z.number(),
          instalment: Instalment.nullable(),
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
  energyLabel: z
    .object({
      energyClass: z.object({
        value: z.string(),
        type: z.string(),
        scale: z.string().nullable(),
      }),
      oldEnergyClassLabel: z.string(),
      energyInformationCardUrl: z.string(),
      definitionId: z.number().nullable(),
    })
    .nullable(),
  productAdvertisingPlacements: z.array(z.unknown()),
  voucherDetails: z
    .object({
      voucherName: z.string().nullable(),
      voucherCode: z.string(),
      automatic: z.boolean(),
      beginTime: z.string(),
      endTime: z.string(),
      usageLimit: z
        .object({
          remainingUsageLimit: z.number(),
          totalUsageLimit: z.number(),
        })
        .nullable(),
      description: z.string(),
    })
    .nullable(),
  deliveryPriceMessage: z.string().nullable(),
  instalment: Instalment.nullable(),
  identifiers: z.object({
    plu: z.string(),
    productLinkName: z.string(),
    productGroupLinkName: z.string(),
    huCode: z.null(),
  }),
  presentationBox: z
    .object({
      backgroundColor: z.string().nullable(),
      promotionBackgroundColor: z.string().nullable(),
      promotionTextColor: z.string().nullable(),
      infoTextColor: z.string().nullable(),
      voucherCodeTextColor: z.string().nullable(),
      dateTextColor: z.string().nullable(),
      gaugeBackgroundColor: z.string().nullable(),
      gaugeBorderColor: z.string().nullable(),
      discountedPriceColor: z.string().nullable(),
      priceColor: z.string().nullable(),
      boxBorderColor: z.string().nullable(),
      tabTextColor: z.string().nullable(),
    })
    .nullable(),
  productLinks: z.array(z.unknown()),
  callCenterPhoneNumber: z.string(),
  paymentTypeDescriptions: z.array(z.unknown()),
  videos: z.array(z.unknown()),
  relatedPromotion: z.null(),
  holidayStatus: z.null().optional(),
});

export const JsonSchema = z.object({
  productsCount: z.number(),
  results: Result.strict().array(),
  suggestion: z.null().optional(),
});

export const DataSchema = Result;

export const DiffSchema = DataSchema.pick({
  brand: true,
  prices: true,
  productGroupName: true,
  productName: true,
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

export const Schema = z.object({
  json: JsonSchema,
});
