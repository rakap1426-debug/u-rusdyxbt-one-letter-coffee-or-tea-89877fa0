import { mkdirSync, writeFileSync } from "node:fs";

// One letter, no newline: A = coffee.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A");
