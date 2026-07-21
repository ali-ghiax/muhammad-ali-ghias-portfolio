import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "honors");
mkdirSync(outDir, { recursive: true });

const postUrl =
  "https://www.linkedin.com/posts/mghias_alhamdulillah-microsoftlearn-mlsa-activity-7473530861011800064-uLOR";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1600 } });
await page.goto(postUrl, { waitUntil: "networkidle", timeout: 120000 });
await page.waitForTimeout(3000);

const images = page.locator('img[src*="media.licdn.com"][src*="feedshare"]');
const count = await images.count();
const targetIndex = count > 2 ? 2 : 0;
const img = images.nth(targetIndex);
await img.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await img.screenshot({ path: join(outDir, "president-recognition.jpg") });
console.log(`Saved president-recognition.jpg from slide ${targetIndex + 1} of ${count}`);

await browser.close();
