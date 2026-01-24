# Story 5.2: Implement Code Splitting and Bundle Optimization

**Epic:** Epic 5 - Performance Optimization & Launch Readiness

## User Story

As a **performance engineer**,  
I want **JavaScript bundle size minimized and code split appropriately**,  
so that **initial page load is fast and Time to Interactive is optimized**.

## Acceptance Criteria

1. Dynamic imports used for heavy components (blog markdown renderer, animations library)
2. Route-based code splitting verified for blog pages
3. Unused dependencies removed from package.json
4. Tree-shaking verified for imported libraries (import only what's needed)
5. Bundle analyzer run to identify large dependencies
6. Initial JavaScript bundle < 100KB (gzipped)
7. Third-party scripts (analytics) loaded asynchronously or deferred
8. Critical CSS inlined, remaining CSS loaded asynchronously
9. Font loading optimized with font-display: swap
10. Time to Interactive (TTI) < 3.5s on 4G connection

## Technical Notes

- Use @next/bundle-analyzer
- Implement dynamic imports
- Audit dependencies
- Optimize font loading

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Bundle < 100KB
- [ ] TTI < 3.5s
- [ ] Optimized code splitting
