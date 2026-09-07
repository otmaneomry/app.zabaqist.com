'use client';

/**
 * Site footer.
 *
 * Every link here used to 404 except one — and Next prefetches footer links, so
 * every page in the app logged seven failed requests on load. The fix is not to
 * delete the footer but to point it at pages that exist: the in-app routes, and
 * the marketing site (zabaqist.com), which really does publish the programme,
 * the approach, the mission and the privacy policy — in both languages.
 *
 * `pricing`, `careers`, `help` and `educators` are gone. Nothing was ever behind
 * them, and a link that leads nowhere costs more than a missing link.
 *
 * TWO THINGS WERE FIXED HERE FOR MOBILE, and both were measured at 390x844:
 *
 *  1. TAP TARGETS. Every link was a bare inline <a>: 20px tall, its whole height
 *     coming from line-height, with 8px between it and the next one. **WCAG 2.2
 *     SC 2.5.8 asks for 24x24 CSS px minimum**, so seven links on every page in
 *     the app failed it outright — on a product whose audience is entirely on
 *     phones. They are now 44px rows (`min-h-11`), the platform standard rather
 *     than the floor. `space-y-2` went with it: the padding IS the spacing now,
 *     and keeping both would have doubled the gaps.
 *  2. THE BRAND. It was `bg-gray-800` / `text-white` / `hover:text-gray-300` —
 *     generic Tailwind neutrals under an app that is mint, cream and gold
 *     everywhere else, and directly under a marketing site whose footer is
 *     `--zb-mint-deep` with cream text over a gold rule. A reader who follows
 *     the link from zabaqist.com should not feel the brand drop out at the
 *     bottom of the page. Cream on mint-deep measures 5.53:1 — the same pair
 *     the marketing site already ships and has pixel-sampled.
 */

import React from 'react';
import {useLocale, useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

const SITE = 'https://zabaqist.com';

/** One row, one 44px target. Used for both internal and external links. */
const LINK_CLASS =
    'inline-flex min-h-11 items-center text-sm text-zb-cream/90 no-underline transition-colors hover:text-zb-gold';

export default function Footer() {
    const t = useTranslations('footer');
    const locale = useLocale();
    // The marketing site mirrors this app's URL shape: French unprefixed,
    // Arabic under /ar.
    const site = (path: string) =>
        locale === 'ar' ? `${SITE}/ar${path}` : `${SITE}${path}`;

    const columns = [
        {
            title: t('product'),
            links: [
                {label: t('courses'), href: '/courses'},
                {label: t('progress'), href: '/progres'},
                {label: t('premium'), href: '/subscribe'},
            ],
        },
        {
            title: t('learnMore'),
            external: true,
            links: [
                {label: t('programme'), href: site('/programme')},
                {label: t('approche'), href: site('/approche')},
                {label: t('mission'), href: site('/mission')},
            ],
        },
        {
            title: t('legal'),
            external: true,
            links: [{label: t('privacy'), href: site('/privacy')}],
        },
    ];

    return (
        <footer className="border-t-4 border-zb-gold bg-zb-mint-deep py-10 text-zb-cream">
            <div className="container mx-auto max-w-7xl px-5 sm:px-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-3">
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="mb-1 text-sm font-bold text-zb-gold">{col.title}</h3>
                            <ul className="flex flex-col">
                                {col.links.map((l) => (
                                    <li key={l.href} className="flex">
                                        {col.external ? (
                                            <a
                                                href={l.href}
                                                rel="noopener noreferrer"
                                                className={LINK_CLASS}
                                            >
                                                {l.label}
                                            </a>
                                        ) : (
                                            <Link href={l.href} className={LINK_CLASS}>
                                                {l.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t border-zb-cream/20 pt-6 text-center">
                    <p className="text-sm text-zb-cream/80">
                        {t('rights', {year: new Date().getFullYear()})}
                    </p>
                </div>
            </div>
        </footer>
    );
}
