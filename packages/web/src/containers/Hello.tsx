import React, { ChangeEventHandler, useCallback, useState } from "react";
import { seconds } from "milliseconds";
import { createAsset } from "use-asset";
import { z } from "zod";
import { EntriesSchema } from "@dev/schema";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/data.json?${version}`);
  return await res.json();
});

const post = (path: string, data?: object) =>
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  });

export default function Section({ version = 1 }) {
  const data = asset.read(version); // As many cache keys as you need
  const [pager, setPager] = useState(() => ({
    start: 0,
    limit: 10,
    data: false,
    returnvalue: true,
  }));
  const [entries, setEntries] = useState<z.infer<typeof EntriesSchema>>([]);

  return (
    <section>
      <h2>Hello</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <fieldset>
        <legend>process</legend>
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
      <fieldset>
        <legend>delayed</legend>
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
      <fieldset>
        <legend>entries</legend>
        <label>
          <span>start</span>
          <select
            value={pager.start}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  start: Number(target.value),
                })),
              []
            )}
          >
            {[...Array(10)]
              .map((_, value) => value * pager.limit)
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </label>
        <label>
          <span>limit</span>
          <select
            value={pager.limit}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  start: 0,
                  limit: Number(target.value),
                })),
              []
            )}
          >
            {[5, 10, 50, 100, 500].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={useCallback(
            () =>
              post("entries", pager)
                .then((response) => response.json())
                .then(
                  pager.data
                    ? z.any({}).array().parseAsync
                    : EntriesSchema.parseAsync
                )
                .then(setEntries),
            [pager]
          )}
        >
          entries
        </button>
        <label>
          <input
            type="checkbox"
            checked={pager.data}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  data: target.checked,
                })),
              []
            )}
          />
          <span>data</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={pager.returnvalue}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  returnvalue: target.checked,
                })),
              []
            )}
          />
          <span>returnvalue</span>
        </label>
        <pre>{JSON.stringify(entries, null, 2)}</pre>
      </fieldset>
    </section>
  );
}
