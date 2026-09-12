-- ─────────────────────────────────────────────────────────────────────────────
-- La bêta fermée, verrouillée à la source.
--
-- Jusqu'ici la liste d'invités n'était consultée qu'à deux endroits, tous deux
-- dans l'application : `app/auth/callback/route.ts` et la mise en page du shell
-- connecté. La clé publiable est dans le bundle de chaque navigateur, donc un
-- échange PKCE mené directement contre le projet ne passe par aucun des deux :
-- Supabase créait l'utilisateur, la session était valide, et seule RLS
-- empêchait d'en tirer quoi que ce soit.
--
-- Ce hook refuse la CRÉATION du compte. Rien n'est créé, donc il n'y a pas de
-- session à révoquer ensuite.
--
-- ⚠ Ce fichier ne suffit pas. Le hook doit être activé dans le tableau de bord
--   Supabase : Authentication → Hooks → Before User Created → Postgres →
--   `public.hook_restrict_signup_to_allowlist`. Tant qu'il n'y est pas, cette
--   fonction existe et ne s'exécute jamais.
--
-- ── Il refuse en cas de doute ───────────────────────────────────────────────
-- Une première version laissait passer sur erreur, pour qu'une panne de la
-- liste ne ferme pas le produit. C'était rouvrir le trou que ce fichier existe
-- pour fermer, précisément pendant une panne — et une serrure qui s'ouvre quand
-- elle ne sait pas n'est pas une serrure.
--
-- Ce que cela coûte est borné : seules les CRÉATIONS de compte sont bloquées.
-- Les sessions déjà ouvertes continuent, la lecture des chapitres continue, et
-- l'échappatoire est de désactiver le hook dans le tableau de bord — une action
-- visible, décidée, et réversible en un clic. Se faire refuser un compte est
-- une panne qu'on voit ; un compte créé sans invitation, non.
-- ─────────────────────────────────────────────────────────────────────────────

create or replace function public.hook_restrict_signup_to_allowlist(event jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  addr    text;
  invited boolean;
  refusal jsonb := jsonb_build_object(
    'error', jsonb_build_object(
      'http_code', 403,
      'message',
      'Zabaqist est en bêta fermée. Inscris-toi sur la liste d''attente : '
        || 'https://www.zabaqist.com/#waitlist'
    )
  );
begin
  addr := event -> 'user' ->> 'email';

  if addr is null or btrim(addr) = '' then
    return refusal;
  end if;

  -- `is_email_allowed` normalise des deux côtés : minuscules, espaces coupés,
  -- et les points de Gmail repliés (voir 0001 et 0003).
  select public.is_email_allowed(addr) into invited;

  if invited is true then
    return '{}'::jsonb;
  end if;

  return refusal;
exception
  when others then
    return refusal;
end;
$$;

-- Seul le service d'authentification l'appelle. Surtout pas `anon` : la
-- fonction répond oui/non sur une adresse, ce qui suffirait à énumérer la
-- liste d'invités avec la clé publiable.
grant execute on function public.hook_restrict_signup_to_allowlist(jsonb)
  to supabase_auth_admin;

revoke execute on function public.hook_restrict_signup_to_allowlist(jsonb)
  from authenticated, anon, public;
