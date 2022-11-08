import React from "react";
import { createAsset } from "use-asset";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/data.json?${version}`);
  return await res.json();
});

export default function Section({ version = 1 }) {
  const data = asset.read(version); // As many cache keys as you need

  return (
    <section>
      <h2>Hello</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}
