import React from 'react';
import Image from 'next/image';
import { Button } from "@mantine/core";
import { IconChevronDown } from '@tabler/icons-react';
import CourseCard from "@/components/CourseCard";

const LearningPaths = () => {
    const courses = [
        { title: 'Programming with Python', level: 'LEVEL 2', icon: '/brilliant-image/computer-science.png' },
        { title: 'Introduction to Algorithms', level: 'LEVEL 2', icon: '/brilliant-image/computer-science.png' },
        { title: 'Next Steps in Python', level: 'LEVEL 3', icon: '/brilliant-image/computer-science.png' },
        { title: 'Computer Science Fundamentals', level: 'LEVEL 4', icon: '/brilliant-image/computer-science.png' },
        { title: 'Applied Python', level: 'LEVEL 5', icon: '/brilliant-image/computer-science.png' },
        { title: 'Introduction to Neural Networks', level: 'LEVEL 5', icon: '/brilliant-image/computer-science.png' },
    ];

    return (
        <section style={{marginBottom: '4rem'}}>
            <h1 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Learning Paths</h1>
            <p style={{color: '#4b5563', marginBottom: '2rem'}}>Step-by-step paths to mastery</p>

            <div style={{backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', padding: '1.5rem', marginBottom: '2rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Image src="/brilliant-image/computer-science.png" alt="CS & Programming" width={48} height={48} style={{marginRight: '1rem'}} />
                        <div>
                            <div style={{color: '#22c55e', fontSize: '0.875rem', fontWeight: 600}}>IN PROGRESS</div>
                            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>CS & Programming</h2>
                            <p style={{color: '#4b5563'}}>Develop skills in programming and algorithmic thinking</p>
                        </div>
                    </div>
                    <Button style={{backgroundColor: 'black', color: 'white'}}>Continue</Button>
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
                View all learning paths
            </Button>
        </section>
    );
};

export default LearningPaths;
