import React from 'react';
import Image from 'next/image';
import { TextInput, Button } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

const BrowseAllCourses = () => {
    const categories = ['New courses', 'Math', 'Data', 'Computer Science', 'Science'];
    const courses = [
        { title: 'Real-World Algebra', icon: '/brilliant-image/programming-python.png' },
        { title: 'How LLMs Work', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Clustering', icon: '/brilliant-image/Designing_Programs_Course_Card.png' },
        { title: 'Vectors', icon: '/brilliant-image/how-llms-work.png' },
        { title: 'Designing Programs', icon: '/brilliant-image/science.png' },
        { title: 'Applied Python', icon: '/brilliant-image/search-fundamentals.png' },
    ];

    return (
        <section>
            <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem'}}>Browse all 70+ courses</h2>

            <div style={{position: 'relative', marginBottom: '2rem'}}>
                <TextInput
                    placeholder="Search"
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

            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>New courses</h3>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}} className="md:grid-cols-3 lg:grid-cols-6">
                {courses.map((course, index) => (
                    <div key={index} style={{backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', padding: '1rem', textAlign: 'center'}}>
                        <div style={{position: 'relative', height: '6rem', marginBottom: '0.5rem'}}>
                            <Image src={course.icon} alt={course.title} layout="fill" objectFit="contain" />
                        </div>
                        <div style={{backgroundColor: '#22c55e', color: 'white', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.5rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.5rem'}}>NEW</div>
                        <div style={{fontSize: '0.875rem', fontWeight: 600}}>{course.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrowseAllCourses;
