import React, { useCallback } from "react";
import { seconds } from "milliseconds";

export const post = (path: string, data?: object) =>
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  });

export default function Process() {
  return (
    <fieldset>
      <legend>process</legend>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        stations-get-stations
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.autocentrum.pl/ac-ajax/stations-get-station?station_id=71",
                station_id: 71,
                x: 50.09040739526325,
                y: 19.95947331190109,
                network_id: 34,
                network_name: "BP",
                map_img:
                  "/ac-file/station-map-img/593aa6fc592c7ded238b4570/bp.png",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        stations-get-station
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://najlepszeoferty.mini.com.pl/nowe/api/v1/ems/mini-new-pl_PL/search",
                body: {
                  $match: {
                    transactionalPrice: {
                      $min: 0,
                      $max: 1790000,
                    },
                  },
                  $skip: 0,
                  $limit: 100,
                },
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        mini.com.pl/nowe
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/search",
                body: {
                  $match: {
                    transactionalPrice: {
                      $min: 0,
                      $max: 1790000,
                    },
                    // brand: 1, // BMW
                    // brand: 65, // MINI
                    // series :5
                  },
                  $skip: 0,
                  $limit: 100,
                },
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        bmw.pl/nowe
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/search",
                body: {
                  $match: {
                    transactionalPrice: {
                      $min: 0,
                      $max: 1790000,
                    },
                  },
                  $skip: 0,
                  $limit: 100,
                },
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        bmw.pl/uzywane
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/2/values/?format=json&division=daily",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        tfi/fund/2
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        rest/rates
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        dzialka/warszawa
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        dom/warszawa
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/komorow_5600?limit=72&page=1",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        dom/komorow_5600
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/michalowice_62659?limit=72&page=1",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        dom/michalowice_62659
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.x-kom.pl/promocje",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        x-kom.pl/promocje
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.x-kom.pl/goracy_strzal",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        x-kom.pl/goracy_strzal
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.al.to/goracy_strzal",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        al.to/goracy_strzal
      </button>
    </fieldset>
  );
}
