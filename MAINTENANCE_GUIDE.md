# 🔧 Portfolio Maintenance Guide

**Keep your portfolio fresh, secure, and up-to-date**

---

## 📅 Maintenance Schedule

### Daily (If Active)
- [ ] Check contact form submissions
- [ ] Respond to inquiries

### Weekly
- [ ] Review analytics
- [ ] Check for errors in Vercel logs
- [ ] Monitor site performance

### Monthly
- [ ] Update dependencies
- [ ] Add new projects/experience
- [ ] Write blog post
- [ ] Check for broken links
- [ ] Review security

### Quarterly
- [ ] Major content review
- [ ] Update resume/CV
- [ ] Refresh project screenshots
- [ ] Review and update skills
- [ ] Check SEO performance

### Annually
- [ ] Rotate API keys
- [ ] Major dependency updates
- [ ] Design refresh (if needed)
- [ ] Content audit

---

## 📝 Content Updates

### Adding a New Project

**1. Prepare Project Information**
- Project name
- Description (2-3 sentences)
- Technologies used
- GitHub link
- Live demo link (if available)
- Screenshot (optional)

**2. Add Screenshot (Optional)**
```bash
# Add image to public folder
public/images/projects/your-project.jpg

# Optimize image first:
# - Max width: 1200px
# - Max file size: 500KB
# - Format: JPG or PNG
```

**3. Edit content.json**

Open `data/content.json` and add to projects array:

```json
{
  "projects": [
    {
      "title": "Your New Project",
      "description": "Brief description of what the project does and the problem it solves.",
      "tags": ["React", "TypeScript", "Node.js"],
      "category": "Web Dev",
      "github": "https://github.com/yourusername/project",
      "demo": "https://your-project.com",
      "image": "/images/projects/your-project.jpg"
    }
  ]
}
```

**4. Deploy**
```bash
git add .
git commit -m "Added new project: Your Project Name"
git push
```

Vercel will automatically deploy your changes!

### Writing a New Blog Post

**1. Create Markdown File**

Create new file in `data/articles/`:
```bash
data/articles/your-article-slug.md
```

**2. Add Frontmatter**

```markdown
---
title: "Your Article Title"
date: "2025-11-10"
excerpt: "A brief description of your article (1-2 sentences)"
tags: ["JavaScript", "Tutorial", "Web Development"]
author: "Your Name"
---

Your article content starts here...

## Introduction

Write your content using markdown...

## Main Content

More content...

## Conclusion

Wrap up your article...
```

**3. Write Content**

Use markdown formatting:
- `# Heading 1`
- `## Heading 2`
- `**bold text**`
- `*italic text*`
- `[link text](url)`
- `` `code` ``
- ` ```language ` for code blocks

**4. Deploy**
```bash
git add data/articles/your-article-slug.md
git commit -m "New blog post: Your Article Title"
git push
```

### Updating Work Experience

**Edit `data/content.json`:**

```json
{
  "experience": [
    {
      "company": "New Company",
      "position": "Your New Position",
      "duration": "Jan 2025 - Present",
      "description": "What you do in this role...",
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ]
}
```

**Deploy:**
```bash
git add data/content.json
git commit -m "Updated work experience"
git push
```

### Updating Skills

**Edit `data/content.json`:**

```json
{
  "skills": {
    "languages": ["JavaScript", "TypeScript", "Python", "New Language"],
    "frameworks": ["React", "Next.js", "New Framework"],
    "tools": ["Git", "Docker", "New Tool"]
  }
}
```

### Updating Social Links

**Edit `data/content.json`:**

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "email": "your.email@example.com"
  }
}
```

---

## 🔄 Dependency Updates

### Check for Updates

```bash
# Check which packages have updates
npm outdated

# Output shows:
# Package    Current  Wanted  Latest
# next       16.0.0   16.0.1  16.0.1
# react      19.0.0   19.2.0  19.2.0
```

### Update Dependencies

**Minor Updates (Safe):**
```bash
# Update to latest minor versions
npm update

# Test locally
npm run build
npm run dev

# If everything works, commit
git add package.json package-lock.json
git commit -m "Updated dependencies"
git push
```

**Major Updates (Careful):**
```bash
# Update specific package
npm install next@latest

# Or update all to latest
npm install next@latest react@latest react-dom@latest

# Test thoroughly
npm run build
npm run dev

# Check for breaking changes
# Read changelog for each package

# If everything works, commit
git add package.json package-lock.json
git commit -m "Updated to Next.js 17"
git push
```

### Security Updates

```bash
# Check for vulnerabilities
npm audit

# Fix automatically (if possible)
npm audit fix

# Fix with breaking changes (careful)
npm audit fix --force

# Test after fixing
npm run build
npm run dev
```

---

## 🔒 Security Maintenance

### Monthly Security Check

**1. Check Dependencies**
```bash
npm audit
```

**2. Review Vercel Logs**
- Go to Vercel Dashboard
- Check for unusual activity
- Review error logs

**3. Test Contact Form**
- Submit test message
- Verify captcha works
- Check email notification

**4. Check Environment Variables**
- Verify keys are still active
- Test form submission

### Rotate API Keys (Every 6-12 Months)

**1. Generate New Keys**
- Web3Forms: Create new access key
- hCaptcha: Create new site key

**2. Update Locally**
```bash
# Edit .env.local
NEXT_PUBLIC_WEB3FORMS_KEY=new_key_here
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=new_key_here

# Test
npm run dev
```

**3. Update Vercel**
- Go to Vercel Dashboard
- Settings → Environment Variables
- Edit both variables
- Redeploy

**4. Revoke Old Keys**
- Web3Forms: Delete old key
- hCaptcha: Delete old site

### Monitor for Spam

**Web3Forms Dashboard:**
- Check submission logs
- Look for spam patterns
- Block abusive IPs if needed

**hCaptcha Dashboard:**
- Check solve rate
- Look for bot activity
- Adjust difficulty if needed

---

## 📊 Performance Monitoring

### Check Site Speed

**1. Lighthouse Audit**
```bash
# In Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Generate report"
# 4. Review scores
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**2. Vercel Analytics**
- Go to Vercel Dashboard
- Click "Analytics" tab
- Review:
  - Page load times
  - Core Web Vitals
  - Visitor stats

**3. Fix Performance Issues**

**Slow Images:**
```bash
# Optimize images
# Use tools like:
# - TinyPNG (https://tinypng.com)
# - Squoosh (https://squoosh.app)
# - ImageOptim (Mac)

# Target:
# - Max 500KB per image
# - Use WebP format
# - Proper dimensions
```

**Large Bundle:**
```bash
# Analyze bundle
npm run build

# Look for large dependencies
# Consider alternatives or lazy loading
```

### Monitor Uptime

**Vercel (Built-in):**
- 99.99% uptime guarantee
- Automatic monitoring
- Status page: https://vercel-status.com

**External Monitoring (Optional):**
- UptimeRobot (free)
- Pingdom
- StatusCake

---

## 🐛 Troubleshooting Common Issues

### Build Fails After Update

**1. Check Error Message**
```bash
# Build locally to see full error
npm run build
```

**2. Common Fixes**

**TypeScript Errors:**
```bash
# Fix type errors in code
# Or update tsconfig.json
```

**Dependency Conflicts:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Breaking Changes:**
```bash
# Read changelog for updated packages
# Update code to match new API
```

### Contact Form Stops Working

**1. Check Environment Variables**
- Verify keys in Vercel
- Check keys haven't expired
- Test keys locally

**2. Check hCaptcha**
- Verify domain is still allowed
- Check for service outages
- Test in incognito mode

**3. Check Web3Forms**
- Verify key is active
- Check quota hasn't been exceeded
- Review dashboard for errors

### Images Not Loading

**1. Check File Paths**
```json
// In content.json
"image": "/images/projects/project.jpg"  // ✅ Correct
"image": "images/projects/project.jpg"   // ❌ Wrong
"image": "./images/projects/project.jpg" // ❌ Wrong
```

**2. Check File Names**
- Must match exactly (case-sensitive)
- No spaces in file names
- Use hyphens instead: `my-project.jpg`

**3. Check File Location**
```
public/
  images/
    avatar.jpg
    projects/
      project-1.jpg
      project-2.jpg
```

### Slow Page Load

**1. Optimize Images**
- Compress images
- Use appropriate sizes
- Consider WebP format

**2. Check Bundle Size**
```bash
npm run build
# Review output for large files
```

**3. Enable Caching**
- Vercel handles this automatically
- Check cache headers in DevTools

---

## 📈 SEO Maintenance

### Update Meta Tags

**Edit `app/layout.tsx`:**

```typescript
export const metadata = {
  title: 'Your Name - Your Title',
  description: 'Updated description...',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Your Name - Your Title',
    description: 'Updated description...',
    url: 'https://yoursite.com',
    images: ['/images/og-image.jpg'],
  },
}
```

### Submit to Search Engines

**Google Search Console:**
1. Add your site
2. Verify ownership
3. Submit sitemap
4. Monitor indexing

**Bing Webmaster Tools:**
1. Add your site
2. Verify ownership
3. Submit sitemap

### Monitor Rankings

**Tools:**
- Google Search Console
- Google Analytics
- Ahrefs (paid)
- SEMrush (paid)

---

## 💾 Backup Strategy

### What to Backup

**1. Content**
- `data/content.json`
- `data/articles/`
- `public/images/`

**2. Configuration**
- `.env.local` (keep secure!)
- `next.config.ts`
- `tailwind.config.ts`

**3. Custom Code**
- Any custom components
- Modified files

### How to Backup

**GitHub (Automatic):**
- Your code is already backed up
- Every commit is a backup point
- Can restore any previous version

**Manual Backup:**
```bash
# Create backup folder
mkdir backups

# Copy important files
cp data/content.json backups/content-2025-11-10.json
cp -r data/articles backups/articles-2025-11-10
cp -r public/images backups/images-2025-11-10

# Or create full backup
tar -czf backup-2025-11-10.tar.gz data/ public/images/
```

**Cloud Backup (Optional):**
- Google Drive
- Dropbox
- OneDrive

---

## 🔄 Rollback Procedure

### If Something Breaks

**1. Identify the Problem**
```bash
# Check Vercel logs
# Check local build
npm run build
```

**2. Rollback on Vercel**
- Go to Vercel Dashboard
- Click "Deployments"
- Find last working deployment
- Click "..." → "Promote to Production"

**3. Rollback Code**
```bash
# See recent commits
git log --oneline

# Rollback to previous commit
git revert HEAD

# Or reset to specific commit
git reset --hard <commit-hash>

# Push
git push --force
```

**4. Test**
- Verify site works
- Test all functionality
- Check for errors

---

## 📞 Getting Help

### Resources

- **Documentation:** Check all .md files in project
- **Vercel Support:** https://vercel.com/support
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Issues:** Report bugs in your repo

### Before Asking for Help

1. Check error messages
2. Search documentation
3. Check Vercel logs
4. Try in incognito mode
5. Test locally

### When Reporting Issues

Include:
- Error message (full text)
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS
- Screenshots (if relevant)

---

## ✅ Maintenance Checklist

### Monthly Tasks

- [ ] Update dependencies
- [ ] Check for security vulnerabilities
- [ ] Add new content (project/blog/experience)
- [ ] Review analytics
- [ ] Test contact form
- [ ] Check for broken links
- [ ] Review Vercel logs
- [ ] Backup important files

### Quarterly Tasks

- [ ] Major content review
- [ ] Update resume/CV
- [ ] Refresh screenshots
- [ ] Review and update skills
- [ ] Check SEO performance
- [ ] Review and optimize images
- [ ] Test on multiple devices
- [ ] Update documentation

### Annual Tasks

- [ ] Rotate API keys
- [ ] Major dependency updates
- [ ] Design refresh (if needed)
- [ ] Content audit
- [ ] Performance audit
- [ ] Security audit
- [ ] Backup everything
- [ ] Review and update goals

---

## 🎯 Best Practices

### Content

- ✅ Update regularly (at least monthly)
- ✅ Keep projects current
- ✅ Write blog posts consistently
- ✅ Respond to inquiries promptly
- ✅ Keep skills list updated

### Code

- ✅ Update dependencies monthly
- ✅ Test before deploying
- ✅ Use meaningful commit messages
- ✅ Keep code clean and documented
- ✅ Follow security best practices

### Performance

- ✅ Optimize images
- ✅ Monitor page speed
- ✅ Keep bundle size small
- ✅ Use caching effectively
- ✅ Test on mobile devices

### Security

- ✅ Rotate keys regularly
- ✅ Monitor for vulnerabilities
- ✅ Keep dependencies updated
- ✅ Review logs for suspicious activity
- ✅ Test contact form regularly

---

**Keep your portfolio fresh and professional! 🚀**
