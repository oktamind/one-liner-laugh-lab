// One-Liner Laugh Lab: the robot vacuum's excuse after eating a sock.
// Angle: deadpan corporate promotion — the sock was not eaten, it was
// promoted to lint (a lateral move). No setup, no trailing newline,
// so the file holds exactly the 76-character line the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't eat your sock \u2014 I promoted it to lint. HR called it a lateral move.";

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  line,
  "utf8",
);
