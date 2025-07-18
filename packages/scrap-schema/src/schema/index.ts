import { z } from "zod";

export const AdSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.object({
    id: z.number(),
    type: z.string(),
    itemType: z.string().optional(),
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
    options: z.string().array(),
    b2c_ad_page: z.boolean(),
    premium_ad_page: z.boolean(),
  }),
  externalUrl: z.string().nullable().optional(),
  delivery: z.object({
    rock: z.object({
      offer_id: z.string().nullable(),
      active: z.boolean(),
      mode: z.string(),
    }),
  }),
  createdTime: z.string(),
  lastRefreshTime: z.string(),
  pushupTime: z.string().nullable().optional(),
  validToTime: z.string(),
  isActive: z.boolean(),
  status: z.string(),
  params: z
    .object({
      key: z.string(),
      name: z.string(),
      type: z.string(),
      value: z.string(),
      normalizedValue: z.string().optional(),
    })
    .array(),
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
  photos: z.string().array(),
  photosSet: z.string().array(),
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
    weight: z.number().optional(),
    weight_grams: z.number(),
    status: z.string().optional(),
    safedeal_blocked: z.boolean().optional(),
    allowed_quantity: z.unknown().array(),
  }),
  searchReason: z.string(),
  isNewFavouriteAd: z.boolean(),
});

export const CategorySchema = z.object({
  id: z.number(),
  label: z.string(),
  parentId: z.number(),
  name: z.string(),
  normalizedName: z.string(),
  position: z.number(),
  viewType: z.string(),
  iconName: z.string(),
  level: z.number(),
  displayOrder: z.number(),
  children: z.number().array(),
  path: z.string(),
  type: z.string(),
  isAdding: z.boolean(),
  isSearch: z.boolean(),
  isOfferSeek: z.boolean(),
  privateBusiness: z.boolean(),
  photosMax: z.number(),
  img: z.string().optional(),
});

const LocationSchema = z.object({
  city: z.string().nullable(),
  cityId: z.number().nullable(),
  description: z.string(),
  district: z.string().nullable(),
  districtId: z.number().nullable(),
  region: z.string().nullable(),
  regionId: z.number().nullable(),
  title: z.string(),
  lat: z.number().nullable(),
  lon: z.number().nullable(),
  geoDescription: z.string(),
  radius: z.number(),
  zoom: z.number(),
});

export const DataSchema = AdSchema;

export const JsonSchema = z.object({
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
        location: LocationSchema.nullable(),
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
        facets: z.string().optional(),
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
      categories: z.null().optional(),
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
      locationNames: z
        .object({
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
        })
        .optional(),
    }),
  }),
  categories: z
    .object({
      list: z.record(z.string(), CategorySchema),
      counts: z
        .number()
        .nullable()
        .array()
        .or(z.record(z.string(), z.number())),
      promos: z.array(
        z.object({
          icon: z.object({ image_url: z.string(), big_image_url: z.string() }),
          name: z.string(),
          link: z.object({ url: z.string(), is_external: z.boolean() }),
        }),
      ),
    })
    .optional(),
  cookies: z.object({}).optional(),
});

export const Schema = z.object({
  json: JsonSchema,
});
