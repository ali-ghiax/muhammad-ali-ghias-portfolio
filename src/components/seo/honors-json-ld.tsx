import { getHonorsStructuredData } from "@/lib/honors-seo";

export function HonorsJsonLd() {
  const structuredData = getHonorsStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
