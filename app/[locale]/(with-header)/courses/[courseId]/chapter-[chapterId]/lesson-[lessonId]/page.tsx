'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, Container, Title, Text, Group, Stack } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

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
        <Container size="xl" py="xl">
            <Group justify="space-between" align="center" mb="lg">
                <Button
                    variant="outline"
                    leftSection={<IconChevronLeft size={16} />}
                    onClick={() => router.back()}
                >
                    Back to course
                </Button>
                <Group>
                    <Button
                        variant="outline"
                        leftSection={<IconChevronLeft size={16} />}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        rightSection={<IconChevronRight size={16} />}
                    >
                        Next
                    </Button>
                </Group>
            </Group>

            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Stack>
                    <Title order={1} mb="md">{lessonData.title}</Title>
                    <Text mb="md">{lessonData.content}</Text>
                    <Text fw={700} mb="md">{lessonData.question}</Text>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                        {lessonData.options.map((option) => (
                            <Button
                                key={option}
                                variant={selectedOption === option ? "filled" : "outline"}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                    {showExplanation && (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Text fw={700} mb="xs">Explanation:</Text>
                            <Text>{lessonData.explanation}</Text>
                        </div>
                    )}
                    {showExplanation && (
                        <Button onClick={handleContinue} color="green">
                            Continue
                        </Button>
                    )}
                </Stack>
            </Card>
        </Container>
    );
};

export default LessonPage;
