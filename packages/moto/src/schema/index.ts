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
          "make",
          "year",
          "mileage",
          "engine_capacity",
          "fuel_type",
        ]),
        displayValue: z.string(),
        value: z.string(),
        __typename: z.enum(["AdvertParameter"]),
      })
      .array(),
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
        __typename: z.enum(["BrandProgram"]),
      })
      .strict(),
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
    priceEvaluation: z.object({
      indicator: z.enum(["ABOVE", "BELOW", "IN", "NONE"]),
      __typename: z.enum(["PriceEvaluation"]),
    }),
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
      .optional(),
  })
  .transform(({ advertSearch }) => advertSearch);

export const Schema = z.object({
  json: z
    .object({
      props: z.object({
        pageProps: z.object({
          urqlState: z.record(
            z
              .object({
                data: z.string(),
              })
              .transform(({ data }) => UrqlState.parse(JSON.parse(data)))
          ),
        }),
      }),
    })
    .transform(
      ({
        props: {
          pageProps: { urqlState },
        },
      }) => Object.values(urqlState).find(Boolean) || []
    ),
});
