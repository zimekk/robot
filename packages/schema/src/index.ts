import { z } from "zod";
import OtodomOfferTransform from "./otodom/offer";
import PromoTransform from "./promo";

export const Type = {
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  HOTSHOT: "HOTSHOT",
  HOTSHOT_ALTO: "HOTSHOT_ALTO",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
} as const;

// enum Type {
// PROMO,
// };

export const EntrySchema = z
  .preprocess(
    z
      .object({
        id: z.string(),
        data: z.object({
          url: z.string(),
        }),
        returnvalue: z.object({
          html: z.any(),
          json: z.any(),
        }),
      })
      //.passthrough()
      .transform((item) => ({
        type: Object.entries({
          [Type.HOTSHOT]: new RegExp("x-kom.pl/goracy_strzal"),
          [Type.HOTSHOT_ALTO]: new RegExp("al.to/goracy_strzal"),
          [Type.PROMO]: new RegExp("x-kom.pl/promocje"),
          [Type.PROMO_ITEM]: new RegExp("promocje.x-kom.pl/"),
          [Type.OTODOM]: new RegExp("otodom.pl/pl/oferty/"),
          [Type.OTODOM_OFFER]: new RegExp("otodom.pl/pl/oferta/"),
        })
          .find(([_, regExp]) => regExp.test(item.data.url))
          ?.shift(),
        ...item,
      })).parse,
    z.discriminatedUnion("type", [
      z
        .object({
          type: z.literal(Type.PROMO),
          data: z.object({
            url: z.string(),
          }),
          returnvalue: z
            .object({
              html: z.string(),
            })
            .transform(PromoTransform),
        })
        .extend({})
        .passthrough(),
      z.object({
        type: z.literal(Type.PROMO_ITEM),
        data: z.object({
          url: z.string(),
        }),
        returnvalue: z.object({
          json: z.any(),
        }),
      }),
      z.object({
        type: z.literal(Type.HOTSHOT),
        data: z.object({
          url: z.string(),
        }),
        returnvalue: z.object({
          json: z.any(),
        }),
      }),
      z.object({
        type: z.literal(Type.HOTSHOT_ALTO),
        data: z.object({
          url: z.string(),
        }),
        returnvalue: z.object({
          json: z.any(),
        }),
      }),
      z.object({
        type: z.literal(Type.OTODOM),
        data: z.object({
          url: z.string(),
        }),
        returnvalue: z
          .object({
            html: z.string(),
          })
          .transform(OtodomOfferTransform),
      }),
      z.object({
        type: z.literal(Type.OTODOM_OFFER),
        data: z.object({
          url: z.string(),
        }),
        returnvalue: z
          .object({
            html: z.string(),
          })
          .transform(OtodomOfferTransform),
      }),
    ])
  )
  .transform((item) => (console.log(item), item));

export const EntriesSchema = EntrySchema.array();
