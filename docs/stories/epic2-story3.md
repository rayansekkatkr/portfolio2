# Story 2.3: Integrate DeepL API for English and Korean Translations

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As a **developer**,  
I want **DeepL API integrated to automatically translate French content to English and Korean**,  
so that **high-quality translations are generated without manual translation work**.

## Acceptance Criteria

1. DeepL API key configured in environment variables
2. Translation script created to call DeepL API for batch translation
3. Script accepts source language (FR) and target languages (EN, KR)
4. All French translations automatically translated to English and saved to `/public/locales/en/common.json`
5. All French translations automatically translated to Korean and saved to `/public/locales/kr/common.json`
6. Translation preserves JSON structure and keys exactly
7. Special terms (React, TypeScript, etc.) are handled appropriately (not translated or transliterated correctly)
8. Script includes error handling and retry logic for API failures
9. Translation script can be re-run when French content updates
10. Manual review notes added for technical terms that may need adjustment

## Technical Notes

- Install deepl-node package
- Create translation script in scripts/ directory
- Handle rate limits gracefully
- Preserve technical terminology

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Translations generated successfully
- [ ] EN and KR files created
- [ ] Technical terms handled correctly
