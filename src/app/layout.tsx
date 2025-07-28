import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});


export const metadata: Metadata = {
  title: "Calvin Korver - Senior Software Engineer",
  description: "Building a modern payments platform @ CLEAR. Living and working in NYC.",
  keywords: ["Calvin Korver", "Software Engineer", "CLEAR", "NYC", "Payments", "Full Stack Developer"],
  authors: [{ name: "Calvin Korver" }],
  creator: "Calvin Korver",
  metadataBase: new URL('https://calvinkorver.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Calvin Korver - Senior Software Engineer",
    description: "Building a modern payments platform @ CLEAR. Living and working in NYC.",
    url: 'https://calvinkorver.com',
    siteName: 'Calvin Korver',
    images: [
      {
        url: '/cal-logo.png',
        width: 1200,
        height: 630,
        alt: 'Calvin Korver - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Calvin Korver - Senior Software Engineer",
    description: "Building a modern payments platform @ CLEAR. Living and working in NYC.",
    images: ['/cal-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/cal-logo.png",
    apple: "/cal-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="scroll-smooth">
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
            `,
          }}
        />
        <script defer src="/_vercel/insights/script.js" />
      </head>
      <body className={`${notoSans.variable} ${notoSerif.variable}`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
