import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const LearningPaths = () => {
    const paths = [
        { title: 'Programming with Python', level: 'LEVEL 2', icon: '/brilliant-image/computer-science.png' },
        { title: 'Introduction to Algorithms', level: 'LEVEL 2', icon: '/brilliant-image/computer-science.png' },
        { title: 'Next Steps in Python', level: 'LEVEL 3', icon: '/brilliant-image/computer-science.png' },
        { title: 'Computer Science Fundamentals', level: 'LEVEL 4', icon: '/brilliant-image/computer-science.png' },
        { title: 'Applied Python', level: 'LEVEL 5', icon: '/brilliant-image/computer-science.png' },
        { title: 'Introduction to Neural Networks', level: 'LEVEL 5', icon: '/brilliant-image/computer-science.png' },
    ];

    return (
        <section className="mb-16">
            <h1 className="text-4xl font-bold mb-2">Learning Paths</h1>
            <p className="text-gray-600 mb-8">Step-by-step paths to mastery</p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <Image src="/brilliant-image/computer-science.png" alt="CS & Programming" width={48} height={48} className="mr-4" />
                        <div>
                            <div className="text-green-500 text-sm font-semibold">IN PROGRESS</div>
                            <h2 className="text-2xl font-bold">CS & Programming</h2>
                            <p className="text-gray-600">Develop skills in programming and algorithmic thinking</p>
                        </div>
                    </div>
                    <Button className="bg-black text-white">Continue</Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {paths.map((path, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-4 text-center">
                            <Image src={path.icon} alt={path.title} width={64} height={64} className="mx-auto mb-2" />
                            <div className="text-xs text-gray-500 mb-1">{path.level}</div>
                            <div className="text-sm font-semibold">{path.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            <Button variant="outline" className="w-full flex items-center justify-center">
                <span className="mr-2">View all learning paths</span>
                <ChevronDown size={16} />
            </Button>
        </section>
    );
};

export default LearningPaths;