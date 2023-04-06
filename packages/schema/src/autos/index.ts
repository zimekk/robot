import { z } from "zod";
import { ItemSchema } from "@dev/vehicles/schema";

export { AutosItemSchema } from "@dev/vehicles/schema";

export const Schema = z.object({
  $list: ItemSchema.array(),
  $count: z.object({
    $total: z.number(),
    genericEquipment: z.record(z.number()),
  }),
});
