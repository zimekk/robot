import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

const JsonSchema = z.object({
  props: z.object({
    pageProps: z.object({
      urqlState: z.record(
        z.object({
          data: z.string(),
        }),
      ),
    }),
  }),
});

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
      console.log([res.url(), res.status()]);
    })
    .goto(url, {
      waitUntil: "networkidle2",
      // timeout: 60_000,
    })
    .then(async () => {
      console.log(await page.title());

      const _ = `[...document.querySelectorAll('script')].map(script =>script.id).filter(Boolean)`;
      // const _ = `JSON.parse(document.querySelector('script#__NEXT_DATA__').textContent.substr(0, 100))`;
      // const _ = `document.querySelector('script#__NEXT_DATA__').textContent`;
      console.log(await page.evaluate(_));

      // const e = "__NEXT_DATA__";
      const e = `[document.querySelector('script#__NEXT_DATA__')].map(e => JSON.parse(e.textContent))[0]`;
      console.log(["page.evaluate"], e);
      const json = (await page.evaluate(e)) as object;
      console.log({ json });
      return JsonSchema.parseAsync(json).then((json) => ({
        url,
        json,
        html: undefined,
      }));
    })
    .finally(() => page.close());
