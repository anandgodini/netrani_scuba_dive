export interface BookingWhatsAppDraft {
  fullName?: string;
  phone?: string;
  email?: string;
  package?: string;
  session?: string;
  bookingDate?: string;
  submittedAt?: string;
}

export const OFFICIAL_WHATSAPP_NUMBER = "917406329777";

/**
 * Builds high-contrast, structured WhatsApp message containing complete form values.
 */
export function formatWhatsAppBookingMessage(data: BookingWhatsAppDraft): string {
  const hasData =
    Boolean(data.fullName?.trim()) ||
    Boolean(data.phone?.trim()) ||
    Boolean(data.email?.trim()) ||
    Boolean(data.package?.trim()) ||
    Boolean(data.bookingDate?.trim());

  if (!hasData) {
    return "Hi, I want to book scuba diving with Netrani Scuba Dive. Please share slot details.";
  }

  const lines: string[] = [
    "🤿 *NEW NETRANI SCUBA DIVE BOOKING ENQUIRY*",
    "━━━━━━━━━━━━━━━━━━━━━━━━━",
    `👤 *Customer Name:* ${data.fullName?.trim() || "Not provided"}`,
    `📞 *Phone Number:* ${data.phone?.trim() || "Not provided"}`,
    `✉️ *Email Address:* ${data.email?.trim() || "Not provided"}`,
    `📦 *Package:* ${data.package?.trim() || "Not selected"}`,
    `⏰ *Session:* ${data.session ? `${data.session.trim()} Session` : "Not selected"}`,
    `📅 *Booking Date:* ${data.bookingDate?.trim() || "Not selected"}`,
  ];

  if (data.submittedAt) {
    lines.push(`🕒 *Submitted At:* ${data.submittedAt}`);
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("Please confirm boat slot availability and Murudeshwar beach reporting details.");

  return lines.join("\n");
}

/**
 * Generates direct wa.me link with complete encoded form data.
 */
export function getWhatsAppBookingUrl(data: BookingWhatsAppDraft): string {
  const message = formatWhatsAppBookingMessage(data);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
