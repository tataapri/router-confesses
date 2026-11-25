import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I cut the stream at the climax because the killer was about to confess, and after ten years blinking in the corner, I wanted to be the one with a secret.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
