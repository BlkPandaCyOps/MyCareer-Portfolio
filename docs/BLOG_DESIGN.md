# Blog Design

## Overview
The blog pages maintain visual continuity with the main portfolio while being optimized for reading and content consumption.

## Design Philosophy

### Unified Visual Language
- Uses the same aurora gradient (teal → violet → light blue) as the hero section
- Toned-down opacity (15-50% vs full opacity) to avoid text distraction
- Consistent typography with Inter font family
- Maintains professional aesthetic while prioritizing readability

## Page Layouts

### Blog Listing Page (`/blog`)

**Header Section:**
- Gradient background with reduced opacity (20-50%)
- Title: "Insights & Reflections"
- Subtitle: "Thoughts on tech, cybersecurity, and development"
- 12 subtle glow particles for ambiance
- Animated scroll indicator

**Content Section:**
- 3-column grid on desktop, responsive on mobile
- Glass-effect cards with hover animations
- Article metadata (date with calendar icon)
- Excerpt preview
- Tags with teal color scheme
- Staggered entrance animations

### Individual Article Page (`/blog/[slug]`)

**Header Section:**
- Even more subtle gradient (15-40% opacity)
- Article title in large, light typography
- Publication date
- Tags displayed in header
- Back to Blog navigation link
- 8 subtle glow particles

**Content Section:**
- Clean white background for optimal reading
- Prose styling for markdown content
- Maximum width for comfortable line length
- Proper typography hierarchy
- Smooth entrance animation

## Technical Implementation

### API Routes
```
/api/articles - Lists all articles
/api/articles/[slug] - Fetches individual article
```

### Content Management
- Markdown files in `data/articles/`
- Frontmatter for metadata (title, date, excerpt, tags)
- ReactMarkdown for rendering
- Gray-matter for parsing

### Styling Classes
```css
.gradient-bg-subtle - Toned-down gradient background
.glow-particle-subtle - Subtle floating particles
```

### Animations
- Framer Motion for smooth transitions
- Staggered card loading (0.1s delay per card)
- Reduced particle count for performance
- Scroll indicators with bounce animation

## Color Scheme

### Gradient Colors
- Teal: #14b8a6 (20% opacity in header)
- Violet: #8b5cf6 (20% opacity in header)
- Light Blue: #60a5fa (implied in gradient)

### Tags
- Background: `bg-teal-50` (#f0fdfa)
- Text: `text-teal-900` (#134e4a)
- Hover: `bg-teal-100` (#ccfbf1)

### Text
- Header text: White with 70-90% opacity
- Content text: Gray-900 for maximum readability
- Links: Teal-600 with hover effects

## Responsive Design

### Mobile Optimizations
- Single column layout
- Reduced font sizes
- Touch-friendly navigation
- Optimized particle count
- Faster animations

### Breakpoints
- Mobile: < 640px (1 column)
- Tablet: 640-1024px (2 columns)
- Desktop: > 1024px (3 columns)

## Performance

### Optimizations
- Client-side rendering for smooth animations
- API routes for efficient data fetching
- Reduced particle count (8-12 vs 20)
- Lazy loading for images in markdown
- Static generation where possible

### Loading States
- Loading indicator while fetching articles
- Graceful error handling
- Empty state messaging

## Content Guidelines

### Article Structure
```markdown
---
title: "Article Title"
date: "2024-01-01"
excerpt: "Brief description for listing page"
tags: ["Tag1", "Tag2", "Tag3"]
---

Article content in markdown...
```

### Best Practices
- Keep excerpts under 150 characters
- Use 2-4 relevant tags per article
- Include proper headings in content
- Optimize images for web
- Write descriptive titles

## Accessibility

### Features
- High contrast text (white on gradient, dark on white)
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- ARIA labels where needed

### Contrast Ratios
- White text on gradient: > 4.5:1
- Dark text on white: > 7:1
- Tags: > 8:1 (WCAG AAA)

## Future Enhancements

### Potential Features
- Search functionality
- Category filtering
- Related articles
- Reading time estimates
- Social sharing buttons
- Comments system
- RSS feed
- Table of contents for long articles
