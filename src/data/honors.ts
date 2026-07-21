export type Honor = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: "leadership" | "competition" | "achievement";
  image?: string;
  imageAlt?: string;
  imageGallery?: string[];
};

export const honors: Honor[] = [
  {
    id: "mlsa-beta",
    title: "Microsoft Learn Student Ambassador – Beta",
    issuer: "Microsoft",
    date: "Feb 2025",
    description:
      "Nominated and recognized by Microsoft as a Beta Student Ambassador for leading the MLSA CUSIT Chapter, mentoring students, and driving community engagement through workshops, events, and learning initiatives.",
    category: "leadership",
    image: "/honors/mlsa-ambassador-certificate.jpg",
    imageAlt: "2026 Microsoft Student Ambassador certificate issued to Muhammad Ali Ghias",
  },
  {
    id: "microsoft-excellence",
    title: "Microsoft Excellence – 38 Trophies",
    issuer: "Microsoft",
    date: "Jan 2025",
    description:
      "Recognized by Microsoft Learn for consistent performance, skill mastery, and achievement across learning paths.",
    category: "achievement",
    imageGallery: [
      "/honors/trophy-1.svg",
      "/honors/trophy-2.svg",
      "/honors/trophy-3.svg",
      "/honors/trophy-4.svg",
    ],
    imageAlt: "Microsoft Learn learning path trophies earned by Muhammad Ali Ghias",
  },
  {
    id: "ans24-logo",
    title: "Winner – Logo Designing | ANS 24 (Across KPK)",
    issuer: "Abasyn University",
    date: "Dec 2024",
    description:
      "Secured 1st position in the Logo Designing competition at ANS 24, a province-level event organized by Abasyn University Peshawar, competing with participants from across Khyber Pakhtunkhwa and showcasing excellence in branding and visual identity design.",
    category: "competition",
    image: "/honors/ans24-logo.jpg",
    imageAlt: "Muhammad Ali Ghias holding the ANS 24 logo design 1st position trophy and certificate",
  },
];

export const linkedInHonorsUrl = "https://www.linkedin.com/in/mghias/details/honors/";
