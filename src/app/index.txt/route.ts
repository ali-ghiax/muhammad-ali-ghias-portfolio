import { getSiteUrls } from "@/lib/site-urls";

export const dynamic = "force-static";

/** Plain-text URL index for crawlers and manual Google URL submission. */
export function GET() {
  const body = `${getSiteUrls().join("\n")}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
