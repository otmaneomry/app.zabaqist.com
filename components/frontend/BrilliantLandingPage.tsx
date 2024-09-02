'use client';

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import LoginModal from './LoginModal';
import {Card, CardContent} from "@/components/ui/card";
import SubjectIcon from "@/components/frontend/SubjectIcon";
import Image from "next/image";
import {Star} from "lucide-react";
import FooterFrontEnd from "@/components/frontend/FooterFrontEnd";

const BrilliantLandingPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="">
                <div className="bg-gray-100 w-full">
                    <header className="container mx-auto max-w-7xl">
                        <div className="py-6 flex justify-between items-center">
                            <div className="text-2xl font-bold">Brilliant</div>
                            <div>
                                <Button variant="outline" className="mr-2 rounded-2xl" onClick={openLoginModal}>Log
                                    in</Button>
                                <Link href="/home" className="inline-block">
                                    <Button size="sm"
                                            className="bg-green-500 hover:bg-green-600 text-white rounded-2xl">
                                        Get started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </header>
                </div>
                <main className="flex-grow">
                    <section className="py-10 bg-gray-100">
                        <div className="container mx-auto max-w-7xl">
                            <div className="flex flex-row">
                                <div className="flex flex-col justify-center items-start w-1/2">
                                    <h1 className="text-5xl font-bold mb-6">Learn by doing</h1>
                                    <p className="text-xl mb-8 flex items-start text-left">Guided interactive problem
                                        solving that&apos;s effective and fun. Master concepts in 15 minutes a day.</p>
                                    <Link href="/home" className="inline-block">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-2xl border-2 border-blue-400">
                                        Get started
                                    </Button>
                                </Link>
                            </div>
                            <section
                                className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-gray-100">
                                <div
                                    className="relative w-full h-full max-w-[1200px] max-h-[675px]">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-contain"
                                    >
                                        <source
                                            src="https://brilliant.org/videos/homepage/lohp-hero-animation-dots.mp4"
                                            type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </section>
                        </div>

                        <div className="mt-12 flex justify-between">
                            {['Math', 'Data Analysis', 'Computer Science', 'Programming & AI', 'Science & Engineering'].map((subject, index) => (
                                <SubjectIcon key={index} subject={subject}/>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-12">Join over 10 million people learning on Brilliant</h2>

                        <div className="flex flex-wrap justify-around items-center gap-8 mb-8">
                            <Image src="https://brilliant.org/_next/image/?url=%2Fimages%2Fpaywall%2Fnew-york-times.png&w=384&q=75" alt="The New York Times" width={120} height={40}/>
                            <Image src="https://brilliant.org/_next/image/?url=%2Fimages%2Fpaywall%2Fthe-atlantic.png&w=128&q=75" alt="The Atlantic" width={120} height={40}/>

                            <div className="flex flex-col items-center">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-sm">
                                    Over 50,000 5-star reviews on<br/>
                                    iOS App Store and Google Play
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="flex items-center mb-2">
                                    <Image src="/trustpilot-logo.png" alt="Trustpilot" width={100} height={24}/>
                                    <div className="flex ml-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-green-500 fill-current"/>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm">TrustScore 4.7 | 2,033 reviews</p>
                            </div>

                            <Image src="https://brilliant.org/_next/image/?url=%2Fimages%2Fpaywall%2Fapp-of-the-day.png&w=256&q=75" alt="Apple App of the Day" width={80} height={80}/>
                            <Image src="https://brilliant.org/_next/image/?url=%2Fimages%2Fpaywall%2Fbest-app.png&w=256&q=75" alt="Google Play Best App" width={80} height={80}/>
                        </div>
                    </div>
                </section>

                    <section className="py-16 container mx-auto max-w-7xl">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-2">Master concepts in 15 minutes a day</h2>
                            <p className="text-xl mb-8 text-center">
                                Whether you’re a complete beginner or ready to dive into machine learning and beyond,
                                Brilliant makes it easy to level up fast with fun, bite-sized lessons.
                            </p>
                            <div className="flex flex-row py-6">
                                <section
                                    className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                                    <div
                                        className="relative w-full h-full max-w-[1200px] max-h-[675px]">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-contain"
                                        >
                                            <source
                                                src="https://brilliant.org/videos/homepage/hands-on-learning.mp4"
                                                type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </section>

                                <div className="flex flex-col justify-center items-start w1-2">
                                    <h1 className="text-3xl font-bold mb-6">Effective, hands-on learning</h1>
                                    <p className="text-xl mb-8 flex items-start text-left">Guided
                                        Visual, interactive lessons make concepts feel intuitive — so even complex ideas
                                        just click. Our real-time feedback and simple explanations make learning
                                        efficient.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row py-6">
                                <div className="flex flex-col justify-center items-start w1-2">
                                    <h1 className="text-3xl font-bold mb-6">Learn at your level</h1>
                                    <p className="text-xl mb-8 flex items-start text-left">
                                        Students and professionals alike can hone dormant skills or learn new ones.
                                        Progress through lessons and challenges tailored to your level. Designed for
                                        ages 13 to 113.
                                    </p>
                                </div>
                                <section
                                    className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                                    <div
                                        className="relative w-full h-full max-w-[1200px] max-h-[675px]">
                                        <Image src="https://brilliant.org/images/homepage/learn-at-your-level.svg"
                                               alt="learn at your level" className="" layout="fill"
                                               objectFit="contain"/>

                                    </div>
                                </section>
                            </div>


                            <div className="flex flex-row py-6">
                                <section
                                    className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                                    <div
                                        className="relative w-full h-full max-w-[1200px] max-h-[675px]">
                                        <Image src="https://brilliant.org/images/homepage/stay-motivated.svg"
                                               alt="Stay motivated" className="" layout="fill"
                                               objectFit="contain"/>

                                    </div>
                                </section>
                                <div className="flex flex-col justify-center items-start w1-2">
                                    <h1 className="text-3xl font-bold mb-6">Stay motivated</h1>
                                    <p className="text-xl mb-8 flex items-start text-left">
                                        Form a real learning habit with fun content that’s always well-paced, game-like progress tracking, and friendly reminders.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="py-16 bg-gray-100">
                        <div className="container mx-auto max-w-7xl px-4 text-center">
                            <h2 className="text-3xl font-bold mb-8">Ready to start your learning journey?</h2>
                            <Link href="/home" className="inline-block">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-2xl border-2 border-blue-400">
                                    Get started
                                </Button>
                            </Link>
                        </div>
                    </section>

                </main>
            </div>
            <FooterFrontEnd />
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal}/>
        </div>
    );
};

export default BrilliantLandingPage;