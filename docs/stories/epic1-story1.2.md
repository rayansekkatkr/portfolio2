# Story 1.2: Setup Vercel Deployment Pipeline and Environment Configuration

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **developer**,  
I want **the project deployed to Vercel with CI/CD automation**,  
so that **changes are automatically deployed and the site is publicly accessible**.

## Acceptance Criteria

1. GitHub repository connected to Vercel project
2. Automatic deployment configured for main branch pushes
3. Preview deployments enabled for pull requests
4. Environment variables template created (.env.example)
5. Production environment variables configured in Vercel dashboard
6. Custom domain placeholder documented for future setup
7. Deployment completes successfully and site is accessible via Vercel URL
8. Build logs show no errors or warnings
9. HTTPS is enforced automatically by Vercel
10. Deployment status badge added to README.md (optional but nice)

## Technical Notes

- Connect GitHub repo to Vercel dashboard
- Configure environment variables for Vercel Postgres and APIs
- Setup preview deployments for pull request reviews
- Document deployment process in README

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] Documentation updated if needed
- [ ] Site accessible via Vercel URL
