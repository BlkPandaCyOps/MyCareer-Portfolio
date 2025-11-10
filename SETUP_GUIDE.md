# 🔐 Secure Setup Guide - Contact Form & hCaptcha

## Overview

This guide will help you set up the contact form and hCaptcha **securely** without exposing your API keys to the public.

---

## 📋 Prerequisites

You'll need accounts for:
1. **Web3Forms** (for contact form submissions)
2. **hCaptcha** (for spam protection)

Both are free and take ~5 minutes to set up.

---

## Step 1: Get Your Web3Forms API Key

### 1.1 Create Account
1. Go to https://web3forms.com
2. Click **"Get Started Free"**
3. Sign up with your email
4. Verify your email

### 1.2 Create Access Key
1. Log in to Web3Forms dashboard
2. Click **"Create New Access Key"**
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the access key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
5. **Keep this key secret!**

### 1.3 Configure Settings (Optional)
- Set your email to receive notifications
- Configure redirect URL (optional)
- Enable/disable email notifications

---

## Step 2: Get Your hCaptcha Site Key

### 2.1 Create Account
1. Go to https://hcaptcha.com
2. Click **"Sign Up"**
3. Create account (free tier is perfect)
4. Verify your email

### 2.2 Create Site Key
1. Log in to hCaptcha dashboard
2. Go to **"Sites"** → **"Add Site"**
3. Enter site details:
   - **Name:** Portfolio Contact Form
   - **Hostnames:** 
     - `localhost` (for local development)
     - Your production domain (e.g., `yourportfolio.vercel.app`)
4. Click **"Save"**
5. Copy the **Site Key** (looks like: `10000000-ffff-ffff-ffff-000000000001`)
6. **Keep this key secret!**

---

## Step 3: Set Up Local Environment Variables

### 3.1 Create .env.local File

In your project root (`mike-portfolio/`), create a file named `.env.local`:

```bash
# Create the file (Windows PowerShell)
New-Item -Path .env.local -ItemType File

# Or use your code editor to create it
```

### 3.2 Add Your Keys

Open `.env.local` and add:

```env
# Web3Forms Access Key
NEXT_PUBLIC_WEB3FORMS_KEY=paste_your_web3forms_key_here

# hCaptcha Site Key
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=paste_your_hcaptcha_site_key_here
```

**Example:**
```env
NEXT_PUBLIC_WEB3FORMS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=10000000-ffff-ffff-ffff-000000000001
```

### 3.3 Verify .gitignore

Make sure `.env.local` is in your `.gitignore` (it already is):

```gitignore
# env files
.env
.env*.local
.env.production
```

✅ This ensures your keys are **never** committed to Git!

---

## Step 4: Test Locally

### 4.1 Restart Dev Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

### 4.2 Test the Contact Form

1. Open http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form:
   - Name: Test User
   - Email: your-email@example.com
   - Message: Testing contact form
4. Complete the hCaptcha challenge
5. Click "Send Message"

### 4.3 Verify Success

**You should see:**
- ✅ Green success message
- ✅ Form fields clear
- ✅ Email notification (check your Web3Forms email)

**If you see errors:**
- ⚠️ "hCaptcha not configured" → Check your `.env.local` file
- ⚠️ "Web3Forms API key not configured" → Check your `.env.local` file
- ⚠️ "Failed to send message" → Check your keys are correct

---

## Step 5: Deploy to Vercel (Production)

### 5.1 Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio with secure contact form"

# Create GitHub repo and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

✅ Your `.env.local` file will **NOT** be pushed (it's in `.gitignore`)

### 5.2 Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click **"Add New..."** → **"Project"**
4. Import your repository
5. **Before deploying**, add environment variables:

### 5.3 Add Environment Variables to Vercel

In the Vercel deployment screen:

1. Expand **"Environment Variables"** section
2. Add first variable:
   - **Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** (paste your Web3Forms key)
   - **Environment:** Production, Preview, Development
3. Add second variable:
   - **Name:** `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`
   - **Value:** (paste your hCaptcha site key)
   - **Environment:** Production, Preview, Development
4. Click **"Deploy"**

### 5.4 Update hCaptcha Domains

After deployment:

1. Copy your Vercel URL (e.g., `your-portfolio-xyz.vercel.app`)
2. Go to hCaptcha dashboard
3. Edit your site
4. Add your Vercel domain to **"Hostnames"**
5. Save

### 5.5 Test Production

1. Visit your live Vercel URL
2. Test the contact form
3. Verify hCaptcha works
4. Check email notifications

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep `.env.local` file locally only
- Add environment variables to Vercel dashboard
- Use different keys for development and production (optional)
- Regularly check Web3Forms dashboard for spam
- Monitor hCaptcha usage

### ❌ DON'T:
- Never commit `.env.local` to Git
- Never share your API keys publicly
- Never hardcode keys in source code
- Never post keys in Discord/Slack/forums
- Never screenshot keys

---

## 🔧 Troubleshooting

### Issue: "hCaptcha not configured"

**Solution:**
1. Check `.env.local` exists in project root
2. Verify key name is exactly: `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`
3. Restart dev server after creating `.env.local`
4. Check for typos in the key

### Issue: "Web3Forms API key not configured"

**Solution:**
1. Check `.env.local` exists in project root
2. Verify key name is exactly: `NEXT_PUBLIC_WEB3FORMS_KEY`
3. Restart dev server after creating `.env.local`
4. Check for typos in the key

### Issue: hCaptcha shows "Invalid site key"

**Solution:**
1. Verify you copied the **Site Key** (not Secret Key)
2. Check domain is added to hCaptcha allowed domains
3. For localhost, make sure `localhost` is in allowed domains
4. Wait 2-5 minutes for hCaptcha propagation

### Issue: Form submits but no email received

**Solution:**
1. Check spam/junk folder
2. Verify email in Web3Forms dashboard settings
3. Check Web3Forms dashboard for submission logs
4. Ensure Web3Forms key is correct

### Issue: "Failed to send message"

**Solution:**
1. Check browser console for errors (F12)
2. Verify both keys are set correctly
3. Check internet connection
4. Try in incognito mode (clear cache)

---

## 📊 Monitoring

### Web3Forms Dashboard
- View all form submissions
- Check spam/abuse reports
- Monitor quota usage
- Download submission data

### hCaptcha Dashboard
- View captcha solve rate
- Check for abuse
- Monitor quota usage
- View analytics

---

## 🔄 Updating Keys

If you need to rotate keys:

### Local Development
1. Update `.env.local` with new keys
2. Restart dev server
3. Test contact form

### Production (Vercel)
1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Edit the variables
5. Redeploy (or wait for auto-deploy)

---

## 📝 Quick Reference

### File Structure
```
mike-portfolio/
├── .env.local              # ← Your secret keys (NOT in Git)
├── .env.example            # ← Template (safe to commit)
├── .gitignore              # ← Excludes .env.local
└── components/
    └── sections/
        └── Contact.tsx     # ← Uses environment variables
```

### Environment Variables
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_hcaptcha_site_key
```

### Vercel Environment Variables
Same as above, added through Vercel dashboard.

---

## ✅ Checklist

### Initial Setup
- [ ] Created Web3Forms account
- [ ] Got Web3Forms access key
- [ ] Created hCaptcha account
- [ ] Got hCaptcha site key
- [ ] Created `.env.local` file
- [ ] Added both keys to `.env.local`
- [ ] Restarted dev server
- [ ] Tested contact form locally
- [ ] Received test email

### Before Deployment
- [ ] Verified `.env.local` is in `.gitignore`
- [ ] Tested form works locally
- [ ] Committed code to Git (without `.env.local`)
- [ ] Pushed to GitHub

### Deployment
- [ ] Created Vercel account
- [ ] Imported GitHub repository
- [ ] Added environment variables to Vercel
- [ ] Deployed successfully
- [ ] Added Vercel domain to hCaptcha
- [ ] Tested form on live site
- [ ] Verified email notifications work

---

## 🆘 Need Help?

### Resources
- **Web3Forms Docs:** https://web3forms.com/docs
- **hCaptcha Docs:** https://docs.hcaptcha.com
- **Next.js Env Vars:** https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- **Vercel Env Vars:** https://vercel.com/docs/environment-variables

### Common Questions

**Q: Can I use the same keys for development and production?**  
A: Yes, but it's better to use separate keys for better tracking.

**Q: Are these keys safe to use on the client-side?**  
A: Yes, `NEXT_PUBLIC_*` variables are meant for client-side use. The actual secret keys (Web3Forms secret, hCaptcha secret) are never exposed.

**Q: What if I accidentally commit my keys?**  
A: Immediately revoke the keys and generate new ones. Remove them from Git history if possible.

**Q: Do I need to pay for these services?**  
A: No, both Web3Forms and hCaptcha have generous free tiers perfect for portfolios.

---

**You're all set!** 🎉

Your contact form is now secure and ready to use. The keys are safely stored in environment variables and will never be exposed to the public.
