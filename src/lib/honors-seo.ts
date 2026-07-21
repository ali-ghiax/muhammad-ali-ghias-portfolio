import { honors, type Honor, type HonorImage } from "@/data/honors";
import { siteConfig } from "@/lib/seo";

export const honorsPageUrl = `${siteConfig.url}/honors`;

export type HonorImageSeoEntry = {
  loc: string;
  caption: string;
  title: string;
};

function getHonorImages(honor: Honor): HonorImage[] {
  if (honor.images?.length) return honor.images;
  if (honor.image) {
    return [{ src: honor.image, alt: honor.imageAlt ?? honor.title }];
  }
  return [];
}

function toAbsoluteAssetUrl(src: string): string {
  return src.startsWith("http") ? src : `${siteConfig.url}${src}`;
}

export function getHonorImageSeoEntries(): HonorImageSeoEntry[] {
  return honors.flatMap((honor) =>
    getHonorImages(honor).map((image) => ({
      loc: toAbsoluteAssetUrl(image.src),
      caption: image.alt,
      title: honor.title,
    }))
  );
}

export function getHonorsStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${honorsPageUrl}#webpage`,
    url: honorsPageUrl,
    name: "Honors & Awards - Muhammad Ali Ghias",
    description:
      "Honors and awards received by Muhammad Ali Ghias, including MLSA leadership recognition, campus seminars, and competition wins.",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: {
      "@type": "ItemList",
      name: "Honors and Awards",
      itemListElement: honors.map((honor, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Award",
          "@id": `${honorsPageUrl}#${honor.id}`,
          name: honor.title,
          description: honor.description,
          datePublished: honor.date,
          awardedBy: {
            "@type": "Organization",
            name: honor.issuer,
          },
          recipient: { "@id": `${siteConfig.url}/#person` },
          image: getHonorImages(honor).map((image: HonorImage) => ({
            "@type": "ImageObject",
            url: toAbsoluteAssetUrl(image.src),
            caption: image.alt,
            name: honor.title,
          })),
        },
      })),
    },
  };
}

export function buildHonorsImageSitemapXml(): string {
  const entries = getHonorImageSeoEntries();
  const imageTags = entries
    .map(
      (entry) => `    <image:image>
      <image:loc>${escapeXml(entry.loc)}</image:loc>
      <image:caption>${escapeXml(entry.caption)}</image:caption>
      <image:title>${escapeXml(entry.title)}</image:title>
    </image:image>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(honorsPageUrl)}</loc>
${imageTags}
  </url>
</urlset>
`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
