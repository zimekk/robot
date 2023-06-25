// https://github.com/calebj0seph/stock-checker/blob/master/src/chrome.js
import type { HTTPRequest, HTTPResponse } from "puppeteer";
import { config } from "dotenv";
import { resolve } from "path";
import puppeteer from "puppeteer";
// import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { z } from "zod";

config({ path: resolve(__dirname, "../../../.env") });

const { PUPPETEER_EXECUTABLE_PATH, WORKDIR } = z
  .object({
    PUPPETEER_EXECUTABLE_PATH: z
      .string()
      .default("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
    WORKDIR: z.string().default(""),
  })
  .parse(process.env);

// puppeteer.use(StealthPlugin());

const delay = (timeout = 3000) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export async function launch() {
  const config = {
    // https://stackoverflow.com/questions/47122579/run-puppeteer-on-already-installed-chrome-on-macos
    executablePath: PUPPETEER_EXECUTABLE_PATH,
    // headless: true,
    args: WORKDIR
      ? [
          "--no-sandbox",
          "--headless",
          "--disable-gpu",
          "--disable-dev-shm-usage",
        ]
      : [],
  };
  // Open Chrome with the given command and arguments
  return await puppeteer.launch(config);
}

export async function chrome(url = "https://zimekk.github.io/robot/") {
  console.log(["chrome"], { url });

  const browser = await launch();
  const page = await browser.newPage();
  await page.setUserAgent((await browser.userAgent()).replace("Headless", ""));
  await page.setRequestInterception(true);

  return await Promise.all([
    new Promise<{ url: string; html?: string; json?: object }>(
      (resolve, reject) =>
        page
          .on("request", (req: HTTPRequest) => {
            // console.log({
            //   req: req.url(),
            //   headers: req.headers(),
            //   resourceType: req.resourceType(),
            // });
            if (["font", "image", "stylesheet"].includes(req.resourceType())) {
              req.abort();
            } else if (
              ["document"].includes(req.resourceType()) &&
              url.match("pierwotny.pl/s/") &&
              req.url() !== url
            ) {
              req.abort();
            } else if (
              ["script"].includes(req.resourceType()) &&
              req.url().match("pl/app/static/js/")
            ) {
              req.abort();
            } else {
              req.continue();
            }
          })
          .on("response", async (res: HTTPResponse) => {
            try {
              const req = res.request();
              const headers = res.headers();

              if (["document", "fetch", "xhr"].includes(req.resourceType())) {
                console.log(url, req.resourceType(), req.url());
              }

              if (url.match("/goracy_strzal|/pl/\\w+/-home|//promocje")) {
                if (
                  ["fetch", "xhr"].includes(req.resourceType()) &&
                  res
                    .url()
                    .match(
                      "/get/(xkom|alto)/|/v1/(xkom|alto)/hotShots/current|/v1/(xkom|alto)/products/searchHints|/api/\\w+/details"
                    )
                ) {
                  console.log(["resolve.json"], res.url(), headers);
                  resolve({ url: res.url(), json: await res.json() });
                }
              } else {
                if (
                  ["document"].includes(req.resourceType()) &&
                  !headers.location
                ) {
                  console.log(
                    ["resolve.html"],
                    res.url(),
                    res.status(),
                    headers
                  );

                  if (res.status() !== 200) {
                    throw new Error(`${res.status()} ${res.statusText()}`);
                  }

                  await delay();

                  if (url.match("finder.*.com/pl/pl-PL/search")) {
                    console.log(res.url());
                    const s = "script#__NEXT_DATA__";
                    console.log(["page.waitForSelector"], s);
                    const e = "__NEXT_DATA__";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (url.match("(al.to|kom.pl)/.+/c/")) {
                    console.log(res.url());
                    const e = "__INITIAL_STATE__";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (url.match("pierwotny.pl/s/")) {
                    console.log(res.url());
                    await page.evaluate(
                      `eval(document.querySelector('#root + script').textContent)`
                    );
                    const e = "__INITIAL_STATE__";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (
                    url.match("pl/d/nieruchomosci/") ||
                    url.match("pl/nieruchomosci/")
                  ) {
                    console.log(res.url());
                    const e = "__PRERENDERED_STATE__";
                    console.log(["page.evaluate"], e);
                    const json = JSON.parse(await page.evaluate(e));
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (url.match("/maps/dir/")) {
                    console.log(res.url());
                    if (res.url().match("//consent\\.")) {
                      const b = 'button[aria-label="Odrzuć wszystko"]';
                      console.log(["page.waitForSelector"], b);
                      await page.waitForSelector(b);
                      console.log(["page.click"], b);
                      await page.click(b);
                    } else {
                      const e = "APP_INITIALIZATION_STATE[3][4].substr(5)";
                      console.log(["page.evaluate"], e);
                      const json = JSON.parse(await page.evaluate(e));
                      console.log({ json });
                      resolve({ url: res.url(), json });
                    }
                  } else if (url.match("moto.pl/osobowe/")) {
                    console.log(res.url());
                    const e = "__NEXT_DATA__";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (url.match("dom.pl/pl/")) {
                    const e = "__NEXT_DATA__";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (url.match("smann.pl/szukaj\\?")) {
                    if (decodeURI(url) === decodeURI(res.url())) {
                      console.log(res.url());
                      const e = "__NEXT_DATA__";
                      console.log(["page.evaluate"], e);
                      const json = await page.evaluate(e);
                      console.log({ json });
                      resolve({ url: res.url(), json });
                    }
                  } else if (url.match("lomon.com/pl-pl/shop")) {
                    console.log(res.url());
                    const e = "adobeLaunchCategoryViewEvents";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (url.match("thule.com/pl-pl/")) {
                    console.log(res.url());
                    const e = "_THULEDATA";
                    console.log(["page.evaluate"], e);
                    const json = await page.evaluate(e);
                    console.log({ json });
                    resolve({ url: res.url(), json });
                  } else if (
                    [
                      "application/json",
                      "application/json; charset=utf-8",
                    ].includes(res.headers()["content-type"])
                  ) {
                    resolve({ url: res.url(), json: await res.json() });
                  } else {
                    resolve({ url: res.url(), html: await res.text() });
                  }
                }
              }
            } catch (e) {
              console.error(e);
              reject(e);
            }
          })
    ),
    page.goto(url, {
      waitUntil: "networkidle2",
      // timeout: 0,
    }),
  ]).then(async ([result]) => {
    await delay();
    await page.close();
    await browser.close();
    return result;
  });
}

export default async function (url: string) {
  console.log({ url });
}
