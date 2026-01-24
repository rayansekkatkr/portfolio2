import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clean existing data
  await prisma.contactMessage.deleteMany();
  await prisma.blogPost.deleteMany();

  console.log("📝 Creating blog posts...");

  // Article 1: AI/ML Technical Article
  await prisma.blogPost.create({
    data: {
      title: {
        fr: "Intégrer des LLMs dans des Applications Web Modernes",
        en: "Integrating LLMs into Modern Web Applications",
        kr: "현대 웹 애플리케이션에 LLM 통합하기",
      },
      slug: {
        fr: "integrer-llms-applications-web-modernes",
        en: "integrating-llms-modern-web-applications",
        kr: "llm-web-integration",
      },
      excerpt: {
        fr: "Guide complet sur l'intégration de modèles de langage dans vos applications web. Découvrez les meilleures pratiques, architectures, et exemples de code pour créer des fonctionnalités IA puissantes.",
        en: "Complete guide to integrating language models into your web applications. Discover best practices, architectures, and code examples for building powerful AI features.",
        kr: "웹 애플리케이션에 언어 모델을 통합하는 완벽한 가이드. 강력한 AI 기능을 구축하기 위한 모범 사례, 아키텍처 및 코드 예제를 살펴보세요.",
      },
      content: {
        fr: `# Intégrer des LLMs dans des Applications Web Modernes

## Introduction

Les Large Language Models (LLMs) comme GPT-4, Claude, ou Llama représentent une révolution dans le développement web. Leur capacité à comprendre et générer du texte de manière contextuelle ouvre des possibilités infinies pour créer des applications intelligentes et personnalisées. Dans cet article, je partage mon expérience pratique d'intégration de LLMs dans des applications web de production, avec des exemples concrets et des patterns architecturaux éprouvés.

## Architecture Backend : Le Pattern API Gateway

### Pourquoi séparer la logique LLM du frontend ?

L'intégration de LLMs nécessite une architecture bien pensée. J'ai appris à mes dépens qu'exposer directement les clés API au frontend est une erreur coûteuse. Voici l'architecture que je recommande :

\`\`\`typescript
// app/api/ai/chat/route.ts
import { OpenAI } from 'openai';
import { ratelimit } from '@/lib/redis';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // 1. Rate limiting par utilisateur
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
    const { success } = await ratelimit.limit(ip);
    
    if (!success) {
      return Response.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    // 2. Validation et sanitization
    const { prompt, context, userId } = await req.json();
    
    if (!prompt || prompt.length > 1000) {
      return Response.json(
        { error: 'Invalid prompt' },
        { status: 400 }
      );
    }

    // 3. Vérification du cache
    const cacheKey = \`llm:\${userId}:\${prompt}\`;
    const cached = await redis.get(cacheKey);
    
    if (cached) {
      return Response.json({ result: cached, cached: true });
    }

    // 4. Appel API avec streaming
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        { 
          role: 'system', 
          content: 'You are a helpful assistant specialized in web development.' 
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000,
      stream: true,
    });

    // 5. Stream response au client
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || '';
          controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error) {
    console.error('LLM Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
\`\`\`

## Optimisations Essentielles

### 1. Caching Intelligent avec Redis

Le caching est crucial pour réduire les coûts. Voici ma stratégie :

\`\`\`typescript
// lib/cache.ts
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function getCachedOrGenerate<T>(
  key: string,
  generator: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  // Vérifier le cache
  const cached = await redis.get(key);
  if (cached) {
    return JSON.parse(cached) as T;
  }

  // Générer si absent
  const result = await generator();
  
  // Stocker avec TTL
  await redis.setex(key, ttl, JSON.stringify(result));
  
  return result;
}

// Utilisation
const response = await getCachedOrGenerate(
  \`summary:\${articleId}\`,
  () => generateSummary(articleContent),
  7200 // 2 heures
);
\`\`\`

### 2. Streaming pour une UX Optimale

Le streaming améliore considérablement l'expérience utilisateur :

\`\`\`typescript
// hooks/useLLMStream.ts
'use client';

import { useState } from 'react';

export function useLLMStream() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async (prompt: string) => {
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const text = decoder.decode(value);
        setResponse(prev => prev + text);
      }
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, sendPrompt };
}
\`\`\`

### 3. Gestion des Erreurs et Retry Logic

\`\`\`typescript
// lib/retry.ts
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // Exponential backoff
      const delay = baseDelay * Math.pow(2, i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Max retries reached');
}
\`\`\`

## Cas d'Usage Réels

### 1. Génération de Contenu Dynamique

\`\`\`typescript
// Génération de descriptions de produits
async function generateProductDescription(product: Product) {
  const prompt = \`
    Generate a compelling product description for:
    Name: \${product.name}
    Category: \${product.category}
    Features: \${product.features.join(', ')}
    
    Write in a professional yet engaging tone, highlighting benefits.
  \`;

  return await getCachedOrGenerate(
    \`product-desc:\${product.id}\`,
    () => callLLM(prompt),
    86400 // 24 heures
  );
}
\`\`\`

### 2. Assistant Conversationnel avec Contexte

\`\`\`typescript
// Chatbot avec mémoire de conversation
export async function chat(
  userId: string,
  message: string,
  conversationHistory: Message[]
) {
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory.map(m => ({
      role: m.role,
      content: m.content
    })),
    { role: 'user', content: message }
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
    temperature: 0.8,
  });

  // Sauvegarder l'historique
  await saveConversation(userId, messages);

  return response.choices[0].message.content;
}
\`\`\`

### 3. Analyse de Sentiment pour Modération

\`\`\`typescript
// Détection automatique de contenu inapproprié
async function moderateContent(text: string): Promise<ModerationResult> {
  const prompt = \`
    Analyze this text for inappropriate content:
    "\${text}"
    
    Return JSON with: { safe: boolean, reason: string, score: number }
  \`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' }
  });

  return JSON.parse(response.choices[0].message.content);
}
\`\`\`

## Considérations de Sécurité

### Protection des Clés API

1. **Jamais côté client** : Les clés doivent rester sur le serveur
2. **Variables d'environnement** : Utilisez .env.local
3. **Rotation régulière** : Changez les clés périodiquement
4. **Monitoring** : Surveillez l'utilisation anormale

### Validation des Entrées

\`\`\`typescript
import { z } from 'zod';

const PromptSchema = z.object({
  prompt: z.string().min(1).max(1000),
  context: z.string().optional(),
  temperature: z.number().min(0).max(2).default(0.7),
});

// Utilisation
const validated = PromptSchema.parse(req.body);
\`\`\`

## Gestion des Coûts

### Stratégies pour réduire les coûts :

1. **Caching agressif** : 80% de mes requêtes sont servies depuis le cache
2. **Modèles adaptés** : GPT-3.5 pour les tâches simples, GPT-4 pour les complexes
3. **Limitation de tokens** : max_tokens approprié selon le cas d'usage
4. **Monitoring** : Alertes sur les pics d'utilisation

\`\`\`typescript
// Calcul des coûts en temps réel
function estimateCost(tokens: number, model: string): number {
  const pricing = {
    'gpt-4': 0.03 / 1000,
    'gpt-3.5-turbo': 0.001 / 1000,
  };
  
  return tokens * (pricing[model] || 0);
}
\`\`\`

## Performance et Monitoring

### Métriques à suivre :

\`\`\`typescript
// lib/analytics.ts
export async function trackLLMMetrics(data: {
  model: string;
  tokens: number;
  latency: number;
  cached: boolean;
}) {
  await analytics.track('llm_request', {
    ...data,
    cost: estimateCost(data.tokens, data.model),
    timestamp: Date.now(),
  });
}
\`\`\`

## Conclusion

L'intégration de LLMs dans des applications web de production nécessite bien plus qu'un simple appel API. Une architecture solide, des optimisations intelligentes, et une gestion rigoureuse des coûts et de la sécurité sont essentielles. 

Les patterns présentés ici sont le fruit de plusieurs projets en production et ont fait leurs preuves. Le streaming améliore l'UX de manière spectaculaire, le caching réduit les coûts de 70-80%, et une bonne gestion des erreurs garantit la fiabilité.

L'avenir du développement web est clairement orienté vers l'IA. En maîtrisant ces techniques dès maintenant, vous serez en avance sur la courbe et capable de créer des expériences utilisateur véritablement innovantes.

**Ressources complémentaires :**
- [Documentation OpenAI](https://platform.openai.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [LangChain pour orchestration complexe](https://langchain.com/)`,
        en: `# Integrating LLMs into Modern Web Applications

## Introduction

Large Language Models (LLMs) are revolutionizing web development. This guide explores how to effectively integrate these technologies into your applications.

## Recommended Architecture

### Backend API Pattern
\`\`\`typescript
// API Route for LLM integration
export async function POST(req: Request) {
  const { prompt, context } = await req.json();
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: context },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  return Response.json({ result: response.choices[0].message });
}
\`\`\`

## Best Practices

1. **Caching** - Use Redis to reduce API costs
2. **Rate Limiting** - Protect your budget with limits
3. **Streaming** - Improve UX with progressive responses
4. **Error Handling** - Handle timeouts and API errors

## Practical Use Cases

- Dynamic content generation
- Conversational assistants
- Sentiment analysis
- Automatic summaries

## Conclusion

LLM integration opens new possibilities for creating innovative and intelligent user experiences.`,
        kr: `# 현대 웹 애플리케이션에 LLM 통합하기

## 소개

대규모 언어 모델(LLM)은 웹 개발을 혁신하고 있습니다. 이 가이드는 이러한 기술을 애플리케이션에 효과적으로 통합하는 방법을 탐구합니다.

## 권장 아키텍처

### 백엔드 API 패턴
\`\`\`typescript
// LLM 통합을 위한 API 라우트
export async function POST(req: Request) {
  const { prompt, context } = await req.json();
  
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: context },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 1000
  });
  
  return Response.json({ result: response.choices[0].message });
}
\`\`\`

## 모범 사례

1. **캐싱** - Redis를 사용하여 API 비용 절감
2. **속도 제한** - 제한으로 예산 보호
3. **스트리밍** - 점진적 응답으로 UX 개선
4. **오류 처리** - 타임아웃 및 API 오류 처리

## 실용적인 사용 사례

- 동적 콘텐츠 생성
- 대화형 어시스턴트
- 감정 분석
- 자동 요약

## 결론

LLM 통합은 혁신적이고 지능적인 사용자 경험을 만들 수 있는 새로운 가능성을 열어줍니다.`,
      },
      coverImage: "/images/blog/ai-integration.jpg",
      category: "AI/ML",
      tags: ["AI", "Machine Learning", "Web Development", "LLM", "OpenAI"],
      readingTimeMinutes: 8,
      isPublished: true,
      publishedAt: new Date("2026-01-20"),
      seoMetaDescription: {
        fr: "Apprenez à intégrer des modèles de langage (LLMs) dans vos applications web avec ce guide complet incluant architecture, code et bonnes pratiques.",
        en: "Learn how to integrate language models (LLMs) into your web applications with this comprehensive guide including architecture, code and best practices.",
        kr: "아키텍처, 코드 및 모범 사례를 포함한 포괄적인 가이드로 웹 애플리케이션에 언어 모델(LLM)을 통합하는 방법을 배우세요.",
      },
      seoKeywords: ["AI", "LLM", "GPT-4", "Web Development", "OpenAI", "Integration"],
    },
  });

  // Article 2: Performance Optimization
  await prisma.blogPost.create({
    data: {
      title: {
        fr: "Atteindre un Score Lighthouse de 100 : Guide Complet",
        en: "Achieving a Lighthouse Score of 100: Complete Guide",
        kr: "Lighthouse 점수 100점 달성: 완벽한 가이드",
      },
      slug: {
        fr: "score-lighthouse-100-guide-complet",
        en: "lighthouse-score-100-complete-guide",
        kr: "lighthouse-100-guide",
      },
      excerpt: {
        fr: "Optimisez vos applications web pour atteindre des scores Lighthouse parfaits. Techniques avancées, métriques Core Web Vitals, et stratégies d'optimisation éprouvées.",
        en: "Optimize your web applications to achieve perfect Lighthouse scores. Advanced techniques, Core Web Vitals metrics, and proven optimization strategies.",
        kr: "완벽한 Lighthouse 점수를 달성하기 위해 웹 애플리케이션을 최적화하세요. 고급 기술, Core Web Vitals 지표 및 검증된 최적화 전략.",
      },
      content: {
        fr: `# Atteindre un Score Lighthouse de 100

## Introduction

Ce portfolio a été conçu pour atteindre un score Lighthouse de 100. Voici comment y parvenir.

## Métriques Clés

### Core Web Vitals
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms  
- **CLS** (Cumulative Layout Shift) < 0.1

## Techniques d'Optimisation

### 1. Optimisation des Images
\`\`\`typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  quality={90}
/>
\`\`\`

### 2. Code Splitting
\`\`\`typescript
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
  ssr: false
});
\`\`\`

### 3. Lazy Loading
Chargez les ressources uniquement quand nécessaire.

## Résultats

Ce portfolio atteint:
- Performance: 100
- Accessibility: 100  
- Best Practices: 100
- SEO: 100

## Conclusion

L'optimisation est un processus continu qui demande attention aux détails et mesures régulières.`,
        en: `# Achieving a Lighthouse Score of 100

## Introduction

This portfolio was designed to achieve a Lighthouse score of 100. Here's how to get there.

## Key Metrics

### Core Web Vitals
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

## Optimization Techniques

### 1. Image Optimization
\`\`\`typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  quality={90}
/>
\`\`\`

### 2. Code Splitting
\`\`\`typescript
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
  ssr: false
});
\`\`\`

### 3. Lazy Loading
Load resources only when needed.

## Results

This portfolio achieves:
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Conclusion

Optimization is an ongoing process requiring attention to detail and regular measurements.`,
        kr: `# Lighthouse 점수 100점 달성하기

## 소개

이 포트폴리오는 Lighthouse 점수 100점을 달성하도록 설계되었습니다. 달성 방법은 다음과 같습니다.

## 주요 지표

### Core Web Vitals
- **LCP** (최대 콘텐츠 페인트) < 2.5s
- **FID** (최초 입력 지연) < 100ms
- **CLS** (누적 레이아웃 시프트) < 0.1

## 최적화 기술

### 1. 이미지 최적화
\`\`\`typescript
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  quality={90}
/>
\`\`\`

### 2. 코드 분할
\`\`\`typescript
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
  ssr: false
});
\`\`\`

### 3. 지연 로딩
필요할 때만 리소스를 로드합니다.

## 결과

이 포트폴리오는 다음을 달성합니다:
- 성능: 100
- 접근성: 100
- 모범 사례: 100
- SEO: 100

## 결론

최적화는 세부 사항에 대한 주의와 정기적인 측정이 필요한 지속적인 프로세스입니다.`,
      },
      coverImage: "/images/blog/lighthouse.jpg",
      category: "Web Dev",
      tags: ["Performance", "Next.js", "Lighthouse", "Core Web Vitals", "Optimization"],
      readingTimeMinutes: 6,
      isPublished: true,
      publishedAt: new Date("2026-01-22"),
      seoMetaDescription: {
        fr: "Guide pratique pour optimiser vos applications web et atteindre un score Lighthouse parfait de 100. Techniques, métriques et cas d'étude.",
        en: "Practical guide to optimize your web applications and achieve a perfect Lighthouse score of 100. Techniques, metrics and case study.",
        kr: "웹 애플리케이션을 최적화하고 완벽한 Lighthouse 점수 100점을 달성하기 위한 실용 가이드. 기술, 지표 및 사례 연구.",
      },
      seoKeywords: ["Lighthouse", "Performance", "Core Web Vitals", "Web Optimization", "Next.js"],
    },
  });

  // Article 3: Modern Architecture
  await prisma.blogPost.create({
    data: {
      title: {
        fr: "Architecture Moderne : Next.js, TypeScript et PostgreSQL",
        en: "Modern Architecture: Next.js, TypeScript and PostgreSQL",
        kr: "현대적 아키텍처: Next.js, TypeScript 및 PostgreSQL",
      },
      slug: {
        fr: "architecture-moderne-nextjs-typescript-postgresql",
        en: "modern-architecture-nextjs-typescript-postgresql",
        kr: "modern-architecture-stack",
      },
      excerpt: {
        fr: "Découvrez les décisions architecturales derrière ce portfolio. Choix de stack, compromis techniques, et recommandations pour construire des applications web évolutives.",
        en: "Discover the architectural decisions behind this portfolio. Stack choices, technical trade-offs, and recommendations for building scalable web applications.",
        kr: "이 포트폴리오 뒤에 있는 아키텍처 결정을 살펴보세요. 스택 선택, 기술적 절충안 및 확장 가능한 웹 애플리케이션 구축을 위한 권장 사항.",
      },
      content: {
        fr: `# Architecture Moderne : Next.js, TypeScript et PostgreSQL

## Choix du Stack Technique

### Pourquoi Next.js 16?
- App Router pour un routing moderne
- Server Components pour la performance
- Turbopack pour des builds ultra-rapides
- Support TypeScript natif

### TypeScript : Sécurité et DX
\`\`\`typescript
// Type-safe API routes
export async function POST(req: Request) {
  const body: ContactFormData = await req.json();
  const validated = contactSchema.parse(body);
  return Response.json({ success: true });
}
\`\`\`

### PostgreSQL avec Prisma
- Type safety de bout en bout
- Migrations gérées
- Relations optimisées

## Trade-offs et Décisions

### Monorepo vs Polyrepo
Pour ce projet : structure simple, tout dans un repo.

### Client vs Server Components
Règle : Server par défaut, Client uniquement si nécessaire.

## Conclusion

Une architecture bien pensée est la fondation d'une application réussie.`,
        en: `# Modern Architecture: Next.js, TypeScript and PostgreSQL

## Technical Stack Choices

### Why Next.js 16?
- App Router for modern routing
- Server Components for performance
- Turbopack for ultra-fast builds
- Native TypeScript support

### TypeScript: Safety and DX
\`\`\`typescript
// Type-safe API routes
export async function POST(req: Request) {
  const body: ContactFormData = await req.json();
  const validated = contactSchema.parse(body);
  return Response.json({ success: true });
}
\`\`\`

### PostgreSQL with Prisma
- End-to-end type safety
- Managed migrations
- Optimized relations

## Trade-offs and Decisions

### Monorepo vs Polyrepo
For this project: simple structure, everything in one repo.

### Client vs Server Components
Rule: Server by default, Client only when necessary.

## Conclusion

Well-thought architecture is the foundation of a successful application.`,
        kr: `# 현대적 아키텍처: Next.js, TypeScript 및 PostgreSQL

## 기술 스택 선택

### Next.js 16을 선택한 이유?
- 현대적인 라우팅을 위한 App Router
- 성능을 위한 Server Components
- 초고속 빌드를 위한 Turbopack
- 기본 TypeScript 지원

### TypeScript: 안전성과 개발자 경험
\`\`\`typescript
// 타입 안전 API 라우트
export async function POST(req: Request) {
  const body: ContactFormData = await req.json();
  const validated = contactSchema.parse(body);
  return Response.json({ success: true });
}
\`\`\`

### Prisma와 함께하는 PostgreSQL
- 엔드투엔드 타입 안전성
- 관리되는 마이그레이션
- 최적화된 관계

## 절충안과 결정

### Monorepo vs Polyrepo
이 프로젝트의 경우: 단순한 구조, 하나의 저장소에 모든 것.

### Client vs Server Components
규칙: 기본적으로 Server, 필요할 때만 Client.

## 결론

잘 설계된 아키텍처는 성공적인 애플리케이션의 기반입니다.`,
      },
      coverImage: "/images/blog/architecture.jpg",
      category: "Backend",
      tags: ["Architecture", "Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      readingTimeMinutes: 7,
      isPublished: true,
      publishedAt: new Date("2026-01-24"),
      seoMetaDescription: {
        fr: "Analyse approfondie des décisions architecturales pour construire des applications web modernes avec Next.js, TypeScript et PostgreSQL.",
        en: "In-depth analysis of architectural decisions for building modern web applications with Next.js, TypeScript and PostgreSQL.",
        kr: "Next.js, TypeScript 및 PostgreSQL로 현대적인 웹 애플리케이션을 구축하기 위한 아키텍처 결정에 대한 심층 분석.",
      },
      seoKeywords: ["Architecture", "Next.js", "TypeScript", "System Design", "PostgreSQL"],
    },
  });

  console.log("✅ Created 3 blog posts");

  // Create sample contact message
  await prisma.contactMessage.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      subject: "Collaboration Opportunity",
      message:
        "Interested in discussing a potential project collaboration. Your portfolio is impressive!",
      ipAddress: "192.168.1.1",
      userAgent: "Mozilla/5.0",
    },
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
