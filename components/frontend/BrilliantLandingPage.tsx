'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import LoginModal from './LoginModal';
import {Card, CardContent} from "@/components/ui/card";
import SubjectIcon from "@/components/frontend/SubjectIcon";

const BrilliantLandingPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">Brilliant</div>
                    <div>
                        <Button variant="outline" className="mr-2" onClick={openLoginModal}>Log in</Button>
                        <Link href="/home" className="inline-block">
                            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                                Get started
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex-grow">
                <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Learn by doing</h1>
                        <p className="text-xl mb-8">Guided interactive problem solving that&apos;s effective and fun.
                            Master concepts in 15 minutes a day.</p>
                        <Link href="/home" className="inline-block">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                Get started
                            </Button>
                        </Link>
                        <div className="mt-12 flex justify-center space-x-8">
                            {['Math', 'Data Analysis', 'Computer Science', 'Programming & AI', 'Science & Engineering'].map((subject, index) => (
                                <SubjectIcon key={index} subject={subject}/>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Join over 10 million people learning on Brilliant</h2>
                        <div className="flex justify-center space-x-8 mb-8">
                            <div>
                                <p className="font-bold">10K+ Ratings</p>
                                <p>iOS App Store</p>
                            </div>
                            <div>
                                <p className="font-bold">60K+ Ratings</p>
                                <p>Google Play</p>
                            </div>
                        </div>
                        <p className="text-xl mb-8">Over 50,000 5-star reviews on iOS App Store and Google Play</p>
                        <div className="flex justify-center items-center space-x-4">
                            <p>TrustScore 4.7 2,033 reviews</p>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Master concepts in 15 minutes a day</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Effective, hands-on learning</h3>
                                    <p>Visual, interactive lessons make concepts feel intuitive — so even complex ideas
                                        just click. Our real-time feedback and simple explanations make learning
                                        efficient.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Learn at your level</h3>
                                    <p>Students and professionals alike can hone dormant skills or learn new ones.
                                        Progress through lessons and challenges tailored to your level. Designed for
                                        ages 13 to 113.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Guided bite-sized lessons</h3>
                                    <p>We make it easy to stay on track, see your progress, and build your
                                        problem-solving skills one concept at a time.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Stay motivated</h3>
                                    <p>Form a real learning habit with fun content that&apos;s always well-paced,
                                        game-like progress tracking, and friendly reminders.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to start your learning journey?</h2>
                        <Link href="/home" className="inline-block">
                            <Button size="lg">
                                Get started
                            </Button>
                        </Link>
                    </div>
                </section>

            </main>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal}/>
        </div>
    );
};

export default BrilliantLandingPage;