# 🚀 MyCareer Portfolio

A modern, fully-featured portfolio template built with Next.js 16, featuring orbital parallax animations, neural grid effects, secure contact form, and blog system. Perfect for developers, designers, and tech professionals.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Security](https://img.shields.io/badge/Security-9.5%2F10-green)

---

## 🎯 Perfect For

- 💼 Software Developers
- 🎨 UI/UX Designers
- 🔐 Cybersecurity Professionals
- 📱 Full-Stack Engineers
- 🚀 Tech Entrepreneurs

---

## ✨ Features

### 🎨 Design & Animations
- **Orbital Parallax Hero** - Mouse-reactive floating shapes with smooth inertia
- **Neural Grid Animation** - Interactive canvas-based background effects
- **Glowing Components** - Soft cyan/emerald shadows on all cards
- **Glass Morphism** - Modern frosted glass effects
- **Smooth Transitions** - Framer Motion animations throughout
- **Responsive Design** - Mobile-first, works perfectly on all devices
- **Dark Mode Ready** - Beautiful color scheme optimized for readability

### 🛠️ Functionality
- **Dynamic Project Filtering** - Filter projects by category (Web Dev, App, Cyber)
- **Blog System** - Full-featured blog with markdown support
- **Secure Contact Form** - Web3Forms integration with hCaptcha protection
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- **Fast Performance** - Optimized for Core Web Vitals
- **Type-Safe** - Full TypeScript implementation

### 🔒 Security (9.5/10 ⭐)
- **No Hardcoded Secrets** - All keys in environment variables
- **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- **Input Sanitization** - Advanced validation and cleaning
- **Bot Protection** - hCaptcha + honeypot detection
- **Email Validation** - Regex-based validation
- **Character Limits** - Prevents abuse and spam
- **Environment Validation** - Build-time checks for required variables

---

## 🚀 Quick Start (For Users Cloning This Repo)

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git
- GitHub account (for deployment)
- Vercel account (free, for hosting)

### Step 1: Clone & Install

```bash
# Clone this repository
git clone https://github.com/BlkPandaCyOps/MyCareer-Portfolio.git

# Navigate to project
cd MyCareer-Portfolio

# Install dependencies
npm install
```

### Step 2: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your API keys
# See SETUP_GUIDE.md for detailed instructions
```

You'll need (both free):
1. **Web3Forms API Key** - Get from https://web3forms.com
2. **hCaptcha Site Key** - Get from https://hcaptcha.com

**See [QUICK_START_SECURITY.md](QUICK_START_SECURITY.md) for step-by-step setup (10 minutes)**

### Step 3: Customize Your Content

Edit `data/content.json` to add your:
- Personal information
- Work experience
- Projects
- Education
- Skills
- Social media links

**See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for detailed instructions**

### Step 4: Add Your Images

```bash
# Add your profile photo
public/images/avatar.jpg

# Add project screenshots (optional)
public/images/projects/
```

### Step 5: Test Locally

```bash
# Start development server
npm run dev

# Open browser
http://localhost:3000

# Test the contact form
# Verify all sections display correctly
```

### Step 6: Deploy to Vercel

**See [GITHUB_VERCEL_DEPLOYMENT.md](GITHUB_VERCEL_DEPLOYMENT.md) for complete deployment guide**

Quick version:
```bash
# Push to your GitHub repository
git add .
git commit -m "Initial setup with my content"
git push

# Deploy on Vercel
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Add environment variables
# 4. Deploy!
```

---

## 📁 Project Structure

```
MyCareer-Portfolio/
├── 📱 app/                         # Next.js App Router
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── blog/                       # Blog pages
│   │   ├── page.tsx               # Blog list
│   │   └── [slug]/                # Individual blog posts
│   └── api/                        # API routes
│       └── articles/              # Blog API endpoints
│
├── 🎨 components/                  # React Components
│   ├── sections/                   # Page sections
│   │   ├── Hero.tsx               # Hero with parallax
│   │   ├── About.tsx              # About section
│   │   ├── Experience.tsx         # Work experience
│   │   ├── Projects.tsx           # Projects showcase
│   │   ├── Blog.tsx               # Blog preview
│   │   └── Contact.tsx            # Contact form
│   ├── Navbar.tsx                 # Navigation bar
│   └── Footer.tsx                 # Footer
│
├── 📝 data/                        # Content Data
│   ├── content.json               # Main portfolio content
│   └── articles/                  # Blog posts (markdown)
│       ├── getting-started.md
│       ├── web-security.md
│       └── react-performance.md
│
├── 🔧 lib/                         # Utilities
│   └── env.ts                     # Environment validation
│
├── 🖼️ public/                      # Static Assets
│   ├── images/                    # Images
│   │   ├── avatar.jpg            # Your profile photo
│   │   └── projects/             # Project screenshots
│   └── files/                     # Downloadable files
│       └── resume.pdf            # Your resume
│
├── 📚 docs/                        # Documentation
│   ├── CONTENT_GUIDE.md           # How to edit content
│   ├── BLOG_ARTICLE_GUIDE.md      # How to write blog posts
│   ├── DESIGN_SYSTEM.md           # Design guidelines
│   ├── FEATURES.md                # Feature documentation
│   └── TROUBLESHOOTING.md         # Common issues
│
├── 🔐 Configuration Files
│   ├── .env.local                 # Your API keys (NOT in Git)
│   ├── .env.example               # Template for .env.local
│   ├── next.config.ts             # Next.js config
│   ├── tailwind.config.ts         # Tailwind config
│   ├── tsconfig.json              # TypeScript config
│   └── package.json               # Dependencies
│
└── 📖 Documentation
    ├── README.md                  # This file
    ├── SETUP_GUIDE.md             # Setup instructions
    ├── GITHUB_VERCEL_DEPLOYMENT.md # Deployment guide
    ├── MAINTENANCE_GUIDE.md       # How to update
    ├── SECURITY_AUDIT.md          # Security details
    └── GO_LIVE_CHECKLIST.md       # Pre-launch checklist
```

---

## 🎨 Customization Guide

### 1. Update Personal Information

**File:** `data/content.json`

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "location": "Your City, Country",
    "bio": "Your professional bio..."
  }
}
```

### 2. Add Your Projects

```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Project description",
      "tags": ["React", "TypeScript", "Node.js"],
      "category": "Web Dev",
      "github": "https://github.com/yourusername/project",
      "demo": "https://your-project.com"
    }
  ]
}
```

### 3. Add Work Experience

```json
{
  "experience": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "duration": "Jan 2023 - Present",
      "description": "What you did...",
      "skills": ["Skill 1", "Skill 2"]
    }
  ]
}
```

### 4. Write Blog Posts

Create markdown files in `data/articles/`:

```markdown
---
title: "Your Article Title"
date: "2025-11-10"
excerpt: "Brief description"
tags: ["JavaScript", "Tutorial"]
---

Your content here...
```

**See [docs/BLOG_ARTICLE_GUIDE.md](docs/BLOG_ARTICLE_GUIDE.md) for detailed guide**

### 5. Update Social Links

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

---

## 🚀 Deployment Guide

### Option 1: Vercel (Recommended)

**Why Vercel?**
- ✅ Free hosting for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Built-in SSL certificates
- ✅ Global CDN
- ✅ Easy environment variable management

**Complete Guide:** [GITHUB_VERCEL_DEPLOYMENT.md](GITHUB_VERCEL_DEPLOYMENT.md)

### Option 2: Other Platforms

This project can also be deployed to:
- **Netlify** - Similar to Vercel
- **Railway** - Good for full-stack apps
- **Render** - Free tier available
- **AWS Amplify** - AWS integration

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript (if configured)
```

---

## 🎨 Tech Stack

### Core
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4

### Features
- **Animations:** Framer Motion
- **Forms:** Web3Forms + hCaptcha
- **Markdown:** ReactMarkdown + Gray Matter
- **Icons:** Lucide React

### Deployment
- **Hosting:** Vercel
- **Version Control:** Git + GitHub
- **CI/CD:** Automatic via Vercel

---

## 📚 Complete Documentation

### Getting Started
- **[QUICK_START_SECURITY.md](QUICK_START_SECURITY.md)** - 10-minute security setup
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup instructions
- **[GITHUB_VERCEL_DEPLOYMENT.md](GITHUB_VERCEL_DEPLOYMENT.md)** - Deployment guide

### Customization
- **[docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)** - Edit your content
- **[docs/BLOG_ARTICLE_GUIDE.md](docs/BLOG_ARTICLE_GUIDE.md)** - Write blog posts
- **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** - Design guidelines

### Maintenance
- **[MAINTENANCE_GUIDE.md](MAINTENANCE_GUIDE.md)** - Update your portfolio
- **[docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)** - Common issues

### Security
- **[SECURITY_AUDIT.md](SECURITY_AUDIT.md)** - Security report (9.5/10)
- **[SECURITY_IMPLEMENTATION.md](SECURITY_IMPLEMENTATION.md)** - Security details

### Launch
- **[GO_LIVE_CHECKLIST.md](GO_LIVE_CHECKLIST.md)** - Pre-launch checklist

---

## 🔒 Security Features

This portfolio template includes enterprise-grade security:

### Implemented Security Measures
✅ **Content Security Policy (CSP)** - Prevents XSS attacks  
✅ **Security Headers** - HSTS, X-Frame-Options, X-Content-Type-Options  
✅ **Input Sanitization** - All user inputs cleaned and validated  
✅ **Bot Protection** - hCaptcha + honeypot field  
✅ **Email Validation** - Regex-based validation  
✅ **Character Limits** - Prevents spam and abuse  
✅ **Environment Validation** - Build-time checks  
✅ **No Hardcoded Secrets** - All keys in environment variables

**Security Score: 9.5/10 ⭐**

---

## 🆘 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Contact Form Not Working**
- Check `.env.local` has both API keys
- Restart dev server after adding keys
- Verify keys are correct (no extra spaces)
- See [SETUP_GUIDE.md](SETUP_GUIDE.md)

**Images Not Loading**
- Verify files are in `public/images/`
- Check file paths are correct
- Ensure file names match exactly (case-sensitive)

**Styling Issues**
- Clear browser cache
- Check Tailwind classes are correct
- Verify `tailwind.config.ts` is correct

**See [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) for more solutions**

---

## 🔄 Keeping Your Portfolio Updated

### Regular Updates
```bash
# Pull latest changes (if you forked)
git pull origin main

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Adding New Content
1. **New Project:** Edit `data/content.json`
2. **New Blog Post:** Add markdown file to `data/articles/`
3. **Update Experience:** Edit `data/content.json`
4. **New Images:** Add to `public/images/`

**See [MAINTENANCE_GUIDE.md](MAINTENANCE_GUIDE.md) for detailed instructions**

---

## 📊 Performance

This template is optimized for performance:

- ✅ **Lighthouse Score:** 95+ (all categories)
- ✅ **First Contentful Paint:** < 1.5s
- ✅ **Time to Interactive:** < 3s
- ✅ **Cumulative Layout Shift:** < 0.1
- ✅ **Bundle Size:** Optimized with code splitting

---

## 🤝 Contributing

Found a bug or want to contribute?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

**You are free to:**
- ✅ Use for personal projects
- ✅ Use for commercial projects
- ✅ Modify and customize
- ✅ Distribute

**Attribution appreciated but not required!**

---

## 🌟 Show Your Support

If you found this template helpful:
- ⭐ Star this repository
- 🐛 Report bugs
- 💡 Suggest features
- 🔀 Fork and customize
- 📢 Share with others

---

## 📧 Support & Contact

### Need Help?
- 📖 Check the [documentation](docs/)
- 🐛 [Open an issue](https://github.com/yourusername/MyCareer-Portfolio/issues)
- 💬 [Start a discussion](https://github.com/yourusername/MyCareer-Portfolio/discussions)

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

## 🎉 Ready to Launch?

### Quick Checklist
- [ ] Cloned repository
- [ ] Installed dependencies
- [ ] Added API keys to `.env.local`
- [ ] Updated `data/content.json` with your info
- [ ] Added profile photo
- [ ] Tested locally
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Tested live site

**See [GO_LIVE_CHECKLIST.md](GO_LIVE_CHECKLIST.md) for complete checklist**

---

## 🚀 What's Included

### Pages
- ✅ Home page with all sections
- ✅ Blog list page
- ✅ Individual blog post pages
- ✅ 404 error page

### Sections
- ✅ Hero with parallax animation
- ✅ About section
- ✅ Experience timeline
- ✅ Projects showcase with filtering
- ✅ Blog preview
- ✅ Contact form with captcha

### Features
- ✅ Responsive navigation
- ✅ Smooth scrolling
- ✅ Animated components
- ✅ SEO optimization
- ✅ Security headers
- ✅ Performance optimization

---

**Built with ❤️ using Next.js, React, and TypeScript**

**Ready to showcase your career? Let's go! 🚀**
