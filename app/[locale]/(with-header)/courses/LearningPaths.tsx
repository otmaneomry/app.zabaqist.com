import CourseCover from '@/components/course/CourseCover';
import React from 'react';
import Image from 'next/image';
import { Button } from "@mantine/core";
import { IconChevronDown } from '@tabler/icons-react';
import CourseCard from "@/components/CourseCard";

const LearningPaths = () => {
    const courses = [
        { title: 'Algèbre', level: 'BAC', tone: 'algebre' as const },
        { title: 'Analyse', level: 'BAC', tone: 'analyse' as const },
        { title: 'Géométrie', level: 'BAC', tone: 'neutral' as const },
        { title: 'Probabilités', level: 'BAC', tone: 'algebre' as const },
        { title: 'Suites Numériques', level: 'BAC', tone: 'analyse' as const },
        { title: 'Nombres Complexes', level: 'BAC', tone: 'algebre' as const },
    ];

    return (
        <section style={{marginBottom: '4rem'}}>
            <h1 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Thématiques Mathématiques</h1>
            <p style={{color: '#4b5563', marginBottom: '2rem'}}>Parcours du programme de Baccalauréat Marocain</p>

            <div style={{backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', padding: '1.5rem', marginBottom: '2rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CourseCover seed="zabaqist" tone="algebre" className="h-12 w-12" />
                        <div>
                            <div style={{color: 'var(--zb-mint)', fontSize: '0.875rem', fontWeight: 600}}>EN COURS</div>
                            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Mathématiques - Sciences Maths</h2>
                            <p style={{color: '#4b5563'}}>Programme complet du Baccalauréat Marocain</p>
                        </div>
                    </div>
                    <Button style={{backgroundColor: 'var(--zb-mint)', color: 'white'}}>Continuer</Button>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}} className="md:grid-cols-3 lg:grid-cols-6">
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </div>

            <Button
                variant="outline"
                style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                rightSection={<IconChevronDown size={16} />}
            >
                Voir toutes les thématiques
            </Button>
        </section>
    );
};

export default LearningPaths;
