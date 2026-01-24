# Story 2.1: Setup i18next and Multilingual Infrastructure

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As a **developer**,  
I want **react-i18next configured with language detection and switching capability**,  
so that **the application can support multiple languages dynamically**.

## Acceptance Criteria

1. react-i18next and next-i18next installed and configured
2. Language configuration supports FR (French), EN (English), KR (Korean)
3. Default language set to French (FR) as primary
4. Language detection middleware configured to check: URL parameter, localStorage, browser preference
5. Translation files structure created: `/public/locales/{fr,en,kr}/common.json`
6. i18next configuration includes namespaces for different sections (common, navigation, services, etc.)
7. HOC or hook pattern established for easy translation usage in components (`useTranslation`)
8. Language switching function created and exportable
9. Current language state managed properly (Context API or similar)
10. Console shows no i18next errors or missing translation warnings

## Technical Notes

- Use next-i18next for Next.js integration
- Configure i18n in next.config.js
- Setup language detection priority order
- Create translation file structure

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] i18next configured correctly
- [ ] No console errors
