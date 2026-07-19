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

  run('git commit -m "Update portfolio site."');
  run("git push origin HEAD");
} catch {
  // Fail open — do not block the agent if git/network fails.
}

process.stdout.write("{}\n");
process.exit(0);
