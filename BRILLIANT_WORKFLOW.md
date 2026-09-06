# Brilliant.org — workflow study

Reference for adapting Brilliant's product patterns into Zabaqist. Built from the
30 screenshots in `workflow-briliant.org/`, read frame by frame.

**This is a study of patterns, not a copy.** Where Brilliant's mechanic conflicts
with a promise Zabaqist already makes, the promise wins — see *Do not port*.

---

## 1. The pre-auth funnel — 10 screens, zero asks for an account

Sequence, with what each screen does:

| # | Screen | Type | Collects | Progress |
| --- | --- | --- | --- | --- |
| 0 | Landing | marketing | audience fork: learner vs parent/teacher | — |
| 1 | `Hi, I'm Koji! I'll be your personal tutor.` | persona | nothing — a free first click | **none shown** |
| 2 | `What motivates you to learn?` | ask | motive (4 cards) | seg 1 · 17% |
| 3 | `Let's get started.` | **give** | draggable coordinate plane | seg 1 · 50% |
| 4 | `How old are you?` | ask | age + ⓘ "why we ask" | seg 1 · 67% |
| 5 | `What do you want to learn first?` | ask | subject | seg 1 · 67% |
| 6 | `Built by the best minds in education` | **give** | instructor faces + universities | seg 1 · 84% |
| 7 | `What level of math are you currently at?` | ask | self-placement | seg 1 · **100%** → seg 2 |
| 8 | `What's your daily learning goal?` | ask | 10/20/30/60 min | seg 2 · 70% |
| 9 | `How will learning fit into your day?` | ask | time-of-day anchor | seg 2 · 80% |

**Rhythm: ask → give → ask → ask → give → ask → ask → ask.** Never more than two
questions without handing something back.

### Principles

1. **Delete every exit, then show the length.** Clicking "I'm a learner" removes
   header, nav, footer and sign-in. The progress bar does *not* appear on the
   welcome frame — you commit before you learn how long the flow is.
2. **Alternate asking with giving.** The two interstitials are proof, not filler:
   one proves the interactivity claim, one proves the authority claim. Each lands
   right after the user has spent something.
3. **Answerable by recognition, never recall.** No dropdowns, no sliders. The
   level question shows *worked examples* — `5 × ½ = ?`, `x − 8 = 10`, a parabola,
   an integral — plus a first-person sentence, so the student matches a picture
   instead of self-assessing an abstraction.
4. **Disable Continue; never auto-advance.** One 509px button, one position, two
   states. Enabled = dark with a hard offset shadow. Disabled = flat grey, **no
   shadow** — the shadow's presence *is* the affordance.
5. **Answer each question's specific objection, and only that one.** The only
   sub-heading in the flow is on the irreversible choice ("You can make progress
   in both subjects later on"). The only ⓘ is on the invasive one (age).
6. **Name the product, then let it talk to you.** A named tutor asks every
   question in a fixed avatar-left lockup. The form reads as a conversation.

---

## 2. The auth moment — the wall is a key, never a gate

> **Create a free profile to discover your learning plan**

It lands *after* six answers and two give-moments, at the point where a result
exists that the user cannot see yet. The account is framed as the key to
something already earned. **No price is named anywhere pre-auth.**

- Progressive form: email → password → first/last name → captcha → `Sign up`.
  No labels, no confirm-password, no terms checkbox, no demographics.
- First/Last name is **one pill split 50/50 by a hairline**, so the form stays 4 rows.
- Every CTA is a `#383838` pill with a hard black ~4px edge and zero blur — key-caps.

**The screen after signup is the promise rendered, not a welcome.** Eyebrow
`YOUR LEARNING PLAN` → plan title → a horizontal node rail → `Start learning`.
Node 1 is greyed **to the left of** the `START HERE` badge on node 2: the path
visibly starts mid-way, so the quiz already taken reads as progress banked.

Then one near-empty commitment beat: *"You'll get a little smarter every day —
starting now."* + `Continue`. No skip.

---

## 3. Home — one next action, not a catalogue

Home devotes its largest, most saturated element to answering **"what do I
press?"**. The catalogue is one tab away, never on Home.

Attention hierarchy: `Continue course` button → course title + art → streak
numeral → premium → everything else.

The resume card is a **bookmark, not a summary** — it never says how much is left:

- keeps the **course** identity (title + art), not the lesson identity
- names the **level** (`LEVEL 1`), not a percentage
- shows the last finished lesson *in its completed visual state* — a receipt
- adds a human line (`Keep it going!`) with the same green flag used as the
  "you are here" pin on the path
- the **CTA verb carries the state**: `Start` → `Continue course`
- card-deck edges imply "others are waiting" without listing them

### The course is a journey, not a table of contents

A vertical serpentine of isometric pads, no connector lines, meandering across
~3 x-offsets. Node states:

| State | Treatment |
| --- | --- |
| current | glowing blue concentric portal + green flag marker floating above, black label |
| locked | flat two-tone grey disc, grey label |
| done | grey pad, embossed check, `#96ACFF` circle-check |
| level check | distinct 10-lobed scalloped silhouette |

**Chapters are not clickable containers.** A level is a labelled run of nodes on
one continuous scroll. There is no chapter page — you scroll, you don't drill.
That removes an entire navigation tier.

### Principles

1. **One live node, everything else grey.** Locking is *desaturation*, never a padlock.
2. **State changes objects; meters are a last resort.** The whole product ships
   with exactly one `%` and one fraction.
3. **The "you are here" pin is the same glyph on the map and on the resume card.**
4. **The CTA verb is the state machine.**
5. **Discovery is a separate tab, organised by curriculum.**

---

## 4. The learning loop — the part that matters most

```
PRESENT → ANSWER (one tap, no submit)
   ├── CORRECT   → green border, ✓ badge, siblings disable, XP ticks → "Continue"
   └── INCORRECT → amber border, chosen tile greys with a soft ✕,
                   siblings STAY LIVE, mascot: "Give that another go."
                   progress unchanged, XP unchanged → "Try again"
SEGMENT WRAP → "That was tricky!" 1/3 · "Review mistakes" / "Skip review"
LESSON       → "Lesson complete!" 110 TOTAL XP
STREAK       → "You started a streak!"
MAP          → node ✓, marker advanced, next lesson behind one "Start"
```

### Wrong answers are not punished. At all.

- **Amber `#F9D25C`, never red.** Amber means *not yet*; red would mean *failed*.
- **Five words: "Give that another go."** No "Incorrect", no "Oops".
- **Spoken by the mascot** in a speech chip — coaching, not a system judgement.
- **Badge asymmetry is deliberate:** saturated green ✓ (highest contrast on the
  screen) vs pale grey ✕ (the lowest). Success amplified, failure muted.
- **The correct answer is never revealed.** Help is opt-in.
- **Nothing is taken.** No lives, hearts, timers or score decay exist in the
  product. XP holds, the progress bar stays green and stationary.
- **Retry is immediate, in place, unlimited** — and "Try again" is the *primary* CTA.
- On a bad segment the copy blames the **material**: *"That was tricky!"*

> The cost of a wrong answer is **one extra tap, and nothing else.** Fear of being
> wrong is the main reason learners quit maths, so every mechanic that could
> produce it has been stripped out.

### What gets celebrated, and how loudly

**A 1/3 score still yields "Lesson complete!" and full XP.** XP pays for
*completion*; accuracy is reported quietly in a smaller, cooler secondary card.

> The loudest celebration is for **showing up** (the streak — the only screen that
> recolours the page ground), the second loudest for **finishing** (XP), and the
> quietest for **being right** (the score). That ordering is the retention strategy.

Micro-feedback never breaks context — it lives inside the question card, no modal,
no route change. Macro-feedback takes the whole screen. **The size of the
interruption matches the size of the achievement.**

---

## 5. The retention layer

- **Dashboard** (`You` tab): date stepper + `Week | Month | Year` toggle,
  "Your activity snapshot", a problems-solved bar chart, course progress cards.
- **The Month view is 4 *weekly* bars over 28 days**, not a calendar month.
- **Week view** adds a tutor-voiced summary naming the focus topic, the toughest
  lesson, and praising help-seeking.
- **🔑 keys** = a daily-refilling paywall meter. **⚡ = a streak counter**, not a boost.
- **Settings**: Account (emails with UNVERIFIED/PRIMARY badges, password,
  connected accounts, export, delete) and Preferences (appearance, reduce motion,
  tutor narration + voice, and 9 email toggles all defaulting ON).

---

## 6. Do not port

Brilliant's **Leagues** are a compulsory public ranking: real names and exact XP
of other learners, with demotion and no opt-out.

Zabaqist already promises the opposite, in shipped code and shipped copy:

- `components/course/Checkpoint.tsx`: *"⛔ No streak, no rank, no leaderboard."*
- landing copy: *"Sans classement public : personne ne voit ton score."*
- the pedagogical source: *تجنب كل أشكال التثبيط* — avoid every form of discouragement.

Private substitutes for the same motivation:

| Brilliant | Zabaqist substitute |
| --- | --- |
| League rank against named users | self vs. own past window |
| Public XP ladder | anonymous distribution ("plus rapide que la plupart") |
| Demotion | nothing — progress never goes backwards |
| Bare `0.0%` accuracy stat | accuracy only once there is enough data to be fair |

Also not to port: the promo bar and "Start trial" chrome that sit directly above
the reward the user just earned. **Keep monetisation out of the celebration chain.**

---

## Where the full per-screen transcripts live

Five detailed specs (~2,000 lines) with verbatim copy, hex tokens and CSS-px
measurements were produced during this study. They are working notes, not shipped
docs; regenerate them from `workflow-briliant.org/` if needed.
