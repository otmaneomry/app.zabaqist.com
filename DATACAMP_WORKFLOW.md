# DataCamp — workflow study

Reference for the DataCamp patterns adopted into Zabaqist. Built from the 20
screenshots in `wokflow-datacamp/`, read frame by frame, and then shipped —
unlike `BRILLIANT_WORKFLOW.md`, which was a study first and an implementation
later, this document describes code that is in the tree.

**This is a study of patterns, not a copy.** Where DataCamp's mechanic conflicts
with a promise Zabaqist already makes, the promise wins — see *§6 Do not port*.

The two products are not the same shape and the differences drive most of the
decisions below:

| | DataCamp | Zabaqist |
| --- | --- | --- |
| Catalogue | 723 courses, 11 product areas | 13 chapters, one programme |
| A lesson is | a video + a code editor | a maths document with checkpoints |
| XP is paid for | completing a lesson | attempting a checkpoint, minus hints |
| Ranking | weekly public Leaderboard | none, on the pedagogue's instruction |
| Audience | professionals on a laptop | Moroccan bac students on a 390px phone |

---

## 1. The shell — a rail, and a bar that is not navigation

DataCamp hangs the whole product off a dark rail that never moves, and puts
*identity and state* — search, credits, upgrade, language, avatar — in a white
bar above it. Navigation and identity are separated, and that is why an
eleven-destination product stays legible at 1280px.

**Taken.** `components/shell/AppSidebar.tsx` is the rail;
`components/Header.tsx` is now only the bar. Before this, navigation was three
pills in the header, which meant the app's shape was only ever visible as three
words — a student could not see there was a programme behind them.

Three rules came with it:

1. **Section headings are not links.** `APPRENDRE` groups; it does not add a
   tier to click through.
2. **The rail lists only what exists.** Four rows, not eleven. Inventing
   "Certifications" or "Projets" to fill the column would advertise something a
   student cannot open.
3. **The active row is marked twice** — background *and* a mint glyph. On a dark
   ground a background change alone is ~1.2:1 and disappears in sunlight, which
   is where a phone gets used.

Below `lg` the rail is not rendered at all; the bar's drawer carries its rows,
from the same `NAV_GROUPS` export so the two lists cannot drift.

### Not taken: the global search field

It is the most prominent thing in DataCamp's bar and it would be the most
prominent thing in ours with nothing behind it. Thirteen chapters do not need a
search box, and one that returned nothing would be the third piece of invented
chrome this codebase has had to delete. The catalogue filters itself, on the
catalogue page, where the material is.

### The palette

DataCamp is navy `#05192D` + electric green `#03EF62` + purple. Zabaqist keeps
its own **Mint Tea** palette — cream, mint, gold — because two of its values are
measured accessibility fixes and the marketing site shares them. What was added
is the **navy shell** (`--zb-navy*` in `app/globals.css`): a green-leaning navy,
not a true blue one, so it sits with the mint rather than making the page look
like two brands stapled together.

One trap worth naming: `--zb-mint` is 3.4:1 on navy. It was measured on cream.
Anything meaningful on the dark surface uses `--zb-mint-on-dark` (7.1:1).

---

## 2. The dashboard — route, don't catalogue

`7_1-learn.png` is five bands, top to bottom, each answering one question:

| Band | Question |
| --- | --- |
| greeting | who am I, what have I banked, did I show up |
| resume strip | what is the one thing to press |
| trio | what else could I do that is not reading |
| pick-up list | what else is in flight |
| discovery | where is everything |

**Taken whole** (`components/MainContent.tsx`). Two things left to make room:

- **The right rail.** It held the streak card and the totals; both moved to
  `/progres`. That is DataCamp's split exactly — the dashboard routes you into
  work, "My Activity" is where you go to look at yourself. The streak *number*
  is still one glance away, in the greeting and at the foot of the rail.
- **The thirteen-tile grid.** This reverses an earlier decision, which kept the
  grid as "a way to overrule" the panel's choice of chapter. The override is
  still there — it is a link to `/courses`, which has filters and room to be
  read. What the grid cost on the dashboard was the fold: thirteen equal tiles
  under a strip that had just made a recommendation is the product taking its
  own advice back.

### The strip replaced the panel, and the plan moved

`ContinuePanel` was a ~460px vertical panel that re-printed the chapter's whole
part list. DataCamp states the same thing in a 120px strip and spends the rest
of the fold on the *other things a student could do*. The plan is not lost — it
moved to the course page's outline, where it is acted on. That trade is the
whole DataCamp layout: **the dashboard routes, the course page details.**

### ASSESS / PRACTICE / APPLY → Méthode / Exercices / Devoir

DataCamp's trio is three modes of work that are not reading. Zabaqist already
types its sections that way — `ViewKind` in `lib/courseDoc.ts`, priced at
5/20/10/50/5 XP — so the three doors are not invented for this layout. Each card
points at the first section of that kind the student has not read, in programme
order. A card shows the **part's** name, not the chapter's: all three routinely
resolve into the same chapter, and three cards reading "Limites et continuité"
is a row that looks broken.

### "2 hr 38 min to go"

We do not have it. No chapter carries a per-section duration, and inventing a
minute figure would be the same class of mistake as the hardcoded
`33 lessons completed` that `StreakCard` had to delete. The slot says how many
sections are left, which is exact.

Same reasoning retired DataCamp's `Review 0` pill: there is no
spaced-repetition queue behind it yet, so the slot stays empty.

---

## 3. The course page — a banner that starts it, then the plan

`9_1-example-course.png`: a dark banner carrying the eyebrow, the title, one
green **Start**, and a chip row (`1 hr · 6 videos · 20 Exercises · 1650 XP`).
Then the chapters as an accordion — numbered disc, progress bar pinned right,
and once expanded every lesson as a row with its icon, its tick, and its XP.

**Taken** as `components/shell/PageBanner.tsx` + `components/course/ChapterOutline.tsx`.
Chips say `7 parties · 33 sections · 400 XP` — all three derived, none guessed.

This **replaces the Brilliant serpentine** (`components/course/CoursePath.tsx`),
and the path was not a bad idea: it made "where am I" answerable at a glance.
What it could not show is *what a section is worth and how much of a part is
left*, and those two facts are what a student revising for a bac needs from a
plan. The outline answers both in the row itself.

Three things carried over from the path and were not lost:

1. **Nothing is locked.** DataCamp greys unavailable chapters behind a
   subscription; every part here is open, in any order, always.
2. **The tick is the khatim** — the same mark as the streak strip and the list
   bullets, used only where it means "this one is done".
3. **The CTA verb carries the state** — `Commencer` / `Continuer` / `Revoir`.

The outline opens on the part the student is *in*, not on part 1. DataCamp ships
with chapter 1 expanded; expanding the unfinished one is the same intent applied
to someone who is nine sections deep.

`CoursePath.tsx` and `StickyNextCard.tsx` are unreferenced now. Delete them once
nothing wants the serpentine back.

---

## 4. The reader — the campus, and the pane that was not ported

`2-inside-course-quiz.png` and `6-inside-course.png`. DataCamp's campus header is
three groups and nothing else: breadcrumb out on the left, `← ≡ Course Outline →`
centred, the day's XP on the right. **The product chrome is gone** — no sidebar,
no search, no upgrade button.

**Taken** (`components/course/CampusHeader.tsx`). The page states what it is with
`data-reader-mode` and the chrome answers to it in `app/globals.css`; `?s=` is a
search param, and a Next.js layout is not re-rendered for one, so this avoids
teaching the layout about one route's query string.

What that bar replaced, above the first line of the chapter: a back-link, a
badge, an H1, a description, a stats line, a scrolling tab bar and a section
dropdown. `CourseTabs.tsx` and `SectionPicker.tsx` are unreferenced now.

Also taken:

- **The outline drawer** (`3-course-outline.png`) — the whole chapter over the
  page, ticks and XP per row, the current section lit. Deliberately the *same*
  information as the course page's outline, so a student navigates by one map.
- **The dot strip** at the foot of a section: where you are in this part, no
  percentage. `dir="ltr"` on both routes — it is a chart of order, and charts do
  not mirror.
- **Arrow-key stepping**, skipped whenever the student is typing; `Checkpoint`
  has a scratch textarea on many of these pages.

### Not ported: the split instructions/workspace pane

DataCamp's reader is a 360px instruction pane beside a workspace, and it is the
most recognisable thing in the product. It is not here, and not because it was
hard — it exists to put an editor next to a brief. Our sections are prose and
KaTeX, and this codebase has already measured what a narrow column does to them:
*"on a 390px phone it leaves a 292px column for formulas."* A display formula in
a 360px pane scrolls sideways on every line. The document keeps the full column.

### One XP, three surfaces

The first draft of the campus bar computed XP as "sum of the worth of every
section read" — which would have paid a student for scrolling, and disagreed
with the header's chip and the chapter page's progress card. It now calls
`chapterTotals()`, the same function as the other two. **XP is earned by
attempting a checkpoint, minus hints opened**, and there is one definition of it.

The bar is hidden until something has been earned, like every other counter here:
`0 / 400 XP` above an unread chapter is a reproach printed before the student has
done anything.

---

## 5. The retention layer

### The streak takeover

`4-streak.png` then `5-set-goal.png`, back to back: the page ground turns dark,
the numeral fills the screen with the week's dots under it, then it asks for a
goal — 7 / 14 / 30 days, `Good Start` / `Ambitious` / `Devoted`.

**Taken** (`components/course/StreakMoment.tsx`), fired once on the day's first
section read. Three rules inherited from `BRILLIANT_WORKFLOW.md` §4, which
studied the same mechanic in another product, and all three still hold:

1. **The loudest celebration is for showing up** — not for being right, not for
   finishing. This is the only screen that recolours the whole page.
2. **The size of the interruption matches the size of the achievement**, which is
   why it fires once a day and never on a section boundary.
3. **No monetisation in the celebration chain.** DataCamp's own header puts an
   `Upgrade` button directly above this; that stays out.

The mark is the khatim, not a lightning bolt. The bolt is Brilliant's, then
DataCamp's; one mark per worked day is exactly where ours means something.

Declining the goal is a first-class option and is not styled as a mistake — and
declining leads somewhere, because the offer lives on permanently in the streak
card on `/progres`.

**Not taken:** *"You will be 3.4x more likely to complete a track."* That figure
is DataCamp's, measured on their population. Repeating it would be quoting
someone else's study as our own result.

### My Activity

`10-my-activity.png`: a lifetime stat row in one card split by vertical rules,
then a segmented filter over one list of rows, each carrying its own resume
button. **Taken** into `components/progress/ProgressDashboard.tsx`, which keeps
the date-stepper and the bar chart from the Brilliant-derived version — those are
recorded on the device rather than assumed, and DataCamp has no equivalent.

Two cells dropped: it counts Courses, Tracks, DataLab projects and
Certifications, and three of those do not exist here. A cell reading
`0 certifications` would be advertising an absence.

One tab dropped: `Skipped`. Nothing in this product marks a chapter skipped, and
a permanently empty tab teaches a reader that the tabs are decorative.

---

## 6. Do not port

**The Leaderboard.** It sits third in DataCamp's rail: a weekly ranked list of
other learners by name and exact XP, with a countdown and a `YOU` row.

Zabaqist promises the opposite, in shipped code and shipped copy:

- `components/course/Checkpoint.tsx`: *"⛔ No streak, no rank, no leaderboard."*
- landing copy: *"Sans classement public : personne ne voit ton score."*
- the pedagogical source: *تجنب كل أشكال التثبيط* — avoid every form of
  discouragement.

`BRILLIANT_WORKFLOW.md` §6 made the identical call about Brilliant's Leagues.
The substitutes are unchanged: **you against your own previous window**, never
against another student. `scripts/test-course.mjs` asserts that no ranking,
league or leaderboard string appears on the progress page.

Also not ported:

| DataCamp | Why not |
| --- | --- |
| Global search in the bar | 13 chapters; a box with nothing behind it |
| Instructor lockup on every card | one pedagogue, no photograph, nothing to invent |
| `Credits` / token meter | no metered resource exists |
| `Review 0` pill | no spaced-repetition queue behind it |
| The split editor pane | see §4 — it would give a formula a 360px column |
| Time-remaining estimates | no per-section duration is authored |

---

## 7. What this cost, in files

Added: `shell/AppSidebar`, `shell/PageBanner`, `course/ChapterOutline`,
`course/CampusHeader`, `course/StreakMoment`, `home/ResumeBanner`,
`home/KindTrio`, `home/PickUpList`, `home/DashboardGreeting`,
`home/useChapterStates`, `ui/StreakChip`.

Deleted: `courses/CoursesPage.tsx`, `courses/LearningPaths.tsx`,
`courses/BrowseAllCourses.tsx` — three files of invented catalogue that had been
dead since an earlier pass, and which the new filter row and search superseded.

Unreferenced, safe to delete when nobody wants them back: `course/CoursePath`,
`course/StickyNextCard`, `course/CourseTabs`, `course/SectionPicker`,
`home/ContinuePanel` (still exports the `ChapterShape` type),
`ContinueLearningSection`, `ComebackCard`, `CourseCard`.

`npm run test:course` covers the new surfaces — the outline, the campus bar, the
streak takeover, the rail at both widths — at 245 checks.
