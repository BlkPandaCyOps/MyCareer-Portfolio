# Project Tags & Categories Guide

## Overview

Your portfolio uses a **category-based filtering system** to keep the filter buttons clean and organized.

## How It Works

### Filter Buttons (Categories)
Only **3 main categories** appear as filter buttons:
- **Web Dev** - Web development projects
- **App** - Mobile/Desktop applications  
- **Cyber** - Cybersecurity projects

### Project Tags (Technologies)
Each project can have **multiple technology tags** that display on the project card but don't create filter buttons.

## Project Structure

```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Brief description of the project",
  "image": "/images/projects/project-image.jpg",
  "category": "Web Dev",  // ← Filter category (required)
  "tags": ["React", "Node.js", "MongoDB"],  // ← Technology tags (optional)
  "github": "https://github.com/username/repo",
  "demo": "https://project-demo.com"  // or null if no demo
}
```

## Categories

### Web Dev
For web development projects:
- Websites
- Web applications
- Web APIs
- Frontend/Backend projects

**Example tags:**
- React, Vue, Angular
- Next.js, Nuxt, Gatsby
- Node.js, Express, Django
- HTML, CSS, JavaScript, TypeScript
- Tailwind CSS, Bootstrap
- MongoDB, PostgreSQL, MySQL

### App
For mobile and desktop applications:
- Mobile apps (iOS/Android)
- Desktop applications
- Cross-platform apps
- Native apps

**Example tags:**
- React Native, Flutter
- Swift, Kotlin
- Electron, Tauri
- iOS, Android
- Mobile, Desktop

### Cyber
For cybersecurity projects:
- Security tools
- Penetration testing
- Network security
- Security analysis
- Hacking labs

**Example tags:**
- Security, Penetration Testing
- Networking, Firewall
- Python, Bash
- Kali Linux, Metasploit
- SIEM, IDS/IPS
- Vulnerability Assessment

## Adding a New Project

### Step 1: Choose Category

Pick ONE category:
- `"Web Dev"` - Web projects
- `"App"` - Mobile/Desktop apps
- `"Cyber"` - Security projects

### Step 2: Add Technology Tags

Add 3-5 relevant technology tags:
```json
"tags": ["React", "TypeScript", "Tailwind CSS", "Next.js"]
```

### Step 3: Complete Project Entry

```json
{
  "id": 3,  // Increment from last project
  "title": "Your Project Name",
  "description": "Clear, concise description (1-2 sentences)",
  "image": "/images/projects/your-project.jpg",
  "category": "Web Dev",  // Choose: Web Dev, App, or Cyber
  "tags": ["React", "Node.js", "MongoDB", "Express"],
  "github": "https://github.com/yourusername/your-repo",
  "demo": "https://your-demo-url.com"  // or null
}
```

## Examples

### Web Dev Project
```json
{
  "id": 3,
  "title": "E-Commerce Platform",
  "description": "Full-stack e-commerce site with payment integration and admin dashboard",
  "image": "/images/projects/ecommerce.jpg",
  "category": "Web Dev",
  "tags": ["React", "Node.js", "Stripe", "MongoDB", "Express"],
  "github": "https://github.com/username/ecommerce",
  "demo": "https://ecommerce-demo.com"
}
```

### App Project
```json
{
  "id": 4,
  "title": "Fitness Tracker App",
  "description": "Cross-platform mobile app for tracking workouts and nutrition",
  "image": "/images/projects/fitness-app.jpg",
  "category": "App",
  "tags": ["React Native", "Firebase", "TypeScript", "iOS", "Android"],
  "github": "https://github.com/username/fitness-tracker",
  "demo": null
}
```

### Cyber Project
```json
{
  "id": 5,
  "title": "Network Scanner Tool",
  "description": "Python-based network scanning and vulnerability assessment tool",
  "image": "/images/projects/network-scanner.jpg",
  "category": "Cyber",
  "tags": ["Python", "Networking", "Security", "Nmap", "Scapy"],
  "github": "https://github.com/username/network-scanner",
  "demo": null
}
```

## Tag Best Practices

### Do's ✅
- Use 3-5 tags per project
- Use specific technology names
- Include main technologies used
- Be consistent with tag names
- Use proper capitalization

### Don'ts ❌
- Don't use category names as tags
- Don't use generic terms like "Code" or "Project"
- Don't add too many tags (max 6)
- Don't use abbreviations unless common (API, SQL, etc.)

## Common Tags by Category

### Web Dev Tags
```
Frontend: React, Vue, Angular, Svelte, Next.js, Nuxt
Backend: Node.js, Express, Django, Flask, FastAPI, Laravel
Database: MongoDB, PostgreSQL, MySQL, Firebase, Supabase
Styling: Tailwind CSS, Bootstrap, Sass, CSS, Styled Components
Language: JavaScript, TypeScript, Python, PHP, Ruby
```

### App Tags
```
Mobile: React Native, Flutter, Swift, Kotlin, Ionic
Desktop: Electron, Tauri, Qt, JavaFX
Platform: iOS, Android, Windows, macOS, Linux
Backend: Firebase, Supabase, AWS Amplify
Language: JavaScript, TypeScript, Dart, Swift, Kotlin
```

### Cyber Tags
```
Tools: Nmap, Metasploit, Burp Suite, Wireshark, Kali Linux
Skills: Penetration Testing, Vulnerability Assessment, Network Security
Languages: Python, Bash, PowerShell, C, Assembly
Areas: Web Security, Network Security, Malware Analysis, Forensics
Platforms: Linux, Windows, Cloud Security
```

## Updating Existing Projects

To update a project's category or tags:

1. Open `data/content.json`
2. Find the project by ID
3. Update the `category` field (Web Dev, App, or Cyber)
4. Update the `tags` array with technology tags
5. Save the file

## Filter Behavior

**When user clicks "All":**
- Shows all projects

**When user clicks "Web Dev":**
- Shows only projects with `"category": "Web Dev"`

**When user clicks "App":**
- Shows only projects with `"category": "App"`

**When user clicks "Cyber":**
- Shows only projects with `"category": "Cyber"`

**Technology tags:**
- Display on project cards
- Do NOT create filter buttons
- Help users understand technologies used

## Benefits of This System

✅ **Clean Interface** - Only 4 filter buttons (All, Web Dev, App, Cyber)
✅ **Scalable** - Add unlimited projects without cluttering filters
✅ **Flexible** - Use any technology tags you want
✅ **Organized** - Clear categorization of projects
✅ **User-Friendly** - Easy to filter by project type

## Quick Reference

```json
// Template for new project
{
  "id": NEXT_NUMBER,
  "title": "Project Title",
  "description": "One sentence description",
  "image": "/images/projects/image.jpg",
  "category": "Web Dev | App | Cyber",
  "tags": ["Tech1", "Tech2", "Tech3"],
  "github": "https://github.com/user/repo",
  "demo": "https://demo.com or null"
}
```

---

**Need help?** Check [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for more details on managing content.
