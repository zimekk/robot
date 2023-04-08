import { FundsSchema } from "..";

describe("funds", () => {
  it("schema", () =>
    [
      {
        json: require("./values"),
        meta: {
          currency: "PLN",
          division: "daily",
          end_date: "2022-12-01",
          end_value: 2113.5,
          id: 2,
          limit: 20,
          name: "PKO Obligacji Skarbowych",
          next: "/_ajax/rest/v2/tfi/value/?division=daily&offset=20&investment_id=2&limit=20&format=json",
          offset: 0,
          only_full: false,
          previous: null,
          roi: 111.35,
          start_date: "2001-02-27",
          start_value: 1000,
          synthetic_value_to: null,
          total_count: 5449,
        },
      },
    ].forEach(({ json, meta }) =>
      expect(FundsSchema.parse(json).meta).toEqual(meta)
    ));
});
