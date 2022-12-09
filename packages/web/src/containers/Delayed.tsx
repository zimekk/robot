import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { z } from "zod";
import { DelayedSchema } from "@dev/schema";

import { post } from "./Process";

export default function Delayed() {
  const [delayed, setDelayed] = useState<z.infer<typeof DelayedSchema>>(
    () => []
  );
  const [selected, setSelected] = useState<string[]>(() => []);

  useEffect(() => {
    post("delayed", {})
      .then((response) => response.json())
      .then(DelayedSchema.parseAsync)
      .then(setDelayed)
      .then(() => setSelected([]));
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
                  data: z.any(),
                })
                .parse(item),
              null,
              2
            )}
          </pre>
        </div>
      ))}
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.autocentrum.pl/ac-ajax/stations-get-stations?zoom=6",
              },
              opts: {
                repeat: { cron: "0 11,19 * * *" },
              },
            }),
          []
        )}
      >
        stations-get-stations
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all",
              },
              opts: {
                repeat: { cron: "15 8 * * *" },
              },
            }),
          []
        )}
      >
        rest/rates
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.otodom.pl/pl/oferty/sprzedaz/dzialka/warszawa?limit=72&page=1",
              },
              opts: {
                repeat: { cron: "30 * * * *" },
              },
            }),
          []
        )}
      >
        dzialka/warszawa
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.otodom.pl/pl/oferty/sprzedaz/dom/warszawa?limit=72&page=1",
              },
              opts: {
                repeat: { cron: "0 * * * *" },
              },
            }),
          []
        )}
      >
        dom/warszawa
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.x-kom.pl/promocje",
              },
              opts: {
                repeat: { cron: "1 8,20 * * *" },
              },
            }),
          []
        )}
      >
        x-kom.pl/promocje
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.x-kom.pl/goracy_strzal",
              },
              opts: {
                repeat: { cron: "1 10,22 * * *" },
              },
            }),
          []
        )}
      >
        x-kom.pl/goracy_strzal
      </button>
      <button
        onClick={useCallback(
          () =>
            post("process", {
              data: {
                url: "https://www.al.to/goracy_strzal",
              },
              opts: {
                repeat: { cron: "1 9,21 * * *" },
              },
            }),
          []
        )}
      >
        al.to/goracy_strzal
      </button>
      <button onClick={useCallback(() => post("cleanup"), [])}>
        cleanupRepeatable
      </button>
    </fieldset>
  );
}
