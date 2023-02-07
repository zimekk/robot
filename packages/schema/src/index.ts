import { z } from "zod";
import { Schema as AutosSchema, AutosItemSchema } from "./autos";
import { Schema as DirectionsReturnSchema } from "./directions";
import { Schema as FundsSchema } from "./funds";
import { Schema as GamesSchema } from "./games";
import GpassTransformSchema, { Schema as GpassReturnSchema } from "./gpass";
import { Schema as HotshotSchema } from "./hot-shot";
import LeclercTransformSchema from "./leclerc";
import MacanReturnSchema from "./macan";
import { Schema as PlotsReturnSchema } from "@dev/plots-api/schema";
import { Schema as ProductsReturnSchema } from "@dev/products/schema";
import ProductsSchema from "./products";
import PromoTransform, { Schema as PromoSchema } from "./promo";
import { Schema as PromoItemSchema } from "./promo/item";
import { Schema as RatesSchema } from "./rates";
import { Schema as RoomsReturnSchema } from "./rooms";
// import { Schema as StationsSchema } from "./stations";
// import { Schema as StationSchema } from "./stations/item";
import OtodomOfferTransform, {
  Schema as OtodomOfferSchema,
} from "./otodom/offer";
import OtomotoTransform from "./otomoto"; // Schema as OtomotoSchema,
import OtomotoOfferTransform from "./otomoto/offer"; // Schema as OtomotoOfferSchema,

export const Type = {
  AUTOS: "AUTOS",
  AUTOS_ITEM: "AUTOS_ITEM",
  DIRECTIONS: "DIRECTIONS",
  FUNDS: "FUNDS",
  GAMES: "GAMES",
  GPASS: "GPASS",
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
  PRODUCTS: "PRODUCTS",
  PRODUCTS2: "PRODUCTS2",
  RATES: "RATES",
  ROOMS: "ROOMS",
  STATIONS: "STATIONS",
  STATION: "STATION",
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

const ReturnSchema = z.object({
  id: z.string(),
  data: z.object({
    url: z.string(),
  }),
  timestamp: z.number().optional(),
});

export const CompletedSchema = z
  .object({
    data: z.object({ url: z.string() }),
    opts: OptsSchema.default({}),
  })
  .transform(({ data: { url }, opts: { timestamp = Date.now() } }) => ({
    timestamp,
    url,
  }));

export const EntrySchema = z.preprocess(
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
      type: Object.entries({
        [Type.AUTOS]: new RegExp("pl_PL/search"),
        [Type.AUTOS_ITEM]: new RegExp("pl_PL/vehicle/"),
        [Type.DIRECTIONS]: new RegExp("com/maps/dir/"),
        [Type.FUNDS]: new RegExp("tfi/fund/"),
        [Type.GAMES]: new RegExp("mp.microsoft.com/"),
        [Type.GPASS]: new RegExp("com/pl-PL/xbox-game-pass"),
        [Type.HOTSHOT]: new RegExp(
          "x-kom.pl/goracy_strzal|al.to/goracy_strzal"
        ),
        [Type.LECLERC]: new RegExp("leclerc.pl/"),
        [Type.MACAN]: new RegExp("porsche.com/"),
        [Type.PLOTS]: new RegExp("pl/d/nieruchomosci/dzialki/"),
        [Type.PRODUCTS]: new RegExp("x-kom.pl/szukaj|al.to/szukaj"),
        [Type.PRODUCTS2]: new RegExp("kom.pl/.+/c/"),
        [Type.PROMO]: new RegExp("x-kom.pl/promocje|al.to/promocje"),
        [Type.PROMO_ITEM]: new RegExp("promocje.x-kom.pl/|promocje.al.to/"),
        [Type.OTODOM]: new RegExp("otodom.pl/pl/oferty/"),
        [Type.OTODOM_OFFER]: new RegExp("otodom.pl/pl/oferta/"),
        [Type.OTOMOTO]: new RegExp("otomoto.pl/osobowe/"),
        [Type.OTOMOTO_OFFER]: new RegExp("otomoto.pl/oferta/"),
        [Type.RATES]: new RegExp("pl/rest/rates/"),
        [Type.ROOMS]: new RegExp("api/\\w+/details"),
        [Type.STATIONS]: new RegExp(/stations-get-stations\?zoom=\d/),
        [Type.STATION]: new RegExp(/stations-get-station\?station_id=\d/),
        [Type.UNKNOWN]: new RegExp(""),
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
      type: z.literal(Type.AUTOS_ITEM),
    }),
    JsonSchema.extend({
      type: z.literal(Type.DIRECTIONS),
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
      type: z.literal(Type.MACAN),
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
          desc: z.string(),
          href: z.string(),
          name: z.string(),
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
      returnvalue: z
        .object({
          html: z.string(),
        })
        .transform(OtodomOfferTransform),
    }),
    JsonSchema.extend({
      type: z.literal(Type.OTODOM_OFFER),
      returnvalue: z
        .object({
          html: z.string(),
        })
        .transform(OtodomOfferTransform),
    }),
    JsonSchema.extend({
      type: z.literal(Type.OTOMOTO),
      returnvalue: z
        .object({
          html: z.string(),
        })
        .transform(OtomotoTransform),
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
      type: z.literal(Type.ROOMS),
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
      type: z.literal(Type.UNKNOWN),
      returnvalue: z.any(),
    }),
  ])
);
// .transform((item) => (console.log(item), item));

export const EntriesSchema = z
  .discriminatedUnion("type", [
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
          })
        ),
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.DIRECTIONS),
      returnvalue: DirectionsReturnSchema,
    }),
    ReturnSchema.extend({
      type: z.literal(Type.FUNDS),
      returnvalue: z.object({
        json: FundsSchema,
      }),
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
      type: z.literal(Type.HOTSHOT),
      returnvalue: z.object({
        json: HotshotSchema,
      }),
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
      type: z.literal(Type.PLOTS),
      returnvalue: PlotsReturnSchema,
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
      data: ReturnSchema.shape.data.extend({
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
      type: z.literal(Type.OTOMOTO),
      returnvalue: z.object({
        // json: OtomotoSchema,
        json: z.any(),
      }),
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
        json: ProductsSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.PRODUCTS2),
      returnvalue: ProductsReturnSchema,
    }),
    ReturnSchema.extend({
      type: z.literal(Type.RATES),
      returnvalue: z.object({
        json: RatesSchema,
      }),
    }),
    ReturnSchema.extend({
      type: z.literal(Type.ROOMS),
      returnvalue: RoomsReturnSchema,
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
      type: z.literal(Type.UNKNOWN),
      returnvalue: z.any({}),
    }),
  ])
  .array();

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
    finishedOn: z.null(),
    processedOn: z.number().nullable(),
  })
  .strict()
  .array();
