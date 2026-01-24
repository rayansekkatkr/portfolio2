# Story 1.10: Add Footer with Professional Information

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **visitor**,  
I want **a footer with copyright, professional links, and site information**,  
so that **I can access additional contact methods and legal information**.

## Acceptance Criteria

1. Footer component spans full width at bottom of page
2. Copyright notice includes current year and Rayan's name
3. Professional links repeated (LinkedIn, GitHub, Upwork, Email) with icons
4. Links to Privacy Policy and Terms (placeholder pages for now, needed for RGPD)
5. Optional: "Built with Next.js, TypeScript, Tailwind CSS" tech attribution
6. Footer design complements overall aesthetic
7. Footer is responsive with layout adjusting for mobile (stack vs row)
8. All links use proper accessibility attributes (aria-labels where needed)
9. Footer visually separates from Contact section with border or background color
10. Footer remains at bottom of page regardless of content height

## Technical Notes

- Create reusable Footer component
- Use dynamic year for copyright (new Date().getFullYear())
- Prepare placeholder pages for Privacy Policy and Terms
- Ensure footer sticks to bottom with CSS

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] Footer looks professional
- [ ] All links working properly
