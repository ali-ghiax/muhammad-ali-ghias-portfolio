import { chromium } from "playwright";

const postUrl = process.argv[2];
if (!postUrl) {
  console.error(
    "Usage: node scripts/extract-linkedin-post-image-srcs-raw.mjs <post-url>"
  );
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1600 } });
await page.goto(postUrl, { waitUntil: "domcontentloaded", timeout: 120000 });
await page.waitForTimeout(5000);

// Return raw `img.src` values so we keep the required `t=` token.
const srcs = await page.evaluate(() => {
  const found = new Set();
  for (const img of document.querySelectorAll("img")) {
    const src = img.currentSrc || img.getAttribute("src") || "";
    const delayed = img.getAttribute("data-delayed-url") || "";
    const candidate = src || delayed;

    if (candidate.includes("media.licdn.com") && candidate.includes("feedshare")) {
      found.add(candidate);
    }
  }
  return [...found].slice(0, 6);
});

console.log(JSON.stringify(srcs, null, 2));
await browser.close();

