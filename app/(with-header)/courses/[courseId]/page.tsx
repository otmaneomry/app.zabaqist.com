'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container, Card, Button, Text, Title, Stack, Group, Box } from "@mantine/core";
import { IconChevronUp, IconChevronDown, IconLock } from '@tabler/icons-react';

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

const CoursePage = ({ params }: { params: Promise<{ courseId: string }> }) => {
    const { courseId } = use(params);
    const courseData = getCourseData(courseId);
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const router = useRouter();

    const handleLessonClick = (chapterId: number, lessonId: number) => {
        router.push(`/courses/${courseId}/chapter-${chapterId}/lesson-${lessonId}`);
    };

    return (
        <Container size="xl" py="xl">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Stack>
                        <Image
                            src="/brilliant-image/computer-science.png"
                            alt="CS & Programming"
                            width={64}
                            height={64}
                        />
                        <div>
                            <Title order={2} mb="xs">{courseData.title}</Title>
                            <Text c="dimmed" mb="xs">{courseData.description}</Text>
                            <Text size="sm" c="dimmed">
                                <span style={{ marginRight: '0.5rem' }}>📚</span>
                                {courseData.lessons} Lessons
                            </Text>
                        </div>
                    </Stack>
                </Card>

                <div>
                    {courseData.chapters.map((chapter) => (
                        <div key={chapter.id} style={{ marginBottom: '1rem' }}>
                            <Button
                                variant="outline"
                                fullWidth
                                justify="space-between"
                                style={{ padding: '1rem 1.5rem', height: 'auto' }}
                                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                                rightSection={expandedChapter === chapter.id ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                            >
                                <Group>
                                    {chapter.isCompleted && <Text c="green" fw={700}>✓</Text>}
                                    {chapter.isLocked && <IconLock size={16} />}
                                    {chapter.title}
                                </Group>
                            </Button>
                            {expandedChapter === chapter.id && (
                                <Box mt="xs" p="md" style={{ backgroundColor: '#f1f3f5', borderRadius: '8px' }}>
                                    {chapter.lessons.map((lesson) => (
                                        <Button
                                            key={lesson.id}
                                            variant="subtle"
                                            fullWidth
                                            justify="flex-start"
                                            style={{ padding: '0.5rem 1rem', marginBottom: '0.5rem' }}
                                            onClick={() => handleLessonClick(chapter.id, lesson.id)}
                                        >
                                            {lesson.isCompleted && <Text c="green" fw={700} mr="xs">✓</Text>}
                                            {lesson.title}
                                        </Button>
                                    ))}
                                </Box>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CoursePage;
