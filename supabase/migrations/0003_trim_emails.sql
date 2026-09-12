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
update public.allowed_emails set email = email;
