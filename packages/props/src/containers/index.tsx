import React, {
  type ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { createAsset } from "use-asset";
import { Diff, diff } from "@dev/components";
import { type Item, DiffSchema } from "../schema";

export const API_URL = process.env.API_URL || "";

const LIMIT = [100].concat(
  [...Array(5)].map((_value, index) => (index + 1) * 1000)
);

const asset = createAsset(
  (limit) =>
    fetch(`${API_URL}props?limit=${limit}`)
      .then((res) => res.json())
      .then<Item[]>(({ result }) => result)
  // .catch((error) => (console.error(error), []))
);

const deleteItem = (id: number) => fetch(`${API_URL}props/delete?id=${id}`);

function Item({ item }: { item: Item }) {
  const [expand, setExpand] = useState(() => false);

  return (
    <pre onClick={useCallback(() => setExpand(true), [])}>
      {JSON.stringify(
        expand
          ? item
          : (({ data, ...rest }) => ({
              data,
              ...rest,
            }))(item),
        null,
        2
      )}
    </pre>
  );
}

export default function Section() {
  const [pager, setPager] = useState(() => ({ limit: LIMIT[1] }));
  const result = asset.read(pager.limit);

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

  console.log({ ...pager, result });

  return (
    <section>
      <h2>Props</h2>
      <div>
        <label>
          <span>limit</span>
          <select
            value={String(pager.limit)}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  limit: Number(target.value),
                })),
              []
            )}
          >
            {LIMIT.map((value) => (
              <option key={value} value={String(value)}>
                {value}
              </option>
            ))}
          </select>
        </label>
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
          disabled={selected.length === 0}
          onClick={() =>
            selected.reduce(
              (promise, id) => promise.then(() => deleteItem(id)),
              Promise.resolve() as Promise<unknown>
            )
          }
        >{`delete selected (${selected.length})`}</button>
      </div>
      <ol>
        {Object.entries(grouped).map(([id, list]) => (
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
                  <Item item={item} />
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
