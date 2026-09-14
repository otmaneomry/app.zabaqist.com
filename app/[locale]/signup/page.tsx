/**
 * There is no separate sign-up any more.
 *
 * Google does not distinguish the two: the first time a student continues with
 * their account we create it, and every time after we recognise it. Keeping a
 * second page would mean asking someone to remember which door they came
 * through — so the route stays, because links off the marketing site and out of
 * old messages still point at it, and sends them to the one that works. It is
 * not in `INDEXABLE_PATHS` and never was: `app/robots.ts` disallows it in both
 * languages, and the sitemap has only ever offered `/`.
 *
 * The redirect is the locale-aware one from `i18n/navigation`, not the plain
 * `next/navigation` export. With that one, `GET /ar/signup` answered
 * `location: /signin` — the `/ar` gone, and with it the reader's language. An
 * Arabic student following a shared link landed on a French sign-in page.
 */

import { getLocale } from 'next-intl/server'

import { redirect } from '@/i18n/navigation'

export default async function SignUpPage() {
  redirect({ href: '/signin', locale: await getLocale() })
}
