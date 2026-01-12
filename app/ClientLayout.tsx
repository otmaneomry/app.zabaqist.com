'use client'

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
    /** Brilliant.org inspired theme */
    primaryColor: 'teal',
    colors: {
        teal: [
            '#e6faf8',
            '#d1f5f0',
            '#b3ede6',
            '#8ee3d9',
            '#2CB0A1', // Brilliant's primary teal
            '#26a092',
            '#208f82',
            '#1a7e73',
            '#146d64',
            '#0f5c55'
        ],
    },
    fontFamily: 'var(--font-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    headings: {
        fontWeight: '500',
    },
    defaultRadius: 'xl',
    components: {
        Button: {
            defaultProps: {
                radius: 'xl',
            },
        },
    },
});

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
            className={`min-h-screen bg-background font-sans antialiased flex flex-col ${interVariable} ${mounted ? 'client-side-classes' : ''}`}
        >
        <MantineProvider theme={theme}>
            <div className="flex-grow">
                {children}
            </div>
            {showFooter && <Footer />}
        </MantineProvider>
        </body>
    );
}