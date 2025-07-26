import Link from 'next/link';
import { client } from '../../../lib/sanity';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: string;
  categories: string[];
  featured: boolean;
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
    featured
  }`;
  
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        {posts.length === 0 ? (
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 text-lg mb-4">
              No blog posts found. 
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Make sure you have published blog posts in your Sanity Studio and that the project ID is correctly configured.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Sanity Studio:</strong> <a href="http://localhost:3333" className="text-blue-600 hover:underline" target="_blank">http://localhost:3333</a></p>
              <p><strong>Embedded Studio:</strong> <Link href="/studio" className="text-blue-600 hover:underline">/studio</Link></p>
            </div>
            <div className="mt-8">
              <Link 
                href="/"
                className="text-blue-600 hover:underline font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post._id} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </h2>
                    {post.featured && (
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-500">
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
                
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
            
            <div className="text-center pt-8">
              <Link 
                href="/"
                className="text-blue-600 hover:underline font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}