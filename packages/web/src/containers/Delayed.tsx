import React, { useCallback } from "react";

import { post } from "./Process";

export default function Delayed() {
  return (
    <fieldset>
      <legend>delayed</legend>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
              },
              opts: {
                repeat: { cron: "0 11,19 * * *" },
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
                url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
              },
              opts: {
                repeat: { cron: "15 8 * * *" },
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
                repeat: { cron: "30 * * * *" },
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
                repeat: { cron: "0 * * * *" },
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
                url: "https://www.x-kom.pl/promocje",
              },
              opts: {
                repeat: { cron: "1 8,20 * * *" },
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
                repeat: { cron: "1 10,22 * * *" },
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
                repeat: { cron: "1 9,21 * * *" },
              },
            }),
          []
        )}
      >
        al.to/goracy_strzal
      </button>
      <button onClick={useCallback(() => post("cleanup"), [])}>
        cleanupRepeatable
      </button>
    </fieldset>
  );
}
