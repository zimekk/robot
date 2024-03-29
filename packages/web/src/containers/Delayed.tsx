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
import { DelayedSchema } from "@dev/schema";
import { Fieldset } from "../components/Fieldset";
import { Spinner } from "../components/Spinner";
import Process, { API_URL, post } from "./Process";
import Failed from "./Failed";

type DelayedType = z.infer<typeof DelayedSchema>;

function Delayed({
  loading,
  setLoading,
  delayed,
  setDelayed,
  getDelayed,
  selected,
  setSelected,
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  delayed: DelayedType;
  setDelayed: Dispatch<SetStateAction<DelayedType>>;
  getDelayed: () => void;
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
    getDelayed();
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
      delayed.filter(
        (item) =>
          // (filters.type === "" || filters.type === item.type) &&
          filters.query === "" || item.data.url.includes(filters.query),
      )
    ),
    [delayed, filters],
  );

  const selectedIds = useMemo(
    () => list.map((item) => item.id).filter((id) => selected.includes(id)),
    [list, selected],
  );

  return (
    <Fieldset legend="delayed">
      {/* <pre>{JSON.stringify(delayed, null, 2)}</pre> */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={delayed.length > 0 && selectedIds.length === list.length}
            disabled={delayed.length === 0}
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
                  setDelayed((delayed) =>
                    delayed.filter(({ id }) => !selected.includes(id)),
                  ),
                )
                .then(() => (setLoading(false), setSelected([]))),
            [selected],
          )}
        >
          delete
        </button>
        <button disabled={loading} onClick={useCallback(getDelayed, [])}>
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
  const [delayed, setDelayed] = useState<DelayedType>(() => []);
  const getDelayed = useCallback(
    () =>
      (setLoading(true), post("delayed", {}))
        .then((response) => response.json())
        .then(DelayedSchema.parseAsync)
        .then(setDelayed)
        .then(() => (setLoading(false), setSelected([]))),
    [],
  );

  return (
    <>
      <Delayed
        loading={loading}
        setLoading={setLoading}
        delayed={delayed}
        setDelayed={setDelayed}
        getDelayed={getDelayed}
        selected={selected}
        setSelected={setSelected}
      />
      <Failed />
      <Process getDelayed={getDelayed} />
    </>
  );
}
