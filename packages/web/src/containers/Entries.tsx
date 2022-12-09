import React, { type ChangeEventHandler, useCallback, useState } from "react";
import { z } from "zod";
import { EntriesSchema, Type } from "@dev/schema";

import { post } from "./Process";

export default function Entries() {
  const [pager, setPager] = useState(() => ({
    start: 0,
    limit: 10,
    type: "",
    data: false,
    returnvalue: true,
  }));
  const [options] = useState(() => ({
    type: [""].concat(Object.values(Type)),
  }));
  const [entries, setEntries] = useState<z.infer<typeof EntriesSchema>>([]);
  const [selected, setSelected] = useState<string[]>(() => []);

  const onSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((n) => n !== target.value)
          : selected.concat(target.value)
      ),
    []
  );
  return (
    <fieldset>
      <legend>entries</legend>
      <div>
        <label>
          <span>start</span>
          <select
            value={pager.start}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  start: Number(target.value),
                })),
              []
            )}
          >
            {[...Array(10)]
              .map((_, value) => value * pager.limit)
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </label>
        <label>
          <span>limit</span>
          <select
            value={pager.limit}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  start: 0,
                  limit: Number(target.value),
                })),
              []
            )}
          >
            {[5, 10, 50, 100, 500].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>type</span>
          <select
            value={pager.type}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  type: target.value,
                })),
              []
            )}
          >
            {options.type.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={useCallback(
            () =>
              post("entries", pager)
                .then((response) => response.json())
                .then(
                  pager.data
                    ? z.any({}).array().parseAsync
                    : EntriesSchema.parseAsync
                )
                .then(setEntries)
                .then(() => setSelected([])),
            [pager]
          )}
        >
          entries
        </button>
        <label>
          <input
            type="checkbox"
            checked={pager.data}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  data: target.checked,
                })),
              []
            )}
          />
          <span>data</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={pager.returnvalue}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setPager((pager) => ({
                  ...pager,
                  returnvalue: target.checked,
                })),
              []
            )}
          />
          <span>returnvalue</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={entries.length > 0 && selected.length === entries.length}
            disabled={entries.length === 0}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setSelected(target.checked ? entries.map(({ id }) => id) : []),
              [entries]
            )}
          />
        </label>
        <span>{`${selected.length} / ${entries.length}`}</span>{" "}
        <button
          disabled={selected.length === 0}
          onClick={useCallback(
            () =>
              post("entries/delete", { selected })
                .then((response) => response.json())
                .then(() =>
                  setEntries((entries) =>
                    entries.filter(({ id }) => !selected.includes(id))
                  )
                )
                .then(() => setSelected([])),
            [selected]
          )}
        >
          delete
        </button>
      </div>
      {entries.map((item) => (
        <div key={item.id}>
          <div>
            <label>
              <input
                type="checkbox"
                value={item.id}
                checked={selected.includes(item.id)}
                onChange={onSelect}
              />
              <span>{item.id}</span>
            </label>{" "}
            | <a href={`entry/${item.id}`}>item</a> |{" "}
            <a href={`json/${item.id}`}>json</a> |{" "}
            <a href={`html/${item.id}`}>html</a> |{" "}
            <a href={`delete/${item.id}`}>delete</a>
          </div>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </fieldset>
  );
}
