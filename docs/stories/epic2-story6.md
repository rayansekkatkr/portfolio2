# Story 2.6: Implement Dark Mode Toggle with System Preference Detection

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As a **visitor**,  
I want **the site to respect my system theme preference and allow manual override**,  
so that **the interface is comfortable for my viewing preference**.

## Acceptance Criteria

1. System theme preference detected using `prefers-color-scheme` media query on initial load
2. Dark mode automatically activated if system preference is dark
3. Manual theme toggle component created (sun/moon icon or similar)
4. Toggle button positioned in header/navigation (near language switcher)
5. Clicking toggle switches between light and dark themes
6. Manual selection overrides system preference
7. Theme preference saved to localStorage for persistence
8. Theme persists across browser sessions
9. Theme application is immediate without flash of unstyled content (FOUC)
10. Toggle button is keyboard accessible and screen reader friendly

## Technical Notes

- Create ThemeToggle component
- Use next-themes or custom implementation
- Handle FOUC with script in layout
- Add appropriate ARIA labels

## Definition of Done

- [ ] All acceptance criteria met
- [ ] System preference detected
- [ ] Manual toggle works perfectly
- [ ] No FOUC on page load
