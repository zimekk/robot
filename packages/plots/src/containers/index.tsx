import React, { useCallback } from "react";
import { createAsset } from "use-asset";

interface Plot {
  id: number;
  data: any;
}

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch("plots")
    .then((res) => res.json())
    .then<Plot[]>(({ result }) => result)
    .catch((error) => (console.error(error), []))
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>
        Plots
        <button onClick={useCallback(() => fetch("plots/insert"), [])}>
          insert
        </button>
      </h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`plots/delete?id=${item.id}`),
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
