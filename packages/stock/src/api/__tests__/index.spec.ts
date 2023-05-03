import { getNextPage } from "..";

it("getNextPage", () =>
  expect(
    getNextPage(
      "https://rvm-prod.aws.bmw.cloud/similarity-search/v2/search?countries=PL&consumer=stockLocator_PL&maxResults=48&startIndex=0",
      { totalCount: 50 }
    )
  ).toEqual(
    "https://rvm-prod.aws.bmw.cloud/similarity-search/v2/search?countries=PL&consumer=stockLocator_PL&maxResults=48&startIndex=48"
  ));
