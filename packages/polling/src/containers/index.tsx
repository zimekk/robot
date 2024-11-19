import React, { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { interval, intervalToDuration } from "date-fns";
// import { normalize } from "duration-fns";
import { PREFIX } from "../constants";

const request = ({
  ping,
  timeout = 1000,
}: {
  ping: number;
  timeout?: number;
}) =>
  fetch(`${PREFIX}?ping=${ping}&timeout=${timeout}`).then((res) => res.json());

const formatDelay = (from: number, time = Date.now()) =>
  // JSON.stringify(
  //   normalize(intervalToDuration(interval(from,time)))
  // )
  `+${Math.round((100 * (time - from)) / 1000) / 100}`.padStart(7);

const formatTime = (time = Date.now()) => format(time, "HH:mm:ss.SS");

export default function Section() {
  const [loop, setLoop] = useState(() => false);
  const [logs, setLogs] = useState<{ time: number; text: string }[]>(() => []);
  const [, setTick] = useState(() => 0);
  const [timeout, setTimeout] = useState(() => 5);
  const [date] = useState(() => Date.now());
  const counterRef = useRef(0);
  const timeoutRef = useRef(timeout);
  const loopRef = useRef(loop);

  const log = (json: unknown) =>
    setLogs((logs) =>
      logs.concat({ time: Date.now(), text: JSON.stringify(json) }),
    );

  const start = () => {
    const ping = ++counterRef.current;
    log({ ping });
    request({ ping, timeout: 1000 * timeoutRef.current })
      .then((json) => {
        log(json);
        if (loopRef.current) {
          start();
        }
      })
      .catch((error) => {
        log({ error });
        fetch(`${PREFIX}/error`);
      });
  };

  useEffect(() => {
    timeoutRef.current = timeout;
  }, [timeout]);

  useEffect(() => {
    loopRef.current = loop;
  }, [loop]);

  useEffect(() => {
    const t = setInterval(() => setTick((tick) => tick + 1), 100);
    return () => clearInterval(t);
  }, [timeout]);

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    function visibilitychange() {
      log({ hidden: document.hidden });
    }
    document.addEventListener("visibilitychange", visibilitychange);
    return () =>
      document.removeEventListener("visibilitychange", visibilitychange);
  }, [timeout]);

  return (
    <section>
      <h2>{PREFIX}</h2>
      <div>
        <select
          value={timeout}
          onChange={(e) => setTimeout(Number(e.target.value))}
        >
          {[1, 5, 10, 15, 30, 60, 120].map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button onClick={() => start()}>start</button>
        <label>
          <input
            type="checkbox"
            checked={loop}
            onChange={(e) => setLoop(e.target.checked)}
          />{" "}
          loop
        </label>
        <button onClick={() => setLogs([])}>clear</button>
        <input type="file" accept="image/*" capture />
      </div>
      <div>
        <pre>{`[${formatTime()}][${formatDelay(logs.length > 0 ? logs[logs.length - 1].time : date)}]`}</pre>
      </div>
      <div>
        {logs
          .map((item, index) => ({ index, ...item }))
          .reverse()
          .map(({ index, time, text }) => (
            <pre key={index}>
              {`[${formatTime(time)}][${formatDelay(index > 0 ? logs[index - 1].time : date, time)}][${String(index).padStart(4)}] ${text}`}
            </pre>
          ))}
      </div>
    </section>
  );
}
