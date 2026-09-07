'use client';

/**
 * "Jump back in" — the course this device was last working on.
 *
 * It used to be a hardcoded link to Fonctions Logarithmiques, which is not
 * jumping back into anything. Now it reads the progress this browser stored and
 * resumes at the exact section the student left, so the card matches its label.
 *
 * With nothing started it opens the first chapter of the programme, which is
 * the right first step rather than an empty state.
 */

import React, { useCallback, useEffect, useState } from 'react';
import {Button, Card, Progress, Text} from "@mantine/core";
import {Link} from '@/i18n/navigation'
import CourseCover from '@/components/course/CourseCover';

import { useLocale, useTranslations } from 'next-intl';

import {
    courseLevel,
    courseTitle,
    LEGACY_COURSES,
    listCourses,
    type ContentLocale,
} from '@/lib/courseCatalog';
import { summarize } from '@/lib/courseProgress';
import {
    DEFAULT_FILIERE,
    FILIERE_EVENT,
    readFiliere,
    type Filiere,
} from '@/lib/filiere';

interface Entry {
    slug: string;
    title: string;
    titleAr: string;
    level: string;
    levelAr: string;
    seed: string;
    tone: 'analyse' | 'algebre' | 'neutral';
}

/** Every course a student in this filière can be in the middle of. */
const entriesFor = (f: Filiere): Entry[] => [
    ...listCourses(f).map(({slug, title, titleAr, level, levelAr, branch}) =>
        ({slug, title, titleAr, level, levelAr, seed: slug, tone: branch})),
    ...LEGACY_COURSES.filter((c) => c.filieres.includes(f))
        .map((c) => ({...c, seed: c.slug, tone: 'neutral' as const})),
];

const JumpBackInCard = () => {
    const t = useTranslations('dashboard');
    const locale = useLocale() as ContentLocale;
    const first = entriesFor(DEFAULT_FILIERE)[0];
    const [current, setCurrent] = useState<{entry: Entry; href: string; pct: number | null; started: boolean}>(
        () => ({entry: first, href: `/courses/${first.slug}`, pct: null, started: false}),
    );

    const refresh = useCallback(() => {
        const list = entriesFor(readFiliere()?.filiere ?? DEFAULT_FILIERE);
        const scored = list.map((entry) => ({entry, ...summarize(entry.slug)}));
        // Most recently touched wins; nothing touched falls back to chapter 1.
        const best = scored
            .filter((s) => s.started)
            .sort((a, b) => (b.lastUpdated ?? '').localeCompare(a.lastUpdated ?? ''))[0];
        const pick = best ?? scored[0];
        setCurrent({entry: pick.entry, href: pick.href, pct: pick.pct, started: !!best});
    }, []);

    // localStorage does not exist during SSR, so this can only run after mount.
    useEffect(() => {
        refresh();
        window.addEventListener('zabaqist:progress', refresh);
        window.addEventListener(FILIERE_EVENT, refresh);
        return () => {
            window.removeEventListener('zabaqist:progress', refresh);
            window.removeEventListener(FILIERE_EVENT, refresh);
        };
    }, [refresh]);

    const {entry, href, pct, started} = current;

    return (
        <Card
            padding="lg"
            radius="lg"
            withBorder
            className="transition-all hover:-translate-y-1 hover:shadow-lg"
        >
            <Link href={href} className="no-underline text-inherit">
                <div className="mb-4 flex h-40 w-full items-center justify-center">
                    <CourseCover seed={entry.seed} tone={entry.tone} className="h-32 w-32" />
                </div>
                <p className="mb-2 text-sm font-semibold tracking-wider text-zb-mint">
                    {courseLevel(entry, locale)}
                </p>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{courseTitle(entry, locale)}</h3>
            </Link>

            {started && pct !== null && (
                <div className="mb-4">
                    <Progress value={pct} color="mint" size="sm" radius="xl"/>
                    <Text size="xs" c="dimmed" mt={6}>
                        {t('percentRead', {pct})}
                    </Text>
                </div>
            )}

            <Link href={href} className="no-underline">
                <Button fullWidth color="mint">
                    {started ? t('resume') : t('start')}
                </Button>
            </Link>
        </Card>
    );
};

export default JumpBackInCard;
