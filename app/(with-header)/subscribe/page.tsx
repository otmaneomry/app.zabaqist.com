'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {CheckCircle, X} from 'lucide-react';

const PricingCard = ({selectedPlan, setSelectedPlan}) => (
    <Card className="max-w-md mx-auto bg-white">
        <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
                <Button
                    variant={selectedPlan === 'annual' ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan('annual')}
                    className={`w-1/2 mr-2 ${selectedPlan === 'annual' ? 'bg-yellow-400 text-black' : ''} hover:bg-yellow-300`}
                >
                    Annual
                    {selectedPlan === 'annual' &&
                        <span className="ml-2 text-xs bg-yellow-500 px-1 rounded">MOST POPULAR</span>}
                </Button>
                <Button
                    variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan('monthly')}
                    className="w-1/2 ml-2"
                >
                    Monthly
                </Button>
            </div>
            {selectedPlan === 'annual' && (
                <div className="text-center mb-4">
                    <p className="text-sm line-through">MAD 53.59</p>
                    <p className="text-2xl font-bold">MAD 42.87<span className="text-sm">/month*</span></p>
                </div>
            )}
            {selectedPlan === 'monthly' && (
                <div className="text-center mb-4">
                    <p className="text-2xl font-bold">MAD 107.55<span className="text-sm">/month</span></p>
                </div>
            )}
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-2xl">Subscribe now</Button>
            <p className="text-xs mt-4 text-gray-500">*Billed as one payment. Renews annually, cancel anytime. You can
                turn off auto-renew from your settings.</p>
        </CardContent>
    </Card>
);

const ReviewSection = () => (
    <div className="flex justify-center items-center space-x-8 my-12">
        <div className="text-center">
            <p className="font-serif italic">{`"Tantalizing"`}</p>
            <p className="text-xs">The New York Times</p>
        </div>
        <div className="text-center">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                ))}
            </div>
            <p className="text-sm">Over 50,000 5-star reviews</p>
        </div>
        <div className="text-center">
            <Image src="/trustpilot.png" alt="Trustpilot" width={100} height={30}/>
        </div>
        <div className="text-center">
            <p className="font-serif italic">"Advanced"</p>
            <p className="text-xs">The Atlantic</p>
        </div>
    </div>
);

const LevelUpSection = () => (
    <div className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Level up with Premium</h2>
        <div className="flex justify-center items-center">
            <ul className="space-y-4 w-1/3">
                <li>🚀 Learn efficiently</li>
                <li>📚 Master the essentials</li>
                <li>🧠 Apply your learnings</li>
                <li>📊 Stay on track</li>
            </ul>
            <div className="w-1/3 flex justify-center">
                <section
                    className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
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
                                src="https://brilliant.org/videos/paywall/value-props/apply-your-learnings.mp4"
                                type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
            <div className="w-1/3">
                <h3 className="font-bold mb-2">Effective, hands-on learning</h3>
                <p>Unlimited access to 70+ interactive courses with real-time feedback and simple explanations to make
                    learning efficient.</p>
            </div>
        </div>
    </div>
);

const CoursesSection = () => {
    const [activeTab, setActiveTab] = useState('Math');
    const tabs = ['Math', 'Data Analysis', 'CS & Programming', 'Science', 'Electives'];
    const courses = [
        "Scientific Thinking", "The Chemical Reaction", "Physics of the Everyday",
        "Quantum Mechanics", "Special Relativity", "Quantum Computing",
        "Computational Biology", "Knowledge and Uncertainty", "Classical Mechanics",
        "Electricity and Magnetism"
    ];

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center mb-8">Build quantitative + technical problem solving
                skills</h2>
            <div className="flex justify-center mb-4">
                {tabs.map(tab => (
                    <Button
                        key={tab}
                        variant={activeTab === tab ? 'default' : 'outline'}
                        onClick={() => setActiveTab(tab)}
                        className="mx-1"
                    >
                        {tab}
                    </Button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="font-bold mb-4">Courses in {activeTab}</h3>
                    <ul className="space-y-2">
                        {courses.map((course, index) => (
                            <li key={index} className="flex items-center">
                                <span className="mr-2">📚</span> {course}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Image src="/course-preview.png" alt="Course Preview" width={500} height={300}/>
                </div>
            </div>
        </div>
    );
};

const ComparisonSection = () => {
    const features = [
        {
            name: "Guided courses",
            free: true,
            premium: true,
            description: "In math, science, programming, data analysis, and more"
        },
        {
            name: "Bonus math, science, & CS puzzles",
            free: true,
            premium: true,
            description: "Hundreds of additional bite-sized challenges"
        },
        {name: "No limits", free: false, premium: true, description: "Access our full library of content"},
        {
            name: "Fully unlocked learning paths",
            free: false,
            premium: true,
            description: "Step-by-step pathways to develop your problem solving skills in math, science, data, and programming"
        },
    ];

    return (
        <div className="my-12">
            <h2 className="text-3xl font-bold text-center mb-4">No commitment, cancel anytime</h2>
            <p className="text-center mb-8">Unlock it all with Premium</p>
            <div className="grid grid-cols-3 gap-4">
                <div></div>
                <div className="font-bold text-center">Free</div>
                <div className="font-bold text-center">Premium</div>
                {features.map((feature, index) => (
                    <React.Fragment key={index}>
                        <div>{feature.name}<p className="text-sm text-gray-500">{feature.description}</p></div>
                        <div className="text-center">{feature.free ? <CheckCircle className="inline text-green-500"/> :
                            <X className="inline text-red-500"/>}</div>
                        <div className="text-center"><CheckCircle className="inline text-green-500"/></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const SuperchargeSection = () => (
    <div className="my-12 text-center flex justify-between">
        <div className="w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold mb-8">Supercharge your learning</h2>
            <ul className="inline-block text-left mb-8">
                <li className="flex items-center mb-2">
                    <span className="mr-2">📚</span> 70+ courses in math, programming, data analysis, computer science,
                    and
                    more
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2">🚫</span> No in-app purchases or ads
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2">🆕</span> New content added regularly
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2">📱</span> One subscription across all devices
                </li>
            </ul>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Subscribe now</Button>
        </div>

        <Image src={"/brilliant-image/suppercharging.png"} alt={"Gift plan"} width={512} height={512} className="w-1/2 flex"/>
    </div>
);

const GiftSection = () => (
    <div className="my-12">
        <h2 className="text-4xl font-bold text-center mb-8">Share the gift of Premium</h2>
        <div className="flex justify-center space-x-8">
            <Card className="w-1/2">
                <CardContent className="p-6">
                    <div className="mb-2 flex justify-center items-center">
                        <Image src={"https://brilliant.org/images/paywall/brandRefresh/gift-plan.svg"} alt={"Gift plan"}
                               width={128} height={128}/>
                        <div className="pl-2 py-4">
                            <h3 className="font-bold">Gift plan</h3>
                            <p className="mt-4">Share your love of math and science — give a subscription to Brilliant
                                Premium.</p>
                            <Button variant="outline"
                                    className="mt-8 w-full border-2 hover:border-gray-950 hover:bg-gray-50 rounded-2xl">Gift
                                Premium</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="w-1/2">

                <CardContent className="p-6">
                    <div className="mb-2 flex justify-center items-center">
                        <Image src={"https://brilliant.org/images/paywall/brandRefresh/group-plan.svg"}
                               alt={"Group plan"}
                               width={128} height={128}/>
                        <div className="pl-2 py-4">
                            <h3 className="font-bold">Group plan</h3>
                            <p className="mt-4">Want to share Brilliant Premium with your family, class, or team? Learn
                                about our group plans.</p>
                            <Button variant="outline"
                                    className="mt-8 w-full border-2 hover:border-gray-950 hover:bg-gray-50 rounded-2xl">Learn
                                more</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

const SubscribePage = () => {
    const [selectedPlan, setSelectedPlan] = useState('annual');

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 w-full">
                <div className="container mx-auto px-4 py-8 max-w-6xl text-white text-center">
                    <h1 className="text-5xl font-bold mt-8">Unlock the full learning experience</h1>
                    <p className="mt-4">Reach your learning goals fast with unlimited access to all courses</p>
                    <p className="my-8">⚡ Youtube Sponsor discount applied</p>
                    <PricingCard selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8 max-w-6xl ">
                    <ReviewSection/>
                </div>
            </div>
            <div className="">
                <div className="container mx-auto px-4 py-8 max-w-6xl ">
                    <LevelUpSection/>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8 max-w-6xl ">
                    <CoursesSection/>
                </div>
            </div>

            <div className="">
                <div className="container mx-auto px-4 py-8 max-w-6xl ">
                    <ComparisonSection/>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8 max-w-6xl ">
                    <SuperchargeSection/>
                </div>
            </div>

            <div className="">
                <div className="container mx-auto px-4 py-8 max-w-6xl ">
                    <GiftSection/>
                </div>
            </div>
        </div>
    );
};

export default SubscribePage;