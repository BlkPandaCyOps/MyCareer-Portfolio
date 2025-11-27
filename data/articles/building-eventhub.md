---
title: "Building EventHub: A Full-Stack Event Planning Platform"
date: "2024-11-27"
excerpt: "A deep dive into building a modern SaaS platform for event planning, covering architecture decisions, technical challenges, and lessons learned from development to deployment."
tags: ["Next.js", "TypeScript", "Full-Stack", "SaaS", "PostgreSQL"]
---

# Building EventHub: A Full-Stack Event Planning Platform

Event planning is complex, involving coordination between planners, clients, and vendors. I wanted to build a modern SaaS platform that streamlines this process while maintaining security and providing an excellent user experience for all stakeholders.

## The Challenge

Event planning requires juggling multiple moving parts: client requirements, vendor coordination, budget tracking, task management, and timeline adherence. Traditional tools are either too simple (spreadsheets) or too complex (enterprise software). I set out to build something in between—powerful yet intuitive.

## Tech Stack Decisions

### Why Next.js 15?

I chose Next.js 15 with the App Router for several compelling reasons:

- **Server Components** - Reduced client-side JavaScript and improved performance
- **API Routes** - Built-in backend without separate server setup
- **File-based routing** - Intuitive project structure
- **TypeScript support** - Type safety across the entire stack

### Database Architecture

PostgreSQL with Prisma ORM provided:

- **Type-safe queries** - Auto-generated TypeScript types from schema
- **Migration system** - Version-controlled database changes
- **Relation management** - Easy handling of complex relationships between events, tasks, vendors, and users

```typescript
// Example Prisma schema
model Event {
  id          String   @id @default(cuid())
  title       String
  date        DateTime
  budget      Decimal
  tasks       Task[]
  vendors     Vendor[]
  createdAt   DateTime @default(now())
}
```

### Authentication Strategy

NextAuth.js for planners with session-based auth, plus a custom token-based system for clients (no account required). This dual approach balances security with user convenience.

## Key Features Implemented

### 1. Planner Dashboard

A comprehensive workspace with:

- Multi-event management with visual progress tracking
- Task system with role-based assignments (Planner/Client/Event Coordinator)
- Budget tracking with payment status workflows
- Vendor management with GDPR-compliant invitations

### 2. Client Portal

Secure, token-based access featuring:

- Real-time countdown timer with confetti animations
- Task approval/rejection workflow with feedback modals
- File upload interface with drag-and-drop
- Activity feed showing recent updates

### 3. Security Implementation

Production-ready security including:

- Comprehensive input validation on all API routes
- Rate limiting on authentication endpoints
- Security event logging system with audit trails
- GDPR compliance for vendor data management

## Technical Challenges & Solutions

### Challenge 1: Task Assignment System

**Problem:** Initially used user IDs for task assignments, limiting flexibility.

**Solution:** Refactored to role-based assignments (Planner, Client, Event Coordinator), allowing tasks to be assigned to roles rather than specific users. This required:

1. Database schema migration removing foreign key constraints
2. Updating all API routes to validate role names
3. Refactoring components to display roles instead of user names

```typescript
// Before: User-based assignment
assignedToId: string; // Foreign key to User

// After: Role-based assignment
assignedTo: 'Planner' | 'Client' | 'Event Coordinator';
```

### Challenge 2: Client Portal Authentication

**Problem:** Clients shouldn't need accounts, but access must be secure.

**Solution:** Implemented token-based authentication where:

- Each event generates a unique access token
- Tokens are validated server-side on every request
- No session storage required
- Activity tracking uses localStorage (privacy by design)

```typescript
// Token validation middleware
export async function validateEventToken(token: string) {
  const event = await prisma.event.findUnique({
    where: { accessToken: token }
  });
  
  if (!event) {
    throw new Error('Invalid access token');
  }
  
  return event;
}
```

### Challenge 3: Performance Optimization

**Problem:** Loading event details with all relations was slow.

**Solution:** Implemented selective data loading based on active tab:

```typescript
// Only load tasks when on tasks tab
const includeConfig: any = {
  planner: true,
  vendors: false,
  tasks: false
};

if (tab === 'tasks') {
  includeConfig.tasks = {
    orderBy: { createdAt: 'desc' }
  };
}

const event = await prisma.event.findUnique({
  where: { id },
  include: includeConfig
});
```

This reduced initial load time by **~60%**.

## Lessons Learned

### 1. Type Safety is Worth It

TypeScript caught countless bugs before runtime. The initial setup time paid off exponentially during development. Every API route, database query, and component prop was type-checked, preventing entire categories of errors.

### 2. Database Design Matters

Spending time on proper schema design upfront saved hours of migration headaches later. Key decisions:

- Using enums for status fields
- Proper indexing on frequently queried fields
- Cascade deletes for related data

### 3. Security from Day One

Implementing security features early (validation, logging, rate limiting) was easier than retrofitting them later. Security wasn't an afterthought—it was baked into every feature.

### 4. Component Reusability

Creating a flexible Logo component with variants (icon-only, full, different sizes) maintained consistent branding across 30+ pages with minimal code duplication.

```typescript
<Logo variant="full" size="lg" />
<Logo variant="icon" size="sm" />
```

## Results

EventHub is now a fully functional beta platform with:

✅ Complete event management system  
✅ Task approval workflows  
✅ Budget and vendor tracking  
✅ Secure client portal  
✅ Mobile-responsive design  
✅ Production-ready security

## What's Next?

Future enhancements include:

- **Google Calendar OAuth integration** (API functions complete)
- **Email notifications** via SendGrid
- **Cloud file storage** with AWS S3
- **Real-time chat** using WebSockets
- **Multi-language support**

## Key Takeaways

1. **Choose the right tools** - Next.js 15 + TypeScript + Prisma provided an excellent developer experience
2. **Design for flexibility** - Role-based assignments proved more scalable than user-based
3. **Security first** - Building security in from the start is easier than adding it later
4. **Performance matters** - Selective data loading significantly improved user experience

## Try It Out

**GitHub:** [github.com/BlkPandaCyOps/EventHub](https://github.com/BlkPandaCyOps/EventHub)  
**Demo:** [eventhub-planner.vercel.app](https://eventhub-planner.vercel.app)

### Tech Stack Summary

Next.js 15 • TypeScript • React • PostgreSQL • Prisma • NextAuth.js • Tailwind CSS • Framer Motion

---

Want to build something similar? Feel free to reach out or check out the code on GitHub! I'm always happy to discuss architecture decisions and lessons learned.

**Questions or feedback?** Connect with me on [LinkedIn](https://linkedin.com/in/moyesola) or check out my other projects on [GitHub](https://github.com/BlkPandaCyOps).
