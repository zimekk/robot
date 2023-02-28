import React, { useCallback } from "react";
import { createAsset } from "use-asset";

interface Depot {
  id: number;
  data: any;
}

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch("depots")
    .then((res) => res.json())
    .then<Depot[]>(({ result }) => result)
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>
        Depots
        <button onClick={useCallback(() => fetch("depots/insert"), [])}>
          insert
        </button>
      </h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`depots/delete?id=${item.id}`),
                []
              )}
            >
              delete
            </button>
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </li>
        ))}
      </ol>
    </section>
  );
}
