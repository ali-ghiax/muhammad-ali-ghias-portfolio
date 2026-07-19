const sharp = require("sharp");
const fs = require("fs");

async function main() {
  const src = "public/profile-photo.png";

  await sharp(src)
    .resize(900, 900, { fit: "cover", position: "attention" })
    .jpeg({ quality: 92 })
    .toFile("public/about-photo.jpg");

  await sharp(src)
    .resize(900, 900, { fit: "cover", position: "attention" })
    .jpeg({ quality: 92 })
    .toFile("public/hero-photo.jpg");

  async function roundPng(size, out) {
    const squared = await sharp(src)
      .resize(size, size, { fit: "cover", position: "attention" })
      .toBuffer();
    const r = size / 2;
    const mask = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
    );
    await sharp(squared)
      .composite([{ input: mask, blend: "dest-in" }])
      .png()
      .toFile(out);
  }

  await roundPng(512, "public/avatar-round.png");
  await roundPng(180, "src/app/apple-icon.png");
  await roundPng(32, "src/app/icon.png");
  await roundPng(48, "public/icon-48.png");
  await roundPng(192, "public/favicon.png");
  await roundPng(512, "public/icon-512.png");

  await sharp("src/app/icon.png").png().toFile("src/app/favicon.ico");

  const tiny = await sharp("src/app/icon.png").resize(32, 32).png().toBuffer();
  const b64 = tiny.toString("base64");
  fs.writeFileSync(
    "src/app/icon.svg",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><clipPath id="c"><circle cx="16" cy="16" r="16"/></clipPath></defs><image href="data:image/png;base64,${b64}" width="32" height="32" clip-path="url(#c)"/></svg>`
  );

  console.log("hero photo + round favicons ready");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
