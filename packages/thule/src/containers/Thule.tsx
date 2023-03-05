import React, { useCallback } from "react";
import { createAsset } from "use-asset";

interface Thule {
  id: number;
  data: any;
}

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch("thule")
    .then((res) => res.json())
    .then<Thule[]>(({ result }) => result)
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>
        Thule
        <button onClick={useCallback(() => fetch("thule/insert"), [])}>
          insert
        </button>
      </h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`thule/delete?id=${item.id}`),
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
