import React, { useCallback } from "react";
import { createAsset } from "use-asset";
import { ProductType } from "../schema";

interface Item {
  id: number;
  json: ProductType;
}

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch("salom")
    .then((res) => res.json())
    .then<Item[]>(({ result }) => result)
    .catch((error) => (console.error(error), []))
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>Salom</h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`salom/delete?id=${item.id}`),
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
