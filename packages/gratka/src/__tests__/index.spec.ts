import { Schema } from "../schema";

describe("rynek", () => {
  it("Schema", () =>
    [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        url: "http://gratka.pl/nieruchomosci/dzialki-grunty/budowlana/warszawa/ursynow",
        additionalType: "RealEstateListing",
        name: "Działki budowlane na sprzedaż Ursynów Warszawa | Ogłoszenia Gratka.pl",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "PLN",
          offerCount: 32,
          lowPrice: 509000,
          highPrice: 7850000,
          businessFunction: "http://purl.org/goodrelations/v1#Sell",
          offers: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Place",
                description:
                  "Na sprzedaż działka o powierzchni 1536m2 na Ursynowie Pyrach przy ul Żołny. Wymiary 28 x 55m, działka zlokalizowana ok 600 m od ulicy Puławskiej i ok 300m od wejścia do Lasu Kabackiego, oddalona od obwodnicy S2. Teren uporządkowany, kilkanaście drzew w tylnej części działki, wszystkie media w drodze. Dopuszczona zabudowa mieszkaniowa, jednorodzinna w formie wolnostojących budynków jednorodzinnych lub bliźniaczych. Uwzględniając MPZP jest to idealne miejsce na budowę np. dwóch domów jednorodzinny...",
                image:
                  "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/db/56/30251817_854044071_dzialka-budowlana-warszawa-pyry_small_256x175.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Polska",
                  addressLocality: "Warszawa",
                  sublocality: "Pyry",
                  addressRegion: "mazowieckie",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 52.13761971,
                  longitude: 21.02567674,
                },
              },
              url: "https://gratka.pl/nieruchomosci/dzialka-budowlana-warszawa-pyry/ob/30251817",
              name: "Działka budowlana Warszawa Pyry",
              availability: "http://schema.org/InStock",
              priceCurrency: "PLN",
              price: 2304000,
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Place",
                description:
                  "Działka o powierzchni 2051 m2 położona przy ulicy Trombity na Ursynowie. W bezpośrednim sąsiedztwie Jeziora Zgorzała. Działka prostokątna o wymiarach ok.22 metry szerokości na 93 metry długości. Przeznaczona pod zabudowę jednorodzinną lub bliźniaczą. Posiada wydane warunki zabudowy na dom bliźniak. Wjazd na działkę bezpośrednio z ulicy Trombity i z wydzielonej wewnętrznej drogi dojazdowej. Dojazd do ulicy Puławskiej zajmuje 3 minuty, w pobliżu stacja kolejowa Warszawa Jeziorki. W odległości 4 km...",
                image:
                  "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/9e/e0/30840939_821972897_dzialka-inna-warszawa-ursynow-ul-trombity_small_256x175.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Polska",
                  addressLocality: "Warszawa",
                  sublocality: "Ursynów",
                  addressRegion: "mazowieckie",
                  streetAddress: "Trombity",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 52.11995,
                  longitude: 20.99491,
                },
              },
              url: "https://gratka.pl/nieruchomosci/dzialka-budowlana-warszawa-ursynow-ul-trombity/ob/30840939",
              name: "Działka budowlana Warszawa Ursynów, ul. Trombity",
              availability: "http://schema.org/InStock",
              priceCurrency: "PLN",
              price: 1750000,
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Place",
                description:
                  "DZIAŁKA POD BUDOWĘ DOMU JEDNORODZINNEGO W sąsiedztwie Lasu Kabackiego | Brak MPZP ***** O DZIAŁCE: Działka położona jest na optymalnym planie zbliżonym do kwadratu o szerokość ok. 31m i długość ok. 41m. Woda, kanalizacja, prąd, gaz w ulicy.  LOKALIZACJA: Ursynów to spokojna dzielnica wybierana przez mieszkańców ze względu na zieleń, nowoczesne place zabaw, bezpieczeństwo, bliskość przedszkoli i szkół, do których można dotrzeć bez przekraczania dużych ulic. To dobry wybór dla tych, których życie ...",
                image:
                  "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a2/14/32482715_862988775_dzialka-budowlana-warszawa-ursynow_small_256x175.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Polska",
                  addressLocality: "Warszawa",
                  sublocality: "Ursynów",
                  addressRegion: "mazowieckie",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 52.11097,
                  longitude: 21.03319,
                },
              },
              url: "https://gratka.pl/nieruchomosci/dzialka-budowlana-warszawa-ursynow/ob/32482715",
              name: "Działka budowlana Warszawa Ursynów",
              availability: "http://schema.org/InStock",
              priceCurrency: "PLN",
              price: 1813000,
            },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        additionalType: "RealEstateListing",
        name: "Działki budowlane na sprzedaż Ursynów Warszawa | Ogłoszenia",
        url: "https://gratka.pl/nieruchomosci/dzialki-grunty/budowlana/warszawa/ursynow",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "520000.00",
          highPrice: "27300000.00",
          businessFunction: "https://purl.org/goodrelations/v1#Sell",
          offers: [
            {
              "@context": "https://schema.org",
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              name: "Działka na sprzedaż, 2325 m² Ursynów, Głuszca",
              price: "5900000.00",
              priceCurrency: "PLN",
              url: "https://gratka.pl/nieruchomosci/dzialka-warszawa-ursynow-gluszca/oi/37066193",
              itemOffered: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Polska",
                  streetAddress: "Głuszca",
                  addressRegion: "mazowieckie",
                  addressLocality: "Warszawa",
                },
                description:
                  "Działka budowlana położona wśród domów jednorodzinnych, jednocześnie w cichej okolicy w bliskim sąsiedztwie ul. Puławskiej. Posiada stary drzewostan. Wygodny prostokątny kształt działki daje możliwość dowolnej zabudowy. nadaje się na zlokalizowanie niewielkiego osiedla w zabudowie szeregowej.",
                floorSize: {
                  "@type": "QuantitativeValue",
                  value: "2325.00",
                  unitCode: "MTK",
                },
              },
            },
          ],
          offerCount: 35,
          priceCurrency: "PLN",
        },
      },
    ].forEach((json) =>
      expect(Schema.parse({ json }).json["@type"]).toEqual("Product"),
    ));
});
