/**
 * The signed-in shell: brand chrome, then the page.
 *
 * `bg-zb-cream` and not the body's white. The cream is the ground the palette
 * was measured against — every AA ratio in scripts/test-course.mjs is "on
 * cream" — and it is what the landing page stands on, so leaving the app white
 * made signing in feel like leaving the product. It also earns the white cards
 * inside: on white they were invisible rectangles held together by a border.
 *
 * The session is read here, once, and only the three fields the header draws
 * are passed down. `proxy.ts` has already turned away anyone without one, so
 * this is for rendering an avatar, not for deciding access.
 */

import React from 'react'

import { auth } from '@/auth'
import Header from '@/components/Header'

export default async function WithHeaderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth()
  const user = session?.user
    ? {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }
    : undefined

  return (
    <div className="min-h-screen bg-zb-cream">
      <Header user={user} />
      <main>{children}</main>
    </div>
  )
}
