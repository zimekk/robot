import { parse } from "node-html-parser";
import { Schema } from "./offer";

export default ({ html }: { html: string }) => ({
  json: Schema.parse(
    JSON.parse(parse(html).querySelector("script#__NEXT_DATA__")?.text || "{}")
  ),
});
