# Portfolio AI-Powered Full-Stack Developer

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS, deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 4+
- **Package Manager:** pnpm 8+
- **Code Quality:** ESLint, Prettier, Husky, lint-staged
- **Fonts:** Geist Sans & Geist Mono

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── lib/             # Utility functions and shared logic
├── public/          # Static assets
├── styles/          # Global styles
└── docs/            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 20 LTS or higher
- pnpm 8+ (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Code Quality

```bash
# Run linter
pnpm lint

# Format code
pnpm format

# Check formatting
pnpm format:check

# Type checking
pnpm type-check
```

## Features

- ✅ Next.js 14+ with App Router
- ✅ TypeScript strict mode enabled
- ✅ Tailwind CSS with dark mode support
- ✅ ESLint + Prettier configured
- ✅ Pre-commit hooks with Husky
- ✅ pnpm workspace
- ✅ Deployed on Vercel with CI/CD

## Deployment

This project is deployed on Vercel with automatic CI/CD.

### Deploy to Vercel

1. **Fork or clone this repository**

2. **Install Vercel CLI (optional)**

   ```bash
   pnpm install -g vercel
   ```

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure Environment Variables**

   In the Vercel dashboard, add these environment variables:
   - `POSTGRES_URL` - Vercel Postgres connection string (future)
   - `RESEND_API_KEY` - Email service API key (future)
   - `DEEPL_API_KEY` - Translation API key (future)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID (optional)
   - `NEXT_PUBLIC_APP_URL` - Your production URL

5. **Deploy**
   - Push to `main` branch for production deployment
   - Create pull requests for preview deployments

### Automatic Deployments

- **Production:** Every push to `main` branch triggers a production deployment
- **Preview:** Every pull request gets a unique preview URL
- **HTTPS:** Automatically enforced by Vercel
- **Custom Domain:** Can be configured in Vercel dashboard (Settings → Domains)

### Local Environment Setup

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

**Note:** Never commit `.env.local` to version control.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
