import { z } from "zod";

const Advert = z
  .object({
    id: z.string(),
    title: z.string(),
    createdAt: z.string(),
    shortDescription: z.string(),
    url: z.string(),
    badges: z.any(),
    category: z.object({
      id: z.string(),
      __typename: z.enum(["Category"]),
    }),
    cepikVerified: z.boolean().optional(),
    location: z.object({
      city: z.object({
        name: z.string(),
        __typename: z.enum(["AdministrativeLevel"]),
      }),
      region: z.object({
        name: z.string(),
        __typename: z.enum(["AdministrativeLevel"]),
      }),
      __typename: z.enum(["Location"]),
    }),
    thumbnail: z
      .object({
        x1: z.string(),
        x2: z.string(),
        __typename: z.enum(["Image"]),
      })
      .nullable(),
    price: z
      .object({
        amount: z.object({
          units: z.number(),
          currencyCode: z.enum(["EUR", "PLN"]),
          __typename: z.enum(["Money"]),
        }),
        badges: z.any(),
        grossPrice: z.any(),
        netPrice: z.any(),
        __typename: z.enum(["Price"]),
      })
      .strict(),
    parameters: z
      .object({
        key: z.enum([
          "360_view_camera",
          "air_conditioning_type",
          "android_auto",
          "apple_carplay",
          "blind_spot_warning",
          "bluetooth_interface",
          "country_origin",
          "cruisecontrol_type",
          "engine_capacity",
          "engine_power",
          "financial_option",
          "fuel_type",
          "gearbox",
          "head_up_display",
          "heated_seat_driver",
          "heated_seat_passenger",
          "lane_control_assistant",
          "lease-url",
          "leasing_concession",
          "make",
          "mileage",
          "model",
          "navigation_system",
          "no_accident",
          "original_owner",
          "rear_view_camera",
          "registered",
          "service_record",
          "show_pir",
          "sport_suspension",
          "sports_steering_wheel",
          "sunroof",
          "vat_discount",
          "version",
          "year",
        ]),
        displayValue: z.string(),
        value: z.string(),
        __typename: z.enum(["AdvertParameter"]),
      })
      .array(),
    sellerUUID: z.string().optional(),
    sellerLink: z.object({
      id: z.string(),
      name: z.string().nullable(),
      websiteUrl: z.string().nullable(),
      logo: z
        .object({
          x1: z.string(),
          __typename: z.enum(["Image"]),
        })
        .nullable(),
      __typename: z.enum(["AdvertSellerLink"]),
    }),
    brandProgram: z
      .object({
        logo: z.any(),
        name: z.any(),
        searchUrl: z.any(),
        url: z.any(),
        __typename: z.enum(["BrandProgram"]),
      })
      .strict()
      .nullable(),
    dealer4thPackage: z
      .object({
        package: z.object({
          id: z.string(),
          name: z.string(),
          __typename: z.enum(["SellerPackage"]),
        }),
        services: z.any(),
        photos: z
          .object({
            nodes: z.any(),
            totalCount: z.number(),
            __typename: z.enum(["PhotosCollection"]),
          })
          .strict(),
        __typename: z.enum(["AdvertDealer4thPackage"]),
      })
      .strict()
      .nullable(),
    priceEvaluation: z
      .object({
        indicator: z.enum(["ABOVE", "BELOW", "IN", "NONE"]),
        __typename: z.enum(["PriceEvaluation"]),
      })
      .optional(),
    valueAddedServices: z.unknown(),
    isPremiumTopAd: z.unknown().nullable(),
    __typename: z.enum(["Advert"]),
  })
  .strict();

export type DataType = z.infer<typeof Advert>;

const UrqlState = z
  .object({
    advertSearch: z
      .object({
        url: z.string(),
        totalCount: z.number(),
        pageInfo: z.object({
          pageSize: z.number(),
          currentOffset: z.number(),
          __typename: z.enum(["Pager"]),
        }),
        edges: z
          .object({
            node: Advert,
            __typename: z.enum(["AdvertEdge"]),
          })
          .transform(({ node }) => node)
          .array(),
        __typename: z.enum(["AdvertSearchOutput"]),
      })
      .transform(({ edges }) => edges)
      .nullable()
      .optional(),
  })
  .transform(({ advertSearch }) => advertSearch);

export const Schema = z.object({
  json: z
    .object({
      props: z.object({
        pageProps: z.object({
          urqlState: z.record(
            z.string(),
            z
              .object({
                data: z.string(),
              })
              .transform(({ data }) =>
                UrqlState.parse(JSON.parse(data), { reportInput: true }),
              ),
          ),
        }),
      }),
    })
    .transform(
      ({
        props: {
          pageProps: { urqlState },
        },
      }) => Object.values(urqlState).find(Boolean) || [],
    ),
});
