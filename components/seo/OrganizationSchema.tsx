import React from 'react'

import { siteUrl } from '@/lib/siteUrl'

/**
 * Who Zabaqist is, in the form a search engine parses.
 *
 * The public surface had no structured data at all, so every rich result was
 * built by guessing from the prose.
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
  const site = siteUrl()

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
