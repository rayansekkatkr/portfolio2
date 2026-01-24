# Story 1.4: Create Responsive One-Page Layout and Navigation

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **developer**,  
I want **a responsive one-page layout with sticky navigation and section structure**,  
so that **users can navigate between portfolio sections seamlessly**.

## Acceptance Criteria

1. Main layout component created with header, main content area, and footer
2. Sticky navigation bar implemented with logo/name and section links (Hero, About, Skills, Projects, Blog, Contact)
3. Navigation is responsive with mobile hamburger menu
4. Section components created as placeholders: HeroSection, AboutSection, SkillsSection, ProjectsSection, BlogSection, ContactSection
5. Each section has unique ID for anchor linking
6. Navigation links scroll to corresponding sections smoothly (native scroll-behavior or basic implementation)
7. Layout is fully responsive on mobile (320px+), tablet (768px+), and desktop (1024px+)
8. Tailwind breakpoints used consistently throughout
9. Basic color scheme applied (can be simple, will be enhanced with dark mode later)
10. Footer includes copyright and basic professional links placeholders

## Technical Notes

- Use Next.js App Router layout pattern
- Implement smooth scroll with CSS or JavaScript
- Create mobile hamburger menu with Tailwind
- Use semantic HTML for accessibility

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] Navigation works on all devices
- [ ] Responsive design verified
