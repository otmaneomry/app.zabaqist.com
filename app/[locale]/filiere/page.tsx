'use client'

/**
 * Filière onboarding.
 *
 * Where a student lands right after connecting, and where "changer de filière"
 * goes. It is its own route rather than a modal so the choice is linkable,
 * back-navigable, and re-openable — a student who picked SVT by mistake should
 * not have to sign out to fix it.
 *
 * `?next=` carries where to go afterwards; it is read as a path only, never as
 * a URL, so it cannot be used to bounce someone off-site.
 */

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, Container, Stack, Text, Title } from '@mantine/core'
import { useTranslations } from 'next-intl'

import FilierePicker from '@/components/filiere/FilierePicker'
import Logo from '@/components/landing/Logo'
import { useRouter } from '@/i18n/navigation'
import { safeInternalPath } from '@/lib/safePath'

/** An in-app destination, or `/home`. Anything else is refused. */
const safeNext = (raw: string | null) => safeInternalPath(raw)

export default function FilierePage() {
  const t = useTranslations('auth')
  const router = useRouter()
  const next = safeNext(useSearchParams().get('next'))

  return (
    <main className="min-h-dvh bg-zb-cream font-display text-zb-ink">
      <Container size="xs" py="xl">
        <Stack gap="lg" align="center">
          <Logo size={22} />
          <Card shadow="sm" padding="xl" radius="lg" withBorder className="w-full">
            <Title order={2} mb="xs">
              {t('pickTitle')}
            </Title>
            <Text size="sm" c="dimmed" mb="lg">
              {t('pickSub')}
            </Text>
            <FilierePicker onDone={() => router.push(next)} />
          </Card>
        </Stack>
      </Container>
    </main>
  )
}
