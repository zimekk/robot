import { diffItem } from "..";

it("diffItem", () =>
  [
    {
      data: {
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
      item: {
        date: "2023-04-03",
        range: {
          maxRateDate: "2023-04-11",
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
      expected: "",
    },
  ].forEach(({ data, item, expected }) =>
    expect(diffItem(data, item)).toEqual(expected)
  ));
