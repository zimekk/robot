import { z } from "zod";
import { Schema as AutosSchema } from "./autos";
import { Schema as FundsSchema } from "./funds";
import { Schema as HotshotSchema } from "./hot-shot";
import PromoTransform, { Schema as PromoSchema } from "./promo";
import { Schema as PromoItemSchema } from "./promo/item";
import { Schema as RatesSchema } from "./rates";
import { Schema as StationsSchema } from "./stations";
import { Schema as StationSchema } from "./stations/item";
import OtodomOfferTransform, {
  Schema as OtodomOfferSchema,
} from "./otodom/offer";

export const Type = {
  AUTOS: "AUTOS",
  FUNDS: "FUNDS",
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  HOTSHOT: "HOTSHOT",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
  RATES: "RATES",
  STATIONS: "STATIONS",
  STATION: "STATION",
} as const;

// enum Type {
// PROMO,
// };

export const DataSchema = z.object({
  url: z.string(),
  body: z.object({}).passthrough().optional(),
});

const JsonSchema = z.object({
  id: z.string(),
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
          [Type.AUTOS]: new RegExp(
            "mini.com.pl/nowe/|bmw.pl/nowe/|bmw.pl/uzywane/"
          ),
          [Type.FUNDS]: new RegExp("tfi/fund/"),
          [Type.HOTSHOT]: new RegExp(
            "x-kom.pl/goracy_strzal|al.to/goracy_strzal"
          ),
          [Type.PROMO]: new RegExp("x-kom.pl/promocje|al.to/promocje"),
          [Type.PROMO_ITEM]: new RegExp("promocje.x-kom.pl/|promocje.al.to/"),
          [Type.OTODOM]: new RegExp("otodom.pl/pl/oferty/"),
          [Type.OTODOM_OFFER]: new RegExp("otodom.pl/pl/oferta/"),
          [Type.RATES]: new RegExp("pl/rest/rates/"),
          [Type.STATIONS]: new RegExp(/stations-get-stations\?zoom=\d/),
          [Type.STATION]: new RegExp(/stations-get-station\?station_id=\d/),
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
          id: z.string(),
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
      z.object({
        id: z.string(),
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
        id: z.string(),
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
      JsonSchema.extend({
        type: z.literal(Type.STATIONS),
      }),
      JsonSchema.extend({
        type: z.literal(Type.STATION),
        data: z
          .object({
            url: z.string(),
          })
          .extend({
            x: z.number(),
            y: z.number(),
            station_id: z.number(),
            network_id: z.number(),
            network_name: z.string(),
            map_img: z.string(),
          }),
      }),
    ])
  )
  .transform((item) => (console.log(item), item));

const ReturnSchema = z.object({
  id: z.string(),
  data: z.object({
    url: z.string(),
  }),
});

export const EntriesSchema = z
  .discriminatedUnion("type", [
    ReturnSchema.extend({
      type: z.literal(Type.AUTOS),
      returnvalue: z.object({
        json: AutosSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.FUNDS),
      returnvalue: z.object({
        json: FundsSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.HOTSHOT),
      returnvalue: z.object({
        json: HotshotSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.PROMO),
      returnvalue: z.object({
        json: PromoSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.PROMO_ITEM),
      returnvalue: z.object({
        json: PromoItemSchema,
      }),
    }).extend({
      data: z.object({
        code: z.string().optional(),
        desc: z.string(),
        href: z.string(),
        name: z.string(),
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.OTODOM),
      returnvalue: z.object({
        json: OtodomOfferSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.OTODOM_OFFER),
      returnvalue: z.object({
        json: OtodomOfferSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.RATES),
      returnvalue: z.object({
        json: RatesSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.STATIONS),
      returnvalue: z.object({
        json: StationsSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.STATION),
      returnvalue: z.object({
        json: StationSchema,
      }),
    }).extend({
      data: z.object({
        x: z.number(),
        y: z.number(),
        station_id: z.number(),
        network_id: z.number(),
        network_name: z.string(),
        map_img: z.string(),
      }),
    }),
  ])
  .array();

export const DelayedSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    data: z.object({ url: z.string() }).passthrough(),
    opts: z
      .object({
        repeat: z
          .object({ count: z.number(), key: z.string(), cron: z.string() })
          .strict()
          .optional(),
        jobId: z.string().optional(),
        delay: z.number(),
        timestamp: z.number(),
        prevMillis: z.number().optional(),
        attempts: z.number(),
      })
      .strict(),
    progress: z.number(),
    delay: z.number(),
    timestamp: z.number(),
    attemptsMade: z.number(),
    stacktrace: z.array(z.unknown()),
    returnvalue: z.null(),
    finishedOn: z.null(),
    processedOn: z.null(),
  })
  .strict()
  .array();
