-- ─────────────────────────────────────────────────────────────────────────────
-- La règle de fusion descend dans la base.
--
-- « Union et maximum, jamais le dernier gagne » était appliquée au PULL, côté
-- appareil. Le PUSH, lui, remplaçait la ligne entière. Deux appareils allumés
-- en même temps suffisaient donc à perdre du travail :
--
--   les deux lisent  completed_views = {A}
--   le téléphone écrit {A, B}
--   le portable écrit {A, C}        ← parti du même {A}
--   le serveur garde  {A, C}        ← B a disparu, et personne ne le saura
--
-- Aucun verrou côté client ne répare cela : les deux écritures sont correctes
-- vues de leur appareil. La fusion doit avoir lieu là où les deux se croisent.
--
-- `on conflict do update` déclenche les triggers BEFORE UPDATE, donc les upserts
-- que `lib/sync.ts` envoie déjà passent par ici sans qu'une ligne du client ne
-- change. La règle devient vraie pour tout écrivain, y compris ceux qu'on n'a
-- pas encore écrits.
--
-- ⚠ Conséquence assumée : la progression ne peut plus DÉCROÎTRE par une écriture
--   ordinaire. C'est la règle — une section lue reste lue — mais cela veut dire
--   qu'une remise à zéro passe par un DELETE puis un INSERT (un INSERT ne
--   déclenche pas un trigger BEFORE UPDATE), pas par un UPDATE.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Progression par chapitre ──────────────────────────────────────────────
create or replace function public.course_progress_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : ces fonctions ne lisent aucune table, elles ne
-- font qu'assigner des champs de NEW. Le droit ne servirait à rien et serait
-- une surface de plus.
set search_path = ''
as $$
begin
  -- Union des sections lues. `distinct` parce que les deux côtés se recouvrent
  -- presque toujours.
  new.completed_views := (
    select coalesce(array_agg(distinct v), '{}'::text[])
    from unnest(
      coalesce(old.completed_views, '{}'::text[]) ||
      coalesce(new.completed_views, '{}'::text[])
    ) as v
  );
  new.time_spent_seconds :=
    greatest(coalesce(old.time_spent_seconds, 0), coalesce(new.time_spent_seconds, 0));
  -- Une écriture qui ne sait pas où l'élève en était n'efface pas la réponse.
  new.last_visited_view := coalesce(new.last_visited_view, old.last_visited_view);
  new.updated_at := greatest(coalesce(new.updated_at, now()), old.updated_at);
  return new;
end;
$$;

drop trigger if exists course_progress_merge_trg on public.course_progress;
create trigger course_progress_merge_trg
  before update on public.course_progress
  for each row execute function public.course_progress_merge();

-- ── 2. Checkpoints ───────────────────────────────────────────────────────────
create or replace function public.checkpoints_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : ces fonctions ne lisent aucune table, elles ne
-- font qu'assigner des champs de NEW. Le droit ne servirait à rien et serait
-- une surface de plus.
set search_path = ''
as $$
begin
  -- `hints` est la SEULE chose qui ne fait que croître ici : la pénalité d'XP
  -- déjà payée sur un appareil ne doit pas être remboursée sur un autre.
  new.hints := greatest(coalesce(old.hints, 0), coalesce(new.hints, 0));

  -- `tried`, `verdict` et `draft` décrivent la TENTATIVE EN COURS, et
  -- « Réessayer » les remet délibérément à false / null / '' — c'est la reprise
  -- illimitée que le guide pédagogique exige. Les traiter comme monotones
  -- ressuscitait la tentative ratée : l'élève cliquait sur Réessayer, la
  -- synchronisation lui rendait son ancienne réponse et son ancien verdict.
  --
  -- C'est donc la date qui tranche. Une écriture en retard ne change rien ;
  -- une écriture récente gagne, y compris quand elle efface.
  if coalesce(new.updated_at, now()) < old.updated_at then
    new.tried   := old.tried;
    new.verdict := old.verdict;
    new.draft   := old.draft;
  end if;

  new.updated_at := greatest(coalesce(new.updated_at, now()), old.updated_at);
  return new;
end;
$$;

drop trigger if exists checkpoints_merge_trg on public.checkpoints;
create trigger checkpoints_merge_trg
  before update on public.checkpoints
  for each row execute function public.checkpoints_merge();

-- ── 3. Activité quotidienne ──────────────────────────────────────────────────
-- Le maximum sous-compte (voir l'en-tête de `lib/sync.ts` : 100+20 et 100+30 se
-- rejoignent à 130, pas 150). Ce fichier ne corrige pas cela — il empêche qu'une
-- écriture concurrente fasse RECULER un compteur, ce qui est une autre panne.
create or replace function public.activity_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : ces fonctions ne lisent aucune table, elles ne
-- font qu'assigner des champs de NEW. Le droit ne servirait à rien et serait
-- une surface de plus.
set search_path = ''
as $$
begin
  new.sections    := greatest(coalesce(old.sections, 0),    coalesce(new.sections, 0));
  new.checkpoints := greatest(coalesce(old.checkpoints, 0), coalesce(new.checkpoints, 0));
  new.seconds     := greatest(coalesce(old.seconds, 0),     coalesce(new.seconds, 0));
  return new;
end;
$$;

drop trigger if exists activity_merge_trg on public.activity;
create trigger activity_merge_trg
  before update on public.activity
  for each row execute function public.activity_merge();

-- ── 4. Profil : filière, piste, réponses du tunnel ───────────────────────────
create or replace function public.profiles_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : ces fonctions ne lisent aucune table, elles ne
-- font qu'assigner des champs de NEW. Le droit ne servirait à rien et serait
-- une surface de plus.
set search_path = ''
as $$
begin
  -- `||` sur jsonb : les clés de la nouvelle écriture gagnent, celles que
  -- l'ancienne était seule à porter survivent. Deux appareils répondant à deux
  -- questions différentes du tunnel ne s'effacent plus l'un l'autre.
  new.onboarding := coalesce(old.onboarding, '{}'::jsonb) || coalesce(new.onboarding, '{}'::jsonb);
  -- Un choix, pas une accumulation : le nouveau gagne — mais une écriture qui
  -- n'en porte aucun ne l'efface pas.
  new.filiere    := coalesce(new.filiere, old.filiere);
  new.track      := coalesce(new.track, old.track);
  new.full_name  := coalesce(new.full_name, old.full_name);
  new.avatar_url := coalesce(new.avatar_url, old.avatar_url);
  new.updated_at := greatest(coalesce(new.updated_at, now()), old.updated_at);
  return new;
end;
$$;

drop trigger if exists profiles_merge_trg on public.profiles;
create trigger profiles_merge_trg
  before update on public.profiles
  for each row execute function public.profiles_merge();
