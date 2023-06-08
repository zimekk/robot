import { getNextPage } from "..";

describe("getNextPage", () => {
  it("first page", () =>
    expect(
      getNextPage(
        "https://www.x-kom.pl/g-2/c/1331-notebooki-laptopy-15-3.html?sort_by=rating_desc&producent=357-apple",
        {
          paginationState: {
            currentPage: 1,
            totalPages: 2,
          },
        }
      )
    ).toEqual(
      "https://www.x-kom.pl/g-2/c/1331-notebooki-laptopy-15-3.html?page=2&sort_by=rating_desc&producent=357-apple"
    ));

  it("next page", () =>
    expect(
      getNextPage(
        "https://www.x-kom.pl/g-2/c/1331-notebooki-laptopy-15-3.html?page=2&sort_by=rating_desc&producent=357-apple",
        {
          paginationState: {
            currentPage: 2,
            totalPages: 3,
          },
        }
      )
    ).toEqual(
      "https://www.x-kom.pl/g-2/c/1331-notebooki-laptopy-15-3.html?page=3&sort_by=rating_desc&producent=357-apple"
    ));

  it("last page", () =>
    expect(
      getNextPage(
        "https://www.x-kom.pl/g-2/c/1331-notebooki-laptopy-15-3.html?page=2&sort_by=rating_desc&producent=357-apple",
        {
          paginationState: {
            currentPage: 2,
            totalPages: 2,
          },
        }
      )
    ).toEqual(""));
});
