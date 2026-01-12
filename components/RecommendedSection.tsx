import React from 'react';
import {Button} from "@mantine/core";
import CourseCard from "@/components/CourseCard";

const RecommendedSection = () => {
    const courses = [
        { title: 'Introduction to Algorithms', level: 'CS & PROGRAMMING · LEVEL 2', icon: '/brilliant-image/computer-science.png' },
        { title: 'Solving Equations', level: 'FOUNDATIONAL MATH · LEVEL 1', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Programming with Python', level: 'CS & PROGRAMMING · LEVEL 2',  icon: '/brilliant-image/computer-science.png'},
        { title: 'Scientific Thinking', level: 'SCIENCE · LEVEL 1',  icon: '/brilliant-image/science.png' },
        { title: 'Quantum Computing', level: 'SCIENCE · LEVEL 5',  icon: '/brilliant-image/science.png' },
        { title: 'Search Engines', level: 'CS & PROGRAMMING', icon: '/brilliant-image/search-fundamentals.png' },
    ];

    return (
        <section style={{marginTop: '2rem'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>Recommended for you</h2>
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
            <Button variant="outline" fullWidth>Show more</Button>
        </section>
    );
};

export default RecommendedSection;
