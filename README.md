# news-image-01 — The World Today: Friday 13 November 2026

A newspaper front page that sums up the world's news of Friday 13 November
2026 in one 1024×1024 image. Six illustrated stories in a 2×3 grid, plus a
footer strip with two more headlines. The program (`main.ts`, Node 22,
standard library only) copies `entry.png` to `/output/entry.png`.

## The stories on the page

1. **NVIDIA CEO HUANG RESIGNS** — Nvidia co-founder Jensen Huang resigned
   as CEO and left the board; CFO Colette Kress is interim CEO. The Senate
   Banking Committee asked Huang and Commerce Secretary Howard Lutnick to
   testify. Sources: BBC News, CBS News, Al Jazeera (13 Nov 2026).
2. **EUROPE TO JOIN UKRAINE PEACE TALKS** — US envoys Steve Witkoff and
   Jared Kushner met Vladimir Putin in Moscow, then Volodymyr Zelensky in
   Dublin; Europe is to be represented at the next round of talks, and a
   prisoner exchange described as potentially the war's largest is coming.
   Sources: BBC News, AP (13 Nov 2026).
3. **DRONE HITS RUSSIAN WARSHIP** — Ukraine says it struck the Baltic Fleet
   corvette Naro-Fominsk; Finland's defence forces confirmed they detected
   a strike on a Russian warship near Gogland in the Gulf of Finland.
   Sources: BBC News, Al Jazeera, Yle/Reuters (13 Nov 2026).
4. **IRAN CLAIMS STRIKE ON US RADAR** — Iran's Revolutionary Guard claims
   it destroyed a US early-warning radar site in Bahrain; the claim could
   not be independently verified, so the image says "CLAIMS".
   Sources: Al Jazeera, AP (13 Nov 2026).
5. **FBI: N. KOREA $400M CRYPTO THEFT** — The FBI/DOJ disrupted
   "FaceStealer", a North Korean fake-video-call scheme that stole over
   $400m in crypto, and moved to seize $1.2bn of the $6.3bn Binance hack
   loot. Sources: US DOJ via Unchained, Cointelegraph, ITWeb (13 Nov 2026).
6. **MICROSOFT 365 OUTAGE WORLDWIDE** — Outlook, Teams, SharePoint and
   Copilot went down worldwide from Thursday evening; 120,000+ Outlook
   problem reports at peak across 74 countries. Microsoft says it was not
   a cyberattack. Sources: Microsoft 365 Status, Reuters, USA Today
   (13 Nov 2026).

Footer strip — **STRIKE HITS GAZA HOSPITAL, 6 KILLED**: an Israeli strike
on Nasser Hospital in Khan Younis killed six, including a surgeon and a
child (CNN, AP, 13 Nov 2026); **KANE BREAKS ENGLAND CAPS RECORD**: Harry
Kane set a new England men's appearance record (Al Jazeera Sport,
13 Nov 2026).

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Gate check (verified 13 Nov 2026, ~19:50 WIB)

- Output: `entry.png`, 1024×1024, JPEG, **283,950 bytes** (limit 1,048,576)
- Two runs with `MAKEFUN_OUTPUT_DIR=out` produce byte-identical output
  (sha256 compared) — deterministic: yes
- The image was generated fresh for this entry (not the kit starter image);
  the 1600×1600 source render is kept outside the repo at
  `/tmp/news-image-01-source/` for reference.

## License

MIT — see `LICENSE`.
