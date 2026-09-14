-- ─────────────────────────────────────────────────────────────────────────────
-- L'horloge de l'élève n'est pas une source de vérité.
--
-- 0006 a fait descendre la fusion dans la base, et a eu raison : c'est là que
-- les deux écritures se croisent. Mais il a accepté `new.updated_at` tel quel —
--
--   new.updated_at := greatest(coalesce(new.updated_at, now()), old.updated_at);
--
-- — et depuis `lib/sync.ts` cette date vient du navigateur. Elle n'est plus
-- « quand le serveur a écrit », elle est « ce que la machine de l'élève croit
-- qu'il est ». Sans plafond, `greatest` fait de cette croyance un plancher
-- définitif.
--
-- Le scénario, et il n'a rien d'exotique dans une salle informatique :
--
--   un poste dont la pile CMOS est morte est réglé sur 2027
--   il envoie un checkpoint            → updated_at = 2027
--   le lendemain, depuis le téléphone  → updated_at = aujourd'hui
--   `aujourd'hui < 2027`               → tried, verdict et draft sont IGNORÉS
--   `greatest(aujourd'hui, 2027)`      → la ligne reste en 2027
--
-- La ligne est gelée. Pas une heure, pas une journée : jusqu'en 2027, depuis
-- TOUS les appareils de l'élève, y compris ceux dont l'horloge est juste. Et
-- silencieusement — l'upsert répond 200, l'application n'a rien à afficher.
-- Ce checkpoint-là ne peut plus jamais être réessayé.
--
-- Le correctif tient en un mot : `least`. Une date client est bornée par le
-- `now()` du serveur avant d'être comparée ou stockée. En retard, on la croit —
-- c'est le cas légitime, une écriture hors ligne remontée plus tard, et c'est
-- exactement ce que 0006 protège. En avance, on ne la croit pas : personne ne
-- peut avoir modifié une tentative après l'instant présent.
--
-- ⚠ Ce fichier ne redéfinit QUE les trois fonctions de 0006 qui lisent une date
--   venue du client. `activity_merge` n'en prend aucune et n'est pas touchée.
--   Les triggers créés par 0006 pointent sur ces fonctions par leur nom : un
--   `create or replace function` suffit, ils suivent. Ils sont tout de même
--   recréés ci-dessous pour que ce fichier soit vrai même exécuté seul.
--
-- Idempotent : réexécutable sans casse, comme les précédents.
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
declare
  -- La date annoncée par l'appareil, plafonnée à l'instant du serveur.
  client_at timestamptz := least(coalesce(new.updated_at, now()), now());
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
  new.updated_at := greatest(client_at, old.updated_at);
  return new;
end;
$$;

drop trigger if exists course_progress_merge_trg on public.course_progress;
create trigger course_progress_merge_trg
  before update on public.course_progress
  for each row execute function public.course_progress_merge();

-- ── 2. Checkpoints ───────────────────────────────────────────────────────────
-- C'est ici que le plafond compte le plus : la date ne sert pas seulement à
-- horodater la ligne, elle DÉCIDE si la tentative du client est retenue.
create or replace function public.checkpoints_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : ces fonctions ne lisent aucune table, elles ne
-- font qu'assigner des champs de NEW. Le droit ne servirait à rien et serait
-- une surface de plus.
set search_path = ''
as $$
declare
  -- Plafonnée AVANT la comparaison : une horloge en avance ne doit pas pouvoir
  -- gagner l'arbitrage, et surtout pas le geler pour les écritures suivantes.
  client_at timestamptz := least(coalesce(new.updated_at, now()), now());
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
  if client_at < old.updated_at then
    new.tried   := old.tried;
    new.verdict := old.verdict;
    new.draft   := old.draft;
  end if;

  new.updated_at := greatest(client_at, old.updated_at);
  return new;
end;
$$;

drop trigger if exists checkpoints_merge_trg on public.checkpoints;
create trigger checkpoints_merge_trg
  before update on public.checkpoints
  for each row execute function public.checkpoints_merge();

-- ── 3. Profil : filière, piste, réponses du tunnel ───────────────────────────
create or replace function public.profiles_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : ces fonctions ne lisent aucune table, elles ne
-- font qu'assigner des champs de NEW. Le droit ne servirait à rien et serait
-- une surface de plus.
set search_path = ''
as $$
declare
  client_at timestamptz := least(coalesce(new.updated_at, now()), now());
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
  -- `profiles.updated_at` n'arbitre rien dans la base, mais `pullAll` s'en sert
  -- pour savoir si le serveur a appris la filière après cet appareil. Une date
  -- en 2027 y répondrait « oui » pour toujours, et l'appareil au mauvais
  -- réglage imposerait sa filière à tous les autres.
  new.updated_at := greatest(client_at, old.updated_at);
  return new;
end;
$$;

drop trigger if exists profiles_merge_trg on public.profiles;
create trigger profiles_merge_trg
  before update on public.profiles
  for each row execute function public.profiles_merge();
