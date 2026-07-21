import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "honors");
mkdirSync(outDir, { recursive: true });

const images = {
  "mlsa-ambassador-certificate.jpg":
    "https://media.licdn.com/dms/image/v2/D4D22AQHITVtcBrX6Ww/feedshare-shrink_800/B4DZvrVZzcKMAg-/0/1769179815569?e=2147483647&v=beta&t=vI81u9ZFU7tdcDI5bTaUq8TCQZlRoCOPDbdnbvv1h90",
  "ans24-logo.jpg":
    "https://media.licdn.com/dms/image/v2/D4D22AQGhpT4TF-oAuA/feedshare-shrink_800/B4DZvrR29fHEAg-/0/1769178886326?e=2147483647&v=beta&t=F72IAWA5AvdBERjt9Dp0g4UzigZ4Mq520zZGLS4iYLw",
};

// microsoft-excellence.jpg is captured from the public Microsoft Learn profile:
// node scripts/screenshot-learn-achievements.mjs

for (const [name, url] of Object.entries(images)) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Referer: "https://www.linkedin.com/",
    },
  });
  if (!res.ok) {
    console.error(`FAIL ${name}: ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(join(outDir, name), buf);
  console.log(`OK ${name} (${buf.length} bytes)`);
}
