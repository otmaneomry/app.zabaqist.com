import React from 'react';
import {Card, CardContent} from "@/components/ui/card";

const RecommendedSection = () => (
    <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        <div className="grid grid-cols-1 gap-4">
            {[
                { title: 'Introduction to Algorithms', level: 'CS & Programming · Level 3' },
                { title: 'Solving Equations', level: 'Foundational Math · Level 1' },
                { title: 'Programming with Python', level: 'CS & Programming · Level 2' },
            ].map((course, index) => (
                <Card key={index}>
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-600 mb-2">{course.level}</p>
                        <h3 className="font-bold">{course.title}</h3>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
);


export default RecommendedSection;