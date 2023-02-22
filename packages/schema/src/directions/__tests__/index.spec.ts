import { Schema } from "..";

describe("directions", () => {
  it("Schema", () =>
    [
      {
        json: require("./values"),
        meta: {
          directions: [
            {
              distance: {
                text: "12,5 km",
                value: 12548,
              },
              duration: {
                text: "54 min",
                value: 3248,
              },
              end_location: {
                lat: 52.23196,
                lng: 21.0943056,
              },
              fare: [4.4, "4,40 zł", "PLN"],
              start_location: {
                lat: 52.157747799999996,
                lng: 20.991850799999998,
              },
              travel_mode: "transit",
              t_0_1_x_13: {
                text: "15 min",
                value: 900,
              },
              t_0_1_x_14_walk: {
                text: "11 min",
                value: 668,
              },
              t_0_1_x_9: {
                text: "59 min",
                value: 3559,
              },
            },
            {
              distance: {
                text: "16,6 km",
                value: 16638,
              },
              duration: {
                text: "1 godz. 1 min",
                value: 3679,
              },
              end_location: {
                lat: 52.2268,
                lng: 21.0953275,
              },
              fare: [4.4, "4,40 zł", "PLN"],
              start_location: {
                lat: 52.1478763,
                lng: 20.979072,
              },
              travel_mode: "transit",
              t_0_1_x_13: {
                text: "15 min",
                value: 900,
              },
              t_0_1_x_14_walk: {
                text: "9 min",
                value: 560,
              },
              t_0_1_x_9: {
                text: "1 godz. 1 min",
                value: 3684,
              },
            },
            {
              distance: {
                text: "12,8 km",
                value: 12812,
              },
              duration: {
                text: "54 min",
                value: 3248,
              },
              end_location: {
                lat: 52.2301362,
                lng: 21.0943056,
              },
              fare: [4.4, "4,40 zł", "PLN"],
              start_location: {
                lat: 52.157747799999996,
                lng: 20.991850799999998,
              },
              travel_mode: "transit",
              t_0_1_x_13: {
                text: "30 min",
                value: 1800,
              },
              t_0_1_x_14_walk: {
                text: "11 min",
                value: 668,
              },
              t_0_1_x_9: {
                text: "51 min",
                value: 3068,
              },
            },
            {
              distance: {
                text: "13,1 km",
                value: 13117,
              },
              duration: {
                text: "1 godz.",
                value: 3583,
              },
              end_location: {
                lat: 52.2301362,
                lng: 21.0943056,
              },
              fare: null,
              start_location: {
                lat: 52.157747799999996,
                lng: 20.989904499999998,
              },
              travel_mode: "transit",
              t_0_1_x_13: {
                text: "30 min",
                value: 1800,
              },
              t_0_1_x_14_walk: {
                text: "16 min",
                value: 939,
              },
              t_0_1_x_9: {
                text: "53 min",
                value: 3163,
              },
            },
          ],
        },
      },
    ].forEach(({ json, meta }) =>
      expect(Schema.parse({ json }).json).toEqual(meta)
    ));
});
