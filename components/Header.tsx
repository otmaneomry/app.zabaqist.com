'use client';

/**
 * Site header.
 *
 * Mobile-first because the audience is: below `md` the text nav moves into a
 * drawer behind the hamburger, and "Go premium" keeps only its icon. Before
 * this the two groups were laid out side by side at every width and totalled
 * ~600px, so every page scrolled sideways on a phone — including the ones with
 * nothing wide on them.
 *
 * The desktop layout is unchanged.
 */

import React, { useEffect, useState } from 'react';
import {Link} from '@/i18n/navigation'
import {usePathname} from '@/i18n/navigation';
import {Button, Drawer} from "@mantine/core";
import {IconBook, IconChartBar, IconHome, IconMenu, IconSearch, IconTrophy} from '@tabler/icons-react';
import {useTranslations} from 'next-intl';

import LangSwitch from '@/components/landing/LangSwitch';

// Three items, like the source: where you are, what there is, and how you are
// doing. The third is private — see components/progress/ProgressDashboard.tsx.
const NAV = [
    {href: '/home', key: 'home', icon: IconHome},
    {href: '/courses', key: 'courses', icon: IconBook},
    {href: '/progres', key: 'progress', icon: IconChartBar},
] as const;

const Header = () => {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    // A tap in the drawer navigates; without this the drawer stays open over
    // the page it just moved to.
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto max-w-6xl px-4 py-4">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-4">
                        <Link href="/" className="text-2xl font-bold text-inherit no-underline">
                            Zabaqist
                        </Link>
                        {/* Below md these links live in the drawer instead. */}
                        <nav className="hidden gap-4 md:flex">
                            {NAV.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`flex items-center gap-1 rounded-md border-b-2 px-2 py-1 no-underline transition-colors ${
                                            isActive
                                                ? 'border-gray-900 text-gray-900'
                                                : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        <Icon size={18}/>
                                        <span>{t(item.key)}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                        <LangSwitch className="max-sm:hidden" />
                        <Button variant="subtle" color="gray" p="xs" aria-label="Rechercher">
                            <IconSearch size={20}/>
                        </Button>

                        {/* Full CTA from sm up; icon only on a phone, where the
                            label is what pushed the row past the viewport. */}
                        <Link href="/subscribe" className="no-underline">
                            <Button
                                size="sm"
                                variant="outline"
                                color="mint"
                                aria-label="Go premium"
                                leftSection={<IconTrophy size={16}/>}
                                classNames={{section: 'max-sm:!m-0'}}
                                styles={{
                                    root: {
                                        borderRadius: '1rem',
                                        borderWidth: '2px',
                                    }
                                }}
                            >
                                <span className="hidden sm:inline">Go premium</span>
                            </Button>
                        </Link>

                        <span className="text-xl">0</span>

                        {/* Wrapped, not `className="md:hidden"` on the Button:
                            Mantine's own `display: inline-flex` rule has the
                            same specificity as Tailwind's `hidden` and is
                            loaded after it, so it wins. The hamburger was
                            showing on desktop for that reason. */}
                        <div className="md:hidden">
                            <Button
                                variant="subtle"
                                color="gray"
                                p="xs"
                                aria-label="Ouvrir le menu"
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen(true)}
                            >
                                <IconMenu size={20}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Drawer
                opened={menuOpen}
                onClose={() => setMenuOpen(false)}
                position="right"
                size="70%"
                title="Menu"
                hiddenFrom="md"
            >
                <nav className="flex flex-col gap-1">
                    {NAV.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base no-underline transition-colors ${
                                    isActive
                                        ? 'bg-zb-mint-soft font-semibold text-zb-mint-deep'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <Icon size={20}/>
                                <span>{t(item.key)}</span>
                            </Link>
                        );
                    })}
                    <Link
                        href="/subscribe"
                        className="mt-2 flex items-center gap-3 rounded-lg border-2 border-zb-mint px-3 py-3 text-base font-semibold text-zb-mint-deep no-underline"
                    >
                        <IconTrophy size={20}/>
                        <span>Go premium</span>
                    </Link>
                    <div className="mt-4"><LangSwitch /></div>
                </nav>
            </Drawer>
        </header>
    );
};

export default Header;
