import React, { useCallback } from "react";
import { createAsset } from "use-asset";
import { PREFIX } from "../constants";

interface Item {
  id: number;
  data: unknown;
}

export const API_URL = process.env.API_URL || "";

// https://github.com/pmndrs/use-asset
const asset = createAsset(() =>
  fetch(`${API_URL}${PREFIX}`)
    .then((res) => res.json())
    .then<Item[]>(({ result }) => result)
    .catch((error) => (console.error(error), [])),
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>Dyson</h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`${API_URL}${PREFIX}/delete?id=${item.id}`),
                [],
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
