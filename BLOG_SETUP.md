# Blog Setup Guide

This guide will help you complete the setup of your blog with Sanity CMS.

## 1. Create Sanity Account and Project

1. Go to [https://sanity.io](https://sanity.io) and create an account
2. Once logged in, create a new project:
   - Project name: "Calvin Blog"
   - Dataset: "production"
   - Visibility: Public (since we're using client-side API calls)

## 2. Configure Your Project

1. After creating the project, note your **Project ID** (you'll find it in the project settings)
2. Update the configuration files:

### Update `sanity-studio/sanity.config.js`:
Replace `YOUR_PROJECT_ID` with your actual project ID:
```javascript
projectId: 'your-actual-project-id-here',
```

### Update `blog.js`:
Replace `YOUR_PROJECT_ID` with your actual project ID:
```javascript
const SANITY_CONFIG = {
    projectId: 'your-actual-project-id-here', // Replace with your actual Sanity project ID
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true
};
```

## 3. Install and Start Sanity Studio

```bash
cd sanity-studio
npm install
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333`

## 4. Create Your First Blog Post

1. Open the Sanity Studio in your browser
2. Click "Blog Post" to create a new post
3. Fill in the required fields:
   - Title
   - Slug (auto-generated from title)
   - Excerpt
   - Content
   - Categories
   - Set as featured (optional)

## 5. Test Your Blog

1. Open `blog.html` in your browser
2. Your blog posts should load automatically
3. Test the category filtering
4. Click on a post to view the detail page

## 6. Deploy Sanity Studio (Optional)

To deploy your Sanity Studio:

```bash
cd sanity-studio
npm run build
npx sanity deploy
```

Choose a unique studio hostname when prompted.

## 7. CORS Configuration

Since we're making client-side API calls, you may need to configure CORS in your Sanity project:

1. Go to your Sanity project dashboard
2. Navigate to "API" → "CORS Origins"
3. Add your domain(s):
   - `http://localhost:3000` (for local development)
   - Your production domain (e.g., `https://yoursite.com`)

## 8. Content Model Features

Your blog supports:
- **Rich text content** with headings, lists, links, images
- **Code blocks** with syntax highlighting
- **Categories and tags** for organization
- **Featured posts** for highlighting important content
- **SEO metadata** for better search engine visibility
- **Estimated reading time** calculation
- **Image uploads** with alt text for accessibility

## 9. Publishing Workflow

1. Create content in Sanity Studio
2. Publish the document
3. Content appears immediately on your blog (no rebuild required)

## 10. Customization

You can customize:
- **Categories**: Edit the predefined categories in `sanity-studio/schemaTypes/blogPost.js`
- **Styling**: Modify the CSS in `assets/css/styles.css`
- **Layout**: Adjust the HTML structure in `blog.html` and `blog-post.html`

## Troubleshooting

**Blog posts not loading?**
- Check that your project ID is correctly set in both config files
- Verify CORS settings in Sanity dashboard
- Check browser console for error messages

**Images not displaying?**
- Ensure images are uploaded through Sanity Studio
- Check that image URLs are accessible

**Styling issues?**
- Clear browser cache
- Check that CSS files are loading correctly

## Next Steps

- Set up automated deployments
- Add more content types (e.g., author profiles, series)
- Implement search functionality
- Add comments system
- Set up analytics

Your blog is now ready to use! 🎉