import {useTranslations} from 'next-intl';

import CourseCover from '@/components/course/CourseCover';
import React from 'react';
import Image from 'next/image';
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

const BrowseAllCourses = () => {
    const t = useTranslations('catalog');
    const categories = ['Toutes', 'Algèbre', 'Analyse', 'Géométrie', 'Probabilités'];
    const courses = [
        { title: 'Fonctions Logarithmiques', tone: 'analyse' as const },
        { title: 'Dérivées et Primitives', tone: 'analyse' as const },
        { title: 'Nombres Complexes', tone: 'analyse' as const },
        { title: 'Suites Numériques', tone: 'algebre' as const },
        { title: 'Géométrie dans l\'Espace', tone: 'neutral' as const },
        { title: 'Probabilités Continues', tone: 'analyse' as const },
    ];

    return (
        <section>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-zb-ink">{t('catalogAll')}</h2>

            <div style={{position: 'relative', marginBottom: '2rem'}}>
                <TextInput
                    placeholder="Rechercher une thématique..."
                    leftSection={<IconSearch size={20} style={{color: '#9ca3af'}} />}
                    styles={{
                        input: {
                            paddingLeft: '2.5rem',
                        }
                    }}
                />
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem'}}>
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        variant={index === 0 ? "filled" : "outline"}
                        radius="xl"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <h3 className="mb-6 text-2xl font-bold tracking-tight text-zb-ink">{t('catalogPopular')}</h3>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}} className="md:grid-cols-3 lg:grid-cols-6">
                {courses.map((course, index) => (
                    <div key={index} style={{backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', padding: '1rem', textAlign: 'center'}}>
                        <div className="mx-auto mb-2 h-24 w-24">
                            <CourseCover seed={course.title} tone={course.tone} className="h-full w-full" />
                        </div>
                        <div style={{backgroundColor: 'var(--zb-mint)', color: 'white', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.5rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.5rem'}}>BAC</div>
                        <div style={{fontSize: '0.875rem', fontWeight: 600}}>{course.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrowseAllCourses;
