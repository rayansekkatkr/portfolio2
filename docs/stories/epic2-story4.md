# Story 2.4: Implement Language Switcher Component

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As a **visitor**,  
I want **to switch between French, English, and Korean languages**,  
so that **I can read the portfolio in my preferred language**.

## Acceptance Criteria

1. Language switcher component created with dropdown or toggle buttons
2. Switcher displays all three language options: FR, EN, KR with flags or abbreviations
3. Current language is visually indicated (highlighted, checkmark, or similar)
4. Clicking a language immediately updates all content without page reload
5. Language switcher is accessible via keyboard navigation
6. Component is responsive and works on mobile devices
7. Language switcher positioned in header/navigation area (visible on all sections)
8. Selected language is saved to localStorage for persistence
9. Language preference persists across browser sessions
10. URL updates to reflect current language (optional: `/fr`, `/en`, `/kr` routes or query parameter)

## Technical Notes

- Create reusable LanguageSwitcher component
- Use i18next's changeLanguage function
- Implement smooth transition
- Add flag icons or language codes

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Component works flawlessly
- [ ] Language switching is instant
- [ ] Preferences persist correctly
