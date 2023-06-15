import React, { useCallback, useMemo } from "react";
import { create, formatters } from "jsondiffpatch";
import { createAsset } from "use-asset";
import Assets, { API_URL } from "./Assets";
import { type Item, DiffSchema } from "../schema";
import "./html.css";

const jsondiffpatch = create({});

const asset = createAsset(
  () =>
    fetch(`${API_URL}rossm?limit=5000`)
      .then((res) => res.json())
      .then<Item[]>(({ result }) => result)
  // .catch((error) => (console.error(error), []))
);

function Diff({ item, data }: { item: unknown; data: unknown }) {
  const left = DiffSchema.parse(data);
  const delta = jsondiffpatch.diff(left, DiffSchema.parse(item));
  // console.log({ delta });

  return delta ? (
    <div
      className="jsondiffpatch-unchanged-hidden"
      dangerouslySetInnerHTML={{ __html: formatters.html.format(delta, left) }}
    />
  ) : null;
}

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
                      <Diff item={item.data} data={list[index + 1].data} />
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
