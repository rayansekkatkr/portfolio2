# Story 1.7: Build Skills & Services Showcase Grid

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **visitor**,  
I want **to see all services offered with clear descriptions and visual hierarchy**,  
so that **I can quickly identify if Rayan's skills match my project needs**.

## Acceptance Criteria

1. Skills/Services section created with heading "Services" or "What I Do"
2. Grid layout displaying all service categories (minimum 8 services from brief)
3. Each service card includes: icon/visual, title, brief description (2-3 sentences)
4. Services prominently include: AI Integration (LLM, ML, Chatbots, Automation), Site Refactoring, Backend/API Development, SAAS Creation, Database Management, Payment Systems, Deployment, Security
5. AI Integration service is visually emphasized as primary differentiator
6. Grid is responsive: 3-4 columns desktop, 2 columns tablet, 1 column mobile
7. Icons are consistent in style (use icon library like Lucide React or Heroicons)
8. Cards have subtle hover effects (shadow, transform, or color change)
9. Typography hierarchy distinguishes service titles from descriptions
10. Section maintains visual consistency with overall design system

## Technical Notes

- Create reusable ServiceCard component
- Use Tailwind grid for responsive layout
- Emphasize AI Integration with special styling or positioning
- Write compelling service descriptions

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] All 8+ services displayed
- [ ] Hover effects work smoothly
