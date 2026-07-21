import type { Metadata } from "next";
import { HonorsJsonLd } from "@/components/seo/honors-json-ld";
import { getHonorImageSeoEntries, honorsPageUrl } from "@/lib/honors-seo";
import { siteConfig } from "@/lib/seo";

const honorImages = getHonorImageSeoEntries();

export const metadata: Metadata = {
  title: "Honors & Awards",
  description:
    "Honors and awards of Muhammad Ali Ghias (Ali Ghias / Ghias): President Recognition Award, Northern University guest speaker, CUSIT Campus Lead seminar, Microsoft Learn Student Ambassador Beta, and ANS 24 Logo Designing winner.",
  keywords: [
    "Muhammad Ali Ghias honors",
    "Ali Ghias awards",
    "MLSA Beta recognition",
    "ANS 24 logo design winner",
    "muhammad-ali-ghias",
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
