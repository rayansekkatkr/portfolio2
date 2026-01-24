import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Rate limiting store (in-memory for simplicity, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(255, "Email is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
});

// Simple XSS sanitization (remove potential script tags and dangerous HTML)
function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0];
    if (ip) {
      return ip.trim();
    }
  }

  if (realIp) {
    return realIp;
  }

  return "unknown";
}

// Check rate limit (max 5 requests per hour per IP)
function checkRateLimit(ip: string): { allowed: boolean; resetIn?: number } {
  const now = Date.now();
  const rateLimit = rateLimitStore.get(ip);

  if (!rateLimit || now > rateLimit.resetTime) {
    // Create new rate limit entry (1 hour window)
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    });
    return { allowed: true };
  }

  if (rateLimit.count >= 5) {
    const resetIn = Math.ceil((rateLimit.resetTime - now) / 1000 / 60); // minutes
    return { allowed: false, resetIn };
  }

  rateLimit.count++;
  return { allowed: true };
}

// Cleanup old rate limit entries (run periodically)
setInterval(
  () => {
    const now = Date.now();
    for (const [ip, data] of rateLimitStore.entries()) {
      if (now > data.resetTime) {
        rateLimitStore.delete(ip);
      }
    }
  },
  10 * 60 * 1000
); // Every 10 minutes

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  let clientIP = "unknown";

  try {
    // Get client IP for rate limiting and logging
    clientIP = getClientIP(request);

    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.warn(`[CONTACT API] Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        {
          error: "Too many requests",
          message: `Rate limit exceeded. Please try again in ${rateLimit.resetIn} minutes.`,
        },
        { status: 429 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      console.error(`[CONTACT API] Invalid JSON from IP: ${clientIP}`);
      return NextResponse.json(
        { error: "Invalid request", message: "Request body must be valid JSON" },
        { status: 400 }
      );
    }

    // Validate input
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      console.warn(`[CONTACT API] Validation failed from IP: ${clientIP}`, errors);
      return NextResponse.json(
        {
          error: "Validation failed",
          message: "Please check your input and try again",
          details: errors,
        },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: sanitizeInput(validation.data.name),
      email: sanitizeInput(validation.data.email),
      message: sanitizeInput(validation.data.message),
    };

    // TODO: In next story, send email using email service
    // For now, just log the submission
    console.log(`[CONTACT API] New submission from IP: ${clientIP}`, {
      name: sanitizedData.name,
      email: sanitizedData.email,
      messageLength: sanitizedData.message.length,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const duration = Date.now() - startTime;
    console.log(`[CONTACT API] Submission successful in ${duration}ms`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      {
        status: 200,
        headers: {
          // CSRF protection via SameSite cookie policy
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
        },
      }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[CONTACT API] Server error after ${duration}ms from IP: ${clientIP}`, error);

    return NextResponse.json(
      {
        error: "Server error",
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed", message: "This endpoint only accepts POST requests" },
    { status: 405 }
  );
}
