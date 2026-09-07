import createNextIntlPlugin from 'next-intl/plugin'

/**
 * Sent on every response.
 *
 * No Content-Security-Policy yet, deliberately: GeoGebra loads an applet from
 * its own origin and KaTeX injects styles, so a CSP written blind would either
 * break the figures or be so permissive it protects nothing. It wants to be
 * added in Report-Only first, with the report read for a week — the same
 * escalation LOOP.md applies to everything else here.
 *
 * These four cost nothing and are safe today.
 */
const securityHeaders = [
  // The app is never meant to be framed; this blocks clickjacking outright.
  { key: 'X-Frame-Options', value: 'DENY' },
  // Stop a browser guessing that an uploaded file is really a script.
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Send the origin to other sites, never the full path a student is reading.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Nothing here needs a camera, a microphone or a location.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No `images.remotePatterns`: the brilliant.org entry existed for course art
  // that is gone. Card art is drawn by components/course/CourseCover.tsx now,
  // and an allow-listed remote host nothing loads from is a door left open.
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

export default withNextIntl(nextConfig)
