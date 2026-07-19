import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

try {
  readFileSync(0, "utf8");
} catch {
  // no stdin
}

function run(command) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function safeStatus() {
  try {
    return run("git status --porcelain");
  } catch {
    return "";
  }
}

/** Build a short "why" commit message from staged paths. */
function commitMessageFromFiles(staged) {
  const files = staged
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean);
  const joined = files.join(" ");

  if (/contact|toast/i.test(joined)) {
    return "Show a success toast after contact form messages are sent.";
  }
  if (/page\.tsx|portfolio\.ts|cyber-tools/i.test(joined) && /venture|cyber/i.test(joined)) {
    return "Add Cyber Tools founder section and polish home page branding.";
  }
  if (/seo\.ts|layout\.tsx|og-|avatar|webmanifest|manifest/i.test(joined)) {
    return "Fix share preview image, SEO titles, and remove install prompt.";
  }
  if (/blog/i.test(joined)) {
    return "Update blog feed and related page copy.";
  }
  if (/globals\.css/i.test(joined)) {
    return "Adjust site theme and color utilities.";
  }
  if (files.length === 1) {
    return `Update ${files[0]} for portfolio improvements.`;
  }
  if (files.length <= 4) {
    return `Update ${files.map((f) => f.split("/").pop()).join(", ")} for portfolio improvements.`;
  }
  return `Improve portfolio across ${files.length} files.`;
}

try {
  const status = safeStatus();
  if (!status) {
    process.stdout.write("{}\n");
    process.exit(0);
  }

  const blocked = status
    .split("\n")
    .map((line) => line.slice(3).trim())
    .some(
      (file) =>
        file === ".env" ||
        file.startsWith(".env.") ||
        file.endsWith(".pem") ||
        file.includes("credentials")
    );

  if (blocked) {
    process.stdout.write("{}\n");
    process.exit(0);
  }

  run("git add -A");

  const staged = run("git diff --cached --name-only");
  if (!staged) {
    process.stdout.write("{}\n");
    process.exit(0);
  }

  const message = commitMessageFromFiles(staged);
  // Escape double quotes for the shell
  const safeMessage = message.replace(/"/g, '\\"');
  run(`git commit -m "${safeMessage}"`);
  run("git push origin HEAD");
} catch {
  // Fail open — do not block the agent if git/network fails.
}

process.stdout.write("{}\n");
process.exit(0);
