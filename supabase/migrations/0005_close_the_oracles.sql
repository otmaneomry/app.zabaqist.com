-- ─────────────────────────────────────────────────────────────────────────────
-- Deux fonctions rendues à `anon` alors que rien d'anonyme ne les appelle.
--
-- `allowed_emails` n'a aucune policy : la table est invisible avec la clé
-- publiable, et 0001 en conclut qu'« il est impossible d'en extraire la
-- liste ». Ce n'est vrai que d'une lecture en bloc. `is_email_allowed` était
-- rendue à `anon`, et une question fermée posée autant de fois qu'on veut est
-- une liste : avec la clé publiable, qui est dans le bundle de chaque
-- navigateur, on teste une adresse après l'autre et on apprend qui est invité.
--
-- `log_auth_event` était rendue à `anon` aussi, et son commentaire l'assume
-- (« atteignable sans session »). Mais elle écrit dans le journal
-- d'authentification — celui que `npm run events` lit pour répondre à « pourquoi
-- cet élève n'arrive pas à se connecter ». N'importe qui pouvait y insérer un
-- `signin_ok` pour n'importe quelle adresse. Un journal auquel un inconnu peut
-- écrire ne sert plus à diagnostiquer quoi que ce soit.
--
-- ── Pourquoi `authenticated` suffit ─────────────────────────────────────────
-- Les deux appels applicatifs ont déjà une session au moment où ils tirent :
--
--   app/auth/callback/route.ts     — après `exchangeCodeForSession`, donc après
--                                    que la session existe ; les trois `log()`
--                                    précèdent le `signOut()`
--   app/[locale]/(with-header)/layout.tsx — derrière `proxy.ts`
--
-- Les deux outils de diagnostic passent à la clé secrète, qui ignore les
-- droits : `scripts/whois.mjs` et la sonde de `scripts/db-check.mjs`.
--
-- ⚠ Après application : faire une vraie connexion Google. C'est le seul chemin
--   que ce fichier peut casser, et aucun test local ne le couvre.
-- ─────────────────────────────────────────────────────────────────────────────

revoke execute on function public.is_email_allowed(text) from anon;
grant  execute on function public.is_email_allowed(text) to authenticated;

revoke execute on function public.log_auth_event(text, text, jsonb) from anon;
grant  execute on function public.log_auth_event(text, text, jsonb) to authenticated;
