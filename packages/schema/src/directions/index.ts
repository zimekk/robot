import { z } from "zod";

const DistanceSchema = z
  .tuple([z.number(), z.string(), z.number()])
  .transform(([value, text]) => ({
    value,
    text,
  }));
const DurationSchema = z
  .tuple([z.number(), z.string()])
  .rest(z.number())
  .transform(([value, text]) => ({
    value,
    text,
  }));

const LatLngLiteralSchema = z
  .tuple([z.null(), z.null(), z.number(), z.number()])
  .transform((t) => ({
    lat: t[2],
    lng: t[3],
  }));

const TransitFareSchema = z
  .tuple([z.number(), z.string()])
  .rest(z.number())
  .transform(([value, text, currency]) => ({
    currency,
    value,
    text,
  }));

enum TravelMode {
  driving = "driving",
  walking = "walking",
  bicycling = "bicycling",
  transit = "transit",
}

const TravelModeSchema = z.number().transform(
  (t) =>
    ({
      [0]: TravelMode.driving,
      [3]: TravelMode.transit,
    }[t])
);

const DirectionsSchema = z
  // .any()
  .tuple([
    z // [0]
      .tuple([
        z // [0][0]
          .tuple([
            z // [0][0][x][0]
              .tuple([
                z // [0][0][x][0][0]
                  .tuple([
                    z.null(),
                    z.null(),
                    LatLngLiteralSchema,
                    z.string(),
                    z.null(),
                    z.number(),
                  ])
                  .transform(
                    (t_0_0_x_0_0) => (console.log({ t_0_0_x_0_0 }), {})
                  ),
              ])
              .rest(z.any()),
          ])
          .rest(z.any())
          .array(),
        z // [0][1]
          .tuple([
            z
              .union([
                z // [0][1][x][0]
                  .tuple([
                    TravelModeSchema,
                    z.string().nullable(),
                    DistanceSchema,
                    DurationSchema,
                    z.null(),
                    z.any(),
                    z.any(),
                    z.tuple([
                      z.null(),
                      z.null(),
                      z.null(),
                      z.tuple([
                        z.null(),
                        z.null(),
                        LatLngLiteralSchema,
                        LatLngLiteralSchema,
                      ]),
                    ]),
                    z.null(),
                    z.null(),
                    z.any(),
                    TransitFareSchema.optional().nullable(),
                    z.null(),
                    z.null(),
                    z.any(),
                  ]),
                z // [0][1][x][1]
                  .tuple([
                    TravelModeSchema,
                    z.string().nullable(),
                    DistanceSchema,
                    DurationSchema,
                    z.null(),
                    z.any(),
                    z.any(),
                    z.tuple([
                      z.null(),
                      z.null(),
                      z.null(),
                      z.tuple([
                        z.null(),
                        z.null(),
                        LatLngLiteralSchema,
                        LatLngLiteralSchema,
                      ]),
                    ]),
                    z.null(),
                    z
                      .tuple([
                        z
                          .tuple([
                            z.number(),
                            z.literal(
                              "Ta trasa obejmuje drogi prywatne lub o ograniczonym dostępie."
                            ),
                            z.null(),
                          ])
                          .rest(z.any()),
                      ])
                      .nullable(),
                    z
                      .tuple([
                        DurationSchema,
                        z.number(),
                        z.number(),
                        DurationSchema,
                        z.any(),
                        z.number().array(),
                      ])
                      .rest(z.any())
                      .nullable(),
                  ])
                  .rest(z.any()),
              ])
              // RouteLeg
              // DirectionsStep
              .transform(
                (t_0_1_x_0) => (
                  console.log({ t_0_1_x_0 }),
                  {
                    // TravelMode
                    travel_mode: t_0_1_x_0[0],
                    // Distance
                    distance: t_0_1_x_0[2],
                    // Duration
                    duration: t_0_1_x_0[3],
                    // departure_time:t_0_1_0[5][0],
                    // arrival_time:t_0_1_0[5][1],
                    start_location: t_0_1_x_0[7][3][2],
                    end_location: t_0_1_x_0[7][3][3],
                    // TransitFare
                    fare: t_0_1_x_0[11],
                  }
                )
              ),
            z.any(),
            z.null(),
            z.any(),
            z.string(), // [0][1][x][4]
            z.string(), // [0][1][x][5]
            z.null(), // [0][1][x][6]
            z.string().nullable(), // [0][1][x][7]
            z.number(), // [0][1][x][8]
            DurationSchema.transform(
              (t_0_1_x_9) => (console.log({ t_0_1_x_9 }), t_0_1_x_9)
            ).nullable(), // [0][1][x][9]
            z.null(), // [0][1][x][10]
            z.literal("PL").array(), // [0][1][x][11]
            z.number().nullable(), // [0][1][x][12]
            DurationSchema.transform(
              (t_0_1_x_13) => (console.log({ t_0_1_x_13 }), t_0_1_x_13)
            ).nullable(), // [0][1][x][13]
            DurationSchema.nullable(), // [0][1][x][14]
          ])
          .rest(z.any())
          .transform((t) => ({
            ...t[0],
            t_0_1_x_9: t[9],
            t_0_1_x_13: t[13],
            t_0_1_x_14_walk: t[14],
          }))
          .array()
          .nullable(),
      ])
      .rest(z.any()),
  ])
  .rest(z.any())
  // .transform(t => (console.log(t), t))
  .transform((t) =>
    // console.log(t),
    ({
      // DirectionsRoute
      directions: t[0][1],
    })
  )
  .transform((t) => (console.log(t), t));

export const Schema = z.object({
  json: DirectionsSchema,
});
