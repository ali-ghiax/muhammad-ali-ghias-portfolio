const sharp = require("sharp");
const fs = require("fs");

async function main() {
  const src = "public/logo-mag.png";
  const meta = await sharp(src).metadata();
  console.log("logo", meta.width, meta.height, meta.hasAlpha);

  const magH = Math.round(meta.height * 0.58);
  const magBuf = await sharp(src)
    .extract({ left: 0, top: 0, width: meta.width, height: magH })
    .trim({ threshold: 5 })
    .png()
    .toBuffer();

  async function makeRoundedAvatar(size, out) {
    const pad = Math.round(size * 0.14);
    const inner = size - pad * 2;
    const logo = await sharp(magBuf)
      .resize(inner, inner, {
        fit: "contain",
        background: { r: 248, g: 247, b: 244, alpha: 1 },
      })
      .png()
      .toBuffer();

    const base = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 248, g: 247, b: 244, alpha: 1 },
      },
    })
      .composite([{ input: logo, gravity: "center" }])
      .png()
      .toBuffer();

    const r = size / 2;
    const circle = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
    );

    await sharp(base)
      .composite([{ input: circle, blend: "dest-in" }])
      .png()
      .toFile(out);
  }

  await makeRoundedAvatar(512, "public/avatar-mag.png");
  await makeRoundedAvatar(1200, "public/og-image.png");

  const avatar512 = await sharp("public/avatar-mag.png").resize(420, 420).png().toBuffer();
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 248, g: 247, b: 244 },
    },
  })
    .composite([{ input: avatar512, gravity: "center" }])
    .png()
    .toFile("public/og-banner.png");

  console.log("written", fs.statSync("public/avatar-mag.png").size);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
