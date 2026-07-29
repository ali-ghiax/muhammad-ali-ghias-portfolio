import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const disallowedPaths = [
  "/Muhammad_Ali_Ghias_Resume.pdf",
  "/*.pdf$",
  "/GOOGLE_INDEXING.txt",
  "/api/",
];

const searchAndAiBots = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: searchAndAiBots.map((userAgent) => ({
      userAgent,
      allow: ["/", "/llms.txt", "/llms-full.txt"],
      disallow: disallowedPaths,
    })),
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/sitemap-images.xml`,
    ],
    host: siteConfig.url,
  };
}
