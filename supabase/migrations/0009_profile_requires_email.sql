-- ─────────────────────────────────────────────────────────────────────────────
-- Un compte sans adresse ferait échouer la connexion elle-même.
--
-- `public.profiles.email` est `not null` (0001). `handle_new_user` (0008)
-- insère `new.email` sans rien vérifier, et son trigger est un AFTER sur
-- `auth.users` : l'exception remonte dans la transaction de GoTrue et annule
-- l'INSERT — autrement dit, la création du compte échoue, sans que rien dans
-- l'application ne puisse l'expliquer.
--
-- Aucun compte n'est dans ce cas aujourd'hui : Google est le seul fournisseur
-- et renvoie toujours une adresse. Le rattrapage de 0008 le concédait déjà —
-- il filtre `where u.email is not null` — mais le trigger, lui, ne le faisait
-- pas. Un jour où le téléphone ou Apple serait ajouté comme fournisseur, la
-- première inscription casserait, et la piste remonterait à une contrainte
-- écrite deux ans plus tôt.
--
-- Un profil sans adresse n'a rien à dire de plus qu'une absence de profil :
-- l'allowlist travaille sur l'adresse, la synchro aussi. On sort donc sans
-- écrire, plutôt que d'assouplir la colonne.
--
-- Le reste de la fonction est identique à 0008 ; `create or replace` la
-- remplace en entier, le trigger existant continue de pointer dessus.
-- ─────────────────────────────────────────────────────────────────────────────

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- La colonne est `not null` et ceci est un AFTER trigger : sans cette sortie,
  -- une adresse absente ne remplit pas un profil de moins, elle refuse la
  -- connexion.
  if new.email is null then
    return new;
  end if;

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
