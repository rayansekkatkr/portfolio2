# Story 1.3: Setup PostgreSQL Database with Prisma ORM

**Epic:** Epic 1 - Foundation & Core Portfolio Structure

## User Story

As a **developer**,  
I want **PostgreSQL database configured with Prisma ORM and initial schema**,  
so that **the application can persist data for blog articles and future features**.

## Acceptance Criteria

1. PostgreSQL database provisioned (Vercel Postgres or Supabase free tier)
2. Prisma installed and configured with TypeScript support
3. Database connection string configured in environment variables
4. Initial Prisma schema created with at least one model (e.g., BlogPost placeholder)
5. Prisma Client generated and importable in the application
6. Database migrations run successfully (`prisma migrate dev`)
7. Connection pooling configured for optimal performance
8. Prisma Studio accessible for database inspection
9. Seed script created for development data (optional initial articles)
10. Database connection tested with a simple health check API route at `/api/health`

## Technical Notes

- Use Vercel Postgres for seamless integration
- Configure Prisma schema with BlogPost, ContactMessage models
- Setup seed data for testing
- Implement connection pooling for serverless environment

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Code reviewed and merged
- [ ] Documentation updated if needed
- [ ] Database accessible and tested
