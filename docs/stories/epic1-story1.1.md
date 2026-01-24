# Story 1.1: Initialize Next.js Project with TypeScript and Core Dependencies

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **developer**,  
I want **a Next.js 14+ project with TypeScript, Tailwind CSS, ESLint, Prettier, and pnpm configured**,  
so that **the project foundation is established with proper tooling and structure**.

## Acceptance Criteria

1. Next.js 14+ project created using App Router with TypeScript strict mode enabled
2. Tailwind CSS configured with custom theme support (prepared for dark mode colors)
3. pnpm workspace properly configured with lock file
4. ESLint + Prettier configured with pre-commit hooks via Husky and lint-staged
5. Project structure established: `/app`, `/components`, `/lib`, `/public`, `/styles`
6. README.md includes project setup instructions and tech stack
7. Git repository initialized with proper .gitignore for Next.js
8. Basic layout.tsx and page.tsx render "Hello World" successfully
9. Development server runs without errors on `pnpm dev`
10. TypeScript compilation completes without errors

## Technical Notes

- Use `pnpm create next-app` with TypeScript and App Router
- Configure Tailwind with custom colors in `tailwind.config.ts`
- Setup Husky and lint-staged for pre-commit quality checks
- Follow Next.js 14+ best practices with App Router

## Definition of Done

- [x] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] Documentation updated if needed
- [ ] Tested across target devices/browsers

---

## Dev Agent Record

### Status

**Ready for Review**

### Agent Model Used

Claude Sonnet 4.5

### Tasks

- [x] Initialize Next.js 16.1.4 project with TypeScript and App Router
- [x] Configure Tailwind CSS 4.1.18 with custom theme and dark mode support
- [x] Setup pnpm workspace with lock file
- [x] Configure ESLint and Prettier with Tailwind plugin
- [x] Setup Husky 9.1.7 and lint-staged 16.2.7 for pre-commit hooks
- [x] Create project structure (/app, /components, /lib, /public, /styles)
- [x] Update README.md with setup instructions and tech stack
- [x] Create "Hello World" page with proper layout
- [x] Verify TypeScript compilation with strict mode
- [x] Verify development server runs without errors

### Debug Log References

None - implementation completed without issues

### Completion Notes

- Next.js 16.1.4 installed (exceeds 14+ requirement)
- React 19.2.3 installed
- TypeScript 5.9.3 with strict mode enabled (strictNullChecks, noUncheckedIndexedAccess)
- Tailwind CSS 4.1.18 configured with custom primary color palette for dark mode
- ESLint 9.39.2 with Next.js config
- Prettier 3.8.1 with Tailwind plugin for class sorting
- Pre-commit hooks configured to run linting and formatting
- All directories created and verified
- Development server and build tested successfully

### File List

- `/package.json` - Updated with scripts and lint-staged config
- `/tsconfig.json` - Strict mode TypeScript configuration
- `/tailwind.config.ts` - Custom theme with dark mode colors
- `/.prettierrc.json` - Prettier configuration
- `/.husky/pre-commit` - Pre-commit hook
- `/app/layout.tsx` - Root layout with metadata
- `/app/page.tsx` - Hello World home page
- `/app/globals.css` - Global styles with Tailwind
- `/README.md` - Project documentation
- `/components/` - Components directory (empty, ready for use)
- `/lib/` - Lib directory (empty, ready for use)
- `/styles/` - Styles directory (empty, ready for use)

### Change Log

- 2026-01-24: Project initialized with Next.js 16.1.4, TypeScript, Tailwind CSS, ESLint, Prettier, Husky, and lint-staged
