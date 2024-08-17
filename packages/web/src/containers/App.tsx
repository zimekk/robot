import React, { Suspense, lazy, useEffect, useState } from "react";
import history from "history/browser";
import { hot } from "react-hot-loader/root";

const Spinner = () => <span>Loading...</span>;

const PAGES = Object.freeze({
  hello: lazy(() => import("./Hello")),
  bikes: lazy(() => import("@dev/bikes")),
  depots: lazy(() => import("@dev/depots")),
  euro: lazy(() => import("@dev/euro")),
  expert: lazy(() => import("@dev/expert")),
  flats: lazy(() => import("@dev/flats")),
  fuels: lazy(() => import("@dev/fuels")),
  funds: lazy(() => import("@dev/funds")),
  gratka: lazy(() => import("@dev/gratka")),
  moto: lazy(() => import("@dev/moto")),
  plots: lazy(() => import("@dev/plots")),
  prods: lazy(() => import("@dev/prods")),
  products: lazy(() => import("@dev/products")),
  promo: lazy(() => import("@dev/promo")),
  props: lazy(() => import("@dev/props")),
  rates: lazy(() => import("@dev/rates")),
  roads: lazy(() => import("@dev/roads")),
  rossm: lazy(() => import("@dev/rossm")),
  rynek: lazy(() => import("@dev/rynek")),
  salom: lazy(() => import("@dev/salom")),
  shots: lazy(() => import("@dev/shots")),
  stock: lazy(() => import("@dev/stock")),
  thule: lazy(() => import("@dev/thule")),
  vehicles: lazy(() => import("@dev/vehicles")),
  status: lazy(() => import("@dev/status")),
});

const getPage = (location: { hash: string }) => {
  const [, hash] = decodeURI(location.hash).match(/^#([-\w]+)/) || [];
  return ((keys) => (keys.includes(hash) ? hash : keys[0]))(
    Object.keys(PAGES),
  ) as keyof typeof PAGES;
};

export default hot(function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location }) => setPage(getPage(location))),
  );

  const Page = PAGES[page];

  return (
    <section>
      <h1>Robot [{page}]</h1>
      <div>
        {Object.keys(PAGES).map((page) => (
          <span key={page} style={{ padding: ".25em" }}>
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
