# Story 2.10: Accessibility Testing for Internationalization and Dark Mode

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As an **accessibility specialist**,  
I want **theme and language features to be fully accessible**,  
so that **all users including those with disabilities can use these features**.

## Acceptance Criteria

1. Language switcher is keyboard navigable (Tab, Enter, Arrow keys)
2. Theme toggle is keyboard navigable (Tab, Enter/Space)
3. Both controls have proper ARIA labels and roles
4. Screen readers announce current language when changed
5. Screen readers announce current theme when changed
6. All color contrasts meet WCAG AA in both light and dark modes (4.5:1 for text)
7. Focus indicators are visible in both themes
8. Language switcher and theme toggle have descriptive tooltips or labels
9. HTML lang attribute updates when language changes
10. No accessibility regressions from Epic 1 - Lighthouse Accessibility score maintained or improved

## Technical Notes

- Test with screen readers (NVDA, VoiceOver)
- Verify keyboard navigation
- Check contrast ratios with tools
- Test focus management

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Fully accessible
- [ ] Lighthouse Accessibility 100
- [ ] Screen reader tested
