import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, written fresh for the Dad Joke Showdown bounty.
// The program is fully deterministic: every run writes the exact same
// single line to /output/entry.txt.
const JOKE =
  "I taught my dog to fetch my dad jokes. Now he's a groan retriever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
