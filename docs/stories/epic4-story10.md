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

- [ ] All acceptance criteria met
- [ ] Reading time accurate
- [ ] Progress indicator functional
- [ ] Looks professional
