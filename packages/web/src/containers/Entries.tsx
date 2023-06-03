import React, {
  type ChangeEventHandler,
  type MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { format } from "date-fns";
import prettyBytes from "pretty-bytes";
import { Subject, debounceTime, distinctUntilChanged, map } from "rxjs";
import { z } from "zod";
import { EntriesSchema, ReturnSchema, Type } from "@dev/schema";

import { HeatMap } from "../components/HeatMap";
import { Spinner } from "../components/Spinner";
import { API_URL, post } from "./Process";

const GROUP_BY = {
  _date: "date",
  _url: "url",
};
const PAGES = 50;

const PAGER = {
  start: 0,
  limit: 100,
  data: false,
  returnvalue: true,
};

export default function Entries() {
  const [bytes, setBytes] = useState(0);
  const [pager, setPager] = useState(() => PAGER);
  const [match, setMatch] = useState(() => ({
    groupBy: Object.keys(GROUP_BY)[0],
    type: "",
    query: "",
  }));
  const [options] = useState(() => ({
    type: [""].concat(Object.values(Type)),
  }));
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(() => match);
  const [entries, setEntries] = useState<
    (z.infer<typeof EntriesSchema> & { error?: string })[]
  >([]);
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

  console.log(list);

  const grouped = useMemo(
    () =>
      list
        .map((item) => ({
          ...item,
          _date: item.timestamp ? format(item.timestamp, "yyyy-MM-dd") : "",
          _url: item.data.url || "",
        }))
        .reduce(
          (grouped: Record<string, typeof list>, item) =>
            ((group) =>
              Object.assign(grouped, {
                [group]: (grouped[group] || []).concat(item),
              }))(item[match.groupBy as keyof typeof GROUP_BY]),
          {}
        ),
    [list, match.groupBy]
  );

  const onSelectGroup = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (event) => (
      event.preventDefault(),
      ((ids) =>
        setSelected((selected) =>
          selected.filter((id) => !ids.includes(id)).concat(ids)
        ))(
        event.target instanceof HTMLAnchorElement &&
          event.target.dataset &&
          event.target.dataset.group
          ? grouped[event.target.dataset.group].map((item) => item.id)
          : []
      )
    ),
    [grouped]
  );

  const fetchEntries = useCallback(
    (pager: typeof PAGER) =>
      (setLoading(true), post("entries", pager))
        .then(
          (response) => (
            setBytes(Number(response.headers.get("content-length"))),
            response.json()
          )
        )
        .then((list) =>
          pager.data
            ? z.any({}).array().parseAsync(list)
            : Promise.all(
                list.map((item: unknown, key: number) =>
                  EntriesSchema.parseAsync(item).catch(
                    (error) => (
                      console.info(key),
                      console.error(error),
                      ReturnSchema.extend({
                        type: z.string(),
                        error: z.string().default(String(error)),
                      }).parseAsync(item)
                    )
                  )
                )
              )
        )
        .then(setEntries)
        .then(() => (setLoading(false), setSelected([]))),
    []
  );

  const scrollTarget = useRef<HTMLFieldSetElement>(null);

  return (
    <fieldset ref={scrollTarget}>
      <legend>entries</legend>
      <div>
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
            {[1, 5, 10, 25, 50, 100, 250, 500, 1000].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>start</span>
          <button
            disabled={pager.start == 0}
            onClick={useCallback(
              () =>
                setPager((pager) => ({
                  ...pager,
                  start: pager.start - pager.limit,
                })),
              []
            )}
          >
            &lsaquo;
          </button>
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
            {[...Array(PAGES + 1)]
              .map((_, value) => value * pager.limit)
              .filter((value) => value < 10000)
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
          <button
            disabled={pager.start === pager.limit * PAGES}
            onClick={useCallback(
              () =>
                setPager((pager) => ({
                  ...pager,
                  start: pager.start + pager.limit,
                })),
              []
            )}
          >
            &rsaquo;
          </button>
        </label>
        <button disabled={loading} onClick={() => fetchEntries(pager)}>
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
        <button
          disabled={loading}
          onClick={() =>
            setPager((pager) =>
              ((pager) => (fetchEntries(pager), pager))({
                ...pager,
                start: 0,
                limit: 5,
              })
            )
          }
        >
          top 5
        </button>
        <button
          disabled={loading}
          onClick={() =>
            setPager((pager) =>
              ((pager) => (fetchEntries(pager), pager))({
                ...pager,
                start: 0,
                limit: 10,
              })
            )
          }
        >
          top 10
        </button>
        <button
          disabled={loading}
          onClick={() =>
            setPager((pager) =>
              ((pager) => (fetchEntries(pager), pager))({
                ...pager,
                start: 0,
                limit: 100,
              })
            )
          }
        >
          top 100
        </button>
        <button
          disabled={loading}
          onClick={() =>
            setPager((pager) =>
              ((pager) => (fetchEntries(pager), pager))({
                ...pager,
                start: 3000,
                limit: 100,
              })
            )
          }
        >
          3000+
        </button>
        <button
          disabled={loading}
          onClick={() =>
            setPager((pager) =>
              ((pager) => (fetchEntries(pager), pager))({
                ...pager,
                start: 5000,
                limit: 100,
              })
            )
          }
        >
          5000+
        </button>
        {loading && <Spinner />}
      </div>
      <div>
        <label>
          <span>groupby</span>
          <select
            value={match.groupBy}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setMatch((match) => ({
                  ...match,
                  groupBy: target.value,
                })),
              []
            )}
          >
            {Object.entries(GROUP_BY).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
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
            type="search"
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
        {bytes > 0 && <span>{prettyBytes(bytes)}</span>}
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
      <div style={loading ? { opacity: 0.5 } : {}}>
        {Object.entries(grouped).map(([group, list]) => (
          <section key={group}>
            {group && (
              <div>
                <strong>
                  <a href="#" onClick={onSelectGroup} data-group={group}>
                    {group}
                  </a>
                </strong>
                <HeatMap list={list} />
              </div>
            )}
            <div>
              {list.map(({ error, ...item }) => (
                <div key={item.id} style={error ? { color: "red" } : {}}>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value={item.id}
                        checked={selected.includes(item.id)}
                        onChange={onSelect}
                      />
                      {item.timestamp && (
                        <span>
                          {format(item.timestamp, "yyyy-MM-dd HH:mm:ss")}
                        </span>
                      )}
                    </label>{" "}
                    | <a href={`${API_URL}entry/${item.id}`}>item</a> |{" "}
                    <a href={`${API_URL}json/${item.id}`}>json</a> |{" "}
                    <a href={`${API_URL}html/${item.id}`}>html</a> |{" "}
                    <a href={item.data.url}>open</a> |{" "}
                    <a href={`${API_URL}delete/${item.id}`}>delete</a>
                  </div>
                  <pre>
                    {JSON.stringify(
                      selected.includes(item.id)
                        ? item
                        : z
                            .object({
                              id: z.string(),
                              data: z
                                .object({
                                  url: z.string(),
                                })
                                .transform(({ url }) => url),
                              type: z.string(),
                            })
                            .parse(item),
                      null,
                      2
                    )}
                  </pre>
                  {error && selected.includes(item.id) && <pre>{error}</pre>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      {list.length > 0 && list.length === pager.limit && (
        <div>
          <button
            disabled={loading}
            onClick={() => (
              // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView?ref=code-frontend#parameters
              scrollTarget.current?.scrollIntoView({
                behavior: "auto",
                block: "start",
                inline: "nearest",
              }),
              setPager((pager) =>
                ((pager) => (fetchEntries(pager), pager))({
                  ...pager,
                  start: pager.start + pager.limit,
                })
              )
            )}
          >
            next &rsaquo;
          </button>
        </div>
      )}
    </fieldset>
  );
}
