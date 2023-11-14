import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import chunk from "chunk";
import { seconds } from "milliseconds";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { z } from "zod";
import { DataSchema, OptsSchema } from "@dev/schema";
import { Fieldset } from "../components/Fieldset";
import { Link } from "../components/Link";
import { Spinner } from "../components/Spinner";

export const API_URL = process.env.API_URL || "";

const SHOPS = [
  "Andrychów",
  "Augustów",
  "Bartoszyce",
  "Bełchatów",
  "Biała Podlaska",
  "Białki",
  "Białogard",
  "Białystok",
  "Bielsk Podlaski",
  "Bielsko-Biała",
  "Biłgoraj",
  "Bochnia",
  "Bogatynia",
  "Bolesławiec",
  "Braniewo",
  "Brodnica",
  "Brzeg",
  "Brzesko",
  "Bydgoszcz",
  "Bytom",
  "Bytów",
  "Chełm",
  "Chojnice",
  "Chorzów",
  "Choszczno",
  "Chrzanów",
  "Ciechanów",
  "Cieszyn",
  "Czeladź",
  "Częstochowa",
  "Działdowo",
  "Dąbrowa Górnicza",
  "Dębica",
  "Dęblin",
  "Elbląg",
  "Ełk",
  "Garwolin",
  "Gdańsk",
  "Gdynia",
  "Giżycko",
  "Gliwice",
  "Gniezno",
  "Gorlice",
  "Gorzów Wielkopolski",
  "Gostyń",
  "Grodzisk Mazowiecki",
  "Grudziądz",
  "Gryfice",
  "Głogów",
  "Hrubieszów",
  "Inowrocław",
  "Iława",
  "Janki",
  "Jarocin",
  "Jarosław",
  "Jastrzębie Zdrój",
  "Jasło",
  "Jaworzno",
  "Jelenia Góra",
  "Kalisz",
  "Katowice",
  "Kielce",
  "Kluczbork",
  "Kobierzyce",
  "Konin",
  "Koszalin",
  "Kozienice",
  "Koło",
  "Kołobrzeg",
  "Kościan",
  "Kościerzyna",
  "Kraków",
  "Krapkowice",
  "Krosno",
  "Krotoszyn",
  "Kutno",
  "Kwidzyn",
  "Kędzierzyn-Koźle",
  "Kępno",
  "Kłodzko",
  "Legionowo",
  "Legnica",
  "Leszno",
  "Lubań",
  "Lublin",
  "Lubliniec",
  "Lębork",
  "Malbork",
  "Mielec",
  "Mińsk Mazowiecki",
  "Mrągowo",
  "Myszków",
  "Mysłowice",
  "Myślenice",
  "Myślibórz",
  "Mława",
  "Namysłów",
  "Nowa Sól",
  "Nowy Dwór Mazowiecki",
  "Nowy Sącz",
  "Nowy Targ",
  "Nowy Tomyśl",
  "Nysa",
  "Olecko",
  "Oleśnica",
  "Olsztyn",
  "Opoczno",
  "Opole",
  "Ostrowiec Świętokrzyski",
  "Ostrołęka",
  "Ostrów Mazowiecka",
  "Ostrów Wielkopolski",
  "Otwock",
  "Oława",
  "Oświęcim",
  "Pabianice",
  "Piaseczno",
  "Piekary Śląskie",
  "Piotrków Trybunalski",
  "Pisz",
  "Piła",
  "Pleszew",
  "Polkowice",
  "Poznań",
  "Pruszcz Gdański",
  "Pruszków",
  "Przasnysz",
  "Przemyśl",
  "Pszczyna",
  "Puck",
  "Puławy",
  "Płock",
  "Płońsk",
  "Racibórz",
  "Radom",
  "Radomsko",
  "Rawa Mazowiecka",
  "Rawicz",
  "Ruda Śląska",
  "Rumia",
  "Rybnik",
  "Rzeszów",
  "Sandomierz",
  "Sanok",
  "Siedlce",
  "Siemianowice Śląskie",
  "Sieradz",
  "Sierpc",
  "Skierniewice",
  "Skoczów",
  "Sochaczew",
  "Sokołów Podlaski",
  "Sokółka",
  "Solec Kujawski",
  "Sosnowiec",
  "Stalowa Wola",
  "Starachowice",
  "Stargard",
  "Starogard Gdański",
  "Stojadła",
  "Strzegom",
  "Strzelce Opolskie",
  "Suwałki",
  "Swarzędz",
  "Szamotuły",
  "Szczawno Zdrój",
  "Szczecin",
  "Szczecinek",
  "Szczytno",
  "Słupsk",
  "Tarnobrzeg",
  "Tarnowo Podgórne",
  "Tarnowskie Góry",
  "Tarnów",
  "Tczew",
  "Tomaszów Lubelski",
  "Tomaszów Mazowiecki",
  "Toruń",
  "Trzcianka",
  "Tychy",
  "Wadowice",
  "Warszawa",
  "Warszawa Białołęka",
  "Warszawa Mokotów",
  "Warszawa Ochota",
  "Warszawa Praga",
  "Warszawa Wola/Żoliborz",
  "Warszawa Śródmieście",
  "Wałbrzych",
  "Wejherowo",
  "Wieluń",
  "Wodzisław Śląski",
  "Wołomin",
  "Wrocław",
  "Września",
  "Wyszków",
  "Włocławek",
  "Zabrze",
  "Zakopane",
  "Zambrów",
  "Zamość",
  "Zawiercie",
  "Zduńska Wola",
  "Zgierz",
  "Zgorzelec",
  "Zielona Góra",
  "Łomża",
  "Łuków",
  "Łódź",
  "Łęczna",
  "Śrem",
  "Środa Wielkopolska",
  "Świdnica",
  "Świdnik",
  "Świdwin",
  "Świebodzin",
  "Świecie",
  "Świnoujście",
  "Świętochłowice",
  "Żagań",
  "Żary",
  "Żory",
  "Żyrardów",
  "Żywiec",
];

export const post = (path: string, data?: object, base = API_URL) =>
  fetch(`${base}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  });

const TYPE = ["repeatable", "delayed"] as const;
const DELAY = [5, 10, 15, 30] as const;

const scrap = async (item: object, text: string) =>
  (console.info([text], { item }), post("scrap", item, ""))
    .then((response) => response.json())
    .then((json) => post("parse", json));

export default function Process({ getDelayed }: { getDelayed: () => void }) {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [priority, setPriority] = useState<boolean>(() => false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<(typeof TYPE)[number]>(() => TYPE[1]);
  const [delay, setDelay] = useState<(typeof DELAY)[number]>(() => DELAY[0]);
  const [match, setMatch] = useState(() => ({
    blocked: false,
    type: "",
    query: "",
  }));
  const [filters, setFilters] = useState(() => match);

  const filters$ = useMemo(() => new Subject<typeof filters>(), []);

  useEffect(() => {
    const subscription = filters$
      .pipe(
        map(({ query, ...match }) =>
          JSON.stringify({
            ...match,
            query: query.toLowerCase().trim(),
          }),
        ),
        distinctUntilChanged(),
        debounceTime(400),
      )
      .subscribe((filters) =>
        setFilters((queries) => ({ ...queries, ...JSON.parse(filters) })),
      );
    return () => subscription.unsubscribe();
  }, [filters$]);

  useEffect(() => {
    filters$.next(match);
  }, [match]);

  const [records, setRecords] = useState(() =>
    [
      {
        data: {
          url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
        },
        opts: {
          repeat: { cron: "0 15 * * *" },
        },
      },
      // {
      //   data: {
      //     url: "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",
      //     body: {
      //       $match: {
      //         transactionalPrice: {
      //           $min: 0,
      //           $max: 1790000,
      //         },
      //       },
      //       $skip: 0,
      //       $limit: 100,
      //     },
      //   },
      //   opts: {
      //     repeat: { cron: "30 11,19 * * *" },
      //   },
      // },
      {
        blocked: true,
        data: {
          url: "https://finder.porsche.com/pl/pl-PL/search?model=macan&model-generation=95b-iii",
        },
        opts: {
          repeat: { cron: "5 12 1 * *" },
        },
      },
      {
        data: {
          url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
        },
        opts: {
          repeat: { cron: "15 8 * * *" },
        },
      },
      {
        blocked: true,
        data: {
          url: "https://www.x-kom.pl/promocje",
        },
        opts: {
          repeat: { cron: "1 11,20 * * *" },
        },
      },
      {
        data: {
          url: "https://www.al.to/promocje",
        },
        opts: {
          repeat: { cron: "1 12,19 * * *" },
        },
      },
      {
        blocked: true,
        data: {
          url: "https://www.x-kom.pl/goracy_strzal",
        },
        opts: {
          // removeOnComplete: 2,
          repeat: { cron: "15 10,22 * * *" },
        },
      },
      {
        data: {
          url: "https://www.al.to/goracy_strzal",
        },
        opts: {
          repeat: { cron: "5 9,21 * * *" },
        },
      },
      {
        data: {
          url: "https://ursynow.leclerc.pl/",
        },
        opts: {
          repeat: { cron: "0 10,20 * * *" },
        },
      },
      {
        data: {
          url: "https://www.xbox.com/pl-PL/xbox-game-pass",
        },
        opts: {
          repeat: { cron: "30 13 * * *" },
        },
      },
    ]
      .concat(
        [
          ["5_G30", "5_G31", "M5_F90"],
          ["JCW_F56", "JCW_F57", "X3_G01", "X3M_F97"],
        ].map((value, i) => ({
          data: {
            url: `https://rvm-prod.aws.bmw.cloud/similarity-search/v2/search?countries=PL&consumer=stockLocator_PL&maxResults=${
              (i + 1) * 6
            }&startIndex=0`,
            body: {
              searchContext: [
                {
                  // usageState: {
                  //   value: ["NEW", "DEALER_YOUNG_USED"],
                  // },
                  // vehicleSalesProcessState: {
                  //   type: {
                  //     value: ["AVAILABLE", "RESERVED_MANUAL"],
                  //   },
                  // },
                  // brands: {
                  //   value: ["MINI"],
                  // },
                  productTypes: {
                    value: ["CAR"],
                  },
                  salesDestinations: [
                    {
                      name: "ONLINE",
                      onlineStatus: true,
                    },
                  ],
                  // validities: [
                  //   {
                  //     filters: [
                  //       "DEGREE_OF_ELECTRIFICATION_BASED_FUEL_TYPE",
                  //       "POWER_KW_BASED_ON_DEGREE_OF_ELECTRIFICATION",
                  //       "TRANSMISSION",
                  //       "EMISSION_DATA_BASED_ON_DEGREE_OF_ELECTRIFICATION",
                  //       "UCP_PRICE_ALL_OPTIONS_PRICED",
                  //     ],
                  //     requireAll: true,
                  //     validity: "VALID",
                  //   },
                  // ],
                  // buNos: [
                  //   "32940",
                  //   "27023",
                  //   "44852",
                  //   "35466",
                  //   "51057",
                  //   "35941",
                  //   "28966",
                  //   "33160",
                  //   "49584",
                  //   "35140",
                  //   "29029",
                  //   "44845",
                  //   "28965",
                  //   "28597",
                  //   "42099",
                  //   "06030",
                  //   "36891",
                  //   "32059",
                  //   "51448",
                  //   "34238",
                  //   "41094",
                  //   "50457",
                  // ],
                  // model: { marketingModelRange: { value: ["MINI_F56"] } },
                  model: {
                    marketingModelRange: {
                      value,
                    },
                  },
                },
              ],
              resultsContext: {
                // excludes: ["EQUIPMENT_PRICES"],
                // sort: [
                //   {
                //     by: "PRICE",
                //     order: "ASC",
                //   },
                // ],
                sort: [
                  {
                    by: "PRODUCTION_DATE",
                    order: "DESC",
                  },
                ],
              },
            },
          },
          opts: {
            repeat: { cron: `${i} 12 * * *` },
          },
        })),
      )
      .concat(
        [
          "hale-magazyny/wynajem/mazowieckie",
          // "hale-magazyny/wynajem/stare-babice",
          // "hale-magazyny/wynajem/zielonki-parcela",
          "mieszkania/wynajem/warszawa/?search%5Bdistrict_id%5D=373&search%5Bfilter_enum_builttype%5D%5B0%5D=blok&search%5Bfilter_enum_rooms%5D%5B0%5D=one",
          "mieszkania/wynajem/warszawa/?search%5Bdistrict_id%5D=353&search%5Bfilter_enum_builttype%5D%5B0%5D=blok&search%5Bfilter_float_m:from%5D=70&search%5Bfilter_enum_rooms%5D%5B0%5D=three",
        ]
          .map((cat) => `https://www.olx.pl/nieruchomosci/${cat}/`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 9,18 * * *` },
            },
          })),
      )
      .concat(
        [
          // "backpacks/laptop-backpacks",
          // "bike-rack",
          // "cargo-carrier/car-top-carrier",
          // "roof-rack/car-roof-racks",
        ]
          .map((cat) => `https://www.thule.com/pl-pl/${cat}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 21 * * *` },
            },
          })),
      )
      .concat(
        [
          "dzialki-grunty/budowlana/dawidy-bankowe",
          "dzialki-grunty/budowlana/jozefoslaw",
          "dzialki-grunty/budowlana/komorow-34074",
          "dzialki-grunty/budowlana/michalowice-34075",
          "dzialki-grunty/budowlana/nowa-wies-34077",
          "dzialki-grunty/budowlana/otrebusy",
          "dzialki-grunty/budowlana/pecice",
          "dzialki-grunty/budowlana/podkowa-lesna",
          "dzialki-grunty/budowlana/warszawa/powsin",
          "dzialki-grunty/budowlana/warszawa/ursynow",
        ]
          .map((cat) => `https://gratka.pl/nieruchomosci/${cat}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 8,16 * * *` },
            },
          })),
      )
      .concat(
        [
          "granica_45581",
          "kanie_134919",
          "komorow_117329",
          "konstancin-jeziorna",
          "michalowice_101993",
          "nowa-wies_139387",
          "otrebusy",
          "pecice",
          "podkowa-lesna",
          "stare-babice",
          "warszawa",
          "zalesie-gorne",
        ]
          .map(
            (cat) =>
              `https://www.olx.pl/d/nieruchomosci/dzialki/sprzedaz/${cat}/`,
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 9,17 * * *` },
            },
          })),
      )
      .concat(
        [
          "dom/komorow_5600",
          "dom/michalowice_62659",
          "dom/warszawa",
          "dzialka/komorow_5600",
          "dzialka/michalowice_62659",
          "dzialka/warszawa",
          "dzialka/zalesie-gorne",
        ]
          .map(
            (cat) =>
              `https://www.otodom.pl/pl/oferty/sprzedaz/${cat}?limit=72&page=1`,
          )
          .concat(
            [
              "dom/mazowieckie/piaseczynski/konstancin--jeziorna",
              "dzialka/lodzkie/belchatowski/kleszczow",
              "dzialka/mazowieckie/grodziski/milanowek/milanowek",
              "dzialka/mazowieckie/otwocki/jozefow/jozefow",
              "dzialka/mazowieckie/piaseczynski/konstancin--jeziorna",
              "dzialka/mazowieckie/pruszkowski/michalowice",
              "dzialka/mazowieckie/pruszkowski/raszyn",
              "dzialka/mazowieckie/warszawa/warszawa/warszawa/bemowo/boernerowo",
              "dzialka/mazowieckie/warszawa/warszawa/warszawa/ursus",
              "dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/anin",
              "dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/miedzeszyn",
              "dzialka/mazowieckie/warszawa/warszawa/warszawa/wawer/miedzylesie",
              "dzialka/mazowieckie/warszawski-zachodni/izabelin",
              "dzialka/mazowieckie/warszawski-zachodni/stare-babice",
            ].map(
              (cat) =>
                `https://www.otodom.pl/pl/wyniki/sprzedaz/${cat}?limit=72&page=1`,
            ),
          )
          .map((url, i) => ({
            blocked: true,
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 30} 10,18 * * *` },
            },
          })),
      )
      .concat(
        [
          "bmw/x3?search%5Bfilter_enum_generation%5D=gen-g01-2017",
          "honda/accord/seg-combi?search%5Bfilter_enum_generation%5D=gen-viii-2008",
          // "honda/jazz?search%5Bfilter_enum_generation%5D=gen-ii-2002-2008-jazz",
          "mini/cooper-s--john-cooper-works",
          "porsche/macan",
        ]
          .map((cat) => `https://www.otomoto.pl/osobowe/${cat}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 30} 9 * * *` },
            },
          })),
      )
      .concat(
        ["nowe-domy-mazowieckie", "nowe-domy-warszawa"]
          .map((cat) => `https://rynekpierwotny.pl/s/${cat}/`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 10 * * *` },
            },
          })),
      )
      .concat(
        [
          2, 4,
          // 5, 6,
          8,
          // 10, 30,
          33, 34, 35, 36, 37, 43, 44, 73, 74, 75, 77, 79, 80, 82, 84, 91, 103,
          104, 105, 106, 107, 112, 113, 114, 117, 119, 121, 122, 123, 124, 126,
          127, 128, 129, 130,
          // 131,
          132,
        ]
          .map(
            (fund) =>
              `https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/${fund}/values/?format=json&division=daily`,
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 14 * * *` },
            },
          })),
      )
      .concat(
        chunk(
          [
            "9NKX70BBCDRN",
            "9Z1W36CRQ9DF",
            "B4X7PC56X1VV",
            "9MTLKM2DJMZ2",
            "C08JXNK0VG5L",
            "9N9J38LPVSM3",
            "9P6SRW1HVW9K",
            "BVH2R2SBWL51",
            "9PNJXVCVWD4K",
            "9MZ0SR207MG8",
            "9P4SH7HLMLFS",
            "9N1CS194W1Q6",
            "9P1HX37NMJLT",
            "BRZZLBF5T245",
            "9P513P4MWC71",
            "C2MBDNDS3H5W",
            "BWVBNCMF22ZK",
            "9N6J02VPG635",
            "BS5RXLL3WQ2J",
            "C2HQVXVVLMKG",
            "BVJLKDG2TX8H",
            "C4VKLMG1HLZW",
            "9N04KQK2LBZL",
            "9NMBJQ0265ZK",
            "BSMZH25V6V46",
            "9N9QFGPBH418",
            "9NS86BQ33SPX",
            "9NXPBSMHPLTV",
            "9N8VG0B7TDZ0",
            "9PH3RR8MVFJL",
            "9NM0CRXJ389D",
            "BNNMLWZRNQF6",
            "9P778MQ2JPKC",
            "9NH5HN11FG4M",
            "C348248BJZCQ",
            "9PGPQK0XTHRZ",
            "9PG5Q9HGZXQ2",
            "9MTJ74MKQM46",
            "9NHXSG62QD2L",
            "9NC7XRNRMNFH",
            "9NRX3HRMZQ7Z",
            "9NFM39PSFXJD",
            "9NDDMHZRZ0R6",
            "9NP5S7RDH5QB",
            "9NNF99GPP4XW",
            "9PMQDM08SNK9",
          ],
          5,
        )
          .map((ids) => {
            const mscv = "DGU1mcuYo0WMMp+F.1";
            return `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${ids.join(
              ",",
            )}&market=PL&languages=pl-pl&MS-CV=${mscv}`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 13 * * *` },
            },
          })),
      )
      .concat(
        [
          "g-2/c/159-laptopy-notebooki-ultrabooki.html?producent=357-apple",
          // "g-2/c/1329-notebooki-laptopy-13-3.html?producent=357-apple",
          // "g-2/c/1331-notebooki-laptopy-15-3.html?producent=357-apple",
          "g-2/c/1439-plecaki-na-laptopy.html?producent=1150-thule",
          "g-2/c/1663-tablety.html?producent=357-apple",
          "g-2/c/1709-nettopy-mini-pc.html?producent=357-apple",
          "g-2/c/1709-nettopy-mini-pc.html?producent=1832-raspberry-pi",
          "g-2/c/2980-notebooki-laptopy-14-0.html?producent=357-apple",
          "g-4/c/310-karty-pamieci-sd.html?producent=303-sandisk",
          "g-4/c/315-pendrive-pamieci-usb.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk",
          // "g-4/c/315-pendrive-pamieci-usb.html?producent=59-kingston",
          // "g-4/c/315-pendrive-pamieci-usb.html?producent=303-sandisk",
          "g-4/c/979-karty-pamieci-microsd.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk",
          // "g-4/c/979-karty-pamieci-microsd.html?producent=303-sandisk",
          "g-4/c/1590-smartfony-i-telefony.html?producent=357-apple",
          "g-4/c/1836-etui-i-obudowy-na-smartfony.html?producent=357-apple",
          "g-4/c/1837-ladowarki-do-smartfonow.html?producent=357-apple&producent=1839-green-cell",
          "g-4/c/2287-akcesoria-do-tabletow.html?producent=357-apple",
          "g-4/c/2748-sluchawki-true-wireless.html?producent=357-apple",
          "g-4/c/3008-smartwatche-lte.html?producent=357-apple",
          "g-5/c/158-zasilacze-do-komputera.html?producent=368-nzxt",
          "g-5/c/346-karty-graficzne-nvidia.html?producent=27-asus&producent=57-gigabyte&producent=1126-inno3d",
          // "g-5/c/346-karty-graficzne-nvidia.html?producent=27-asus",
          // "g-5/c/346-karty-graficzne-nvidia.html?producent=57-gigabyte",
          // "g-5/c/346-karty-graficzne-nvidia.html?producent=1126-inno3d",
          "g-5/c/388-obudowy-komputerowe.html?producent=368-nzxt",
          "g-5/c/439-dyski-zewnetrzne-hdd.html?producent=26-wd&f1730-format=18808-2.5",
          "g-5/c/1779-dyski-ssd.html?producent=29-samsung&producent=59-kingston&producent=506-crucial",
          // "g-5/c/1779-dyski-ssd.html?producent=29-samsung",
          // "g-5/c/1779-dyski-ssd.html?producent=59-kingston",
          // "g-5/c/1779-dyski-ssd.html?producent=506-crucial",
          "g-5/c/2599-chlodzenia-komputerowe.html?producent=368-nzxt",
          "g-5/c/2997-procesory-amd-ryzen-5.html?producent=3-amd",
          "g-5/c/3402-pamieci-ram-ddr5.html?producent=2484-kingston-fury",
          "g-5/c/3618-plyty-glowne-socket-am5.html",
          "g-6/c/15-monitory.html?producent=357-apple",
          "g-6/c/34-zasilacze-awaryjne-ups.html?producent=154-apc",
          "g-6/c/34-zasilacze-awaryjne-ups.html?producent=1308-eaton",
          "g-6/c/421-urzadzenia-sieciowe.html?producent=628-ubiquiti&hide_unavailable=1",
          "g-6/c/425-switche.html?producent=276-tp-link&f3303-typ-obudowy=45868-do-szaf-rack&hide_unavailable=1",
          "g-6/c/456-access-pointy.html?producent=276-tp-link&hide_unavailable=1",
          "g-6/c/1215-sluchawki.html?producent=357-apple&producent=1214-marshall&producent=2334-shure",
          "g-6/c/1295-monitory-led-32-i-wieksze.html?producent=396-dell",
          "g-6/c/2280-szafy-rack.html?producent=1278-lanberg",
          "g-6/c/2326-kamery-ip.html?producent=276-tp-link&producent=2287-hikvision",
          "g-6/c/2506-glosniki-przenosne.html?producent=374-jbl&f1872-moc-glosnikow-rms=71075-10-49-w",
          "g-6/c/3095-statywy-do-mikrofonow.html?producent=818-elgato&producent=2025-rode&producent=2438-blue-microphones",
          "g-7/c/171-joysticki.html?producent=896-thrustmaster",
          "g-8/c/1425-odtwarzacze-multimedialne.html?producent=357-apple",
          "g-8/c/2672-etui-na-sluchawki.html?f5654-kompatybilnosc=151468-apple-airpods",
          "g-12/c/2466-baterie-i-akumulatorki.html?f2834-typ-ogniwa=41678-aa-r6&f2834-typ-ogniwa=41679-aaa-r03",
          "g-12/c/3472-stacje-zasilania.html?producent=2599-ecoflow",
          "g-64/c/2294-drony.html?producent=1009-dji",
          "g-64/c/2326-kamery-ip.html?producent=2287-hikvision",
          "g-64/c/2326-kamery-ip.html?producent=276-tp-link&producent=628-ubiquiti",
          "g-64/c/2582-gimbale.html?producent=1009-dji&producent=1155-zhiyun",
          // "g-64/c/2582-gimbale.html?producent=1009-dji",
          // "g-64/c/2582-gimbale.html?producent=1155-zhiyun",
          "g-64/c/3037-rejestratory-ip.html?producent=276-tp-link&producent=628-ubiquiti&producent=2287-hikvision",
          "g-64/c/3086-dyski-twarde-do-monitoringu.html",
        ]
          .map((path) => `https://www.x-kom.pl/${path}`)
          .map((url, i) => ({
            blocked: true,
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 7,14 * * *` },
            },
          })),
      )
      .concat(
        [
          "g-19/c/1786-odkurzacze.html?producent=539-bosch&producent=545-dyson&producent=546-karcher&producent=555-tefal&f170-typ-odkurzacza=25377-pionowy",
          "g-19/c/1796-maszynki-do-mielenia.html?producent=539-bosch",
          "g-19/c/1798-ekspresy-do-kawy.html?producent=464-siemens&producent=1977-wmf",
          "g-19/c/1800-suszarko-lokowki.html?producent=567-babyliss&producent=569-remington",
          "g-19/c/1803-roboty-kuchenne.html?producent=539-bosch&producent=1977-wmf",
          "g-19/c/1820-wentylatory.html?producent=1023-xiaomi",
          "g-19/c/2354-agd-do-kuchni.html?producent=1977-wmf",
          "g-19/c/2362-akcesoria-do-kuchni.html?producent=3035-girmi",
          "g-19/c/2362-akcesoria-do-kuchni.html?producent=1977-wmf",
          "g-19/c/2471-akcesoria-roboty-kuchenne.html?producent=539-bosch&producent=1977-wmf",
          "g-19/c/2880-generatory-pary.html",
          "g-19/c/3519-parownice-do-sprzatania.html?producent=546-karcher",
          "g-19/c/3664-akcesoria-do-grilla.html?producent=2375-weber",
          "g-25/c/2953-dzwonki-do-drzwi.html?producent=628-ubiquiti",
          "g-25/c/3038-inteligentne-kamery.html?producent=1023-xiaomi",
          "g-27/c/1950-zamrazarki.html?producent=464-siemens&producent=539-bosch",
          "g-63/c/2073-klocki-lego.html?producent=629-lego&f833-seria=8890-lego-technic&f833-seria=161664-lego-dots",
          "g-65/c/3047-grille-ogrodowe.html?producent=2375-weber",
          "g-65/c/3059-narzedzia.html?producent=2354-gardena",
          "g-65/c/3349-pompy-i-akcesoria.html",
          "g-70/c/3496-okapy-kuchenne.html?producent=464-siemens",
          "g-70/c/3503-zmywarki-do-zabudowy-60-cm.html?producent=464-siemens",
        ]
          .map((path) => `https://www.al.to/${path}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 8,15 * * *` },
            },
          })),
      )
      .concat(
        [
          "category=accesspoint&__=ubiquiti",
          "category=akcesoria-do-ipada-i-tabletow-multimedialnych&__=Apple",
          "category=archiwizacja-danych1&__=WD",
          "category=czysciki-parowe&__=Karcher",
          "category=dyski-wewnetrzne-ssd&__=Kingston",
          "category=ekspresy-cisnieniowe&__=Siemens,jura",
          "category=etui-do-telefonow&__=Apple",
          "category=fotele-i-stojaki-do-kierownicy&__=Asus,sparco",
          "category=gilotyny-i-trymery",
          "category=glosniki-przenosne&__=BowersWilkins,Sonos,Yamaha,jbl,marshall",
          // "category=glosniki-przenosne&__=jbl",
          // "category=glosniki-przenosne&__=marshall",
          "category=kamery-ip-do-monitoringu&__=HIKVISION,ubiquiti",
          "category=karty-pamieci&__=SanDisk&_i=2,4&_j=6,8",
          "category=kuchenki-mikrofalowe-do-zabudowy&__=Siemens",
          "category=ladowarki-ipod-iphone&__=Apple",
          "category=laptopy-i-netbooki&__=Apple",
          "category=lodowki-do-zabudowy&__=Siemens",
          "category=lokowko-suszarki&__=Babyliss,Dyson,Remington",
          "category=miksery-kielichowe&__=Bosch,KitchenAid,Tefal,wmf",
          // "category=obiektywy&__=Canon",
          // "category=obiektywy&__=Sigma&_h=32",
          "category=obiektywy&_h=2",
          "category=odkurzacze-pionowe&__=Bosch,Dyson,Karcher,Tefal",
          "category=okapy&__=Bosch,Franke,Siemens,elica&_ay=10,5",
          "category=pendrive-pamieci-usb&__=Kingston,SanDisk&_h=2,3",
          "category=piekarniki-do-zabudowy&__=Siemens",
          "category=plyty-do-zabudowy&__=Siemens",
          "category=pralki&__=Siemens",
          "category=roboty-wieloczynnosciowe&__=Bosch,wmf&_az=4",
          "category=roboty-wieloczynnosciowe&__=KitchenAid&_aw=1",
          "category=sluchawki&__=Apple,marshall",
          "category=smartwatch&__=Apple",
          "category=stabilizatory-do-kamer-i-aparatow",
          "category=suszarki&__=Siemens",
          "category=switche-przelaczniki-sieciowe&__=ubiquiti",
          "category=telefony-komorkowe&__=Apple",
          "category=telewizory-led-lcd-plazmowe&__=Panasonic",
          "category=wentylatory-i-klimatory&__=xiaomi",
          "category=wyposazenie-do-ekspresow&__=Siemens",
          "category=wyposazenie-do-robotow-kuchennych&__=Bosch",
          "category=zamrazarki&__=Bosch",
          "category=zelazka-systemowe&__=Philips",
          "category=zmywarki-do-zabudowy&__=Siemens",
        ]
          .map(
            (path) =>
              `https://www.euro.com.pl/rest/api/products/search?startFrom=0&numberOfItems=17&${path}&developSearchMode=false&orderBy=POPULARITY&direction=ASC`,
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 9,16 * * *` },
            },
          })),
      )
      .concat(
        ["smartfony-i-zegarki/smartfony/warianty-produktu_apple-iphone-13"]
          .map((path) => `https://www.mediaexpert.pl/${path}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 7,17 * * *` },
            },
          })),
      )
      .concat(
        [
          "CategoryId=8305&BrandIds=6254", // Dzbanki i filtry / RUBIN
          "CategoryId=8324&BrandIds=10531", // Pranie i płukanie / PERWOLL
          "CategoryId=8339&BrandIds=4081", // Środki do zmywarki / FINISH
          "CategoryId=8343&BrandIds=10624&BrandIds=10757", // Akcesoria Do Sprzątania / 3M SCOTCH-BRITE / VILEDA
          "CategoryId=8344", // Worki na śmieci
          "CategoryId=8380&BrandIds=10504", // Karma sucha dla kota / PURINA ONE
          "CategoryId=8379&BrandIds=10251", // Karma mokra dla kota / PURINA GOURMET
          "CategoryId=8382&BrandIds=10193&BrandIds=11576", // Akcesoria dla kota / CATSI / ELOY
          "CategoryId=8424&BrandIds=5717", // Energetyki i izotoniki / OSHEE
          "CategoryId=8576&BrandIds=7261", // Higiena / YOPE
          "CategoryId=8589&BrandIds=5259", // Pasty do zębów / MERIDOL
          "CategoryId=8603&BrandIds=4309&Tags=393_2702", // Maszynki i wkłady / GILLETTE / wkłady do maszynek
          "CategoryId=8613&BrandIds=2353", // Papiery toaletowe / ALOUETTE
          "CategoryId=8615&BrandIds=2353", // Chusteczki higieniczne / ALOUETTE
          "CategoryId=8657&BrandIds=2362", // Szampony / ALTERRA
          "CategoryId=8969&BrandIds=3495", // Środki do wc / DOMESTOS
          "CategoryId=9195&BrandIds=5482&BrandIds=5500&BrandIds=2250", // Antyperspiranty / ADIDAS / NIKE / NIVEA
        ]
          .map(
            (path) =>
              `https://www.rossmann.pl/szukaj?${path}&Page=1&PageSize=96`,
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 7 * * *` },
            },
          })),
      )
      .concat(
        [
          // "kids/shoes/hiking-shoes",
          // "promotions/outlet/shoes",
          // "promotions/sale/skiing/boots/shopby/medium_16458",
          // "sports/alpine-skiing/boots/shopby/on_piste_74982",
        ]
          .map((path) => `https://www.salomon.com/pl-pl/shop-emea/${path}.html`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 8 * * *` },
            },
          })),
      )
      .concat(
        chunk(
          [
            // "592143",
            // "681134",
            // "681136",
            // "681152",
            // "730554",
            // "730597",
            // "1070889",
          ],
          1,
        )
          .map((ids) => `https://www.x-kom.pl/szukaj?q=${ids.join("+")}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 16 * * *` },
            },
          })),
      )
      .concat(
        chunk(
          [
            // "1022668"
          ],
          1,
        )
          .map((ids) => `https://www.al.to/szukaj?q=${ids.join("+")}`)
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 17 * * *` },
            },
          })),
      )
      .concat(
        [
          // "aparthotelczarnagora",
          // "aparthotelgiewont1",
          // "belwederhotel",
          // "bluemountainresort",
          // "czarnygron",
          // "grandhotelstamary",
          // "grenohotelspa",
          // "greenmountainhotel",
          // "hotelaquarion",
          // "hotelbaniathermalski",
          // "hotelbukovina",
          // "hotelcrocus",
          // "hotelczarnypotokresortspakrynica",
          // "hotelharnas",
          // "hotelklimczok",
          // "hotelkrysztal4",
          // "hoteloliviamedicalspa",
          // "hotelskalny",
          // "hotelpegaz",
          // "hotelpiotrspawellness",
          // "hotelperlapoludnia1",
          // "hotelprezydentmedicalspawellness",
          // "hotelprzedwiosnie1",
          // "hotelsasanka",
          // "hotelspadrirenaeriskrynicazdroj",
          // "hotelspadrirenaerispolanicazdrj",
          // "hotelspadrirenaeriswzgorzadylewskie",
          // "hotelstok",
          // "hoteltoporow",
          // "hotelwierchomla",
          // "hotelzbjnicwka",
          // "hotelzywieckimedicalspasport",
          // "interferieaquaparksporthotelmalachit",
          // "interferiesporthotelbornit",
          // "kompleksszkoleniowowypoczynkowyskalnyspa",
          // "lemonresort",
          // "mazowszemedispa1",
          // "modrzewieparkhotel1",
          // "nosalowydworresort1",
          // "odysseyclubhotel",
          // "osadasniezka",
          // "willabelweder",
          // "zamekksiezagora",
        ]
          .map((name) => [
            // `https://booking.profitroom.com/pl/${name}/home?currency=PLN`,
            // `https://booking.profitroom.com/pl/${name}/pricelist/offers/?check-in=2023-01-16&check-out=2023-01-22&currency=PLN&r1_adults=2&r1_child5-12=2`,
            `https://booking.profitroom.com/api/${name}/details`,
            // `https://booking.profitroom.com/api/${name}/availability?checkIn=2023-02-13&checkOut=2023-02-19&occupancy%5B0%5D%5Badults%5D=2&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5BminAge%5D=5&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5BmaxAge%5D=12&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5Bcount%5D=2`,
          ])
          .flat()
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 18 * * *` },
            },
          })),
      )
      .concat(
        [
          // [52.2329, 21.2252],
          // [52.2329, 21.2252, "transit"],
          // [52.1722, 21.1723],
          // [52.1722, 21.1723, "transit"],
          // [52.202, 21.1559],
          // [52.202, 21.1559, "transit"],
          // [52.201, 21.1294],
          // [52.201, 21.1294, "transit"],
        ]
          // https://developers.google.com/maps/documentation/distance-matrix/distance-matrix#optional-parameters
          .map(
            ([lat, lng, travelmode = "driving"]) =>
              // `https://www.google.com/maps/dir/${lat},${lng}/52.2268,20.9921/data=!4m2!4m1!3e0`
              `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                [lat, lng].join(","),
              )}&destination=${encodeURIComponent(
                [52.2268, 20.9921].join(","),
              )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`,
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 19 * * *` },
            },
          })),
      )
      .concat(
        ["ab75c33d-3a26-4342-b36a-6e5fef0a3ac3"]
          .map(
            (id) =>
              `https://api.um.warszawa.pl/api/action/dbstore_get/?id=${encodeURIComponent(
                id,
              )}`,
          )
          .map((url, i) => ({
            blocked: true,
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 30} 22 * * *` },
            },
          })),
      )
      .concat(
        ["/status"].map((url, i) => ({
          data: {
            url,
          },
          opts: {
            repeat: { cron: `${i + 15} 9 * * *` },
          },
        })),
      ),
  );

  const entries = useMemo(
    () =>
      z
        .object({
          data: DataSchema,
          opts: OptsSchema.extend(
            priority
              ? {
                  priority: z.number().default(1),
                }
              : {},
          ).transform(
            ({ repeat, ...opts }) =>
              ({
                delayed: { ...opts, delay: seconds(delay) },
                repeatable: { ...opts, repeat },
              })[type],
          ),
        })
        .transform((item) => ({ ...item, id: item.data.url }))
        .array()
        .parse(
          records.filter(({ blocked = false }) => blocked === match.blocked),
        ),
    [type, delay, priority, records, match.blocked],
  );

  const list = useMemo(
    () =>
      entries.filter(
        (item) => filters.query === "" || item.data.url.includes(filters.query),
      ),
    [entries, filters],
  );

  const onSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((n) => n !== target.value)
          : selected.concat(target.value),
      ),
    [],
  );

  const onChangeDelay = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => setDelay(Number(target.value) as (typeof DELAY)[number]),
    [],
  );

  const typeId = useId();

  const onChangeType = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setType(target.value as (typeof TYPE)[number]),
    [],
  );

  const handleScrap = useCallback(
    (item: object, text = "scrap") =>
      (setLoading(true), scrap(item, text))
        .catch(console.error)
        .then(() => setLoading(false)),
    [],
  );

  const handleAvailability = useCallback(
    (id: string) =>
      SHOPS
        // .slice(0, 2)
        .reduce<Promise<unknown>>(
          (promise, areaName) =>
            promise
              .then(() =>
                fetch(`shops/${id}?areaName=${encodeURIComponent(areaName)}`),
              )
              .then((res) => res.json())
              .then((json) =>
                console.log(
                  { areaName },
                  json.filter(
                    ({ productAvailability }: any) =>
                      !["UNAVAILABLE"].includes(productAvailability),
                  ),
                ),
              )
              .then(
                () =>
                  new Promise((resolve) =>
                    setTimeout(resolve, seconds(10 * Math.random())),
                  ),
              ),
          Promise.resolve(),
        ),
    [],
  );

  const selectedIds = useMemo(
    () => list.map((item) => item.id).filter((id) => selected.includes(id)),
    [list, selected],
  );

  return (
    <Fieldset legend="process">
      {/* <pre>{JSON.stringify(delayed, null, 2)}</pre> */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={list.length > 0 && selectedIds.length === list.length}
            disabled={list.length === 0}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                ((listIds) =>
                  setSelected((selected) =>
                    selected
                      .filter((id) => !listIds.includes(id))
                      .concat(target.checked ? listIds : []),
                  ))(list.map((item) => item.id)),
              [list],
            )}
          />
        </label>
        <span>{`${selected.length} / ${list.length}`}</span>{" "}
        <label>
          <span>query</span>
          <input
            type="search"
            value={match.query}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setMatch((match) => ({
                  ...match,
                  query: target.value,
                })),
              [],
            )}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={match.blocked}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setMatch((match) => ({
                  ...match,
                  blocked: target.checked,
                })),
              [],
            )}
          />
          <span>blocked</span>
        </label>
        <span>
          {TYPE.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name={typeId}
                value={value}
                onChange={onChangeType}
                checked={type === value}
              />
              <span>{value}</span>
            </label>
          ))}
          {type === "delayed" && (
            <span>
              {" "}
              <select value={delay} onChange={onChangeDelay}>
                {DELAY.map((value) => (
                  <option key={value} value={value}>
                    {`${value} s`}
                  </option>
                ))}
              </select>
            </span>
          )}
        </span>
        <label>
          <input
            type="checkbox"
            checked={priority}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) => setPriority(target.checked),
              [],
            )}
          />
          <span>priority</span>
        </label>
        <button
          disabled={loading}
          onClick={useCallback(
            () =>
              (setLoading(true),
              list
                .filter((item) => selected.includes(item.id))
                .reduce<Promise<unknown>>(
                  (promise, item) => promise.then(() => post("process", item)),
                  Promise.resolve(),
                ))
                .then(() => (setLoading(false), setSelected([])))
                .then(getDelayed),
            [list, selected],
          )}
        >
          {type === "delayed" ? "process" : "add"}
        </button>
        <button
          onClick={useCallback(() => post("cleanup").then(getDelayed), [])}
        >
          cleanup
        </button>
        <button
          onClick={() =>
            ((plu) => plu && handleAvailability(plu))(prompt("plu:", "1225761"))
          }
        >
          shops
        </button>
        <button
          onClick={useCallback(() => {
            const url = prompt("Url:", "https://");

            if (url) {
              setRecords((records) =>
                [
                  {
                    data: {
                      url,
                    },
                    opts: {
                      repeat: { cron: `0 19 * * *` },
                    },
                  },
                ].concat(records),
              );
              setSelected([url]);
            }
          }, [])}
        >
          append url
        </button>
        <button
          disabled={loading}
          onClick={useCallback(
            () =>
              (setLoading(true), list)
                .filter((item) => selected.includes(item.id))
                .reduce<Promise<unknown>>(
                  (promise, item, key, list) =>
                    promise
                      .then(() =>
                        scrap(item, `scrap ${key + 1}/${list.length}`),
                      )
                      .then(() =>
                        setSelected((selected) =>
                          selected.filter((id) => id !== item.id),
                        ),
                      )
                      .then(
                        () =>
                          key < list.length - 1 &&
                          new Promise((resolve) =>
                            setTimeout(resolve, seconds(10 * Math.random())),
                          ),
                      ),
                  Promise.resolve(),
                )
                .catch(console.error)
                .then(() => setLoading(false)),
            [list, selected],
          )}
        >
          scrap
        </button>
        {loading && <Spinner />}
      </div>
      {list.map((item: any) => (
        <div key={item.id}>
          <div>
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              <input
                type="checkbox"
                value={item.id}
                checked={selected.includes(item.id)}
                onChange={onSelect}
              />
              <Link
                href={item.id}
                style={{
                  flex: 1,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "auto",
                }}
              >
                {item.id}
              </Link>
              {item.opts.repeat?.cron ? (
                <pre
                  style={{
                    fontSize: "xx-small",
                    margin: 4,
                  }}
                >
                  {item.opts.repeat.cron}
                </pre>
              ) : (
                <button disabled={loading} onClick={() => handleScrap(item)}>
                  scrap
                </button>
              )}
            </label>
          </div>
          {selected.includes(item.id) && (
            <pre>{JSON.stringify(item, null, 2)}</pre>
          )}
        </div>
      ))}
    </Fieldset>
  );
}
