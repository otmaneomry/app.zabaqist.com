'use client'

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import { usePathname } from '@/i18n/navigation';
import { DirectionProvider, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
    /** Zabaqist theme - inspired by Brilliant.org */
    primaryColor: 'mint',
    colors: {
        // Zabaqist · Mint Tea, the same ramp the marketing site uses. Mantine
        // needs literal hex (it computes variants at build time and cannot read
        // CSS variables), so these are the oklch tokens in app/globals.css
        // resolved to sRGB. Index 6 is `--zb-mint`, index 8 is `--zb-mint-deep`;
        // Mantine's default shade is 6, so `color="mint"` IS the brand surface.
        //
        // This used to be a generic teal (#2CB0A1) that appeared nowhere in the
        // brand — every Mantine button, badge and progress bar in the app was
        // off-palette.
        mint: [
            '#f2f8f6',
            '#e3f0ec',
            '#c3e0d7',
            '#9ecfc1',
            '#6fb4a1',
            '#3f9a82',
            '#1c7a63', // --zb-mint
            '#166552',
            '#0f4f40', // --zb-mint-deep
            '#0a3a2f',
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
                                         dir,
                                         interVariable
                                     }: {
    children: React.ReactNode;
    dir: 'ltr' | 'rtl';
    interVariable: string;
}) {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        document.body.classList.remove('search_plugin_added');
    }, []);

    // The landing page ships its own footer; the onboarding funnel deliberately
    // ships no chrome at all — the first click removes every exit, and a footer
    // full of links is an exit. `usePathname` from next-intl is locale-stripped,
    // so these stay unprefixed on the Arabic route as well.
    const CHROME_FREE = ['/', '/demarrer', '/filiere'];
    const showFooter = !CHROME_FREE.includes(pathname);

    return (
        <body
            suppressHydrationWarning
            className={`min-h-screen bg-background font-sans antialiased flex flex-col ${interVariable} ${mounted ? 'client-side-classes' : ''}`}
        >
        {/* `dir` on <html> is what flips the CSS; this is what tells Mantine.
            Its components do not read the attribute — they read a React
            context, and `DirectionProvider` is the only thing that fills it.
            Without one the context keeps its literal default of `{dir: 'ltr'}`
            (see node_modules/@mantine/core/esm/core/DirectionProvider/
            DirectionProvider.mjs), so on `/ar` the header's Drawer slid in
            from the left edge of an RTL page and the course tabs' ScrollArea
            drew its thumb at the mirror image of where the content was.

            `initialDirection` and not detection alone: detection happens in an
            effect, which is after the server has already rendered — passing the
            locale's direction in is what makes the first paint right. */}
        <DirectionProvider initialDirection={dir}>
            <MantineProvider theme={theme}>
                <div className="flex-grow">
                    {children}
                </div>
                {showFooter && <Footer />}
            </MantineProvider>
        </DirectionProvider>
        </body>
    );
}