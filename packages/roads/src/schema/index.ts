import { z } from "zod";

export const DataSchema = z.object({
  id: z.string(),
  dlug_geo: z.string(),
  id_ulicy: z.string(),
  kierunek: z.string(),
  nazwa_zespolu: z.string(),
  obowiazuje_od: z.string(),
  slupek: z.string(),
  szer_geo: z.string(),
  zespol: z.string(),
});

// const ItemSchema = z
//   .object({
//     values: z
//       .object({
//         key: z.string(),
//         value: z.string(),
//       })
//       .array(),
//   })
//   .transform(({ values }) =>
//     values.reduce(
//       (result, { key, value }) => Object.assign(result, { [key]: value }),
//       {}
//     )
//   );

// const DataSchema = z
//   .object({
//     result: ItemSchema.array(),
//   })
//   .transform(({ result }) => result);

// .transform(({ result }) => result);

// const JsonSchema = z
//   .object({
//     props: z
//       .object({
//         pageProps: z.object({
//           featureFlags: z.any().transform(() => null),
//           translations: z.any().transform(() => null),
//           tracking: z.any().transform(() => null),
//           // data: z.any().transform(() => null),
//           ad: z
//             .object({
//               id: z.number(),
//               slug: z.string(),
//             })
//             .passthrough()
//             .optional(),
//           data: z.object({
//             searchAds: z.object({
//               items: Ad.passthrough().array(), //.transform(() => null),
//             }), //.passthrough()
//           }),
//           // .optional(),
//         }), //.passthrough()
//       })
//       .passthrough(),
//     // .optional(),
//   })
//   .passthrough();

// export const DataSchema = Ad;

export const DiffSchema = DataSchema.extend({
  // location: Ad.shape.location.omit({
  //   reverseGeocoding: true,
  // }),
  // locationLabel: Ad.shape.locationLabel.omit({
  //   locale: true,
  //   value: true,
  // }),
});

export type Data = z.infer<typeof DataSchema>;

export interface Item {
  id: number;
  item: string;
  data: Data;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

const JsonSchema = z.object({
  result: z
    .object({
      values: z
        .object({
          key: z.enum([
            "dlug_geo",
            "id_ulicy",
            "kierunek",
            "nazwa_zespolu",
            "obowiazuje_od",
            "slupek",
            "szer_geo",
            "zespol",
          ]),
          value: z.string(),
        })
        .array(),
    })
    .transform(({ values }) =>
      values.reduce(
        (result, { key, value }) => Object.assign(result, { [key]: value }),
        {} as Omit<Data, "id">
      )
    )
    .transform((data) =>
      Object.assign(data, {
        id: `${data.zespol}-${data.slupek}`,
      })
    )
    .array(),
});

export const Schema = z.object({
  json: JsonSchema,
});
