import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto max-w-7xl px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-2xl font-bold">Brilliant</Link>
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/home" className="hover:text-gray-600">Home</Link>
                            <Link href="/courses" className="hover:text-gray-600">Courses</Link>
                        </nav>
                    </div>
                    <div className="flex-1 max-w-xl mx-4">
                        <Input type="search" placeholder="Search..." className="w-full"/>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">Go premium</Button>
                        <div className="flex justify-center items-center">
                            <h2 className="text-xl">0</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
                            </svg>
                        </div>

                        <Button variant="ghost" size="icon">
                            <span className="sr-only">Menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;