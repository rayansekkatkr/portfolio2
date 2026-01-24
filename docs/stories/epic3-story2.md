# Story 3.2: Add Framer Motion for Scroll-Triggered Section Animations

**Epic:** Epic 3 - Interactive Features & Contact System

## User Story

As a **visitor**,  
I want **sections to animate into view as I scroll down the page**,  
so that **the experience is engaging and reveals content progressively**.

## Acceptance Criteria

1. Framer Motion library installed and configured
2. Each major section animates on scroll reveal (fade-in, slide-up, or similar)
3. Animations trigger when section enters viewport (intersection observer pattern)
4. Animation timing is staggered appropriately (not all at once)
5. Animations respect user's reduced-motion preference (no animations if prefers-reduced-motion)
6. Animations are smooth and run at 60fps
7. Initial viewport sections (Hero) animate on page load
8. Below-fold sections animate on first scroll reveal only (not on every scroll)
9. Animation duration is appropriate (300-600ms, not distracting)
10. Dark mode theme switching does not trigger re-animation

## Technical Notes

- Install framer-motion
- Create reusable animation wrappers
- Use InView component for scroll triggers
- Test performance on various devices

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Animations are smooth and engaging
- [ ] Performance is excellent
- [ ] Respects accessibility preferences
