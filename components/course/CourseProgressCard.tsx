'use client'

/**
 * The progress header, same as the hand-written course page's:
 * "Progression du cours", time spent, percentage, bar.
 *
 * Two differences, both because this course is a document:
 *  · the denominator is the chapter's real section count, not a hardcoded 6;
 *  · XP earned at the checkpoints is shown next to the percentage.
 *
 * It also owns the two side effects of *being on* a section — marking it read
 * and accumulating time — so the page itself stays a server component.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Group, Paper, Progress, Stack, Text } from '@mantine/core'
import { IconClock } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

import {
  chapterTotals,
  rememberCourseShape,
  type ChapterTotals,
} from '@/lib/courseProgress'
import {
  addTimeSpent,
  getCourseProgress,
  getFormattedTimeSpent,
  markTabCompleted,
} from '@/lib/progressTracking'

export default function CourseProgressCard({
  slug,
  activeId,
  viewIds,
  xpByView,
  cpsByView,
  markVisited = true,
}: {
  slug: string
  activeId: string
  viewIds: string[]
  xpByView: Record<string, number>
  /** Checkpoints per view, so a view's XP is shared rather than paid per one. */
  cpsByView?: Record<string, number>
  /**
   * Whether being on this page counts as having READ `activeId`.
   *
   * False on the course path: looking at the map is not reading the first
   * section, and marking it would light the second node before the reader has
   * opened the first.
   */
  markVisited?: boolean
}) {
  const t = useTranslations('course')
  const [timeSpent, setTimeSpent] = useState('0m')
  const [totals, setTotals] = useState<ChapterTotals>({
    sectionsDone: 0,
    xp: 0,
    attempted: 0,
  })

  const idsKey = viewIds.join(',')

  const refresh = useCallback(() => {
    const seen = getCourseProgress(slug)?.completedTabs ?? []
    setTotals(chapterTotals(slug, idsKey.split(','), xpByView, seen, cpsByView))
    setTimeSpent(getFormattedTimeSpent(slug))
    // xpByView is rebuilt each render but keyed by idsKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, idsKey])

  // Opening a section is what marks it read. localStorage does not exist during
  // SSR, so this can only run after mount.
  useEffect(() => {
    if (markVisited) markTabCompleted(slug, activeId)
    // Only this page knows the chapter's sections and what each is worth;
    // the home and landing pages read it back from here.
    rememberCourseShape(slug, xpByView, cpsByView)
    refresh()
  }, [slug, activeId, idsKey, markVisited, refresh])

  // Time on the chapter, flushed every 10s and once more on the way out — the
  // same cadence the hand-written course page uses.
  // Seeded at 0 rather than Date.now(): reading the clock during render is
  // impure and recomputed on every render, and the effect below overwrote the
  // value on its first line regardless — the render-time reading was never
  // the one that counted.
  const since = useRef(0)
  useEffect(() => {
    since.current = Date.now()
    const flush = () => {
      const secs = Math.floor((Date.now() - since.current) / 1000)
      if (secs <= 0) return
      addTimeSpent(slug, secs)
      since.current = Date.now()
    }
    const id = setInterval(() => {
      flush()
      setTimeSpent(getFormattedTimeSpent(slug))
    }, 10000)
    return () => {
      clearInterval(id)
      flush()
    }
  }, [slug])

  // A checkpoint saved on this page dispatches `zabaqist:progress`; another tab
  // fires the native `storage` event.
  useEffect(() => {
    window.addEventListener('zabaqist:progress', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('zabaqist:progress', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [refresh])

  const pct = viewIds.length
    ? Math.min(100, Math.round((totals.sectionsDone / viewIds.length) * 100))
    : 0

  return (
    <Paper shadow="sm" p="md" radius="md" withBorder>
      <Stack gap="xs">
        <Group justify="space-between">
          <Text size="sm" fw={600} c="dimmed">
            {t('progressTitle')}
          </Text>
          <Group gap="lg">
            <Group gap="xs">
              <IconClock size={16} />
              <Text size="sm" c="dimmed">
                {timeSpent}
              </Text>
            </Group>
            {totals.xp > 0 && (
              <Text size="sm" fw={600} c="dimmed" dir="ltr">
                ✦ {totals.xp} XP
              </Text>
            )}
            <Text size="sm" fw={700} c="mint">
              {pct}%
            </Text>
          </Group>
        </Group>
        <Progress value={pct} color="mint" size="lg" radius="xl" />
        <Text size="xs" c="dimmed">
          {t('sectionsSeen', { done: totals.sectionsDone, total: viewIds.length })}
        </Text>
      </Stack>
    </Paper>
  )
}
