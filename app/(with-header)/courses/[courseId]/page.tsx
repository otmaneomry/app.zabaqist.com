'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Lock } from 'lucide-react';

// This is a mock function to simulate fetching course data
const getCourseData = (courseId: string) => ({
    id: courseId,
    title: "How LLMs Work",
    description: "Take a peek under the hood of large language models (LLMs) to understand how they work.",
    lessons: 7,
    modules: [
        { id: 1, title: "Intro to Language Models", isCompleted: true },
        { id: 2, title: "Predicting the Next Word", isCompleted: true },
        { id: 3, title: "Calculating Word Probabilities", isCurrent: true },
        { id: 4, title: "Creativity and Coherence", isLocked: true },
        { id: 5, title: "Improving Models", isLocked: true },
        { id: 6, title: "Preprocessing", isLocked: true },
        { id: 7, title: "Tokenization", isLocked: true },
    ]
});

const CoursePage = ({ params }: { params: { courseId: string } }) => {
    const courseData = getCourseData(params.courseId);
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="md:col-span-1">
                    <CardContent className="p-6">
                        <div className="flex flex-col items-start">
                            <Image src="/brilliant-image/computer-science.png" alt="CS & Programming" width={64} height={64} className="mr-4"/>
                            <div>
                                <h2 className="text-2xl font-bold mt-2">{courseData.title}</h2>
                                <p className="text-gray-600 mt-2">{courseData.description}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    <span className="mr-2">📚</span>{courseData.lessons} Lessons
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="md:col-span-2">
                    {courseData.modules.map((module, index) => (
                        <div key={module.id} className="mb-4">
                            <Button
                                variant="outline"
                                className="w-full justify-between py-4 px-6"
                                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                            >
                <span className="flex items-center">
                  {module.isCompleted && <span className="mr-2 text-green-500">✓</span>}
                    {module.isCurrent && <span className="mr-2 w-2 h-2 bg-green-500 rounded-full"></span>}
                    {module.isLocked && <Lock className="mr-2 w-4 h-4" />}
                    {module.title}
                </span>
                                {expandedModule === module.id ? <ChevronUp /> : <ChevronDown />}
                            </Button>
                            {expandedModule === module.id && (
                                <div className="mt-2 p-4 bg-gray-100 rounded">
                                    {/* Add lesson content or description here */}
                                    <p>Lesson content for {module.title}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;