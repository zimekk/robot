import React, { Suspense, lazy } from "react";
import { hot } from "react-hot-loader/root";

const Spinner = () => <span>Loading...</span>;

const PAGES = Object.freeze({
  hello: lazy(() => import("./Hello")),
});

export default hot(function App() {
  const page = Object.keys(PAGES)[0] as keyof typeof PAGES;
  const Page = PAGES[page];

  return (
    <section>
      <h1>Robot [{page}]</h1>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
});
