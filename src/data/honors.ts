export type HonorImage = {
  src: string;
  alt: string;
};

export type Honor = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: "leadership" | "competition" | "achievement";
  image?: string;
  imageAlt?: string;
  images?: HonorImage[];
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
    images: [
      {
        src: "/honors/president-recognition-1.png",
        alt: "Muhammad Ali Ghias at the MLSA President Recognition Award ceremony at SLC X Creative Awards",
      },
      {
        src: "/honors/president-recognition-2.png",
        alt: "Muhammad Ali Ghias receiving the MLSA President Recognition Award on stage",
      },
      {
        src: "/honors/president-recognition-3.png",
        alt: "Muhammad Ali Ghias receiving the MLSA President Recognition Award at SLC X Creative Awards",
      },
      {
        src: "/honors/president-recognition-4.png",
        alt: "Muhammad Ali Ghias holding the MLSA President Recognition Award trophy",
      },
    ],
  },
  {
    id: "mlsa-beta",
    title: "Microsoft Learn Student Ambassador – Beta",
    issuer: "Microsoft",
    date: "Feb 2025",
    description:
      "Nominated and recognized by Microsoft as a Beta Student Ambassador for leading the MLSA CUSIT Chapter, mentoring students, and driving community engagement through workshops, events, and learning initiatives.",
    category: "leadership",
    images: [
      {
        src: "/honors/mlsa-beta-1.png",
        alt: "Muhammad Ali Ghias with the Microsoft Learn Student Ambassador Beta badge and certificate",
      },
      {
        src: "/honors/mlsa-beta-2.png",
        alt: "Muhammad Ali Ghias holding the Microsoft Learn Student Ambassador Beta water bottle",
      },
      {
        src: "/honors/mlsa-beta-3.png",
        alt: "Muhammad Ali Ghias with the Microsoft Learn Student Ambassador Beta welcome kit",
      },
      {
        src: "/honors/mlsa-beta-4.png",
        alt: "Muhammad Ali Ghias holding the Microsoft Learn Student Ambassador Beta milestone pin",
      },
    ],
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
