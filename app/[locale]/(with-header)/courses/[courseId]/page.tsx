/**
 * Course page.
 *
 * When a chapter has been authored as markdown under `content/course/`, that
 * document IS the page: loaded, paginated and rendered verbatim. Slugs with no
 * document fall back to `CourseFallback` — the hardcoded chapter list and the
 * "coming soon" card the app shipped before.
 *
 * The layout deliberately mirrors the hand-written course
 * (`app/courses/fonctions-logarithmiques/page.tsx`): progress card, header,
 * scrollable tabs, content in a bordered card, quiz call to action. What
 * changed is where it comes from — the tabs are the chapter's own `##` plan,
 * not typed out by hand.
 *
 * Server component: the maths is rendered to HTML here, so a phone downloads
 * text and not a KaTeX runtime. Only the three pieces that read localStorage or
 * navigate are client components.
 */

import React from 'react'
import {Link} from '@/i18n/navigation'
import { notFound } from 'next/navigation'
import {
  Badge,
  Card,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconArrowLeft, IconListCheck } from '@tabler/icons-react'
import { getLocale, getTranslations } from 'next-intl/server'

import CourseDoc from '@/components/course/CourseDoc'
import ChapterComplete from '@/components/course/ChapterComplete'
import CoursePath, { type PathNode } from '@/components/course/CoursePath'
import StickyNextCard from '@/components/course/StickyNextCard'
import CourseProgressCard from '@/components/course/CourseProgressCard'
import CourseTabs from '@/components/course/CourseTabs'
import SectionPicker from '@/components/course/SectionPicker'
import ViewHeader from '@/components/course/ViewHeader'
import LinkButton from '@/components/ui/LinkButton'
import {
  checkpointXp,
  courseBySlug,
  courseDescription,
  courseLevel,
  listCourses,
  loadCourseDoc,
  tabsOf,
  viewLabel,
  type ContentLocale,
} from '@/lib/courseDoc'
import CourseFallback from './CourseFallback'

interface PageProps {
  params: Promise<{ courseId: string }>
  searchParams: Promise<{ s?: string }>
}

/** Prerender the markdown courses; other slugs still render on demand. */
export function generateStaticParams() {
  return listCourses().map((c) => ({ courseId: c.slug }))
}

export async function generateMetadata({ params }: Pick<PageProps, 'params'>) {
  const { courseId } = await params
  const meta = courseBySlug(courseId)
  return meta
    ? { title: `${meta.title} · Zabaqist`, description: meta.description }
    : { title: 'Cours · Zabaqist' }
}

export default async function CoursePage({ params, searchParams }: PageProps) {
  const { courseId } = await params
  const { s: requestedView } = await searchParams

  const doc = await loadCourseDoc(courseId)

  // No authored chapter for this slug — the pre-markdown page still serves it.
  if (!doc) return <CourseFallback courseId={courseId} />
  if (doc.views.length === 0) notFound()

  // Which section is being read. Unknown or absent -> the first.
  const foundIdx = doc.views.findIndex((v) => v.id === requestedView)
  const idx = foundIdx >= 0 ? foundIdx : 0
  const view = doc.views[idx]!
  const prev = idx > 0 ? doc.views[idx - 1] : undefined
  const next = doc.views[idx + 1]

  // The open tab is whichever one holds the section being read.
  const tabs = tabsOf(doc.views)
  const activeTab = tabs.find((t) => t.viewIds.includes(view.id)) ?? tabs[0]!
  const pickerItems = activeTab.viewIds.map((id) => ({
    id,
    label:
      doc.views.find((w) => w.id === id)?.titles.join(' · ') ?? activeTab.label,
  }))

  const viewIds = doc.views.map((v) => v.id)
  // Two different numbers, and conflating them was the bug. `xpByView` is what
  // each section is WORTH — the chapter card advertises their sum and the
  // celebration pays it. `cpsByView` is how many checkpoints share that worth,
  // so a view with four of them does not pay four times over.
  const xpByView = Object.fromEntries(doc.views.map((v) => [v.id, v.xp]))
  const cpsByView = Object.fromEntries(
    doc.views.map((v) => [v.id, v.checkpoints]),
  )
  const totalXp = doc.views.reduce((sum, v) => sum + v.xp, 0)

  const t = await getTranslations('course')
  const locale = (await getLocale()) as ContentLocale

  /**
   * With no `?s=`, the course IS the path — a journey with one node lit, not a
   * document with a table of contents on top. Opening a section switches to the
   * reader below. See BRILLIANT_WORKFLOW.md §3.
   */
  if (!requestedView) {
    const nodes: PathNode[] = doc.views.map((v) => ({
      id: v.id,
      label: v.titles.join(' · ') || v.parent || doc.meta.title,
      level: v.parent ?? v.titles[0] ?? doc.meta.title,
      isGate: v.kind === 'devoir',
      xp: v.xp,
    }))

    return (
      <Container size="lg" py="xl">
        <CourseProgressCard
          slug={courseId}
          activeId={view.id}
          viewIds={viewIds}
          xpByView={xpByView}
          markVisited={false}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          {/* The course's identity, pinned. It names the level you are in and
              what the chapter is — never how much is left. */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-zb-line bg-white p-6">
              <LinkButton
                href="/courses"
                variant="subtle"
                color="mint"
                size="compact-sm"
                leftSection={<IconArrowLeft size={16} />}
                pl={0}
              >
                {t('back')}
              </LinkButton>
              <Badge color="mint" size="lg" mt="sm" mb="sm">
                {courseLevel(doc.meta, locale)}
              </Badge>
              <Title order={2} mb="xs" dir={doc.meta.contentDir}>
                {doc.title}
              </Title>
              <Text size="sm" c="dimmed">
                {courseDescription(doc.meta, locale)}
              </Text>
              <Text size="sm" c="dimmed" mt="md">
                {t('stats', {
                  tabs: tabs.length,
                  sections: doc.views.length,
                  points: totalXp,
                })}
              </Text>
            </div>
          </aside>

          <div className="min-w-0">
            <CoursePath
              slug={courseId}
              nodes={nodes}
              dir={doc.meta.contentDir}
            />
            <StickyNextCard
              slug={courseId}
              nodes={nodes.map(({ id, label }) => ({ id, label }))}
              dir={doc.meta.contentDir}
            />
            {/* Fires once, when the last section has been read. */}
            <ChapterComplete
              slug={courseId}
              viewIds={viewIds}
              xpByView={xpByView}
            />
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Progress — also owns "section read" and time-on-chapter. */}
        <CourseProgressCard
          slug={courseId}
          activeId={view.id}
          viewIds={viewIds}
          xpByView={xpByView}
          cpsByView={cpsByView}
        />

        {/* Course header */}
        <div>
          <div className="mb-3">
            <LinkButton
              href="/courses"
              variant="subtle"
              color="mint"
              size="compact-sm"
              leftSection={<IconArrowLeft size={16} />}
              pl={0}
            >
              {t('back')}
            </LinkButton>
          </div>
          <Badge color="mint" size="lg" mb="sm">
            {courseLevel(doc.meta, locale)}
          </Badge>
          <Title order={1} mb="md" dir={doc.meta.contentDir}>
            {doc.title}
          </Title>
          <Text size="lg" c="dimmed" mb="xl" maw={720}>
            {courseDescription(doc.meta, locale)}
          </Text>
          <Group>
            <LinkButton
              href={`/quiz/${courseId}`}
              color="mint"
              leftSection={<IconListCheck size={16} />}
            >
              {t('quiz')}
            </LinkButton>
            <Text c="dimmed">
              {t('stats', {
                tabs: tabs.length,
                sections: doc.views.length,
                points: totalXp,
              })}
            </Text>
          </Group>
        </div>

        <Divider />

        {/* The chapter's own `##` plan, as tabs. */}
        <div>
          <CourseTabs
            slug={courseId}
            tabs={tabs}
            activeTab={activeTab.id}
            dir={doc.meta.contentDir}
          />

          <Stack gap="lg" pt="xl">
            <SectionPicker
              slug={courseId}
              items={pickerItems}
              activeId={view.id}
              dir={doc.meta.contentDir}
            />

            {/* `padding="xl"` is what the hand-written course uses, but on a
                390px phone it leaves a 292px column for formulas. Step it down
                below the sm breakpoint. */}
            <Card
              shadow="sm"
              padding="xl"
              radius="md"
              withBorder
              className="!p-4 sm:!p-8"
            >
              <ViewHeader view={view} />
              <CourseDoc
                body={view.body}
                courseId={courseId}
                viewId={view.id}
                baseXp={checkpointXp(view)}
                tools={view.tools}
                dir={doc.meta.contentDir}
              />
            </Card>

            <nav
              dir={doc.meta.contentDir}
              className="flex items-center justify-between gap-4 text-sm"
            >
              {prev ? (
                <Link
                  href={`/courses/${courseId}?s=${prev.id}`}
                  className="text-gray-500 transition-colors hover:text-gray-900"
                >
                  ← {viewLabel(prev)}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/courses/${courseId}?s=${next.id}`}
                  className="text-end font-medium text-zb-mint-deep hover:underline"
                >
                  {viewLabel(next)} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </Stack>
        </div>

        {/* Call to action.
            Only on the last section: this asks the reader what they can do
            now, and under the intro it was asking that before they had read
            anything. `next` is null exactly at the end of the chapter, which
            is the same condition the footer navigation already uses. */}
        {!next && (
        <Card
          shadow="lg"
          padding="xl"
          radius="md"
          withBorder
          style={{
            background: 'linear-gradient(135deg, var(--zb-mint) 0%, var(--zb-mint-deep) 100%)',
          }}
        >
          <Stack align="center" gap="md">
            <Title order={2} c="white" ta="center">
              {t('ctaTitle')}
            </Title>
            <Text size="lg" c="white" ta="center">
              {t('ctaBody')}
            </Text>
            <LinkButton
              href={`/quiz/${courseId}`}
              size="lg"
              variant="white"
              color="mint"
              leftSection={<IconListCheck size={20} />}
            >
              {t('ctaButton')}
            </LinkButton>
          </Stack>
        </Card>
        )}
      </Stack>
    </Container>
  )
}
