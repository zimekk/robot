import { Schema } from "..";

describe("funds", () => {
  it("Schema", () =>
    [
      {
        json: require("./values"),
      },
    ].forEach(({ json }) => expect(Schema.parse(json)).toBeDefined()));
});
