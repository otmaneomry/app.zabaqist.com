'use client';

import StreakCard from "./StreakCard";
import JumpBackInCard from "@/components/JumpBackInCard";
import ComebackCard from "@/components/ComebackCard";
import PremiumCard from "@/components/PremiumCard";
import ContinueLearningSection from "@/components/ContinueLearningSection";
import RecommendedSection from "@/components/RecommendedSection";
import {ScrollArea, Container, Grid, Stack, Title} from "@mantine/core";
import React from "react";
import {useTranslations} from "next-intl";

const MainContent = () => {
    const t = useTranslations('dashboard');
    return (
        <Container size="xl" px="md" style={{width: '100%'}}>
            <Grid gutter="lg">
                {/* Left Sidebar */}
                <Grid.Col span={{base: 12, lg: 4}}>
                    <Stack gap="lg">
                        <section>
                            <Title order={2} mb="md" style={{color: '#1f2937'}}>
                                Welcome back!
                            </Title>
                            <Stack gap="md">
                                <StreakCard/>
                                <ComebackCard/>
                            </Stack>
                        </section>
                    </Stack>
                </Grid.Col>

                {/* Main Content Area */}
                <Grid.Col span={{base: 12, lg: 8}}>
                    <ScrollArea h={{base: 'auto', lg: 'calc(100vh - 100px)'}}>
                        <Stack gap="xl" pr={{base: 0, lg: 'md'}}>
                            <section>
                                <Title order={2} mb="md" style={{color: '#1f2937'}}>
                                    {t('jumpBackIn')}
                                </Title>
                                <Stack gap="md">
                                    <JumpBackInCard/>
                                    <PremiumCard/>
                                </Stack>
                            </section>
                            <ContinueLearningSection/>
                            <RecommendedSection/>
                        </Stack>
                    </ScrollArea>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default MainContent;
