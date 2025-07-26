# Calvin Korver Portfolio - Next.js + Sanity

This is a modern personal portfolio website built with Next.js, React, Tailwind CSS, and Sanity CMS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Sanity CMS** for content management
- **Responsive design** optimized for all devices
- **Vercel Analytics** integration
- **PDF Resume** viewer with Adobe PDF Embed API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account (for CMS)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Project Structure

```
src/
├── app/
│   ├── blog/           # Blog page
│   ├── resume/         # Resume page with PDF viewer
│   ├── studio/         # Sanity Studio
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   └── Footer.tsx
└── lib/
    └── sanity.ts       # Sanity configuration

schemas/                # Sanity content schemas
├── project.ts
└── index.ts

public/                 # Static assets
├── images/
├── *.pdf
└── ...
```

## Content Management

This site uses Sanity CMS for content management. Projects can be managed through the Sanity Studio interface at `/studio`.

### Schema Types

- **Project**: Includes title, company, tools, overview, description, images, and links

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Set up environment variables for Sanity
3. Deploy

## Migration from Static Site

This project was migrated from a static HTML/CSS/JS site to a modern React-based architecture while preserving all content and functionality.

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel Analytics
- Adobe PDF Embed API
