# Design System

Complete design system documentation for the Michael Oyesola portfolio website.

## Color Palette

### Aurora Gradient (Primary)
The signature gradient used throughout the site:
- **Teal:** #14b8a6 (rgb(20, 184, 166))
- **Violet:** #8b5cf6 (rgb(139, 92, 246))
- **Light Blue:** #60a5fa (rgb(96, 165, 250))

### Tailwind Color Classes

**Tags (Normal State):**
- Background: `bg-teal-50` (#f0fdfa)
- Text: `text-teal-900` (#134e4a)
- Hover: `bg-teal-100` (#ccfbf1)

**Buttons (Active State):**
- Background: `bg-gradient-to-r from-teal-600 to-violet-600`
- Teal-600: #0d9488
- Violet-600: #7c3aed
- Text: `text-white`
- Hover: `from-teal-700 to-violet-700`

**Neutral Colors:**
- Background: `bg-white` / `bg-slate-50`
- Text: `text-gray-900` / `text-gray-700` / `text-gray-600`

## Typography

### Font Family
- **Primary:** Inter (system-ui fallback)
- **Weights:** Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)

### Font Sizes
- Hero Title: `text-7xl md:text-9xl` (72px / 128px)
- Section Titles: `text-4xl md:text-5xl` (36px / 48px)
- Subsection Titles: `text-2xl md:text-3xl` (24px / 30px)
- Body Text: `text-base` (16px)
- Small Text: `text-sm` (14px)
- Tiny Text: `text-xs` (12px)

### Font Styles
- Hero: Light weight with tight tracking
- Headings: Bold weight
- Body: Regular weight
- Tags: Medium weight

## Components

### Hero Section
**Design:** Gradient Aurora Header
- Full-screen animated gradient background
- Teal → Violet → Light Blue gradient
- Floating glow particles (20 particles)
- Large typography with text shadows
- CTA buttons with glass morphism
- Animated scroll indicator

**Animation:**
- Gradient moves on 15s loop
- Aurora layers pulse on 20-25s loops
- Particles float with varying speeds
- Entrance animations with staggered delays

### Navigation
**Desktop:**
- Fixed top position with glass effect on scroll
- Horizontal menu with hover states
- Logo: "MO" in gradient colors

**Mobile:**
- Hamburger menu icon
- Slide-in menu panel
- Full-screen overlay

### Buttons

**Primary (Active):**
```css
bg-gradient-to-r from-teal-600 to-violet-600
text-white
shadow-md hover:shadow-lg
hover:from-teal-700 hover:to-violet-700
```

**Secondary (Inactive):**
```css
bg-teal-50 text-teal-900
hover:bg-teal-100 hover:shadow-sm
```

**Ghost (Links):**
```css
text-gray-700 hover:text-teal-600
```

### Tags
**Style:**
```css
px-3 py-1
bg-teal-50 text-teal-900
rounded / rounded-full
text-sm font-medium
hover:bg-teal-100
```

**Usage:**
- Project tags
- Skill tags
- Module tags
- Article tags

### Cards
**Glass Effect:**
```css
background-color: rgba(255, 255, 255, 0.95)
backdrop-filter: blur(12px)
border: 1px solid rgba(148, 163, 184, 0.1)
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05)
```

**Hover State:**
```css
hover:shadow-xl
transition-shadow
```

### Forms
**Input Fields:**
```css
px-4 py-2
rounded-lg
border border-gray-300
bg-white text-gray-900
focus:ring-2 focus:ring-teal-500
```

**Submit Button:**
- Uses primary button gradient style
- Disabled state with reduced opacity

## Blog Design

### Blog Listing Page
**Header:**
- Toned-down aurora gradient (20-50% opacity)
- Title: "Insights & Reflections"
- Subtitle with tagline
- Animated scroll indicator
- 12 subtle glow particles

**Content:**
- Grid layout (3 columns on desktop)
- Glass-effect cards
- Article metadata with calendar icon
- Tag display
- Hover effects with scale

### Individual Article Page
**Header:**
- Even more subtle gradient (15-40% opacity)
- Article title in large typography
- Date and tags in header
- Back to blog navigation
- 8 subtle glow particles

**Content:**
- Clean white background
- Prose styling for markdown
- Maximum width for readability
- Proper line height and spacing

## Animations

### Entrance Animations
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Staggered Lists
```javascript
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Hover Effects
```css
transition-all duration-300
hover:scale-105
hover:shadow-xl
```

### Gradient Animations
```css
@keyframes aurora-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## Spacing System

### Section Padding
- Desktop: `py-20` (80px)
- Mobile: Responsive with Tailwind defaults

### Container
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`

### Component Spacing
- Between sections: `mb-12` (48px)
- Between cards: `gap-8` (32px)
- Between elements: `gap-4` (16px)
- Between tags: `gap-2` (8px)

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Hamburger menu
- Single column layouts
- Reduced font sizes
- Touch-friendly buttons (min 44px)
- Optimized animations

## Accessibility

### Contrast Ratios
- Teal-900 on Teal-50: **8.5:1** (WCAG AAA)
- White on Teal-600: **4.8:1** (WCAG AA)
- White on Violet-600: **5.2:1** (WCAG AA)

### Features
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for images
- Screen reader friendly

## Performance

### Optimizations
- Next.js static generation
- Image optimization
- Code splitting
- Minimal JavaScript
- CSS-only animations where possible
- Lazy loading for images

### Animation Performance
- GPU-accelerated transforms
- Reduced particle count on mobile
- RequestAnimationFrame for smooth animations
- Will-change hints for animated elements

## Browser Support

### Modern Browsers
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

### Fallbacks
- Gradient fallback to solid colors
- Animation fallback to static
- Glass effect fallback to solid background

## Design Principles

1. **Consistency:** Unified color scheme throughout
2. **Clarity:** High contrast for readability
3. **Elegance:** Subtle animations and gradients
4. **Professionalism:** Clean, modern aesthetic
5. **Accessibility:** WCAG AA compliant minimum
6. **Performance:** Optimized for speed
7. **Responsiveness:** Mobile-first approach
8. **Simplicity:** Minimal, focused design
