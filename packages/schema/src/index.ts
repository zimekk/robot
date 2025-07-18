import { z } from "zod";
import { Schema as AutosSchema, AutosItemSchema } from "./autos";
import { Schema as DirectionsReturnSchema } from "./directions";
import { Schema as GamesSchema } from "./games";
import GpassTransformSchema, { Schema as GpassReturnSchema } from "./gpass";
import LeclercTransformSchema from "./leclerc";
import MacanReturnSchema from "./macan";
import ProductsSchema from "./products";
import PromoTransform, { Schema as PromoSchema } from "./promo";
import { Schema as RoomsReturnSchema } from "./rooms";
// import OtodomOfferTransform, {
//   Schema as OtodomOfferSchema,
// } from "./otodom/offer";
import OtomotoOfferTransform from "./otomoto/offer"; // Schema as OtomotoOfferSchema,

export const Type = {
  AUTOS: "AUTOS",
  AUTOS_ITEM: "AUTOS_ITEM",
  BIKES: "BIKES",
  DEPOT: "DEPOT",
  DIRECTIONS: "DIRECTIONS",
  DYSON: "DYSON",
  EURO: "EURO",
  EXPERT: "EXPERT",
  FLATS: "FLATS",
  FUNDS: "FUNDS",
  GAMES: "GAMES",
  GPASS: "GPASS",
  GRATKA: "GRATKA",
  HOTSHOT: "HOTSHOT",
  LECLERC: "LECLERC",
  MACAN: "MACAN",
  PLOTS: "PLOTS",
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
  OTOMOTO: "OTOMOTO",
  OTOMOTO_OFFER: "OTOMOTO_OFFER",
  PETRO: "PETRO",
  PRODUCTS: "PRODUCTS",
  PRODUCTS2: "PRODUCTS2",
  RATES: "RATES",
  ROADS: "ROADS",
  ROOMS: "ROOMS",
  RYNEK: "RYNEK",
  SALOM: "SALOM",
  STATIONS: "STATIONS",
  STATION: "STATION",
  STATUS: "STATUS",
  STOCK: "STOCK",
  ROSSM: "ROSSM",
  THULE: "THULE",
  TAURUS: "TAURUS",
  UNKNOWN: "UNKNOWN",
} as const;

// enum Type {
// PROMO,
// };

export const DataSchema = z.object({
  url: z.string(),
  body: z.object({}).passthrough().optional(),
});

export const OptsSchema = z.object({
  delay: z.number().default(0),
  priority: z.number().optional(),
  removeOnComplete: z.union([z.boolean(), z.number()]).optional(),
  repeat: z
    .object({
      cron: z.string().optional(),
    })
    .optional(),
  timestamp: z.number().optional(),
});

const JsonSchema = z.object({
  id: z.string(),
  data: z.object({
    url: z.string(),
  }),
  opts: z.any(),
  returnvalue: z.object({
    json: z.any(),
  }),
  timestamp: z.number().optional(),
});

export const ReturnSchema = z.object({
  id: z.string(),
  data: z.object({
    url: z.string(),
  }),
  timestamp: z.number().optional(),
});

export const CompletedSchema = z
  .object({
    data: z.object({ url: z.string() }),
    opts: OptsSchema.default({ delay: 0 }),
  })
  .transform(({ data: { url }, opts: { timestamp = Date.now() } }) => ({
    timestamp,
    url,
  }));

export const getTypeByUrl = (url: string) =>
  Object.entries({
    [Type.AUTOS]: new RegExp("pl_PL/search"),
    [Type.AUTOS_ITEM]: new RegExp("pl_PL/vehicle/"),
    [Type.BIKES]: new RegExp("pl/sport-hobby/"),
    [Type.DEPOT]: new RegExp("pl/nieruchomosci/hale-magazyny/"),
    [Type.DIRECTIONS]: new RegExp("com/maps/dir/"),
    [Type.DYSON]: new RegExp("dyson.pl/"),
    // [Type.EURO]: new RegExp("com.pl/rest/api/products/search"),
    [Type.EURO]: new RegExp("euro.com.pl/"),
    [Type.EXPERT]: new RegExp("expert.pl/"),
    [Type.FLATS]: new RegExp("pl/nieruchomosci/mieszkania/"),
    [Type.FUNDS]: new RegExp("tfi/fund/"),
    [Type.GAMES]: new RegExp("mp.microsoft.com/"),
    [Type.GPASS]: new RegExp("com/pl-PL/xbox-game-pass"),
    [Type.GRATKA]: new RegExp("gratka.pl/"),
    [Type.HOTSHOT]: new RegExp("x-kom.pl/goracy_strzal|al.to/goracy_strzal"),
    [Type.LECLERC]: new RegExp("leclerc.pl/"),
    [Type.MACAN]: new RegExp("porsche.com/"),
    [Type.PLOTS]: new RegExp("pl/d/nieruchomosci/dzialki/"),
    [Type.PRODUCTS]: new RegExp("x-kom.pl/szukaj|al.to/szukaj"),
    [Type.PRODUCTS2]: new RegExp("(al.to|kom.pl)/.+/c/"),
    [Type.PROMO]: new RegExp("x-kom.pl/promocje|al.to/promocje"),
    [Type.PROMO_ITEM]: new RegExp("promocje.x-kom.pl/|promocje.al.to/"),
    [Type.OTODOM]: new RegExp("otodom.pl/pl/(oferty|wyniki)/"),
    [Type.OTODOM_OFFER]: new RegExp("otodom.pl/pl/oferta/"),
    [Type.OTOMOTO]: new RegExp("otomoto.pl/osobowe/"),
    [Type.OTOMOTO_OFFER]: new RegExp("otomoto.pl/oferta/"),
    [Type.PETRO]: new RegExp("petrostar.pl/"),
    [Type.RATES]: new RegExp("pl/rest/rates/"),
    [Type.ROADS]: new RegExp("warszawa.pl/api/action"),
    [Type.ROOMS]: new RegExp("api/\\w+/details"),
    [Type.RYNEK]: new RegExp("pierwotny.pl/s/"),
    [Type.SALOM]: new RegExp("lomon.com/pl-pl/shop"),
    [Type.STATIONS]: new RegExp(/stations-get-stations\?zoom=\d/),
    [Type.STATION]: new RegExp(/stations-get-station\?station_id=\d/),
    [Type.STATUS]: new RegExp(/^\/status/),
    [Type.STOCK]: new RegExp("bmw.cloud/similarity"),
    [Type.ROSSM]: new RegExp("smann.pl/szukaj"),
    [Type.TAURUS]: new RegExp("taurus.info.pl/"),
    [Type.THULE]: new RegExp("thule.com/pl-pl/"),
    [Type.UNKNOWN]: new RegExp(""),
  })
    .find(([, regExp]) => regExp.test(url))
    ?.shift() as string;

export const EntrySchema = z.preprocess(
  (value) =>
    z
      .object({
        id: z.string(),
        data: z
          .object({
            url: z.string(),
          })
          .passthrough(),
        opts: z.any(),
        returnvalue: z.object({
          html: z.any(),
          json: z.any(),
        }),
      })
      .passthrough()
      .transform((item) => ({
        type: getTypeByUrl(item.data.url),
        ...item,
      }))
      .parse(value),
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
      type: z.literal(Type.AUTOS_ITEM),
    }),
    JsonSchema.extend({
      type: z.literal(Type.BIKES),
    }),
    JsonSchema.extend({
      type: z.literal(Type.DEPOT),
    }),
    JsonSchema.extend({
      type: z.literal(Type.DIRECTIONS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.DYSON),
    }),
    JsonSchema.extend({
      type: z.literal(Type.EURO),
    }),
    JsonSchema.extend({
      type: z.literal(Type.EXPERT),
    }),
    JsonSchema.extend({
      type: z.literal(Type.FLATS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.FUNDS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.GAMES),
    }),
    JsonSchema.extend({
      type: z.literal(Type.GPASS),
      returnvalue: GpassTransformSchema,
    }),
    JsonSchema.extend({
      type: z.literal(Type.GRATKA),
    }),
    JsonSchema.extend({
      type: z.literal(Type.MACAN),
    }),
    JsonSchema.extend({
      type: z.literal(Type.PETRO),
    }),
    JsonSchema.extend({
      type: z.literal(Type.PLOTS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.PROMO),
      returnvalue: z
        .object({
          html: z.string(),
        })
        .transform(PromoTransform),
    }),
    JsonSchema.extend({
      type: z.literal(Type.PROMO_ITEM),
      data: z
        .object({
          url: z.string(),
        })
        .extend({
          code: z.string().optional(),
          desc: z.string().optional(),
          href: z.string().optional(),
          name: z.string().optional(),
        }),
    }),
    JsonSchema.extend({
      type: z.literal(Type.HOTSHOT),
    }),
    JsonSchema.extend({
      type: z.literal(Type.LECLERC),
      returnvalue: LeclercTransformSchema,
    }),
    JsonSchema.extend({
      type: z.literal(Type.OTODOM),
      // returnvalue: z
      //   .object({
      //     html: z.string(),
      //   })
      //   .transform(OtodomOfferTransform),
    }),
    JsonSchema.extend({
      type: z.literal(Type.OTODOM_OFFER),
      // returnvalue: z
      //   .object({
      //     html: z.string(),
      //   })
      //   .transform(OtodomOfferTransform),
    }),
    JsonSchema.extend({
      type: z.literal(Type.OTOMOTO),
    }),
    JsonSchema.extend({
      type: z.literal(Type.OTOMOTO_OFFER),
      returnvalue: z
        .object({
          html: z.string(),
        })
        .transform(OtomotoOfferTransform),
    }),
    JsonSchema.extend({
      type: z.literal(Type.PRODUCTS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.PRODUCTS2),
    }),
    JsonSchema.extend({
      type: z.literal(Type.RATES),
    }),
    JsonSchema.extend({
      type: z.literal(Type.ROADS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.ROOMS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.ROSSM),
    }),
    JsonSchema.extend({
      type: z.literal(Type.RYNEK),
    }),
    JsonSchema.extend({
      type: z.literal(Type.SALOM),
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
    JsonSchema.extend({
      type: z.literal(Type.STATUS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.STOCK),
      data: z.object({
        url: z.string(),
        body: z.any(),
      }),
    }),
    JsonSchema.extend({
      type: z.literal(Type.TAURUS),
    }),
    JsonSchema.extend({
      type: z.literal(Type.THULE),
    }),
    JsonSchema.extend({
      type: z.literal(Type.UNKNOWN),
      returnvalue: z.any(),
    }),
  ]),
);
// .transform((item) => (console.log(item), item));

export const EntriesSchema = z.discriminatedUnion("type", [
  ReturnSchema.extend({
    type: z.literal(Type.AUTOS),
    returnvalue: z.object({
      json: AutosSchema,
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.AUTOS_ITEM),
    returnvalue: z.object({
      json: AutosItemSchema.or(
        z.object({
          success: z.literal(false),
          status: z.number(),
          message: z.literal("Error"),
        }),
      ),
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.BIKES),
    returnvalue: require("@dev/bikes/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.DEPOT),
    returnvalue: require("@dev/depots/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.DIRECTIONS),
    returnvalue: DirectionsReturnSchema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.DYSON),
    returnvalue: require("@dev/dyson/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.EURO),
    returnvalue: require("@dev/euro/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.EXPERT),
    returnvalue: require("@dev/expert/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.FLATS),
    returnvalue: require("@dev/flats/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.FUNDS),
    returnvalue: require("@dev/funds/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.GAMES),
    returnvalue: z.object({
      json: GamesSchema,
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.GPASS),
    returnvalue: GpassReturnSchema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.GRATKA),
    returnvalue: require("@dev/gratka/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.HOTSHOT),
    returnvalue: require("@dev/shots/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.LECLERC),
    returnvalue: z.any(),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.MACAN),
    returnvalue: MacanReturnSchema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.PETRO),
    returnvalue: require("@dev/petro/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.PLOTS),
    returnvalue: require("@dev/plots/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.PROMO),
    returnvalue: z.object({
      json: PromoSchema,
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.PROMO_ITEM),
    returnvalue: require("@dev/promo/schema").Schema,
  }).extend({
    data: ReturnSchema.shape.data.extend({
      code: z.string().optional(),
      desc: z.string(),
      href: z.string(),
      name: z.string(),
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.OTODOM),
    returnvalue: require("@dev/props/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.OTODOM_OFFER),
    returnvalue: require("@dev/props/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.OTOMOTO),
    returnvalue: require("@dev/moto/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.OTOMOTO_OFFER),
    returnvalue: z.object({
      // json: OtomotoOfferSchema,
      json: z.any(),
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.PRODUCTS),
    returnvalue: z.object({
      json: ProductsSchema.optional(),
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.PRODUCTS2),
    returnvalue: require("@dev/products/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.RATES),
    returnvalue: require("@dev/rates/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.ROADS),
    returnvalue: require("@dev/roads/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.ROOMS),
    returnvalue: RoomsReturnSchema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.ROSSM),
    returnvalue: require("@dev/rossm/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.RYNEK),
    returnvalue: require("@dev/rynek/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.SALOM),
    returnvalue: require("@dev/salom/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.STATIONS),
    returnvalue: z.object({
      json: z.any(),
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.STATION),
    returnvalue: z.object({
      json: z.any(),
    }),
  }).extend({
    data: ReturnSchema.shape.data.extend({
      x: z.number(),
      y: z.number(),
      station_id: z.number(),
      network_id: z.number(),
      network_name: z.string(),
      map_img: z.string(),
    }),
  }),
  ReturnSchema.extend({
    type: z.literal(Type.STATUS),
    returnvalue: require("@dev/status/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.STOCK),
    returnvalue: require("@dev/stock/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.TAURUS),
    returnvalue: require("@dev/taurus/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.THULE),
    returnvalue: require("@dev/thule/schema").Schema,
  }),
  ReturnSchema.extend({
    type: z.literal(Type.UNKNOWN),
    returnvalue: z.any(),
  }),
]);

export const DelayedSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    data: z.object({ url: z.string() }).passthrough(),
    opts: OptsSchema.extend({
      removeOnComplete: z.union([z.boolean(), z.number()]).optional(),
      repeat: z
        .object({ count: z.number(), key: z.string(), cron: z.string() })
        .strict()
        .optional(),
      jobId: z.string().optional(),
      backoff: z
        .object({
          type: z.enum(["fixed"]),
          delay: z.number(),
        })
        .optional(),
      delay: z.number(),
      timestamp: z.number(),
      prevMillis: z.number().optional(),
      attempts: z.number(),
    }).strict(),
    progress: z.number(),
    delay: z.number(),
    timestamp: z.number(),
    attemptsMade: z.number(),
    stacktrace: z.array(z.unknown()),
    returnvalue: z.null(),
    debounceId: z.null(),
    failedReason: z.string().optional(),
    finishedOn: z.number().nullable(),
    processedOn: z.number().nullable(),
  })
  .strict()
  .array();

export const FailedSchema = DelayedSchema;
