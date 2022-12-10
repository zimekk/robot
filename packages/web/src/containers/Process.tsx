import React, {
  type ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { seconds } from "milliseconds";
import { z } from "zod";
import { DataSchema } from "@dev/schema";

export const post = (path: string, data?: object) =>
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  });

const TYPE = ["delayed", "repeatable"] as const;
const DELAY = [5, 10, 15, 30] as const;

export default function Process({ getDelayed }: { getDelayed: () => void }) {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [type, setType] = useState<typeof TYPE[number]>(() => TYPE[0]);
  const [delay, setDelay] = useState<typeof DELAY[number]>(() => DELAY[0]);
  const list = useMemo(
    () =>
      z
        .object({
          data: DataSchema,
          opts: z
            .object({
              repeat: z.object({
                cron: z.string(),
              }),
            })
            .transform(
              ({ repeat }) =>
                ({
                  delayed: { delay: seconds(delay) },
                  repeatable: { repeat },
                }[type])
            ),
        })
        .transform((item) => ({ ...item, id: item.data.url }))
        .array()
        .parse([
          {
            data: {
              url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
            },
            opts: {
              repeat: { cron: "0 15 * * *" },
            },
          },
          {
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
              repeat: { cron: "0 11,19 * * *" },
            },
          },
          {
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
              repeat: { cron: "30 11,19 * * *" },
            },
          },
          {
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
              repeat: { cron: "0 14 * * *" },
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
            data: {
              url: "https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1",
            },
            opts: {
              repeat: { cron: "30 * * * *" },
            },
          },
          {
            data: {
              url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1",
            },
            opts: {
              repeat: { cron: "0 * * * *" },
            },
          },
          {
            data: {
              url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/komorow_5600?limit=72&page=1",
            },
            opts: {
              repeat: { cron: "0 7 * * *" },
            },
          },
          {
            data: {
              url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/michalowice_62659?limit=72&page=1",
            },
            opts: {
              repeat: { cron: "0 8 * * *" },
            },
          },
          {
            data: {
              url: "https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/2/values/?format=json&division=daily",
            },
            opts: {
              repeat: { cron: "0 13 * * *" },
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
              repeat: { cron: "1 10,22 * * *" },
            },
          },
          {
            data: {
              url: "https://www.al.to/goracy_strzal",
            },
            opts: {
              repeat: { cron: "1 9,21 * * *" },
            },
          },
        ]),
    [type, delay]
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
    ({ target }) => setDelay(Number(target.value) as typeof DELAY[number]),
    []
  );

  return (
    <fieldset>
      <legend>process</legend>
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
          <span>type</span>
          <select
            value={type}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) => setType(target.value as typeof TYPE[number]),
              []
            )}
          >
            {TYPE.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        {type === "delayed" && (
          <label>
            <span>delay</span>
            <select value={delay} onChange={onChangeDelay}>
              {DELAY.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        )}
        <button
          onClick={useCallback(
            () =>
              list
                .filter((item) => selected.includes(item.id))
                .reduce<Promise<any>>(
                  (promise, item) => promise.then(() => post("process", item)),
                  Promise.resolve()
                )
                .then(() => setSelected([]))
                .then(getDelayed),
            [list, selected]
          )}
        >
          add
        </button>
        <button
          onClick={useCallback(() => post("cleanup").then(getDelayed), [])}
        >
          cleanup
        </button>
      </div>
      {list.map((item) => (
        <div key={item.id}>
          <div>
            <label>
              <input
                type="checkbox"
                value={item.id}
                checked={selected.includes(item.id)}
                onChange={onSelect}
              />
              <span>{item.id}</span>
            </label>
          </div>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </fieldset>
  );
}
