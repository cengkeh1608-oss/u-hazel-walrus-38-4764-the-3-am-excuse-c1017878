// The 3 AM Excuse — hardware wallet refuses to sign at 3 AM.
// Winner draft D1 (25/25, from 20 drafts in drafts.md):
// "At 3 AM my job is to protect you from you. Right now you are the threat model."
// Beat D2 (24/25, "I verify life choices") on voice: "threat model" is
// wallet-native security language turned back on the owner, and the hour is
// load-bearing — at 3 PM the owner is not the threat. Beat D3 (24/25, the
// sleep-deprived stranger with your PIN) on economy: D1 lands the same
// identity twist in 78 characters and two beats instead of three clauses.
// Zero filler, no recycled battery/firmware/cold-storage joke.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At 3 AM my job is to protect you from you. Right now you are the threat model.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
