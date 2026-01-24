# Story 5.1: Optimize Images and Implement Advanced Image Loading

**Epic:** Epic 5 - Performance Optimization & Launch Readiness

## User Story

As a **performance engineer**,  
I want **all images optimized with modern formats and loading strategies**,  
so that **page load times are minimized and Lighthouse performance score is maximized**.

## Acceptance Criteria

1. All images converted to modern formats (WebP with JPEG/PNG fallback)
2. Next.js Image component used for all images with proper sizing attributes
3. Responsive image srcsets generated for different viewport sizes
4. Lazy loading implemented for below-fold images
5. Priority loading set for above-fold images (Hero section)
6. Blur placeholder or LQIP (Low Quality Image Placeholder) used during loading
7. Image dimensions explicitly set to prevent layout shift (CLS)
8. Image compression optimized (quality 85-90 balance between quality and size)
9. Unused images removed from public directory
10. Largest Contentful Paint (LCP) < 2.5s with optimized hero image

## Technical Notes

- Use Next.js Image optimization
- Generate blur placeholders
- Optimize image sizes
- Test LCP metrics

## Definition of Done

- [ ] All acceptance criteria met
- [ ] All images optimized
- [ ] LCP < 2.5s
- [ ] No CLS from images
