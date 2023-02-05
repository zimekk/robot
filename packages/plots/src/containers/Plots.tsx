import React, { useCallback } from "react";
import { useAsset } from "use-asset";

interface Plot {
  id: number;
  data: any;
}

export default function Section() {
  // https://github.com/pmndrs/suspend-react
  const { result } = useAsset<{ result: Plot[] }, []>(() =>
    fetch("plots").then((res) => res.json())
  );

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
