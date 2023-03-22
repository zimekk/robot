import React, { useCallback } from "react";
import { createAsset } from "use-asset";
import { ProductType } from "../schema";

interface Rossm {
  id: number;
  json: ProductType;
}

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch("rossm")
    .then((res) => res.json())
    .then<Rossm[]>(({ result }) => result)
    .catch((error) => (console.error(error), []))
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>Rossm</h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`rossm/delete?id=${item.id}`),
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
