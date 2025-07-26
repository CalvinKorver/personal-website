// Sanity configuration
const SANITY_CONFIG = {
    projectId: '9akax19u', // Your Sanity project ID
    dataset: 'production',
    apiVersion: '2024-01-01', // Use current date in YYYY-MM-DD format
    useCdn: true // Set to false if you want fresh data
};

// Sanity client (using CDN version for static site)
const sanityClient = {
    fetch: async function(query) {
        const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${encodeURIComponent(query)}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.result;
        } catch (error) {
            console.error('Error fetching from Sanity:', error);
            throw error;
        }
    }
};

// GROQ queries
const QUERIES = {
    allPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        author,
        excerpt,
        publishedAt,
        featured,
        categories,
        tags,
        mainImage {
            asset->{
                _id,
                url
            },
            alt
        },
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }`,
    
    featuredPost: `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0] {
        _id,
        title,
        slug,
        author,
        excerpt,
        publishedAt,
        categories,
        tags,
        mainImage {
            asset->{
                _id,
                url
            },
            alt
        },
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }`,
    
    postsByCategory: (category) => `*[_type == "blogPost" && "${category}" in categories] | order(publishedAt desc) {
        _id,
        title,
        slug,
        author,
        excerpt,
        publishedAt,
        featured,
        categories,
        tags,
        mainImage {
            asset->{
                _id,
                url
            },
            alt
        },
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }`,
    
    singlePost: (slug) => `*[_type == "blogPost" && slug.current == "${slug}"][0] {
        _id,
        title,
        slug,
        author,
        excerpt,
        publishedAt,
        featured,
        categories,
        tags,
        mainImage {
            asset->{
                _id,
                url
            },
            alt
        },
        body,
        seo,
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }`
};

// Utility functions
function formatDate(dateString) {
    if (!dateString) return 'No date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function createPostHTML(post) {
    const imageUrl = post.mainImage?.asset?.url;
    const imageAlt = post.mainImage?.alt || post.title;
    const categories = post.categories?.join(', ') || '';
    const readingTime = post.estimatedReadingTime || 1;
    const slug = post.slug?.current || post._id; // Fallback to _id if slug is missing
    
    return `
        <div class="col-6 col-12-medium blog-post-item" data-categories="${post.categories?.join(' ') || ''}">
            <article class="blog-post-card">
                ${imageUrl ? `
                    <div class="post-image">
                        <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
                    </div>
                ` : ''}
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">${formatDate(post.publishedAt)}</span>
                        ${categories ? `<span class="post-categories">${categories}</span>` : ''}
                        <span class="post-reading-time">${readingTime} min read</span>
                    </div>
                    <h3 class="post-title">
                        <a href="blog-post.html?slug=${slug}">${post.title}</a>
                    </h3>
                    <p class="post-excerpt">${post.excerpt || ''}</p>
                    <a href="blog-post.html?slug=${slug}" class="post-link">Read More →</a>
                </div>
            </article>
        </div>
    `;
}

function createFeaturedPostHTML(post) {
    if (!post) return '';
    
    const categories = post.categories?.join(', ') || '';
    const readingTime = post.estimatedReadingTime || 1;
    const slug = post.slug?.current || post._id; // Fallback to _id if slug is missing
    
    return `
        <h2 class="featured-title">${post.title}</h2>
        <p class="featured-excerpt">${post.excerpt || ''}</p>
        <div class="featured-meta">
            <span class="featured-date">${formatDate(post.publishedAt)}</span>
            ${categories ? `<span class="featured-categories">${categories}</span>` : ''}
            <span class="featured-reading-time">${readingTime} min read</span>
        </div>
        <a href="blog-post.html?slug=${slug}" class="featured-link">Read More →</a>
    `;
}

// Main functions
async function loadBlogPosts() {
    try {
        showLoadingState();
        const posts = await sanityClient.fetch(QUERIES.allPosts);
        
        if (!posts || posts.length === 0) {
            showNoPosts();
            return;
        }
        
        await loadFeaturedPost();
        renderBlogPosts(posts);
        hideLoadingState();
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        showErrorState();
    }
}

async function loadFeaturedPost() {
    try {
        const featuredPost = await sanityClient.fetch(QUERIES.featuredPost);
        
        if (featuredPost) {
            const featuredContainer = document.getElementById('featured-post');
            const featuredContent = featuredContainer.querySelector('.featured-content');
            featuredContent.innerHTML = createFeaturedPostHTML(featuredPost);
            featuredContainer.style.display = 'block';
        }
    } catch (error) {
        console.error('Error loading featured post:', error);
        // Don't show error for featured post, just skip it
    }
}

function renderBlogPosts(posts) {
    const container = document.getElementById('blog-posts-container');
    const postsHTML = posts.map(post => createPostHTML(post)).join('');
    container.innerHTML = postsHTML;
}

async function filterPosts(category) {
    try {
        showLoadingState();
        
        let posts;
        if (category === 'all') {
            posts = await sanityClient.fetch(QUERIES.allPosts);
        } else {
            posts = await sanityClient.fetch(QUERIES.postsByCategory(category));
        }
        
        renderBlogPosts(posts);
        hideLoadingState();
        
    } catch (error) {
        console.error('Error filtering posts:', error);
        showErrorState();
    }
}

// UI State functions
function showLoadingState() {
    document.getElementById('loading-state').style.display = 'block';
    document.getElementById('error-state').style.display = 'none';
    document.getElementById('no-posts').style.display = 'none';
}

function hideLoadingState() {
    document.getElementById('loading-state').style.display = 'none';
}

function showErrorState() {
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('error-state').style.display = 'block';
    document.getElementById('no-posts').style.display = 'none';
}

function showNoPosts() {
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('error-state').style.display = 'none';
    document.getElementById('no-posts').style.display = 'block';
}

// Event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter posts
            const category = this.getAttribute('data-category');
            filterPosts(category);
        });
    });
}

// Blog Post Detail Functions
function getSlugFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('slug');
}

function convertPortableTextToHTML(body) {
    if (!body || !Array.isArray(body)) return '';
    
    return body.map(block => {
        if (block._type === 'block') {
            const style = block.style || 'normal';
            const children = block.children?.map(child => {
                let text = child.text || '';
                
                // Apply marks (bold, italic, etc.)
                if (child.marks?.length) {
                    child.marks.forEach(mark => {
                        switch (mark) {
                            case 'strong':
                                text = `<strong>${text}</strong>`;
                                break;
                            case 'em':
                                text = `<em>${text}</em>`;
                                break;
                            case 'code':
                                text = `<code>${text}</code>`;
                                break;
                        }
                    });
                }
                
                return text;
            }).join('');
            
            // Convert to HTML based on style
            switch (style) {
                case 'h1':
                    return `<h1>${children}</h1>`;
                case 'h2':
                    return `<h2>${children}</h2>`;
                case 'h3':
                    return `<h3>${children}</h3>`;
                case 'h4':
                    return `<h4>${children}</h4>`;
                case 'blockquote':
                    return `<blockquote>${children}</blockquote>`;
                default:
                    return `<p>${children}</p>`;
            }
        } else if (block._type === 'image') {
            const imageUrl = block.asset?.url;
            const alt = block.alt || '';
            return imageUrl ? `<img src="${imageUrl}" alt="${alt}" />` : '';
        } else if (block._type === 'code') {
            const language = block.language || 'text';
            const code = block.code || '';
            return `<pre><code class="language-${language}">${code}</code></pre>`;
        }
        
        return '';
    }).join('');
}

async function loadBlogPost() {
    const slug = getSlugFromURL();
    
    if (!slug) {
        showErrorState();
        return;
    }
    
    try {
        showLoadingState();
        const post = await sanityClient.fetch(QUERIES.singlePost(slug));
        
        if (!post) {
            showErrorState();
            return;
        }
        
        renderBlogPost(post);
        hideLoadingState();
        
        // Update page title and meta
        document.title = `${post.title} - Calvin Korver`;
        if (post.seo?.metaDescription) {
            updateMetaDescription(post.seo.metaDescription);
        }
        
    } catch (error) {
        console.error('Error loading blog post:', error);
        showErrorState();
    }
}

function renderBlogPost(post) {
    // Update all the elements
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = formatDate(post.publishedAt);
    document.getElementById('post-author').textContent = post.author || 'Calvin Korver';
    document.getElementById('post-reading-time').textContent = `${post.estimatedReadingTime || 1} min read`;
    
    // Excerpt
    if (post.excerpt) {
        document.getElementById('post-excerpt').textContent = post.excerpt;
    } else {
        document.getElementById('post-excerpt').style.display = 'none';
    }
    
    // Categories
    if (post.categories?.length) {
        document.getElementById('post-categories').textContent = post.categories.join(', ');
    } else {
        document.getElementById('post-categories').style.display = 'none';
    }
    
    // Main image
    if (post.mainImage?.asset?.url) {
        const imageContainer = document.getElementById('post-image-container');
        const image = document.getElementById('post-main-image');
        image.src = post.mainImage.asset.url;
        image.alt = post.mainImage.alt || post.title;
        imageContainer.style.display = 'block';
    }
    
    // Body content
    const bodyHTML = convertPortableTextToHTML(post.body);
    document.getElementById('post-body').innerHTML = bodyHTML;
    
    // Tags
    if (post.tags?.length) {
        const tagsContainer = document.getElementById('post-tags-container');
        const tagsList = document.getElementById('post-tags');
        tagsList.innerHTML = post.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        tagsContainer.style.display = 'block';
    }
    
    // Show the content
    document.getElementById('blog-post-content').style.display = 'block';
}

function updateMetaDescription(description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
}

// Initialize blog
async function initializeBlog() {
    setupEventListeners();
    await loadBlogPosts();
}

// Export for use in HTML
window.initializeBlog = initializeBlog;
window.loadBlogPost = loadBlogPost;