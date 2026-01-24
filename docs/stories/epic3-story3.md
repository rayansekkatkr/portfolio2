# Story 3.3: Implement Micro-Interactions for Service Cards and Project Card

**Epic:** Epic 3 - Interactive Features & Contact System

## User Story

As a **visitor**,  
I want **interactive hover effects on service and project cards**,  
so that **the interface feels responsive and polished**.

## Acceptance Criteria

1. Service cards have hover effect: subtle scale, shadow elevation, or glow
2. Project card has hover effect on image: zoom, overlay, or brightness change
3. All hover effects use CSS transitions or Framer Motion for smoothness
4. Hover effects work on desktop only (no sticky hover states on mobile)
5. Focus states mirror hover effects for keyboard navigation accessibility
6. Card transitions are fast (150-200ms) for responsive feel
7. Professional link icons in Contact/Footer have hover effects (color change, scale)
8. CTA buttons have engaging hover states (color shift, shadow, or scale)
9. Navigation links have underline or highlight animation on hover
10. All micro-interactions are performant (no jank or frame drops)

## Technical Notes

- Use CSS transforms for performance
- Apply hover effects conditionally (not on touch devices)
- Test on various devices
- Ensure consistent timing across interactions

## Definition of Done

- [ ] All acceptance criteria met
- [ ] All hover effects implemented
- [ ] Performant and smooth
- [ ] Accessible focus states
