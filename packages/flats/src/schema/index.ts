import { z } from "zod";
import { DataSchema, JsonSchema } from "@zimekk/scrap-schema";

export const DiffSchema = DataSchema.strip()
  .extend({
    user: DataSchema.shape.user.omit({
      isOnline: true,
      lastSeen: true,
    }),
  })
  .omit({
    searchReason: true,
  });

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof DataSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: JsonSchema.extend({
    listing: JsonSchema.shape.listing.extend({
      listing: JsonSchema.shape.listing.shape.listing.extend({
        ads: DataSchema.array(),
      }),
    }),
  }),
});
