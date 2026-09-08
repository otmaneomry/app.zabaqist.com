-- ─────────────────────────────────────────────────────────────────────────────
-- 0002 — Journal des événements, et une garde sur la liste d'invités
--
-- Pourquoi : un compte présent dans `allowed_emails` s'est vu refuser l'entrée,
-- et rien dans le produit ne permettait de savoir pourquoi. Le callback ne
-- laissait aucune trace : ni l'adresse essayée, ni la raison du refus.
--
-- Deux causes possibles, toutes deux traitées ici :
--
--   1. Une ligne ajoutée à la main. `is_email_allowed` normalise l'adresse
--      REÇUE puis la compare à `email` tel qu'il est STOCKÉ. Les lignes du seed
--      passent par `normalize_email`, mais rien n'y obligeait ensuite : une
--      adresse saisie depuis le dashboard avec un point ou une majuscule est
--      stockée telle quelle et ne correspond alors jamais. Un trigger la
--      normalise désormais à l'écriture.
--
--   2. Un échec de la vérification confondu avec un refus. Corrigé côté
--      application ; le journal ci-dessous permet de distinguer les deux.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Le journal ────────────────────────────────────────────────────────────
-- Volontairement générique : `event` est libre et `detail` est du jsonb, pour
-- que d'autres usages que l'authentification puissent s'y écrire sans migration.
create table if not exists public.auth_events (
  id       bigint generated always as identity primary key,
  at       timestamptz not null default now(),
  -- 'signin_ok' | 'signin_denied' | 'signin_check_failed' | ...
  event    text not null,
  -- Normalisée, pour qu'une recherche retrouve la ligne quelle que soit la
  -- forme saisie. Nullable : tout événement n'a pas d'adresse.
  email    text,
  user_id  uuid references auth.users(id) on delete set null,
  -- Contexte libre. Ne pas y mettre de jeton, de code OAuth ni d'en-tête :
  -- cette table se lit depuis le dashboard, pas depuis un navigateur.
  detail   jsonb not null default '{}'::jsonb
);

create index if not exists auth_events_at_idx    on public.auth_events (at desc);
create index if not exists auth_events_email_idx on public.auth_events (email);
create index if not exists auth_events_event_idx on public.auth_events (event, at desc);

-- RLS active et AUCUNE policy, comme `allowed_emails` : la clé publishable part
-- dans chaque navigateur, et ce journal contient des adresses. Il se lit avec la
-- clé de service ou depuis le dashboard, et rien d'autre.
alter table public.auth_events enable row level security;

-- ── 2. L'écriture passe par une fonction, pas par la table ───────────────────
-- Sans policy, un insert direct est refusé — ce qui est voulu. Cette fonction
-- est le seul chemin d'écriture : elle normalise l'adresse et n'accepte que les
-- champs prévus, donc `anon` peut journaliser un refus sans pouvoir relire quoi
-- que ce soit ni écrire n'importe quoi.
create or replace function public.log_auth_event(
  p_event  text,
  p_email  text default null,
  p_detail jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Une longueur bornée : ce point d'entrée est atteignable sans session.
  if length(coalesce(p_event, '')) = 0 or length(p_event) > 64 then
    raise exception 'invalid event name';
  end if;

  insert into public.auth_events (event, email, user_id, detail)
  values (
    p_event,
    case when p_email is null then null else public.normalize_email(p_email) end,
    auth.uid(),
    coalesce(p_detail, '{}'::jsonb)
  );
end;
$$;

revoke all on function public.log_auth_event(text, text, jsonb) from public;
grant execute on function public.log_auth_event(text, text, jsonb) to anon, authenticated;

-- ── 3. La liste d'invités se normalise toute seule ───────────────────────────
-- La cause la plus probable du refus signalé : `is_email_allowed` compare
-- `email = normalize_email(addr)`, donc une ligne stockée non normalisée ne
-- correspond à rien. Le seed appelait `normalize_email`, mais un ajout depuis
-- le dashboard ne le fait pas — et échoue en silence, ce qui est le pire des
-- deux mondes.
create or replace function public.allowed_emails_normalize()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.email := public.normalize_email(new.email);
  return new;
end;
$$;

drop trigger if exists allowed_emails_normalize_trg on public.allowed_emails;
create trigger allowed_emails_normalize_trg
  before insert or update on public.allowed_emails
  for each row execute function public.allowed_emails_normalize();

-- Rattrape les lignes déjà présentes sous une forme non normalisée. Le trigger
-- ci-dessus s'applique à cet UPDATE, d'où l'écriture apparemment tautologique.
update public.allowed_emails
   set email = email
 where email <> public.normalize_email(email);
