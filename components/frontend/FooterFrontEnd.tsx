import React from 'react';
import {Link} from '@/i18n/navigation'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const FooterFrontEnd = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Zabaqist</h2>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/testimonials">Testimonials</Link></li>
                            <li><Link href="/help">Help</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/educators">Educators</Link></li>
                        </ul>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com/brilliant" aria-label="Facebook">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://instagram.com/brilliant" aria-label="Instagram">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://twitter.com/brilliant" aria-label="Twitter">
                            <Twitter size={24} />
                        </Link>
                        <Link href="https://linkedin.com/company/brilliant" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <Link href="/terms" className="text-sm">Terms of service</Link>
                        <Link href="/privacy" className="text-sm">Privacy policy</Link>
                        <Link href="/california-privacy" className="text-sm">California privacy policy</Link>
                    </div>
                    <p className="text-sm text-gray-400">
                        © {currentYear} Zabaqist. All rights reserved. Zabaqist and the Zabaqist Logo are trademarks of Zabaqist.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterFrontEnd;