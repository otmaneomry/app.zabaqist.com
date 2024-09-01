import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const CourseCard = ({ title, level, icon }) => (
    <Card className="overflow-hidden">
        <CardContent className="p-4 text-center">
            <div className="mb-2 flex justify-center">
                <Image src={icon} alt={title} width={64} height={64} />
            </div>
            <p className="text-xs font-semibold text-purple-600 mb-1">{level}</p>
            <h3 className="font-bold text-sm">{title}</h3>
        </CardContent>
    </Card>
);

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
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
            <Button variant="outline" className="w-full">Show more</Button>
        </section>
    );
};

export default RecommendedSection;