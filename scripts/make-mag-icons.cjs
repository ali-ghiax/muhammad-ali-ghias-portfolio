const sharp = require("sharp");

async function circleFromLogo(size, out) {
  const src = "public/logo-mag.png";
  const meta = await sharp(src).metadata();
  const magH = Math.round(meta.height * 0.58);
  const magBuf = await sharp(src)
    .extract({ left: 0, top: 0, width: meta.width, height: magH })
    .trim({ threshold: 5 })
    .png()
    .toBuffer();

  const pad = Math.round(size * 0.14);
  const inner = size - pad * 2;
  const logo = await sharp(magBuf)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  const base = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();

  const r = size / 2;
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
  );

  await sharp(base)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toFile(out);
}

async function main() {
  await circleFromLogo(512, "public/mag-circle.png");
  await circleFromLogo(180, "src/app/apple-icon.png");
  await circleFromLogo(32, "src/app/icon.png");
  await circleFromLogo(48, "public/icon-48.png");
  await circleFromLogo(192, "public/favicon.png");
  await circleFromLogo(512, "public/icon-512.png");

  // favicon.ico as 32png (browsers accept it)
  await sharp("src/app/icon.png").png().toFile("src/app/favicon.ico");

  // Simple SVG favicon
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#ffffff"/>
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1a9dff"/>
      <stop offset="55%" stop-color="#3a5f9a"/>
      <stop offset="100%" stop-color="#e08a3a"/>
    </linearGradient>
  </defs>
  <text x="16" y="21" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="11" font-weight="900" letter-spacing="-1" fill="url(#g)">MAG</text>
</svg>`;
  require("fs").writeFileSync("src/app/icon.svg", svg);

  console.log("mag circle + favicons ready");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
