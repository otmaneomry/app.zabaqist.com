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
npm run test:course  ~236 browser checks            must be "all checks passed"
```

CI runs exactly these, in the order `check → db:check → prod:check → build →
test:course`, so a green local run is a green pipeline. `test:course` needs a
built app on `:3111`:

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
GeoGebra sections at stake. `test:course` compares them. (`04-fonctions-
logarithmiques.md` exists only in `content/`: it was migrated from JSX and has
no authored original. The check iterates `critique/`, so this is fine.)

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
`proxy.ts` (Next 16's renamed middleware); `PUBLIC_PATHS` in `lib/publicPaths.ts`
is the single list it and the sitemap both read.

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

The app defers to the marketing site while the beta is closed: `noindex`, no
sitemap offered, canonical pointing at `zabaqist.com`. One flag moves all three
together — `NEXT_PUBLIC_ALLOW_INDEXING=1` at launch. Do not change one signal
without the others; they contradicted each other once and Google resolves that
by guessing.

## What this product refuses

Enforced in code and asserted in `test:course`, on the pedagogue's instruction:

- **No ranking, league or leaderboard.** Progress is compared to the student's
  own previous window, never to another student.
- **Nothing invented.** No fabricated testimonials, review counts, durations or
  recommendations; no competitor assets. Every figure shown is derived from the
  content or the reader's own device. If the data does not exist, the feature
  does not ship — an honest count beats an invented estimate.
- **No auto-graded mathematics.** The self-assessment asks the chapter's own
  `## Auto-évaluation` items and the reader judges. A wrong "correct answer"
  teaches a falsehood to someone sitting the Bac.

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
