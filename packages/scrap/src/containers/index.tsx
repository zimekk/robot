import React from "react";

import Entries from "./Entries";
import Delayed from "./Delayed";

export default function Section() {
  return (
    <section>
      <h2>
        Hello <a href="board">board</a>
      </h2>
      <Delayed />
      <Entries />
    </section>
  );
}
