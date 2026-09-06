'use client';

import React from 'react';
import {Card, Button} from "@mantine/core";
import Image from "next/image";
import {Link} from '@/i18n/navigation'

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

interface CourseCardProps {
    title: string;
    icon: string;
    level: string;
    /** Set for a real chapter: its route, and progress read from this device.
     *  Left undefined for the placeholder tiles, which have no course behind
     *  them and keep their decorative bar. */
    href?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, level, href }) => {
    const [progress, setProgress] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);
    const [target, setTarget] = React.useState(
        href ?? `/courses/${title.toLowerCase().replace(/\s+/g, '-')}`,
    );

    React.useEffect(() => {
        if (!href) {
            // Placeholder tile: nothing real to report, so the bar stays
            // decorative. Client-side only, to avoid a hydration mismatch.
            setProgress(Math.floor(Math.random() * 101));
            return;
        }
        const slug = href.split('/').pop()!;
        const read = () => {
            const s = summarize(slug);
            setProgress(s.pct ?? 0);
            setTarget(s.href);
        };
        read();
        window.addEventListener('zabaqist:progress', read);
        return () => window.removeEventListener('zabaqist:progress', read);
    }, [href]);

    return (
        <Card
            padding="md"
            radius="lg"
            withBorder
            style={{
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={target} title={title} style={{textDecoration: 'none', color: 'inherit'}}>
                <div style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}>
                    <Image src={icon} alt={title} width={64} height={64}/>
                </div>
                <p style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#2CB0A1',
                    marginBottom: '0.25rem',
                    textAlign: 'center',
                    letterSpacing: '0.05em'
                }}>{level}</p>
                <h3 style={{
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    color: '#1f2937'
                }}>
                    {title}
                </h3>
                <div style={{
                    marginTop: '1rem',
                    height: '0.25rem',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '0.125rem',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '0.25rem',
                        backgroundColor: '#2CB0A1',
                        borderRadius: '0.125rem',
                        width: `${progress}%`,
                        transition: 'width 0.3s ease'
                    }}></div>
                </div>
            </Link>
        </Card>
    );
};

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
            icon: c.image,
            level: courseLevel(c, locale),
            href: `/courses/${c.slug}`,
        })),
        { title: "Dérivées et Primitives", icon: '/brilliant-image/suppercharging.png', level: "ANALYSE · BAC" },
        { title: "Nombres Complexes", icon: "/brilliant-image/Designing_Programs_Course_Card.png", level: "ALGÈBRE · BAC" },
        { title: "Géométrie dans l'Espace", icon: "/brilliant-image/search-fundamentals.png", level: "GÉOMÉTRIE · BAC" }
    ];

    return (
        <section>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>{t('continueLearning')}</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
            }}>
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </div>
            <Link href="/courses" style={{textDecoration: 'none'}}>
                <Button variant="outline" fullWidth>{t('seeMore')}</Button>
            </Link>
        </section>
    );
};

export default ContinueLearningSection;
