import React, { useCallback, useMemo } from "react";
import { createAsset } from "use-asset";
import { Diff } from "@dev/components";
import { type Item, DiffSchema } from "../schema";

export const API_URL = process.env.API_URL || "";

const asset = createAsset(
  () =>
    fetch(`${API_URL}euro?limit=1000`)
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
      <h2>euro</h2>
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
                      () => fetch(`${API_URL}euro/delete?id=${item.id}`),
                      []
                    )}
                  >
                    delete
                  </button>
                  <pre>{JSON.stringify({ name: item.data.name }, null, 2)}</pre>
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
