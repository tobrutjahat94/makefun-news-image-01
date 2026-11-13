// News Image 01 — entry program.
//
// The image itself (entry.png, sitting next to this script) is the entry:
// one 1024x1024 picture summing up the world news of Friday 13 November
// 2026. This program's only job is to deliver that picture to the
// directory the harness expects, and to refuse if the copy it produced
// is not a usable file.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The picture lives beside this script, wherever the entry is checked out.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(scriptDir, "entry.png");

// The harness tells us where the finished image belongs. When it does not
// say, the documented default is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetImage = join(outputDir, "entry.png");

// Make sure the destination folder exists before we try to write into it.
mkdirSync(outputDir, { recursive: true });

// Deliver the image, byte for byte.
copyFileSync(sourceImage, targetImage);

// A copy we cannot trust is worse than no copy at all, so check what
// actually landed on disk. An empty file means the copy failed silently;
// anything over one mebibyte (1048576 bytes) breaks the entry's size
// limit. Either way, fail loudly instead of handing the harness a
// broken image.
const copiedSize = statSync(targetImage).size;
if (copiedSize === 0) {
  throw new Error(`entry.png copy is empty: ${targetImage}`);
}
if (copiedSize > 1048576) {
  throw new Error(
    `entry.png copy is ${copiedSize} bytes, over the 1048576-byte limit: ${targetImage}`,
  );
}

console.log(`Wrote ${targetImage} (${copiedSize} bytes)`);
