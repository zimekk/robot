import React, { useCallback, useState } from "react";
import { seconds } from "milliseconds";
import { createAsset } from "use-asset";
import { z } from "zod";

const PhotoSchema = z.object({
  Url: z.string(),
  ThumbnailUrl: z.string(),
  UrlTemplate: z.string().nullable(),
});

const HotShotSchema = z.object({
  Id: z.string(),
  Price: z.number(),
  OldPrice: z.number(),
  PromotionGainText: z.string(),
  PromotionGainTextLines: z.string().array(),
  PromotionGainValue: z.number(),
  PromotionTotalCount: z.number(),
  SaleCount: z.number(),
  MaxBuyCount: z.number(),
  PromotionName: z.string(),
  PromotionEnd: z.string(),
  PromotionPhoto: PhotoSchema,
  Product: z.object({
    AvailabilityStatus: z.enum(["Available", "Unavailable"]),
    IsEsd: z.boolean(),
    Name: z.string(),
    MainPhoto: PhotoSchema,
    // Photos: PhotoSchema.array(),
    Price: z.number(),
    ProducerCode: z.string(),
    Producer: z.object({
      Id: z.string(),
      Name: z.string(),
    }),
    ProductDescription: z.string(),
    WebUrl: z.string(),
  }),
});

const HotShotErrorSchema = z.object({
  Message: z.string(),
});

const OtodomSchema = z
  .object({
    props: z
      .object({
        pageProps: z.object({
          featureFlags: z.any().transform(() => null),
          translations: z.any().transform(() => null),
          tracking: z.any().transform(() => null),
          // data: z.any().transform(() => null),
          ad: z
            .object({
              id: z.number(),
              slug: z.string(),
            })
            .optional(),
          data: z
            .object({
              searchAds: z.object({
                items: z
                  .object({
                    id: z.number(),
                    slug: z.string(),
                  })
                  // .passthrough()
                  .array(), //.transform(() => null),
              }), //.passthrough()
            })
            .optional(),
        }), //.passthrough()
      })
      .passthrough(),
  })
  .passthrough();

const EntriesSchema = z
  .object({
    id: z.string(),
    data: z.any(),
    // returnvalue: z.any(),
    returnvalue: z.union([
      z.object({
        html: z.string(),
      }),
      z.object({
        // json: z.object({}).passthrough(),
        json: z.union([OtodomSchema, HotShotErrorSchema, HotShotSchema]),
      }),
    ]),
  })
  .transform(({ returnvalue }) =>
    "json" in returnvalue ? returnvalue.json : returnvalue.html
  )
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
