/**
 * There is no separate sign-up any more.
 *
 * Google does not distinguish the two: the first time a student continues with
 * their account we create it, and every time after we recognise it. Keeping a
 * second page would mean asking someone to remember which door they came
 * through — so the route stays (links and the sitemap point at it) and sends
 * them to the one that works.
 */

import { redirect } from 'next/navigation'

export default function SignUpPage() {
  redirect('/signin')
}
