import React from 'react';
import {Button} from "@mantine/core";
import CourseCard from "@/components/CourseCard";

const RecommendedSection = () => {
    const courses = [
        { title: 'Fonctions Exponentielles', level: 'ANALYSE · BAC', icon: '/brilliant-image/science.png' },
        { title: 'Équations Différentielles', level: 'ANALYSE · BAC', icon: '/brilliant-image/computer-science.png' },
        { title: 'Matrices et Déterminants', level: 'ALGÈBRE · BAC',  icon: '/brilliant-image/programming-python.png'},
        { title: 'Intégrales', level: 'ANALYSE · BAC',  icon: '/brilliant-image/how-llms-work.png' },
        { title: 'Probabilités Conditionnelles', level: 'PROBABILITÉS · BAC',  icon: '/brilliant-image/suppercharging.png' },
        { title: 'Limites et Continuité', level: 'ANALYSE · BAC', icon: '/brilliant-image/Designing_Programs_Course_Card.png' },
    ];

    return (
        <section style={{marginTop: '2rem'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Recommandé pour vous</h2>
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
