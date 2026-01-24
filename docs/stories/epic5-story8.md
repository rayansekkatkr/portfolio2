# Story 5.8: Integrate Google Analytics 4 and Vercel Analytics

**Epic:** Epic 5 - Performance Optimization & Launch Readiness

## User Story

As a **site owner**,  
I want **visitor tracking and conversion metrics**,  
so that **I can measure portfolio effectiveness and optimize for lead generation**.

## Acceptance Criteria

1. Google Analytics 4 property created and configured
2. GA4 tracking code added to all pages with appropriate environment gating (not in dev)
3. Custom events tracked: contact form submission, article views, CTA clicks, language changes, theme toggles
4. Conversion goals configured: contact form submission (primary conversion)
5. GA4 tested and verified data is being received
6. Vercel Analytics enabled for real-time Core Web Vitals monitoring
7. Analytics respects RGPD requirements (only loads after cookie consent)
8. Privacy-friendly analytics configuration (anonymize IP where required)
9. Analytics dashboard monitored for first week post-launch
10. Documentation created for interpreting key metrics (traffic sources, conversions, popular content)

## Technical Notes

- Setup GA4 property
- Add tracking script to layout
- Configure custom events
- Enable Vercel Analytics

## Definition of Done

- [ ] All acceptance criteria met
- [ ] GA4 configured and tracking
- [ ] Vercel Analytics enabled
- [ ] RGPD compliant
