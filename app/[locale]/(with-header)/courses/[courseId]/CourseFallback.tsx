'use client';

/**
 * The pre-markdown course page: a hardcoded chapter list, or a "coming soon"
 * card for slugs with no content at all.
 *
 * Kept as the fallback for `/courses/[courseId]`. Courses with an authored
 * markdown chapter under `content/course/` are served by the document
 * pipeline in `page.tsx` instead and never reach this component.
 */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation'
import { useRouter } from '@/i18n/navigation';
import { Container, Card, Button, Text, Title, Stack, Group, Box, Badge } from "@mantine/core";
import { IconChevronUp, IconChevronDown, IconLock, IconBook, IconTrophy, IconArrowLeft } from '@tabler/icons-react';

// Course title mapping
const courseTitles: Record<string, string> = {
    'algèbre': 'Algèbre',
    'analyse': 'Analyse',
    'géométrie': 'Géométrie',
    'probabilités': 'Probabilités',
    'suites-numériques': 'Suites Numériques',
    'nombres-complexes': 'Nombres Complexes',
    'fonctions-logarithmiques': 'Fonctions Logarithmiques'
};

// Mock data - replace with actual data fetching in production
const getCourseData = (courseId: string) => ({
    id: courseId,
    title: courseTitles[courseId] || "Cours de Mathématiques",
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

const CourseFallback = ({ courseId }: { courseId: string }) => {
    const courseData = getCourseData(courseId);
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const router = useRouter();

    // Redirect to full course page for fonctions-logarithmiques
    useEffect(() => {
        if (courseId === 'fonctions-logarithmiques') {
            router.push('/courses/fonctions-logarithmiques');
        }
    }, [courseId, router]);

    const handleLessonClick = (chapterId: number, lessonId: number) => {
        router.push(`/courses/${courseId}/chapter-${chapterId}/lesson-${lessonId}`);
    };

    // Show coming soon page for other courses
    if (courseId !== 'fonctions-logarithmiques') {
        return (
            <Container size="lg" py="xl">
                <Stack gap="xl">
                    {/* Back Button */}
                    <Button
                        variant="subtle"
                        color="teal"
                        leftSection={<IconArrowLeft size={16} />}
                        component={Link}
                        href="/courses"
                        style={{ alignSelf: 'flex-start' }}
                    >
                        Retour aux cours
                    </Button>

                    {/* Course Header */}
                    <div>
                        <Badge color="teal" size="lg" mb="sm">
                            MATHÉMATIQUES · BAC
                        </Badge>
                        <Title order={1} mb="md">
                            {courseData.title}
                        </Title>
                        <Text size="lg" c="dimmed" mb="xl">
                            Cours du programme de Baccalauréat Marocain
                        </Text>
                    </div>

                    {/* Coming Soon Card */}
                    <Card shadow="lg" padding="xl" radius="md" withBorder>
                        <Stack align="center" gap="lg" py="xl">
                            <div style={{ fontSize: '4rem' }}>📚</div>
                            <Title order={2} ta="center">
                                Cours en développement
                            </Title>
                            <Text size="lg" c="dimmed" ta="center" maw={600}>
                                Ce cours fait partie du programme de Mathématiques du Baccalauréat Marocain.
                                Le contenu détaillé sera bientôt disponible !
                            </Text>

                            <Group gap="md" mt="md">
                                <Button
                                    variant="light"
                                    color="teal"
                                    leftSection={<IconBook size={16} />}
                                    component={Link}
                                    href="/courses/fonctions-logarithmiques"
                                >
                                    Voir un exemple de cours
                                </Button>
                                <Button
                                    color="teal"
                                    leftSection={<IconTrophy size={16} />}
                                    component={Link}
                                    href="/quiz/1"
                                >
                                    Passer un quiz
                                </Button>
                            </Group>
                        </Stack>
                    </Card>

                    {/* Demo Course Card */}
                    <Card shadow="sm" padding="xl" radius="md" withBorder style={{ background: 'linear-gradient(135deg, #2CB0A1 0%, #1a8f83 100%)' }}>
                        <Stack align="center" gap="md">
                            <Title order={3} c="white" ta="center">
                                Découvrez notre cours complet
                            </Title>
                            <Text size="lg" c="white" ta="center">
                                Explorez le cours "Fonctions Logarithmiques" pour voir un exemple de cours interactif avec KaTeX et GeoGebra
                            </Text>
                            <Button
                                size="lg"
                                variant="white"
                                color="teal"
                                component={Link}
                                href="/courses/fonctions-logarithmiques"
                                leftSection={<IconBook size={20} />}
                            >
                                Voir le cours complet
                            </Button>
                        </Stack>
                    </Card>
                </Stack>
            </Container>
        );
    }

    return (
        <Container size="xl" py="xl">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Stack>
                        <Image
                            src="/brilliant-image/data-analysis.png"
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

export default CourseFallback;
