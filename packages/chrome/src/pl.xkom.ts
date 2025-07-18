import type { HTTPRequest, HTTPResponse, Page } from "puppeteer";
import { z } from "zod";

const JsonSchema = z.object({
  props: z.object({
    pageProps: z.object({
      urqlState: z.record(
        z.string(),
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
      const e = "__INITIAL_STATE__";
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
