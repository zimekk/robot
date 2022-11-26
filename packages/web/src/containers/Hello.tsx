import React, { useCallback, useState } from "react";
import { seconds } from "milliseconds";
import { createAsset } from "use-asset";
import { z } from "zod";
import { Type } from "@dev/schema";
import { Schema as PromoSchema } from "@dev/schema/src/promo";
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
  const [entries, setEntries] = useState<z.infer<typeof EntriesSchema>>([]);

  return (
    <section>
      <h2>Hello</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={useCallback(
          () =>
            post("entries")
              .then((response) => response.json())
              .then(EntriesSchema.parseAsync)
              .then(setEntries),
          []
        )}
      >
        entries
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.x-kom.pl/promocje",
                // url: "https://www.otodom.pl/pl/oferta/nowa-cena-piekny-dom-ID4hGrG",
                // url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/michalowice_62659?limit=72&page=1",
              },
              opts: {
                delay: seconds(5),
              },
            }),
          []
        )}
      >
        process
      </button>
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
        processRepeatable15
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
        processRepeatable20
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
        processRepeatable21
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
        processRepeatable22
      </button>
      <button onClick={useCallback(() => post("cleanup"), [])}>
        cleanupRepeatable
      </button>
      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </section>
  );
}
