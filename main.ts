import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke, split into its two beats: the "fix" claims a null check was
// added, then admits the check itself is null — so the fix nulls
// everything it was meant to protect. Reassembled verbatim below.
const prefix = "fix: null check added";
const punchline = "the check itself is null, so everything is null now";
const text = `${prefix} (${punchline})`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
