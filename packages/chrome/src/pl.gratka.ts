import type { HTTPRequest, Page } from "puppeteer";

export const scrap = async (page: Page, url: string) =>
  page
    .on("request", (req: HTTPRequest) => {
      if (["document"].includes(req.resourceType())) {
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
      const e = `[...document.querySelectorAll('script[type="application/ld+json"]')].map(e => JSON.parse(unescape(e.textContent))).find(item => item['@type'] === 'Product')`;
      console.log(["page.evaluate"], e);
      const json = (await page.evaluate(e)) as object;
      console.log({ json });
      return { url, json, html: undefined };
    })
    // .then((result) =>
    //   import("@dev/gratka/schema").then(({ Schema }) => ({
    //     ...result,
    //     ...Schema.parse(result),
    //   }))
    // )
    .finally(() => page.close());
