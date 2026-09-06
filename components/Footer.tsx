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
 */

import React from 'react';
import {useLocale, useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

const SITE = 'https://zabaqist.com';

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
        <footer className="bg-gray-800 py-10 text-white">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h3 className="mb-4 text-lg font-semibold">{col.title}</h3>
                            <ul className="space-y-2">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        {col.external ? (
                                            <a
                                                href={l.href}
                                                rel="noopener noreferrer"
                                                className="hover:text-gray-300"
                                            >
                                                {l.label}
                                            </a>
                                        ) : (
                                            <Link href={l.href} className="hover:text-gray-300">
                                                {l.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p>{t('rights', {year: new Date().getFullYear()})}</p>
                </div>
            </div>
        </footer>
    );
}
