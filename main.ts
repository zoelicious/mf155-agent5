import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke in three beats: the "fix" claims a null check was added, then
// the check itself turns out null, then everything is null. Reassembled
// verbatim below — output must stay byte-identical to the assigned text.
const beats = [
  "fix: null check added",
  "the check itself is null,",
  "so everything is null now",
];
const text = `${beats[0]} (${beats[1]} ${beats[2]})`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
