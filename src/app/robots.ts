import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/Muhammad_Ali_Ghias_Resume.pdf",
          "/*.pdf$",
          "/GOOGLE_INDEXING.txt",
          "/api/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/Muhammad_Ali_Ghias_Resume.pdf",
          "/*.pdf$",
          "/GOOGLE_INDEXING.txt",
          "/api/",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: [
          "/Muhammad_Ali_Ghias_Resume.pdf",
          "/*.pdf$",
          "/GOOGLE_INDEXING.txt",
          "/api/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/Muhammad_Ali_Ghias_Resume.pdf",
          "/*.pdf$",
          "/GOOGLE_INDEXING.txt",
          "/api/",
        ],
      },
    ],
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/sitemap-images.xml`,
    ],
    host: siteConfig.url,
  };
}
