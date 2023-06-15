import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createAsset } from "use-asset";

interface Item {
  id: number;
  item: string;
  type: string;
  blob: {
    type: string;
    data: number[];
  };
}

export const API_URL = process.env.API_URL || "";

const asset = createAsset(
  () =>
    fetch(`${API_URL}rossm/assets?limit=5`)
      .then((res) => res.json())
      .then<Item[]>(({ result }) => result)
  // .catch((error) => (console.error(error), []))
);

function Image({ item }: { item: Item }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    Promise.resolve(
      new Blob([new Uint8Array(item.blob.data)], { type: item.type })
    )
      .then((blob) => URL.createObjectURL(blob))
      .then(setSrc);
  }, [item]);

  if (src === "") {
    return null;
  }

  return <img src={src} />;
}

export default function Assets() {
  const result = asset.read();

  const list = useMemo(() => result, [result]);

  console.log({ result, list });

  return (
    <section>
      <h3>Assets</h3>
      <ol>
        {list.map((item) => (
          <li key={item.id}>
            [
            <a
              href={`${API_URL}rossm/assets/${item.id}/${item.item
                .split("/")
                .pop()}`}
            >
              {item.item}
            </a>
            ]
            <Image item={item} />
            <button
              onClick={useCallback(
                () => fetch(`${API_URL}rossm/asset/delete?id=${item.id}`),
                []
              )}
            >
              delete
            </button>
            {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
          </li>
        ))}
      </ol>
    </section>
  );
}
