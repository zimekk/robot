import React, {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { z } from "zod";
import { FailedSchema } from "@dev/schema";
import { Fieldset } from "../components/Fieldset";
import { Spinner } from "../components/Spinner";
import { API_URL, post } from "./Process";

type FailedType = z.infer<typeof FailedSchema>;

function Failed({
  loading,
  setLoading,
  failed,
  setFailed,
  getFailed,
  selected,
  setSelected,
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  failed: FailedType;
  setFailed: Dispatch<SetStateAction<FailedType>>;
  getFailed: () => void;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}) {
  const [match, setMatch] = useState(() => ({
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

  useEffect(() => {
    getFailed();
  }, []);

  const onSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((n) => n !== target.value)
          : selected.concat(target.value),
      ),
    [],
  );

  const list = useMemo(
    () => (
      console.log(filters),
      failed.filter(
        (item) =>
          // (filters.type === "" || filters.type === item.type) &&
          filters.query === "" || item.data.url.includes(filters.query),
      )
    ),
    [failed, filters],
  );

  const selectedIds = useMemo(
    () => list.map((item) => item.id).filter((id) => selected.includes(id)),
    [list, selected],
  );

  return (
    <Fieldset legend="failed">
      {/* <pre>{JSON.stringify(failed, null, 2)}</pre> */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={failed.length > 0 && selectedIds.length === list.length}
            disabled={failed.length === 0}
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
        <button
          disabled={selected.length === 0 || loading}
          onClick={useCallback(
            () =>
              (setLoading(true), post("entries/delete", { selected }))
                .then((response) => response.json())
                .then(() =>
                  setFailed((failed) =>
                    failed.filter(({ id }) => !selected.includes(id)),
                  ),
                )
                .then(() => (setLoading(false), setSelected([]))),
            [selected],
          )}
        >
          delete
        </button>
        <button
          disabled={selected.length === 0 || loading}
          onClick={useCallback(
            () =>
              (setLoading(true), post("failed/retry", { selected }))
                .then((response) => response.json())
                .then(() =>
                  setFailed((failed) =>
                    failed.filter(({ id }) => !selected.includes(id)),
                  ),
                )
                .then(() => (setLoading(false), setSelected([]))),
            [selected],
          )}
        >
          retry
        </button>
        <button disabled={loading} onClick={useCallback(getFailed, [])}>
          refresh
        </button>
        {loading && <Spinner />}
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
            | <a href={item.data.url}>open</a> |{" "}
            <a href={`${API_URL}delete/${item.id}`}>delete</a>
          </div>
          <pre>
            {JSON.stringify(
              selected.includes(item.id)
                ? item
                : z
                    .object({
                      id: z.string(),
                      // name: z.string(),
                      data: z
                        .object({ url: z.string() })
                        .transform(({ url }) => url),
                    })
                    .parse(item),
              null,
              2,
            )}
          </pre>
        </div>
      ))}
    </Fieldset>
  );
}

export default function Section() {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState<FailedType>(() => []);
  const getFailed = useCallback(
    () =>
      (setLoading(true), post("failed", {}))
        .then((response) => response.json())
        .then(FailedSchema.parseAsync)
        .then(setFailed)
        .then(() => (setLoading(false), setSelected([]))),
    [],
  );

  return (
    <>
      <Failed
        loading={loading}
        setLoading={setLoading}
        failed={failed}
        setFailed={setFailed}
        getFailed={getFailed}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}
