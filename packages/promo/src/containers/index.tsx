import React, { useCallback } from "react";
import { createAsset } from "use-asset";
import { type Item } from "../schema";

const asset = createAsset(() =>
  fetch("promo")
    .then((res) => res.json())
    .then<Item[]>(({ result }) => result)
    .catch((error) => (console.error(error), []))
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>Promo</h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`promo/delete?id=${item.id}`),
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
