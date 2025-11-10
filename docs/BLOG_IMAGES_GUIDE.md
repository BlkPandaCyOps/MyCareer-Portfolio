# Blog Images Quick Reference

## Quick Start

### 1. Prepare Your Image

**Optimize before uploading:**
- Resize to max 1200px width
- Compress to < 200KB
- Use PNG for screenshots, JPG for photos
- Name descriptively: `my-feature-screenshot.png`

**Tools:**
- [TinyPNG](https://tinypng.com/) - Free compression
- [Squoosh](https://squoosh.app/) - Advanced options

### 2. Upload Image

Place your image in:
```
public/images/blog/your-image-name.png
```

### 3. Add to Article

```markdown
![Descriptive alt text](/images/blog/your-image-name.png)
```

## Image Syntax

### Basic Image
```markdown
![Alt text](/images/blog/image.png)
```

### Image with Caption
```markdown
![Alt text](/images/blog/image.png)
*Caption text goes here*
```

### Clickable Image
```markdown
[![Thumbnail](/images/blog/thumb.png)](/images/blog/full.png)
```

## File Organization

```
public/
└── images/
    └── blog/
        ├── article-1-screenshot.png
        ├── article-1-diagram.png
        ├── article-2-photo.jpg
        └── tutorial-step-1.png
```

## Naming Convention

✅ **Good names:**
- `react-component-structure.png`
- `authentication-flow-diagram.jpg`
- `dashboard-before-optimization.png`
- `portfolio-hero-section.png`

❌ **Bad names:**
- `IMG_1234.jpg`
- `Screenshot 2024.png`
- `image.png`
- `pic1.jpg`

## Image Formats

| Format | Use For | Pros | Cons |
|--------|---------|------|------|
| **PNG** | Screenshots, UI, diagrams | Lossless, transparency | Larger file size |
| **JPG** | Photos, complex images | Smaller file size | No transparency |
| **WebP** | Modern browsers | Best compression | Limited support |
| **SVG** | Icons, logos, simple graphics | Scalable, tiny size | Not for photos |

## Optimization Checklist

- [ ] Image resized (max 1200px width)
- [ ] File compressed (< 200KB)
- [ ] Descriptive filename (kebab-case)
- [ ] Correct format (PNG/JPG/WebP)
- [ ] Stored in `public/images/blog/`

## Alt Text Examples

### Screenshots
```markdown
✅ ![Terminal showing npm install command output](/images/blog/npm-install.png)
❌ ![Screenshot](/images/blog/npm-install.png)
```

### Diagrams
```markdown
✅ ![System architecture diagram with three layers: client, server, database](/images/blog/architecture.png)
❌ ![Diagram](/images/blog/architecture.png)
```

### UI Elements
```markdown
✅ ![Dashboard interface showing user analytics and graphs](/images/blog/dashboard.png)
❌ ![Dashboard](/images/blog/dashboard.png)
```

### Code Examples
```markdown
✅ ![Code editor showing React component with useState hook](/images/blog/code-example.png)
❌ ![Code](/images/blog/code-example.png)
```

## Common Use Cases

### Tutorial Steps

```markdown
## Step 1: Installation

First, install the dependencies:

\`\`\`bash
npm install
\`\`\`

![Terminal output showing successful installation](/images/blog/install-success.png)
*The installation completes with no errors*

## Step 2: Configuration

Next, configure your settings...
```

### Before/After Comparison

```markdown
## Performance Improvements

**Before optimization:**

![Page load time showing 5 seconds](/images/blog/before-optimization.png)

**After optimization:**

![Page load time showing 1 second](/images/blog/after-optimization.png)

We achieved an 80% reduction in load time!
```

### Feature Showcase

```markdown
## New Dashboard Design

The redesigned dashboard features:

![New dashboard with modern UI](/images/blog/new-dashboard.png)
*The updated dashboard with improved navigation and data visualization*

Key improvements:
- Cleaner layout
- Better data visualization
- Responsive design
```

### Diagram Explanation

```markdown
## How It Works

The authentication flow follows these steps:

![OAuth 2.0 flow diagram](/images/blog/oauth-flow.png)
*Figure 1: Complete OAuth 2.0 authentication flow*

1. User initiates login
2. Redirect to provider
3. User authorizes
4. Receive access token
```

## Troubleshooting

### Image Not Showing

**Check:**
1. File path: `/images/blog/filename.png` (starts with `/`)
2. File exists in `public/images/blog/`
3. Filename matches exactly (case-sensitive)
4. File extension is correct

**Example:**
```markdown
❌ ![Alt](/blog/image.png)          # Missing /images
❌ ![Alt](images/blog/image.png)    # Missing leading /
❌ ![Alt](/images/blog/Image.png)   # Wrong case
✅ ![Alt](/images/blog/image.png)   # Correct!
```

### Image Too Large

**Solutions:**
1. Resize: Use image editor or online tool
2. Compress: TinyPNG, Squoosh
3. Format: Convert to WebP
4. Quality: Reduce quality slightly (80-90%)

**Target sizes:**
- Screenshots: 50-150KB
- Photos: 100-200KB
- Diagrams: 20-80KB

### Image Quality Poor

**Solutions:**
1. Use higher resolution source
2. Don't over-compress (keep quality 80%+)
3. Use PNG for screenshots/diagrams
4. Use JPG for photos
5. Avoid scaling up small images

## Best Practices

### Do's ✅

- Use descriptive alt text
- Optimize before uploading
- Place images near relevant text
- Add captions for context
- Use consistent naming
- Keep file sizes small
- Test on mobile

### Don'ts ❌

- Don't use generic filenames
- Don't skip alt text
- Don't upload huge files
- Don't overload with images
- Don't use poor quality images
- Don't forget to compress
- Don't ignore mobile view

## Image Dimensions Guide

### Recommended Sizes

| Type | Width | Height | Notes |
|------|-------|--------|-------|
| Full-width | 1200px | Auto | Max width |
| Screenshot | 800-1000px | Auto | Typical |
| Diagram | 600-800px | Auto | Clear details |
| Icon/Logo | 200-400px | Auto | Small graphics |
| Thumbnail | 400px | Auto | Preview |

### Aspect Ratios

- **16:9** - Screenshots, videos
- **4:3** - Traditional photos
- **1:1** - Square images, icons
- **Custom** - Diagrams, infographics

## Quick Commands

### Create blog images folder
```bash
mkdir -p public/images/blog
```

### Check image size (Windows)
```powershell
Get-Item public/images/blog/image.png | Select-Object Name, Length
```

### List all blog images
```bash
ls public/images/blog/
```

## Resources

### Optimization Tools
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
- [ImageOptim](https://imageoptim.com/) - Mac app

### Image Editors
- [Photopea](https://www.photopea.com/) - Free online Photoshop
- [Canva](https://www.canva.com/) - Design tool
- [Figma](https://www.figma.com/) - UI design
- [GIMP](https://www.gimp.org/) - Free desktop editor

### Stock Photos (if needed)
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images

## Example Article with Images

See `markdown-formatting-example.md` (in the root documentation folder) for complete examples of image usage in articles.

---

**Remember:** Good images enhance your content, but they should support your message, not replace it!
