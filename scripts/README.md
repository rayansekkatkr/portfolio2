# Translation Scripts

## Overview

This directory contains scripts for managing multilingual content using the DeepL API.

## translate.js

Automatically translates French base content to English and Korean using DeepL's professional translation API.

### Prerequisites

1. **DeepL API Key**: Get a free or pro API key from [https://www.deepl.com/pro-api](https://www.deepl.com/pro-api)
2. **Node.js**: Ensure Node.js is installed

### Setup

1. Set your DeepL API key as an environment variable:

```bash
export DEEPL_API_KEY="your-deepl-api-key-here"
```

2. Or add it to your `.env.local` file (recommended):

```bash
DEEPL_API_KEY=your-deepl-api-key-here
```

### Usage

Run the translation script:

```bash
node scripts/translate.js
```

### What It Does

1. Reads the French translations from `/public/locales/fr/common.json`
2. Translates all content to English and Korean
3. Preserves technical terms (React, TypeScript, API names, etc.)
4. Saves translated files to:
   - `/public/locales/en/common.json`
   - `/public/locales/kr/common.json`
5. Maintains the exact same JSON structure and keys

### Features

- **Technical Term Preservation**: Automatically protects tech stack names and technical terms from translation
- **Retry Logic**: Handles API failures with automatic retries and exponential backoff
- **Progress Tracking**: Shows real-time translation progress
- **Error Handling**: Clear error messages with recovery suggestions
- **Rate Limit Management**: Respects DeepL API rate limits

### Technical Terms Protected

The script automatically preserves these terms:

- Framework names: React, Next.js, TypeScript, Node.js
- Databases: PostgreSQL, MongoDB, Prisma
- Services: GitHub, LinkedIn, Stripe, PayPal, Vercel
- Concepts: API, GraphQL, RESTful, SAAS, CI/CD, DevOps, LLM
- Project names: pont-facturx.com

### When to Re-run

Re-run the translation script whenever you:

- Update French content in `/public/locales/fr/common.json`
- Add new sections or keys
- Want to refresh translations with improved DeepL models

### Manual Review

After running the script, review the generated translations for:

- Context-specific terminology
- Industry-specific jargon
- Brand voice consistency
- Cultural nuances

### Troubleshooting

**Error: DEEPL_API_KEY not set**

- Solution: Set the environment variable or add to `.env.local`

**Error: API rate limit exceeded**

- Solution: Wait a few minutes or upgrade your DeepL plan

**Error: Translation failed**

- Solution: Check your internet connection and API key validity

### Cost Estimation

DeepL Free API:

- 500,000 characters/month free
- Current French content: ~15,000 characters
- ~33 full translation runs per month on free tier

DeepL Pro API:

- Pay per character
- More features and higher rate limits
