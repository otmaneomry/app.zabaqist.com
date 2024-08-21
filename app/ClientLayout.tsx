'use client'

import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
                                         children,
                                         interVariable
                                     }: {
    children: React.ReactNode;
    interVariable: string;
}) {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        document.body.classList.remove('search_plugin_added');
    }, []);

    const showFooter = pathname !== '/';

    return (
        <body
            suppressHydrationWarning
            className={cn(
                "min-h-screen bg-background font-sans antialiased flex flex-col",
                interVariable,
                mounted ? 'client-side-classes' : ''
            )}
        >
        <div className="flex-grow">
            {children}
        </div>
        {showFooter && <Footer />}
        </body>
    );
}