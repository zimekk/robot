import { parse } from "node-html-parser";
import { z } from "zod";

export const Schema = z.any();

export default ({ html }: { html: string }) => ({
  json: Schema.parse(
    JSON.parse(parse(html).querySelector("script#__NEXT_DATA__")?.text || "{}")
  ),
});
