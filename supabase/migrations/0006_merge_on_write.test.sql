-- ─────────────────────────────────────────────────────────────────────────────
-- Preuve que 0006 fait ce qu'il dit. À coller entier dans le SQL editor.
--
-- La version précédente n'affichait RIEN : elle parlait en `raise notice`, que
-- l'éditeur Supabase n'affiche pas, depuis un bloc `do $$ … $$` qui ne rend
-- aucune ligne. Un succès et un fichier inerte se ressemblaient exactement.
-- Celle-ci rend un TABLEAU, avec une colonne resultat qui dit PASS ou FAIL.
--
-- Les lignes d'essai portent le slug `__merge_test`, qui n'existe dans aucun
-- catalogue, et sont supprimées avant l'affichage. Rien ne persiste.
--
-- ── L'éditeur va prévenir deux fois, et les deux sont des faux positifs ──────
--   « destructive operations » : les `delete` ne visent que `__merge_test`.
--   « creates a table without RLS » : `_merge_check` est une table TEMPORAIRE.
--     Elle vit dans `pg_temp`, disparaît à la fin de la session, et PostgREST
--     ne la voit pas — vérifié, les deux clés répondent PGRST205 « Could not
--     find the table 'public._merge_check' ».
--   Répondre « Run without RLS ».
-- ─────────────────────────────────────────────────────────────────────────────

-- `pg_temp.` explicitement : sans le schéma, un vrai `_merge_check` serait la
-- cible de ce DROP.
drop table if exists pg_temp._merge_check;

delete from public.course_progress where course_slug = '__merge_test';
delete from public.checkpoints     where course_slug = '__merge_test';

-- ── Le scénario qui perdait une section ──────────────────────────────────────
-- Les deux appareils partent de {A} ; le portable écrit en second, depuis un
-- état périmé. Sans 0006 le serveur garde {A,C} et B disparaît.
insert into public.course_progress
  (user_id, course_slug, completed_views, time_spent_seconds, last_visited_view, updated_at)
select id, '__merge_test', '{A}', 100, 'A', now() from public.profiles limit 1;

insert into public.course_progress
  (user_id, course_slug, completed_views, time_spent_seconds, last_visited_view, updated_at)
select id, '__merge_test', '{A,B}', 120, 'B', now() + interval '1 minute' from public.profiles limit 1
on conflict (user_id, course_slug) do update set
  completed_views = excluded.completed_views, time_spent_seconds = excluded.time_spent_seconds,
  last_visited_view = excluded.last_visited_view, updated_at = excluded.updated_at;

insert into public.course_progress
  (user_id, course_slug, completed_views, time_spent_seconds, last_visited_view, updated_at)
select id, '__merge_test', '{A,C}', 110, 'C', now() + interval '2 minutes' from public.profiles limit 1
on conflict (user_id, course_slug) do update set
  completed_views = excluded.completed_views, time_spent_seconds = excluded.time_spent_seconds,
  last_visited_view = excluded.last_visited_view, updated_at = excluded.updated_at;

-- ── Le checkpoint : une vraie tentative, puis un appareil en retard, puis
--    « Réessayer », qui DOIT pouvoir effacer. ──────────────────────────────────
insert into public.checkpoints
  (user_id, course_slug, view_id, idx, draft, tried, verdict, hints, updated_at)
select id, '__merge_test', 'v', 0, 'ma réponse', true, 'not-yet', 2, now() from public.profiles limit 1;

insert into public.checkpoints
  (user_id, course_slug, view_id, idx, draft, tried, verdict, hints, updated_at)
select id, '__merge_test', 'v', 0, '', false, null, 0, now() - interval '1 hour' from public.profiles limit 1
on conflict (user_id, course_slug, view_id, idx) do update set
  draft = excluded.draft, tried = excluded.tried, verdict = excluded.verdict,
  hints = excluded.hints, updated_at = excluded.updated_at;

create temp table _merge_check as
select 'appareil en retard : ne touche à rien' as epreuve,
       format('tried=%s hints=%s draft=%L', tried, hints, draft) as observe,
       'tried=true hints=2 draft=''ma réponse''' as attendu,
       case when tried and hints = 2 and draft = 'ma réponse' then 'PASS' else 'FAIL' end as resultat
  from public.checkpoints where course_slug = '__merge_test';

insert into public.checkpoints
  (user_id, course_slug, view_id, idx, draft, tried, verdict, hints, updated_at)
select id, '__merge_test', 'v', 0, '', false, null, 2, now() + interval '5 minutes' from public.profiles limit 1
on conflict (user_id, course_slug, view_id, idx) do update set
  draft = excluded.draft, tried = excluded.tried, verdict = excluded.verdict,
  hints = excluded.hints, updated_at = excluded.updated_at;

insert into _merge_check
select 'union des sections (le scénario qui perdait B)',
       format('%s, %ss, %s', completed_views, time_spent_seconds, last_visited_view),
       '{A,B,C}, 120s, C',
       case when completed_views @> '{A,B,C}' and array_length(completed_views, 1) = 3
             and time_spent_seconds = 120 then 'PASS' else 'FAIL' end
  from public.course_progress where course_slug = '__merge_test'
union all
select 'Réessayer efface (reprise illimitée)',
       format('tried=%s verdict=%L draft=%L hints=%s', tried, verdict, draft, hints),
       'tried=false verdict=NULL draft='''' hints=2',
       case when not tried and verdict is null and draft = '' and hints = 2
            then 'PASS' else 'FAIL' end
  from public.checkpoints where course_slug = '__merge_test';

delete from public.course_progress where course_slug = '__merge_test';
delete from public.checkpoints     where course_slug = '__merge_test';

-- Après les suppressions, sinon il compte les lignes qu'il vient de poser.
insert into _merge_check
select 'aucune ligne d''essai ne reste', '', '0 ligne',
       case when (select count(*) from public.course_progress where course_slug = '__merge_test') = 0
             and (select count(*) from public.checkpoints     where course_slug = '__merge_test') = 0
            then 'PASS' else 'FAIL' end;

-- La dernière instruction, donc celle que l'éditeur affiche.
select * from _merge_check order by resultat, epreuve;
