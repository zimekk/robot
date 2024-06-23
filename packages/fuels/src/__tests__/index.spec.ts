import { StationSchema } from "../schema";

describe("fuels", () => {
  it("StationSchema", () =>
    [
      {
        json: {
          petrol_list: [
            {
              type: "on b7",
              price: "6.25",
            },
            {
              type: "on max",
              price: "-.--",
            },
            {
              type: "pb95 e10",
              price: "6.25",
            },
          ],
        },
        data: {
          address: "",
          petrol_list: [
            {
              price: 6.25,
              type: "on",
            },
            {
              price: 6.25,
              type: "pb",
            },
          ],
        },
      },
    ].forEach(({ json, data }) =>
      expect(StationSchema.parse(json)).toEqual(data),
    ));
});
