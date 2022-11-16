import React, { useCallback } from "react";
import { seconds } from "milliseconds";
import { createAsset } from "use-asset";

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
      <button onClick={onProcess}>process</button>
      <button onClick={onProcessRepeatable}>processRepeatable</button>
      <button onClick={onCleanupRepeatable}>cleanupRepeatable</button>
    </section>
  );
}
