import { z } from "zod";
import { AdSchema, CategorySchema } from "@zimekk/scrap-schema";

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
    seo: z
      .object({
        title: z.string(),
        description: z.string(),
        h1: z.string(),
        seoText: z.string(),
      })
      .optional(),
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
          .array(),
      ),
      metadata: z.object({
        currencies: z.array(
          z.object({
            code: z.string(),
            symbol: z.string(),
            is_default: z.boolean(),
            prioritized_categories: z.unknown().array(),
          }),
        ),
        distances: z.array(
          z.object({ value: z.number(), is_default: z.boolean() }),
        ),
      }),
      headers: z.object({ "x-request-id": z.string() }),
    }),
    filteredCounts: z.number().nullable().array().or(z.record(z.number())),
  }),
  categories: z
    .object({
      list: z.record(CategorySchema),
      counts: z.number().nullable().array().or(z.record(z.number())),
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
