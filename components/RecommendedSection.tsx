'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Button} from "@mantine/core";
import CourseCard from "@/components/CourseCard";

const RecommendedSection = () => {
    const t = useTranslations('catalog');
    const courses = [
        { title: 'Fonctions Exponentielles', level: 'ANALYSE · BAC', tone: 'analyse' as const },
        { title: 'Équations Différentielles', level: 'ANALYSE · BAC', tone: 'algebre' as const },
        { title: 'Matrices et Déterminants', level: 'ALGÈBRE · BAC',  tone: 'neutral' as const},
        { title: 'Intégrales', level: 'ANALYSE · BAC',  tone: 'analyse' as const },
        { title: 'Probabilités Conditionnelles', level: 'PROBABILITÉS · BAC',  tone: 'algebre' as const },
        { title: 'Limites et Continuité', level: 'ANALYSE · BAC', tone: 'neutral' as const },
    ];

    return (
        <section style={{marginTop: '2rem'}}>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-zb-ink">{t('recommended')}</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
            }}>
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
            <Button variant="outline" fullWidth>Voir plus</Button>
        </section>
    );
};

export default RecommendedSection;
