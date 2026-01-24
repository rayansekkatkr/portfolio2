# Story 3.10: Implement Scroll-to-Top Button

**Epic:** Epic 3 - Interactive Features & Contact System

## User Story

As a **visitor**,  
I want **a button to quickly return to the top of the page**,  
so that **I can easily navigate back after scrolling through content**.

## Acceptance Criteria

1. Scroll-to-top button appears after scrolling past first section (Hero)
2. Button is positioned fixed in bottom-right corner (or appropriate position)
3. Button uses clear icon (up arrow or chevron)
4. Clicking button smoothly scrolls to top of page
5. Button has fade-in/out animation when appearing/disappearing
6. Button is accessible via keyboard (Tab to focus, Enter to activate)
7. Button has proper aria-label ("Scroll to top" or similar)
8. Button styling matches site aesthetic and works in both themes
9. Button has hover effect (scale, color change)
10. Button works on mobile with appropriate touch target size (min 44x44px)

## Technical Notes

- Use scroll position to show/hide button
- Implement smooth scroll to top
- Add Framer Motion animations
- Ensure accessibility

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Button works smoothly
- [ ] Accessible and responsive
- [ ] Looks professional
