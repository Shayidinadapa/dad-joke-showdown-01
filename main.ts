// Dad Joke Showdown entry — one original dad joke, written fresh.
// The program is fully deterministic: every run writes the exact same
// single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The joke: setup first, punchline ("groan retriever") last.
// Must stay one line, 1-200 characters, and clean.
const JOKE =
  "I taught my dog to fetch my dad jokes. Now he's a groan retriever.";

const MAX_LENGTH = 200;

function validateJoke(joke: string): void {
  if (joke.length < 1 || joke.length > MAX_LENGTH) {
    throw new Error(
      `Joke must be 1-${MAX_LENGTH} characters, got ${joke.length}.`,
    );
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }
}

function writeJoke(joke: string): void {
  validateJoke(joke);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, joke, "utf8");
}

writeJoke(JOKE);
