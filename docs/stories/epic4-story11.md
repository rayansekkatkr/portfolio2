# Story 4.11: Optimize Blog Content for SEO and Accessibility

**Epic:** Epic 4 - Blog System & Content

## User Story

As an **SEO/Accessibility specialist**,  
I want **blog content optimized for search engines and screen readers**,  
so that **articles reach wider audiences and are universally accessible**.

## Acceptance Criteria

1. All articles use proper semantic HTML: h1 for title, h2-h6 for sections
2. Images in articles have descriptive alt text
3. Links have descriptive text (not "click here")
4. Code blocks have language specified for screen readers
5. Article pages include language meta tag matching content language
6. Heading hierarchy is logical (no skipped levels)
7. Contrast ratios meet WCAG AA for all text in articles
8. Tables (if used) have proper caption and th elements
9. Articles are keyboard navigable (skip to content link provided)
10. Lighthouse Accessibility score for article pages is 95+

## Technical Notes

- Audit semantic HTML structure
- Add alt text to all images
- Test with screen readers
- Run Lighthouse audits

## Definition of Done

- [ ] All acceptance criteria met
- [ ] SEO optimized
- [ ] Fully accessible
- [ ] Lighthouse 95+
