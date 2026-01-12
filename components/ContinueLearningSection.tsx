import React from 'react';
import {Card, Button} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
    title: string;
    icon: string;
    level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, level }) => {
    const progress = Math.floor(Math.random() * 101);

    return (
        <Card padding="md">
            <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`} title={title} style={{textDecoration: 'none', color: 'inherit'}}>
                <div style={{marginBottom: '0.5rem', display: 'flex', justifyContent: 'center'}}>
                    <Image src={icon} alt={title} width={64} height={64}/>
                </div>
                <p style={{fontSize: '0.75rem', fontWeight: 600, color: '#2CB0A1', marginBottom: '0.25rem', textAlign: 'center'}}>{level}</p>
                <h3 style={{fontWeight: 'bold', fontSize: '0.875rem', textAlign: 'center'}}>
                    {title}
                </h3>
                <div style={{marginTop: '1rem', height: '0.25rem', backgroundColor: '#e5e7eb', borderRadius: '0.125rem'}}>
                    <div style={{height: '0.25rem', backgroundColor: '#2CB0A1', borderRadius: '0.125rem', width: `${progress}%`}}></div>
                </div>
            </Link>
        </Card>
    );
};

const ContinueLearningSection: React.FC = () => {
    const courses: CourseCardProps[] = [
        { title: "Dérivées et Primitives", icon: '/brilliant-image/suppercharging.png', level: "ANALYSE · BAC" },
        { title: "Nombres Complexes", icon: "/brilliant-image/Designing_Programs_Course_Card.png", level: "ALGÈBRE · BAC" },
        { title: "Géométrie dans l'Espace", icon: "/brilliant-image/search-fundamentals.png", level: "GÉOMÉTRIE · BAC" }
    ];

    return (
        <section>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Continuer l'apprentissage</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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

export default ContinueLearningSection;
