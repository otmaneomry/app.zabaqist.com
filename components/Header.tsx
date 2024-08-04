import React from 'react';
import Link from 'next/link';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Bell, ShoppingCart} from 'lucide-react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white border-b">
            <div className="flex items-center space-x-6">
                <Link href="/" className="text-2xl font-bold">
                    Brilliant
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
                        <li><Link href="/courses" className="hover:text-gray-600">Courses</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="flex-1 max-w-xl mx-4">
                <Input type="search" placeholder="Search..." className="w-full" />
            </div>

            <div className="flex items-center space-x-4">
                <Button variant="outline">Go premium</Button>
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
};

export default Header;