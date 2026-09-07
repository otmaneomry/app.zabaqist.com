'use client';

import React from 'react';

import { Link } from '@/i18n/navigation';

import { useLocale, useTranslations } from 'next-intl';

import {
    courseLevel,
    courseTitle,
    listCourses,
    type ContentLocale,
} from '@/lib/courseCatalog';
import {
    DEFAULT_FILIERE,
    FILIERE_EVENT,
    readFiliere,
    type Filiere,
} from '@/lib/filiere';
import { summarize } from '@/lib/courseProgress';
import CourseCard, { type CourseCardProps } from '@/components/CourseCard';

const ContinueLearningSection: React.FC = () => {
    const t = useTranslations('dashboard');
    const locale = useLocale() as ContentLocale;
    // The filière decides which chapters exist for this student.
    const [filiere, setFiliere] = React.useState<Filiere>(DEFAULT_FILIERE);
    React.useEffect(() => {
        const read = () => setFiliere(readFiliere()?.filiere ?? DEFAULT_FILIERE);
        read();
        window.addEventListener(FILIERE_EVENT, read);
        return () => window.removeEventListener(FILIERE_EVENT, read);
    }, []);
    // Authored chapters first — those are the ones that actually open. The rest
    // are the placeholder tiles the page has always shown.
    const courses: CourseCardProps[] = [
        ...listCourses(filiere).map((c) => ({
            title: courseTitle(c, locale),
            seed: c.slug,
            tone: c.branch,
            level: courseLevel(c, locale),
            href: `/courses/${c.slug}`,
            // Read here rather than inside the card, so the card stays a card.
            progress: summarize(c.slug).pct ?? 0,
        })),
    ];

    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-zb-ink">{t('continueLearning')}</h2>
            <div className="mb-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </div>
            <Link
                href="/courses"
                className="flex h-11 w-full items-center justify-center rounded-full border-2 border-zb-mint text-sm font-semibold text-zb-mint-deep no-underline transition-colors hover:bg-zb-mint-tint"
            >
                {t('seeMore')}
            </Link>
        </section>
    );
};

export default ContinueLearningSection;
