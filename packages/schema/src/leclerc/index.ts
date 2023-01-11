import { parse } from "node-html-parser";
import { z } from "zod";

export const Schema = z.object({
  // html: z.string(),
  json: z.object({}).passthrough(),
});

export default z
  .object({
    html: z.string(),
  })
  .transform(({ html }) => ({
    html,
    json: (($root) =>
      z
        .object({})
        .passthrough()
        .parse({
          petrol_list: $root
            .querySelectorAll(".petrol-station li")
            .map(($el) => ({
              type: $el.getAttribute("class"),
              price: $el.text,
            })),
        }))(parse(html)),
  }));
