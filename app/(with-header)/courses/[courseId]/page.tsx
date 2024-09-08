'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Lock } from 'lucide-react';

// Mock data - replace with actual data fetching in production
const getCourseData = (courseId: string) => ({
    id: courseId,
    title: "How LLMs Work",
    description: "Take a peek under the hood of large language models (LLMs) to understand how they work.",
    lessons: 7,
    chapters: [
        {
            id: 1,
            title: "Intro to Language Models",
            lessons: [
                { id: 1, title: "Predicting the Next Word", isCompleted: false },
                { id: 2, title: "Calculating Word Probabilities", isCompleted: false },
            ],
            isCompleted: false,
        },
        {
            id: 2,
            title: "Improving Models",
            lessons: [
                { id: 1, title: "Creativity and Coherence", isCompleted: false },
                { id: 2, title: "Preprocessing", isCompleted: false },
            ],
            isLocked: true,
        },
        // Add more chapters as needed
    ]
});

const CoursePage = ({ params }: { params: { courseId: string } }) => {
    const courseData = getCourseData(params.courseId);
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const router = useRouter();

    const handleLessonClick = (chapterId: number, lessonId: number) => {
        router.push(`/courses/${params.courseId}/chapter-${chapterId}/lesson-${lessonId}`);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="md:col-span-1">
                    <CardContent className="p-6">
                        <div className="flex flex-col items-start">
                            <Image src="/brilliant-image/computer-science.png" alt="CS & Programming" width={64}
                                   height={64} className="mr-4"/>
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
                    {courseData.chapters.map((chapter) => (
                        <div key={chapter.id} className="mb-4">
                            <Button
                                variant="outline"
                                className="w-full justify-between py-4 px-6"
                                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                            >
                <span className="flex items-center">
                  {chapter.isCompleted && <span className="mr-2 text-green-500">✓</span>}
                    {chapter.isLocked && <Lock className="mr-2 w-4 h-4" />}
                    {chapter.title}
                </span>
                                {expandedChapter === chapter.id ? <ChevronUp /> : <ChevronDown />}
                            </Button>
                            {expandedChapter === chapter.id && (
                                <div className="mt-2 p-4 bg-gray-100 rounded">
                                    {chapter.lessons.map((lesson) => (
                                        <Button
                                            key={lesson.id}
                                            variant="ghost"
                                            className="w-full justify-start py-2 px-4 mb-2"
                                            onClick={() => handleLessonClick(chapter.id, lesson.id)}
                                        >
                                            {lesson.isCompleted && <span className="mr-2 text-green-500">✓</span>}
                                            {lesson.title}
                                        </Button>
                                    ))}
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