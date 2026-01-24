# Deployment Guide - Epic 3

## Overview

This guide covers deploying the portfolio with full interactive features and lead generation capability (Epic 3).

## Prerequisites

- ✅ GitHub repository configured and pushed
- ✅ Vercel account created
- ✅ Resend account created (for email service)
- ✅ All environment variables ready

## Environment Variables

### Required for Production

```bash
# Email Service (Resend) - REQUIRED for contact form
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL_FROM="Portfolio Contact <onboarding@resend.dev>"
CONTACT_EMAIL_TO=your_email@example.com

# Database (Optional - for future features)
POSTGRES_PRISMA_URL="your_prisma_accelerate_url"
POSTGRES_URL_NON_POOLING="your_direct_postgres_url"
POSTGRES_URL="your_postgres_url"

# Translation Service (Optional - translations already generated)
DEEPL_API_KEY=your_deepl_api_key
```

## Vercel Deployment Steps

### 1. Connect Repository

```bash
# Repository already pushed to GitHub
git push origin main
```

### 2. Import Project to Vercel

1. Go to https://vercel.com/new
2. Import Git Repository
3. Select your portfolio2 repository
4. Framework Preset: Next.js (auto-detected)
5. Build Command: `npm run build` (or use vercel.json settings)

### 3. Configure Environment Variables

In Vercel Project Settings → Environment Variables, add:

**Required:**

- `RESEND_API_KEY` - Get from https://resend.com/api-keys
- `CONTACT_EMAIL_FROM` - Your sending email (use Resend domain or verified domain)
- `CONTACT_EMAIL_TO` - Your email address to receive contact form submissions

**Optional (for future features):**

- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_URL`
- `DEEPL_API_KEY`

### 4. Deploy

- Click "Deploy"
- Wait for build to complete (~2-4 minutes)
- Verify deployment URL

## Post-Deployment Checklist

### AC 1: Email Service Configuration ✓

- [ ] RESEND_API_KEY added to Vercel environment variables
- [ ] CONTACT_EMAIL_FROM configured with valid sending address
- [ ] CONTACT_EMAIL_TO set to your email address
- [ ] Environment variables applied to Production environment

### AC 2: Contact Form API ✓

- [ ] Visit `/api/contact` endpoint (should return 405 Method Not Allowed for GET)
- [ ] API route deployed successfully
- [ ] No 500 errors in Function Logs

### AC 3: Test Email Submission ✓

- [ ] Visit production site contact form
- [ ] Fill out form with test data:
  - Name: Test Submission
  - Email: your-test@email.com
  - Message: Testing production contact form
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check email inbox for received message
- [ ] Verify email formatting (HTML template with gradient header)
- [ ] Verify reply-to header is set to sender's email

### AC 4: Animations Working ✓

- [ ] Page load animations trigger (fade-in, slide-in)
- [ ] Scroll animations work (sections animate on scroll into view)
- [ ] Hover animations smooth (buttons scale, cards lift)
- [ ] Typing animation in hero section works
- [ ] Progress bar appears during navigation
- [ ] No animation jank or lag

### AC 5: Smooth Scroll Navigation ✓

- [ ] Click "Accueil" - scrolls to hero
- [ ] Click "À Propos" - scrolls to about
- [ ] Click "Services" - scrolls to skills
- [ ] Click "Projets" - scrolls to projects
- [ ] Click "Blog" - scrolls to blog
- [ ] Click "Contact" - scrolls to contact
- [ ] Footer navigation links work
- [ ] CTA buttons in hero work
- [ ] Scroll-to-top button appears and functions

**Test in multiple browsers:**

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### AC 6: Rate Limiting Functional ✓

- [ ] Submit contact form 5 times rapidly
- [ ] 6th submission should show rate limit error
- [ ] Error message displays: "Too many requests. Please try again in X minutes"
- [ ] Wait 1 hour (or reset server) and verify rate limit resets
- [ ] Check Vercel Function Logs for rate limit responses (429 status)

### AC 7: No Console Errors ✓

Open browser DevTools Console (F12) and verify:

- [ ] No errors on page load
- [ ] No errors during animations
- [ ] No errors during form submission
- [ ] No errors during navigation
- [ ] No errors in Network tab (all assets load)
- [ ] No 404s for missing resources

### AC 8: Mobile Interactions ✓

Test on actual devices (or responsive mode):

**iOS (iPhone):**

- [ ] Touch scroll smooth
- [ ] Contact form inputs work with iOS keyboard
- [ ] Buttons have proper touch targets (no mis-taps)
- [ ] Animations don't cause layout shift
- [ ] Professional links cards work on touch
- [ ] Scroll-to-top button works on tap
- [ ] Theme toggle works
- [ ] Language switcher works

**Android:**

- [ ] Same tests as iOS
- [ ] Chrome mobile specific features work

### AC 9: Lighthouse Performance ✓

Run Lighthouse audit in Chrome DevTools:

- [ ] Open DevTools → Lighthouse tab
- [ ] Select "Mobile" or "Desktop"
- [ ] Select "Performance" category
- [ ] Click "Analyze page load"

**Target Scores:**

- Performance: > 85 (targeting 95+ in Epic 5)
- Accessibility: > 95
- Best Practices: 100
- SEO: > 95

**If Performance < 85:**

- Check for large images (should be optimized in Epic 5)
- Check for render-blocking resources
- Verify code splitting working
- Check Time to Interactive (TTI)

### AC 10: Lead Generation Ready ✓

Final verification:

- [ ] Site loads in < 3 seconds
- [ ] Contact form is easy to find
- [ ] Form is intuitive to use
- [ ] Success message is clear
- [ ] Email is received within seconds
- [ ] Email content is professional
- [ ] Can reply directly to visitor's email
- [ ] No broken links
- [ ] Professional appearance in light/dark mode
- [ ] Works in FR/EN/KR languages

## Monitoring & Maintenance

### Vercel Dashboard

Monitor these metrics:

1. **Function Logs** - Check for API errors
2. **Analytics** - Track page views
3. **Speed Insights** - Monitor performance
4. **Deployments** - Track deployment history

### Email Monitoring

1. Check Resend dashboard for:
   - Email delivery status
   - Bounce rates
   - Failed deliveries
2. Set up email alerts for failures

### Rate Limiting

- Current: In-memory (resets on function cold start)
- Production upgrade: Consider Redis for persistent rate limiting
- Monitor: Check Function Logs for 429 responses

## Troubleshooting

### Contact Form Not Working

1. Check Vercel Function Logs for errors
2. Verify RESEND_API_KEY is set correctly
3. Verify sending domain is authorized in Resend
4. Test API endpoint directly with curl/Postman

### Emails Not Arriving

1. Check spam folder
2. Verify CONTACT_EMAIL_TO is correct
3. Check Resend dashboard for delivery status
4. Verify sender domain not blacklisted

### Rate Limiting Too Strict

1. Current: 5 requests/hour per IP
2. Adjust in `app/api/contact/route.ts` if needed
3. Redeploy after changes

### Performance Issues

1. Run Lighthouse audit to identify bottlenecks
2. Check for large assets
3. Verify code splitting
4. Check for memory leaks in animations

## Next Steps

After Epic 3 deployment:

1. ✅ Monitor contact form submissions
2. ✅ Respond to leads promptly
3. ✅ Track which sections get most engagement
4. ✅ Gather feedback from visitors
5. → Proceed to Epic 4: Blog & Content System

## Rollback Plan

If critical issues found:

```bash
# Revert to previous deployment in Vercel dashboard
# Or rollback locally:
git revert HEAD
git push origin main
```

## Success Criteria

✅ **Site is live and accessible**  
✅ **Contact form sends emails successfully**  
✅ **All interactive features work**  
✅ **No console errors**  
✅ **Mobile-friendly**  
✅ **Performance acceptable (>85)**  
✅ **Ready to share with potential clients**

---

**Deployment Date:** [To be filled]  
**Deployment URL:** [To be filled]  
**Status:** Ready for deployment
