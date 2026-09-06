'use client';

/**
 * What a slug with no authored chapter shows.
 *
 * This used to carry a second branch — a hardcoded chapter accordion for
 * `fonctions-logarithmiques` — plus a self-redirect. Both are gone: that course
 * is markdown now, so it is served by the document pipeline and never reaches
 * this component, which leaves exactly one thing for this file to do.
 */

import React from 'react';
import {useTranslations} from 'next-intl';
import {Card, Container, Group, Stack, Text, Title} from '@mantine/core';
import {IconBook, IconTrophy} from '@tabler/icons-react';

import LinkButton from '@/components/ui/LinkButton';
import {listCourses} from '@/lib/courseCatalog';

const CourseFallback = ({courseId}: {courseId: string}) => {
    const t = useTranslations('catalog');
    // Point at a chapter that really exists rather than a hardcoded slug.
    const example = listCourses()[0];

    return (
        <Container size="lg" py="xl">
            <Stack gap="xl">
                <div>
                    <LinkButton
                        href="/courses"
                        variant="subtle"
                        color="mint"
                        size="compact-sm"
                        pl={0}
                    >
                        ← {t('soonBack')}
                    </LinkButton>
                </div>

                <Card shadow="lg" padding="xl" radius="md" withBorder>
                    <Stack align="center" gap="lg" py="xl">
                        <Title order={2} ta="center">
                            {t('soonTitle')}
                        </Title>
                        <Text size="lg" c="dimmed" ta="center" maw={600}>
                            {t('soonBody')}
                        </Text>

                        <Group gap="md" mt="md">
                            {example && (
                                <LinkButton
                                    href={`/courses/${example.slug}`}
                                    variant="light"
                                    color="mint"
                                    leftSection={<IconBook size={16} />}
                                >
                                    {t('soonExample')}
                                </LinkButton>
                            )}
                            <LinkButton
                                href="/quiz/1"
                                color="mint"
                                leftSection={<IconTrophy size={16} />}
                            >
                                {t('soonQuiz')}
                            </LinkButton>
                        </Group>
                    </Stack>
                </Card>
            </Stack>
        </Container>
    );
};

export default CourseFallback;
