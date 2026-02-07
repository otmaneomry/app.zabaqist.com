import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ClientLayout from './ClientLayout';


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: "Zabaqist - Master Math the Moroccan Way",
  description: "Interactive mathematics learning platform designed for Moroccan students. Master concepts in 15 minutes a day with fun, bite-sized lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head/>
      <ClientLayout interVariable={inter.variable}>
          {children}
      </ClientLayout>
      </html>
  );
}
