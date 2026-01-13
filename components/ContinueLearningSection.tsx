'use client';

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
    const [progress, setProgress] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
        // Set random progress only on client side to avoid hydration mismatch
        setProgress(Math.floor(Math.random() * 101));
    }, []);

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
            <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`} title={title} style={{textDecoration: 'none', color: 'inherit'}}>
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
