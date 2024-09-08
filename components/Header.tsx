'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Button} from "@/components/ui/button";
import {BookOpen, Home, Menu, Search, Trophy} from 'lucide-react';

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        {href: '/home', label: 'Home', icon: Home},
        {href: '/courses', label: 'Courses', icon: BookOpen},
    ];

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto max-w-6xl px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-2xl font-bold">Brilliant</Link>
                        <nav className="hidden md:flex space-x-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors relative
    ${isActive
                                            ? 'text-gray-900'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                    >
                                        <item.icon size={18}/>
                                        <span>{item.label}</span>
                                        <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors
    ${isActive
                                            ? 'bg-gray-900'
                                            : 'bg-transparent group-hover:bg-gray-300'
                                        }`}
                                        ></div>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="text-gray-600">
                            <Search size={20}/>
                        </Button>

                        <Link href="/subscribe" className="inline-block">
                            <Button size="sm" variant="outline"
                                    className="rounded-2xl text-md border-2 border-green-600  hover:bg-white hover:text-green-600 hover:shadow-md text-green-600  ">
                                <Trophy size={16}/>
                                <span>Go premium</span>
                            </Button>
                        </Link>

                        <span className="text-xl">0</span>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu size={20}/>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;