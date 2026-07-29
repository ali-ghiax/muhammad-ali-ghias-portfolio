import type { Metadata } from "next";
import { HonorsJsonLd } from "@/components/seo/honors-json-ld";
import { getHonorImageSeoEntries, honorsPageUrl } from "@/lib/honors-seo";
import { siteConfig } from "@/lib/seo";

const honorImages = getHonorImageSeoEntries();

export const metadata: Metadata = {
  title: "Honors & Awards",
  description:
    "Leadership and competition recognition including MLSA awards and ANS 24 logo design winner. Part of the Muhammad Ali Ghias portfolio.",
  keywords: [
    "MLSA Beta recognition",
    "ANS 24 logo design winner",
    "CUSIT awards",
    "Microsoft Learn Student Ambassador",
  ],
  alternates: { canonical: "/honors" },
  openGraph: {
    title: `Honors & Awards - ${siteConfig.name}`,
    description: "Recognition for leadership, design excellence, and Microsoft Learn achievements.",
    url: honorsPageUrl,
    images: honorImages.slice(0, 4).map((image) => ({
      url: image.loc,
      alt: image.caption,
    })),
  },
};

export default function HonorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HonorsJsonLd />
      {children}
    </>
  );
}
