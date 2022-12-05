import { z } from "zod";

export const Schema = z
  .object({
    station_id: z.number(),
    x: z.number(),
    y: z.number(),
    network_id: z.number(),
    network_name: z.string(),
    map_img: z.string(),
  })
  .array();
