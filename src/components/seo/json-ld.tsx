import { siteConfig } from "@/lib/seo";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: [
      "Ali Ghias",
      "MAG",
      "Ghias",
      "muhammad-ali-ghias",
      "ali-ghiax",
      "Muhammad Ali Ghias MAG",
      "Muhammad Ali Ghias MLSA",
    ],
    url: siteConfig.url,
    image: {
      "@type": "ImageObject",
      url: siteConfig.avatarImage,
      caption: "Muhammad Ali Ghias — Software Engineer and Graphic Designer",
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: [
      "Software Engineer",
      "Graphic Designer",
      "Microsoft Learn Student Ambassador",
      "MLSA Campus Lead CUSIT",
    ],
    description:
      "Muhammad Ali Ghias (Ali Ghias / Ghias) is a Software Engineer, Graphic Designer, and Lead Microsoft Learn Student Ambassador at CUSIT in Peshawar, Pakistan. Founder of Cyber Tools. Recognized by Microsoft as an MLSA Beta ambassador and 1st-place ANS 24 logo design winner across KPK.",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "City University of Science and Information Technology",
      alternateName: "CUSIT",
      url: "https://www.cusit.edu.pk/",
    },
    affiliation: [
      {
        "@type": "Organization",
        name: "Microsoft Learn Student Ambassadors",
        alternateName: "MLSA",
      },
      {
        "@type": "Organization",
        name: "MLSA CUSIT Chapter",
      },
      {
        "@type": "Organization",
        name: "Cyber Tools",
        url: "https://cyber-menta-tools.vercel.app/",
      },
    ],
    knowsAbout: [
      "Web Development",
      "Full-stack development",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Graphic Design",
      "Logo Design",
      "Brand Identity",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Microsoft Technologies",
      "Microsoft Azure",
      "Microsoft Learn Student Ambassadors",
      "Student leadership",
      "Campus tech communities",
    ],
    award: [
      "President Recognition Award — Students' Life Center (SLC), CUSIT (Jun 2026)",
      "Microsoft Learn Student Ambassador – Beta (Feb 2025)",
      "Winner – Logo Designing | ANS 24 Across KPK — Abasyn University (Dec 2024)",
      "Guest Speaker — Northern University MLSA seminar (Mar 2026)",
      "Campus Lead Seminar recognition — CUSIT Microsoft Technologies seminar (Feb 2026)",
    ],
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      "https://www.linkedin.com/in/mghias/",
      "https://www.credly.com/users/muhammad-ali-ghias",
      siteConfig.instagram,
      siteConfig.tiktok,
      siteConfig.whatsapp,
      "https://cyber-menta-tools.vercel.app/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} Portfolio`,
    alternateName: [
      "MAG Portfolio",
      "Ali Ghias Portfolio",
      "Ghias Portfolio",
      "muhammad-ali-ghias",
      "Muhammad Ali Ghias official website",
    ],
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en",
    about: { "@id": `${siteConfig.url}/#person` },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description:
      "Official portfolio and professional profile of Muhammad Ali Ghias — Software Engineer, Graphic Designer, and MLSA Campus Lead at CUSIT.",
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}
