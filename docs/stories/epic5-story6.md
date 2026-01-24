# Story 5.6: Implement Comprehensive SEO Meta Tags and Structured Data

**Epic:** Epic 5 - Performance Optimization & Launch Readiness

## User Story

As an **SEO specialist**,  
I want **complete meta tags and structured data on all pages**,  
so that **search engines properly index and display the portfolio**.

## Acceptance Criteria

1. Every page has unique meta title (max 60 characters, includes target keywords)
2. Every page has meta description (max 160 characters, compelling and keyword-rich)
3. Open Graph tags on all pages: og:title, og:description, og:image, og:url, og:type
4. Twitter Card tags on all pages: twitter:card, twitter:title, twitter:description, twitter:image
5. Structured data (JSON-LD) for Person schema with: name, job title, skills, social profiles
6. Structured data for portfolio projects (CreativeWork schema)
7. Structured data for blog articles (Article schema with author, publish date)
8. Canonical URLs set correctly on all pages
9. Robots.txt configured to allow search engine crawling
10. XML sitemap generated and submitted to Google Search Console

## Technical Notes

- Use Next.js metadata API
- Generate sitemap automatically
- Add JSON-LD structured data
- Submit to Google Search Console

## Definition of Done

- [ ] All acceptance criteria met
- [ ] All meta tags complete
- [ ] Structured data added
- [ ] Sitemap submitted
