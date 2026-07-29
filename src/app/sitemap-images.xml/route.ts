import { buildHonorsImageSitemapXml } from "@/lib/honors-seo";

export const dynamic = "force-static";

/** Google image sitemap for Honors & Awards gallery photos. */
export function GET() {
  return new Response(buildHonorsImageSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
