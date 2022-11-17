import React, { useCallback, useState } from "react";
import { seconds } from "milliseconds";
import { createAsset } from "use-asset";
import { z } from "zod";

const PhotoSchema = z.object({
  Url: z.string(),
  ThumbnailUrl: z.string(),
  UrlTemplate: z.string().nullable(),
});

const EntriesSchema = z
  .object({
    id: z.string(),
    data: z.any(),
    returnvalue: z.object({
      json: z.union([
        z.object({
          Message: z.string(),
        }),
        z.object({
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
        }),
      ]),
    }),
  })
  .transform(({ returnvalue }) => returnvalue.json)
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

  const onEntries = useCallback(
    () =>
      post("entries")
        .then((response) => response.json())
        .then(EntriesSchema.parseAsync)
        .then(setEntries),
    []
  );

  const onProcess = useCallback(
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
  );

  const onProcessRepeatable = useCallback(
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
  );

  const onCleanupRepeatable = useCallback(() => post("cleanup"), []);

  return (
    <section>
      <h2>Hello</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onEntries}>entries</button>
      <button onClick={onProcess}>process</button>
      <button onClick={onProcessRepeatable}>processRepeatable</button>
      <button onClick={onCleanupRepeatable}>cleanupRepeatable</button>
      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </section>
  );
}
