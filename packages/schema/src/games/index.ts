import { z } from "zod";

const CurrencyCode = z.enum(["", "PLN", "USD"]);

const TaxType = z.enum(["", "VatIncluded"]);

const Price = z.object({
  CurrencyCode,
  IsPIRequired: z.boolean(),
  ListPrice: z.number(),
  MSRP: z.number(),
  TaxType,
  WholesaleCurrencyCode: CurrencyCode,
  WholesalePrice: z.number().optional(),
});

export const DiffSchema = z.object({
  DisplaySkuAvailabilities: z.array(
    z.object({
      Availabilities: z.array(
        z.object({
          Conditions: z.any(),
          OrderManagementData: z.object({ Price }),
        })
      ),
    })
  ),
  LastModifiedDate: z.string(),
});

export const Product = z.object({
  DisplaySkuAvailabilities: z.array(
    z.object({
      Availabilities: z.array(
        z.object({
          Conditions: z.object({
            EndDate: z.string(),
            ResourceSetIds: z.string().array(),
            StartDate: z.string(),
            ClientConditions: z.object({
              AllowedPlatforms: z
                .object({
                  PlatformName: z.string(),
                  MaxVersion: z.number(),
                  MinVersion: z.number(),
                })
                .array(),
            }),
          }),
          OrderManagementData: z.object({ Price }),
        })
      ),
    })
  ),
  LastModifiedDate: z.string(),
  LocalizedProperties: z.array(
    z.object({
      DeveloperName: z.string(),
      Images: z.array(
        z.object({
          Uri: z.string(),
          Width: z.number(),
        })
      ),
      ProductDescription: z.string(),
      ProductTitle: z.string(),
      PublisherName: z.string(),
    })
  ),
  MarketProperties: z.array(
    z.object({
      OriginalReleaseDate: z.string(),
      UsageData: z
        .object({
          AggregateTimeSpan: z.enum(["7Days", "30Days", "AllTime"]),
          AverageRating: z.number(),
          PlayCount: z.number(),
          PurchaseCount: z.string(),
          RatingCount: z.number(),
          RentalCount: z.string(),
          TrialCount: z.string(),
        })
        .array(),
    })
  ),
  ProductId: z.string(),
  Properties: z.object({
    Categories: z.any(),
  }),
});

export const Schema = z
  .object({
    Products: Product.array(),
  })
  .strict();
