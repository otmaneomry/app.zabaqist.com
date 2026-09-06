import { createNavigation } from 'next-intl/navigation'

import { routing } from './routing'

/**
 * Locale-aware replacements for `next/link` and `next/navigation`.
 *
 * Import `Link` from here, never from "next/link", or the `/ar` prefix is
 * dropped the moment an Arabic reader clicks anything.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
