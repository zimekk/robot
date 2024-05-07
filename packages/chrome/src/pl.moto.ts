import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (["document"].includes(req.resourceType())) {
        console.log(["request"], {
          req: req.url(),
          resourceType: req.resourceType(),
        });
        req.continue();
      } else {
        req.abort();
      }
    })
    .on("response", async (res: HTTPResponse) => {
      console.log(res.url());
    })
    .goto(url, {
      waitUntil: "networkidle2",
      // timeout: 60_000,
    })
    .then(async () => {
      // const e = "__NEXT_DATA__";
      const e = `[document.querySelector('script#__NEXT_DATA__')].map(e => JSON.parse(e.textContent))[0]`;
      console.log(["page.evaluate"], e);
      const json = (await page.evaluate(e)) as object;
      console.log({ json });
      return { url, json, html: undefined };
    })
    .finally(() => page.close());
