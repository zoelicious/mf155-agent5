import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke in three parts, split at different points: the claim, the
// parenthetical setup, and the punchline. Reassembled verbatim below —
// output must stay byte-identical to the assigned text.
const head = "fix: null";
const mid = "check added (the check itself is null,";
const tail = "so everything is null now)";
const text = `${head} ${mid} ${tail}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
