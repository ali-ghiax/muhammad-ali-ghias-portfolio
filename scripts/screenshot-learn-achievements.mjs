import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "honors");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });

await page.goto("https://learn.microsoft.com/en-us/users/muhammadalighias/achievements", {
  waitUntil: "domcontentloaded",
  timeout: 120000,
});

await page.waitForTimeout(5000);

const accept = page.locator("button:has-text('Accept'), button:has-text('Accept all')");
if (await accept.count()) {
  await accept.first().click({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(2000);
}

await page.waitForSelector("text=Trophies", { timeout: 60000 }).catch(() => {});
const trophiesTab = page.locator("button:has-text('Trophies'), a:has-text('Trophies')").first();
if (await trophiesTab.count()) {
  await trophiesTab.click({ timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(3000);
}

await page.screenshot({
  path: join(outDir, "microsoft-excellence.jpg"),
  fullPage: false,
});

await browser.close();
console.log("Saved microsoft-excellence.jpg");
