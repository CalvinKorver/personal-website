import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { client, previewClient, urlFor } from '../../../lib/sanity';

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

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: string;
  categories: string[];
  featured: boolean;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    categories,
    featured,
    mainImage {
      asset-> {
        url
      },
      alt
    }
  }`;
  
  try {
    // Use preview client in development to see drafts
    const sanityClient = process.env.NODE_ENV === 'development' ? previewClient : client;
    const posts = await sanityClient.fetch(query);
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function Blog() {
  const posts = await getBlogPosts();
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">Blog</h1>
        
        {posts.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-12 shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              No Posts Yet
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Blog posts will appear here once they&apos;re published.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/blog/${featuredPost.slug.current}`}>
                    <div className="relative">
                      {featuredPost.mainImage && (
                        <Image
                          src={urlFor(featuredPost.mainImage).width(1200).height(600).auto('format').quality(90).url()}
                          alt={featuredPost.mainImage.alt || featuredPost.title}
                          width={1200}
                          height={600}
                          className="w-full h-96 object-cover"
                        />
                      )}
                      <div className="absolute top-6 left-6">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <span>
                          {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.author}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 hover:text-blue-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      {featuredPost.excerpt && (
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>
                      )}
                      {featuredPost.categories && featuredPost.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {featuredPost.categories.slice(0, 3).map((category) => (
                            <span 
                              key={category} 
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post._id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.mainImage && (
                        <Image
                          src={urlFor(post.mainImage).width(400).height(250).auto('format').quality(85).url()}
                          alt={post.mainImage.alt || post.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{post.author}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {post.excerpt.substring(0, 120)}...
                          </p>
                        )}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.categories.slice(0, 2).map((category) => (
                              <span 
                                key={category} 
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}