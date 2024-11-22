import { Schema } from "../schema";

describe("scrap", () => {
  xit("Schema", () =>
    [].forEach((json) =>
      expect(Schema.parse({ json }).json).toMatchObject({}),
    ));
});
