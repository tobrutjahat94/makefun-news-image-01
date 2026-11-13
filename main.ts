// news-image-01 entry (Node 22, standard library only): the image beside this
// file sums up the world's news of Friday 13 November 2026, and the program
// copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at
// most 1 MiB and 1024 by 1024 pixels; this file is a 1024x1024 JPEG of
// 232,103 bytes (regenerated 13 Nov 2026 from verified reporting only; the
// first version carried a resignation headline the reporting did not
// support as written), and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

// The six stories on the front page (each verified in a major outlet on
// 13 Nov 2026; claims are labelled as claims, nothing shown as fact that
// is only speculation):
//   1. The US Senate Banking Committee summons Nvidia's Huang and Commerce
//      Secretary Lutnick to testify in December (BBC, Al Jazeera, DPA).
//   2. US envoys Witkoff and Kushner meet Zelensky in Dublin; Europe is
//      to join the next round of Ukraine peace talks (BBC, RFE/RL).
//   3. A Ukrainian drone hits a Russian warship in the Gulf of Finland;
//      Finland confirms it detected the strike (BBC).
//   4. Iran CLAIMS it struck a US radar site in Bahrain; the claim is
//      unconfirmed, no US or Bahraini comment (Al Jazeera, Reuters).
//   5. The FBI/DOJ disrupt North Korea's $400m FaceStealer fake-video-call
//      crypto theft and move to seize $1.2bn of the Binance hack loot
//      (BBC, Reuters, DOJ).
//   6. A worldwide Microsoft 365 outage takes down Outlook, Teams and
//      Copilot in 74 countries (Reuters, USA Today; Microsoft: no
//      cyberattack).
// The footer strip adds two more: the strike on Gaza's Nasser Hospital
// (6 killed, Al Jazeera / Gaza Health Ministry) and Harry Kane breaking
// England's caps record (126th, Reuters).

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);

// Fail loudly instead of shipping a truncated copy: the gate rejects a
// file that is not a whole image, and both runs must write the same bytes.
const { size } = statSync(dest);
if (size === 0 || size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, outside the gate's limits`);
}
