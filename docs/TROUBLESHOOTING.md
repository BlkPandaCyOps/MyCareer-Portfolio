# Troubleshooting Guide

Common issues and their solutions.

## 🔧 Installation Issues

### "npm install" fails

**Problem:** Dependencies won't install

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Node version error

**Problem:** "Unsupported Node.js version"

**Solution:**
- Ensure Node.js 18+ is installed
- Check version: `node --version`
- Update Node.js from [nodejs.org](https://nodejs.org)

## 🏗️ Build Issues

### Build fails with TypeScript errors

**Problem:** Type errors during build

**Solutions:**
```bash
# Check for errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### "Module not found" error

**Problem:** Import errors

**Solutions:**
1. Check file path is correct
2. Verify file exists
3. Check import statement syntax
4. Restart dev server

### Tailwind classes not working

**Problem:** Styles not applying

**Solutions:**
1. Check `tailwind.config.ts` includes all content paths
2. Restart dev server
3. Clear `.next` folder:
   ```bash
   rm -rf .next
   npm run dev
   ```

## 🎨 Styling Issues

### Dark mode not working

**Problem:** Theme toggle doesn't work

**Solutions:**
1. Check browser localStorage is enabled
2. Clear browser cache
3. Check console for errors
4. Verify ThemeProvider is wrapping app

### Animations not smooth

**Problem:** Janky or slow animations

**Solutions:**
1. Check browser performance
2. Reduce motion in system settings may be enabled
3. Test in different browser
4. Check for console errors

### Mobile layout broken

**Problem:** Responsive design not working

**Solutions:**
1. Test in browser dev tools mobile view
2. Check Tailwind responsive classes (sm:, md:, lg:)
3. Verify viewport meta tag in layout
4. Clear browser cache

## 📝 Content Issues

### Blog posts not showing

**Problem:** Articles don't appear

**Solutions:**
1. Verify `.md` files are in `data/articles/`
2. Check frontmatter format is correct:
   ```markdown
   ---
   title: "Title"
   date: "2024-01-15"
   excerpt: "Description"
   tags: ["Tag1"]
   ---
   ```
3. Restart dev server
4. Check file encoding is UTF-8

### Images not loading

**Problem:** Images show broken icon

**Solutions:**
1. Verify images are in `public/` directory
2. Check file path starts with `/`:
   ```json
   "image": "/images/photo.jpg"
   ```
3. Verify file name matches exactly (case-sensitive)
4. Check image file isn't corrupted
5. Try different image format (JPG/PNG)

### Content.json changes not reflecting

**Problem:** Updates don't show

**Solutions:**
1. Restart dev server
2. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
3. Check JSON syntax is valid
4. Clear browser cache

## 📧 Contact Form Issues

### Form not submitting

**Problem:** Contact form doesn't work

**Solutions:**
1. Verify Formspree form ID is correct
2. Check browser console for errors
3. Test Formspree endpoint directly
4. Verify internet connection
5. Check CORS settings

### Form submits but no email received

**Problem:** Form works but no notification

**Solutions:**
1. Check Formspree dashboard
2. Verify email address in Formspree settings
3. Check spam folder
4. Verify Formspree plan limits

## 🚀 Deployment Issues

### Vercel build fails

**Problem:** Deployment fails on Vercel

**Solutions:**
1. Check build logs in Vercel dashboard
2. Verify build works locally:
   ```bash
   npm run build
   ```
3. Check environment variables are set
4. Verify Node.js version in Vercel settings
5. Check for TypeScript errors

### GitHub Pages not working

**Problem:** Site doesn't load on GitHub Pages

**Solutions:**
1. Verify `next.config.ts` has correct settings:
   ```typescript
   output: 'export',
   basePath: '/repo-name',
   ```
2. Check GitHub Pages is enabled in repo settings
3. Verify branch is correct (gh-pages)
4. Wait a few minutes for deployment
5. Check for build errors in Actions tab

### Custom domain not working

**Problem:** Domain doesn't point to site

**Solutions:**
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check domain configuration in Vercel
4. Verify SSL certificate is issued
5. Try accessing with https://

## 🔍 Runtime Issues

### Page not found (404)

**Problem:** Routes don't work

**Solutions:**
1. Check file structure in `app/` directory
2. Verify file names are correct
3. Check for typos in URLs
4. Restart dev server
5. Clear `.next` folder

### Hydration errors

**Problem:** "Hydration failed" error

**Solutions:**
1. Check for mismatched HTML between server and client
2. Verify no invalid HTML nesting
3. Check for browser extensions interfering
4. Use `suppressHydrationWarning` on html tag (already added)

### Slow page loads

**Problem:** Site loads slowly

**Solutions:**
1. Optimize images (compress, resize)
2. Check network tab in browser dev tools
3. Verify build is production build
4. Check for large dependencies
5. Use Lighthouse for performance audit

## 🎯 Navigation Issues

### Smooth scroll not working

**Problem:** Anchor links jump instead of scroll

**Solutions:**
1. Verify `scroll-behavior: smooth` in CSS
2. Check browser supports smooth scroll
3. Test in different browser
4. Check for JavaScript errors

### Mobile menu not closing

**Problem:** Hamburger menu stays open

**Solutions:**
1. Check onClick handlers in Navbar
2. Verify state management
3. Check for JavaScript errors
4. Test in different browser

## 💻 Development Issues

### Hot reload not working

**Problem:** Changes don't reflect automatically

**Solutions:**
1. Restart dev server
2. Check file is saved
3. Verify file is in watched directory
4. Check for syntax errors
5. Try different port:
   ```bash
   npm run dev -- -p 3001
   ```

### Port already in use

**Problem:** "Port 3000 is already in use"

**Solutions:**
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

## 🔐 Security Issues

### Exposed API keys

**Problem:** API keys visible in code

**Solutions:**
1. Move keys to `.env.local`
2. Add `.env.local` to `.gitignore`
3. Use environment variables:
   ```javascript
   process.env.NEXT_PUBLIC_API_KEY
   ```
4. Rotate exposed keys immediately
5. Never commit `.env.local`

## 📱 Mobile Issues

### Touch events not working

**Problem:** Buttons/links don't work on mobile

**Solutions:**
1. Check for hover-only interactions
2. Add touch event handlers
3. Test on actual device
4. Check for z-index issues
5. Verify button size is adequate (44x44px minimum)

### Text too small on mobile

**Problem:** Text hard to read on mobile

**Solutions:**
1. Check responsive font sizes
2. Use Tailwind responsive classes
3. Test on actual device
4. Verify viewport meta tag
5. Check minimum font size (16px for inputs)

## 🐛 General Debugging

### Check browser console

Always check browser console (F12) for errors:
1. Open DevTools (F12)
2. Go to Console tab
3. Look for red errors
4. Read error messages carefully

### Check terminal output

Monitor terminal where dev server runs:
1. Look for compilation errors
2. Check for warnings
3. Note any failed requests

### Clear everything and restart

When all else fails:
```bash
# Stop dev server (Ctrl+C)

# Clear everything
rm -rf .next node_modules package-lock.json

# Reinstall
npm install

# Rebuild
npm run build

# Start fresh
npm run dev
```

## 📞 Getting Help

If you're still stuck:

1. **Check Documentation**
   - Read README.md
   - Check relevant guide files
   - Review code comments

2. **Search Online**
   - Google the error message
   - Check Stack Overflow
   - Search Next.js GitHub issues

3. **Community Resources**
   - [Next.js Discord](https://nextjs.org/discord)
   - [Next.js Discussions](https://github.com/vercel/next.js/discussions)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

4. **Official Documentation**
   - [Next.js Docs](https://nextjs.org/docs)
   - [React Docs](https://react.dev)
   - [Tailwind Docs](https://tailwindcss.com/docs)

## 🔍 Diagnostic Commands

Useful commands for debugging:

```bash
# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Check for outdated packages
npm outdated

# Verify build works
npm run build

# Check for linting errors
npm run lint

# Clear npm cache
npm cache clean --force

# Verify TypeScript
npx tsc --noEmit
```

## 📊 Performance Debugging

### Check build size
```bash
npm run build
# Check output for bundle sizes
```

### Analyze bundle
```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.ts and run build
```

### Test performance
- Use Lighthouse in Chrome DevTools
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor Vercel Analytics

---

## 💡 Prevention Tips

1. **Always test locally before deploying**
2. **Keep dependencies updated**
3. **Use version control (Git)**
4. **Read error messages carefully**
5. **Test on multiple browsers**
6. **Test on actual mobile devices**
7. **Keep backups of working code**
8. **Document your changes**

Remember: Most issues have simple solutions. Stay calm, read error messages, and debug systematically!
