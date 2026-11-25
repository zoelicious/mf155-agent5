import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "fix: null check added (the check itself is null, so everything is null now)";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
