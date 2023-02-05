import React, { Suspense, lazy, useEffect, useState } from "react";
import history from "history/browser";
import { hot } from "react-hot-loader/root";

const Spinner = () => <span>Loading...</span>;

const PAGES = Object.freeze({
  hello: lazy(() => import("./Hello")),
  plots: lazy(() => import("@dev/plots")),
});

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#([-\w]+)/) || [];
  return hash as keyof typeof PAGES;
};

export default hot(function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

  const Page = PAGES[page];

  return (
    <section>
      <h1>Robot [{page}]</h1>
      <div>
        {Object.keys(PAGES).map((page) => (
          <span key={page} style={{ padding: "1em" }}>
            <a href={`#${page}`}>{page}</a>
          </span>
        ))}
      </div>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
});
