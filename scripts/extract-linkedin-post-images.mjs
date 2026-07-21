import { chromium } from "playwright";

const url = process.argv[2];
if (!url) {
  console.error("Usage: node extract-linkedin-post-images.mjs <post-url>");
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
await page.waitForTimeout(5000);

const urls = await page.evaluate(() => {
  const found = new Set();
  for (const img of document.querySelectorAll("img")) {
    const src = img.src || img.getAttribute("data-delayed-url");
    if (src?.includes("media.licdn.com") && src.includes("feedshare")) {
      found.add(src.split("?")[0] + "?e=2147483647&v=beta");
    }
  }
  return [...found];
});

console.log(JSON.stringify(urls, null, 2));
await browser.close();
