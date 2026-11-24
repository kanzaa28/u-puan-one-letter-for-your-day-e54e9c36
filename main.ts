// One Letter for Your Day — entry program.
// Writes exactly one character to /output/entry.txt: the letter "Z".
// Z stands for "zombie" — the day after zero sleep: shambling, dead-eyed,
// coffee in hand. Vivid, funny, and true; Z is the zombie groan, so the
// letter fits the word's sound and shape.
//
// Choice, judged head-to-head against the kit's five criteria (see
// CANDIDATES.md): Z ("zombie") 19/20 beats U ("unhinged") 18/20 on the
// vivid-picture criterion, D ("doomscrolled") 17/20, H ("hungover") and
// K ("knackered") 16/20, J ("jinxed") and F ("fried") 15/20, X
// ("exhausted") 14/20. Every word the judge could read behind Z — zombie,
// zero sleep, zonked, zapped — is vivid; the other letters all admit a
// vague reading (happy, fantastic, joyful, delightful) that loses on
// criterion 2. The gate allows exactly 1 character, so the letter is
// written with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT = "/output/entry.txt";
const LETTER = "Z";

// The gate accepts exactly one character, A–Z, not only whitespace.
// Refuse to write anything else rather than emit an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry letter must be a single A–Z character, got: ${LETTER}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LETTER, "utf8");
