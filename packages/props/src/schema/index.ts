import { z } from "zod";
import { DataSchema } from "@zimekk/scrap-props-schema";

export { Schema } from "@zimekk/scrap-props-schema";

export const DiffSchema = DataSchema.extend({
  location: DataSchema.shape.location.omit({
    reverseGeocoding: true,
  }),
  // locationLabel: Ad.shape.locationLabel.omit({
  //   locale: true,
  //   value: true,
  // }),
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
