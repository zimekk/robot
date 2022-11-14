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

export async function chrome(url: string = "https://zimekk.github.io/robot/") {
  console.log(["chrome"], { url });

  const browser = await launch();
  const page = await browser.newPage();
  await page.setUserAgent((await browser.userAgent()).replace("Headless", ""));
  await page.setRequestInterception(true);

  page
    .on("request", (req: HTTPRequest) => {
      // console.log({
      //   req: req.url(),
      //   headers: req.headers(),
      //   resourceType: req.resourceType(),
      // });
      if (["font", "image", "stylesheet"].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    })
    .on("response", async (res: HTTPResponse) => {
      const url = res.url();
      const req = res.request();
      const headers = res.headers();

      if (
        !["xhr"].includes(req.resourceType()) ||
        !url.match("/hotShots/current")
      ) {
        return;
      }
      console.log(
        Object.assign(
          {
            resourceType: req.resourceType(),
            url,
            // headers,
          },
          headers["content-type"] && {
            contentType: headers["content-type"],
          },
          headers.location && {
            location: headers.location,
          }
        )
      );

      if (["fetch", "xhr"].includes(req.resourceType())) {
        console.log(await res.json());
      }
    });

  const response = await page.goto(url, {
    // waitUntil: "networkidle2",
    // timeout: 0,
  });

  // await page.goto('https://example.com');
  // await page.screenshot({path: 'example.png'});
  if (response) {
    console.log({
      // text: await response.text(),
      ok: response.ok(),
      status: response.status(),
      statusText: response.statusText(),
    });
  }

  await delay();

  await page.close();
  await browser.close();
}

export default async function (url: string) {
  console.log({ url });
}
