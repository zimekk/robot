import { parse } from "node-html-parser";
import { z } from "zod";

export const DataSchema = z.object({
  station_id: z.number(),
  x: z.number(),
  y: z.number(),
  network_id: z.number(),
  network_name: z.string(),
  map_img: z.string(),
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

export const JsonSchema = z
  .object({
    html: z.string(),
  })
  .transform(({ html }) =>
    (($root) =>
      z
        .object({
          address: z.string(),
          petrol_list: z
            .object({
              type: z.string(),
              price: z.string(),
            })
            .array(),
        })
        .parse({
          address: $root.querySelector("div.right-side > a:first-child")?.text,
          petrol_list: $root
            .querySelectorAll("ul.petrol-list > li")
            .map(($li) => ({
              type: $li.childNodes[0].text,
              price: $li.childNodes[1].text,
            })),
        }))(parse(html))
  );

export const Schema = z.object({
  json: JsonSchema,
});
