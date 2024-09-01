import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CourseCard = ({ title, icon, level }) => {
    const progress = Math.floor(Math.random() * 101);

    return (
        <Card>

            <CardContent className="p-4 text-center">
                <div className="mb-2 flex justify-center">
                    <Image src={icon} alt={title} width={64} height={64}/>
                </div>
                <p className="text-xs font-semibold text-purple-600 mb-1">{level}</p>
                <h3 className="font-bold text-sm">{title}</h3>

                <div className="mt-4 h-1 bg-gray-200 rounded">
                    <div className="h-1 bg-green-500 rounded" style={{width: `${progress}%`}}></div>
                </div>
            </CardContent>
        </Card>
    );
};

const ContinueLearningSection = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Continue learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <CourseCard title="How LLMs Work" icon='/brilliant-image/how-llms-work.png' level="SCIENCE" />
                <CourseCard title="Designing Programs" icon="/brilliant-image/Designing_Programs_Course_Card.png" level="MATH" />
                <CourseCard title="Computer Science Fundamentals" icon="/brilliant-image/computer-science.png" level="CS & PROGRAMMING · LEVEL 2" />
            </div>
            <Button variant="outline" className="w-full">Show more</Button>
        </section>
    );
};

export default ContinueLearningSection;