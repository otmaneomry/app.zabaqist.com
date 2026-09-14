@AGENTS.md

# Zabaqist — the app

Maths for the Moroccan 2ème Bac, bilingual FR/AR, in closed beta until the
September 2026 launch. `zabaqist.com` is the marketing site; this repo is
`app.zabaqist.com`, the product behind it.

Next 16.3 (App Router, Turbopack) · React 19 · next-intl 4 · Supabase (SSR +
RLS) · Tailwind 3.4 alongside Mantine 9 · TypeScript 6.

## Before you finish

```
npm run check        tsc --noEmit && eslint .      must be 0 errors
npm run loop         db:check + prod:check          must say "no blockers"
npm run test:course  the browser suite              must be "all checks passed"
```

Each of the three prints its own total — `N of M checks ran` for the verifiers,
`all N checks passed` for the browser suite. **Do not write a count down
anywhere.** Three were written down as fact and all three were stale: `ci.yml`
and `prod-check.mjs` said 189, this file said ~236.

`npm run loop` runs both halves and fails if either does. It used to be
`db:check && prod:check`, so a red database check hid every production blocker
from the reader of the line above.

CI runs these in the order `check → db:check → prod:check → build →
test:course`, twice — once with `NEXT_PUBLIC_ALLOW_INDEXING=0` and once with
`1`, because the flag is baked at build time and the launch half of the
indexing checks cannot be exercised any other way.

**A green CI run is weaker than a green local one, in exactly one place.** CI
has no Supabase credentials (`NEXT_PUBLIC_SUPABASE_URL` is `https://ci.invalid`
on purpose), so `db:check` cannot reach the project: it skips its RLS probes,
its anonymous-write probes, the allowlist and the signup hook — roughly half of
what it declares. It says so now, by name and by count, instead of reporting
"42 checks" and a clean bill of health. Run it locally with `.env.local` in
place before you believe anything about the database. (There is no
`continue-on-error` in `.github/workflows/ci.yml`; it was removed in 022835a and
`prod:check` now asserts it stays removed.)

`test:course` needs a built app on `:3111`:

```
npm run build && E2E_AUTH_SECRET=e2e-local-only npm start -- -p 3111
```

The two `*-check` scripts are verifiers, not tests: they compare what the code
declares against what is actually there, keep state in `.loop/`, and report
NEW/FIXED since the last run. When one fires, **fix the code, not the check** —
unless the check is measuring the wrong thing, in which case fix it and prove it
still catches the real fault by injecting one.

## Traps that have already cost a day

**`critique/course/` is the source; `content/course/` is the copy the app
serves.** Both are committed. Editing the served copy and not the source means
the next sync deletes your work — this broke CI once, with three authored
GeoGebra sections at stake. `test:course` compares them **both ways** now.
`04-fonctions-logarithmiques.md` exists only in `content/` because it was
migrated from JSX and has no authored original; that is an allowlist of exactly
one in the check, not "anything you put in `content/`", which is what iterating
`critique/` alone silently meant.

**The catalogue denormalises `sections` and `exercises`** from the markdown and
shows them to students. Edit a chapter, update its row in `lib/courseCatalog.ts`
or `test:course` fails.

**Never read device state during render.** `localStorage` does not exist on the
server, so computing progress inline makes the server send one number and the
browser's first render another — React then throws away the server markup for
that subtree. Read it in an effect and render the zero state on both sides.

**next-intl ships the whole namespace to the client.** Every string in a
namespace appears in the HTML whether or not anything rendered it, so a test
that greps page source for copy passes even when the component is absent. Assert
on rendered elements.

**Next 16 renamed the error-boundary prop to `retry`.** `reset` still works but
only re-renders the failed payload; `retry` re-fetches. See
`app/[locale]/error.tsx` and `app/global-error.tsx` — the latter replaces the
root layout, so it has no i18n provider and carries inline bilingual copy.

## Auth and the allowlist

Supabase Auth with Google, gated by `public.allowed_emails`. The gate is
`proxy.ts` (Next 16's renamed middleware), which reads `PUBLIC_PATHS` from
`lib/publicPaths.ts`.

**That file exports two lists and they are not the same.** `PUBLIC_PATHS`
(`/`, `/signin`, `/signup`, `/demarrer`) is what the proxy lets through
unauthenticated; `INDEXABLE_PATHS` (`/` alone) is what `app/sitemap.ts`
publishes and what `app/robots.ts` subtracts from the route tree to build its
disallow list. A page can be reachable without a session and still be
deliberately absent from the sitemap — that is the closed beta, and `/demarrer`
is the case in point: the funnel's premise is that it runs before there is an
account, so it is public, and `robots.ts` disallows it. Adding a public route
means deciding about both.

`is_email_allowed` normalises the address it is **given**, then compares it to
the address as **stored** — so a row typed with Gmail dots matches nothing and
an invited student is refused. A trigger normalises on write now. The tell is
`dotted=false plain=false` from `db:check`: both spellings failing means the
stored row is wrong, not the function.

```
npm run whois -- <address>    does the list say yes?
npm run events                the journal: who tried, who was refused, why
npm run events -- --denied    refusals only
```

`public.auth_events` has RLS on and no SELECT policy, so the browser key sees an
empty list by design. Reading it needs `SUPABASE_SECRET_KEY` in `.env.local`.
Full detail in `AUTH.md`.

## Indexing

The app defers to the marketing site while the beta is closed, and it has to say
so in **six** places at once:

1. the `robots` meta — `noindex, follow`;
2. `robots.txt` — `Disallow: /`, and no `Sitemap:` line;
3. `/sitemap.xml` — 404, not an empty `<urlset>` (Search Console keeps an empty
   one, reports it as an error and re-fetches it);
4. the canonical on `/` — `https://zabaqist.com`;
5. every other page's canonical — absent, because `metadataBase` is the
   marketing site then and a relative canonical would name a URL that does not
   exist there;
6. the `Link: rel="alternate" hreflang` **response headers** next-intl publishes
   from the proxy — off. Google honours those exactly as it honours the head
   tags, and nothing that reads page source can see them.

`NEXT_PUBLIC_ALLOW_INDEXING=1` moves all six. Do not change one without the
others; they contradicted each other once and Google resolves that by guessing.

The flag is a `NEXT_PUBLIC_` value, so it is **baked into the bundle by
`next build`** — setting it when you run the tests changes what they expect and
nothing about what they are testing. `test:course` therefore reads the posture
off the running app and uses the environment only to check you are testing the
build you meant to. CI builds both ways.

## What this product refuses

On the pedagogue's instruction. Each of the three is checked as a **property**
now rather than as a blocklist of the mistake that happened once:

- **No ranking, league or leaderboard.** Progress is compared to the student's
  own previous window, never to another student. Checked over every page in both
  languages, including text `display: none` would hide (`test:course`), and over
  both message catalogues (`prod:check`). Copy that *denies* ranking — "sans
  classement", "لا ترتيب" — is allowed by the negation before the word, not by a
  list of exempt keys.
- **Nothing invented.** No fabricated testimonials, review counts, durations or
  recommendations; no competitor assets. Every figure shown is derived from the
  content or the reader's own device. `prod:check` looks for the SHAPE: a
  literal number — never an ICU placeholder, which is filled from data that
  exists — next to a noun that makes it a claim about people, opinions or the
  length of the course; a quoted endorsement with a signature; and any asset
  loaded from a host this product does not own.
- **No auto-graded mathematics.** The self-assessment asks the chapter's own
  `## Auto-évaluation` items and the reader judges. A wrong "correct answer"
  teaches a falsehood to someone sitting the Bac. `prod:check` asserts the
  machinery is absent — no correct-answer field in the assessment sources, a
  `checklist` that is still `string[]`, a verdict vocabulary that is still the
  reader's three words, and no ratio taken over correctness.
  **One deliberate exception:** the landing page's preview problem *does* say
  which answer is right. It is one hand-authored illustration, stored and
  counted nowhere, and `test:course` asserts that it behaves that way. Both
  scripts carry a comment saying so — do not "fix" it.

## Branches

`main` is the product. `feat/datacamp-workflow` holds a shell/dashboard/reader
rebuild that was accidentally fast-forwarded into main and unmerged again — keep
it separate until it is deliberately merged. `backup/main-before-unmerge` is a
local-only tag at the merged state.

## Housekeeping

The repo root carries ~37 markdown files, many describing things that no longer
exist (`MOCK_API_README.md`, `NO_AUTH_SIMPLIFICATION.md`, phase reports). Treat
them as history, not as current truth; `AUTH.md`, `DEPLOY.md`, `LOOP.md` and
this file are maintained.

# Second-model review with Codex

Claude plans and verifies; Codex critiques. Run `/codex-review` after a change to get a review from
a different model family, then Claude checks each claim against the code before reporting anything.

| Invocation | Reviews |
| --- | --- |
| `/codex-review` | Staged, unstaged, and untracked changes |
| `/codex-review main` | Everything on this branch vs `main` |
| `/codex-review dc468d3` | One commit |

The command lives in `.claude/commands/codex-review.md` and is committed, so every dev gets it.
It needs the OpenAI Codex CLI on `PATH` — `npm i -g @openai/codex`, then `codex login`. Without it
the command stops and says so; it never silently reviews the code itself and calls that a Codex
review.

Codex runs in its `read-only` sandbox and cannot modify the tree. Its findings are claims to
verify, not instructions — a fix gets applied because someone confirmed the defect, not because
Codex suggested it.
