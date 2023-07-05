import { z } from "zod";
import { DataSchema as EuroSchema } from "@dev/euro/schema";
import { DataSchema as XkomSchema } from "@dev/products/schema";

const ItemSchema = z.object({
  id: z.string(),
  item: z.string(),
  data: z.unknown(),
  created: z.coerce.date(),
  updated: z.coerce.date().nullable(),
});

export const ListSchema = z
  .discriminatedUnion("type", [
    ItemSchema.extend({
      type: z.literal("euro"),
      data: EuroSchema.transform(
        ({
          identifiers: { plu: id },
          brand,
          name,
          images,
          prices: { mainPrice, promotionalPrice },
        }) =>
          Object.assign(
            {
              id,
              brand,
              name,
              images: images
                .filter(({ type }) => ["ICON_PHOTO"].includes(type))
                .map(({ url }) => url),
            },
            promotionalPrice
              ? {
                  price: promotionalPrice.price,
                  oldPrice: mainPrice,
                }
              : {
                  price: mainPrice,
                }
          )
      ),
    }),
    ItemSchema.extend({
      type: z.literal("xkom"),
      data: XkomSchema.transform(
        ({ id, producer: { name: brand }, name, photo, price, oldPrice }) => ({
          id,
          brand,
          name,
          images: [photo.url].filter(Boolean),
          price,
          oldPrice,
        })
      ),
    }),
  ])
  .array();

export const DataSchema = z.object({
  id: z.string(),
  brand: z.string(),
  name: z.string(),
  images: z.string().array(),
  oldPrice: z.number().optional(),
  price: z.number(),
});

export const DiffSchema = DataSchema.pick({
  name: true,
  oldPrice: true,
  price: true,
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
