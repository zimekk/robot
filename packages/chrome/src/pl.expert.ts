import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  Promise.all([
    new Promise((resolve) => {
      page.on("response", async (res: HTTPResponse) => {
        if (
          ["fetch"].includes(res.request().resourceType()) &&
          res.url().match("/api/graphql/product-offer/query")
        ) {
          console.log(["resolve.json"], res.url());
          resolve(await res.json());
        }
      });
    }).then((json) => {
      console.log({ json });

      return json;
    }),
    page
      .on("request", (req: HTTPRequest) => {
        if (["document", "fetch", "script"].includes(req.resourceType())) {
          console.log(["request"], {
            req: req.url(),
            // headers: req.headers(),
            resourceType: req.resourceType(),
          });
          req.continue();
        } else {
          req.abort();
        }
      })
      .goto(url, {
        waitUntil: "networkidle2",
        // timeout: 60_000,
      })
      .then(async () => {
        const e = `document.title`;
        console.log(["page.evaluate"], e);
        const json = (await page.evaluate(e)) as object;
        console.log({ json });
        // return { url, json, html: undefined };
      }),
  ])
    .then(([json]) => ({ url, json, html: undefined }))
    // .then((result) =>
    //   import("@dev/expert/schema").then(({ Schema }) => ({
    //     ...result,
    //     ...Schema.parse(result),
    //   }))
    // )
    .finally(() => page.close());
