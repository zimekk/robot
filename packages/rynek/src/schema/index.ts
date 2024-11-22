import { z } from "zod";
import { DataSchema } from "@zimekk/scrap-rynek-schema";

export { Schema } from "@zimekk/scrap-rynek-schema";

export const DiffSchema = DataSchema.omit({
  change_color: true,
  has_distinction: true,
}).extend({
  configuration: DataSchema.shape.configuration.omit({
    display_type: true,
    is_autoresponder_enabled: true,
  }),
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
