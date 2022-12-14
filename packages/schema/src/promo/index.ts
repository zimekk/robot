import { parse } from "node-html-parser";
import { z } from "zod";

export const Schema = z.object({
  list: z
    .object({
      name: z.string(),
      desc: z.string(),
      href: z.string(),
      code: z.string().optional(),
    })
    .array(),
});

export default ({ html }: { html: string }) => ({
  json: Schema.parse({
    list: parse(html)
      .querySelectorAll("h3 + p")
      .map(($div: any) => $div.parentNode.parentNode)
      .map(($div: any) => ({
        name: $div.querySelector("h3").text,
        desc: $div.querySelector("p").text.replace(/\s+\n/, "\n"),
        href: $div.querySelector("a[href]")?.getAttribute("href"),
      }))
      .map((item) => ({
        ...item,
        ...(([_, code]) => (code ? { code } : {}))(
          item.desc.match(/Twój kod rabatowy: (.+)/) || []
        ),
      }))
      .slice(0, 50),
  }),
});
