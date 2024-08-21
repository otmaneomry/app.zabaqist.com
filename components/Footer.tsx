import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/courses" className="hover:text-gray-300">Courses</Link></li>
                            <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
                            <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link href="/help" className="hover:text-gray-300">Help</Link></li>
                            <li><Link href="/educators" className="hover:text-gray-300">Educators</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="hover:text-gray-300">Terms of service</Link></li>
                            <li><Link href="/privacy" className="hover:text-gray-300">Privacy policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} Math E-Learning Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;