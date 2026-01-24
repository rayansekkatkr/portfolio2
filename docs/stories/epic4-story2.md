# Story 4.2: Create Blog Article Components and Layout

**Epic:** Epic 4 - Blog System & Content

## User Story

As a **developer**,  
I want **reusable components for displaying blog articles**,  
so that **the blog section has consistent, professional presentation**.

## Acceptance Criteria

1. BlogCard component created for article preview: thumbnail, title, excerpt, date, reading time, tags
2. BlogList component displays grid of BlogCard components
3. BlogPost component displays full article: header with title/date/author, markdown content, tags
4. Markdown rendering library integrated (react-markdown or similar) with syntax highlighting
5. Article header includes: title, publish date, reading time, author info
6. Tags displayed as clickable badges
7. All components are responsive (card grid adapts to screen size)
8. Components work in both light and dark modes
9. Typography optimized for reading (line-height, font-size, max-width for content)
10. Code blocks in articles have proper syntax highlighting and copy button

## Technical Notes

- Use react-markdown with rehype plugins
- Add syntax highlighting with Prism or Highlight.js
- Create copy button for code blocks
- Optimize reading typography

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Components created and styled
- [ ] Markdown rendering works perfectly
- [ ] Fully responsive
