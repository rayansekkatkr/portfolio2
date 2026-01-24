# Story 4.1: Design Blog Data Model and Prisma Schema

**Epic:** Epic 4 - Blog System & Content

## User Story

As a **developer**,  
I want **a database schema for blog articles with metadata**,  
so that **articles can be stored, queried, and managed efficiently**.

## Acceptance Criteria

1. Prisma schema updated with BlogPost model including fields: id, slug, title, excerpt, content, publishedAt, updatedAt, author, readingTime, tags, language, published
2. Slug field is unique for URL-friendly article identification
3. Content field stores markdown or rich text (TEXT type)
4. Tags field stores array of strings for categorization
5. Language field supports FR/EN/KR for multilingual articles
6. Published boolean for draft vs published state
7. ReadingTime calculated field (words/200 words per minute)
8. Author field links to user (for now, hardcoded "Rayan Sekkat")
9. Migration created and run successfully
10. Seed data script includes structure for 3-5 sample articles

## Technical Notes

- Update prisma/schema.prisma
- Create migration with descriptive name
- Design for future multi-author support
- Plan for SEO metadata fields

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Schema designed and migrated
- [ ] Seed structure ready
- [ ] Database updated
