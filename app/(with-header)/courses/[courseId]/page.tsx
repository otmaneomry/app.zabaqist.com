'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container, Card, Button, Text, Title, Stack, Group, Box } from "@mantine/core";
import { IconChevronUp, IconChevronDown, IconLock } from '@tabler/icons-react';

// Mock data - replace with actual data fetching in production
const getCourseData = (courseId: string) => ({
    id: courseId,
    title: "Fonctions Logarithmiques",
    description: "Maîtrisez les fonctions logarithmiques, leurs propriétés et applications dans le programme du Baccalauréat Marocain.",
    lessons: 8,
    chapters: [
        {
            id: 1,
            title: "Introduction aux Logarithmes",
            lessons: [
                { id: 1, title: "Définition et Propriétés", isCompleted: false },
                { id: 2, title: "Logarithme Népérien", isCompleted: false },
            ],
            isCompleted: false,
        },
        {
            id: 2,
            title: "Équations Logarithmiques",
            lessons: [
                { id: 1, title: "Résolution d'Équations", isCompleted: false },
                { id: 2, title: "Inéquations Logarithmiques", isCompleted: false },
            ],
            isLocked: true,
        },
        {
            id: 3,
            title: "Applications",
            lessons: [
                { id: 1, title: "Dérivées de Fonctions Logarithmiques", isCompleted: false },
                { id: 2, title: "Études de Fonctions", isCompleted: false },
            ],
            isLocked: true,
        },
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
                            src="/brilliant-image/foundational-math.png"
                            alt="Mathématiques - Analyse"
                            width={64}
                            height={64}
                        />
                        <div>
                            <Title order={2} mb="xs">{courseData.title}</Title>
                            <Text c="dimmed" mb="xs">{courseData.description}</Text>
                            <Text size="sm" c="dimmed">
                                <span style={{ marginRight: '0.5rem' }}>📚</span>
                                {courseData.lessons} Leçons
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
                                    {chapter.isCompleted && <Text c="teal" fw={700}>✓</Text>}
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
                                            {lesson.isCompleted && <Text c="teal" fw={700} mr="xs">✓</Text>}
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
