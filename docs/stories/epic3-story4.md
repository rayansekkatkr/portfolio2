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

- [x] All acceptance criteria met
- [x] Animation is engaging
- [x] Works in all languages
- [x] Accessible and performant

---

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4.5

### Completion Notes

- **Typing Animation**: Implemented character-by-character typing effect for hero subtitle using React useEffect and setInterval
- **Speed**: 50ms per character for natural typing speed (neither too fast nor too slow)
- **Cursor**: Animated blinking cursor using Framer Motion (opacity: [1, 0], 0.8s repeat) that disappears when typing completes
- **i18n Integration**: Uses `useLanguageContext()` to fetch translated title from hero.title key, works with FR/EN/KR
- **Accessibility**: Full title in sr-only span for screen readers, animated text marked aria-hidden
- **Reduced Motion**: Checks prefers-reduced-motion media query, shows static text immediately if preferred
- **Performance**: Lightweight implementation with cleanup on unmount, no external libraries needed beyond Framer Motion
- **Dark Mode**: Cursor color adapts with dark:bg-primary-400 class
- **Completion**: Animation runs once on mount, completes after all characters typed, leaves final text visible

### Debug Log References

None - implementation successful on first attempt

### File List

- components/sections/HeroSection.tsx - Added typing animation logic and i18n support

### Change Log

1. Added useLanguageContext hook import for translations
2. Added displayedTitle and isTypingComplete state
3. Implemented typing effect with 50ms interval per character
4. Added blinking cursor with Framer Motion animate
5. Added sr-only span with full title for screen readers
6. Added aria-hidden to animated text
7. Integrated t() translation function for hero.name, hero.title, hero.description, hero.cta buttons
8. Added cleanup function to clear typing interval on unmount
