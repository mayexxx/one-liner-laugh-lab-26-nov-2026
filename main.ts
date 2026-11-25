import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "My wife told me to stop impersonating a flamingo, so I had to put my foot down.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 79 || content.includes("\n") || content.includes("\r") || content !== "My wife told me to stop impersonating a flamingo, so I had to put my foot down.") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
