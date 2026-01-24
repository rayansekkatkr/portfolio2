interface ContactEmailData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export function generateContactEmailHTML(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                📬 New Contact Form Submission
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                You have received a new message from your portfolio contact form:
              </p>
              
              <!-- Sender Info -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f9fafb; border-radius: 6px; padding: 20px;">
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">From:</strong>
                  </td>
                  <td style="padding: 8px 0; text-align: right;">
                    <span style="color: #374151; font-size: 16px;">${escapeHtml(data.name)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                  </td>
                  <td style="padding: 8px 0; text-align: right;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color: #0ea5e9; text-decoration: none; font-size: 16px;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Date:</strong>
                  </td>
                  <td style="padding: 8px 0; text-align: right;">
                    <span style="color: #374151; font-size: 16px;">${escapeHtml(data.timestamp)}</span>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <strong style="color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 12px;">Message:</strong>
                <div style="background-color: #f9fafb; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 6px;">
                  <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
                </div>
              </div>
              
              <!-- Action Button -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${escapeHtml(data.email)}" style="display: inline-block; background-color: #0ea5e9; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; transition: background-color 0.2s;">
                  Reply to ${escapeHtml(data.name)}
                </a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                This email was sent from your portfolio contact form at
                <a href="https://rayansekkat.com" style="color: #0ea5e9; text-decoration: none;">rayansekkat.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateContactEmailText(data: ContactEmailData): string {
  return `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}
Date: ${data.timestamp}

Message:
${data.message}

---
Reply to this email to respond to ${data.name} at ${data.email}
  `.trim();
}

// Helper function to escape HTML entities
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
}
