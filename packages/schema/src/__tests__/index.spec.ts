import { EntrySchema, Type } from "..";

describe("schema", () => {
  it("EntrySchema", () =>
    [
      {
        data: {
          id: "",
          data: {
            url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
          },
          returnvalue: {
            url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
            json: {
              date: "2022-12-01",
              rates: {
                "08:07": [
                  {
                    code: "EUR",
                    units: 1,
                    buy: "4.4503",
                    sell: "4.9128",
                    spread: "0.4625",
                    date: "2022-12-01",
                    time: "08:07:00",
                  },
                  {
                    code: "USD",
                    units: 1,
                    buy: "4.2645",
                    sell: "4.6907",
                    spread: "0.4262",
                    date: "2022-12-01",
                    time: "08:07:00",
                  },
                  {
                    code: "CHF",
                    units: 1,
                    buy: "4.6375",
                    sell: "4.8666",
                    spread: "0.2291",
                    date: "2022-12-01",
                    time: "08:07:00",
                  },
                  {
                    code: "GBP",
                    units: 1,
                    buy: "5.1656",
                    sell: "5.6831",
                    spread: "0.5175",
                    date: "2022-12-01",
                    time: "08:07:00",
                  },
                ],
              },
              range: {
                minRateDate: "2000-03-22",
                maxRateDate: "2022-12-01",
              },
            },
          },
        },
        type: Type.RATES,
      },
    ].forEach(({ data, type }) =>
      expect(EntrySchema.parse(data).type).toEqual(type)
    ));
});
