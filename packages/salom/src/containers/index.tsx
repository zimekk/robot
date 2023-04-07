import React, { useCallback, useMemo } from "react";
import { createAsset } from "use-asset";
import { type Item } from "../schema";

const asset = createAsset(
  () =>
    fetch("salom")
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
      <h2>Salom</h2>
      <ol>
        {Object.entries(grouped).map(([id, list]) => (
          <li key={id}>
            [{id}]
            <ul>
              {list.map((item) => (
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
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
