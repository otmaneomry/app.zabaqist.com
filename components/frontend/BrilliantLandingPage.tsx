'use client';

import React, {useState} from 'react';
import { Button, Container, Title, Text, Group, Card, Flex, Stack, Box } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import Link from 'next/link';
import LoginModal from './LoginModal';
import SubjectIcon from "@/components/frontend/SubjectIcon";
import Image from "next/image";
import FooterFrontEnd from "@/components/frontend/FooterFrontEnd";

const BrilliantLandingPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div>
                <div style={{ backgroundColor: '#f1f3f5', width: '100%' }}>
                    <header>
                        <Container size="xl" py="md">
                            <Group justify="space-between" align="center">
                                <Title order={2}>Zabaqist</Title>
                                <Group>
                                    <Button variant="outline" radius="xl" onClick={openLoginModal}>
                                        Log in
                                    </Button>
                                    <Link href="/home" style={{ textDecoration: 'none' }}>
                                        <Button color="mint" size="sm">
                                            Get started
                                        </Button>
                                    </Link>
                                </Group>
                            </Group>
                        </Container>
                    </header>
                </div>
                <main style={{ flexGrow: 1 }}>
                    <section style={{ padding: '2.5rem 0', backgroundColor: '#f1f3f5' }}>
                        <Container size="xl">
                            <Flex direction={{ base: 'column', md: 'row' }} gap="xl" align="center">
                                <div style={{ flex: '0 0 50%' }}>
                                    <Stack justify="center" align="flex-start">
                                        <Title order={1} size="3.5rem" mb="lg">Learn by doing</Title>
                                        <Text size="xl" mb="xl">
                                            Guided interactive problem solving that&apos;s effective and fun.
                                            Master concepts in 15 minutes a day.
                                        </Text>
                                        <Link href="/home" style={{ textDecoration: 'none' }}>
                                            <Button
                                                size="lg"
                                                color="mint"
                                            >
                                                Get started
                                            </Button>
                                        </Link>
                                    </Stack>
                                </div>
                                <Box style={{ position: 'relative', flex: '0 0 50%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '675px' }}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                                        >
                                            <source
                                                src="https://brilliant.org/videos/homepage/lohp-hero-animation-dots.mp4"
                                                type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </Box>
                            </Flex>

                            <Group mt="xl" justify="space-between">
                                {['Math', 'Data Analysis', 'Computer Science', 'Programming & AI', 'Science & Engineering'].map((subject, index) => (
                                    <SubjectIcon key={index} subject={subject}/>
                                ))}
                            </Group>
                        </Container>
                    </section>

                    <section>
                        <Container size="xl">
                            <Stack py="md">
                                <Title order={2} ta="center" mb="xs">Master concepts in 15 minutes a day</Title>
                                <Text size="xl" ta="center" mb="md">
                                    Whether you're a complete beginner or ready to dive into advanced mathematics and beyond,
                                    Zabaqist makes it easy to level up fast with fun, bite-sized lessons.
                                </Text>
                            </Stack>

                            <Flex direction={{ base: 'column', md: 'row' }} gap="md" align="center">
                                <Box style={{ position: 'relative', flex: '0 0 50%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '675px' }}>
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                                        >
                                            <source
                                                src="https://brilliant.org/videos/homepage/hands-on-learning.mp4"
                                                type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </Box>

                                <div style={{ flex: '0 0 50%' }}>
                                    <Stack justify="center" align="flex-start">
                                        <Title order={2} mb="xs">Effective, hands-on learning</Title>
                                        <Text size="xl" mb="md">
                                            Visual, interactive lessons make concepts feel intuitive — so even complex ideas
                                            just click. Our real-time feedback and simple explanations make learning efficient.
                                        </Text>
                                    </Stack>
                                </div>
                            </Flex>

                            <Flex direction={{ base: 'column', md: 'row' }} gap="md" mt="md" align="center">
                                <div style={{ flex: '0 0 50%' }}>
                                    <Stack justify="center" align="flex-start">
                                        <Title order={2} mb="xs">Learn at your level</Title>
                                        <Text size="xl" mb="md">
                                            Students and professionals alike can hone dormant skills or learn new ones.
                                            Progress through lessons and challenges tailored to your level. Designed for ages 13 to 113.
                                        </Text>
                                    </Stack>
                                </div>
                                <Box style={{ position: 'relative', flex: '0 0 50%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '675px' }}>
                                        <Image
                                            src="https://brilliant.org/images/homepage/learn-at-your-level.svg"
                                            alt="learn at your level"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </Box>
                            </Flex>

                            <Flex direction={{ base: 'column', md: 'row' }} gap="md" mt="md" align="center">
                                <Box style={{ position: 'relative', flex: '0 0 50%', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1200px', maxHeight: '675px' }}>
                                        <Image
                                            src="https://brilliant.org/images/homepage/stay-motivated.svg"
                                            alt="Stay motivated"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </Box>
                                <div style={{ flex: '0 0 50%' }}>
                                    <Stack justify="center" align="flex-start">
                                        <Title order={2} mb="lg">Stay motivated</Title>
                                        <Text size="xl" mb="xl">
                                            Form a real learning habit with fun content that's always well-paced, game-like
                                            progress tracking, and friendly reminders.
                                        </Text>
                                    </Stack>
                                </div>
                            </Flex>
                        </Container>
                    </section>

                    <section style={{ padding: '1rem 0', backgroundColor: '#f1f3f5' }}>
                        <Container size="xl" ta="center">
                            <Title order={1} size="2.5rem" mb="xl">
                                Join thousands of Moroccan students mastering math on Zabaqist
                            </Title>

                            <Flex wrap="wrap" justify="space-around" align="center" gap="xl" mb="lg">
                                <Image
                                    src="https://brilliant.org/images/paywall/new-york-times.png"
                                    alt="The New York Times"
                                    width={120}
                                    height={40}
                                />
                                <Image
                                    src="https://brilliant.org/images/paywall/the-atlantic.png"
                                    alt="The Atlantic"
                                    width={120}
                                    height={40}
                                />

                                <Stack align="center">
                                    <Group mb="xs">
                                        {[...Array(5)].map((_, i) => (
                                            <IconStar key={i} size={20} fill="#ffd43b" color="#ffd43b" />
                                        ))}
                                    </Group>
                                    <Text size="sm">
                                        Over 50,000 5-star reviews on<br/>
                                        iOS App Store and Google Play
                                    </Text>
                                </Stack>

                                <Stack align="center">
                                    <Group align="center" mb="xs">
                                        <Text fw={700} size="lg">Trustpilot</Text>
                                        <Group gap="xs">
                                            {[...Array(5)].map((_, i) => (
                                                <IconStar key={i} size={20} fill="#00b67a" color="#00b67a" />
                                            ))}
                                        </Group>
                                    </Group>
                                    <Text size="sm">TrustScore 4.7 | 2,033 reviews</Text>
                                </Stack>

                                <Image
                                    src="https://brilliant.org/images/paywall/app-of-the-day.png"
                                    alt="Apple App of the Day"
                                    width={80}
                                    height={80}
                                />
                                <Image
                                    src="https://brilliant.org/images/paywall/best-app.png"
                                    alt="Google Play Best App"
                                    width={80}
                                    height={80}
                                />
                            </Flex>
                        </Container>
                    </section>

                    <section style={{ padding: '2rem 0' }}>
                        <Container size="xl" ta="center">
                            <Title order={2} mb="lg">Ready to start your learning journey?</Title>
                            <Link href="/home" style={{ textDecoration: 'none' }}>
                                <Button
                                    size="lg"
                                    color="mint"
                                >
                                    Get started
                                </Button>
                            </Link>
                        </Container>
                    </section>
                </main>
            </div>
            <FooterFrontEnd/>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal}/>
        </div>
    );
};

export default BrilliantLandingPage;
