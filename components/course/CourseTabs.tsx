'use client'

/**
 * The chapter's `##` plan as the course tab bar.
 *
 * Same shape as the hand-written course page
 * (`app/courses/fonctions-logarithmiques/page.tsx`): a scrollable Mantine
 * `Tabs.List` with an icon per tab. The difference is that these tabs are not
 * typed out — they are the document's own top-level sections.
 *
 * Changing tab is a navigation, not local state, so the page stays a server
 * component and the maths keeps being rendered to HTML on the server.
 */

import React from 'react'
import { useRouter } from '@/i18n/navigation'
import { ScrollArea, Tabs } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
  IconBook,
  IconBulb,
  IconCalculator,
  IconNotebook,
  IconSchool,
  IconTrophy,
} from '@tabler/icons-react'

import type { CourseTab } from '@/lib/courseDoc'

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  introduction: IconBook,
  activites: IconBulb,
  cours: IconSchool,
  methodes: IconCalculator,
  exercices: IconNotebook,
  devoir: IconSchool,
  resume: IconTrophy,
}

export default function CourseTabs({
  slug,
  tabs,
  activeTab,
  dir = 'ltr',
}: {
  slug: string
  tabs: CourseTab[]
  activeTab: string
  /** The tabs ARE the chapter's `##` headings, so they follow the document. */
  dir?: 'ltr' | 'rtl'
}) {
  const router = useRouter()
  const isTablet = useMediaQuery('(min-width: 769px)')

  return (
    // `dir` goes on a wrapper, not on the ScrollArea: Mantine sizes a tab's
    // icon gap with logical margins, which resolve against the nearest
    // direction — put it lower and the icon ends up flush with the label.
    <div dir={dir}>
    <Tabs
      value={activeTab}
      onChange={(id) => {
        const tab = tabs.find((t) => t.id === id)
        // Land on the tab's first section; the picker below moves within it.
        if (tab?.viewIds[0]) router.push(`/courses/${slug}?s=${tab.viewIds[0]}`)
      }}
    >
      <ScrollArea
        type="auto"
        offsetScrollbars
        scrollbarSize={8}
        styles={{
          root: { maxWidth: '100%' },
          viewport: { paddingBottom: isTablet ? 0 : 8 },
        }}
      >
        <Tabs.List style={{ flexWrap: 'nowrap', minWidth: 'max-content' }}>
          {tabs.map((t) => {
            const Icon = ICONS[t.id] ?? IconBook
            return (
              // The icon is inside the label with an explicit gap rather than
              // in `leftSection`: Mantine spaces that with a logical margin
              // resolved against the DOCUMENT's direction, so on the Arabic
              // route it landed on the wrong side of an LTR tab bar.
              <Tabs.Tab key={t.id} value={t.id}>
                <span className="flex items-center gap-2">
                  <Icon size={16} />
                  {t.label}
                </span>
              </Tabs.Tab>
            )
          })}
        </Tabs.List>
      </ScrollArea>
    </Tabs>
    </div>
  )
}
