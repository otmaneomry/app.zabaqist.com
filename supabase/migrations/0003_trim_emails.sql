-- ─────────────────────────────────────────────────────────────────────────────
-- `normalize_email` ne coupait pas les espaces.
--
-- Une adresse collée depuis un message ou un tableur arrive souvent avec une
-- espace finale. `split_part(addr, '@', 2)` rendait alors `gmail.com ` — qui
-- n'est dans aucune des deux branches — donc l'adresse tombait dans le `else`,
-- gardait son espace, ET perdait le repliement des points de Gmail.
--
-- Vérifié contre la base réelle avant ce correctif :
--
--   is_email_allowed('omryotmane@gmail.com')    → true
--   is_email_allowed('omryotmane@gmail.com ')   → false
--   is_email_allowed('omry.otmane@gmail.com')   → true
--   is_email_allowed('omry.otmane@gmail.com ')  → false
--
-- Les deux orthographes refusées d'un coup : c'est exactement la signature
-- `dotted=false plain=false` que `db:check` signale et que AGENTS/CLAUDE.md
-- décrit comme « la ligne stockée est mauvaise ». Voici pourquoi elle l'était.
--
-- Un élève invité était donc silencieusement refusé, et la seule trace était
-- une capture d'écran et quelqu'un disant « mais je suis sur la liste ».
-- ─────────────────────────────────────────────────────────────────────────────

create or replace function public.normalize_email(addr text)
returns text
language sql
immutable
as $$
  select case
    when lower(split_part(btrim(addr), '@', 2)) in ('gmail.com', 'googlemail.com')
      then replace(lower(split_part(btrim(addr), '@', 1)), '.', '') || '@gmail.com'
    else lower(btrim(addr))
  end
$$;

-- Les lignes déjà stockées avec une espace ne correspondent toujours à rien.
-- Le trigger `allowed_emails_normalize_trg` normalise à l'écriture, donc une
-- écriture sans changement suffit à les repasser dans la fonction corrigée.
--
-- Mais deux lignes peuvent se normaliser vers la MÊME adresse — `a@gmail.com`
-- et `a@gmail.com ` coexistaient sous l'ancienne fonction, et la clé primaire
-- n'en accepte qu'une. Une seule `update` s'arrêterait alors sur une violation
-- d'unicité et la migration entière échouerait, à cause de données que ce
-- fichier existe justement pour réparer.
--
-- On fusionne donc d'abord : la ligne la plus ancienne gagne, sa note est
-- conservée, et les doublons sont supprimés.
delete from public.allowed_emails a
using public.allowed_emails b
where public.normalize_email(a.email) = public.normalize_email(b.email)
  and (a.created_at, a.email) > (b.created_at, b.email);

update public.allowed_emails set email = email
where email is distinct from public.normalize_email(email);
