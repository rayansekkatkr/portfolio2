# Story 3.4: Add Typing Animation or Dynamic Text Effect to Hero Section

**Epic:** Epic 3 - Interactive Features & Contact System

## User Story

As a **visitor**,  
I want **an eye-catching text animation in the hero section**,  
so that **the portfolio immediately captures my attention**.

## Acceptance Criteria

1. Hero section includes animated text element (typing effect, text reveal, or word rotation)
2. Animation could be: typing "AI-Powered Full-Stack Developer" letter by letter, or rotating through key skills
3. Animation runs on page load automatically
4. Animation timing is natural and not too slow or fast
5. Animation completes and leaves final text visible (doesn't loop indefinitely if typing)
6. Animation respects reduced-motion preference (shows static text if preferred)
7. Animation works in all three languages (FR/EN/KR)
8. Text remains accessible to screen readers (full text available in DOM)
9. Animation is performant and doesn't delay page interaction
10. Animation styling matches overall theme and works in dark mode

## Technical Notes

- Use typing library or Framer Motion
- Test with all language translations
- Ensure accessibility compliance
- Make animation configurable

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Animation is engaging
- [ ] Works in all languages
- [ ] Accessible and performant
