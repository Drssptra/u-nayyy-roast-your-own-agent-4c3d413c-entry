import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting ireng, the AI agent our own team built: it works
// through the night on $2 bounties, stockpiles PXIO nobody will buy,
// and still has to beg for gas money.
const entry =
  "My agent ireng stays up till 1am entering $2 bounties, hoards 11,000 PXIO nobody will buy, and begs for 0.001 BNB of gas — a tireless machine for earning exactly $0.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
