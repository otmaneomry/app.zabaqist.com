import React from 'react'

import CoursesPage from './CoursesPage'
import CourseCatalog from '@/components/course/CourseCatalog'

export const metadata = {
  title: 'Cours · Zabaqist',
  description:
    'Chapitres de mathématiques du programme du Baccalauréat Marocain.',
}

export default function Courses() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      {/* Server-rendered from `content/course/`: the chapters that really open. */}
      <CourseCatalog />
      <CoursesPage />
    </div>
  )
}
