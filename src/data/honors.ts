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
    id: "northern-university-speaker",
    title: "Guest Speaker – Northern University (NU)",
    issuer: "Northern University",
    date: "Mar 2026",
    description:
      "Invited as a guest speaker for an MLSA-led seminar at Northern University, covering how to become a Microsoft Learn Student Ambassador, cloud computing with Microsoft Azure, LinkedIn personal branding, and a hands-on portfolio deployment workshop on Azure Web Apps for students across the campus tech community.",
    category: "leadership",
    images: [
      {
        src: "/honors/northern-university-1.jpg",
        alt: "Muhammad Ali Ghias with the MLSA team at Northern University",
      },
      {
        src: "/honors/northern-university-2.jpg",
        alt: "Muhammad Ali Ghias speaking at the Northern University tech seminar",
      },
      {
        src: "/honors/northern-university-3.jpg",
        alt: "Muhammad Ali Ghias presenting at Northern University on Microsoft Learn Student Ambassadors and Azure",
      },
      {
        src: "/honors/northern-university-4.jpg",
        alt: "Muhammad Ali Ghias leading a seminar session at Northern University",
      },
    ],
  },
  {
    id: "cusit-campus-lead-seminar",
    title: "Campus Lead Seminar – CUSIT (Microsoft Technologies)",
    issuer: "City University of Science & Information Technology (CUSIT)",
    date: "Feb 2026",
    description:
      "Honored to conduct a Microsoft Technologies seminar as a Microsoft Learn Student Ambassador and Campus Lead of the MLSA CUSIT Chapter. 60+ students participated and received Participation Certificates, and I was humbled to receive a Certificate and Shield of Appreciation from the respected coordinators, Registrar, and Dean.",
    category: "leadership",
    images: [
      {
        src: "/honors/campus-lead-seminar-1.jpg",
        alt: "Muhammad Ali Ghias speaking at the Microsoft Technologies seminar at City University (CUSIT)",
      },
      {
        src: "/honors/campus-lead-seminar-2.jpg",
        alt: "Muhammad Ali Ghias with the Microsoft Technologies seminar certificate moments at CUSIT",
      },
      {
        src: "/honors/campus-lead-seminar-3.jpg",
        alt: "Muhammad Ali Ghias receiving the Seminar Certificate and appreciation at CUSIT",
      },
      {
        src: "/honors/campus-lead-seminar-4.jpg",
        alt: "Muhammad Ali Ghias presenting Microsoft Technologies seminar appreciation certificate with coordinators at CUSIT",
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
    id: "ans24-logo",
    title: "Winner – Logo Designing | ANS 24 (Across KPK)",
    issuer: "Abasyn University",
    date: "Dec 2024",
    description:
      "Secured 1st position in the Logo Designing competition at ANS 24, a province-level event organized by Abasyn University Peshawar, competing with participants from across Khyber Pakhtunkhwa and showcasing excellence in branding and visual identity design.",
    category: "competition",
    images: [
      {
        src: "/honors/ans24-logo-1.png",
        alt: "Muhammad Ali Ghias with the ANS 24 Logo Designing 1st position achievement poster",
      },
      {
        src: "/honors/ans24-logo-2.png",
        alt: "Muhammad Ali Ghias receiving the ANS 24 Logo Designing 1st position award",
      },
      {
        src: "/honors/ans24-logo-3.png",
        alt: "Muhammad Ali Ghias as the ANS 24 Logo Design Winner 2024",
      },
      {
        src: "/honors/ans24-logo-4.png",
        alt: "Muhammad Ali Ghias holding the ANS 24 Logo Designing 1st position trophy and certificate",
      },
    ],
  },
];

export const linkedInHonorsUrl = "https://www.linkedin.com/in/mghias/details/honors/";
