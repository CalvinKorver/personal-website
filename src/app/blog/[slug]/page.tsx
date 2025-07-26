import Link from 'next/link';
import { client } from '../../../../lib/sanity';
import { PortableText } from '@portabletext/react';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: string;
  categories: string[];
  featured: boolean;
  body: Array<{ _type: string; [key: string]: unknown }>;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    categories,
    featured,
    body,
    mainImage {
      asset-> {
        url
      },
      alt
    }
  }`;
  
  try {
    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">
              The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link 
              href="/blog"
              className="text-blue-600 hover:underline font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg p-8 lg:p-12 shadow-sm">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Link 
                href="/blog"
                className="text-blue-600 hover:underline font-medium text-sm"
              >
                ← Back to Blog
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {post.featured && (
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full mb-4">
                Featured Post
              </span>
            )}
            
            <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
              <div className="flex items-center space-x-4">
                <span>By {post.author}</span>
                {post.publishedAt && (
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </div>
              
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
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
            
            {post.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Main Image */}
          {post.mainImage && (
            <div className="mb-8">
              <img 
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.body && post.body.length > 0 ? (
              <PortableText 
                value={post.body}
                components={{
                  block: {
                    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
                    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-gray-300 pl-6 italic my-6 text-gray-700">
                        {children}
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  },
                  listItem: {
                    bullet: ({ children }) => <li className="mb-1">{children}</li>,
                    number: ({ children }) => <li className="mb-1">{children}</li>,
                  },
                  marks: {
                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    code: ({ children }) => (
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    link: ({ children, value }) => (
                      <a 
                        href={value.href}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                  },
                  types: {
                    image: ({ value }) => (
                      <div className="my-8">
                        <img 
                          src={value.asset.url}
                          alt={value.alt || ''}
                          className="w-full rounded-lg"
                        />
                        {value.alt && (
                          <p className="text-sm text-gray-600 text-center mt-2 italic">
                            {value.alt}
                          </p>
                        )}
                      </div>
                    ),
                  },
                }}
              />
            ) : (
              <p className="text-gray-600 italic">No content available for this post.</p>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link 
                href="/blog"
                className="text-blue-600 hover:underline font-medium"
              >
                ← Back to Blog
              </Link>
              
              <div className="text-sm text-gray-500">
                Published {post.publishedAt && new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}