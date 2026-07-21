export type Honor = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: "leadership" | "competition" | "achievement";
  image?: string;
  imageAlt?: string;
};

export const honors: Honor[] = [
  {
    id: "president-recognition",
    title: "President Recognition Award",
    issuer: "Students' Life Center (SLC), CUSIT",
    date: "Jun 2026",
    description:
      "Recognized for serving as President of the MLSA CUSIT society — building the chapter from the ground up into an active student community through leadership, mentorship, and campus tech initiatives.",
    category: "leadership",
    image: "/honors/president-recognition.jpg",
    imageAlt:
      "President Recognition Award from Students' Life Center presented to Muhammad Ali Ghias",
  },
  {
    id: "mlsa-beta",
    title: "Microsoft Learn Student Ambassador – Beta",
    issuer: "Microsoft",
    date: "Feb 2025",
    description:
      "Nominated and recognized by Microsoft as a Beta Student Ambassador for leading the MLSA CUSIT Chapter, mentoring students, and driving community engagement through workshops, events, and learning initiatives.",
    category: "leadership",
    image: "/honors/mlsa-ambassador-certificate.jpg",
    imageAlt: "Microsoft Student Ambassador certificate issued to Muhammad Ali Ghias",
  },
  {
    id: "microsoft-excellence",
    title: "Microsoft Excellence – 38 Trophies",
    issuer: "Microsoft",
    date: "Jan 2025",
    description:
      "Recognized by Microsoft Learn for consistent performance, skill mastery, and achievement across learning paths.",
    category: "achievement",
    image: "/honors/microsoft-excellence.jpg",
    imageAlt:
      "Microsoft Learn achievements profile showing learning path trophies earned by Muhammad Ali Ghias",
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
