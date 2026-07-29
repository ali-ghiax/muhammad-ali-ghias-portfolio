import type { MetadataRoute } from "next";
import { siteConfig, sitePages } from "@/lib/seo";

/** Primary portfolio pages — homepage priority 1, others lower so name search prefers home. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePages.map((page) => ({
    url: `${siteConfig.url}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
