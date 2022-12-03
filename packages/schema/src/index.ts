import { z } from "zod";
import { Schema as AutosSchema } from "./autos";
import { Schema as FundsSchema } from "./funds";
import PromoTransform, { Schema as PromoSchema } from "./promo";
import { Schema as PromoItemSchema } from "./promo/item";
import { Schema as RatesSchema } from "./rates";
import { Schema as HotshotSchema } from "./hot-shot";
import OtodomOfferTransform, {
  Schema as OtodomOfferSchema,
} from "./otodom/offer";

export const Type = {
  AUTOS: "AUTOS",
  FUNDS: "FUNDS",
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  HOTSHOT: "HOTSHOT",
  HOTSHOT_ALTO: "HOTSHOT_ALTO",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
  RATES: "RATES",
} as const;

// enum Type {
// PROMO,
// };

const JsonSchema = z.object({
  data: z.object({
    url: z.string(),
  }),
  returnvalue: z.object({
    json: z.any(),
  }),
});

export const EntrySchema = z
  .preprocess(
    z
      .object({
        id: z.string(),
        data: z
          .object({
            url: z.string(),
          })
          .passthrough(),
        returnvalue: z.object({
          html: z.any(),
          json: z.any(),
        }),
      })
      //.passthrough()
      .transform((item) => ({
        type: Object.entries({
          [Type.AUTOS]: new RegExp("bmw.pl/nowe/"),
          [Type.FUNDS]: new RegExp("tfi/fund/"),
          [Type.HOTSHOT]: new RegExp("x-kom.pl/goracy_strzal"),
          [Type.HOTSHOT_ALTO]: new RegExp("al.to/goracy_strzal"),
          [Type.PROMO]: new RegExp("x-kom.pl/promocje"),
          [Type.PROMO_ITEM]: new RegExp("promocje.x-kom.pl/"),
          [Type.OTODOM]: new RegExp("otodom.pl/pl/oferty/"),
          [Type.OTODOM_OFFER]: new RegExp("otodom.pl/pl/oferta/"),
          [Type.RATES]: new RegExp("pl/rest/rates/"),
        })
          .find(([_, regExp]) => regExp.test(item.data.url))
          ?.shift(),
        ...item,
      })).parse,
    z.discriminatedUnion("type", [
      JsonSchema.extend({
        type: z.literal(Type.AUTOS),
        data: z
          .object({
            url: z.string(),
          })
          .extend({
            body: z.object({
              $match: z.object({}).passthrough(),
              $skip: z.number(),
              $limit: z.number(),
            }),
          }),
      }),
      JsonSchema.extend({
        type: z.literal(Type.FUNDS),
      }),
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
      JsonSchema.extend({
        type: z.literal(Type.PROMO_ITEM),
        data: z
          .object({
            url: z.string(),
          })
          .extend({
            code: z.string().optional(),
            desc: z.string(),
            href: z.string(),
            name: z.string(),
          }),
      }),
      JsonSchema.extend({
        type: z.literal(Type.HOTSHOT),
      }),
      JsonSchema.extend({
        type: z.literal(Type.HOTSHOT_ALTO),
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
      JsonSchema.extend({
        type: z.literal(Type.RATES),
      }),
    ])
  )
  .transform((item) => (console.log(item), item));

export const EntriesSchema = z
  .discriminatedUnion("type", [
    z.object({
      type: z.literal(Type.AUTOS),
      returnvalue: z.object({
        json: AutosSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.FUNDS),
      returnvalue: z.object({
        json: FundsSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.HOTSHOT),
      returnvalue: z.object({
        json: HotshotSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.HOTSHOT_ALTO),
      returnvalue: z.object({
        json: HotshotSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.PROMO),
      returnvalue: z.object({
        json: PromoSchema,
      }),
    }),
    z
      .object({
        type: z.literal(Type.PROMO_ITEM),
        returnvalue: z.object({
          json: PromoItemSchema,
        }),
      })
      .extend({
        data: z.object({
          code: z.string().optional(),
          desc: z.string(),
          href: z.string(),
          name: z.string(),
        }),
      }),
    z.object({
      type: z.literal(Type.OTODOM),
      returnvalue: z.object({
        json: OtodomOfferSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.OTODOM_OFFER),
      returnvalue: z.object({
        json: OtodomOfferSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.RATES),
      returnvalue: z.object({
        json: RatesSchema,
      }),
    }),
  ])
  .array();
