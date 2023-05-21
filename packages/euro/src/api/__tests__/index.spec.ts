import { getNextPage } from "..";

it("getNextPage", () =>
  expect(
    getNextPage(
      "https://www.euro.com.pl/rest/api/products/search?startFrom=0&numberOfItems=17&category=karty-pamieci&__=SanDisk&_i=3,4&developSearchMode=false&orderBy=POPULARITY&direction=ASC",
      { productsCount: 39 }
    )
  ).toEqual(
    "https://www.euro.com.pl/rest/api/products/search?startFrom=17&numberOfItems=17&category=karty-pamieci&__=SanDisk&_i=3%2C4&developSearchMode=false&orderBy=POPULARITY&direction=ASC"
  ));
