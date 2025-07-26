import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Calvin Korver",
  description: "Building a modern payments platform @ CLEAR. Living and working in NYC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
            `,
          }}
        />
        <script defer src="/_vercel/insights/script.js" />
      </head>
      <body className={raleway.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
