# Blog Article Structure Guide

## Overview
This guide explains how to write well-structured blog articles for your portfolio.

## Article Structure

### 1. Frontmatter (Required)

Every article must start with YAML frontmatter:

```markdown
---
title: "Your Article Title"
date: "YYYY-MM-DD"
excerpt: "Brief 1-2 sentence description (max 150 characters)"
tags: ["Tag1", "Tag2", "Tag3"]
---
```

**Fields:**
- `title`: Article title (50-60 characters ideal)
- `date`: Publication date in YYYY-MM-DD format
- `excerpt`: Short description for listing page (100-150 characters)
- `tags`: Array of 2-4 relevant tags

**Available Tags:**
- Personal
- Web Dev
- Cyber
- Security
- Learning
- Tutorial
- Best Practices
- Project
- Career
- Technology

### 2. Article Content Structure

#### A. Main Title (H1)
```markdown
# Your Article Title

Brief introduction paragraph (2-3 sentences) that hooks the reader.
```

#### B. Introduction Section
- Set context
- Explain why this topic matters
- Preview what readers will learn

#### C. Main Content Sections (H2)
```markdown
## Section 1: Main Point

Content here...

### Subsection (H3)
More detailed content...

## Section 2: Another Point

Content here...
```

#### D. Code Examples (if applicable)
```markdown
## Code Example

\`\`\`javascript
// Your code here
const example = "with syntax highlighting";
\`\`\`
```

#### E. Key Takeaways
```markdown
## Key Takeaways

1. **Point One** - Brief explanation
2. **Point Two** - Brief explanation
3. **Point Three** - Brief explanation
```

#### F. Conclusion
```markdown
## Conclusion

Wrap up the article, reinforce main points, and provide next steps or call to action.
```

## Article Templates

### Template 1: Tutorial Article

```markdown
---
title: "How to [Do Something]"
date: "2024-01-15"
excerpt: "Learn how to [accomplish task] with [technology/method]."
tags: ["Tutorial", "Web Dev"]
---

# How to [Do Something]

Brief introduction explaining what you'll build/learn.

## Prerequisites

- Requirement 1
- Requirement 2
- Requirement 3

## Step 1: [First Step]

Explanation and code...

\`\`\`javascript
// Code example
\`\`\`

## Step 2: [Second Step]

Explanation and code...

## Step 3: [Third Step]

Explanation and code...

## Testing

How to test what you built...

## Conclusion

Summary and next steps.
```

### Template 2: Opinion/Experience Article

```markdown
---
title: "My Experience with [Topic]"
date: "2024-01-15"
excerpt: "Lessons learned from [experience] and how it shaped my approach."
tags: ["Personal", "Learning"]
---

# My Experience with [Topic]

Introduction to your experience.

## The Challenge

What problem or situation you faced...

## What I Learned

### Lesson 1
Explanation...

### Lesson 2
Explanation...

### Lesson 3
Explanation...

## Key Takeaways

1. Point one
2. Point two
3. Point three

## Conclusion

How this experience changed your perspective.
```

### Template 3: Technical Deep Dive

```markdown
---
title: "Understanding [Technical Concept]"
date: "2024-01-15"
excerpt: "A deep dive into [concept] and how it works under the hood."
tags: ["Technology", "Tutorial"]
---

# Understanding [Technical Concept]

Introduction to the concept.

## What is [Concept]?

Basic explanation...

## How It Works

### The Basics
Fundamental explanation...

### Advanced Details
More complex explanation...

## Practical Examples

### Example 1
\`\`\`javascript
// Code
\`\`\`

### Example 2
\`\`\`javascript
// Code
\`\`\`

## Best Practices

1. Practice one
2. Practice two
3. Practice three

## Common Pitfalls

- Pitfall 1
- Pitfall 2
- Pitfall 3

## Conclusion

Summary and resources.
```

### Template 4: List Article

```markdown
---
title: "X Things Every [Role] Should Know About [Topic]"
date: "2024-01-15"
excerpt: "Essential [topic] knowledge for [audience]."
tags: ["Best Practices", "Learning"]
---

# X Things Every [Role] Should Know About [Topic]

Introduction paragraph.

## 1. First Thing

Explanation with examples...

## 2. Second Thing

Explanation with examples...

## 3. Third Thing

Explanation with examples...

## Conclusion

Summary of all points.
```

## Writing Best Practices

### Content

1. **Hook Early** - Grab attention in first paragraph
2. **Be Specific** - Use concrete examples
3. **Show, Don't Tell** - Include code examples
4. **Break It Up** - Use headings, lists, and code blocks
5. **Add Value** - Teach something useful

### Style

1. **Conversational** - Write like you're explaining to a friend
2. **Clear** - Use simple language
3. **Concise** - Respect reader's time
4. **Active Voice** - "I built" not "was built"
5. **Personal** - Share your experience

### Technical

1. **Code Formatting** - Use proper syntax highlighting
2. **Working Examples** - Test all code before publishing
3. **Explain Code** - Add comments and explanations
4. **Link Resources** - Reference documentation
5. **Update Regularly** - Keep content current

## Markdown Features

### Headings
```markdown
# H1 - Article Title
## H2 - Main Sections
### H3 - Subsections
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Inline code`
[Link text](https://url.com)
```

### Lists
```markdown
- Unordered list
- Item 2
  - Nested item

1. Ordered list
2. Item 2
3. Item 3
```

### Code Blocks
````markdown
```javascript
const code = "with syntax highlighting";
```

```python
code = "in different languages"
```
````

### Blockquotes
```markdown
> Important quote or note
```

### Images

```markdown
![Alt text](/images/blog/image-name.png)
```

**With caption:**
```markdown
![Descriptive alt text](/images/blog/screenshot.png)
*Caption: This is what the interface looks like*
```

## Adding Images to Articles

### Image Folder Structure

Store all blog images in:
```
public/images/blog/
```

### Image Naming Convention

Use descriptive, kebab-case names:
- ✅ `react-component-structure.png`
- ✅ `authentication-flow-diagram.jpg`
- ✅ `portfolio-hero-section.png`
- ❌ `IMG_1234.jpg`
- ❌ `Screenshot 2024.png`

### Image Formats

**Recommended formats:**
- **PNG** - Screenshots, diagrams, UI elements
- **JPG** - Photos, complex images
- **WebP** - Modern format, smaller file size
- **SVG** - Icons, logos, simple graphics

### Image Optimization

**Before uploading:**
1. Resize to appropriate dimensions (max 1200px width)
2. Compress images (use tools like TinyPNG, Squoosh)
3. Target file size: < 200KB per image
4. Use descriptive filenames

**Tools:**
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

### Adding Images in Markdown

#### Basic Image
```markdown
![Alt text describing the image](/images/blog/my-image.png)
```

#### Image with Caption
```markdown
![Screenshot of the dashboard interface](/images/blog/dashboard-screenshot.png)
*Figure 1: The main dashboard showing user analytics*
```

#### Multiple Images
```markdown
![First image](/images/blog/image-1.png)

![Second image](/images/blog/image-2.png)

![Third image](/images/blog/image-3.png)
```

#### Image with Link
```markdown
[![Click to see full size](/images/blog/thumbnail.png)](/images/blog/full-size.png)
```

### Image Best Practices

**Alt Text:**
- Be descriptive and specific
- Explain what the image shows
- Keep it concise (125 characters max)
- Don't start with "Image of..." or "Picture of..."

**Examples:**
```markdown
✅ ![React component hierarchy diagram showing parent-child relationships](/images/blog/component-tree.png)

❌ ![Image](/images/blog/component-tree.png)

❌ ![Picture of a diagram](/images/blog/component-tree.png)
```

**Placement:**
- Place images near relevant text
- Don't overload with too many images
- Use images to enhance, not replace, text
- Consider mobile viewing

**Captions:**
```markdown
![Authentication flow diagram](/images/blog/auth-flow.png)
*Figure 1: OAuth 2.0 authentication flow with token refresh*
```

### Image Examples in Articles

#### Screenshot Example
```markdown
## Setting Up the Project

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-project
\`\`\`

You should see output similar to this:

![Terminal output showing Next.js installation](/images/blog/nextjs-install.png)
*The installation process creates the project structure*
```

#### Diagram Example
```markdown
## System Architecture

The application follows a three-tier architecture:

![System architecture diagram](/images/blog/architecture-diagram.png)
*Figure 1: High-level system architecture showing client, server, and database layers*

Each layer has specific responsibilities...
```

#### Before/After Example
```markdown
## Optimization Results

**Before optimization:**

![Slow loading page with 5s load time](/images/blog/before-optimization.png)

**After optimization:**

![Fast loading page with 1s load time](/images/blog/after-optimization.png)

The improvements resulted in an 80% reduction in load time.
```

#### UI Example
```markdown
## User Interface Design

The new interface features a clean, modern design:

![New dashboard interface](/images/blog/new-dashboard.png)
*The redesigned dashboard with improved navigation and data visualization*

Key improvements include:
- Simplified navigation
- Better data visualization
- Responsive layout
```

### Troubleshooting Images

**Image not showing?**
1. Check file path is correct: `/images/blog/filename.png`
2. Verify file exists in `public/images/blog/`
3. Check filename matches exactly (case-sensitive)
4. Ensure file extension is correct (.png, .jpg, etc.)

**Image too large?**
1. Resize before uploading (max 1200px width)
2. Compress using TinyPNG or Squoosh
3. Consider using WebP format
4. Target < 200KB per image

**Image quality poor?**
1. Use higher resolution source image
2. Don't over-compress
3. Use PNG for screenshots/diagrams
4. Use JPG for photos

### Image Checklist

Before publishing with images:

- [ ] Images stored in `public/images/blog/`
- [ ] Descriptive filenames (kebab-case)
- [ ] Images optimized (< 200KB each)
- [ ] Proper dimensions (max 1200px width)
- [ ] Descriptive alt text for all images
- [ ] Captions added where helpful
- [ ] Images display correctly in preview
- [ ] Images are relevant to content
- [ ] Mobile viewing considered

## Article Checklist

Before publishing, ensure:

- [ ] Frontmatter is complete and correct
- [ ] Title is clear and compelling
- [ ] Excerpt is concise (100-150 chars)
- [ ] 2-4 relevant tags selected
- [ ] Introduction hooks the reader
- [ ] Content is well-structured with headings
- [ ] Code examples are tested and working
- [ ] Images optimized and properly placed
- [ ] Alt text added to all images
- [ ] Grammar and spelling checked
- [ ] Links work correctly
- [ ] Conclusion provides value
- [ ] Article is 500-2000 words (ideal)

## SEO Tips

1. **Title** - Include main keyword
2. **Excerpt** - Compelling and keyword-rich
3. **Headings** - Use H2, H3 hierarchy
4. **Keywords** - Natural placement throughout
5. **Links** - Internal and external links
6. **Length** - 800-1500 words is ideal

## Example: Complete Article

See `BLOG_ARTICLE_TEMPLATE.md` for a complete blank template and `markdown-formatting-example.md` for formatting examples.

## Publishing Workflow

1. **Write** - Create `.md` file in `data/articles/`
2. **Name** - Use kebab-case: `my-article-title.md`
3. **Test** - View on local dev server
4. **Review** - Check formatting and links
5. **Commit** - Add to git
6. **Deploy** - Push to production

## Article Ideas

### Technical
- "Building My Portfolio with Next.js"
- "Implementing Authentication in React"
- "Understanding TypeScript Generics"
- "Optimizing Web Performance"

### Career
- "Transitioning from [X] to [Y]"
- "What I Learned in My First Year as a Developer"
- "How I Prepared for Technical Interviews"

### Cybersecurity
- "Common Web Vulnerabilities and How to Fix Them"
- "Security Best Practices for Node.js Apps"
- "Understanding OAuth 2.0"

### Personal
- "My Development Setup and Tools"
- "Books That Changed How I Code"
- "Balancing Learning and Building"

## Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Writing Technical Content](https://developers.google.com/tech-writing)
- [SEO for Developers](https://moz.com/beginners-guide-to-seo)

---

**Remember:** Quality over quantity. One great article is better than five mediocre ones!
