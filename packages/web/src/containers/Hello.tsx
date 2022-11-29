import React, { ChangeEventHandler, useCallback, useState } from "react";
import { seconds } from "milliseconds";
import { createAsset } from "use-asset";
import { z } from "zod";
import { Type } from "@dev/schema";
import { Schema as PromoSchema } from "@dev/schema/src/promo";
import { Schema as PromoItemSchema } from "@dev/schema/src/promo/item";
import { Schema as HotshotSchema } from "@dev/schema/src/hot-shot";
import { Schema as OtodomOfferSchema } from "@dev/schema/src/otodom/offer";

const EntriesSchema = z
  .discriminatedUnion("type", [
    z.object({
      type: z.literal(Type.HOTSHOT),
      returnvalue: z.object({
        json: HotshotSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.HOTSHOT_ALTO),
      returnvalue: z.object({
        json: HotshotSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.PROMO),
      returnvalue: z.object({
        json: PromoSchema,
      }),
    }),
    z
      .object({
        type: z.literal(Type.PROMO_ITEM),
        returnvalue: z.object({
          json: PromoItemSchema,
        }),
      })
      .extend({
        data: z.object({
          code: z.string().optional(),
          desc: z.string(),
          href: z.string(),
          name: z.string(),
        }),
      }),
    z.object({
      type: z.literal(Type.OTODOM),
      returnvalue: z.object({
        json: OtodomOfferSchema,
      }),
    }),
    z.object({
      type: z.literal(Type.OTODOM_OFFER),
      returnvalue: z.object({
        json: OtodomOfferSchema,
      }),
    }),
  ])
  .array();

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
                  url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/komorow_5600?limit=72&page=1",
                },
                opts: {
                  repeat: { cron: "*/45 * * * *" },
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
                  repeat: { cron: "0 * * * *" },
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
            {[0, 1, 2, 3, 4, 5]
              .map((value) => value * pager.limit)
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
