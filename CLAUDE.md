# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Calvin Korver built with HTML, CSS, and JavaScript. The site uses the Stellar template from HTML5 UP and includes multiple pages: home, projects, resume, and various template demonstration pages.

## Key Architecture

**Static Website Structure:**
- `index.html` - Main landing page with intro, about, and projects sections
- `projects.html` - Dedicated projects showcase page
- `resume.html` - Resume page with Adobe PDF Embed API integration
- Template pages: `elements.html`, `no-sidebar.html`, `right-sidebar.html`, `word_break.html`

**Asset Organization:**
- `assets/css/` - Stylesheets including main.css (compiled from SASS), styles.css (custom), resume.css
- `assets/sass/` - SASS source files with modular architecture (base/, components/, layout/, libs/)
- `assets/js/` - JavaScript files including jQuery dependencies and main.js for interactions
- `assets/images/` - Project images and graphics
- `assets/pdf/` - Resume PDF file
- `functions.js` - Custom utility functions (smooth scrolling)

**Styling System:**
- Based on HTML5 UP Stellar template
- SASS architecture with breakpoint system for responsive design
- Breakpoints: xxsmall (≤360px), xsmall (361-480px), small (481-736px), medium (737-980px), large (981-1280px), xlarge (1281-1680px)
- Custom yellow accent color for branding
- FontAwesome icons integration

## Development Commands

This is a static website with no build system. Development workflow:

**SASS Compilation:**
The project uses SASS but there's no apparent build system configured. CSS appears to be pre-compiled. If SASS changes are needed, you'll need to manually compile or set up a build process.

**Local Development:**
Serve files using any static file server:
- `python -m http.server 8000` (Python)
- `npx serve .` (Node.js)
- Open HTML files directly in browser for basic testing

**Deployment:**
Based on Vercel analytics integration in index.html, this appears to be deployed on Vercel.

## Key Features

**Analytics Integration:**
- Vercel Analytics script included in index.html
- Custom analytics function: `window.va`

**PDF Resume:**
- Adobe PDF Embed API integration in resume.html
- Resume served from `assets/pdf/cjkorver_resume.pdf`

**Responsive Design:**
- Mobile-first approach with comprehensive breakpoint system
- Smooth scrolling navigation between sections
- Custom utility function `scrollToDiv()` for navigation

**Content Sections:**
- Personal introduction with NYC location
- About section with professional background
- Projects showcase with images and descriptions
- Resume integration with PDF viewer

This is a straightforward static website focused on personal branding and portfolio display, with modern web practices for responsive design and user experience.