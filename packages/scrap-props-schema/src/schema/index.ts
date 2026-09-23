import { z } from "zod";

const MoneyType = z.object({
  value: z.number(),
  currency: z.enum(["EUR", "PLN", "USD"]),
  __typename: z.literal("Money").optional(),
});

const Ad = z.object({
  id: z.number(),
  slug: z.string(),
  // seo: z.object({
  //   details: z.object({
  //     __typename: z.string(),
  //     description: z.string(),
  //   }),
  //   __typename: z.string(),
  // }),
  title: z.string(),
  agency: z
    .object({
      id: z.number(),
      name: z.string(),
      slug: z.string(),
      type: z.string(),
      imageUrl: z.string().nullable(),
      __typename: z.string().optional(),
      highlightedAds: z.boolean(),
      brandingVisible: z.boolean(),
    })
    .nullable(),
  estate: z.string(),
  images: z
    .object({
      large: z.string(),
      medium: z.string(),
      __typename: z.string().optional(),
    })
    .array(),
  location: z.object({
    address: z.object({
      city: z.object({ name: z.string(), __typename: z.string() }).nullable(),
      street: z
        .object({
          name: z.string(),
          number: z.string().nullable(),
          __typename: z.literal("Street").optional(),
        })
        .nullable(),
      province: z
        .object({ name: z.string(), __typename: z.string() })
        .nullable(),
      __typename: z.string().optional(),
    }),
    __typename: z.string().optional(),
    mapDetails: z.object({
      radius: z.number(),
      __typename: z.string().optional(),
    }),
    reverseGeocoding: z
      .object({
        locations: z
          .object({ fullName: z.string(), __typename: z.string() })
          .array(),
        __typename: z.string().optional(),
      })
      .nullable()
      .optional(),
  }),
  // openDays: z.string(),
  // hidePrice: z.boolean(),
  // rentPrice: MoneyType.nullable(),
  // __typename: z.string(),
  isPromoted: z.boolean().optional(),
  // pushedUpAt: z.string().nullable(),
  totalPrice: MoneyType.nullable(),
  dateCreated: z.string().optional(),
  // roomsNumber: z.string().nullable(),
  // transaction: z.string(),
  // specialOffer: z.null(),
  locationLabel: z
    .object({
      value: z.string(),
      locale: z.string(),
      __typename: z.string(),
    })
    .optional(),
  // peoplePerRoom: z.null(),
  isPrivateOwner: z.boolean().optional(),
  // investmentState: z.null(),
  dateCreatedFirst: z.string().optional(),
  isExclusiveOffer: z.boolean().optional(),
  shortDescription: z.string().nullable().optional(),
  areaInSquareMeters: z.number().nullable().optional(),
  pricePerSquareMeter: MoneyType.nullable(),
  // totalPossibleImages: z.number(),
  // investmentUnitsNumber: z.null(),
  // priceFromPerSquareMeter: z.null(),
  terrainAreaInSquareMeters: z.number().nullable().optional(),
  // investmentUnitsRoomsNumber: z.null(),
  // investmentEstimatedDelivery: z.null(),
  // investmentUnitsAreaInSquareMeters: z.null(),
});

const JsonSchema = z
  .object({
    props: z
      .object({
        pageProps: z.object({
          featureFlags: z.any().transform(() => null),
          translations: z
            .any()
            .optional()
            .transform(() => null),
          tracking: z.any().transform(() => null),
          // data: z.any().transform(() => null),
          ad: z
            .object({
              id: z.number(),
              slug: z.string(),
            })
            .passthrough()
            .optional(),
          data: z.object({
            searchAds: z.object({
              items: Ad.passthrough().array(), //.transform(() => null),
            }), //.passthrough()
          }),
          // .optional(),
        }), //.passthrough()
      })
      .passthrough(),
    // .optional(),
  })
  .passthrough();

export const DataSchema = Ad;

export const Schema = z.object({
  json: JsonSchema,
});
