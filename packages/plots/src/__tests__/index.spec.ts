import { Schema } from "../schema";

describe("plots", () => {
  it("Schema", () =>
    [
      {
        listing: {
          listing: {
            pageNumber: 0,
            totalElements: 4,
            visibleElements: 4,
            totalPages: 1,
            ads: [
              {
                id: 923264666,
                title:
                  "Zalesie Górne - zabudowana działka budowlana o cechach komercyjnych",
                description:
                  "Witam,<br />\nzapraszamy do zakupu działki budowlanej, przy ul. Bukowej 8 w centrum Zalesia Górnego vis’ a vis stacji kolejowej. Z uwagi na lokalizacje, nieruchomość  przejawia silne cechy komercyjne, a geodezyjna ewidencja - klasoużytek “B” - modyfikuje miejscowy plan zagospodarowania przestrzennego działek leśnych (klasoużytek “LSV” w obszarze MN1,LS) pozwalając na wiele wariantów zabudowy do ponad 300 m2 powierzchni działki. Ponadto, dopuszczalna jest zabudowa w 3 kondygnacjach, co powiększa metraż użytkowy. Ze względu na idealne skomunikowanie nieruchomosci - bliskość stacji kolejowej, z której dojazd, np. do Warszawy Służewiec wynosi 17 min. pociągiem zwykłym, 7 min. przyspieszonym, asfaltowy dojazd, miejsce na parkingi  - zabudowa może być przeznaczona na wynajm mieszkaniowy, jak też w części na usługi. Na działce znajduje się nieukończony budynek mieszkalny ze wszystkimi przyłączami (światłowód w drodze), o prostym kształcie, możliwością wykonania wielu wejść oraz korzystnym usytuowaniu, co stanowić może idealną bazę dla dalszej rozbudowy i ukończenia całości inwestycji w kierunku porzadanym. W szczególności, można rozważać rozbudowę za pomocą przyłączanych prefabrykowanych modułów mieszkalnych/usługowych z wykorzystaniem obecnej klatki schodowej, która znajduje się na brzegu budynku od strony wolnej przestrzeni do zabudowy. Na nieruchomosci wciąż zlokalizowana jest dzialalność gospodarcza. Budynek po wstępnej analizie architektonicznej.<br />\nSprzedaż bezpośrednia. Nie podejmiemy współpracy z agencjami, które będą ogłaszać cenę inną niż wskazana w tym ogłoszeniu.<br />\nRafał",
                category: {
                  id: 24,
                  type: "real_estate",
                },
                map: {
                  zoom: 12,
                  lat: 52.02722,
                  lon: 21.03705,
                  radius: 2,
                  show_detailed: false,
                },
                isBusiness: false,
                url: "https://www.olx.pl/d/oferta/zalesie-gorne-zabudowana-dzialka-budowlana-o-cechach-komercyjnych-CID3-ID10tWjA.html",
                isHighlighted: true,
                isPromoted: true,
                promotion: {
                  highlighted: true,
                  urgent: false,
                  top_ad: true,
                  options: ["bundle_optimum"],
                  b2c_ad_page: true,
                  premium_ad_page: true,
                },
                delivery: {
                  rock: {
                    offer_id: null,
                    active: false,
                    mode: "NotEligible",
                  },
                },
                createdTime: "2024-06-06T11:08:09+02:00",
                lastRefreshTime: "2024-08-19T17:46:06+02:00",
                pushupTime: "2024-08-19T17:46:06+02:00",
                validToTime: "2024-09-14T15:46:02+02:00",
                isActive: true,
                status: "active",
                params: [
                  {
                    key: "type",
                    name: "Rodzaj",
                    type: "select",
                    value: "Działki budowlane",
                    normalizedValue: "dzialki-budowlane",
                  },
                  {
                    key: "m",
                    name: "Powierzchnia",
                    type: "input",
                    value: "1 000 m²",
                    normalizedValue: "1000",
                  },
                  {
                    key: "price_per_m",
                    name: "Cena za m²",
                    type: "input",
                    value: "1299 zł/m²",
                    normalizedValue: "1299",
                  },
                ],
                itemCondition: "",
                price: {
                  budget: false,
                  free: false,
                  exchange: false,
                  displayValue: "1 299 000 zł",
                  regularPrice: {
                    value: 1299000,
                    currencyCode: "PLN",
                    currencySymbol: "zł",
                    negotiable: false,
                    priceFormatConfig: {
                      decimalSeparator: ",",
                      thousandsSeparator: " ",
                    },
                  },
                },
                salary: null,
                partner: {
                  code: "",
                },
                isJob: false,
                photos: [
                  "https://ireland.apollo.olxcdn.com:443/v1/files/woqatyq8go2t-PL/image;s=2079x960",
                  "https://ireland.apollo.olxcdn.com:443/v1/files/wy3z7sieu7kr2-PL/image;s=3024x4032",
                  "https://ireland.apollo.olxcdn.com:443/v1/files/ewuwqtoc8ut22-PL/image;s=3024x4032",
                ],
                photosSet: [
                  "https://ireland.apollo.olxcdn.com:443/v1/files/woqatyq8go2t-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/woqatyq8go2t-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/woqatyq8go2t-PL/image;s=1000x700 3x",
                  "https://ireland.apollo.olxcdn.com:443/v1/files/wy3z7sieu7kr2-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/wy3z7sieu7kr2-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/wy3z7sieu7kr2-PL/image;s=1000x700 3x",
                  "https://ireland.apollo.olxcdn.com:443/v1/files/ewuwqtoc8ut22-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/ewuwqtoc8ut22-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/ewuwqtoc8ut22-PL/image;s=1000x700 3x",
                ],
                location: {
                  cityName: "Zalesie Górne",
                  cityId: 20475,
                  cityNormalizedName: "zalesie-gorne",
                  regionName: "Mazowieckie",
                  regionId: 2,
                  regionNormalizedName: "mazowieckie",
                  districtName: null,
                  districtId: 0,
                  pathName: "Mazowieckie, Zalesie Górne",
                },
                urlPath:
                  "/d/oferta/zalesie-gorne-zabudowana-dzialka-budowlana-o-cechach-komercyjnych-CID3-ID10tWjA.html",
                contact: {
                  chat: true,
                  courier: false,
                  name: "Rafał",
                  negotiation: true,
                  phone: true,
                },
                user: {
                  id: 2238647968,
                  name: "Rafał",
                  photo: null,
                  logo: null,
                  otherAdsEnabled: true,
                  socialNetworkAccountType: null,
                  isOnline: false,
                  lastSeen: "2024-08-15T15:40:49+02:00",
                  about: "",
                  bannerDesktopURL: "",
                  logo_ad_page: null,
                  company_name: "",
                  created: "2024-06-06T07:06:10+02:00",
                  sellerType: null,
                  uuid: "b13decd8-4a81-4651-8d46-889ae48d16ec",
                },
                shop: {
                  subdomain: null,
                },
                safedeal: {
                  weight: 0,
                  weight_grams: 0,
                  status: "unactive",
                  safedeal_blocked: false,
                  allowed_quantity: [],
                },
                searchReason: "promoted",
                isNewFavouriteAd: false,
              },
            ],
            metaData: {
              searchId: "2862B86AEA8D5459D1F98B830353DF29",
              spellCheckerQuery: null,
              searchSuggestion: {
                type: "extended_distance",
                url: "https://www.olx.pl/api/v1/offers?offset=0&limit=40&category_id=24&region_id=2&city_id=20475&filter_refiners=spell_checker&suggest_filters=true&strategy=extended_distance",
                changes: {},
              },
              favSearchNewAds: [],
              location: null,
              facets: {
                district: [],
                category_without_exclusions: [
                  {
                    id: 3,
                    count: 4,
                    label: "Nieruchomości",
                    url: "/nieruchomosci/zalesie-gorne",
                  },
                  {
                    id: 24,
                    count: 4,
                    label: "Sprzedaż",
                    url: "/nieruchomosci/dzialki/sprzedaz/zalesie-gorne",
                  },
                  {
                    id: 709,
                    count: 4,
                    label: "Działki",
                    url: "/nieruchomosci/dzialki/zalesie-gorne",
                  },
                ],
              },
              searchReason: {
                promoted: [0, 1],
                organic: [2, 3],
              },
              subSections: [],
              suggestedFilters: [],
              search_request_id:
                "iqQr0acpIytbEOTEmCUFlvr376e05RZAKYHAwK9H6p2CLcicdgxPpQ==",
            },
            links: {
              self: "https://www.olx.pl/api/v1/offers?offset=0&limit=40&category_id=24&region_id=2&city_id=20475&filter_refiners=spell_checker&facets=%5B%7B%22field%22%3A%22district%22%2C%22fetchLabel%22%3Atrue%2C%22fetchUrl%22%3Atrue%2C%22limit%22%3A30%7D%2C%7B%22field%22%3A%22category_without_exclusions%22%2C%22fetchLabel%22%3Atrue%2C%22fetchUrl%22%3Atrue%2C%22limit%22%3A100%7D%5D&suggest_filters=true",
              first:
                "https://www.olx.pl/api/v1/offers?offset=0&limit=40&category_id=24&region_id=2&city_id=20475&filter_refiners=spell_checker&facets=%5B%7B%22field%22%3A%22district%22%2C%22fetchLabel%22%3Atrue%2C%22fetchUrl%22%3Atrue%2C%22limit%22%3A30%7D%2C%7B%22field%22%3A%22category_without_exclusions%22%2C%22fetchLabel%22%3Atrue%2C%22fetchUrl%22%3Atrue%2C%22limit%22%3A100%7D%5D&suggest_filters=true",
            },
            params: {
              offset: 0,
              limit: 40,
              category_id: 24,
              region_id: 2,
              city_id: 20475,
              filter_refiners: "spell_checker",
              facets:
                '[{"field":"district","fetchLabel":true,"fetchUrl":true,"limit":30},{"field":"category_without_exclusions","fetchLabel":true,"fetchUrl":true,"limit":100}]',
            },
            requestParams: {
              page: 0,
              categoryPath: "nieruchomosci/dzialki/sprzedaz/zalesie-gorne",
              query: "",
              params: {},
              options: {
                spellCheckerDisabledByExperiment: false,
              },
            },
            categoryId: 24,
            categories: null,
            viewType: "gallery",
            expansionListing: {
              pageNumber: 0,
              totalElements: 1000,
              visibleElements: 2152,
              totalPages: 25,
              ads: [
                {
                  id: 934904954,
                  title: "działka usługowo-mieszkaniowa blisko Piaseczna",
                  description:
                    "<p>Na sprzedaż nieruchomość składająca się z dwóch sąsiadujących ze sobą działek w Wólce Kozodawskiej w odległości 7 km od Piaseczna (15 minut autem) drogą wojewódzką 722. Do centrum Warszawy dojedziemy w 40 minut, odległość ok 32 km.<br />\nDoskonała oferta dla osób poszukujących działki pozwalającej połączyć funkcję usługową z mieszkalną.<br />\nTeren objęty miejscowym planem zagospodarowania terenu i oznaczony symbolem 3MN/U z przeznaczeniem pod budownictwo mieszkaniowe z funkcją usługową.<br />\nW skład nieruchomości wchodzą dwie działki 251/17 - narożna o powierzchni 1350 m2 oraz 251/16 o powierzchni 1136 m2<br />\nŁączna powierzchnia obu działek wynosi 2486 m2  <br />\nTeren płaski, niezabudowany z niewielką ilością drzew. Dostępne wszystkie media. Dojazd drogą asfaltową.<br />\nSerdecznie zapraszam do zapoznania się z ofertą.</p>",
                  category: {
                    id: 24,
                    type: "real_estate",
                  },
                  map: {
                    zoom: 15,
                    lat: 52.03759,
                    lon: 21.01494,
                    radius: 0,
                    show_detailed: true,
                  },
                  isBusiness: true,
                  url: "https://www.olx.pl/d/oferta/dzialka-uslugowo-mieszkaniowa-blisko-piaseczna-CID3-ID11gLua.html",
                  isHighlighted: false,
                  isPromoted: false,
                  promotion: {
                    highlighted: false,
                    urgent: false,
                    top_ad: false,
                    options: [],
                    b2c_ad_page: false,
                    premium_ad_page: false,
                  },
                  externalUrl:
                    "https://www.otodom.pl/pl/oferta/dzialka-uslugowo-mieszkaniowa-blisko-piaseczna-ID4rCD3.html",
                  delivery: {
                    rock: {
                      offer_id: null,
                      active: false,
                      mode: "NotEligible",
                    },
                  },
                  createdTime: "2024-08-01T10:42:59+02:00",
                  lastRefreshTime: "2024-08-01T10:42:59+02:00",
                  validToTime: "2024-08-31T10:42:52+02:00",
                  isActive: true,
                  status: "active",
                  params: [
                    {
                      key: "type",
                      name: "Rodzaj",
                      type: "select",
                      value: "Działki inwestycyjne",
                      normalizedValue: "dzialki-inwestycyjne",
                    },
                    {
                      key: "m",
                      name: "Powierzchnia",
                      type: "input",
                      value: "2 486 m²",
                      normalizedValue: "2486",
                    },
                    {
                      key: "price_per_m",
                      name: "Cena za m²",
                      type: "input",
                      value: "394.21 zł/m²",
                      normalizedValue: "394.21",
                    },
                  ],
                  itemCondition: "",
                  price: {
                    budget: false,
                    free: false,
                    exchange: false,
                    displayValue: "980 000 zł",
                    regularPrice: {
                      value: 980000,
                      currencyCode: "PLN",
                      currencySymbol: "zł",
                      negotiable: false,
                      priceFormatConfig: {
                        decimalSeparator: ",",
                        thousandsSeparator: " ",
                      },
                    },
                  },
                  salary: null,
                  partner: {
                    code: "otodom_pl",
                  },
                  isJob: false,
                  photos: [
                    "https://ireland.apollo.olxcdn.com:443/v1/files/pshopieo7dyu3-PL/image;s=932x705",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/jtmo4em1jup72-PL/image;s=1200x900",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/cq4i39pp2go11-PL/image;s=1200x900",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/p7mpwhdhzuy41-PL/image;s=1200x900",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/4igpxaafgdtv1-PL/image;s=1200x900",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/qtqszb773th83-PL/image;s=1200x900",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/ov800thzsttx2-PL/image;s=1200x900",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/2b6pnmixn6812-PL/image;s=1200x900",
                  ],
                  photosSet: [
                    "https://ireland.apollo.olxcdn.com:443/v1/files/pshopieo7dyu3-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/pshopieo7dyu3-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/pshopieo7dyu3-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/jtmo4em1jup72-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/jtmo4em1jup72-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/jtmo4em1jup72-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/cq4i39pp2go11-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/cq4i39pp2go11-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/cq4i39pp2go11-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/p7mpwhdhzuy41-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/p7mpwhdhzuy41-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/p7mpwhdhzuy41-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/4igpxaafgdtv1-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/4igpxaafgdtv1-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/4igpxaafgdtv1-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/qtqszb773th83-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/qtqszb773th83-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/qtqszb773th83-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/ov800thzsttx2-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/ov800thzsttx2-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/ov800thzsttx2-PL/image;s=1000x700 3x",
                    "https://ireland.apollo.olxcdn.com:443/v1/files/2b6pnmixn6812-PL/image;s=389x272 1x,https://ireland.apollo.olxcdn.com:443/v1/files/2b6pnmixn6812-PL/image;s=516x361 2x,https://ireland.apollo.olxcdn.com:443/v1/files/2b6pnmixn6812-PL/image;s=1000x700 3x",
                  ],
                  location: {
                    cityName: "Wólka Kozodawska",
                    cityId: 76857,
                    cityNormalizedName: "wolka-kozodawska",
                    regionName: "Mazowieckie",
                    regionId: 2,
                    regionNormalizedName: "mazowieckie",
                    districtName: null,
                    districtId: 0,
                    pathName: "Mazowieckie, Wólka Kozodawska",
                  },
                  urlPath:
                    "/d/oferta/dzialka-uslugowo-mieszkaniowa-blisko-piaseczna-CID3-ID11gLua.html",
                  contact: {
                    chat: true,
                    courier: false,
                    name: "Anna Rogowska",
                    negotiation: false,
                    phone: true,
                  },
                  user: {
                    id: 21117567,
                    name: "Anna Rogowska",
                    photo: null,
                    logo: null,
                    otherAdsEnabled: true,
                    socialNetworkAccountType: null,
                    isOnline: true,
                    lastSeen: "2024-08-20T17:09:59+02:00",
                    about: "",
                    bannerDesktopURL: "",
                    logo_ad_page: null,
                    company_name: "",
                    created: "2014-05-23T01:05:01+02:00",
                    sellerType: null,
                    uuid: "ffce0e06-25f9-4d4f-9a59-ae1477b57dce",
                  },
                  shop: {
                    subdomain: null,
                  },
                  safedeal: {
                    weight: 0,
                    weight_grams: 0,
                    status: "unactive",
                    safedeal_blocked: false,
                    allowed_quantity: [],
                  },
                  searchReason: "organic",
                  isNewFavouriteAd: false,
                },
              ],
              metaData: {
                searchId: "D02EF6CFFFF1F4FE049E8A48F35F9DD2",
                spellCheckerQuery: null,
                searchSuggestion: null,
                favSearchNewAds: [],
                location: null,
                facets: {},
                searchReason: {
                  organic: [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                    32, 33, 34, 35, 36, 37, 38, 39,
                  ],
                },
                subSections: [],
                suggestedFilters: [],
                search_request_id:
                  "QohidK0LJFMy50-BoMxgq9mUnLcmN9Rmwqd_usF4ASNUGbd7rQdJGg==",
              },
              links: {
                self: "https://www.olx.pl/api/v1/offers?category_id=24&city_id=20475&filter_refiners=spell_checker&limit=40&offset=0&region_id=2&strategy=extended_distance&suggest_filters=true",
                next: "https://www.olx.pl/api/v1/offers?category_id=24&city_id=20475&filter_refiners=spell_checker&limit=40&offset=40&region_id=2&strategy=extended_distance&suggest_filters=true",
                first:
                  "https://www.olx.pl/api/v1/offers?category_id=24&city_id=20475&filter_refiners=spell_checker&limit=40&offset=0&region_id=2&strategy=extended_distance&suggest_filters=true",
              },
              params: {
                offset: 0,
                limit: 40,
                category_id: 24,
                region_id: 2,
                city_id: 20475,
                filter_refiners: "spell_checker",
                facets:
                  '[{"field":"district","fetchLabel":true,"fetchUrl":true,"limit":30},{"field":"category_without_exclusions","fetchLabel":true,"fetchUrl":true,"limit":100}]',
              },
              requestParams: {
                page: 0,
                categoryPath: "nieruchomosci/dzialki/sprzedaz/zalesie-gorne",
                query: "",
                params: {},
                options: {
                  spellCheckerDisabledByExperiment: false,
                },
              },
              categoryId: 24,
              categories: null,
              viewType: "gallery",
              expansionListing: null,
            },
          },
          popularSearches: [
            {
              label: "działka",
              href: "/nieruchomosci/dzialki/sprzedaz/zalesie-gorne/q-dzia%C5%82ka/",
            },
          ],
          seo: {
            title:
              "Sprzedaj z OLX - Zalesie Górne - dodaj ofertę w kategorii Sprzedaż",
            description:
              "Masz coś do sprzedania? Chętnie pomożemy! Wejdź na OLX, dodaj ofertę i sprzedaj w kategorii Sprzedaż - Zalesie Górne i okolice!",
            h1: "",
            seoText: "",
            topListText: "",
          },
          breadcrumbs: [
            {
              label: "Strona główna",
              href: "/",
            },
            {
              label: "Nieruchomości",
              href: "/nieruchomosci/",
              categoryId: 3,
            },
            {
              label: "Działki",
              href: "/nieruchomosci/dzialki/",
              categoryId: 709,
            },
            {
              label: "Sprzedaż",
              href: "/nieruchomosci/dzialki/sprzedaz/",
              categoryId: 24,
            },
            {
              label: "Sprzedaż - Mazowieckie",
              href: "/nieruchomosci/dzialki/sprzedaz/mazowieckie/",
              categoryId: 24,
            },
            {
              label: "Sprzedaż - Zalesie Górne",
              href: "/nieruchomosci/dzialki/sprzedaz/zalesie-gorne/",
              categoryId: 24,
            },
          ],
          locationNames: {
            city: {
              id: 20475,
              name: "Zalesie Górne",
              normalized_name: "zalesie-gorne",
              lat: 52.02722,
              lon: 21.03705,
            },
            municipality: {
              name: "Piaseczno",
            },
            county: {
              name: "piaseczyński",
            },
            region: {
              id: 2,
              name: "Mazowieckie",
              normalized_name: "mazowieckie",
            },
          },
          filters: {
            data: {},
            metadata: {
              currencies: [
                {
                  code: "PLN",
                  symbol: "zł",
                  is_default: true,
                  prioritized_categories: [],
                },
              ],
              distances: [
                {
                  value: 0,
                  is_default: true,
                },
                {
                  value: 2,
                  is_default: false,
                },
                {
                  value: 5,
                  is_default: false,
                },
                {
                  value: 10,
                  is_default: false,
                },
                {
                  value: 15,
                  is_default: false,
                },
                {
                  value: 30,
                  is_default: false,
                },
                {
                  value: 50,
                  is_default: false,
                },
                {
                  value: 75,
                  is_default: false,
                },
                {
                  value: 100,
                  is_default: false,
                },
              ],
            },
            headers: {
              "x-request-id":
                "XQqppu2sOiDkC0k837RN2_YWYtL2-GwpfXuNd6-7leXXi9LmsqGbbA==",
            },
          },
          filteredCounts: {
            "3": 17,
            "4765": 3,
          },
          stats: {
            adsCount: 4,
            priceAvg: 1101000,
            priceMax: 1299000,
            priceMin: 625000,
            currency: {
              code: "PLN",
              symbol: "zł",
            },
          },
          popularCities: [
            "17871",
            "8959",
            "19701",
            "13983",
            "5659",
            "10609",
            "10119",
            "16705",
            "4019",
            "7691",
            "15241",
            "1079",
            "3231",
            "14673",
            "4765",
          ],
        },
      },
    ].forEach((json) =>
      expect(Schema.parse({ json }).json).toMatchObject({
        listing: {
          listing: {
            pageNumber: 0,
          },
        },
      }),
    ));
});
