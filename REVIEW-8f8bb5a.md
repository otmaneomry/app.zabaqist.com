# Code review — `8f8bb5a` “Fix profiles”

Reviewed 2026-09-16 · commit `8f8bb5a` (profile identity refresh: `lib/sync.ts`,
`components/SyncProvider.tsx`, `components/auth/AccountMenu.tsx`,
`supabase/migrations/0008_profile_identity_refresh.sql`).

**None of the fifteen findings below is caught by an existing verifier.** All
three gates are green on this commit:

| Gate | Result |
| --- | --- |
| `npm run check` | 0 errors |
| `npm run db:check` | 61 of 62 checks ran, live project reached |
| `npm run prod:check` | 165 of 165, no blockers |

Every claim was checked against the source line it names. Two are marked
**plausible** rather than confirmed: they rest on third-party behaviour
(React 19’s hydration listeners, GoTrue’s write pattern) that was read but not
exercised.

---

## Ranked summary

| # | Where | Finding | Severity |
| --- | --- | --- | --- |
| 1 | `lib/sync.ts:747` | Clock clamp is missing on the INSERT path; a checkpoint can freeze for ever | **Act first** |
| 2 | `components/SyncProvider.tsx:168` | `name`/`avatar` deps let a pull’s own event pass as the student’s filière choice | **Act first** |
| 3 | `0008:70` | Trigger now runs on every sign-in with no `exception` guard — a profiles failure fails the login | **Act first** |
| 4 | `0008:97` | Backfill creates profiles for uninvited accounts; no allowlist filter | High |
| 5 | `0008:56` | Comment on `ON CONFLICT` states the opposite of the code | High |
| 6 | `lib/sync.ts:705` | Comment claims `profiles_merge` guards the INSERT; it is `BEFORE UPDATE` | High |
| 7 | `AccountMenu.tsx:91` | `onError` cannot fire for an image that fails before hydration | Medium *(plausible)* |
| 8 | `0008:40` | Re-running `0001` silently reverts `0008`; no warning, no `.test.sql` | Medium |
| 9 | `0008:68` | Nothing in the repo can tell you whether `0008` was applied | Medium |
| 10 | `0008:64` | `UPDATE OF` fires on *named* columns, not *changed* ones — a no-op write per sign-in | Low *(plausible)* |
| 11 | `lib/sync.ts:697` | Two writers for one invariant; the client one is what caused the bug | Design |
| 12 | `lib/sync.ts:712` | Nothing reads `profiles.full_name` / `avatar_url` — the columns are write-only | Scope |
| 13 | `AccountMenu.tsx:79` | The avatar branch has no test coverage and cannot get any: `E2E_USER.image` is `null` | Coverage |
| 14 | `lib/sync.ts:608` | The new `Identity` docblock detaches `pushAll`’s only documentation | Nit |
| 15 | `0008:51` | Identity extraction from `raw_user_meta_data` is copy-pasted six times | Nit |

---

## Act first

### 1. The client-clock clamp does not cover the INSERT path — `lib/sync.ts:747`

`0007` exists to stop a device with a wrong clock from writing a date nothing
can ever beat. Its clamp lives in three triggers and all three are
`before update`:

```
0007:74-75   create trigger course_progress_merge_trg  before update on public.course_progress
0007:118-119 create trigger checkpoints_merge_trg      before update on public.checkpoints
0007:154-155 create trigger profiles_merge_trg         before update on public.profiles
```

A row the client **creates** never passes through them.

**Failure.** A school PC with a dead CMOS battery reads 2027. The student’s
first attempt at a checkpoint stamps `at = new Date().toISOString()` = 2027.
`pushNow` sends `updated_at: c.state.at`; the row does not exist, so PostgREST
INSERTs it and 2027 is stored unclamped. Every later write, from any device
including correctly-set ones, computes `client_at = least(now, now) = now`, hits
`if (client_at < old.updated_at)` and has its `tried`, `verdict` and `draft`
discarded; `greatest(client_at, old.updated_at)` then keeps the row at 2027.
The checkpoint can never be retried again, silently — the outcome `0007`’s own
header describes.

The same mechanism puts `profiles.updated_at` in 2027 on a row the client upsert
creates (`lib/sync.ts:717`), and that column is what `pullAll` uses to arbitrate
the filière (`lib/sync.ts:477-481`).

**Fix.** Make the merge triggers `before insert or update` with an
`if (old is null)` branch that clamps and returns, or clamp the timestamp at
INSERT. This is a hand-applied migration against the live project.

---

### 2. A re-runnable effect turns the server’s voice into the student’s — `components/SyncProvider.tsx:168`

`pulling` is `useRef(true)` (line 58). The initial pull sets it to `false` in its
`finally` (line 98) and **nothing ever sets it back**. That was safe while the
effect ran once per mount. Adding `name` and `avatar` to the dependency array
(lines 66 and 168) makes it re-runnable inside one mount.

**Failure.** A student changes their Google photo — or signs in on a phone,
refreshing `auth.users.raw_user_meta_data`, which is precisely the case `0008`
was added to support. `proxy.ts:98` calls `getUser()`, which revalidates with
Supabase on every request, so the still-mounted laptop’s layout renders a new
`avatar` string. `push` is recreated, the effect tears down and re-runs on the
same component instance, and `pulling.current` is already `false`.

The second `pullAll` sets `changed = true` unconditionally for every progress row
(`lib/sync.ts:519`), so lines 93-94 dispatch every `SYNC_EVENT` including
`FILIERE_EVENT`. `onFiliereChosen` (lines 116-118) sees `!pulling.current` and
calls `noteFiliereChange()`, stamping `FILIERE_AT_KEY = now`. The device now
claims it chose its filière at that instant, so `serverAt > chosenHere` is false
and the server can no longer correct a stale local filière — the deadlock
lines 462-473 document, with the student served the wrong syllabus.

It also drops the pending debounced push (line 162) and costs a second full
four-table pull.

**Fix.** Hold `name`/`avatar` in a ref and keep them out of the effect’s deps,
and set `pulling.current = true` at the top of the effect body so a re-run is
idempotent whatever else changes.

---

### 3. The profile trigger can now fail a sign-in — `0008:70`

```sql
create trigger on_auth_user_created
  after insert or update of raw_user_meta_data on auth.users
  for each row execute function public.handle_new_user();
```

With `after insert` alone, an exception in `handle_new_user` could at worst block
a signup. On `update` it rolls back GoTrue’s own `auth.users` UPDATE, and a
correctly invited student gets a 500 instead of a session. `handle_new_user`
(`0008:40-62`) has no `exception` block.

Concrete triggers:

- `auth.users.email` is null — `profiles.email` is `not null` (`0001:77`), and
  PostgreSQL checks constraints on the proposed tuple *before* conflict
  detection, so `on conflict (id) do update set email = coalesce(...)` does not
  save it and 23502 is raised;
- lock contention or a statement timeout on `profiles(id = X)` while the same
  student’s other tab is mid-`pushAll` upsert on that row;
- any CHECK constraint added to `profiles` later.

`0004:64-67` wraps the signup hook in `exception when others then return refusal`
for exactly this reason.

**Fix.** Add `exception when others then return new;` so a profile repair can
never cost a student their session.

---

## High

### 4. The backfill ignores the allowlist — `0008:97-105`

`where u.email is not null` is the only filter. Every `auth.users` row — including
one from before `0004`’s hook, or from a window in which the hook was toggled off
in the dashboard — gets a `public.profiles` row with their real name and photo
written into it. And if an operator cleaned up an uninvited account by deleting
its profiles row without deleting the `auth.users` row, re-running `0008` puts it
back.

`0001`’s identical backfill ran before the beta lock existed. Repeating it
unfiltered after the lock exists is a decision, not an inheritance.

**Fix.** `and public.is_email_allowed(u.email)`.

### 5. The `ON CONFLICT` comment says the opposite of the code — `0008:55-59`

```sql
-- On ne remplace que ce qui manque.
full_name  = coalesce(excluded.full_name, profiles.full_name),
```

“We only replace what is missing” describes `coalesce(profiles.x, excluded.x)`.
The code is the other order — replace whenever the incoming value is non-null —
and it has to be, because goal 1 in the file header is *suivre une photo Google
que l’élève a changée*. An editor who trusts the comment and swaps the arguments
silently kills photo and name refresh while every check stays green. The header’s
own rationale block (lines 31-38) is correct; only this line is wrong.

### 6. The comment justifying the null write is false on the path that matters — `lib/sync.ts:705-707`

> Null is safe to send. `profiles_merge` (0006, clamped in 0007) resolves them
> with `coalesce(new, old)`, so a device that has no identity to offer cannot
> blank one another device already stored.

`profiles_merge_trg` is `before update on public.profiles` (`0007:154-155`). It
never runs on an INSERT — and the comment eight lines above says this upsert
exists *because it is what creates the row*. On that path a `NO_IDENTITY` push
writes `full_name = null, avatar_url = null` straight into a fresh row,
re-creating the bug the commit exists to fix. The comment reads as a proof that
this cannot happen. It is not one, and the next editor will trust it.

---

## Medium

### 7. `onError` cannot catch the failure it was written for — `AccountMenu.tsx:91` *(plausible)*

`Header` is `'use client'` but is rendered by a server layout, so the
`<img src="https://lh3.googleusercontent.com/…">` ships in the initial HTML and
the browser starts fetching during parse. An ad blocker refusing
`googleusercontent.com` — the first cause the new comment names — fails the
request milliseconds later, long before the React bundle downloads and hydrates.

React 19 attaches the handler at hydration only
(`react-dom/cjs/react-dom-client.development.js:5274-5278`,
`case "img": listenToNonDelegatedEvent("error", didHydrate)` inside the hydrate
path), with no replay of an error that already fired and no
`img.complete && img.naturalWidth === 0` check. `brokenSrc` stays `null`, the
`<img>` branch stays selected, and the reader sees exactly the grey box with a
question mark the comment says this exists to avoid.

**Fix.** A `ref` on the img plus an effect that checks
`el.complete && el.naturalWidth === 0` and calls `setBrokenSrc(image)`.

### 8. Re-running `0001` silently reverts `0008` — `0008:40`

`0001` advertises itself as *idempotent, réexécutable sans casse*, and
`0001:111-134` still contains `create or replace function public.handle_new_user()`
with `on conflict (id) do nothing`, followed by `drop trigger if exists
on_auth_user_created` and `create trigger … after insert on auth.users`. Running
it again restores the one-shot trigger and the do-nothing clause, undoing `0008`
with no error and no check that would notice.

`0007` hit this same hazard against `0006` and warned about it in its header;
`0008` says nothing. `0006` also ships `0006_merge_on_write.test.sql`, a
pasteable PASS/FAIL proof of its merge rule. `0008` changes conflict resolution on
the same table and ships no equivalent, so its new `coalesce(excluded, profiles)`
behaviour has never been demonstrated to do what the header claims.

### 9. Nothing can tell you whether `0008` was applied — `0008:68`

`CLAUDE.md` says the `*-check` scripts “compare what the code declares against
what is actually there”. `db-check.mjs` does that for tables, RLS, policies,
cascades, RPC names and the signup hook — it probes `public.${hookName}` live —
but has no probe for `on_auth_user_created` or for the body of
`handle_new_user`.

Migrations here are applied by hand against a live project. The app half of this
fix deploys automatically and the SQL half does not. If nobody runs `0008`,
`db:check` still prints “61 of 62 checks ran” and a clean bill of health, and the
repair never happens — the silent-success shape the script’s own header was
written against.

**Fix.** A live check that the trigger exists with
`insert or update of raw_user_meta_data`.

---

## Low, design and nits

### 10. `UPDATE OF` filters the column *named*, not the column *changed* — `0008:64-67` *(plausible)*

The comment says restricting to `raw_user_meta_data` avoids *faire tourner cette
fonction pour rien à chaque fois*. In PostgreSQL an `UPDATE OF col` trigger fires
whenever `col` appears in the statement’s SET list, whatever the value; GoTrue’s
external-provider sign-in calls `UpdateUserMetaData`, which writes that column on
every OAuth sign-in even when the JSON is byte-identical. So each login runs an
extra `insert … on conflict do update` against `profiles`: a new heap tuple, WAL,
index churn and `profiles_merge_trg` woken, to write values that were already
there.

**Fix.** `when (new.raw_user_meta_data is distinct from old.raw_user_meta_data)`
— which is what the comment describes.

### 11. Two writers for one invariant — `lib/sync.ts:697`

After `0008` the trigger fills both columns on every sign-in and the backfill
repairs every existing row, so the client upsert can only matter in the window
between a profiles row disappearing and the student’s next sign-in. Even then,
`profiles_merge` makes the columns effectively write-once from the client
(`new.full_name := coalesce(new.full_name, old.full_name)`, `0007:142-143`): the
client path can never correct a wrong value, only create one.

The deeper fix this commit skips is to stop the client owning row creation at
all — have it UPDATE only the columns it owns (`filiere`, `track`, `onboarding`,
`updated_at`) and leave INSERT to the trigger, which is the mechanism that knows
the identity. That removes the class of bug instead of teaching the second writer
to carry two more fields.

### 12. The columns are write-only — `lib/sync.ts:712`

`pullAll` selects `'filiere, track, onboarding, updated_at'` (`lib/sync.ts:436`)
and nothing else queries `profiles`. Grepping `full_name|avatar_url` across
`app/`, `components/` and `lib/` returns only the layout’s read of
`account.user_metadata` (`app/[locale]/(with-header)/layout.tsx:93,95`) and these
two write sites. The header draws the name and photo from the **session**, never
from the table.

So `0008`’s header claim — *«L’application les lisait pour dessiner l’en-tête et
les jetait en chemin»* — describes a read of `auth.users`, not of `profiles`. No
student ever saw a missing name or photo because of this bug. That reframes the
cost/benefit: the risky half (a client that can INSERT a null identity) buys
nothing a reader can see, and is worth weighing against simply dropping it.

### 13. The avatar branch cannot be tested — `AccountMenu.tsx:79`

`E2E_USER` is `{ name: 'Test', email: 'test@test.com', image: null }`
(`lib/e2e.ts:30-34`), and a bypassed request is the only way `test:course`
reaches the header. With `image` null the `<img>` branch never renders, so
neither the photo path, nor `referrerPolicy`, nor `onError` is executed by any of
the “all N checks passed” the suite reports.

Giving `E2E_USER` an image URL guaranteed to fail would let the suite assert that
the initial is shown — and would have caught finding 7.

### 14. `pushAll` lost its documentation — `lib/sync.ts:608`

The queue docblock (lines 600-607) used to sit immediately above
`export function pushAll`. The new `Identity` docblock (608-615) now sits between
them. TypeScript binds the nearest preceding block, so `Identity` takes the new
one, `NO_IDENTITY` and `pushAll` take none, and the queue explanation is orphaned
between two comments about something else. Move the `Identity` block above it.

### 15. Identity extraction is copy-pasted six times — `0008:51`

`coalesce(meta ->> 'full_name', meta ->> 'name')` and
`coalesce(meta ->> 'avatar_url', meta ->> 'picture')` appear at `0001:123-124`,
`0001:143-144`, `0008:51-52`, `0008:80-89` and `0008:101-102`, plus a sixth
JavaScript copy at `app/[locale]/(with-header)/layout.tsx:93,95`. The `0008`
UPDATE copy is already written in a different shape from the other four
(`coalesce(p.full_name, …)`, existing value first).

A single `public.identity_from_meta(jsonb)` returning the pair, called by the
trigger and both backfills, would leave one place to change.
