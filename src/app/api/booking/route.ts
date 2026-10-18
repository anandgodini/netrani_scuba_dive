import { sendBookingNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phone,
      package: selectedPackage,
      email,
      session,
      bookingDate,
    } = body;

    // Field 1: Full Name — Required
    if (
      !fullName ||
      typeof fullName !== "string" ||
      fullName.trim().length < 2
    ) {
      return Response.json(
        {
          success: false,
          error: "Please enter your full name (minimum 2 characters).",
        },
        { status: 400 }
      );
    }

    // Field 2: Phone Number — Required, with Indian country code (+91) support
    if (!phone || typeof phone !== "string") {
      return Response.json(
        {
          success: false,
          error: "Please enter a valid phone number.",
        },
        { status: 400 }
      );
    }
    const cleanDigits = phone.replace(/\D/g, "");
    // Standard Indian phone number: 10 digits (starting with 6, 7, 8, or 9) or 12 digits (with 91 prefix)
    const isValidIndianNumber =
      cleanDigits.length === 10
        ? /^[6-9]\d{9}$/.test(cleanDigits)
        : cleanDigits.length === 12 && cleanDigits.startsWith("91")
        ? /^91[6-9]\d{9}$/.test(cleanDigits)
        : false;

    if (!isValidIndianNumber) {
      return Response.json(
        {
          success: false,
          error:
            "Please enter a valid 10-digit Indian mobile number (e.g., +91 98765 43210).",
        },
        { status: 400 }
      );
    }

    // Standardize phone format with +91 prefix
    const standardPhone =
      cleanDigits.length === 10
        ? `+91 ${cleanDigits.slice(0, 5)} ${cleanDigits.slice(5)}`
        : `+91 ${cleanDigits.slice(2, 7)} ${cleanDigits.slice(7)}`;

    // Field 3: Package — Required dropdown with ₹3,500 and ₹4,500 options
    if (
      !selectedPackage ||
      typeof selectedPackage !== "string" ||
      (!selectedPackage.includes("3,500") && !selectedPackage.includes("4,500"))
    ) {
      return Response.json(
        {
          success: false,
          error:
            "Please select a valid scuba package (₹3,500 or ₹4,500 option).",
        },
        { status: 400 }
      );
    }

    // Field 4: Email ID — Required, with email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      !emailRegex.test(email.trim())
    ) {
      return Response.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Field 5: Session — Required dropdown with Day and Afternoon options
    if (
      !session ||
      typeof session !== "string" ||
      !["Day", "Afternoon"].includes(session.trim())
    ) {
      return Response.json(
        {
          success: false,
          error: "Please select a session (Day or Afternoon).",
        },
        { status: 400 }
      );
    }

    // Field 6: Date of Booking — Required date picker that prevents past dates
    if (!bookingDate || typeof bookingDate !== "string") {
      return Response.json(
        {
          success: false,
          error: "Please select your preferred date of booking.",
        },
        { status: 400 }
      );
    }

    // Prevent past dates in Asia/Kolkata timezone
    const todayStr = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
    }).format(new Date()); // YYYY-MM-DD in IST

    if (bookingDate < todayStr) {
      return Response.json(
        {
          success: false,
          error: "Booking date cannot be in the past. Please select today or a future date.",
        },
        { status: 400 }
      );
    }

    // Submission timestamp in IST
    const submissionTimestamp = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    }).format(new Date());

    // Send email notification to configured website owner
    const emailResult = await sendBookingNotificationEmail({
      fullName: fullName.trim(),
      phone: standardPhone,
      package: selectedPackage.trim(),
      email: email.trim().toLowerCase(),
      session: session.trim(),
      bookingDate: bookingDate.trim(),
      submittedAt: submissionTimestamp,
    });

    return Response.json(
      {
        success: true,
        message:
          "Booking enquiry submitted successfully. Our certified dive coordinator will contact you shortly.",
        booking: {
          fullName: fullName.trim(),
          phone: standardPhone,
          package: selectedPackage.trim(),
          email: email.trim().toLowerCase(),
          session: session.trim(),
          bookingDate: bookingDate.trim(),
          submittedAt: submissionTimestamp,
        },
        emailDelivered: emailResult.delivered,
        provider: emailResult.provider,
        messageId: emailResult.messageId,
        recipient: emailResult.recipient,
        needsApiKey: emailResult.needsApiKey || false,
        customerConfirmationSent: emailResult.customerConfirmationSent || false,
        note: emailResult.note,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Booking API error:", error);
    return Response.json(
      {
        success: false,
        error:
          "An unexpected server error occurred while processing your booking. Please call our Murudeshwar dive desk directly at +91 74063 29777.",
      },
      { status: 500 }
    );
  }
}
