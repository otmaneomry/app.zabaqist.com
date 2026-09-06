/**
 * The signed-in shell: brand chrome, then the page.
 *
 * `bg-zb-cream` and not the body's white. The cream is the ground the palette
 * was measured against — every AA ratio in scripts/test-course.mjs is "on
 * cream" — and it is what the landing page stands on, so leaving the app white
 * made signing in feel like leaving the product. It also earns the white cards
 * inside: on white they were invisible rectangles held together by a border.
 */

import React from 'react'

import Header from '@/components/Header'

export default function WithHeaderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-zb-cream">
      <Header />
      <main>{children}</main>
    </div>
  )
}
