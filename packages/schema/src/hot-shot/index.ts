import { z } from "zod";
import { HotShotSchema } from "@dev/shots/schema";

const HotShotErrorSchema = z.object({
  Message: z.string(),
});

export const Schema = z.union([HotShotErrorSchema, HotShotSchema]);
