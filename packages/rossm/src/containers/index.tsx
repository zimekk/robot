import React, { useCallback, useMemo } from "react";
import { createAsset } from "use-asset";
import { Diff } from "@dev/components";
import Assets, { API_URL } from "./Assets";
import { type Item, DiffSchema } from "../schema";

const asset = createAsset(
  () =>
    fetch(`${API_URL}rossm?limit=5000`)
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
      <h2>Rossm</h2>
      <Assets />
      <ol>
        {Object.entries(grouped)
          // .filter(([, list]) => list.length > 10)
          .map(([id, list]) => (
            <li key={id}>
              [{id}]
              <ul>
                {list.map((item, index) => (
                  <li key={item.id}>
                    [{item.id}]
                    <button
                      onClick={useCallback(
                        () => fetch(`${API_URL}rossm/delete?id=${item.id}`),
                        []
                      )}
                    >
                      delete
                    </button>
                    <pre>{JSON.stringify(item, null, 2)}</pre>
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
