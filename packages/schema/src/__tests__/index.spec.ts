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
      {
        data: {
          id: "",
          data: {
            url: "https://www.x-kom.pl/goracy_strzal",
          },
          returnvalue: {
            json: {},
          },
        },
        type: Type.HOTSHOT,
      },
      {
        data: {
          id: "",
          data: {
            url: "https://www.al.to/goracy_strzal",
          },
          returnvalue: {
            json: {},
          },
        },
        type: Type.HOTSHOT,
      },
      {
        data: {
          id: "",
          data: {
            url: "https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1",
          },
          returnvalue: {
            html: "",
          },
        },
        type: Type.OTODOM,
      },
      {
        data: {
          id: "",
          data: {
            url: "https://www.otodom.pl/pl/oferta/przestronne-segmenty-w-sercu-starej-milosnej-ID4i4sj",
          },
          returnvalue: {
            html: "",
          },
        },
        type: Type.OTODOM_OFFER,
      },
      {
        data: {
          id: "",
          data: {
            url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
          },
          returnvalue: {
            json: {},
          },
        },
        type: Type.STATIONS,
      },
      {
        data: {
          id: "6844",
          data: {
            url: "https://www.autocentrum.pl/ac-ajax/stations-get-station?station_id=9768",
            x: 52.46227735918557,
            y: 21.222321240159772,
            station_id: 9768,
            network_id: 248,
            network_name: "Stacja LPG",
            map_img:
              "/system/assets/images/fuel-station/network/map/no-map-45x60.png",
          },
          returnvalue: {
            json: {},
          },
        },
        type: Type.STATION,
      },
    ].forEach(({ data, type }) =>
      expect(
        EntrySchema.parse({
          timestamp: 1674684317544,
          ...data,
        }).type
      ).toEqual(type)
    ));
});
