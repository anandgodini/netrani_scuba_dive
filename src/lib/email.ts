import { Resend } from "resend";
import nodemailer from "nodemailer";

export interface BookingNotificationData {
  fullName: string;
  phone: string;
  package: string;
  email: string;
  session: string;
  bookingDate: string;
  submittedAt: string;
}

export interface EmailDispatchResult {
  success: boolean;
  delivered: boolean;
  provider: "resend" | "smtp" | "test" | "console";
  recipient: string;
  messageId?: string;
  previewUrl?: string;
  needsApiKey?: boolean;
  needsSmtpConfig?: boolean;
  customerConfirmationSent?: boolean;
  error?: string;
  note?: string;
}

/**
 * Returns the configured website owner / booking recipient email.
 * Configured via environment variables with fallback to the verified official business email.
 */
export function getOwnerEmail(): string {
  return (
    process.env.RESEND_TO ||
    process.env.BOOKING_NOTIFICATION_EMAIL ||
    process.env.OWNER_EMAIL ||
    "murudeshwar.scuba.dive@gmail.com"
  );
}

/**
 * Returns the configured sender email address.
 * Resend Sandbox default is onboarding@resend.dev.
 * When domain is verified, use e.g. bookings@murudeshwarscubadive.in
 */
export function getSenderEmail(): string {
  return (
    process.env.RESEND_FROM ||
    "Netrani Scuba Dive <onboarding@resend.dev>"
  );
}

/**
 * Returns an instance of the Resend client if RESEND_API_KEY is configured.
 */
export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === "" || apiKey === "re_your_api_key_here") {
    return null;
  }
  return new Resend(apiKey);
}

/**
 * Generates high-contrast, brand-aligned HTML email template for booking notifications to the owner.
 */
export function generateBookingEmailHtml(data: BookingNotificationData): string {
  const cleanPhone = data.phone.replace(/\D/g, "");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Netrani Scuba Booking Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #e5f4ff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #000000;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #e5f4ff; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border: 2px solid #000000; border-radius: 24px; overflow: hidden; box-shadow: 6px 6px 0px #000000;" cellspacing="0" cellpadding="0" border="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #bfe5ff; border-bottom: 2px solid #000000; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="display: inline-block; background-color: #55db9c; color: #000000; border: 1px solid #000000; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;">
                      ● NEW BOOKING ENQUIRY (VIA RESEND)
                    </div>
                    <h1 style="margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.02em; color: #000000; text-transform: uppercase; line-height: 1.1;">
                      Netrani Scuba Dive
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #0e3b66; font-weight: 600;">
                      New slot reservation submitted via murudeshwarscubadive.in
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Highlights -->
          <tr>
            <td style="padding: 28px 32px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.5; color: #111111;">
                Hello <strong>Netrani Scuba Team</strong>,<br>
                A customer has submitted a new scuba diving booking enquiry form. Below are the complete entered details:
              </p>

              <!-- Booking Details Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid #000000; border-radius: 16px; overflow: hidden; background-color: #ffffff; margin-bottom: 24px;">
                <tr style="background-color: #ffd731; border-bottom: 1px solid #000000;">
                  <td colspan="2" style="padding: 12px 18px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: #000000; border-bottom: 1px solid #000000;">
                    Form Input Values
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; width: 38%; border-bottom: 1px solid #e0e0e0; background-color: #fafafa;">
                    Customer Full Name
                  </td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 800; color: #000000; border-bottom: 1px solid #e0e0e0;">
                    ${data.fullName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; border-bottom: 1px solid #e0e0e0; background-color: #fafafa;">
                    Phone Number
                  </td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 800; color: #000000; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${data.phone}" style="color: #000000; text-decoration: underline;">
                      ${data.phone}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; border-bottom: 1px solid #e0e0e0; background-color: #fafafa;">
                    Customer Email
                  </td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 700; color: #000000; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${data.email}" style="color: #0056b3; text-decoration: underline;">
                      ${data.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; border-bottom: 1px solid #e0e0e0; background-color: #fafafa;">
                    Selected Package
                  </td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 800; color: #000000; border-bottom: 1px solid #e0e0e0;">
                    <span style="display: inline-block; background-color: #e9ccff; border: 1px solid #000000; padding: 2px 8px; border-radius: 6px; font-weight: 800;">
                      ${data.package}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; border-bottom: 1px solid #e0e0e0; background-color: #fafafa;">
                    Selected Session
                  </td>
                  <td style="padding: 12px 18px; font-size: 14px; font-weight: 800; color: #000000; border-bottom: 1px solid #e0e0e0;">
                    ${data.session} Session
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; border-bottom: 1px solid #e0e0e0; background-color: #fafafa;">
                    Date of Booking
                  </td>
                  <td style="padding: 12px 18px; font-size: 15px; font-weight: 900; color: #fb4903; border-bottom: 1px solid #e0e0e0;">
                    📅 ${data.bookingDate}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 700; color: #555555; background-color: #fafafa;">
                    Submitted At (IST)
                  </td>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #333333;">
                    ${data.submittedAt}
                  </td>
                </tr>
              </table>

              <!-- Quick Action Buttons for Owner -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 24px;">
                <tr>
                  <td align="center">
                    <a href="tel:${data.phone}" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 800; padding: 12px 24px; border-radius: 999px; margin-right: 8px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.03em;">
                      📞 Call Customer
                    </a>
                    <a href="https://wa.me/${cleanPhone}?text=Hi%20${encodeURIComponent(data.fullName)}%2C%20thank%20you%20for%20enquiring%20with%20Netrani%20Scuba%20Dive%20for%20${encodeURIComponent(data.bookingDate)}." style="display: inline-block; background-color: #55db9c; color: #000000; text-decoration: none; font-size: 13px; font-weight: 800; padding: 12px 24px; border-radius: 999px; border: 1px solid #000000; margin-right: 8px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.03em;">
                      💬 WhatsApp Customer
                    </a>
                    <a href="mailto:${data.email}?subject=Netrani%20Scuba%20Dive%20Booking%20Confirmation" style="display: inline-block; background-color: #ffffff; color: #000000; text-decoration: none; font-size: 13px; font-weight: 800; padding: 12px 24px; border-radius: 999px; border: 1px solid #000000; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.03em;">
                      ✉️ Reply Email
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color: #fafafa; border-top: 1px solid #000000; padding: 18px 32px; text-align: center; font-size: 11px; color: #666666; line-height: 1.5;">
              <strong>Netrani Scuba Dive</strong> • Murudeshwar Beach, Murudeshwar, Karnataka 581350<br>
              Helpline: +91 74063 29777 • Official Portal: <a href="https://www.murudeshwarscubadive.in" style="color: #000000; text-decoration: underline;">murudeshwarscubadive.in</a>
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

/**
 * Generates plain text fallback for email clients.
 */
export function generateBookingEmailText(data: BookingNotificationData): string {
  return `
=============================================
NEW NETRANI SCUBA DIVE BOOKING ENQUIRY (VIA RESEND)
=============================================

A new customer booking enquiry was submitted via murudeshwarscubadive.in:

Customer Name:      ${data.fullName}
Phone Number:       ${data.phone}
Customer Email:     ${data.email}
Selected Package:   ${data.package}
Selected Session:   ${data.session}
Booking Date:       ${data.bookingDate}
Submitted At:       ${data.submittedAt}

Quick Actions:
- Call: tel:${data.phone}
- Email: mailto:${data.email}

Netrani Scuba Dive Booking Desk
Helpline: +91 74063 29777
Website: https://www.murudeshwarscubadive.in
=============================================
  `.trim();
}

/**
 * Generates customer confirmation HTML email sent to the user who filled the form.
 */
export function generateCustomerConfirmationHtml(data: BookingNotificationData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Scuba Booking Enquiry Received</title>
</head>
<body style="margin: 0; padding: 0; background-color: #e5f4ff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #000000;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #e5f4ff; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border: 2px solid #000000; border-radius: 24px; overflow: hidden; box-shadow: 6px 6px 0px #000000;" cellspacing="0" cellpadding="0" border="0">
          
          <tr>
            <td style="background-color: #ffd731; border-bottom: 2px solid #000000; padding: 28px 32px; text-align: left;">
              <div style="display: inline-block; background-color: #000000; color: #ffffff; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;">
                ✓ ENQUIRY CONFIRMATION
              </div>
              <h1 style="margin: 0; font-size: 26px; font-weight: 900; color: #000000; text-transform: uppercase;">
                Thank You, ${data.fullName}!
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #111111; font-weight: 600;">
                We have received your advance scuba diving booking request for Netrani Island.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 28px 32px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.5; color: #111111;">
                Our certified dive coordinator is reviewing your preferred slot and will call/WhatsApp you shortly to confirm boat seating and give you the Murudeshwar beach reporting directions.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid #000000; border-radius: 16px; overflow: hidden; background-color: #ffffff; margin-bottom: 24px;">
                <tr style="background-color: #bfe5ff; border-bottom: 1px solid #000000;">
                  <td colspan="2" style="padding: 12px 18px; font-size: 12px; font-weight: 800; text-transform: uppercase; color: #000000;">
                    Your Requested Details
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 700; color: #555; width: 40%; border-bottom: 1px solid #e0e0e0;">Package</td>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 800; color: #000; border-bottom: 1px solid #e0e0e0;">${data.package}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 700; color: #555; border-bottom: 1px solid #e0e0e0;">Session</td>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 800; color: #000; border-bottom: 1px solid #e0e0e0;">${data.session} Session</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 700; color: #555; border-bottom: 1px solid #e0e0e0;">Booking Date</td>
                  <td style="padding: 10px 16px; font-size: 14px; font-weight: 900; color: #fb4903; border-bottom: 1px solid #e0e0e0;">📅 ${data.bookingDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 700; color: #555;">Contact Phone</td>
                  <td style="padding: 10px 16px; font-size: 13px; font-weight: 800; color: #000;">${data.phone}</td>
                </tr>
              </table>

              <div style="background-color: #f7f7f7; border: 1px solid #000000; border-radius: 12px; padding: 16px; font-size: 13px; line-height: 1.5; color: #222222; margin-bottom: 24px;">
                <strong>What&apos;s Included:</strong>
                <ul style="margin: 8px 0 0 0; padding-left: 20px;">
                  <li>1:1 Certified PADI Dive Master assistance (zero swimming required)</li>
                  <li>Boat cruise from Murudeshwar Beach to Netrani Island &amp; back</li>
                  <li>Complimentary 4K HD underwater action photos &amp; video recording</li>
                  <li>All scuba gear, sanitized wetsuits, mask, and life vest</li>
                </ul>
              </div>

              <div style="text-align: center;">
                <a href="https://wa.me/917406329777" style="display: inline-block; background-color: #55db9c; color: #000000; text-decoration: none; font-size: 13px; font-weight: 800; padding: 12px 28px; border-radius: 999px; border: 1px solid #000000; text-transform: uppercase;">
                  💬 Chat With Dive Desk (+91 74063 29777)
                </a>
              </div>
            </td>
          </tr>

          <tr>
            <td style="background-color: #fafafa; border-top: 1px solid #000000; padding: 16px 32px; text-align: center; font-size: 11px; color: #666666;">
              Netrani Scuba Dive • Murudeshwar Beach, Karnataka 581350<br>
              Helpline: +91 74063 29777 • <a href="https://www.murudeshwarscubadive.in" style="color: #000;">murudeshwarscubadive.in</a>
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

export function generateCustomerConfirmationText(data: BookingNotificationData): string {
  return `
Thank you, ${data.fullName}!

We have received your advance scuba diving booking request for Netrani Island.

Requested Details:
- Package: ${data.package}
- Session: ${data.session}
- Booking Date: ${data.bookingDate}
- Contact Phone: ${data.phone}

Our certified dive coordinator will call/WhatsApp you shortly to confirm boat seating and give you the Murudeshwar beach reporting directions.

Questions? Call our dive desk at +91 74063 29777 or visit https://www.murudeshwarscubadive.in
  `.trim();
}

/**
 * Dispatches the booking notification email using Resend (with fallback support).
 *
 * 1. Primary: Resend API (via resend SDK)
 * 2. Secondary: SMTP credentials (if configured)
 * 3. Graceful fallback: Console logging (if neither key is configured)
 */
export async function sendBookingNotificationEmail(
  data: BookingNotificationData,
  options?: { forceTestAccount?: boolean }
): Promise<EmailDispatchResult> {
  const recipient = getOwnerEmail();
  const fromEmail = getSenderEmail();
  const subject = `🤿 New Scuba Booking Enquiry: ${data.fullName} - ${data.bookingDate} (${data.session})`;
  const html = generateBookingEmailHtml(data);
  const text = generateBookingEmailText(data);

  // If testing with Ethereal SMTP
  if (options?.forceTestAccount) {
    try {
      const testAccount = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const info = await transporter.sendMail({
        from: `"Netrani Scuba Dive Bookings" <${testAccount.user}>`,
        to: recipient,
        replyTo: data.email,
        subject,
        text,
        html,
      });

      const previewUrl = nodemailer.getTestMessageUrl(info) || undefined;
      return {
        success: true,
        delivered: true,
        provider: "test",
        recipient,
        messageId: info.messageId,
        previewUrl,
        note: `Test email dispatched to ${recipient}. Preview URL: ${previewUrl}`,
      };
    } catch (err: any) {
      return {
        success: false,
        delivered: false,
        provider: "test",
        recipient,
        error: err.message || "Failed to dispatch test email",
      };
    }
  }

  // ========================================================
  // METHOD 1: RESEND (Primary Provider)
  // ========================================================
  const resend = getResendClient();

  if (resend) {
    try {
      const { data: resendData, error: resendError } = await resend.emails.send({
        from: fromEmail,
        to: [recipient],
        replyTo: data.email,
        subject,
        html,
        text,
      });

      if (resendError) {
        console.error("[Resend Error] Failed to dispatch booking email:", resendError);
        return {
          success: false,
          delivered: false,
          provider: "resend",
          recipient,
          error: resendError.message || "Resend email transmission failed",
          note: `Resend error: ${resendError.name || "Error"} - ${resendError.message}`,
        };
      }

      let customerConfirmationSent = false;
      // Optional: dispatch customer confirmation copy if explicitly enabled or verified domain
      if (process.env.SEND_CUSTOMER_CONFIRMATION === "true") {
        try {
          await resend.emails.send({
            from: fromEmail,
            to: [data.email],
            subject: `🌊 Netrani Scuba Booking Enquiry Received - ${data.bookingDate}`,
            html: generateCustomerConfirmationHtml(data),
            text: generateCustomerConfirmationText(data),
          });
          customerConfirmationSent = true;
        } catch (custErr: any) {
          console.warn("[Resend] Customer confirmation note (non-critical):", custErr?.message);
        }
      }

      console.log(
        `[Resend Success] Booking email sent for ${data.fullName} to ${recipient}. Resend Message ID: ${resendData?.id}`
      );

      return {
        success: true,
        delivered: true,
        provider: "resend",
        recipient,
        messageId: resendData?.id,
        customerConfirmationSent,
        note: `Email delivered via Resend. ID: ${resendData?.id}`,
      };
    } catch (err: any) {
      console.error("[Resend Exception] Error sending booking email:", err);
      return {
        success: false,
        delivered: false,
        provider: "resend",
        recipient,
        error: err.message || "Unexpected exception during Resend dispatch",
      };
    }
  }

  // ========================================================
  // METHOD 2: SMTP FALLBACK (If SMTP credentials configured)
  // ========================================================
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
  const fromAddress =
    process.env.SMTP_FROM ||
    (smtpUser
      ? `"Netrani Scuba Dive" <${smtpUser}>`
      : `"Netrani Scuba Dive" <murudeshwar.scuba.dive@gmail.com>`);

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: fromAddress,
        to: recipient,
        replyTo: data.email,
        subject,
        text,
        html,
      });

      return {
        success: true,
        delivered: true,
        provider: "smtp",
        recipient,
        messageId: info.messageId,
      };
    } catch (err: any) {
      console.error("[Netrani Scuba] SMTP dispatch error:", err);
      return {
        success: false,
        delivered: false,
        provider: "smtp",
        recipient,
        error: err.message || "SMTP transmission failed",
      };
    }
  }

  // ========================================================
  // METHOD 3: CONSOLE LOG FALLBACK (When no email service set)
  // ========================================================
  console.log(
    `[Netrani Scuba Dive] Form submission received for ${data.fullName} (${data.phone}, ${data.package}, ${data.bookingDate}). Recipient: ${recipient}. Note: Set RESEND_API_KEY in .env.local to send live emails via Resend.`
  );

  return {
    success: true,
    delivered: false,
    provider: "console",
    needsApiKey: true,
    needsSmtpConfig: true,
    recipient,
    note: "Booking recorded successfully. Provide RESEND_API_KEY in .env.local for live email dispatch using Resend.",
  };
}

/**
 * Dispatches newsletter subscription notification using Resend.
 */
export async function sendNewsletterNotificationEmail(subscriberEmail: string): Promise<EmailDispatchResult> {
  const recipient = getOwnerEmail();
  const fromEmail = getSenderEmail();
  const resend = getResendClient();

  if (!resend) {
    console.log(`[Resend Newsletter] New subscriber: ${subscriberEmail}. Set RESEND_API_KEY to send notifications.`);
    return {
      success: true,
      delivered: false,
      provider: "console",
      needsApiKey: true,
      recipient,
      note: "Subscriber registered. Set RESEND_API_KEY for live delivery.",
    };
  }

  try {
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: subscriberEmail,
      subject: `📬 New Newsletter Subscriber: ${subscriberEmail}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background: #e5f4ff;">
          <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border: 2px solid #000; border-radius: 16px; padding: 24px;">
            <h2 style="margin-top: 0;">New Netrani Scuba Newsletter Subscriber</h2>
            <p>A new visitor subscribed for updates on diving conditions and slots:</p>
            <p style="font-size: 16px; font-weight: bold; background: #ffd731; padding: 8px 12px; border: 1px solid #000; border-radius: 8px;">
              ${subscriberEmail}
            </p>
          </div>
        </div>
      `,
      text: `New Newsletter Subscriber: ${subscriberEmail}`,
    });

    if (resendError) {
      return {
        success: false,
        delivered: false,
        provider: "resend",
        recipient,
        error: resendError.message,
      };
    }

    return {
      success: true,
      delivered: true,
      provider: "resend",
      recipient,
      messageId: resendData?.id,
    };
  } catch (err: any) {
    return {
      success: false,
      delivered: false,
      provider: "resend",
      recipient,
      error: err.message || "Failed to dispatch newsletter email",
    };
  }
}
