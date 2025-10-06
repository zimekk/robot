import { z } from "zod";

const Offer = z.object({
  id: z.number(),
  address: z.string(),
  configuration: z.object({
    display_type: z.number(),
    fastcall_uid: z.null(),
    hide_properties_prices_for_anonymous_users: z.boolean(),
    is_autoresponder_enabled: z.boolean(),
    personal_data_processor_name: z.string(),
    personal_data_processor_url: z.null(),
    privacy_policy_url: z.string().nullable(),
  }),
  construction_date_range: z.object({
    lower: z.string(),
    upper: z.string(),
    bounds: z.string(),
  }),
  description: z.string().nullable(),
  geo_point: z.object({
    type: z.string(),
    coordinates: z.array(z.number()),
  }),
  has_active_promotions: z.boolean(),
  has_distinction: z.boolean(),
  has_required_prices: z.null(),
  is_holiday_location: z.boolean(),
  logo: z.any(),
  main_image: z.object({
    m_img_155x87: z.string(),
    m_img_224x147: z.string().optional(),
    m_img_277x160: z.string().optional(),
    m_img_336x160: z.string().optional(),
    m_img_350x230: z.string().optional(),
    m_img_350x648: z.string().optional(),
    m_img_375x211: z.string(),
    m_img_440x248: z.string().optional(),
    m_img_440x440: z.string().optional(),
    m_img_500: z.string(),
    m_img_728x728: z.string().optional(),
    m_img_750: z.string(),
    m_img_760x428: z.string().optional(),
    m_img_983x552: z.string().optional(),
    m_img_1160x653: z.string().optional(),
    m_img_1500: z.string().optional(),
  }),
  name: z.string(),
  price_type: z.number().nullable(),
  properties: z.number().nullable(),
  region: z.object({
    full_name: z.string(),
    id: z.number(),
    name: z.string(),
    name_declension_where: z.string(),
    short_name: z.string(),
    short_name_reverted: z.string(),
    slug: z.string(),
    stats: z.object({ promotions_count_total: z.number() }),
  }),
  slug: z.string(),
  sort_distance: z.number().nullable(),
  stats: z.object({
    distance_from_region: z.object({
      center: z.boolean(),
      coords: z.array(z.number()),
      region: z.string(),
      distance: z.number(),
    }),
    properties_count_for_sale: z.number(),
    properties_roi_max: z.number(),
    properties_with_roi_count: z.number(),
    ranges_area_max: z.number(),
    ranges_area_min: z.number(),
    ranges_price_m2_max: z.number(),
    ranges_price_m2_min: z.number(),
    ranges_price_max: z.number(),
    ranges_price_min: z.number(),
    ranges_rooms_max: z.number(),
    ranges_rooms_min: z.number(),
    rooms: z.array(z.number()),
  }),
  street_name: z.string(),
  street_number: z.string().nullable(),
  type: z.number(),
  vendor: z.object({
    id: z.number(),
    configuration: z
      .object({ application_external_api: z.null().optional() })
      .optional(),
    logo: z.object({
      v_log_80x60: z.string(),
      v_log_120x90: z.string(),
      v_log_160x120: z.string(),
    }),
    name: z.string(),
    offices: z.array(
      z.object({
        address: z.string(),
        phone: z.string(),
        mobile: z.string().nullable(),
        type: z.number(),
        region: z.object({ id: z.number(), short_name: z.string() }),
      }),
    ),
    slug: z.string(),
  }),
  website: z.string().nullable(),
  change_color: z.boolean().optional(),
});

const SelectedRegion = z.object({
  full_name: z.string(),
  full_name_reverted: z.string(),
  id: z.number(),
  included_location: z.object({
    description: z.string(),
    transport_intro: z.string(),
    education_intro: z.string(),
    medical_care_intro: z.string(),
    services_intro: z.string(),
    sport_intro: z.string(),
  }),
  is_duplicate: z.boolean(),
  name: z.string(),
  name_declension_about: z.string(),
  name_declension_what: z.string(),
  name_declension_where: z.string(),
  parent: z
    .object({
      id: z.number(),
      name: z.string(),
      slug: z.string(),
    })
    .nullable(),
  short_name: z.string(),
  short_name_reverted: z.string(),
  slug: z.string(),
  stats: z.object({
    active_1_percentile_price_m2: z.number().nullable(),
    active_2_percentile_price_m2: z.number().nullable(),
    active_3_percentile_price_m2: z.number().nullable(),
    average_price_m2: z.number().nullable(),
    offers_count_for_sale: z.number(),
    promotions_count_discounts: z.number(),
    promotions_count_last_minutes: z.number(),
    promotions_count_open_days: z.number(),
    promotions_count_presales: z.number(),
    promotions_count_promotions: z.number(),
    promotions_count_total: z.number(),
    properties_all_count_for_sale: z.number(),
    properties_all_rooms_ranges: z.record(z.string(), z.number()),
    properties_commercials_count_cheap: z.number(),
    properties_commercials_rooms_ranges: z.record(z.string(), z.number()),
    properties_flats_count_cheap: z.number(),
    properties_flats_count_for_sale: z.number(),
    properties_flats_count_luxury: z.number(),
    properties_flats_ranges_area_max: z.number(),
    properties_flats_ranges_area_min: z.number(),
    properties_flats_ranges_price_min: z.number(),
    properties_flats_rooms_ranges: z.record(z.string(), z.number()),
    properties_houses_count_cheap: z.number(),
    properties_houses_count_for_sale: z.number(),
    properties_houses_count_luxury: z.number(),
    properties_houses_count_ready: z.number(),
    properties_flats_count_ready: z.number(),
    properties_commercial_count_ready: z.number(),
    properties_houses_ranges_area_max: z.number(),
    properties_houses_ranges_area_min: z.number(),
    properties_houses_ranges_price_min: z.number(),
    properties_houses_rooms_ranges: z.record(z.string(), z.number()),
    region_type_city: z
      .object({
        id: z.number(),
        slug: z.string(),
        name: z.string(),
      })
      .nullable(),
    region_type_county: z.null(),
    region_type_district: z.null(),
    region_type_housing_estate: z.null(),
    region_type_town: z.null(),
    region_type_voivodeship: z.object({
      id: z.number(),
      slug: z.string(),
      name: z.string(),
    }),
  }),
  type: z.number(),
  tree: z.object({ id: z.number(), left: z.number(), right: z.number() }),
});

const JsonSchema = z.object({
  abTesting: z.object({ tests: z.object({}), isInitialized: z.boolean() }),
  article: z.object({
    detail: z.object({
      comments: z.object({
        list: z.array(z.unknown()),
        listRequest: z.number(),
      }),
      article: z.null(),
      requestState: z.number(),
      relatedArticles: z.null(),
      relatedArticlesRequestState: z.number(),
    }),
    list: z.object({
      articles: z.array(z.unknown()),
      page: z.number(),
      count: z.number(),
      pageSize: z.number(),
      requestState: z.number(),
      latestQuery: z.object({}),
      articlesFeatured: z.array(z.unknown()),
      category: z.null(),
    }),
    authors: z.object({
      authors: z.array(z.unknown()),
      page: z.number(),
      count: z.number(),
      pageSize: z.number(),
      requestState: z.number(),
    }),
    authorDetail: z.object({
      author: z.null(),
      articles: z.array(z.unknown()),
      authorRequestState: z.number(),
      articlesPage: z.null(),
      articlesCount: z.null(),
    }),
  }),
  notifications: z.array(z.unknown()).or(
    z
      .object({
        list: z.array(z.unknown()),
      })
      .passthrough(),
  ),
  application: z.object({}),
  backToUrl: z.object({ url: z.string(), text: z.string() }),
  favourite: z.object({
    fetchRequest: z.number(),
    patchRequest: z.number().optional(),
    favourites: z.object({
      offers: z.unknown(),
      articles: z.array(z.unknown()).optional(),
      initialized: z.boolean(),
    }),
  }),
  googleMapPOI: z
    .object({
      detail: z.object({ pois: z.object({}), poisRequest: z.number() }),
      travelDirections: z.object({
        activePoi: z.null(),
        activePoiDirections: z.null(),
        poisDirections: z.object({}),
      }),
      userPoi: z.array(z.unknown()),
    })
    .optional(),
  googleTagManager: z.boolean(),
  homepage: z.object({
    recommendedOfferList: z.array(z.unknown()),
    count: z.null(),
    requestState: z.number(),
  }),
  isApplicationSent: z.boolean().optional(),
  isAuthenticated: z.boolean(),
  investmentOffer: z.object({
    articles: z.array(z.unknown()),
    stats: z.null(),
    list: z.object({
      offers: z.object({
        offerList: z.array(z.unknown()),
        count: z.number(),
        pageSize: z.number(),
        page: z.number(),
        requestState: z.number(),
        latestQuery: z.object({}),
      }),
      seo: z.object({ seoContent: z.null(), requestState: z.number() }),
      form: z.object({
        formValues: z.object({ category: z.string(), subcategory: z.string() }),
      }),
      map: z.object({ data: z.null(), requestState: z.number() }).optional(),
      propertiesCount: z.number(),
      propertiesCountRequestState: z.number(),
    }),
    categories: z.null(),
  }),
  login: z
    .object({
      authModalTab: z.number(),
      userSource: z.null(),
      userHasLoggedIn: z.null(),
    })
    .optional(),
  marketplace: z.object({ regions: z.array(z.unknown()) }),
  metaData: z
    .object({
      title: z.string(),
      description: z.string(),
      canonical: z.string(),
      next: z.string(),
      robots: z.string(),
      ogDescription: z.string(),
      ogTitle: z.string(),
      ogType: z.string(),
      ogUrl: z.string(),
      dimensionRegion: z.string(),
      lang: z.string(),
    })
    .partial(),
  newsletter: z.object({
    unsubscribe: z.object({
      email: z.null(),
      requestState: z.number(),
      error: z.null(),
    }),
  }),
  offerDetail: z.object({
    offer: z.null(),
    offerRequest: z.number(),
    favouriteOffers: z.array(z.unknown()).optional(),
    favouriteOffersRequest: z.number().optional(),
    articles: z.array(z.unknown()),
    articlesRequest: z.number(),
    promotions: z.array(z.unknown()),
    promotionsRequest: z.number(),
    properties: z.object({
      filter: z.object({
        properties: z.array(z.unknown()),
        requestState: z.number(),
        page: z.number(),
        count: z.number(),
        pageSize: z.number(),
      }),
      investment: z.object({
        properties: z.array(z.unknown()),
        requestState: z.number(),
        page: z.number(),
        count: z.number(),
        pageSize: z.number(),
      }),
      all: z
        .object({
          properties: z.array(z.unknown()),
          requestState: z.number(),
          page: z.number(),
          count: z.number(),
          pageSize: z.number(),
        })
        .optional(),
      modal: z.object({
        properties: z.array(z.unknown()),
        requestState: z.number(),
        page: z.number(),
        count: z.number(),
        pageSize: z.number(),
      }),
    }),
    relatedOffers: z.array(z.unknown()),
    relatedOffersRequestState: z.number(),
    nearbyRegions: z.array(z.unknown()).optional(),
    nearbyRegionsRequestState: z.number().optional(),
    recommendedOffers: z.array(z.unknown()),
    appliedOffersList: z.array(z.unknown()).optional(),
    appliedOffersListRequestState: z.number().optional(),
  }),
  offerList: z.object({
    list: z.object({
      offers: Offer.array(),
      privileged_offers: z.array(z.unknown()),
      sold_offers: z.array(z.unknown()),
      soon_finished_offers: z.array(z.unknown()),
      sold_offers_page: z.number(),
      sold_offers_count: z.number(),
      soon_finished_offers_count: z.number(),
      count: z.number(),
      page: z.number(),
      page_size: z.number(),
      requestState: z.number(),
      latestQuery: z.object({ type: z.string(), region: z.array(z.string()) }),
      error: z.null(),
      propertiesCount: z.number(),
      propertiesCountRequestState: z.number(),
    }),
    selectedRegions: SelectedRegion.array(),
    articles: z.array(
      z.object({
        author: z.object({ name: z.string() }),
        date_published: z.string(),
        date_range: z
          .object({
            lower: z.string(),
            upper: z.null(),
            bounds: z.string(),
          })
          .nullable(),
        excerpt: z.string(),
        gallery: z.object({ image: z.object({ g_img_440x440: z.string() }) }),
        id: z.number(),
        slug: z.string(),
        title: z.string(),
      }),
    ),
    articlesRequest: z.number(),
    childrenRegions: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          slug: z.string(),
          stats: z.object({
            promotions_count_total: z.number(),
            properties_all_count_for_sale: z.number(),
            properties_commercials_count_for_sale: z.number(),
            properties_flats_count_for_sale: z.number(),
            properties_houses_count_for_sale: z.number(),
            vendors_count_for_sale: z.number(),
          }),
          full_name_reverted: z.string(),
        }),
      )
      .optional(),
    childrenRegionsRequest: z.number().optional(),
    parentRegions: z.array(z.unknown()).optional(),
    parentRegionsRequest: z.number().optional(),
    search: z.object({
      id: z.number(),
      slug: z.string(),
      rooms_choice: z.array(z.unknown()).nullable(),
      create_date: z.string(),
      update_date: z.string(),
      name: z.string(),
      price: z.null(),
      rooms: z.null(),
      area: z.null(),
      is_luxury: z.boolean(),
      is_mdm: z.boolean(),
      family_type: z.null(),
      is_holiday: z.boolean(),
      holiday_location: z.null(),
      show_in_sitemap: z.boolean(),
      sort: z.null(),
      calls_count: z.number(),
      canonical_url: z.null(),
      seo_description: z.string(),
      seo_meta_keywords: z.array(z.string()).nullable(),
      show_meta_fields: z.boolean(),
      meta_title: z.null(),
      meta_description: z.string().nullable(),
      region: z.number(),
      type: z.number(),
    }),
    nearbyRegions: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        slug: z.string(),
        stats: z.object({
          promotions_count_total: z.number(),
          properties_all_count_for_sale: z.number(),
          properties_commercials_count_for_sale: z.number(),
          properties_flats_count_for_sale: z.number(),
          properties_houses_count_for_sale: z.number(),
          vendors_count_for_sale: z.number(),
        }),
        full_name_reverted: z.string(),
      }),
    ),
    nearbyRegionsRequestState: z.number().optional(),
  }),
  offerListMap: z.object({
    list: z.object({
      offers: z.array(z.unknown()),
      count: z.number(),
      requestState: z.number(),
      latestQuery: z.object({}),
      error: z.null(),
      propertiesCount: z.number(),
    }),
    selectedOffer: z
      .object({ data: z.null(), requestState: z.number() })
      .optional(),
    selectedProperty: z.object({ data: z.null(), requestState: z.number() }),
    applicationSentOffers: z
      .object({
        data: z.array(z.unknown()),
        requestState: z.number(),
      })
      .optional(),
    region: z
      .object({ data: z.array(z.unknown()), requestState: z.number() })
      .optional(),
    selectedRegion: SelectedRegion.array(),
  }),
  offersNearby: z.object({
    application: z.array(z.unknown()),
    applicationRequestState: z.number(),
    offerList: z.array(z.unknown()).optional(),
    offerListRequestState: z.number().optional(),
    offerDetail: z.array(z.unknown()).optional(),
    offerDetailRequestState: z.number().optional(),
    propertyDetail: z.array(z.unknown()).optional(),
    propertyDetailRequestState: z.number().optional(),
  }),
  ourOffer: z.object({
    testimonials: z.object({ list: z.array(z.unknown()) }),
  }),
  promotionList: z.object({
    promotions: z.array(z.unknown()),
    region: z.null(),
    statistic: z.null(),
    count: z.number(),
    page: z.number(),
    page_size: z.number(),
    requestState: z.number(),
    latestQuery: z.object({}),
    error: z.null(),
    form: z.object({ formValues: z.object({ type: z.string() }) }),
  }),
  partnersList: z.object({ list: z.array(z.unknown()) }),
  property: z.object({
    property: z.null(),
    propertyRequest: z.number(),
    favouriteProperties: z.array(z.unknown()).optional(),
    favouritePropertiesRequest: z.number().optional(),
    articles: z.array(z.unknown()),
    articlesRequest: z.number(),
    offersNearby: z.array(z.unknown()).optional(),
    offersNearbyCount: z.null().optional(),
    offersNearbyRequest: z.number().optional(),
    relatedOffers: z.array(z.unknown()),
    relatedOffersRequestState: z.number(),
    nearbyRegions: z.array(z.unknown()).optional(),
    nearbyRegionsRequestState: z.number().optional(),
    promotions: z.array(z.unknown()),
    promotionsRequest: z.number(),
    recommendedProperties: z.array(z.unknown()),
    otherPropertiesInOffer: z.object({
      list: z.array(z.unknown()),
      count: z.number(),
      formValues: z.object({
        rooms: z.object({ lower: z.string(), upper: z.string() }),
      }),
      request: z.number(),
      errors: z.null(),
      excludeCurrentRoomFilterOption: z.boolean(),
    }),
    stats: z.object({ data: z.null(), requestState: z.number() }),
    appliedPropertiesList: z.array(z.unknown()).optional(),
    appliedPropertiesListRequestState: z.number().optional(),
  }),
  ranking: z
    .object({
      cities: z.object({ list: z.array(z.unknown()) }),
      monthly: z.object({
        positions: z.array(z.unknown()),
        region_description: z.null(),
        month: z.null(),
        year: z.null(),
        region: z.null(),
      }),
      quarterly: z.object({
        positions: z.array(z.unknown()),
        year: z.null(),
        quarter: z.null(),
      }),
      quarterList: z.object({ list: z.array(z.unknown()) }),
      partnerList: z.object({ list: z.array(z.unknown()) }),
      form: z.object({
        formValues: z.object({ period: z.string(), city: z.string() }),
      }),
      region: z.null(),
    })
    .optional(),
  responseState: z.object({
    state: z.number(),
    status: z.number(),
    url: z.string(),
  }),
  search: z.object({
    activeDropdownItem: z.object({ label: z.string(), id: z.null() }),
    multiRegionList: z.object({
      showMultiRegionList: z.boolean(),
      regions: z.array(z.unknown()),
    }),
    formValues: z.object({
      search: z.string(),
      type: z.array(z.unknown()),
      rooms: z.object({ lower: z.string(), upper: z.string() }),
      price: z.object({ lower: z.string(), upper: z.string() }),
      area: z.object({ lower: z.string(), upper: z.string() }),
      distance: z.string(),
    }),
    currentTab: z.number().optional(),
    fetchAllRequest: z.number(),
    regions: z.array(z.unknown()),
    fetchRegionsRequest: z.number(),
    places: z.array(z.unknown()),
    fetchPlacesRequest: z.number(),
    offers: z.array(z.unknown()),
    fetchOffersRequest: z.number(),
    vendors: z.array(z.unknown()),
    fetchVendorsRequest: z.number(),
  }),
  siteMap: z.object({
    regions: z.object({
      voivodeship: z.null(),
      aggregation: z.null(),
      county: z.null(),
      city: z.null(),
    }),
    offers: z.null(),
    articleCategories: z.null(),
    articles: z.object({
      list: z.array(z.unknown()),
      count: z.number(),
      page: z.number(),
      page_size: z.number(),
    }),
    vendors: z.null(),
  }),
  smartAds: z.object({ offers: z.array(z.unknown()) }),
  terms: z
    .object({
      content: z.null(),
      slug: z.null(),
      title: z.null(),
      requestState: z.number(),
    })
    .optional(),
  ui: z.object({ bottomFixedElementHeight: z.null() }),
  user: z.object({
    profile: z.object({
      data: z.null(),
      requestState: z.number(),
      patchUserForm: z
        .object({
          formValues: z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string(),
            sex: z.string(),
          }),
          request: z.number(),
          errors: z.null(),
        })
        .optional(),
    }),
    hidden: z
      .object({
        fetchRequest: z.number(),
        patchRequest: z.number(),
        hidden: z.object({
          offer: z.array(z.unknown()),
          application: z.array(z.unknown()),
          recommendation_property: z.array(z.unknown()),
        }),
      })
      .optional(),
  }),
  variables: z.object({
    data: z.object({
      offer_construction_end_date: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_facilities: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_natural_sites: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_configuration_display_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_funds_protection: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_standard_description_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_parking_place_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_holiday_location: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_size: z.array(z.object({ value: z.number(), label: z.string() })),
      offer_distance: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_display_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_price_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_listing_bullets: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      offer_listing_bullets_short: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      promotion_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_flat_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_house_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_ownership_form: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_kitchen_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_quarters: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_additional_areas: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      property_room_area_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      recommendation_stat_label: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      user_type: z.array(z.object({ value: z.number(), label: z.string() })),
      user_sex: z.array(z.object({ value: z.number(), label: z.string() })),
      vendor_office_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      vendor_type: z.array(z.object({ value: z.number(), label: z.string() })),
      region_type: z.array(z.object({ value: z.number(), label: z.string() })),
      application_meeting_time_preferences: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      application_source_sections: z.array(
        z.object({ value: z.number().nullable(), label: z.string() }),
      ),
      for_investor_search_type: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
      country_codes: z.array(
        z.object({ value: z.number(), label: z.string() }),
      ),
    }),
    requestState: z.number(),
  }),
  vendor: z.object({
    list: z.object({
      vendors: z.array(z.unknown()),
      soldVendors: z.array(z.unknown()),
      soldVendorsCount: z.number(),
      allOffersCount: z.number(),
      region: z.null(),
      count: z.number(),
      pageSize: z.number(),
      page: z.number(),
      requestState: z.number(),
      latestQuery: z.object({}),
      regionSEOMetadata: z.null(),
    }),
    detail: z.object({
      articles: z.null(),
      cities: z.null(),
      offers: z.array(z.unknown()),
      offersCount: z.null(),
      offersRequest: z.number(),
      offersInRegion: z.array(z.unknown()),
      offersInRegionRequest: z.number(),
      rankings: z.null(),
      vendor: z.null(),
      vendorRequest: z.number(),
      count: z.null().optional(),
    }),
    nearbyRegionVendors: z
      .object({
        nearbyRegions: z.array(z.unknown()),
        childrenRegions: z.array(z.unknown()),
      })
      .optional(),
    fetchAllRequest: z.number(),
  }),
  viewType: z.object({
    current: z.string(),
    currentData: z.object({ contentRegion: z.string() }),
    previous: z.null(),
  }),
});

export const DataSchema = Offer;

export const Schema = z.object({
  json: JsonSchema,
});
