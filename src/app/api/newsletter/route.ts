import { sendNewsletterNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return Response.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const result = await sendNewsletterNotificationEmail(email.trim().toLowerCase());

    return Response.json(
      {
        success: true,
        message: "Thank you for subscribing! You will receive Netrani scuba condition updates.",
        delivered: result.delivered,
        provider: result.provider,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Newsletter API error:", error);
    return Response.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
