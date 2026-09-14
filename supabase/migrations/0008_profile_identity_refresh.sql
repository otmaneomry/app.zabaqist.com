-- ─────────────────────────────────────────────────────────────────────────────
-- Un profil sans nom ni photo, et rien pour le réparer.
--
-- 0001 remplit `full_name` et `avatar_url` depuis `raw_user_meta_data` dans
-- `handle_new_user`, accroché à :
--
--   create trigger on_auth_user_created after insert on auth.users
--
-- INSERT. Une seule fois dans la vie d'un compte. Un compte qui existe déjà ne
-- repassera jamais par là, quel que soit le nombre de reconnexions.
--
-- Or la ligne de `public.profiles` PEUT disparaître ou naître plus tard :
-- supprimée pendant un test, créée avant que ces colonnes n'existent, ou —
-- le cas observé — recréée par l'upsert de `lib/sync.ts`, qui n'envoyait ni
-- l'un ni l'autre. Le compte du 6 septembre s'est ainsi retrouvé avec un
-- profil daté du 14, `full_name` et `avatar_url` à null, pendant que
-- `auth.users.raw_user_meta_data` contenait « Otmane Omry » et l'URL de la
-- photo depuis le début. L'application les lisait pour dessiner l'en-tête et
-- les jetait en chemin.
--
-- Deux corrections, et il faut les deux. Côté application, `lib/sync.ts` envoie
-- désormais les deux champs, parce que c'est son upsert qui crée la ligne dans
-- ce cas. Côté base, ce fichier :
--
--   1. le trigger se déclenche aussi sur UPDATE de `raw_user_meta_data`, donc
--      une reconnexion suffit à remettre à jour un profil incomplet — et à
--      suivre une photo Google que l'élève a changée ;
--   2. `on conflict` ne fait plus `do nothing` mais complète les trous ;
--   3. un rattrapage unique pour les comptes déjà dans cet état.
--
-- ── Pourquoi `coalesce(excluded, profiles)` et pas `excluded` tout court ─────
-- Parce que l'inverse effacerait. Si Google cesse un jour de renvoyer la photo
-- — permission retirée, compte d'entreprise — l'identité arriverait à null et
-- écraserait celle qui était juste. La règle est la même que celle de
-- `profiles_merge` dans 0006 : on complète, on n'efface pas. Le seul chemin qui
-- efface volontairement est l'élève qui supprime son compte, et celui-là passe
-- par `on delete cascade`.
-- ─────────────────────────────────────────────────────────────────────────────

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
  on conflict (id) do update set
    -- `profiles.x` est la valeur déjà en base ; `excluded.x` celle qu'on vient
    -- de calculer. On ne remplace que ce qui manque.
    email      = coalesce(excluded.email, profiles.email),
    full_name  = coalesce(excluded.full_name, profiles.full_name),
    avatar_url = coalesce(excluded.avatar_url, profiles.avatar_url);
  return new;
end;
$$;

-- INSERT *ou* UPDATE. La clause `of raw_user_meta_data` restreint au seul cas
-- qui nous intéresse : GoTrue écrit dans `auth.users` à chaque connexion
-- (`last_sign_in_at`), et déclencher sur toute la table ferait tourner cette
-- fonction pour rien à chaque fois.
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert or update of raw_user_meta_data on auth.users
  for each row execute function public.handle_new_user();

-- ── Rattrapage ──────────────────────────────────────────────────────────────
-- Les comptes déjà dans cet état : un profil existe, l'identité est vide, et
-- `auth.users` la connaît. Sans cette ligne il faudrait que chacun d'eux change
-- quelque chose dans son compte Google pour que le trigger ci-dessus se
-- réveille.
update public.profiles p
set
  full_name = coalesce(
    p.full_name,
    u.raw_user_meta_data ->> 'full_name',
    u.raw_user_meta_data ->> 'name'
  ),
  avatar_url = coalesce(
    p.avatar_url,
    u.raw_user_meta_data ->> 'avatar_url',
    u.raw_user_meta_data ->> 'picture'
  )
from auth.users u
where u.id = p.id
  and (p.full_name is null or p.avatar_url is null)
  and u.raw_user_meta_data is not null;

-- Et les comptes qui n'ont toujours aucune ligne, pour la même raison qu'en
-- 0001 : la synchronisation écrirait dans le vide, silencieusement.
insert into public.profiles (id, email, full_name, avatar_url)
select
  u.id,
  u.email,
  coalesce(u.raw_user_meta_data ->> 'full_name', u.raw_user_meta_data ->> 'name'),
  coalesce(u.raw_user_meta_data ->> 'avatar_url', u.raw_user_meta_data ->> 'picture')
from auth.users u
where u.email is not null
on conflict (id) do nothing;
