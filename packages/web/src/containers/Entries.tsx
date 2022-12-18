import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { z } from "zod";
import { EntriesSchema, Type } from "@dev/schema";

import { Spinner } from "../components/Spinner";
import { post } from "./Process";

export default function Entries() {
  const [pager, setPager] = useState(() => ({
    start: 0,
    limit: 500,
    data: false,
    returnvalue: true,
  }));
  const [match, setMatch] = useState(() => ({
    type: "",
    query: "",
  }));
  const [options] = useState(() => ({
    type: [""].concat(Object.values(Type)),
  }));
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(() => match);
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

  const filters$ = useMemo(() => new Subject<typeof filters>(), []);

  useEffect(() => {
    const subscription = filters$
      .pipe(
        map(({ query, ...match }) =>
          JSON.stringify({
            ...match,
            query: query.toLowerCase().trim(),
          })
        ),
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((filters) =>
        setFilters((queries) => ({ ...queries, ...JSON.parse(filters) }))
      );
    return () => subscription.unsubscribe();
  }, [filters$]);

  useEffect(() => {
    filters$.next(match);
  }, [match]);

  const list = useMemo(
    () => (
      console.log(filters),
      entries.filter(
        (item) =>
          (filters.type === "" || filters.type === item.type) &&
          (filters.query === "" || item.data.url.match(filters.query))
      )
    ),
    [entries, filters]
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
        <button
          disabled={loading}
          onClick={useCallback(
            () =>
              (setLoading(true), post("entries", pager))
                .then((response) => response.json())
                .then(
                  pager.data
                    ? z.any({}).array().parseAsync
                    : EntriesSchema.parseAsync
                )
                .then(setEntries)
                .then(() => (setLoading(false), setSelected([]))),
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
        {loading && <Spinner />}
      </div>
      <div>
        <label>
          <span>type</span>
          <select
            value={match.type}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setMatch((match) => ({
                  ...match,
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
        <label>
          <span>query</span>
          <input
            value={match.query}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setMatch((match) => ({
                  ...match,
                  query: target.value,
                })),
              []
            )}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={list.length > 0 && selected.length === list.length}
            disabled={list.length === 0}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setSelected(target.checked ? list.map(({ id }) => id) : []),
              [list]
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
      {list.map((item) => (
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
            <a href={item.data.url}>open</a> |{" "}
            <a href={`delete/${item.id}`}>delete</a>
          </div>
          {selected.includes(item.id) ? (
            <pre>{JSON.stringify(item, null, 2)}</pre>
          ) : (
            <pre>
              {JSON.stringify(
                z
                  .object({
                    id: z.string(),
                    data: z
                      .object({
                        // url: z.string()
                      })
                      .passthrough(),
                    type: z.string(),
                  })
                  .parse(item),
                null,
                2
              )}
            </pre>
          )}
        </div>
      ))}
    </fieldset>
  );
}
