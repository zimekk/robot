import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  Promise.all([
    new Promise((resolve) =>
      page
        .on("request", (req: HTTPRequest) => {
          if (["document", "script", "xhr"].includes(req.resourceType())) {
            // console.log(["request"], {
            //   req: req.url(),
            //   resourceType: req.resourceType(),
            // });
            req.continue();
          } else {
            req.abort();
          }
        })
        .on("response", async (res: HTTPResponse) => {
          // console.log(res.url())
          if (
            (({ pathname, searchParams }) =>
              pathname === "/products/v4/api/Products" &&
              Number(searchParams.get("pageSize")) >= 1)(new URL(res.url()))
          ) {
            const headers = res.headers();
            console.log(["resolve.json"], res.url(), headers);
            resolve(await res.json());
          }
        }),
    ),
    page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 15_000,
    }),
  ])
    .then(async ([json]) => {
      console.log({ json });
      return { url, json, html: undefined };
    })
    .finally(() => page.close());
