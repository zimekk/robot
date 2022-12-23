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
          details: $root.querySelectorAll("div.details").map(($el) => ({
            intro: $el.parentNode.querySelector("div.intro > h3")?.text,
            price: $el.querySelector("div.price > p")?.text,
            priceNumber: $el.querySelector("span.price-number")?.text,
            link: (($el) => ({
              href: $el?.getAttribute("href"),
              text: $el?.getAttribute("aria-label"),
            }))($el.querySelector("> a")),
            bullets: $el
              .querySelectorAll("ul > li")
              .map(($el) => $el?.text.trim()),
          })),
        }))(parse(html)),
  }));
