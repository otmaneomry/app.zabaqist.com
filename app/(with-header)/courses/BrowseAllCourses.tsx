import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const BrowseAllCourses = () => {
    const categories = ['New courses', 'Math', 'Data', 'Computer Science', 'Science'];
    const courses = [
        { title: 'Real-World Algebra', icon: '/brilliant-image/programming-python.png' },
        { title: 'How LLMs Work', icon: '/brilliant-image/foundational-math.png' },
        { title: 'Clustering', icon: '/brilliant-image/Designing_Programs_Course_Card.png' },
        { title: 'Vectors', icon: '/brilliant-image/how-llms-work.png' },
        { title: 'Designing Programs', icon: '/brilliant-image/science.png' },
        { title: 'Applied Python', icon: '/brilliant-image/search-fundamentals.png' },
    ];

    return (
        <section>
            <h2 className="text-3xl font-bold mb-8">Browse all 70+ courses</h2>

            <div className="relative mb-8">
                <Input type="text" placeholder="Search" className="pl-10 pr-4 py-2 w-full" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category, index) => (
                    <Button key={index} variant={index === 0 ? "default" : "outline"} className="rounded-full">
                        {category}
                    </Button>
                ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">New courses</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="relative h-24 mb-2">
                            <Image src={course.icon} alt={course.title} layout="fill" objectFit="contain" />
                        </div>
                        <div className="bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-full inline-block mb-2">NEW</div>
                        <div className="text-sm font-semibold">{course.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrowseAllCourses;