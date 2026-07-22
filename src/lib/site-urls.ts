import { siteConfig, sitePages } from "@/lib/seo";

/** Primary portfolio page URLs only (for text sitemaps / indexing helpers). */
export function getSiteUrls(): string[] {
  return sitePages.map(
    (page) => `${siteConfig.url}${page.path === "/" ? "" : page.path}`
  );
}
