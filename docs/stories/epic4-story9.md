# Story 4.9: Implement Blog Article Metadata and Open Graph Tags

**Epic:** Epic 4 - Blog System & Content

## User Story

As an **SEO specialist**,  
I want **proper meta tags and Open Graph data for each article**,  
so that **articles are shareable and rank well in search engines**.

## Acceptance Criteria

1. Each article page includes unique meta title (article title + site name)
2. Each article has meta description (article excerpt, max 160 characters)
3. Open Graph tags include: og:title, og:description, og:image, og:type (article), og:url
4. Twitter Card tags included for Twitter sharing
5. Article structured data (JSON-LD) added for search engines (Article schema)
6. Canonical URL set correctly for each article
7. Article publish date and author in structured data
8. Article thumbnail image optimized for social sharing (1200x630px recommended)
9. Meta tags update dynamically based on article content
10. Test sharing on LinkedIn, Twitter, Facebook - previews display correctly

## Technical Notes

- Use Next.js metadata API
- Create proper Open Graph images
- Add JSON-LD structured data
- Test with social media validators

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Meta tags complete
- [ ] Social sharing works perfectly
- [ ] SEO optimized
