'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data - replace with actual data fetching in production
const getLessonData = (courseId: string, chapterId: string, lessonId: string) => ({
    title: "Predicting the Next Word",
    content: 'Imagine you are writing an email. You start a sentence "Thanks for the update..."',
    question: "What would you predict the next word to be?",
    options: ["on", "about", "truck"],
    explanation: 'On" and "about" both make sense, but "truck" does not, even if you wrote a lot of emails about trucks.',
});

const LessonPage = ({ params }: { params: Promise<{ courseId: string, chapterId: string, lessonId: string }> }) => {
    const { courseId, chapterId, lessonId } = use(params);
    const router = useRouter();
    const lessonData = getLessonData(courseId, chapterId, lessonId);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setShowExplanation(true);
    };

    const handleContinue = () => {
        // Navigate to the next lesson or chapter
        // This is a placeholder - you'll need to implement the actual navigation logic
        console.log("Navigate to next lesson");
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-4 flex justify-between items-center">
                <Button variant="outline" onClick={() => router.back()}>
                    <ChevronLeft className="mr-2" /> Back to course
                </Button>
                <div className="flex items-center">
                    <Button variant="outline" className="mr-2">
                        <ChevronLeft /> Previous
                    </Button>
                    <Button variant="outline">
                        Next <ChevronRight />
                    </Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-6">
                    <h1 className="text-2xl font-bold mb-4">{lessonData.title}</h1>
                    <p className="mb-4">{lessonData.content}</p>
                    <p className="font-bold mb-4">{lessonData.question}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {lessonData.options.map((option) => (
                            <Button
                                key={option}
                                variant={selectedOption === option ? "default" : "outline"}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                    {showExplanation && (
                        <div className="mb-6">
                            <p className="font-bold mb-2">Explanation:</p>
                            <p>{lessonData.explanation}</p>
                        </div>
                    )}
                    {showExplanation && (
                        <Button onClick={handleContinue}>Continue</Button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default LessonPage;