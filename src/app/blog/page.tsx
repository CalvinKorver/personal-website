import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Calvin Korver",
  description: "Thoughts and insights on software engineering, payments technology, and building modern web applications.",
  openGraph: {
    title: "Blog | Calvin Korver",
    description: "Thoughts and insights on software engineering, payments technology, and building modern web applications.",
    url: 'https://calvinkorver.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Blog | Calvin Korver",
    description: "Thoughts and insights on software engineering, payments technology, and building modern web applications.",
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="bg-white rounded-lg p-12 shadow-sm text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Coming soon.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}