import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(
  process.env.USERPROFILE,
  ".cursor/projects/c-Users-muham-OneDrive-Desktop-Portfolio/agent-tools/5814b54a-1dc1-4035-8c67-cc39ef1f7dc4.txt"
);
const raw = fs.readFileSync(jsonPath, "utf8");
const j = JSON.parse(raw);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatPeriod(d) {
  const [y, m] = d.split("-");
  return `${months[parseInt(m, 10) - 1]} ${y}`;
}

function issuerName(summary) {
  const match = summary.match(/issued by (.+?)(?: and authorized by|$)/i);
  return match ? match[1] : summary;
}

function desc(text) {
  if (!text) return "";
  const s = text.replace(/\s+/g, " ").trim();
  return s.length > 160 ? `${s.slice(0, 157)}...` : s;
}

const badges = j.data.map((b) => ({
  id: b.id,
  title: b.badge_template.name,
  institution: issuerName(b.issuer?.summary || "Credly"),
  period: formatPeriod(b.issued_at_date),
  description: desc(b.badge_template.description),
  image: b.badge_template.image_url,
  url: `https://www.credly.com/badges/${b.id}`,
}));

const lines = [
  "export interface CredlyBadge {",
  "  id: string;",
  "  title: string;",
  "  institution: string;",
  "  period: string;",
  "  description: string;",
  "  image: string;",
  "  url: string;",
  "}",
  "",
  'export const credlyProfileUrl = "https://www.credly.com/users/muhammad-ali-ghias";',
  "",
  "export const credlyBadges: CredlyBadge[] = [",
  ...badges.map(
    (b) =>
      `  ${JSON.stringify(b, null, 2)
        .split("\n")
        .map((line, i) => (i === 0 ? line : `  ${line}`))
        .join("\n")},`
  ),
  "];",
  "",
];

fs.writeFileSync(path.join(__dirname, "../src/data/credly-badges.ts"), lines.join("\n"));
console.log(`wrote ${badges.length} badges`);
