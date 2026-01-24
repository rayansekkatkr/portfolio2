# Story 4.3: Implement Blog Section on Homepage

**Epic:** Epic 4 - Blog System & Content

## User Story

As a **visitor**,  
I want **to see featured blog articles on the homepage**,  
so that **I can discover Rayan's technical writing and expertise**.

## Acceptance Criteria

1. Blog section added to homepage between Projects and Contact sections
2. Section heading displays "Latest Articles" or "Technical Blog"
3. Section shows 3 most recent published articles in card grid
4. Each article card includes: thumbnail image, title, excerpt (2-3 lines), publish date, reading time
5. Cards have hover effects consistent with site micro-interactions
6. "View All Articles" CTA button links to dedicated blog page (if implemented) or is placeholder
7. Section is fully responsive with card grid adapting (3 columns desktop, 2 tablet, 1 mobile)
8. Section works in all three languages with translated metadata
9. Section matches overall site aesthetic and theme (light/dark mode)
10. If no articles published, section shows "Coming Soon" message

## Technical Notes

- Fetch latest 3 articles from database
- Handle empty state gracefully
- Ensure responsive grid layout
- Maintain visual consistency

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Blog section looks professional
- [ ] Works in all languages and themes
- [ ] Fully functional
