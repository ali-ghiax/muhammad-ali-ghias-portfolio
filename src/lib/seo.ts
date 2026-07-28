export const siteConfig = {
  name: "Muhammad Ali Ghias",
  shortName: "MAG",
  title: "Muhammad Ali Ghias | Software Engineer & Graphic Designer",
  description:
    "Muhammad Ali Ghias (Ali Ghias / Ghias) — official portfolio homepage. Software Engineer, Graphic Designer, and Lead Microsoft Learn Student Ambassador at CUSIT in Peshawar, Pakistan. Founder of Cyber Tools.",
  url: "https://www.muhammadalighias.me",
  locale: "en_US",
  /** Full portrait used for WhatsApp / OG / Twitter / Google search previews */
  ogImage: "https://www.muhammadalighias.me/og-image.png",
  avatarImage: "https://www.muhammadalighias.me/og-image.png",
  email: "muhammadalighias@gmail.com",
  phone: "+92 326 5763041",
  location: {
    city: "Peshawar",
    region: "KPK",
    country: "Pakistan",
  },
  github: "https://github.com/ali-ghiax",
  linkedin: "https://www.linkedin.com/in/muhammad-ali-ghias/",
  instagram: "https://www.instagram.com/ali_ghiax/",
  tiktok: "https://www.tiktok.com/@ali_ghiax",
  whatsapp:
    "https://wa.me/923265763041?text=Assalamualaikum%20Ghias%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  keywords: [
    "Muhammad Ali Ghias",
    "muhammad-ali-ghias",
    "Muhammad Ali Ghias portfolio",
    "Ali Ghias",
    "ali ghias",
    "Ali Ghias developer",
    "Ali Ghias designer",
    "MAG",
    "MAG portfolio",
    "Ghias",
    "ghias",
    "Ghias portfolio",
    "ali-ghiax",
    "Software Engineer",
    "Graphic Designer",
    "Web Developer Peshawar",
    "MLSA CUSIT",
    "Microsoft Learn Student Ambassador",
    "Freelance Graphic Designer Pakistan",
    "React Developer",
    "Next.js Developer",
    "CUSIT",
    "Peshawar",
  ],
} as const;

export const sitePages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
] as const;

/** Site sections remain public to visitors but are not submitted for Google indexing. */
export const noIndexSitePaths = [
  "/about",
  "/experience",
  "/projects",
  "/certifications",
  "/skills",
  "/honors",
  "/contact",
  "/blog",
  "/privacy",
  "/terms",
] as const;
