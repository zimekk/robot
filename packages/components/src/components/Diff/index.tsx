import React from "react";
import { create } from "jsondiffpatch";
// import * as html from "jsondiffpatch/formatters/html";
import "./styles.css";

const html = require("jsondiffpatch/formatters/html");
const jsondiffpatch = create({});

export const diff = (left: unknown, right: unknown) =>
  jsondiffpatch.diff(left, right);

export function Diff({ left, right }: { left: unknown; right: unknown }) {
  const delta = diff(left, right);
  const __html = delta && html.format(delta, left);

  return __html ? (
    <div
      className="jsondiffpatch-unchanged-hidden"
      dangerouslySetInnerHTML={{ __html }}
    />
  ) : null;
}
