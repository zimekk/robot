import { z } from "zod";

const ProductSchema = z
  .object({
    brand: z.string(),
    brandId: z.number(),
    caption: z.string(),
    unit: z.string(),
    averageRating: z.number(),
    totalReviews: z.number(),
    id: z.number(),
    rossnetId: z.number(),
    eanNumber: z.string().array(),
    navigateUrl: z.string(),
    price: z.number(),
    pricePerUnit: z.string(),
    vat: z.number(),
    dimensional: z.number(),
    pictures: z
      .object({
        id: z.number(),
        mini: z.string(),
        medium: z.string(),
        small: z.string(),
        large: z.string(),
        type: z.number(),
        alt: z.string(),
        side: z.string(),
      })
      .array(),
    promotion: z
      .object({ type: z.string(), redirectUrl: z.string() })
      .optional(),
    hasRichContent: z.boolean(),
    availability: z.string(),
    category: z.string(),
  })
  .passthrough();

export const DataSchema = ProductSchema;

export const DiffSchema = DataSchema.strip().omit({
  navigateUrl: true,
  pictures: true,
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
  json: z
    .object({
      props: z.object({
        pageProps: z.object({
          initialReduxState: z.object({
            productList: z.object({
              list: z.object({
                allV2: z.object({
                  data: z.object({
                    items: z
                      .object({
                        product: ProductSchema.optional(),
                      })
                      .transform(({ product }) => product)
                      .array()
                      .transform((items) => items.filter(Boolean)),
                    totalCount: z.number(),
                    totalPages: z.number(),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
    .transform(
      ({
        props: {
          pageProps: {
            initialReduxState: {
              productList: {
                list: {
                  allV2: {
                    data: { items },
                  },
                },
              },
            },
          },
        },
      }) => items
    ),
});
