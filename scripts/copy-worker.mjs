import { mkdir, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const src = join(root, "src", "worker.js");
const destDir = join(root, "dist-worker");
const dest = join(destDir, "index.js");

await mkdir(destDir, { recursive: true });
await copyFile(src, dest);

console.log("Copied worker → dist-worker/index.js");