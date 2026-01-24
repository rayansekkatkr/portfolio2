# Story 3.6: Integrate Email Service for Contact Form Delivery

**Epic:** Epic 3 - Interactive Features & Contact System

## User Story

As a **site owner**,  
I want **contact form submissions delivered to my email**,  
so that **I can respond to potential client inquiries**.

## Acceptance Criteria

1. Email service integrated (EmailJS, Resend, or SendGrid) with API key in environment variables
2. API route sends email on successful form validation
3. Email includes: sender name, sender email (with reply-to), message content, submission timestamp
4. Email subject line clearly indicates "Portfolio Contact Form Submission"
5. Email template is professional and readable (HTML format preferred)
6. Email delivery tested successfully in development and staging
7. Failed email delivery returns appropriate error to user (500 status)
8. Email service has retry logic for transient failures
9. Email sent to Rayan's configured email address (environment variable)
10. BCC or confirmation email sent to submitter (optional but nice)

## Technical Notes

- Use Resend API (Vercel-friendly)
- Create email template with React Email
- Configure retry logic
- Test with real email addresses

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Email delivery working
- [ ] Template looks professional
- [ ] Error handling complete
