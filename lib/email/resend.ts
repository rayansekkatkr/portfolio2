import { Resend } from "resend";

// Lazy-initialize Resend client to avoid build-time errors
let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("[EMAIL] RESEND_API_KEY is not set in environment variables");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Export getter function instead of direct instance
export const resend = {
  get emails() {
    return getResendClient().emails;
  },
};

// Email configuration
export const EMAIL_CONFIG = {
  from: process.env.CONTACT_EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>",
  to: process.env.CONTACT_EMAIL_TO || "rayan@example.com",
  replyToEnabled: true,
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
} as const;

// Send email with retry logic
export async function sendEmailWithRetry(
  emailData: {
    from: string;
    to: string;
    replyTo?: string;
    subject: string;
    html: string;
    text: string;
  },
  attempt = 1
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const result = await resend.emails.send(emailData);

    if (result.error) {
      throw new Error(result.error.message);
    }

    return {
      success: true,
      messageId: result.data?.id,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    if (attempt < EMAIL_CONFIG.retryAttempts) {
      console.warn(`[EMAIL] Attempt ${attempt} failed: ${errorMessage}. Retrying...`);
      await new Promise((resolve) => setTimeout(resolve, EMAIL_CONFIG.retryDelay * attempt));
      return sendEmailWithRetry(emailData, attempt + 1);
    }

    console.error(`[EMAIL] All ${EMAIL_CONFIG.retryAttempts} attempts failed:`, errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}
