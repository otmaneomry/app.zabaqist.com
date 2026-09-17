-- ─────────────────────────────────────────────────────────────────────────────
-- Preuve que 0010 fait ce qu'il dit. À coller entier dans le SQL editor,
-- APRÈS avoir exécuté 0010 lui-même.
--
-- Même forme que `0006_merge_on_write.test.sql` : un TABLEAU avec une colonne
-- resultat qui dit PASS ou FAIL, parce qu'un `raise notice` ne s'affiche pas
-- dans cet éditeur et qu'un succès y ressemblait à un fichier inerte.
--
-- ── Chaque épreuve repart d'un état connu ───────────────────────────────────
-- La première version enchaînait les écritures : quand l'une échouait, les
-- suivantes échouaient aussi, et on ne pouvait pas dire laquelle était en
-- cause. Ici chaque scénario est précédé d'une remise à zéro faite TRIGGER
-- DÉSARMÉ — sinon la remise à zéro serait elle-même arbitrée par la règle
-- qu'on veut tester, et un profil dont la filière a été choisie il y a une
-- minute rendrait tout le fichier ininterprétable.
--
-- ── Ce que ça touche ────────────────────────────────────────────────────────
-- Un VRAI profil : la filière vit sur `public.profiles`, une ligne par compte,
-- et il n'y a pas de slug d'essai où se réfugier. Le test prend le premier
-- profil, met son état de côté, et le REMET exactement — y compris
-- `filiere_at` et `updated_at`. La dernière épreuve échoue si la restitution
-- n'est pas identique. À ne pas lancer pendant qu'un élève synchronise.
--
-- L'éditeur préviendra pour « destructive operations » (les `update`) et pour
-- une table sans RLS (`_filiere_check` est TEMPORAIRE, elle vit dans `pg_temp`
-- et PostgREST ne la voit pas). Répondre « Run without RLS ».
-- ─────────────────────────────────────────────────────────────────────────────

drop table if exists pg_temp._filiere_check;
drop table if exists pg_temp._filiere_saved;

create temporary table _filiere_saved as
select id, filiere, track, filiere_at, updated_at
  from public.profiles order by created_at limit 1;

create temporary table _filiere_check (
  epreuve text, obtenu text, attendu text, resultat text
);

-- ── 1. Un choix ancien ne bat pas un choix récent ───────────────────────────
-- Le scénario de 0010 : le portable a choisi SM il y a dix minutes ; le
-- téléphone pousse SX — choisi la semaine dernière — parce qu'un chapitre a
-- été lu. Avant 0010 le dernier non-null arrivé gagnait, et SX l'emportait.
alter table public.profiles disable trigger profiles_merge_trg;
update public.profiles p set filiere = 'sm', track = '2bac-sm-a',
       filiere_at = now() - interval '10 minutes',
       updated_at = now() - interval '10 minutes'
  from _filiere_saved s where p.id = s.id;
alter table public.profiles enable trigger profiles_merge_trg;

update public.profiles p set filiere = 'sx', track = '2bac-pc',
       filiere_at = now() - interval '7 days', updated_at = now()
  from _filiere_saved s where p.id = s.id;

insert into _filiere_check
select 'un choix ancien ne bat pas un choix récent',
       format('%s / %s', p.filiere, p.track), 'sm / 2bac-sm-a',
       case when p.filiere = 'sm' and p.track = '2bac-sm-a' then 'PASS' else 'FAIL' end
  from public.profiles p join _filiere_saved s on s.id = p.id;

-- …et la ligne est quand même datée : `updated_at` suit l'écriture, c'est
-- `filiere_at` qui ne suit que le choix.
insert into _filiere_check
select 'la lecture d''un chapitre date quand même la ligne',
       case when p.updated_at > p.filiere_at then 'updated_at > filiere_at' else 'non' end,
       'updated_at > filiere_at',
       case when p.updated_at > p.filiere_at then 'PASS' else 'FAIL' end
  from public.profiles p join _filiere_saved s on s.id = p.id;

-- ── 2. Une écriture sans date ne revendique rien ────────────────────────────
-- L'appareil qui a une filière d'avant la règle : il l'envoie sans
-- `filiere_at`, ne peut pas prouver quand il a choisi, et perd.
--
-- C'est l'épreuve qui a pris 0010 en défaut : `least()` ignore les NULL, donc
-- `least(null, now())` vaut `now()` et cette écriture-là se voyait attribuer
-- une date de choix. Elle gagnait tout.
alter table public.profiles disable trigger profiles_merge_trg;
update public.profiles p set filiere = 'sm', track = '2bac-sm-a',
       filiere_at = now() - interval '10 minutes',
       updated_at = now() - interval '10 minutes'
  from _filiere_saved s where p.id = s.id;
alter table public.profiles enable trigger profiles_merge_trg;

update public.profiles p set filiere = 'sx', track = '2bac-svt',
       filiere_at = null, updated_at = now()
  from _filiere_saved s where p.id = s.id;

insert into _filiere_check
select 'une filière sans date ne remplace rien',
       format('%s / %s', p.filiere, p.track), 'sm / 2bac-sm-a',
       case when p.filiere = 'sm' and p.track = '2bac-sm-a' then 'PASS' else 'FAIL' end
  from public.profiles p join _filiere_saved s on s.id = p.id;

-- ── 3. Un choix plus récent, lui, passe ─────────────────────────────────────
alter table public.profiles disable trigger profiles_merge_trg;
update public.profiles p set filiere = 'sm', track = '2bac-sm-a',
       filiere_at = now() - interval '10 minutes',
       updated_at = now() - interval '10 minutes'
  from _filiere_saved s where p.id = s.id;
alter table public.profiles enable trigger profiles_merge_trg;

update public.profiles p set filiere = 'sx', track = '2bac-pc',
       filiere_at = now(), updated_at = now()
  from _filiere_saved s where p.id = s.id;

insert into _filiere_check
select 'un choix plus récent gagne',
       format('%s / %s', p.filiere, p.track), 'sx / 2bac-pc',
       case when p.filiere = 'sx' and p.track = '2bac-pc' then 'PASS' else 'FAIL' end
  from public.profiles p join _filiere_saved s on s.id = p.id;

-- ── 4. Une date en 2027 est ramenée à maintenant ────────────────────────────
-- Même bride que 0007. L'écriture GAGNE (elle est plus récente que la base
-- posée juste au-dessus), donc sa date est bien celle qui est stockée : si
-- elle n'était pas bridée, `filiere_at` serait dans un an et plus aucun choix
-- ne pourrait la battre.
alter table public.profiles disable trigger profiles_merge_trg;
update public.profiles p set filiere = 'sm', track = '2bac-sm-a',
       filiere_at = now() - interval '10 minutes',
       updated_at = now() - interval '10 minutes'
  from _filiere_saved s where p.id = s.id;
alter table public.profiles enable trigger profiles_merge_trg;

update public.profiles p set filiere = 'sx', track = '2bac-pc',
       filiere_at = now() + interval '1 year', updated_at = now()
  from _filiere_saved s where p.id = s.id;

insert into _filiere_check
select 'une date future est ramenée à maintenant',
       format('%s, %s', p.filiere,
              case when p.filiere_at <= now() then 'bridée' else to_char(p.filiere_at, 'YYYY') end),
       'sx, bridée',
       case when p.filiere = 'sx' and p.filiere_at <= now() then 'PASS' else 'FAIL' end
  from public.profiles p join _filiere_saved s on s.id = p.id;

-- ── Remise en état ──────────────────────────────────────────────────────────
-- Trigger désarmé : il refuserait de faire reculer `filiere_at`.
alter table public.profiles disable trigger profiles_merge_trg;
update public.profiles p
   set filiere = s.filiere, track = s.track,
       filiere_at = s.filiere_at, updated_at = s.updated_at
  from _filiere_saved s where p.id = s.id;
alter table public.profiles enable trigger profiles_merge_trg;

insert into _filiere_check
select 'le profil est rendu tel qu''il était',
       format('%s / %s', coalesce(p.filiere, 'null'), coalesce(p.track, 'null')),
       format('%s / %s', coalesce(s.filiere, 'null'), coalesce(s.track, 'null')),
       case when p.filiere is not distinct from s.filiere
             and p.track is not distinct from s.track
             and p.filiere_at is not distinct from s.filiere_at
             and p.updated_at is not distinct from s.updated_at
            then 'PASS' else 'FAIL' end
  from public.profiles p join _filiere_saved s on s.id = p.id;

-- La dernière instruction, donc celle que l'éditeur affiche.
select * from _filiere_check order by resultat, epreuve;
