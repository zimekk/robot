import { parse } from "node-html-parser";
import { z } from "zod";

export const Schema = z
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
