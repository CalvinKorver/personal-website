import { MetadataRoute } from 'next'
import { client } from '../../lib/sanity'

interface BlogPost {
  slug: { current: string };
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://calvinkorver.com'

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Fetch blog posts from Sanity
  let blogPages: MetadataRoute.Sitemap = []
  
  try {
    const query = `*[_type == "blogPost" && defined(slug.current)] {
      slug,
      _updatedAt
    }`
    
    const posts: BlogPost[] = await client.fetch(query)
    
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    // Continue without blog posts if there's an error
  }

  return [...staticPages, ...blogPages]
}