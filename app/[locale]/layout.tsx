import type {Metadata} from "next";
import {Inter, JetBrains_Mono, Rubik} from "next/font/google";
import {notFound} from "next/navigation";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getTranslations} from "next-intl/server";
import "../globals.css";
import ClientLayout from './ClientLayout';

import {dir, htmlLang, routing} from "@/i18n/routing";
import {siteUrl} from "@/lib/siteUrl";
import type {Locale} from "@/i18n/routing";

// Inline SVG favicons — the gold khatim on deep green, the same mark
// zabaqist.com ships. The polygon is the {8/2} octagram at the derived
// KHATIM ratio (see components/landing/Zellige.tsx), so the favicon, the
// wordmark and the zellige pattern are one shape rather than three.
const ICON_SVG =
    "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%231a4d40'/%3E%3Cpolygon points='32.0,9.0 38.7,15.7 48.3,15.7 48.3,25.3 55.0,32.0 48.3,38.7 48.3,48.3 38.7,48.3 32.0,55.0 25.3,48.3 15.7,48.3 15.7,38.7 9.0,32.0 15.7,25.3 15.7,15.7 25.3,15.7' fill='%23e8b04a'/%3E%3C/svg%3E";
const APPLE_ICON_SVG =
    "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' rx='36' fill='%231a4d40'/%3E%3Cpolygon points='90.0,26.0 108.7,44.7 135.3,44.7 135.3,71.3 154.0,90.0 135.3,108.7 135.3,135.3 108.7,135.3 90.0,154.0 71.3,135.3 44.7,135.3 44.7,108.7 26.0,90.0 44.7,71.3 44.7,44.7 71.3,44.7' fill='%23e8b04a'/%3E%3C/svg%3E";


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

// Landing-page display face. One family for Latin and Arabic, to weight 800 —
// so a "bold" heading is really bold rather than faux-bolded by the browser.
const rubik = Rubik({
    subsets: ["latin", "arabic"],
    variable: "--font-display",
    display: 'swap',
})

// Notation, ratios, figures — not brand chrome.
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: 'swap',
})

// Copy mirrors zabaqist.com so the marketing site and the app describe one
// product rather than two. Per-locale strings live in messages/{fr,ar}.json
// under `meta`.
//
// Indexing does NOT mirror it, and that is the point. Three signals used to
// disagree: the canonical pointed at zabaqist.com ("do not index me"), the
// sitemap listed app.zabaqist.com URLs ("index these"), and robots said
// `index, follow`. Google resolves that by guessing.
//
// While the beta is closed, the app has exactly one page a crawler can fetch —
// this one — and it duplicates the marketing landing page. So the app defers:
// canonical points home to zabaqist.com and the app itself is noindex, which
// keeps every ranking signal on the one domain that has public content.
// `NEXT_PUBLIC_ALLOW_INDEXING=1` flips it at launch, when the chapters open.
export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const l = hasLocale(routing.locales, locale) ? (locale as Locale) : routing.defaultLocale;
  const t = await getTranslations({locale: l, namespace: 'meta'});
  // Where the public, indexable version of this content lives.
  const marketing = "https://zabaqist.com";
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === '1';
  const site = allowIndexing ? siteUrl() : marketing;

  return {
    metadataBase: new URL(site),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{name: "Équipe Zabaqist"}],
    // `follow` stays on either way: a crawler that reaches the app should still
    // walk its links, it just should not list the app's pages as their own
    // results while zabaqist.com carries the same copy.
    robots: {index: allowIndexing, follow: true},
    alternates: {
      canonical: l === 'fr' ? '/' : '/ar',
      languages: {fr: '/', ar: '/ar', 'x-default': '/'},
    },
    icons: {
      icon: [{url: ICON_SVG, type: "image/svg+xml"}],
      apple: [{url: APPLE_ICON_SVG}],
    },
    openGraph: {
      type: "website",
      siteName: "Zabaqist",
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: l === 'fr' ? site : `${site}/ar`,
      locale: l === 'fr' ? 'fr_MA' : 'ar_MA',
      alternateLocale: l === 'fr' ? 'ar_MA' : 'fr_MA',
      images: [{url: "/og.png", width: 1200, height: 630, alt: t('ogTitle')}],
    },
    twitter: {
      card: "summary_large_image",
      title: t('ogTitle'),
      description: t('twitterDescription'),
      images: [{url: "/og.png", alt: t('ogTitle')}],
    },
  };
}

// theme-color is the deep green the mark sits on — it tints the browser chrome
// on Android, so it belongs to the brand, not to a page.
export const viewport = {
  themeColor: "#1a4d40",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const l = locale as Locale;

  return (
      // `dir` on <html> is what makes the Arabic route mirror: paddings written
      // with logical properties (ps-/pe-/ms-/me-) flip with it, physical ones
      // (pl-/pr-) do not.
      <html lang={htmlLang[l]} dir={dir[l]} suppressHydrationWarning>
      <head/>
      <NextIntlClientProvider>
        <ClientLayout interVariable={`${inter.variable} ${rubik.variable} ${jetbrainsMono.variable}`}>
            {children}
        </ClientLayout>
      </NextIntlClientProvider>
      </html>
  );
}
