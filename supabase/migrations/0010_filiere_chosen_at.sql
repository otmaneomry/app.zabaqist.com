-- ─────────────────────────────────────────────────────────────────────────────
-- La filière d'un appareil écrasée par la synchro d'un autre.
--
-- `pullAll` applique la règle : « le serveur gagne, sauf si CET appareil a
-- choisi plus récemment ». Pour dater le choix du serveur il lisait
-- `profiles.updated_at` — qui n'est pas la date d'un choix, mais celle du
-- dernier push, quel qu'en soit le motif.
--
-- Or l'upsert de `lib/sync.ts` envoie la filière stockée localement à CHAQUE
-- push, même quand elle n'a pas bougé, et `profiles_merge` retient le dernier
-- non-null arrivé (`coalesce(new, old)`). D'où :
--
--   10:00  le portable choisit SM        → serveur : SM, updated_at = 10:00
--   10:05  le téléphone lit un chapitre  → son push porte SX (choisi la
--          semaine dernière) → serveur : SX, updated_at = 10:05
--   10:10  le portable pull              → 10:05 > 10:00, « le serveur a
--          appris après moi » → le portable adopte SX
--
-- Le choix le plus récent perd, battu par une lecture de chapitre. Ce n'est
-- plus la boucle infinie d'avant 0006 — ça converge — mais ça converge sur la
-- mauvaise valeur, et l'élève voit deux programmes selon l'appareil.
--
-- La cause est qu'une seule colonne répondait à deux questions. On en ajoute
-- une qui ne répond qu'à celle-ci : `filiere_at`, la date du CHOIX. Elle ne
-- bouge que quand la filière bouge, le trigger arbitre dessus, et
-- `updated_at` redevient ce qu'il est — la date de la dernière écriture.
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.profiles
  add column if not exists filiere_at timestamptz;

-- Les profils déjà en base : la seule date disponible est `updated_at`. Elle
-- est fausse dans le détail et juste dans l'ordre, ce qui est tout ce dont la
-- comparaison a besoin. Sans ce rattrapage, `filiere_at` serait null partout
-- et le premier appareil à pousser un choix daté gagnerait — ce qui est
-- d'ailleurs le comportement voulu, mais autant partir de ce qu'on sait.
update public.profiles
set filiere_at = updated_at
where filiere is not null and filiere_at is null;

-- ── Le tri se fait sur la date du choix ──────────────────────────────────────
create or replace function public.profiles_merge()
returns trigger
language plpgsql
-- Pas de `security definer` : cette fonction ne lit aucune table, elle ne fait
-- qu'assigner des champs de NEW.
set search_path = ''
as $$
declare
  client_at timestamptz := least(coalesce(new.updated_at, now()), now());
  -- Même bride que 0007, et pour la même raison : un appareil réglé en 2027
  -- imposerait sa filière à tous les autres, définitivement.
  --
  -- Le `case` n'est pas de la décoration : `least()` IGNORE les NULL, donc
  -- `least(null, now())` vaut `now()`. Écrite sans lui, cette ligne donnait
  -- une date de choix à l'écriture qui n'en portait pas — exactement celle qui
  -- ne doit rien pouvoir revendiquer — et le garde-fou d'en dessous laissait
  -- passer tout ce qu'il était censé arrêter.
  chosen_at timestamptz :=
    case when new.filiere_at is null then null
         else least(new.filiere_at, now()) end;
  -- Une écriture ne peut revendiquer une filière que si elle DIT quand elle a
  -- été choisie. Sans date, elle ne prouve rien — exactement la règle que
  -- `pullAll` applique déjà dans l'autre sens à un appareil sans horodatage.
  asserts boolean := new.filiere is not null and chosen_at is not null;
  wins boolean := asserts and (old.filiere_at is null or chosen_at > old.filiere_at);
begin
  -- `||` sur jsonb : les clés de la nouvelle écriture gagnent, celles que
  -- l'ancienne était seule à porter survivent.
  new.onboarding := coalesce(old.onboarding, '{}'::jsonb) || coalesce(new.onboarding, '{}'::jsonb);

  if wins then
    -- La piste voyage avec la filière : les deux forment un seul choix, et
    -- garder l'une sans l'autre donnerait une piste qui n'appartient pas à la
    -- filière affichée — l'état que `lib/filiere.ts` refuse de relire.
    new.filiere    := new.filiere;
    new.track      := coalesce(new.track, old.track);
    new.filiere_at := chosen_at;
  else
    new.filiere    := old.filiere;
    new.track      := old.track;
    new.filiere_at := old.filiere_at;
  end if;

  new.full_name  := coalesce(new.full_name, old.full_name);
  new.avatar_url := coalesce(new.avatar_url, old.avatar_url);
  -- `updated_at` ne date plus que l'écriture. Plus rien ne s'en sert pour
  -- arbitrer quoi que ce soit, et c'est le but.
  new.updated_at := greatest(client_at, old.updated_at);
  return new;
end;
$$;

drop trigger if exists profiles_merge_trg on public.profiles;
create trigger profiles_merge_trg
  before update on public.profiles
  for each row execute function public.profiles_merge();
