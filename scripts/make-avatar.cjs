const sharp = require("sharp");

async function main() {
  const src = "public/profile-photo.png";
  const meta = await sharp(src).metadata();
  console.log("photo", meta.width, meta.height);

  async function round(size, out) {
    const squared = await sharp(src)
      .resize(size, size, { fit: "cover", position: "attention" })
      .png()
      .toBuffer();
    const r = size / 2;
    const circle = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
    );
    await sharp(squared)
      .composite([{ input: circle, blend: "dest-in" }])
      .png()
      .toFile(out);
  }

  await round(512, "public/avatar-mag.png");
  await round(1200, "public/og-image.png");

  const av = await sharp("public/avatar-mag.png").resize(420, 420).png().toBuffer();
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 248, g: 247, b: 244 },
    },
  })
    .composite([{ input: av, gravity: "center" }])
    .png()
    .toFile("public/og-banner.png");

  await sharp(src)
    .resize(800, 800, { fit: "cover", position: "attention" })
    .jpeg({ quality: 88 })
    .toFile("public/profile-photo.jpg");

  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
