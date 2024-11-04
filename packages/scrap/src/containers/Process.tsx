import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { seconds } from "milliseconds";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { z } from "zod";
import { DataSchema, OptsSchema } from "@dev/schema";
import { Fieldset } from "../components/Fieldset";
import { Link } from "../components/Link";
import { Spinner } from "../components/Spinner";
import { SHOPS, records as initialRecords } from "../records";

export const API_URL = process.env.API_URL || "";

export const post = (path: string, data?: object, base = API_URL) =>
  fetch(`${base}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  });

const TYPE = ["repeatable", "delayed"] as const;
const DELAY = [5, 10, 15, 30] as const;

const scrap = async (item: object, text: string) =>
  (console.info([text], { item }), post("scrap", item, ""))
    .then((response) => response.json())
    .then((json) => post("parse", json));

export default function Process({ getDelayed }: { getDelayed: () => void }) {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [priority, setPriority] = useState<boolean>(() => false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<(typeof TYPE)[number]>(() => TYPE[1]);
  const [delay, setDelay] = useState<(typeof DELAY)[number]>(() => DELAY[0]);
  const [match, setMatch] = useState(() => ({
    blocked: false,
    type: "",
    query: "",
  }));
  const [filters, setFilters] = useState(() => match);

  const filters$ = useMemo(() => new Subject<typeof filters>(), []);

  useEffect(() => {
    const subscription = filters$
      .pipe(
        map(({ query, ...match }) =>
          JSON.stringify({
            ...match,
            query: query.toLowerCase().trim(),
          }),
        ),
        distinctUntilChanged(),
        debounceTime(400),
      )
      .subscribe((filters) =>
        setFilters((queries) => ({ ...queries, ...JSON.parse(filters) })),
      );
    return () => subscription.unsubscribe();
  }, [filters$]);

  useEffect(() => {
    filters$.next(match);
  }, [match]);

  const [records, setRecords] = useState(() => initialRecords);

  const entries = useMemo(
    () =>
      z
        .object({
          data: DataSchema,
          opts: OptsSchema.extend(
            priority
              ? {
                  priority: z.number().default(1),
                }
              : {},
          ).transform(
            ({ repeat, ...opts }) =>
              ({
                delayed: { ...opts, delay: seconds(delay) },
                repeatable: { ...opts, repeat },
              })[type],
          ),
        })
        .transform((item) => ({ ...item, id: item.data.url }))
        .array()
        .parse(
          records.filter(({ blocked = false }) => blocked === match.blocked),
        ),
    [type, delay, priority, records, match.blocked],
  );

  const list = useMemo(
    () =>
      entries.filter(
        (item) => filters.query === "" || item.data.url.includes(filters.query),
      ),
    [entries, filters],
  );

  const onSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((n) => n !== target.value)
          : selected.concat(target.value),
      ),
    [],
  );

  const onChangeDelay = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => setDelay(Number(target.value) as (typeof DELAY)[number]),
    [],
  );

  const typeId = useId();

  const onChangeType = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setType(target.value as (typeof TYPE)[number]),
    [],
  );

  const handleScrap = useCallback(
    (item: object, text = "scrap") =>
      (setLoading(true), scrap(item, text))
        .catch(console.error)
        .then(() => setLoading(false)),
    [],
  );

  const handleAvailability = useCallback(
    (id: string) =>
      SHOPS
        // .slice(0, 2)
        .reduce<Promise<unknown>>(
          (promise, areaName) =>
            promise
              .then(() =>
                fetch(`shops/${id}?areaName=${encodeURIComponent(areaName)}`),
              )
              .then((res) => res.json())
              .then((json) =>
                console.log(
                  { areaName },
                  json.filter(
                    ({ productAvailability }: any) =>
                      !["UNAVAILABLE"].includes(productAvailability),
                  ),
                ),
              )
              .then(
                () =>
                  new Promise((resolve) =>
                    setTimeout(resolve, seconds(10 * Math.random())),
                  ),
              ),
          Promise.resolve(),
        ),
    [],
  );

  const selectedIds = useMemo(
    () => list.map((item) => item.id).filter((id) => selected.includes(id)),
    [list, selected],
  );

  return (
    <Fieldset legend="process">
      {/* <pre>{JSON.stringify(delayed, null, 2)}</pre> */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={list.length > 0 && selectedIds.length === list.length}
            disabled={list.length === 0}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                ((listIds) =>
                  setSelected((selected) =>
                    selected
                      .filter((id) => !listIds.includes(id))
                      .concat(target.checked ? listIds : []),
                  ))(list.map((item) => item.id)),
              [list],
            )}
          />
        </label>
        <span>{`${selected.length} / ${list.length}`}</span>{" "}
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
              [],
            )}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={match.blocked}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setMatch((match) => ({
                  ...match,
                  blocked: target.checked,
                })),
              [],
            )}
          />
          <span>blocked</span>
        </label>
        <span>
          {TYPE.map((value) => (
            <label key={value}>
              <input
                type="radio"
                name={typeId}
                value={value}
                onChange={onChangeType}
                checked={type === value}
              />
              <span>{value}</span>
            </label>
          ))}
          {type === "delayed" && (
            <span>
              {" "}
              <select value={delay} onChange={onChangeDelay}>
                {DELAY.map((value) => (
                  <option key={value} value={value}>
                    {`${value} s`}
                  </option>
                ))}
              </select>
            </span>
          )}
        </span>
        <label>
          <input
            type="checkbox"
            checked={priority}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) => setPriority(target.checked),
              [],
            )}
          />
          <span>priority</span>
        </label>
        <button
          disabled={loading}
          onClick={useCallback(
            () =>
              (setLoading(true),
              list
                .filter((item) => selected.includes(item.id))
                .reduce<
                  Promise<unknown>
                >((promise, item) => promise.then(() => post("process", item)), Promise.resolve()))
                .then(() => (setLoading(false), setSelected([])))
                .then(getDelayed),
            [list, selected],
          )}
        >
          {type === "delayed" ? "process" : "add"}
        </button>
        <button
          onClick={useCallback(() => post("cleanup").then(getDelayed), [])}
        >
          cleanup
        </button>
        <button
          onClick={() =>
            ((plu) => plu && handleAvailability(plu))(prompt("plu:", "1225761"))
          }
        >
          shops
        </button>
        <button
          onClick={useCallback(() => {
            const url = prompt("Url:", "https://");

            if (url) {
              setRecords((records) =>
                [
                  {
                    data: {
                      url,
                    },
                    opts: {
                      repeat: { cron: `0 19 * * *` },
                    },
                  },
                ].concat(records),
              );
              setSelected([url]);
            }
          }, [])}
        >
          append url
        </button>
        <button
          disabled={loading}
          onClick={useCallback(
            () =>
              (setLoading(true), list)
                .filter((item) => selected.includes(item.id))
                .reduce<Promise<unknown>>(
                  (promise, item, key, list) =>
                    promise
                      .then(() =>
                        scrap(item, `scrap ${key + 1}/${list.length}`),
                      )
                      .then(() =>
                        setSelected((selected) =>
                          selected.filter((id) => id !== item.id),
                        ),
                      )
                      .then(
                        () =>
                          key < list.length - 1 &&
                          new Promise((resolve) =>
                            setTimeout(resolve, seconds(10 * Math.random())),
                          ),
                      ),
                  Promise.resolve(),
                )
                .catch(console.error)
                .then(() => setLoading(false)),
            [list, selected],
          )}
        >
          scrap
        </button>
        {loading && <Spinner />}
      </div>
      {list.map((item: any) => (
        <div key={item.id}>
          <div>
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              <input
                type="checkbox"
                value={item.id}
                checked={selected.includes(item.id)}
                onChange={onSelect}
              />
              <Link
                href={item.id}
                style={{
                  flex: 1,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "auto",
                }}
              >
                {item.id}
              </Link>
              {item.opts.repeat?.cron ? (
                <pre
                  style={{
                    fontSize: "xx-small",
                    margin: 4,
                  }}
                >
                  {item.opts.repeat.cron}
                </pre>
              ) : (
                <button disabled={loading} onClick={() => handleScrap(item)}>
                  scrap
                </button>
              )}
            </label>
          </div>
          {selected.includes(item.id) && (
            <pre>{JSON.stringify(item, null, 2)}</pre>
          )}
        </div>
      ))}
    </Fieldset>
  );
}
