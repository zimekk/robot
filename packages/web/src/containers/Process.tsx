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

export const API_URL = process.env.API_URL || "";

export const post = (path: string, data?: object) =>
  fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  });

const TYPE = ["repeatable", "delayed"] as const;
const DELAY = [5, 10, 15, 30] as const;

export default function Process({ getDelayed }: { getDelayed: () => void }) {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [priority, setPriority] = useState<boolean>(() => false);
  const [type, setType] = useState<(typeof TYPE)[number]>(() => TYPE[1]);
  const [delay, setDelay] = useState<(typeof DELAY)[number]>(() => DELAY[0]);
  const [match, setMatch] = useState(() => ({
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
          })
        ),
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((filters) =>
        setFilters((queries) => ({ ...queries, ...JSON.parse(filters) }))
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
        data: {
          url: "https://rvm-prod.aws.bmw.cloud/similarity-search/v2/search?countries=PL&consumer=stockLocator_PL&maxResults=12&startIndex=0",
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
                    value: ["JCW_F56", "JCW_F57", "X3_G01"],
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
          repeat: { cron: "0 12 * * *" },
        },
      },
      // {
      //   data: {
      //     url: "https://finder.porsche.com/pl/pl-PL/search?model=macan&model-generation=95b-iii",
      //   },
      //   opts: {
      //     repeat: { cron: "5 12 1 * *" },
      //   },
      // },
      {
        data: {
          url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
        },
        opts: {
          repeat: { cron: "15 8 * * *" },
        },
      },
      {
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
          }))
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
          }))
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
              `https://www.olx.pl/d/nieruchomosci/dzialki/sprzedaz/${cat}/`
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 9,17 * * *` },
            },
          }))
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
              `https://www.otodom.pl/pl/oferty/sprzedaz/${cat}?limit=72&page=1`
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 30} 10,18 * * *` },
            },
          }))
      )
      .concat(
        [
          "bmw/x3?search%5Bfilter_enum_generation%5D=gen-g01-2017",
          "honda/accord/seg-combi?search%5Bfilter_enum_generation%5D=gen-viii-2008",
          // "honda/jazz?search%5Bfilter_enum_generation%5D=gen-ii-2002-2008-jazz",
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
          }))
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
          }))
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
              `https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/${fund}/values/?format=json&division=daily`
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 14 * * *` },
            },
          }))
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
          5
        )
          .map((ids) => {
            const mscv = "DGU1mcuYo0WMMp+F.1";
            return `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${ids.join(
              ","
            )}&market=PL&languages=pl-pl&MS-CV=${mscv}`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 13 * * *` },
            },
          }))
      )
      .concat(
        [
          "g-2/c/159-laptopy-notebooki-ultrabooki.html?producent=357-apple",
          // "g-2/c/1329-notebooki-laptopy-13-3.html?producent=357-apple",
          // "g-2/c/1331-notebooki-laptopy-15-3.html?producent=357-apple",
          "g-2/c/1663-tablety.html?producent=357-apple",
          "g-2/c/1709-nettopy-mini-pc.html?producent=357-apple",
          "g-2/c/2980-notebooki-laptopy-14-0.html?producent=357-apple",
          "g-4/c/315-pendrive-pamieci-usb.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk",
          // "g-4/c/315-pendrive-pamieci-usb.html?producent=59-kingston",
          // "g-4/c/315-pendrive-pamieci-usb.html?producent=303-sandisk",
          "g-4/c/979-karty-pamieci-microsd.html?producent=29-samsung&producent=59-kingston&producent=303-sandisk",
          // "g-4/c/979-karty-pamieci-microsd.html?producent=303-sandisk",
          "g-4/c/1590-smartfony-i-telefony.html?producent=357-apple",
          "g-4/c/1836-etui-i-obudowy-na-smartfony.html?producent=357-apple",
          "g-4/c/1837-ladowarki-do-smartfonow.html?producent=1839-green-cell",
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
          "g-6/c/1215-sluchawki.html?producent=357-apple&producent=1214-marshall&producent=2334-shure",
          "g-6/c/1295-monitory-led-32-i-wieksze.html?producent=396-dell",
          "g-6/c/2506-glosniki-przenosne.html?producent=374-jbl&f1872-moc-glosnikow-rms=71075-10-49-w",
          "g-7/c/171-joysticki.html?producent=896-thrustmaster",
          "g-8/c/1425-odtwarzacze-multimedialne.html?producent=357-apple",
          "g-64/c/2294-drony.html?producent=1009-dji",
          "g-64/c/2582-gimbale.html?producent=1009-dji&producent=1155-zhiyun",
          // "g-64/c/2582-gimbale.html?producent=1009-dji",
          // "g-64/c/2582-gimbale.html?producent=1155-zhiyun",
        ]
          .map((path) => {
            return `https://www.x-kom.pl/${path}`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 7,14 * * *` },
            },
          }))
      )
      .concat(
        [
          "g-19/c/1796-maszynki-do-mielenia.html?producent=539-bosch",
          "g-19/c/1798-ekspresy-do-kawy.html?producent=464-siemens",
          "g-19/c/2362-akcesoria-do-kuchni.html?producent=3035-girmi",
          "g-19/c/2362-akcesoria-do-kuchni.html?producent=1977-wmf",
          "g-19/c/2880-generatory-pary.html",
          "g-25/c/3038-inteligentne-kamery.html?producent=1023-xiaomi",
          "g-70/c/3503-zmywarki-do-zabudowy-60-cm.html?producent=464-siemens",
          "g-19/c/3519-parownice-do-sprzatania.html?producent=546-karcher",
        ]
          .map((path) => {
            return `https://www.al.to/${path}`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 8,15 * * *` },
            },
          }))
      )
      .concat(
        [
          "category=archiwizacja-danych1&__=WD",
          "category=czysciki-parowe&__=Karcher",
          "category=dyski-wewnetrzne-ssd&__=Kingston",
          "category=ekspresy-cisnieniowe&__=Siemens",
          "category=etui-do-telefonow&__=Apple",
          "category=fotele-i-stojaki-do-kierownicy&__=sparco",
          "category=glosniki-przenosne&__=BowersWilkins,Sonos,Yamaha,jbl,marshall",
          // "category=glosniki-przenosne&__=jbl",
          // "category=glosniki-przenosne&__=marshall",
          "category=karty-pamieci&__=SanDisk&_i=3,4",
          "category=ladowarki-ipod-iphone&__=Apple",
          "category=laptopy-i-netbooki&__=Apple",
          "category=lodowki-do-zabudowy&__=Siemens",
          "category=obiektywy&__=Canon",
          "category=obiektywy&__=Sigma&_h=32",
          "category=pendrive-pamieci-usb",
          "category=piekarniki-do-zabudowy&__=Siemens",
          "category=plyty-do-zabudowy&__=Siemens",
          "category=pralki&__=Siemens",
          "category=roboty-wieloczynnosciowe&__=KitchenAid&_aw=1",
          "category=sluchawki&__=Apple,marshall",
          "category=smartwatch&__=Apple",
          "category=stabilizatory-do-kamer-i-aparatow",
          "category=suszarki&__=Siemens",
          "category=telefony-komorkowe&__=Apple",
          "category=telewizory-led-lcd-plazmowe&__=Panasonic",
          "category=zelazka-systemowe&__=Philips",
          "category=zmywarki-do-zabudowy&__=Siemens",
        ]
          .map((path) => {
            return `https://www.euro.com.pl/rest/api/products/search?startFrom=0&numberOfItems=17&${path}&developSearchMode=false&orderBy=POPULARITY&direction=ASC`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 9,16 * * *` },
            },
          }))
      )
      .concat(
        [
          "CategoryId=8305&BrandIds=6254", // Dzbanki i filtry / RUBIN
          "CategoryId=8339&BrandIds=4081", // Środki do zmywarki / FINISH
          "CategoryId=8380&BrandIds=10504", // Karma sucha dla kota / PURINA ONE
          "CategoryId=8344", // Worki na śmieci
          "CategoryId=8379&BrandIds=10251", // Karma mokra dla kota / PURINA GOURMET
          "CategoryId=8576&BrandIds=7261", // Higiena / YOPE
          "CategoryId=8589&BrandIds=5259", // Pasty do zębów / MERIDOL
          "CategoryId=8603&BrandIds=4309&Tags=393_2702", // Maszynki i wkłady / GILLETTE / wkłady do maszynek (14)
          "CategoryId=8613&BrandIds=2353", // Papiery toaletowe / ALOUETTE
          "CategoryId=8657&BrandIds=2362", // Szampony / ALTERRA
        ]
          .map((path) => {
            return `https://www.rossmann.pl/szukaj?${path}&Page=1&PageSize=24`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 7 * * *` },
            },
          }))
      )
      .concat(
        [
          // "kids/shoes/hiking-shoes",
          // "promotions/outlet/shoes",
          // "promotions/sale/skiing/boots/shopby/medium_16458",
          // "sports/alpine-skiing/boots/shopby/on_piste_74982",
        ]
          .map((path) => {
            return `https://www.salomon.com/pl-pl/shop-emea/${path}.html`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i + 1} 8 * * *` },
            },
          }))
      )
      .concat(
        chunk(
          [
            "592143",
            "681134",
            "681136",
            "681152",
            "730554",
            "730597",
            "1070889",
          ],
          1
        )
          .map((ids) => {
            return `https://www.x-kom.pl/szukaj?q=${ids.join("+")}`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 16 * * *` },
            },
          }))
      )
      .concat(
        chunk(["1022668"], 1)
          .map((ids) => {
            return `https://www.al.to/szukaj?q=${ids.join("+")}`;
          })
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 17 * * *` },
            },
          }))
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
          .map((name) => {
            return [
              // `https://booking.profitroom.com/pl/${name}/home?currency=PLN`,
              // `https://booking.profitroom.com/pl/${name}/pricelist/offers/?check-in=2023-01-16&check-out=2023-01-22&currency=PLN&r1_adults=2&r1_child5-12=2`,
              `https://booking.profitroom.com/api/${name}/details`,
              // `https://booking.profitroom.com/api/${name}/availability?checkIn=2023-02-13&checkOut=2023-02-19&occupancy%5B0%5D%5Badults%5D=2&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5BminAge%5D=5&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5BmaxAge%5D=12&occupancy%5B0%5D%5Bchildren%5D%5B0%5D%5Bcount%5D=2`,
            ];
          })
          .flat()
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 18 * * *` },
            },
          }))
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
                [lat, lng].join(",")
              )}&destination=${encodeURIComponent(
                [52.2268, 20.9921].join(",")
              )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`
          )
          .map((url, i) => ({
            data: {
              url,
            },
            opts: {
              repeat: { cron: `${i} 19 * * *` },
            },
          }))
      )
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
              : {}
          ).transform(
            ({ repeat, ...opts }) =>
              ({
                delayed: { ...opts, delay: seconds(delay) },
                repeatable: { ...opts, repeat },
              }[type])
          ),
        })
        .transform((item) => ({ ...item, id: item.data.url }))
        .array()
        .parse(records),
    [type, delay, priority, records]
  );

  const list = useMemo(
    () => (
      console.log(filters),
      entries.filter(
        (item) =>
          // (filters.type === "" || filters.type === item.type) &&
          filters.query === "" || item.data.url.includes(filters.query)
      )
    ),
    [entries, filters]
  );

  const onSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((n) => n !== target.value)
          : selected.concat(target.value)
      ),
    []
  );

  const onChangeDelay = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => setDelay(Number(target.value) as (typeof DELAY)[number]),
    []
  );

  const typeId = useId();

  const onChangeType = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setType(target.value as (typeof TYPE)[number]),
    []
  );

  return (
    <Fieldset legend="process">
      {/* <pre>{JSON.stringify(delayed, null, 2)}</pre> */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={list.length > 0 && selected.length === list.length}
            disabled={list.length === 0}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setSelected(target.checked ? list.map(({ id }) => id) : []),
              [list]
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
              []
            )}
          />
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
              []
            )}
          />
          <span>priority</span>
        </label>
        <button
          onClick={useCallback(
            () =>
              list
                .filter((item) => selected.includes(item.id))
                .reduce<Promise<unknown>>(
                  (promise, item) => promise.then(() => post("process", item)),
                  Promise.resolve()
                )
                .then(() => setSelected([]))
                .then(getDelayed),
            [list, selected]
          )}
        >
          process
        </button>
        <button
          onClick={useCallback(() => post("cleanup").then(getDelayed), [])}
        >
          cleanup
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
                ].concat(records)
              );
              setSelected([url]);
            }
          }, [])}
        >
          append url
        </button>
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
              {item.opts.repeat?.cron && (
                <pre
                  style={{
                    fontSize: "xx-small",
                    margin: 4,
                  }}
                >
                  {item.opts.repeat.cron}
                </pre>
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
