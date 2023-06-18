import React, {
  ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { createAsset } from "use-asset";
import { Diff, diff } from "@dev/components";
import { type Item, DiffSchema } from "../schema";

export const API_URL = process.env.API_URL || "";

const asset = createAsset(
  () =>
    fetch(`${API_URL}products?limit=1000`)
      .then((res) => res.json())
      .then<Item[]>(({ result }) => result)
  // .catch((error) => (console.error(error), []))
);

const deleteItem = (id: number) => fetch(`${API_URL}products/delete?id=${id}`);

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

  const [selected, setSelected] = useState<number[]>(() => []);

  const handleSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      ((id) =>
        setSelected((selected) =>
          target.checked
            ? selected.concat(id)
            : selected.filter((item) => item !== id)
        ))(Number(target.value)),
    []
  );

  console.log({ result, selected });

  return (
    <section>
      <h2>Products</h2>
      <div>
        <button
          onClick={() =>
            setSelected(
              Object.values(grouped).flatMap((list) =>
                list.reduce(
                  (result, item, index, list) =>
                    index < list.length - 1 &&
                    diff(
                      DiffSchema.parse(list[index + 1].data),
                      DiffSchema.parse(item.data)
                    ) === undefined
                      ? result.concat(item.id)
                      : result,
                  [] as number[]
                )
              )
            )
          }
        >
          select duplicates
        </button>
        <button
          onClick={() =>
            setSelected(
              result
                .filter((item) => !item.data.featureSummary)
                .map((item) => item.id)
            )
          }
        >
          select incomplete
        </button>
        <button
          disabled={selected.length === 0}
          onClick={() =>
            selected.reduce(
              (promise, id) => promise.then(() => deleteItem(id)),
              Promise.resolve() as Promise<any>
            )
          }
        >{`delete selected (${selected.length})`}</button>
      </div>
      <ol>
        {Object.entries(grouped)
          // .filter(
          //   ([, list]) =>
          //     list.findIndex((item) => !item.data.featureSummary) >= 0
          // )
          // .filter(([, list]) => list.length > 10)
          .map(([id, list]) => (
            <li key={id}>
              [{id}]
              <ul>
                {list.map((item, index) => (
                  <li key={item.id}>
                    <label>
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selected.includes(item.id)}
                        onChange={handleSelect}
                      />
                      [{item.id}]
                    </label>
                    <button onClick={() => deleteItem(item.id)}>delete</button>
                    <pre>
                      {JSON.stringify(
                        (({ data: { name }, ...rest }) => ({
                          data: { name },
                          ...rest,
                        }))(item),
                        null,
                        2
                      )}
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
