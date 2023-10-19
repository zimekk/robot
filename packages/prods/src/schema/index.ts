import { z } from "zod";
import { DataSchema as EuroSchema } from "@dev/euro/schema";
import { DataSchema as ExpertSchema } from "@dev/expert/schema";
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
          ((base) =>
            Object.assign(
              {
                id,
                url: new URL(`/p/${id}`, base).toString(),
                brand,
                name,
                images: images
                  .filter(({ type }) => ["CMS_PHOTO"].includes(type))
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
            ))("https://www.euro.com.pl")
      ),
    }),
    ItemSchema.extend({
      type: z.literal("expert"),
      data: ExpertSchema.transform(({ id, link, name, gallery, price_gross }) =>
        ((base) => ({
          id: String(id),
          url: new URL(link, base).toString(),
          brand: "",
          name,
          images: gallery.map((href) =>
            new URL(
              `https://prod-api.mediaexpert.pl/api/images/gallery_290_300/thumbnails/${href}`,
              base
            ).toString()
          ),
          price: price_gross / 100,
          // oldPrice,
        }))(`https://www.mediaexpert.pl`)
      ),
    }),
    ItemSchema.extend({
      type: z.literal("xkom"),
      data: XkomSchema.transform(
        ({
          id,
          producer: { name: brand },
          name,
          mark,
          photo: { url = "" },
          price,
          oldPrice,
        }) =>
          ((base) => ({
            id,
            url: new URL(`/p/${id}`, base).toString(),
            brand,
            name,
            mark,
            images: [url].filter(Boolean),
            price,
            oldPrice,
          }))(
            url?.match(".al.to/") ? "https://www.al.to" : "https://www.x-kom.pl"
          )
      ),
    }),
  ])
  .transform(({ type, data, ...item }) => ({
    type: data.url.match(".al.to/") ? "alto" : type,
    data: {
      ...data,
      images: data.images.slice(0, 3),
    },
    ...item,
  }))
  .array();

export const DataSchema = z.object({
  id: z.string(),
  url: z.string(),
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
  id: string;
  item: string;
  data: z.infer<typeof DataSchema>;
  created: Date;
  // checked: string | null;
  updated: Date | null;
  // removed: string | null;
}
