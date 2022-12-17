import { AutosSchema, limiter } from "..";

describe("client", () => {
  it("AutosSchema", () =>
    [
      {
        item: {
          id: "6019",
          data: {
            url: "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",
            body: {
              $match: {
                transactionalPrice: {
                  $min: 0,
                  $max: 1790000,
                },
              },
              $skip: 200,
              $limit: 100,
            },
          },
          type: "AUTOS",
          returnvalue: {
            json: {
              $count: {
                $total: 201,
              },
              $list: [
                {
                  id: 57666,
                  vin17: "WMWXX910802N17688",
                  type: "CAR",
                  isNew: false,
                },
              ],
            },
          },
        },
        next: null,
        list: [
          {
            url: "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/57666/",
          },
        ],
      },
      {
        item: {
          id: "6019",
          data: {
            url: "https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/search",
            body: {
              $match: {
                transactionalPrice: {
                  $min: 0,
                  $max: 1790000,
                },
              },
              $skip: 0,
              $limit: 100,
            },
          },
          type: "AUTOS",
          returnvalue: {
            json: {
              $count: {
                $total: 201,
              },
              $list: [
                {
                  id: 64715,
                  vin17: "WBA11AL0X07L78785",
                  type: "CAR",
                  isNew: true,
                },
              ],
            },
          },
        },
        next: {
          body: {
            $limit: 100,
            $match: {
              transactionalPrice: {
                $max: 1790000,
                $min: 0,
              },
            },
            $skip: 100,
          },
          url: "https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/search",
        },
        list: [
          {
            url: "https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/vehicle/64715/",
          },
        ],
      },
    ].forEach(({ item, next, list }) =>
      expect(AutosSchema.parse(item)).toEqual({ next, list })
    ));

  it("limiter", () =>
    [
      {
        jobs: [
          {
            data: {
              url: "url1",
            },
            opts: {
              timestamp: 0,
            },
          },
        ],
        data: {
          url: "url1",
        },
        period: 3600 * 1000,
        result: true,
      },
      {
        jobs: [
          {
            data: {
              url: "url1",
            },
            opts: {
              timestamp: Date.now(),
            },
          },
        ],
        data: {
          url: "url1",
        },
        period: 3600 * 1000,
        result: false,
      },
    ].forEach(({ jobs, data, period, result }) =>
      expect(limiter(jobs, period)(data)).toEqual(result)
    ));
});
