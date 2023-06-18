import React from "react";
import { create, formatters } from "jsondiffpatch";
import "./styles.css";

const jsondiffpatch = create({});

export const diff = (left: unknown, right: unknown) =>
  jsondiffpatch.diff(left, right);

export function Diff({ left, right }: { left: unknown; right: unknown }) {
  const delta = diff(left, right);
  // console.log({ delta });

  return delta ? (
    <div
      className="jsondiffpatch-unchanged-hidden"
      dangerouslySetInnerHTML={{ __html: formatters.html.format(delta, left) }}
    />
  ) : null;
}
