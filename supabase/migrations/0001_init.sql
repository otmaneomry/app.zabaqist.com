-- Zabaqist — schéma initial
--
-- À exécuter dans Supabase → SQL Editor. Idempotent : réexécutable sans casse.
--
-- Deux choses vivent ici :
--   1. la liste des comptes autorisés, tant que le produit n'est pas public ;
--   2. les tables qui accueilleront la progression aujourd'hui coincée dans le
--      localStorage du navigateur (cinq fichiers sous lib/).
--
-- Chaque table est protégée par RLS avec la même règle : `auth.uid()` doit être
-- le propriétaire de la ligne. C'est la raison d'être du passage à Supabase Auth
-- — la clé publishable part dans chaque navigateur, et ce n'est sans danger que
-- parce que Postgres, et non le code serveur, décide qui voit quoi.

-- ─────────────────────────────────────────────────────────────────────────────
-- Normalisation des adresses
--
-- Gmail ignore les points : `omry.otmane@gmail.com` et `omryotmane@gmail.com`
-- sont le même compte, et Google renvoie la forme sans points. Une liste
-- blanche qui stocke la forme pointée refuserait donc la connexion réelle.
-- Tout passe par cette fonction, à l'écriture comme à la lecture.
-- ─────────────────────────────────────────────────────────────────────────────
create or replace function public.normalize_email(addr text)
returns text
language sql
immutable
as $$
  select case
    when lower(split_part(addr, '@', 2)) in ('gmail.com', 'googlemail.com')
      then replace(lower(split_part(addr, '@', 1)), '.', '') || '@gmail.com'
    else lower(addr)
  end
$$;

-- ─────────────────────────────────────────────────────────────────────────────
-- 1. Liste blanche
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.allowed_emails (
  email      text primary key,
  note       text,
  created_at timestamptz not null default now()
);

alter table public.allowed_emails enable row level security;

-- Aucune policy : la table est invisible via la clé publishable. Savoir qui est
-- invité n'a pas à être public, et rien côté client n'a besoin de la lire.

insert into public.allowed_emails (email, note) values
  (public.normalize_email('omry.otmane@gmail.com'), 'Otmane'),
  (public.normalize_email('zabaqist@gmail.com'),    'Compte Zabaqist')
on conflict (email) do nothing;

-- Le seul accès autorisé : une question fermée. `security definer` lui donne le
-- droit de lire la table, mais elle ne rend qu'un booléen — impossible d'en
-- extraire la liste.
create or replace function public.is_email_allowed(addr text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.allowed_emails
    where email = public.normalize_email(addr)
  )
$$;

revoke all on function public.is_email_allowed(text) from public;
grant execute on function public.is_email_allowed(text) to anon, authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- 2. Profil — une ligne par élève, créée à la première connexion
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  email      text not null,
  full_name  text,
  avatar_url text,
  -- lib/filiere.ts : le programme n'est pas le même en SM et en Sciences Exp.
  filiere    text check (filiere in ('sm', 'sx')),
  track      text check (track in ('2bac-sm-a', '2bac-sm-b', '2bac-svt', '2bac-pc')),
  -- lib/onboarding.ts : motivation, dailyGoal, completedAt. En jsonb parce que
  -- le tunnel change encore ; à figer en colonnes quand il aura arrêté de bouger.
  onboarding jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profil : lecture de soi" on public.profiles;
create policy "profil : lecture de soi" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profil : écriture de soi" on public.profiles;
create policy "profil : écriture de soi" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Une policy INSERT est nécessaire même si la ligne existe déjà : `upsert` côté
-- PostgREST est un `insert ... on conflict do update`, et RLS évalue le droit
-- d'insertion avant de savoir que ce sera une mise à jour. Sans elle, la
-- synchronisation du profil échouait — sans message, la requête étant
-- simplement refusée.
drop policy if exists "profil : création de soi" on public.profiles;
create policy "profil : création de soi" on public.profiles
  for insert with check (auth.uid() = id);

-- Création du profil au moment où Supabase crée le compte. Google range le nom
-- et la photo dans raw_user_meta_data, sous deux orthographes selon la façon
-- dont l'identité a été liée.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', new.raw_user_meta_data ->> 'picture')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Rattrapage : les comptes créés avant cette migration n'ont jamais déclenché
-- le trigger et n'ont donc aucun profil. Sans cette ligne, la synchronisation
-- écrirait dans le vide pour eux — silencieusement, ce qui est le pire cas.
insert into public.profiles (id, email, full_name, avatar_url)
select
  u.id,
  u.email,
  coalesce(u.raw_user_meta_data ->> 'full_name', u.raw_user_meta_data ->> 'name'),
  coalesce(u.raw_user_meta_data ->> 'avatar_url', u.raw_user_meta_data ->> 'picture')
from auth.users u
where u.email is not null
on conflict (id) do nothing;

-- ─────────────────────────────────────────────────────────────────────────────
-- 3. Progression par chapitre — lib/progressTracking.ts
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.course_progress (
  user_id            uuid not null references auth.users(id) on delete cascade,
  course_slug        text not null,
  last_visited_view  text,
  -- Les sections ouvertes, par id de vue. Un tableau et non une table de
  -- liaison : on les lit toujours en bloc, jamais une par une.
  completed_views    text[] not null default '{}',
  time_spent_seconds integer not null default 0,
  updated_at         timestamptz not null default now(),
  primary key (user_id, course_slug)
);

alter table public.course_progress enable row level security;

drop policy if exists "progression : la sienne" on public.course_progress;
create policy "progression : la sienne" on public.course_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ─────────────────────────────────────────────────────────────────────────────
-- 4. Checkpoints — lib/courseProgress.ts
--
-- La clé reproduit `checkpointKey(courseId, viewId, index)`, éclatée en
-- colonnes pour pouvoir compter les tentatives par chapitre sans découper une
-- chaîne.
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.checkpoints (
  user_id     uuid not null references auth.users(id) on delete cascade,
  course_slug text not null,
  view_id     text not null,
  idx         integer not null,
  draft       text not null default '',
  tried       boolean not null default false,
  -- Auto-évaluation : rien n'est corrigé automatiquement, c'est l'élève qui dit
  -- où il en est. Voir la boucle d'apprentissage dans DYNAMIC_COURSES.md.
  verdict     text check (verdict in ('got', 'close', 'not-yet')),
  hints       integer not null default 0,
  updated_at  timestamptz not null default now(),
  primary key (user_id, course_slug, view_id, idx)
);

alter table public.checkpoints enable row level security;

drop policy if exists "checkpoints : les siens" on public.checkpoints;
create policy "checkpoints : les siens" on public.checkpoints
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ─────────────────────────────────────────────────────────────────────────────
-- 5. Activité quotidienne — lib/activity.ts
--
-- `day` est le jour civil de l'élève, pas UTC : « hier » doit être son hier.
-- C'est au client de fournir la date, comme le fait déjà `dayKey()`.
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.activity (
  user_id     uuid not null references auth.users(id) on delete cascade,
  day         date not null,
  sections    integer not null default 0,
  checkpoints integer not null default 0,
  seconds     integer not null default 0,
  primary key (user_id, day)
);

alter table public.activity enable row level security;

drop policy if exists "activité : la sienne" on public.activity;
create policy "activité : la sienne" on public.activity
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Le tableau de bord lit toujours une fenêtre de jours consécutifs.
create index if not exists activity_user_day_idx
  on public.activity (user_id, day desc);
