# Story 4.10: Add Reading Time Calculation and Progress Indicator

**Epic:** Epic 4 - Blog System & Content

## User Story

As a **visitor**,  
I want **to know how long an article will take to read**,  
so that **I can decide if I have time to read it now**.

## Acceptance Criteria

1. Reading time calculated based on article word count (average 200 words/minute)
2. Reading time displayed on article cards in blog list (e.g., "5 min read")
3. Reading time displayed on full article page header
4. Calculation excludes code blocks from word count (optional refinement)
5. Reading progress indicator added to article pages (horizontal bar at top)
6. Progress indicator updates as user scrolls through article
7. Progress indicator uses brand accent color
8. Progress indicator works in both light and dark modes
9. Progress calculation is accurate (0% at start, 100% at end)
10. Progress indicator is subtle and doesn't distract from reading

## Technical Notes

- Implement word count algorithm
- Create progress bar component
- Use scroll position to calculate progress
- Make it performant

## Definition of Done

- [x] All acceptance criteria met
- [x] Reading time accurate
- [x] Progress indicator functional
- [x] Looks professional

---

## Dev Agent Record

### Status

**Completed** - Ready for Review

### Agent Model Used

Claude Sonnet 4.5

### Completion Notes

- Reading time already implemented in database (readingTimeMinutes field)
- Reading time displayed on BlogCard: "X min" format with Clock icon
- Reading time displayed on BlogPost: "X min de lecture" format with Clock icon
- Created ReadingProgress client component with scroll tracking
- Progress bar positioned fixed at top of page (z-50)
- Progress calculation: scrollTop / documentHeight \* 100
- Smooth transitions with duration-150 ease-out
- Progress bar uses primary-600 color (light mode) and primary-500 (dark mode)
- Background bar in gray-200 (light) / gray-800 (dark)
- Height of 1px for subtle, non-distracting appearance
- Added ARIA attributes for accessibility (progressbar role, valuenow, valuemin, valuemax)
- Scroll and resize listeners use passive: true for performance
- Progress updates in real-time as user scrolls
- Cleanup removes event listeners on unmount
- Integrated into article page with ReadingProgress component
- Build passes with 0 errors

### File List

- components/blog/ReadingProgress.tsx - New scroll progress indicator
- app/blog/[slug]/page.tsx - Added ReadingProgress component
- components/blog/BlogCard.tsx - Already displays reading time
- components/blog/BlogPost.tsx - Already displays reading time

### Change Log

1. Created ReadingProgress client component
2. Implemented scroll position calculation with useEffect
3. Added window scroll and resize event listeners with passive option
4. Progress bar renders as fixed positioned div at top
5. Used primary brand colors for progress bar
6. Added smooth transition animations
7. Implemented ARIA accessibility attributes
8. Added proper cleanup for event listeners
9. Integrated ReadingProgress into article pages
10. Verified reading time already displays on cards and full articles
11. Build passes successfully
