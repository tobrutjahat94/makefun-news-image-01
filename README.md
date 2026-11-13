# News Image 01 — Friday 13 November 2026, in one picture

## What this entry is

A single 1024x1024 image that sums up the world news of Friday
13 November 2026. The image is `entry.png` (232,103 bytes). The program
in `main.ts` does one thing: it copies `entry.png` into the output
directory the harness asks for (`$MAKEFUN_OUTPUT_DIR`, or `/output` by
default) and checks the copy is a real, non-empty file under the
1 MiB limit.

## The stories in the picture

Every item below was checked against its source before it went into the
image. Where a story is only a claim, the image says so — nothing that
is merely alleged or speculated is presented as an established fact.

1. **Nvidia's chief summoned to Washington.** The US Senate Banking
   Committee has called Nvidia CEO Jensen Huang and Commerce Secretary
   Howard Lutnick to testify in December. Sources: BBC, Al Jazeera, DPA.
2. **Ukraine peace talks move to Dublin.** US envoys Steve Witkoff and
   Jared Kushner met President Zelensky in Dublin, and European
   countries are set to join the next round of talks. Sources: BBC,
   RFE/RL.
3. **Ukrainian drone hits a Russian warship.** A Ukrainian drone struck
   a Russian warship in the Gulf of Finland, and Finland confirmed it
   had detected the strike. Source: BBC.
4. **Iran says it hit a US radar site — unconfirmed.** Iran claims it
   struck a US radar installation in Bahrain. This is Iran's claim
   only: it has not been confirmed, and neither the US nor Bahrain has
   commented on it. Sources: Al Jazeera, Reuters.
5. **US cracks down on North Korean crypto theft.** The FBI and the
   Department of Justice disrupted North Korea's FaceStealer scheme —
   fake video calls used to steal about $400 million in crypto — and
   moved to seize $1.2 billion linked to the Binance hack.
   Sources: BBC, Reuters, US Department of Justice.
6. **Microsoft 365 goes down worldwide.** A global outage knocked out
   Outlook, Teams and Copilot in 74 countries. Microsoft said there
   was no cyberattack behind it. Sources: Reuters, USA Today.
7. **Strike on Gaza's Nasser Hospital.** A strike on Nasser Hospital in
   Gaza killed 6 people. Sources: Al Jazeera, Gaza Health Ministry.
8. **Harry Kane makes England history.** Kane earned his 126th cap,
   breaking England's all-time appearances record. Source: Reuters.

## How to run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` — a byte-for-byte copy of `entry.png` —
and fails loudly if the copy comes out empty or over 1,048,576 bytes.
