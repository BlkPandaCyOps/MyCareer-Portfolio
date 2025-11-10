# Content Management Guide

This guide explains how to update all content on your portfolio without touching any code.

## Main Content File

All your personal information, experience, projects, and more are stored in:
**`data/content.json`**

## Content Structure

### Personal Information

```json
{
  "personal": {
    "name": "Mike Oyesola",           // Your display name
    "fullName": "Olusoji Oyesola",    // Your full legal name
    "tagline": "Your professional tagline here",
    "bio": "Your biography paragraph...",
    "email": "your.email@example.com",
    "location": "Your City, Country",
    "avatar": "/images/avatar.jpg",    // Path to your photo
    "resume": "/files/Your_Resume.pdf" // Path to your CV
  }
}
```

### Social Media Links

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

### Work Experience

Add or modify entries in the `experience` array:

```json
{
  "experience": [
    {
      "id": 1,                        // Unique number
      "title": "Job Title",
      "company": "Company Name",
      "period": "2022 - Present",
      "description": "What you did in this role...",
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ]
}
```

### Projects

Add or modify entries in the `projects` array:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Brief project description",
      "image": "/images/projects/project.jpg",
      "tags": ["Web Dev", "React", "Node.js"],
      "github": "https://github.com/username/repo",
      "demo": "https://demo-url.com"  // or null if no demo
    }
  ]
}
```

**Project Tags for Filtering:**
- "Web Dev" - Web development projects
- "Cyber" - Cybersecurity projects
- "App" - Mobile/Desktop applications
- Add your own custom tags!

### Education

```json
{
  "education": [
    {
      "id": 1,
      "institution": "University Name",
      "degree": "Bachelor of Science in Computer Science",
      "period": "2016 - 2020",
      "logo": "/images/education/logo.png"
    }
  ]
}
```

### Certifications

```json
{
  "certifications": [
    {
      "id": 1,
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "year": "2023",
      "logo": "/images/certifications/cert-logo.png"
    }
  ]
}
```

### Interests

```json
{
  "interests": [
    { "name": "Interest Name", "icon": "🎯" }
  ]
}
```

**Emoji Icons:** Use any emoji as an icon. Find emojis at [Emojipedia](https://emojipedia.org/)

## Blog Posts

Blog posts are stored as Markdown files in: **`data/articles/`**

### Creating a New Blog Post

1. Create a new `.md` file in `data/articles/`
2. Name it with lowercase and hyphens: `my-new-post.md`
3. Add frontmatter and content:

```markdown
---
title: "Your Article Title"
date: "2024-01-15"
excerpt: "A brief description that appears in the blog list"
tags: ["Web Dev", "Tutorial", "React"]
---

# Your Article Title

Write your content here using Markdown syntax.

## Subheading

- Bullet point 1
- Bullet point 2

### Code Example

\`\`\`javascript
const greeting = "Hello World";
console.log(greeting);
\`\`\`

**Bold text** and *italic text*

[Link text](https://example.com)
```

### Markdown Syntax Quick Reference

- `# Heading 1` - Main heading
- `## Heading 2` - Subheading
- `**bold**` - Bold text
- `*italic*` - Italic text
- `[text](url)` - Link
- `` `code` `` - Inline code
- `![alt](image.jpg)` - Image
- `- item` - Bullet list
- `1. item` - Numbered list

### Blog Post Tags

Use consistent tags across posts for better organization:
- "Web Dev"
- "Cyber"
- "Tutorial"
- "Personal"
- "Career"
- "Learning"

## Images

### Adding Images

1. Place images in the appropriate folder:
   - Profile photo: `public/images/avatar.jpg`
   - Project images: `public/images/projects/`
   - Education logos: `public/images/education/`
   - Certification logos: `public/images/certifications/`
   - Blog images: `public/images/blog/`

2. Reference them in your content:
   ```json
   "image": "/images/projects/my-project.jpg"
   ```

### Image Guidelines

- **Format:** JPG or PNG
- **Profile photo:** 400x400px (square)
- **Project images:** 1200x630px (landscape)
- **Logos:** 200x200px (square, transparent PNG)
- **File size:** Keep under 500KB for fast loading

## Files

### Adding Your Resume/CV

1. Save your resume as PDF
2. Place it in: `public/files/Your_Name_Resume.pdf`
3. Update the path in `content.json`:
   ```json
   "resume": "/files/Your_Name_Resume.pdf"
   ```

## Updating Content Workflow

1. **Edit** `data/content.json` or create/edit `.md` files
2. **Save** your changes
3. **Test** locally with `npm run dev`
4. **Commit** changes to Git:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
5. **Deploy** automatically (if using Vercel) or manually

## Content Tips

### Writing Good Project Descriptions
- Start with what the project does
- Mention the problem it solves
- Keep it under 150 characters
- Use active voice

### Writing Effective Bio
- Start with your current role
- Mention your key skills
- Include your interests
- Keep it conversational
- 2-3 sentences is perfect

### Choosing Tags
- Use 2-4 tags per project/article
- Be consistent with tag names
- Use title case: "Web Dev" not "web dev"
- Create a tag system that makes sense for your content

## Common Questions

**Q: How do I add a new section to the homepage?**
A: You'll need to create a new component. See the developer documentation.

**Q: Can I use HTML in Markdown blog posts?**
A: Yes! Markdown supports inline HTML.

**Q: How do I reorder projects?**
A: Change the order of items in the `projects` array in `content.json`.

**Q: Can I have multiple blog post categories?**
A: Yes, use the `tags` field to categorize posts.

**Q: How do I remove a section?**
A: Comment out or remove the component import in `app/page.tsx`.

## Content Checklist

Before deploying, make sure you've updated:

- [ ] Personal name and tagline
- [ ] Bio paragraph
- [ ] Email address
- [ ] Social media links
- [ ] Profile photo
- [ ] Work experience (at least 2 entries)
- [ ] Projects (at least 3 entries)
- [ ] Education information
- [ ] Certifications
- [ ] Interests
- [ ] Resume/CV file
- [ ] At least one blog post
- [ ] All placeholder images replaced

## Need Help?

If you need to make changes beyond content updates (design, layout, features), you'll need to edit the React components. See the main README.md for developer documentation.
