import { Schema } from "..";

it("Schema", () =>
  [
    {
      json: {
        date: "2023-04-03",
        range: {
          maxRateDate: "2023-04-07",
          minRateDate: "2000-03-22",
        },
        rates: {
          "08:07": [
            {
              buy: "4.4553",
              code: "EUR",
              date: "2023-04-03",
              sell: "4.9184",
              time: "08:07:00",
              units: 1,
              spread: "0.4631",
            },
          ],
        },
      },
      expected: {
        date: "2023-04-03",
        range: {
          maxRateDate: "2023-04-07",
          minRateDate: "2000-03-22",
        },
        rates: {
          "08:07": [
            {
              buy: "4.4553",
              code: "EUR",
              date: "2023-04-03",
              sell: "4.9184",
              time: "08:07:00",
              units: 1,
              spread: "0.4631",
            },
          ],
        },
      },
    },
  ].forEach(({ json, expected }) =>
    expect(Schema.parse({ json })).toEqual({ json: expected })
  ));
