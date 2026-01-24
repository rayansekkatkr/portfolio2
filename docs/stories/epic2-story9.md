# Story 2.9: Test Theme and Language Persistence Across User Journeys

**Epic:** Epic 2 - Multilingual Support & Dark Mode

## User Story

As a **QA tester**,  
I want **theme and language preferences to persist correctly**,  
so that **users don't lose their preferences during navigation or across sessions**.

## Acceptance Criteria

1. Language selection persists when scrolling between sections
2. Theme selection persists when scrolling between sections
3. Language preference persists after browser refresh
4. Theme preference persists after browser refresh
5. Language preference persists after closing and reopening browser (new session)
6. Theme preference persists after closing and reopening browser (new session)
7. Switching language does not reset theme preference
8. Switching theme does not reset language preference
9. No flickering or flash of wrong theme/language on page load
10. Preferences work correctly in incognito/private browsing mode (within session)

## Technical Notes

- Test localStorage persistence
- Test cross-tab synchronization
- Verify no race conditions
- Test various browser scenarios

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Persistence works reliably
- [ ] No bugs in preference storage
- [ ] All scenarios tested
