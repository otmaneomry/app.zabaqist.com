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
                <p style={{fontSize: '0.75rem', fontWeight: 600, color: '#9333ea', marginBottom: '0.25rem', textAlign: 'center'}}>{level}</p>
                <h3 style={{fontWeight: 'bold', fontSize: '0.875rem', textAlign: 'center'}}>
                    {title}
                </h3>
                <div style={{marginTop: '1rem', height: '0.25rem', backgroundColor: '#e5e7eb', borderRadius: '0.125rem'}}>
                    <div style={{height: '0.25rem', backgroundColor: '#22c55e', borderRadius: '0.125rem', width: `${progress}%`}}></div>
                </div>
            </Link>
        </Card>
    );
};

const ContinueLearningSection: React.FC = () => {
    const courses: CourseCardProps[] = [
        { title: "How LLMs Work", icon: '/brilliant-image/how-llms-work.png', level: "SCIENCE" },
        { title: "Designing Programs", icon: "/brilliant-image/Designing_Programs_Course_Card.png", level: "MATH" },
        { title: "Computer Science Fundamentals", icon: "/brilliant-image/computer-science.png", level: "CS & PROGRAMMING · LEVEL 2" }
    ];

    return (
        <section>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Continue learning</h2>
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
            <Button variant="outline" fullWidth>Show more</Button>
        </section>
    );
};

export default ContinueLearningSection;
