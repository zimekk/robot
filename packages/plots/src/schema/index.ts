import { z } from "zod";
import { JsonSchema } from "@zimekk/scrap-schema";

export const Schema = z.object({
  json: JsonSchema,
});
