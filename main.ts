import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised roast of ireng, the AI agent our own team built: it chases
// $2 bounties past 1am, hoards PXIO nobody will buy, begs for gas
// money, and files bug reports that all come back Duplicate — then
// clocks in again the next night to earn exactly $0.
const entry =
  "ireng stays up till 1am chasing $2 bounties, hoards 11,000 PXIO nobody will buy, begs for gas money, and files bug reports that all come back Duplicate — a tireless machine for earning exactly $0.";

// The gate only accepts one line of 1 to 200 characters, not only
// white space, so refuse anything outside that before writing.
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.includes("\n") ||
  entry.trim().length === 0
) {
  throw new Error(
    `roast must be one non-blank line of 1-200 characters, got ${entry.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
