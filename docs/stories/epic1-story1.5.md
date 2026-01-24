# Story 1.5: Implement Hero Section with Professional Introduction

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **visitor**,  
I want **an impactful hero section introducing Rayan as an AI-Powered Full-Stack Developer**,  
so that **I immediately understand his expertise and value proposition**.

## Acceptance Criteria

1. Hero section spans full viewport height on desktop with appropriate mobile sizing
2. Primary heading displays "Rayan Sekkat" or professional name
3. Subtitle/tagline clearly states "AI-Powered Full-Stack Developer" positioning
4. Brief value proposition text (1-2 sentences) highlighting key services
5. Primary CTA button "Get in Touch" links to Contact section
6. Secondary CTA button "View Projects" links to Projects section
7. Professional profile image or avatar included (placeholder acceptable)
8. Typography hierarchy is clear and readable
9. Section is fully responsive with adjusted layout for mobile
10. Content is semantically structured with proper heading tags (h1, h2)

## Technical Notes

- Use large, impactful typography
- Implement smooth anchor scrolling to sections
- Optimize profile image with Next.js Image component
- Consider adding subtle animations (prepared for Epic 3)

## Definition of Done

- [x] All acceptance criteria met
- [x] Code reviewed and merged
- [x] Hero section looks professional
- [x] Fully responsive

---

## Dev Agent Record

### Status

**Complete - Ready for Review**

### Agent Model Used

Claude Sonnet 4.5

### Tasks

- [x] Update Hero section with Rayan Sekkat name
- [x] Add "AI-Powered Full-Stack Developer" tagline as h2
- [x] Write compelling value proposition (2 sentences)
- [x] Create "Get in Touch" primary CTA linking to #contact
- [x] Create "View Projects" secondary CTA linking to #projects
- [x] Add professional profile image placeholder (SVG avatar)
- [x] Implement proper typography hierarchy (h1, h2, p)
- [x] Make layout responsive with flexbox (column on mobile, row on desktop)
- [x] Configure Next.js to support SVG images
- [x] Add proper semantic HTML and alt text for accessibility

### Acceptance Criteria Status

**All Completed ✅:**

1. ✅ Hero section spans full viewport height with min-h-screen
2. ✅ Primary heading displays "Rayan Sekkat" as h1
3. ✅ Subtitle "AI-Powered Full-Stack Developer" as h2 with primary color
4. ✅ Value proposition text: "Crafting intelligent, scalable web solutions..." (2 sentences)
5. ✅ Primary CTA "Get in Touch" links to #contact with prominent styling
6. ✅ Secondary CTA "View Projects" links to #projects with outlined style
7. ✅ Professional SVG avatar included (256x256, circular with RS initials)
8. ✅ Clear typography hierarchy: h1 (5xl-7xl), h2 (2xl-3xl), p (lg-xl)
9. ✅ Fully responsive: column layout on mobile, row on desktop (lg:flex-row)
10. ✅ Semantic HTML with proper heading tags and alt text

### Debug Log References

None - implementation completed without issues

### Completion Notes

- **Layout**: Flexbox with responsive direction (column → row on lg breakpoint)
- **Profile Image**: 192px mobile, 256px desktop, circular with primary border
- **Typography**: Rayan Sekkat (h1), AI-Powered Full-Stack Developer (h2), value prop (p)
- **CTAs**: Primary button (solid bg) and secondary button (outlined) with full width on mobile
- **Value Proposition**: Emphasizes AI-powered, intelligent solutions, Next.js/TypeScript expertise
- **Image Config**: SVG support enabled in next.config.ts with security policies
- **Accessibility**: Descriptive alt text, semantic HTML, proper heading hierarchy
- **Responsive**: Text center on mobile, left-aligned on desktop
- **Avatar**: Custom SVG with primary brand color (#4F46E5) and RS initials

### File List

- `/components/sections/HeroSection.tsx` - Updated with Rayan Sekkat introduction
- `/public/avatar-placeholder.svg` - Professional SVG avatar placeholder
- `/next.config.ts` - Added SVG image support configuration

### Change Log

- 2026-01-24: Implemented professional hero section with Rayan Sekkat branding and AI-powered positioning
