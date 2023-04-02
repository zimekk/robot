import { z } from "zod";

const ProductSchema = z.object({
  productInfo: z.object({
    articleNumber: z.string(),
    modelNumber: z.string(),
    name: z.string(),
  }),
  price: z.object({
    priceType: z.string(),
    sellingPrice: z.number(),
    currency: z.string(),
  }),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const Schema = z.object({
  json: z
    .object({
      listingViewed: z.object({
        event: z.string(),
        listing: z.object({
          listingParams: z.object({
            refinements: z
              .object({
                refinementType: z.string(),
                refinementValue: z.string(),
              })
              .array(),
            searchInfo: z.object({ searchTermEntered: z.null() }),
            ASO: z.object({
              available_sort_by: z.string(),
              default_sort_by: z.string(),
              article_level_sort_by: z.string(),
            }),
            defaultOrder: z.boolean(),
          }),
          listingResults: z.object({
            item: ProductSchema.extend({
              itemPosition: z.number(),
            }).array(),
            resultsCount: z.number(),
          }),
        }),
      }),
      pageLoaded: z.object({
        event: z.string(),
        currency: z.string(),
        page: z.object({
          brand: z.string(),
          pageType: z.string(),
          pageGender: z.string(),
          pageSubtype: z.string(),
          pageCategory: z.string(),
          pageName: z.string(),
          siteLanguage: z.string(),
          siteCountry: z.string(),
          subsection: z.string(),
          subsection2: z.string(),
          subsection3: z.string(),
          subsection4: z.string().optional(),
          outletStore: z.boolean(),
          specialCol: z.boolean(),
        }),
        cartID: z.string(),
      }),
    })
    .transform(
      ({
        listingViewed: {
          listing: {
            listingResults: { item },
          },
        },
      }) => item
    ),
});
