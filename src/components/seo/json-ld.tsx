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
    ],
    url: siteConfig.url,
    image: "https://github.com/ali-ghiax.png",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: "Junior Software Engineer & Graphic Designer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "City University of Science and Information Technology",
      alternateName: "CUSIT",
    },
    knowsAbout: [
      "Web Development",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Graphic Design",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Microsoft Technologies",
    ],
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.whatsapp],
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
    ],
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en",
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
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
