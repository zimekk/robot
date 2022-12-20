import { parse } from "node-html-parser";
import { z } from "zod";

const UrqlState = z
  .object({
    advertSearch: z
      .object({
        __typename: z.enum(["AdvertSearchOutput"]),
        url: z.string(),
        seoPageTitle: z.string(),
        // sortedBy: null,
        locationCriteriaChanged: z.boolean(),
        subscriptionKey: z.string(),
        totalCount: z.number(),
        filtersCounters: z
          .object({
            name: z.enum([
              "filter_enum_generation",
              "filter_enum_make",
              "filter_enum_model",
            ]),
            // nodes: [Array],
            __typename: z.enum(["AdvertSearchFilterCounters"]),
          })
          .array()
          .optional(),
        // appliedLocation: null,
        // appliedFilters: [ [Object], [Object], [Object], [Object] ],
        // breadcrumbs: [ [Object], [Object], [Object], [Object] ],
        pageInfo: z.object({
          pageSize: z.number(),
          currentOffset: z.number(),
          __typename: z.enum(["Pager"]),
        }),
        facets: z
          .object({ options: z.any().array(), __typename: z.enum(["Facet"]) })
          .array(),
        sortOptions: z
          .object({
            searchKey: z.enum([
              "created_at:desc",
              "created_at_first:desc",
              "filter_float_price:asc",
              "filter_float_price:desc",
              "filter_float_mileage:asc",
              "filter_float_mileage:desc",
              "filter_float_engine_power:asc",
              "filter_float_engine_power:desc",
            ]),
            label: z.string(),
            __typename: z.enum(["SortOption"]),
          })
          .array(),
        alternativeLinks: z
          .object({
            name: z.enum(["regions", "years"]),
            title: z.string(),
            links: z
              .object({
                title: z.string(),
                url: z.string(),
                counter: z.number(),
                __typename: z.enum(["Link"]),
              })
              .array(),
            __typename: z.enum(["AlternativeLinksBlock"]),
          })
          .array(),
        edges: z
          .object({
            vas: z
              .object({
                isHighlighted: z.boolean(),
                isPromoted: z.boolean(),
                // bumpDate: null,
                __typename: z.enum(["AdvertListingVAS"]),
              })
              .passthrough(),
            node: z
              .object({
                id: z.string(),
                title: z.string(),
                createdAt: z.string(),
                shortDescription: z.string(),
                url: z.string(),
                // badges: [],
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
                    // badges: [],
                    __typename: z.enum(["Price"]),
                  })
                  .passthrough(),
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
                    // logo: null,
                    // searchUrl: null,
                    __typename: z.enum(["BrandProgram"]),
                  })
                  .passthrough(),
                dealer4thPackage: z
                  .object({
                    package: z.object({
                      id: z.string(),
                      name: z.string(),
                      __typename: z.enum(["SellerPackage"]),
                    }),
                    // services: [],
                    photos: z
                      .object({
                        //  nodes: [Array],
                        totalCount: z.number(),
                        __typename: z.enum(["PhotosCollection"]),
                      })
                      .passthrough(),
                    __typename: z.enum(["AdvertDealer4thPackage"]),
                  })
                  .passthrough()
                  .nullable(),
                priceEvaluation: z.object({
                  indicator: z.enum(["ABOVE", "BELOW", "IN", "NONE"]),
                  __typename: z.enum(["PriceEvaluation"]),
                }),
                __typename: z.enum(["Advert"]),
              })
              .passthrough(),
            __typename: z.enum(["AdvertEdge"]),
          })
          .passthrough()
          .array(),
      })
      .passthrough()
      .transform(
        ({
          url,
          edges,
          pageInfo: { currentOffset, pageSize },
          totalCount,
        }) => ({
          url,
          nextPage:
            currentOffset + pageSize < totalCount
              ? currentOffset / pageSize + 2
              : null,
          list: edges.map(
            ({
              node: {
                id,
                thumbnail,
                title,
                price: {
                  amount: { units: price },
                },
                url,
              },
            }) =>
              Object.assign(
                { id, price, title, url },
                thumbnail && (({ x1: thumbnail }) => ({ thumbnail }))(thumbnail)
              )
          ),
        })
      )
      .optional(),
    click2Buy: z
      .object({
        search: z.object({
          __typename: z.enum(["Click2BuySearchOutput"]),
          // edges: z.any().array()
        }),
        __typename: z.enum(["Click2Buy"]),
      })
      .optional()
      .optional(),
  }) //.passthrough()
  .transform(({ advertSearch }) => advertSearch);

export const Schema = z.object({
  props: z.object({
    pageProps: z.object({
      currentUrl: z.string(),
      categories: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          parentId: z.null(),
          uriPath: z.string(),
          code: z.string(),
          name: z.string(),
        })
      ),
      urqlState: z
        .record(
          z.object({
            data: z
              .string()
              .transform((data) => UrqlState.parse(JSON.parse(data)))
              .optional(),
          })
        )
        .transform((urqlState) =>
          Object.values(urqlState)
            .map(({ data }) => data)
            .find(Boolean)
        ),
      urqlClient: z.null(),
      _sentryTraceData: z.string(),
      _sentryBaggage: z.string(),
    }),
    $_optimusContextProps: z.object({
      featureFlags: z.record(z.boolean()),
      cookies: z.any(),
      experimentCookie: z.string(),
    }),
    Server_routeId: z.string(),
    serverCookieSize: z.object({ ldf: z.number() }),
    emotionNonce: z.string(),
    __lang: z.string(),
    __namespaces: z.object({
      common: z.any(),
      listing: z.any(),
      featuredDealer: z.record(z.string()),
      sellerReviews: z.record(z.string()),
      pricing_insights: z.record(z.string()),
      authentication: z.record(z.string()),
      payment: z.record(z.string()),
    }),
  }),
  page: z.string(),
  query: z.any(),
  buildId: z.string(),
  assetPrefix: z.string(),
  runtimeConfig: z.object({ version: z.string() }),
  isFallback: z.boolean(),
  dynamicIds: z.array(z.number()),
  customServer: z.boolean(),
  gip: z.boolean(),
  appGip: z.boolean(),
  locale: z.string(),
  locales: z.array(z.string()),
  defaultLocale: z.string(),
  scriptLoader: z.array(z.unknown()),
});

export default ({ html }: { html: string }) => ({
  json: Schema.parse(
    JSON.parse(parse(html).querySelector("script#__NEXT_DATA__")?.text || "{}")
  ),
});
