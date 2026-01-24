# Story 4.8: Add Blog Tag Filtering and Search (Optional MVP Feature)

**Epic:** Epic 4 - Blog System & Content

## User Story

As a **visitor**,  
I want **to filter blog articles by tags or search by keyword**,  
so that **I can find articles relevant to my interests**.

## Acceptance Criteria

1. Tag filter UI added to blog section showing all available tags
2. Clicking a tag filters articles to show only those with selected tag
3. Multiple tags can be selected (OR logic: show articles matching any selected tag)
4. Active filters are visually indicated
5. Clear filters button resets to show all articles
6. URL updates with selected tags (supports deep linking to filtered view)
7. Filter state persists during navigation within blog section
8. Filter UI is responsive and accessible
9. Search input field added (searches title, excerpt, and tags)
10. Search is client-side for MVP (can be server-side post-MVP for large article count)

## Technical Notes

- Implement filtering logic
- Update URL with query parameters
- Make it performant for MVP scale
- Consider future server-side search

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Filtering works smoothly
- [ ] Search functional
- [ ] Responsive and accessible
