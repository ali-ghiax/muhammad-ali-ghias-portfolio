import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "honors");
mkdirSync(outDir, { recursive: true });

const postUrl = process.argv[2];
const prefix = process.argv[3] ?? "northern-university";

if (!postUrl) {
  console.error("Usage: node download-northern-university-images.mjs <post-url> [filename-prefix]");
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1600 } });
await page.goto(postUrl, { waitUntil: "domcontentloaded", timeout: 120000 });
await page.waitForTimeout(5000);

const urls = await page.evaluate(() => {
  const found = new Set();
  for (const img of document.querySelectorAll("img")) {
    const src = img.currentSrc || img.src;
    if (src?.includes("media.licdn.com") && src.includes("feedshare")) {
      found.add(src);
    }
  }
  return [...found].slice(0, 4);
});

await browser.close();

for (let i = 0; i < urls.length; i++) {
  const response = await fetch(urls[i], {
    headers: {
      Referer: "https://www.linkedin.com/",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    console.log(`FAIL ${i + 1}: ${response.status}`);
    continue;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const out = join(outDir, `${prefix}-${i + 1}.jpg`);
  writeFileSync(out, buffer);
  console.log(`Saved ${out} (${buffer.length} bytes)`);
}
