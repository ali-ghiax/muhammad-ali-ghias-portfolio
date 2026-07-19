# Developer Portfolio - Technical Specification

## Project Overview
- **Project Name**: DevNexus Portfolio
- **Type**: Multi-page interactive developer portfolio website
- **Core Functionality**: Showcase developer expertise, projects, skills, and provide conversion-optimized contact pathways
- **Target Users**: Recruiters, potential clients, hiring managers, fellow developers

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + ShadCN UI
- Framer Motion + GSAP (animations)
- Three.js (React Three Fiber + Drei)
- React Hook Form + Zod
- Lenis (smooth scrolling)
- Lucide React (icons)

## Design Direction
- **Theme**: Dark futuristic premium with neon accents
- **Color Palette**:
  - Background: #0a0a0f (deep space black)
  - Primary: #00f0ff (cyan neon)
  - Secondary: #ff00aa (magenta neon)
  - Accent: #7b2fff (purple)
  - Text: #e4e4e7 (zinc-200)
  - Muted: #71717a (zinc-500)
- **Effects**: Glassmorphism, gradients, glow effects, particle systems
- **Typography**: JetBrains Mono (code), Outfit (headings), Inter (body)

## Pages Structure

### 1. Home Page (/)
- Hero with 3D animated particles background
- Name, role, tagline with typewriter effect
- CTA buttons (Hire Me, View Work)
- Quick stats (projects, years, technologies)
- Featured projects preview (3 cards)
- Skills highlights

### 2. About Page (/about)
- Personal story with animated timeline
- Experience section (4+ roles)
- Education section
- Core strengths with icons
- Download CV button

### 3. Projects Page (/projects)
- Filter buttons (All, Web, Mobile, AI, Full-stack)
- 6 project cards with hover effects
- Project cards link to case study pages

### 4. Case Study Pages (/projects/[slug])
- Problem statement
- Objectives
- Tech stack badges
- Architecture section (visual)
- Challenges & solutions
- Results with metrics
- Screenshots gallery
- Live demo + GitHub links

### 5. Skills Page (/skills)
- Category tabs (Frontend, Backend, DevOps, Tools)
- Animated progress bars
- Radial skill charts

### 6. Blog Page (/blog)
- Blog posts list with categories
- Reading time indicator
- Code syntax highlighting
- SEO meta tags

### 7. Contact Page (/contact)
- Form with Zod validation
- Fields: Name, Email, Subject, Message
- Submit animation
- Social links (GitHub, LinkedIn, Twitter)
- Location + availability status

## Components

### Navigation
- Sticky navbar with blur effect
- Logo (animated)
- Nav links with hover underline
- Theme toggle
- Mobile hamburger menu

### UI Components
- Button (primary, secondary, ghost variants)
- Card (glassmorphism)
- Input (with validation states)
- Badge (neon glow)
- Progress bar (animated)
- Modal
- Toast notifications

### 3D Components
- Particles background (hero)
- Floating geometric shapes
- Interactive 3D skill sphere

### Animations
- Page transitions (fade + slide)
- Scroll-triggered animations
- Hover micro-interactions
- Loading screen
- Staggered list reveals

## Data

### Projects (5)
1. **NexusCommerce** - E-commerce platform with AI recommendations
2. **SecureVault** - Zero-knowledge encryption app
3. **DataStream** - Real-time analytics dashboard
4. **AIChatbot** - LLM-powered customer support
5. **DevFlow** - CI/CD automation platform

### Testimonials (3)
- CEO, TechCorp
- CTO, StartupXYZ
- Lead Developer, Agency

### Blog Posts (4)
- Building Scalable React Apps
- AI Integration Best Practices
- Security in Modern Web Apps
- Performance Optimization Guide

## Acceptance Criteria
- [ ] All pages load without errors
- [ ] 3D elements render properly
- [ ] Smooth scroll works throughout
- [ ] Form validation functions correctly
- [ ] Page transitions animate smoothly
- [ ] Responsive on all breakpoints
- [ ] Dark theme applied consistently
- [ ] All links navigate correctly
- [ ] Images load with proper optimization
- [ ] No console errors in production build