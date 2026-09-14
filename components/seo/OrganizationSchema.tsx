import React from 'react'

import { ALLOW_INDEXING, MARKETING_SITE } from '@/lib/publicPaths'
import { siteUrl } from '@/lib/siteUrl'

/**
 * Who Zabaqist is, in the form a search engine parses.
 *
 * The public surface had no structured data at all, so every rich result was
 * built by guessing from the prose.
 *
 * It names the same origin the canonical does, and that took a fix: this used
 * `siteUrl()` unconditionally, so while the beta was closed the landing page
 * served `"url":"https://app.zabaqist.com"` inside a document whose
 * `<link rel="canonical">` handed everything to `zabaqist.com`. Structured data
 * that disagrees with the canonical is a fourth vote in a contradiction Google
 * settles by guessing — and the whole point of the flag is that there is only
 * one vote. `image` follows the origin for the same reason: an OG card served
 * from the app for an entity said to live on the marketing site.
 *
 * What this deliberately does NOT emit is `Course`. Google's Course markup
 * describes a page it can fetch, and every chapter here answers a crawler with
 * a 307 to `/signin` — declaring thirteen courses whose pages are gated is the
 * kind of mismatch that earns a structured-data manual action rather than a
 * rich result. When the chapters open, the markup can follow them.
 *
 * Every field below is checkable against the site itself: no ratings, no
 * enrolment counts, no awards.
 */
export default function OrganizationSchema({
  description,
}: {
  description: string
}) {
  const site = ALLOW_INDEXING ? siteUrl() : MARKETING_SITE

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Zabaqist',
    url: site,
    description,
    image: `${site}/og.png`,
    inLanguage: ['fr-MA', 'ar-MA'],
    areaServed: { '@type': 'Country', name: 'Maroc' },
    // The programme the chapters follow, which is a fact about the content
    // rather than a claim about the product.
    educationalCredentialAwarded: 'Baccalauréat marocain — 2ème année',
    teaches: 'Mathématiques',
  }

  return (
    <script
      type="application/ld+json"
      // The object is built here, not from user input, so there is nothing to
      // escape beyond the closing-tag sequence.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}
