import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume | Calvin Korver",
  description: "Calvin Korver's professional resume - Senior Software Engineer with experience building modern payments platforms and web applications.",
  openGraph: {
    title: "Resume | Calvin Korver",
    description: "Calvin Korver's professional resume - Senior Software Engineer with experience building modern payments platforms and web applications.",
    url: 'https://calvinkorver.com/resume',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: "Resume | Calvin Korver",
    description: "Calvin Korver's professional resume - Senior Software Engineer with experience building modern payments platforms and web applications.",
  },
  alternates: {
    canonical: '/resume',
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}