# Story 4.4: Create Article Page Route and Dynamic Routing

**Epic:** Epic 4 - Blog System & Content

## User Story

As a **visitor**,  
I want **to read full articles by clicking on article cards**,  
so that **I can learn from Rayan's technical insights**.

## Acceptance Criteria

1. Dynamic route created: `/app/blog/[slug]/page.tsx` for individual articles
2. Route fetches article data from database using slug parameter
3. Article content rendered with BlogPost component
4. 404 page shown if article slug doesn't exist
5. Article metadata used for page title and meta tags (SEO)
6. Published articles only are accessible (drafts return 404)
7. Back to blog list navigation provided (breadcrumb or button)
8. Related articles section shown at bottom (based on tags, optional)
9. Page is server-side rendered for SEO benefits
10. Reading progress indicator shown during scroll (optional enhancement)

## Technical Notes

- Use Next.js App Router dynamic routes
- Implement SSR for SEO
- Add proper error handling
- Optimize for performance

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Dynamic routing works
- [ ] Articles load correctly
- [ ] SEO optimized
