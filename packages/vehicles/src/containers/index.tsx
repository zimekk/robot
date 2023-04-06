import React, { useCallback } from "react";
import { createAsset } from "use-asset";
import { type Vehicle } from "../schema";

interface Result {
  id: number;
  json: Vehicle;
}

// https://github.com/pmndrs/suspend-react
const asset = createAsset(() =>
  fetch("vehicles")
    .then((res) => res.json())
    .then<Result[]>(({ result }) => result)
    .catch((error) => (console.error(error), []))
);

export default function Section() {
  const result = asset.read();

  console.log({ result });

  return (
    <section>
      <h2>Vehicles</h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`vehicles/delete?id=${item.id}`),
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
