# 🚀 Complete GitHub & Vercel Deployment Guide

**Time Required:** 30-45 minutes  
**Difficulty:** Beginner-friendly  
**Cost:** $0 (Free tier)

---

## 📋 What You'll Need

- ✅ GitHub account (free)
- ✅ Vercel account (free)
- ✅ Your portfolio customized with your content
- ✅ API keys (Web3Forms + hCaptcha)
- ✅ Git installed on your computer

---

## Part 1: GitHub Repository Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Visit https://github.com
   - Log in to your account

2. **Create New Repository**
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

3. **Repository Settings**
   ```
   Repository name: MyCareer-Portfolio
   Description: My professional portfolio built with Next.js
   Visibility: ✅ Public (recommended for portfolio)
   
   ❌ Do NOT initialize with:
      - README
      - .gitignore
      - License
   (Your project already has these)
   ```

4. **Click "Create repository"**

### Step 2: Configure Repository Settings

After creating the repository:

1. **Go to Settings**
   - Click **"Settings"** tab in your repository

2. **General Settings**
   - ✅ Enable **"Issues"** (for bug tracking)
   - ✅ Enable **"Discussions"** (optional, for community)
   - ✅ Enable **"Projects"** (optional, for task management)

3. **Pages Settings** (Optional - for GitHub Pages)
   - Go to **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **None** (we'll use Vercel instead)

4. **Security Settings**
   - Go to **Settings** → **Security**
   - Enable **"Dependabot alerts"**
   - Enable **"Dependabot security updates"**

### Step 3: Add Repository Topics

Make your repo discoverable:

1. Click **"About"** ⚙️ (top right of repo page)
2. Add topics:
   ```
   portfolio
   nextjs
   react
   typescript
   tailwindcss
   vercel
   web-development
   ```
3. Add website URL (after Vercel deployment)
4. Save changes

---

## Part 2: Push Your Code to GitHub

### Step 1: Initialize Git (if not already done)

```bash
# Navigate to your project
cd MyCareer-Portfolio

# Initialize git
git init

# Check git status
git status
```

### Step 2: Verify .gitignore

Make sure `.gitignore` includes:

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env*.local
.env.production

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

**CRITICAL:** Verify `.env.local` is listed! This prevents exposing your API keys.

### Step 3: Commit Your Code

```bash
# Add all files
git add .

# Check what will be committed
git status

# Verify .env.local is NOT in the list (should be ignored)

# Commit
git commit -m "Initial commit: MyCareer Portfolio with security features"
```

### Step 4: Connect to GitHub

```bash
# Add remote (replace with YOUR GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/MyCareer-Portfolio.git

# Verify remote
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 5: Verify on GitHub

1. Refresh your GitHub repository page
2. You should see all your files
3. **Verify `.env.local` is NOT visible** ✅
4. Check that README.md displays correctly

---

## Part 3: Deploy to Vercel

### Step 1: Create Vercel Account

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click **"Sign Up"**

2. **Sign Up with GitHub**
   - Click **"Continue with GitHub"**
   - Authorize Vercel to access your GitHub
   - This allows automatic deployments

### Step 2: Import Your Repository

1. **From Vercel Dashboard**
   - Click **"Add New..."** → **"Project"**

2. **Import Git Repository**
   - Find **"MyCareer-Portfolio"** in the list
   - Click **"Import"**

3. **Configure Project**
   ```
   Project Name: mycareer-portfolio
   Framework Preset: Next.js (auto-detected)
   Root Directory: ./
   Build Command: npm run build (auto-filled)
   Output Directory: .next (auto-filled)
   Install Command: npm install (auto-filled)
   ```

### Step 3: Add Environment Variables

**CRITICAL STEP:** Add your API keys before deploying!

1. **Expand "Environment Variables" section**

2. **Add Web3Forms Key**
   ```
   Name: NEXT_PUBLIC_WEB3FORMS_KEY
   Value: [paste your Web3Forms key]
   Environment: ✅ Production ✅ Preview ✅ Development
   ```

3. **Add hCaptcha Key**
   ```
   Name: NEXT_PUBLIC_HCAPTCHA_SITE_KEY
   Value: [paste your hCaptcha site key]
   Environment: ✅ Production ✅ Preview ✅ Development
   ```

4. **Verify Both Keys Are Added**
   - Should see 2 environment variables listed
   - Both should be applied to all environments

### Step 4: Deploy

1. **Click "Deploy"**
   - Vercel will start building your project
   - This takes 2-5 minutes

2. **Monitor Build Progress**
   - Watch the build logs
   - Look for any errors
   - Wait for "Build Completed" message

3. **Deployment Success!**
   - You'll see a success screen
   - Your site URL will be displayed
   - Example: `mycareer-portfolio-abc123.vercel.app`

### Step 5: Test Your Deployment

1. **Click "Visit" or copy the URL**

2. **Test Everything:**
   - ✅ Home page loads
   - ✅ All sections display correctly
   - ✅ Navigation works
   - ✅ Projects filter correctly
   - ✅ Blog posts load
   - ✅ Contact form displays
   - ✅ hCaptcha loads
   - ✅ Images display

3. **Test Contact Form:**
   - Fill out the form
   - Complete hCaptcha
   - Submit
   - Check for success message
   - Verify email notification

---

## Part 4: Configure hCaptcha for Production

### Step 1: Add Production Domain

1. **Go to hCaptcha Dashboard**
   - Visit https://dashboard.hcaptcha.com
   - Log in

2. **Edit Your Site**
   - Go to **"Sites"**
   - Click on your site

3. **Add Domains**
   ```
   Hostnames:
   - localhost (for development)
   - mycareer-portfolio-abc123.vercel.app (your Vercel URL)
   ```

4. **Save Changes**
   - Wait 2-5 minutes for propagation

5. **Test Again**
   - Refresh your live site
   - Test contact form
   - Verify hCaptcha works

---

## Part 5: Custom Domain Setup (Optional)

### Option A: Buy Domain from Vercel

1. **In Vercel Dashboard**
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Click **"Buy a domain"**
   - Search for available domains
   - Purchase (starts at $15/year)

2. **Automatic Configuration**
   - Vercel configures everything automatically
   - SSL certificate auto-generated
   - Domain active in 5-10 minutes

### Option B: Use Existing Domain

1. **In Vercel Dashboard**
   - Go to **"Settings"** → **"Domains"**
   - Click **"Add"**
   - Enter your domain (e.g., `yourname.com`)

2. **Configure DNS**
   
   **For Root Domain (yourname.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS Propagation**
   - Can take 24-48 hours
   - Usually faster (1-2 hours)

4. **Verify SSL Certificate**
   - Vercel auto-generates SSL
   - Your site will be HTTPS

### Update hCaptcha with Custom Domain

1. Go to hCaptcha dashboard
2. Add your custom domain to allowed hostnames
3. Save and test

---

## Part 6: Automatic Deployments

### How It Works

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes to your code
# Edit data/content.json, add blog posts, etc.

# Commit changes
git add .
git commit -m "Updated projects section"

# Push to GitHub
git push

# Vercel automatically:
# 1. Detects the push
# 2. Builds your project
# 3. Deploys to production
# 4. Updates your live site
```

### Deployment Types

**Production Deployment:**
- Triggered by pushes to `main` branch
- Updates your live site
- URL: `yoursite.vercel.app` or custom domain

**Preview Deployment:**
- Triggered by pushes to other branches
- Creates temporary preview URL
- Perfect for testing before merging

### Monitor Deployments

1. **In Vercel Dashboard**
   - Go to your project
   - Click **"Deployments"** tab
   - See all deployment history

2. **Deployment Status:**
   - ✅ Ready - Deployment successful
   - 🔄 Building - In progress
   - ❌ Error - Build failed

3. **View Build Logs:**
   - Click on any deployment
   - View detailed logs
   - Debug any issues

---

## Part 7: Repository Configuration Best Practices

### Branch Protection Rules

1. **Go to GitHub Repository**
   - **Settings** → **Branches**

2. **Add Rule for `main` branch:**
   ```
   Branch name pattern: main
   
   ✅ Require pull request reviews before merging
   ✅ Require status checks to pass before merging
   ✅ Require branches to be up to date before merging
   ✅ Include administrators
   ```

### GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linter
      run: npm run lint
      
    - name: Build project
      run: npm run build
```

### Repository Labels

Add labels for better organization:
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers

---

## Part 8: Maintenance & Updates

### Regular Updates

**Weekly:**
```bash
# Pull latest changes (if collaborating)
git pull origin main

# Check for dependency updates
npm outdated
```

**Monthly:**
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
npm audit fix

# Test locally
npm run build
npm run dev

# Commit and push
git add package.json package-lock.json
git commit -m "Updated dependencies"
git push
```

### Adding New Content

**New Project:**
1. Edit `data/content.json`
2. Add project details
3. Add project image to `public/images/projects/`
4. Commit and push

**New Blog Post:**
1. Create markdown file in `data/articles/`
2. Add frontmatter (title, date, excerpt, tags)
3. Write content
4. Commit and push

**Update Experience:**
1. Edit `data/content.json`
2. Update experience section
3. Commit and push

### Monitoring

**Vercel Analytics (Free):**
1. Go to Vercel Dashboard
2. Click **"Analytics"** tab
3. View:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

**Google Analytics (Optional):**
1. Create Google Analytics account
2. Get tracking ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add to Vercel environment variables
5. Redeploy

---

## Part 9: Troubleshooting

### Build Fails on Vercel

**Check Build Logs:**
1. Go to Vercel Dashboard
2. Click failed deployment
3. Read error messages

**Common Issues:**

**TypeScript Errors:**
```bash
# Fix locally first
npm run build

# Fix errors, then push
```

**Missing Environment Variables:**
- Verify both keys are in Vercel
- Check spelling exactly matches
- Redeploy after adding

**Dependency Issues:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Contact Form Not Working

**On Vercel:**
1. Check environment variables are set
2. Verify hCaptcha domain is added
3. Check browser console for errors
4. Test in incognito mode

**hCaptcha Issues:**
- Add Vercel domain to hCaptcha
- Wait 5 minutes for propagation
- Clear browser cache

### Images Not Loading

**Check:**
- Files are in `public/images/`
- Paths are correct in `content.json`
- File names match exactly (case-sensitive)
- Images are optimized (< 500KB)

### Custom Domain Not Working

**DNS Issues:**
- Verify DNS records are correct
- Wait 24-48 hours for propagation
- Use DNS checker: https://dnschecker.org
- Check Vercel domain settings

---

## Part 10: Security Checklist

### Before Going Live

- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys in source code
- [ ] Environment variables added to Vercel
- [ ] hCaptcha domains configured
- [ ] SSL certificate active (HTTPS)
- [ ] Security headers implemented
- [ ] Contact form tested
- [ ] No console errors

### After Deployment

- [ ] Test all functionality
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test in multiple browsers
- [ ] Verify SEO meta tags
- [ ] Check page load speed
- [ ] Monitor for errors

---

## Part 11: Going Live Checklist

### Content

- [ ] Updated all personal information
- [ ] Added real projects
- [ ] Added work experience
- [ ] Added education
- [ ] Updated social media links
- [ ] Added profile photo
- [ ] Written at least 1 blog post
- [ ] Added resume/CV PDF

### Technical

- [ ] Tested locally
- [ ] Build succeeds
- [ ] No console errors
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Environment variables set
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active

### Testing

- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Contact form works
- [ ] All links work

### SEO & Social

- [ ] Updated meta tags
- [ ] Added Open Graph tags
- [ ] Added Twitter Card tags
- [ ] Submitted to Google Search Console
- [ ] Created sitemap (optional)
- [ ] Added to LinkedIn profile
- [ ] Added to GitHub profile
- [ ] Shared on social media

---

## Part 12: Post-Launch

### Week 1

- [ ] Monitor analytics
- [ ] Check for errors in Vercel logs
- [ ] Respond to any contact form submissions
- [ ] Fix any reported issues
- [ ] Gather feedback from friends/colleagues

### Month 1

- [ ] Add new project
- [ ] Write new blog post
- [ ] Update experience if needed
- [ ] Check for broken links
- [ ] Update dependencies

### Ongoing

- [ ] Monthly dependency updates
- [ ] Regular content updates
- [ ] Monitor performance
- [ ] Respond to contact form
- [ ] Write blog posts
- [ ] Add new projects

---

## 📊 Quick Reference

### Important URLs

```
GitHub Repo: https://github.com/YOUR_USERNAME/MyCareer-Portfolio
Vercel Dashboard: https://vercel.com/dashboard
Live Site: https://mycareer-portfolio.vercel.app
Custom Domain: https://yourname.com (if configured)
```

### Important Commands

```bash
# Development
npm run dev

# Build
npm run build

# Deploy (automatic via Vercel)
git push

# Update dependencies
npm update

# Security audit
npm audit
```

### Environment Variables

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_key_here
```

---

## 🆘 Need Help?

### Resources

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Docs:** https://docs.github.com
- **Next.js Docs:** https://nextjs.org/docs
- **Web3Forms:** https://web3forms.com/docs
- **hCaptcha:** https://docs.hcaptcha.com

### Support

- 📖 Check [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)
- 🐛 [Open an issue](https://github.com/YOUR_USERNAME/MyCareer-Portfolio/issues)
- 💬 [Start a discussion](https://github.com/YOUR_USERNAME/MyCareer-Portfolio/discussions)

---

## ✅ Success!

Your portfolio is now live! 🎉

**What you've accomplished:**
- ✅ Code on GitHub
- ✅ Live on Vercel
- ✅ Automatic deployments
- ✅ Custom domain (optional)
- ✅ SSL certificate
- ✅ Contact form working
- ✅ Professional portfolio live

**Next steps:**
- Share your portfolio URL
- Update your resume
- Add to LinkedIn
- Keep content updated
- Write blog posts

---

**Congratulations on launching your portfolio! 🚀**
