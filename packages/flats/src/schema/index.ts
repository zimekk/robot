import { z } from "zod";
import { CategorySchema } from "@dev/plots/schema";

const AdSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    category: z.object({
      id: z.number(),
      type: z.string(),
      itemType: z.string(),
    }),
    map: z.object({
      zoom: z.number(),
      lat: z.number(),
      lon: z.number(),
      radius: z.number(),
      show_detailed: z.boolean(),
    }),
    isBusiness: z.boolean(),
    url: z.string(),
    isHighlighted: z.boolean(),
    isPromoted: z.boolean(),
    promotion: z.object({
      highlighted: z.boolean(),
      urgent: z.boolean(),
      top_ad: z.boolean(),
      options: z.array(z.string()),
      b2c_ad_page: z.boolean(),
      premium_ad_page: z.boolean(),
    }),
    externalUrl: z.string().optional(),
    delivery: z.object({
      rock: z.object({
        offer_id: z.null(),
        active: z.boolean(),
        mode: z.string(),
      }),
    }),
    createdTime: z.string(),
    lastRefreshTime: z.string(),
    pushupTime: z.string().optional(),
    validToTime: z.string(),
    isActive: z.boolean(),
    status: z.string(),
    params: z.array(
      z.object({
        key: z.string(),
        name: z.string(),
        type: z.string(),
        value: z.string(),
        normalizedValue: z.string(),
      })
    ),
    itemCondition: z.string(),
    price: z.object({
      budget: z.boolean(),
      free: z.boolean(),
      exchange: z.boolean(),
      displayValue: z.string(),
      regularPrice: z.object({
        value: z.number(),
        currencyCode: z.string(),
        currencySymbol: z.string(),
        negotiable: z.boolean(),
        priceFormatConfig: z.object({
          decimalSeparator: z.string(),
          thousandsSeparator: z.string(),
        }),
      }),
    }),
    salary: z.null(),
    partner: z.object({ code: z.string() }),
    isJob: z.boolean(),
    photos: z.array(z.string()),
    photosSet: z.array(z.string()),
    location: z.object({
      cityName: z.string(),
      cityId: z.number(),
      cityNormalizedName: z.string(),
      regionName: z.string(),
      regionId: z.number(),
      regionNormalizedName: z.string(),
      districtName: z.string().nullable(),
      districtId: z.number(),
      pathName: z.string(),
    }),
    urlPath: z.string(),
    contact: z.object({
      chat: z.boolean(),
      courier: z.boolean(),
      name: z.string(),
      negotiation: z.boolean(),
      phone: z.boolean(),
    }),
    user: z.object({
      id: z.number(),
      name: z.string(),
      photo: z.string().nullable(),
      logo: z.string().nullable(),
      otherAdsEnabled: z.boolean(),
      socialNetworkAccountType: z.string().nullable(),
      isOnline: z.boolean(),
      lastSeen: z.string(),
      about: z.string(),
      bannerDesktopURL: z.string(),
      logo_ad_page: z.string().nullable(),
      company_name: z.string(),
      created: z.string(),
      sellerType: z.null(),
      uuid: z.string(),
    }),
    shop: z.object({ subdomain: z.string().nullable() }),
    safedeal: z.object({
      weight: z.number(),
      weight_grams: z.number(),
      status: z.string(),
      safedeal_blocked: z.boolean(),
      allowed_quantity: z.array(z.unknown()),
    }),
    searchReason: z.string(),
    isNewFavouriteAd: z.boolean(),
  })
  .strict();

const JsonSchema = z.object({
  listing: z.object({
    listing: z.object({
      pageNumber: z.number(),
      totalElements: z.number(),
      visibleElements: z.number(),
      totalPages: z.number(),
      ads: AdSchema.array(),
      metaData: z.object({
        searchId: z.string(),
        spellCheckerQuery: z.null(),
        searchSuggestion: z
          .object({
            type: z.enum(["extended_distance", "no_results_distance"]),
            url: z.string(),
            changes: z.object({}),
          })
          .nullable(),
        favSearchNewAds: z.unknown().array(),
        location: z.null(),
        facets: z.object({
          district: z
            .object({
              id: z.number(),
              count: z.number(),
              label: z.string(),
              url: z.string(),
            })
            .array()
            .optional(),
          category_without_exclusions: z
            .object({
              id: z.number(),
              count: z.number(),
              label: z.string(),
              url: z.string(),
            })
            .array()
            .optional(),
        }),
        searchReason: z.object({
          promoted: z.number().array().optional(),
          organic: z.number().array().optional(),
        }),
        subSections: z.unknown().array(),
        search_request_id: z.string().optional(),
      }),
      links: z.object({
        self: z.string().optional(),
        next: z.string().optional(),
        first: z.string().optional(),
      }),
      params: z.object({
        offset: z.number(),
        limit: z.number(),
        category_id: z.number(),
        region_id: z.number(),
        city_id: z.number().optional(),
        filter_refiners: z.string(),
        facets: z.string(),
      }),
      requestParams: z.object({
        page: z.number(),
        categoryPath: z.string(),
        query: z.string(),
        params: z.object({}),
        options: z.object({
          spellCheckerDisabledByExperiment: z.boolean(),
          mWebAdlimitPerPageVariant: z.string().optional(),
        }),
      }),
      categoryId: z.number(),
      categories: z.null(),
      viewType: z.string(),
      expansionListing: z
        .object({
          pageNumber: z.number(),
          totalElements: z.number(),
          visibleElements: z.number(),
          totalPages: z.number(),
          ads: z.object({}).array(),
        })
        .nullable(),
    }),
    popularSearches: z.unknown().array(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      h1: z.string(),
      seoText: z.string(),
    }),
    breadcrumbs: z
      .object({
        label: z.string(),
        href: z.string(),
        categoryId: z.number().optional(),
      })
      .array(),
    locationNames: z.object({
      city: z
        .object({
          id: z.number(),
          name: z.string(),
          normalized_name: z.string(),
          lat: z.number(),
          lon: z.number(),
        })
        .optional(),
      municipality: z.object({ name: z.string() }).optional(),
      county: z.object({ name: z.string() }).optional(),
      region: z.object({
        id: z.number(),
        name: z.string(),
        normalized_name: z.string(),
      }),
    }),
    filters: z.object({
      data: z.record(
        z
          .object({
            type: z.string(),
            label: z.string(),
            unit: z.string().nullable(),
            scope: z.string().nullable(),
            values: z.unknown().array(),
            options: z
              .object({
                categories: z.array(z.number()),
                order: z.number(),
                orderForSearch: z.number(),
                ranges: z.array(z.unknown()),
                constraints: z.object({ type: z.string() }),
                fakeCategory: z.boolean().optional(),
              })
              .array(),
            default_value: z.string().optional(),
          })
          .array()
      ),
      metadata: z.object({
        currencies: z.array(
          z.object({
            code: z.string(),
            symbol: z.string(),
            is_default: z.boolean(),
            prioritized_categories: z.unknown().array(),
          })
        ),
        distances: z.array(
          z.object({ value: z.number(), is_default: z.boolean() })
        ),
      }),
      headers: z.object({ "x-request-id": z.string() }),
    }),
    filteredCounts: z.number().nullable().array(),
  }),
  categories: z.object({
    list: z.record(CategorySchema),
    counts: z.number().nullable().array(),
    promos: z.array(
      z.object({
        icon: z.object({ image_url: z.string(), big_image_url: z.string() }),
        name: z.string(),
        link: z.object({ url: z.string(), is_external: z.boolean() }),
      })
    ),
  }),
  cookies: z.object({}),
});

export const DataSchema = AdSchema;

export const DiffSchema = DataSchema.strip()
  .extend({
    user: DataSchema.shape.user.omit({
      isOnline: true,
      lastSeen: true,
    }),
  })
  .omit({
    searchReason: true,
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
