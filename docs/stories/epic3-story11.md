# Story 3.11: Add Page Loading Progress Indicator

**Epic:** Epic 3 - Interactive Features & Contact System

## User Story

As a **visitor**,  
I want **visual feedback during page navigation or form submission**,  
so that **I know the application is responding to my actions**.

## Acceptance Criteria

1. Top-loading progress bar implemented (similar to YouTube/GitHub style)
2. Progress bar appears during navigation between sections or page state changes
3. Progress bar shows during contact form submission
4. Progress bar uses brand accent color
5. Progress bar is thin (2-3px) and positioned at very top of viewport
6. Animation is smooth and indicates progress realistically
7. Progress bar works in both light and dark modes
8. Progress bar doesn't interfere with content (position: fixed)
9. Progress bar is accessible (appropriate ARIA role if needed)
10. Library used (nprogress or similar) or custom implementation is performant

## Technical Notes

- Use nprogress or custom solution
- Integrate with form submission
- Style to match brand
- Test performance

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Progress bar functional
- [ ] Smooth and performant
- [ ] Works in both themes
