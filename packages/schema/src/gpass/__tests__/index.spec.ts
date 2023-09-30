import Schema from "..";

describe("gpass", () => {
  it("Schema", () =>
    [
      {
        html: require("./values2").html,
        json: {
          details: [
            {
              bullets: [
                "Setki wysokiej jakości gier na komputer",
                "Nowe gry dostępne w dniu premiery",
                "Oferty i zniżki dla użytkowników",
                "Abonament EA Play",
              ],
              intro: "PC",
              link: {
                href: "https://www.xbox.com/games/store/pc-game-pass/cfq7ttc0kgq8",
                text: "Dołącz teraz, subskrypcja Xbox Game Pass na PC",
              },
              price: "39,99 zł/mies.",
              priceNumber: undefined,
            },
            {
              bullets: [
                "Sieciowa rozgrywka wieloosobowa na konsolach",
                "Katalog ponad 25 wysokiej jakości gier na konsole",
                "Oferty i zniżki dla użytkowników",
              ],
              intro: "Core",
              link: {
                href: "https://www.xbox.com/games/store/xbox-game-pass-core/cfq7ttc0k5dj?rtc=1",
                text: "Dołącz teraz, subskrypcja Xbox Game Pass Core",
              },
              price: "29 zł/mies.",
              priceNumber: undefined,
            },
            {
              bullets: [
                "Setki wysokiej jakości gier na konsolach, komputerach i w chmurze",
                "Nowe gry dostępne w dniu premiery",
                "Oferty, zniżki i korzyści dla członków",
                "Sieciowa rozgrywka wieloosobowa na konsolach",
                "Abonament EA Play",
              ],
              intro: "Ultimate",
              link: {
                href: "https://www.xbox.com/games/store/game-pass-ultimate/CFQ7TTC0KHS0",
                text: "Dołącz teraz, subskrypcja Xbox Game Pass Ultimate",
              },
              price: "62,99 zł/mies.",
              priceNumber: undefined,
            },
            {
              bullets: [
                "Setki wysokiej jakości gier na konsole",
                "Nowe gry dostępne w dniu premiery",
                "Oferty i zniżki dla użytkowników",
              ],
              intro: "Konsola",
              link: {
                href: "https://www.microsoft.com/p/xbox-game-pass/cfq7ttc0k6l8",
                text: "Dołącz teraz, subskrypcja Xbox Game Pass Ultimate",
              },
              price: "42,99 zł/mies.",
              priceNumber: undefined,
            },
          ],
        },
      },
    ].forEach(({ html, json }) =>
      expect(Schema.parse({ html }).json).toEqual(json)
    ));

  xit("Schema", () =>
    [
      {
        html: require("./values").html,
        json: {
          details: [
            {
              bullets: [
                "Graj w setki wysokiej jakości gier na konsolach, komputerach i w chmurze",
                "Nowe gry dodawane przez cały czas",
                "Gry Xbox Game Studios dostępne już w dniu premiery",
                "Ekskluzywne zniżki dla członków i oferty na wyłączność",
                "Darmowe Korzyści, w tym zawartość w grze i oferty partnerów",
              ],
              intro: "ULTIMATE",
              link: {
                href: "https://www.microsoft.com/pl-pl/p/xbox-game-pass-ultimate/CFQ7TTC0KHS0/0007",
                text: "Dołącz teraz w cenie 4 zł, Xbox game pass ultimate",
              },
              price:
                "Otrzymaj pierwszy miesiąc w cenie 4 zł, a następnie w cenie 54,99 zł miesięcznie",
              priceNumber: "54,99 zł miesięcznie",
            },
            {
              bullets: [
                "Zagraj w setki wysokiej jakości gier na PC",
                "Nowe gry dodawane przez cały czas",
                "Gry Xbox Game Studios dostępne już w dniu premiery",
                "Zniżki i oferty członkowskie",
              ],
              intro: "PC",
              link: {
                href: "https://www.microsoft.com/p/xbox-game-pass/CFQ7TTC0KGQ8/0002",
                text: "Dołącz teraz za 4 zł, Xbox Game Pass na PC",
              },
              price:
                "Otrzymaj pierwszy miesiąc w cenie 4 zł, a następnie w cenie 39,99 zł miesięcznie",
              priceNumber: "39,99 zł miesięcznie",
            },
            {
              bullets: [
                "Zagraj w setki wysokiej jakości gier konsolowych na konsoli",
                "Nowe gry dodawane przez cały czas",
                "Gry Xbox Game Studios dostępne już w dniu premiery",
                "Zniżki i oferty członkowskie",
              ],
              intro: "KONSOLA",
              link: {
                href: "https://www.microsoft.com/pl-pl/p/xbox-game-pass/cfq7ttc0k6l8/0001",
                text: "Dołącz teraz, Xbox Game Pass na Console",
              },
              price: "40 zł miesięcznie",
              priceNumber: "40 zł miesięcznie",
            },
          ],
        },
      },
    ].forEach(({ html, json }) =>
      expect(Schema.parse({ html }).json).toEqual(json)
    ));
});
