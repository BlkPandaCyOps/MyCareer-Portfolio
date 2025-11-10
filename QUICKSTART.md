# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Update Your Information

Edit `data/content.json` and replace with your information:

```json
{
  "personal": {
    "name": "Your Name",
    "tagline": "Your professional tagline",
    "bio": "Your bio...",
    "email": "your.email@example.com"
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

## 3. Add Your Content

### Experience
Update the `experience` array in `data/content.json`

### Projects
Update the `projects` array in `data/content.json`

### Education & Certifications
Update the `education` and `certifications` arrays

## 4. Add Your Images

Place your images in the `public/images/` directory:
- `public/images/avatar.jpg` - Your profile photo
- `public/images/projects/` - Project screenshots
- `public/files/` - Your CV/resume PDF

## 5. Setup Contact Form

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Open `components/sections/Contact.tsx`
4. Replace `YOUR_FORM_ID` with your actual form ID:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 7. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: {
    500: '#10b981', // Change this to your preferred color
    600: '#059669',
    // ...
  },
}
```

## 8. Add Blog Posts

Create `.md` files in `data/articles/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description"
tags: ["Tag1", "Tag2"]
---

# Your Content Here

Write your blog post in Markdown...
```

## 9. Deploy

### Vercel (Easiest):
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Then import on vercel.com
```

### GitHub Pages:
See `DEPLOYMENT.md` for detailed instructions

## Common Customizations

### Change Font
Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

### Add More Sections
Create new components in `components/sections/` and import them in `app/page.tsx`

### Modify Animations
Edit animation settings in `tailwind.config.ts`

## Need Help?

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment guides
- Review the code comments for inline documentation

## Next Steps

1. ✅ Update all content in `data/content.json`
2. ✅ Add your images and CV
3. ✅ Setup Formspree for contact form
4. ✅ Write your first blog post
5. ✅ Test on mobile devices
6. ✅ Deploy to Vercel
7. ✅ Share your portfolio!

Happy building! 🚀
