# Story 2.5: Setup Tailwind Dark Mode with CSS Variables

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As a **developer**,  
I want **Tailwind CSS configured for dark mode with CSS custom properties**,  
so that **theme switching is performant and maintainable**.

## Acceptance Criteria

1. Tailwind CSS dark mode strategy configured (class-based: `class` strategy)
2. CSS custom properties defined for all theme colors (background, text, primary, secondary, accent, etc.)
3. Light theme colors defined with appropriate values
4. Dark theme colors defined with appropriate high-contrast values
5. Color variables applied throughout existing components using Tailwind utilities
6. All text remains readable in both themes (WCAG AA contrast ratio minimum)
7. Images and icons adapt appropriately to dark mode (if needed)
8. Tailwind config includes dark mode variants for necessary utilities
9. Theme variables accessible via Tailwind's theme() function
10. No visual glitches when switching between themes

## Technical Notes

- Configure tailwind.config.ts with darkMode: 'class'
- Define CSS variables in globals.css
- Use dark: prefix for dark mode styles
- Test contrast ratios with tools

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Tailwind dark mode configured
- [ ] Colors defined and working
- [ ] No visual glitches
