# Story 5.3: Optimize Core Web Vitals (LCP, FID, CLS)

**Epic:** Epic 5 - Performance Optimization & Launch Readiness

## User Story

As a **performance engineer**,  
I want **all Core Web Vitals in the green zone**,  
so that **the site meets Google's performance standards and provides excellent UX**.

## Acceptance Criteria

1. Largest Contentful Paint (LCP) < 2.5s measured on production
2. First Input Delay (FID) < 100ms measured with real user interactions
3. Cumulative Layout Shift (CLS) < 0.1 with no unexpected layout shifts
4. Layout shift prevented by: explicit image dimensions, reserved space for dynamic content, stable font loading
5. LCP optimization: optimize hero image, remove render-blocking resources, server-side render critical content
6. FID optimization: minimize JavaScript execution time, use web workers for heavy computation if needed
7. CLS optimization: avoid injecting content above existing content, use transform for animations
8. Core Web Vitals tested in Chrome DevTools and PageSpeed Insights
9. Vercel Analytics configured to monitor real-world Core Web Vitals
10. All three metrics consistently green across multiple page loads and devices

## Technical Notes

- Use Chrome DevTools Performance panel
- Test with PageSpeed Insights
- Configure Vercel Analytics
- Measure real user metrics

## Definition of Done

- [ ] All acceptance criteria met
- [ ] All Core Web Vitals green
- [ ] Monitored with Vercel Analytics
- [ ] Consistently performant
