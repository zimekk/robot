import React, { useCallback } from "react";
import { useAsset } from "use-asset";
import { type Product } from "../schema";

export default function Section() {
  // https://github.com/pmndrs/suspend-react
  const { result } = useAsset<{ result: Product[] }, []>(() =>
    fetch("products").then((res) => res.json())
  );

  console.log({ result });

  return (
    <section>
      <h2>Products</h2>
      <ol>
        {result.map((item) => (
          <li key={item.id}>
            [{item.id}]
            <button
              onClick={useCallback(
                () => fetch(`products/delete?id=${item.id}`),
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
