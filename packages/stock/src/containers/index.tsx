import React, { useCallback, useMemo } from "react";
import { createAsset } from "use-asset";
import { Diff } from "@dev/components";
import { type Item, DiffSchema } from "../schema";

export const API_URL = process.env.API_URL || "";

const asset = createAsset(
  () =>
    fetch(`${API_URL}stock?limit=500`)
      .then((res) => res.json())
      .then<Item[]>(({ result }) => result)
  // .catch((error) => (console.error(error), []))
);

export default function Section() {
  const result = asset.read();

  const grouped = useMemo(
    () =>
      result.reduce(
        (list, item) =>
          Object.assign(list, {
            [item.item]: (list[item.item] || []).concat(item),
          }),
        {} as Record<string, Item[]>
      ),
    [result]
  );

  console.log({ result, grouped });

  return (
    <section>
      <h2>Stock</h2>
      <ol>
        {Object.entries(grouped).map(([id, list]) => (
          <li key={id}>
            [{id}]
            <ul>
              {list.map((item, index) => (
                <li key={item.id}>
                  [{item.id}]
                  <button
                    onClick={useCallback(
                      () => fetch(`${API_URL}stock/delete?id=${item.id}`),
                      []
                    )}
                  >
                    delete
                  </button>
                  <pre>
                    {JSON.stringify(DiffSchema.parse(item.data), null, 2)}
                  </pre>
                  {index < list.length - 1 && (
                    <Diff
                      left={DiffSchema.parse(list[index + 1].data)}
                      right={DiffSchema.parse(item.data)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
