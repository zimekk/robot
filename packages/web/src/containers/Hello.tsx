import React, { useCallback } from "react";
import { createAsset } from "use-asset";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/data.json?${version}`);
  return await res.json();
});

export default function Section({ version = 1 }) {
  const data = asset.read(version); // As many cache keys as you need

  const onProcess = useCallback(async () => {
    await fetch(`process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        url: "https://www.x-kom.pl/goracy_strzal",
      }),
    });
  }, []);

  return (
    <section>
      <h2>Hello</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onProcess}>process</button>
    </section>
  );
}
