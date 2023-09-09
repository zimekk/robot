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

export const DiffSchema = DataSchema.extend({});

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
