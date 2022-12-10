import React, {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { z } from "zod";
import { DelayedSchema } from "@dev/schema";

import { post } from "./Process";

type DelayedType = z.infer<typeof DelayedSchema>;

const TYPE = ["delayed", "repeatable"] as const;
const DELAY = [5000, 10000, 15000, 30000] as const;

function Repeatable({ getDelayed }: { getDelayed: () => void }) {
  const [selected, setSelected] = useState<string[]>(() => []);
  const [type, setType] = useState<typeof TYPE[number]>(() => TYPE[0]);
  const [delay, setDelay] = useState<typeof DELAY[number]>(() => DELAY[0]);
  const list = useMemo(
    () =>
      z
        .object({
          data: z.object({
            url: z.string(),
          }),
          opts: z
            .object({
              repeat: z.object({
                cron: z.string(),
              }),
            })
            .transform(
              ({ repeat }) =>
                ({
                  delayed: { delay },
                  repeatable: { repeat },
                }[type])
            ),
        })
        .transform((item) => ({ ...item, id: item.data.url }))
        .array()
        .parse([
          {
            data: {
              url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
            },
            opts: {
              repeat: { cron: "0 11,19 * * *" },
            },
          },
          {
            data: {
              url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
            },
            opts: {
              repeat: { cron: "15 8 * * *" },
            },
          },
          {
            data: {
              url: "https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1",
            },
            opts: {
              repeat: { cron: "30 * * * *" },
            },
          },
          {
            data: {
              url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1",
            },
            opts: {
              repeat: { cron: "0 * * * *" },
            },
          },
          {
            data: {
              url: "https://www.x-kom.pl/promocje",
            },
            opts: {
              repeat: { cron: "1 8,20 * * *" },
            },
          },
          {
            data: {
              url: "https://www.x-kom.pl/goracy_strzal",
            },
            opts: {
              repeat: { cron: "1 10,22 * * *" },
            },
          },
          {
            data: {
              url: "https://www.al.to/goracy_strzal",
            },
            opts: {
              repeat: { cron: "1 9,21 * * *" },
            },
          },
        ]),
    [type, delay]
  );

  const onSelect = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setSelected((selected) =>
        !target.checked
          ? selected.filter((n) => n !== target.value)
          : selected.concat(target.value)
      ),
    []
  );

  const onChangeDelay = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => setDelay(Number(target.value) as typeof DELAY[number]),
    []
  );

  return (
    <fieldset>
      <legend>repeatable</legend>
      {/* <pre>{JSON.stringify(delayed, null, 2)}</pre> */}
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
        <span>{`${selected.length} / ${list.length}`}</span>{" "}
        <label>
          <span>type</span>
          <select
            value={type}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) => setType(target.value as typeof TYPE[number]),
              []
            )}
          >
            {TYPE.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        {type === "delayed" && (
          <label>
            <span>delay</span>
            <select value={delay} onChange={onChangeDelay}>
              {DELAY.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        )}
        <button
          onClick={useCallback(
            () =>
              list
                .filter((item) => selected.includes(item.id))
                .reduce<Promise<any>>(
                  (promise, item) => promise.then(() => post("process", item)),
                  Promise.resolve()
                )
                .then(() => setSelected([]))
                .then(getDelayed),
            [list, selected]
          )}
        >
          add
        </button>
        <button onClick={useCallback(() => post("cleanup"), [])}>
          cleanup
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
            </label>
          </div>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </fieldset>
  );
}

function Delayed({
  delayed,
  setDelayed,
  getDelayed,
  selected,
  setSelected,
}: {
  delayed: DelayedType;
  setDelayed: Dispatch<SetStateAction<DelayedType>>;
  getDelayed: () => void;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}) {
  useEffect(() => {
    getDelayed();
  }, []);

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
      <legend>delayed</legend>
      {/* <pre>{JSON.stringify(delayed, null, 2)}</pre> */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={delayed.length > 0 && selected.length === delayed.length}
            disabled={delayed.length === 0}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setSelected(target.checked ? delayed.map(({ id }) => id) : []),
              [delayed]
            )}
          />
        </label>
        <span>{`${selected.length} / ${delayed.length}`}</span>{" "}
        <button
          disabled={selected.length === 0}
          onClick={useCallback(
            () =>
              post("entries/delete", { selected })
                .then((response) => response.json())
                .then(() =>
                  setDelayed((delayed) =>
                    delayed.filter(({ id }) => !selected.includes(id))
                  )
                )
                .then(() => setSelected([])),
            [selected]
          )}
        >
          delete
        </button>
        <button onClick={useCallback(getDelayed, [])}>refresh</button>
      </div>
      {delayed.map((item) => (
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
            | <a href={`delete/${item.id}`}>delete</a>
          </div>
          <pre>
            {JSON.stringify(
              z
                .object({
                  id: z.string(),
                  name: z.string(),
                  data: z.object({ url: z.string() }),
                })
                .parse(item),
              null,
              2
            )}
          </pre>
        </div>
      ))}
    </fieldset>
  );
}

export default function Section() {
  const [delayed, setDelayed] = useState<z.infer<typeof DelayedSchema>>(
    () => []
  );
  const [selected, setSelected] = useState<string[]>(() => []);

  const getDelayed = useCallback(
    () =>
      post("delayed", {})
        .then((response) => response.json())
        .then(DelayedSchema.parseAsync)
        .then(setDelayed)
        .then(() => setSelected([])),
    []
  );

  return (
    <>
      <Delayed
        delayed={delayed}
        setDelayed={setDelayed}
        getDelayed={getDelayed}
        selected={selected}
        setSelected={setSelected}
      />
      <Repeatable getDelayed={getDelayed} />
    </>
  );
}
