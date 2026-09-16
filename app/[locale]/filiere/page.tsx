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

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, Container, Stack, Text, Title } from '@mantine/core'
import { useTranslations } from 'next-intl'

import FilierePicker from '@/components/filiere/FilierePicker'
import Logo from '@/components/landing/Logo'
import { useRouter } from '@/i18n/navigation'
import { safeUnprefixedPath } from '@/lib/safePath'

/** Where the picker goes when `?next=` says nothing usable. */
const DEFAULT_NEXT = '/home'

/**
 * An in-app destination, or `/home`. Anything else is refused.
 *
 * `safeUnprefixedPath`, not `safeInternalPath`: `router` here is the
 * locale-aware one, so a `?next=/ar/progres` would be pushed as
 * `/ar/ar/progres` — and validating before stripping is the ordering that was
 * an open redirect on the sign-in page. One function does both, in the order
 * that holds.
 */
const safeNext = (raw: string | null) => safeUnprefixedPath(raw, DEFAULT_NEXT)

function Picker({ next }: { next: string }) {
  const router = useRouter()
  return <FilierePicker onDone={() => router.push(next)} />
}

function PickerAtUrlDestination() {
  const next = safeNext(useSearchParams().get('next'))
  return <Picker next={next} />
}

export default function FilierePage() {
  const t = useTranslations('auth')

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
            {/* `useSearchParams` needs a Suspense boundary above it or a
                production build of a static page FAILS — see the "Prerendering"
                section of node_modules/next/dist/docs/01-app/03-api-reference/
                04-functions/use-search-params.md. Nothing in this app
                prerenders today, which is the only reason the build has been
                passing; the boundary is what stops that from being a build
                break the day a route goes static.

                Only the picker is inside it, because only the picker needs the
                URL. The heading and the card render on the server either way,
                and the fallback is the same picker wired to the same `/home`
                the component itself falls back to — the zero state, not a
                spinner, so nothing moves when the URL arrives. */}
            <Suspense fallback={<Picker next={DEFAULT_NEXT} />}>
              <PickerAtUrlDestination />
            </Suspense>
          </Card>
        </Stack>
      </Container>
    </main>
  )
}
