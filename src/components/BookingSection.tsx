"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface FormData {
  fullName: string;
  phone: string;
  package: string;
  email: string;
  session: string;
  bookingDate: string;
}

interface ConfirmedBooking extends FormData {
  submittedAt: string;
}

export default function BookingSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    package: "",
    email: "",
    session: "",
    bookingDate: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    // Prevent selecting past dates (calculated in local IST timezone)
    try {
      const today = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kolkata",
      }).format(new Date());
      setMinDate(today);
    } catch {
      setMinDate(new Date().toISOString().split("T")[0]);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // 1. Full Name — Required (min 2 chars)
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 letters).";
    }

    // 2. Phone Number — Required, with Indian (+91) validation
    const digits = formData.phone.replace(/\D/g, "");
    const isValidIndian =
      digits.length === 10
        ? /^[6-9]\d{9}$/.test(digits)
        : digits.length === 12 && digits.startsWith("91")
        ? /^91[6-9]\d{9}$/.test(digits)
        : false;

    if (!formData.phone.trim() || !isValidIndian) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g. 98765 43210).";
    }

    // 3. Package — Required dropdown with ₹3,500 and ₹4,500 options
    if (
      !formData.package ||
      (!formData.package.includes("3,500") && !formData.package.includes("4,500"))
    ) {
      newErrors.package = "Please choose a scuba package (₹3,500 or ₹4,500 option).";
    }

    // 4. Email ID — Required, with email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 5. Session — Required dropdown with Day and Afternoon options
    if (!formData.session || !["Day", "Afternoon"].includes(formData.session)) {
      newErrors.session = "Please select either Day or Afternoon session.";
    }

    // 6. Date of Booking — Required date picker that prevents past dates
    if (!formData.bookingDate) {
      newErrors.bookingDate = "Please select your preferred date of booking.";
    } else if (minDate && formData.bookingDate < minDate) {
      newErrors.bookingDate = "Booking date cannot be in the past.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearing when user edits the field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof FormData];
        return updated;
      });
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate clicks

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit your booking. Please try again.");
      }

      setIsSuccess(true);
      setConfirmedBooking(result.booking);
    } catch (err: any) {
      setServerError(
        err.message ||
          "A network or server error occurred. Please call our dive desk directly at +91 74063 29777."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      package: "",
      email: "",
      session: "",
      bookingDate: "",
    });
    setErrors({});
    setIsSuccess(false);
    setConfirmedBooking(null);
    setServerError(null);
  };

  return (
    <section
      id="booking-form"
      className="bg-[#ffffff] text-[#000000] py-20 md:py-28 px-6 md:px-12 relative border-b border-black font-sans"
    >
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd731] text-black border border-black shadow-[2px_2px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fb4903] animate-pulse"></span>
            <span className="font-bold text-xs uppercase tracking-[0.032em]">
              Instant Slot Reservation Desk
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-lateral font-extrabold uppercase leading-[0.82] text-black">
            Book Your Netrani Island Scuba Slot
          </h2>

          <p className="text-black/80 text-sm md:text-base leading-relaxed font-medium pt-1 max-w-2xl mx-auto">
            Reserve your morning or afternoon boat crossing to Netrani Island with certified 1:1 PADI guide assistance. Complete the quick form below for instant booking confirmation.
          </p>

          {/* Key Highlights Trust Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#d8efff] border border-black text-[11px] font-bold uppercase tracking-wider text-black">
              ★ 5,000+ Happy Divers
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#e9ccff] border border-black text-[11px] font-bold uppercase tracking-wider text-black">
              🤿 1:1 PADI Guide
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#55db9c] border border-black text-[11px] font-bold uppercase tracking-wider text-black">
              📸 Free 4K HD Photos &amp; Video
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#ffd731] border border-black text-[11px] font-bold uppercase tracking-wider text-black">
              🛡️ Zero Swimming Required
            </span>
          </div>
        </ScrollReveal>

        {/* Form Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#bfe5ff] rounded-[36px] md:rounded-[44px] border border-black p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#000000] relative overflow-hidden">
            
            {/* Success State */}
            {isSuccess && confirmedBooking ? (
              <div className="bg-white rounded-[28px] border border-black p-8 md:p-12 text-center space-y-6 shadow-[4px_4px_0px_#000000] animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#55db9c] border-2 border-black flex items-center justify-center mx-auto text-2xl shadow-[3px_3px_0px_#000000]">
                  ✓
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#ffd731] text-black border border-black text-xs font-bold uppercase tracking-wider">
                    Enquiry Received Successfully
                  </span>
                  <h3 className="text-2xl md:text-4xl font-lateral font-extrabold uppercase text-black leading-tight">
                    Thank You, {confirmedBooking.fullName}!
                  </h3>
                  <p className="text-black/80 text-sm md:text-base max-w-xl mx-auto font-medium">
                    Your booking enquiry has been registered and an email notification has been dispatched to our dive coordinator. We will call you within 15 minutes to confirm boat seats and send your Murudeshwar reporting point.
                  </p>
                </div>

                {/* Confirmed Details Table */}
                <div className="bg-[#f0f8ff] border border-black rounded-[20px] p-5 max-w-lg mx-auto text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-black/15 pb-2">
                    <span className="text-black/60 font-bold uppercase">Customer Name</span>
                    <span className="text-black font-extrabold">{confirmedBooking.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/15 pb-2">
                    <span className="text-black/60 font-bold uppercase">Phone Number</span>
                    <span className="text-black font-extrabold">{confirmedBooking.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/15 pb-2">
                    <span className="text-black/60 font-bold uppercase">Email Address</span>
                    <span className="text-black font-extrabold">{confirmedBooking.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/15 pb-2">
                    <span className="text-black/60 font-bold uppercase">Selected Package</span>
                    <span className="text-black font-extrabold bg-[#e9ccff] border border-black px-2 py-0.5 rounded">
                      {confirmedBooking.package}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-black/15 pb-2">
                    <span className="text-black/60 font-bold uppercase">Session</span>
                    <span className="text-black font-extrabold">{confirmedBooking.session} Session</span>
                  </div>
                  <div className="flex justify-between border-b border-black/15 pb-2">
                    <span className="text-black/60 font-bold uppercase">Date of Booking</span>
                    <span className="text-[#fb4903] font-extrabold">📅 {confirmedBooking.bookingDate}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-black/60 font-bold uppercase">Submitted At</span>
                    <span className="text-black/80 font-bold">{confirmedBooking.submittedAt}</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/917406329777?text=Hi%2C%20I%20just%20submitted%20a%20booking%20enquiry%20for%20${encodeURIComponent(
                      confirmedBooking.fullName
                    )}%20on%20${encodeURIComponent(confirmedBooking.bookingDate)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#55db9c] hover:bg-[#45cb8c] border border-black text-black px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.032em] shadow-[3px_3px_0px_#000000] active:scale-95 transition-all"
                  >
                    <span>Chat on WhatsApp</span>
                    <span>💬</span>
                  </a>

                  <a
                    href="tel:+917406329777"
                    className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 border border-black text-white px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.032em] shadow-[3px_3px_0px_#000000] active:scale-95 transition-all"
                  >
                    <span>Call +91 74063 29777</span>
                    <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-100 border border-black text-black px-5 py-3 rounded-full font-bold text-xs uppercase tracking-[0.032em] active:scale-95 transition-all"
                  >
                    Submit Another Booking
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form View */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Server Error Alert Banner */}
                {serverError && (
                  <div className="bg-[#ffeded] border-2 border-[#fb4903] text-black p-4 rounded-2xl flex items-start gap-3 shadow-[3px_3px_0px_#000000]">
                    <span className="text-[#fb4903] text-lg font-bold">⚠️</span>
                    <div className="text-xs space-y-1">
                      <p className="font-extrabold text-[#fb4903] uppercase">Booking Submission Notice</p>
                      <p className="font-medium text-black/90">{serverError}</p>
                    </div>
                  </div>
                )}

                {/* Form Fields Grid — Desktop: 2-column; Mobile: 1-column in exact order */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  
                  {/* FIELD 1: Full Name — Required */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-fullName"
                      className="block text-xs font-bold uppercase tracking-[0.032em] text-black"
                    >
                      1. Full Name <span className="text-[#fb4903]">*</span>
                    </label>
                    <input
                      type="text"
                      id="booking-fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 text-sm font-bold text-black outline-none bg-white border ${
                        errors.fullName ? "border-[#fb4903] ring-2 ring-[#fb4903]/30" : "border-black"
                      } rounded-2xl shadow-[3px_3px_0px_#000000] focus:ring-2 focus:ring-[#ffd731] transition-all placeholder:text-black/35`}
                    />
                    {errors.fullName && (
                      <p className="text-[#fb4903] text-[11px] font-bold flex items-center gap-1 pt-0.5">
                        <span>●</span> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* FIELD 2: Phone Number — Required, with Indian country code (+91) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-bold uppercase tracking-[0.032em] text-black"
                    >
                      2. Phone Number <span className="text-[#fb4903]">*</span>
                    </label>
                    <div
                      className={`flex rounded-2xl border ${
                        errors.phone ? "border-[#fb4903] ring-2 ring-[#fb4903]/30" : "border-black"
                      } overflow-hidden shadow-[3px_3px_0px_#000000] bg-white focus-within:ring-2 focus-within:ring-[#ffd731] transition-all`}
                    >
                      <span className="inline-flex items-center px-3.5 bg-[#d8efff] border-r border-black font-extrabold text-xs text-black select-none shrink-0">
                        🇮🇳 +91
                      </span>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        required
                        placeholder="98765 43210"
                        maxLength={14}
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3.5 text-sm font-bold text-black outline-none bg-transparent placeholder:text-black/35"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[#fb4903] text-[11px] font-bold flex items-center gap-1 pt-0.5">
                        <span>●</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* FIELD 3: Package — Required dropdown with ₹3,500 and ₹4,500 options */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-package"
                      className="block text-xs font-bold uppercase tracking-[0.032em] text-black"
                    >
                      3. Package <span className="text-[#fb4903]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="booking-package"
                        name="package"
                        required
                        value={formData.package}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 text-sm font-bold text-black outline-none bg-white border ${
                          errors.package ? "border-[#fb4903] ring-2 ring-[#fb4903]/30" : "border-black"
                        } rounded-2xl shadow-[3px_3px_0px_#000000] focus:ring-2 focus:ring-[#ffd731] transition-all appearance-none cursor-pointer pr-10`}
                      >
                        <option value="">Select Scuba Package *</option>
                        <option value="Netrani Scuba Diving Package - ₹3,500">
                          Netrani Island Scuba Diving Package — ₹3,500 / person
                        </option>
                        <option value="VIP Extended Experience - ₹4,500">
                          VIP Extended Experience (Extended Deep Dive) — ₹4,500 / person
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black font-extrabold text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.package && (
                      <p className="text-[#fb4903] text-[11px] font-bold flex items-center gap-1 pt-0.5">
                        <span>●</span> {errors.package}
                      </p>
                    )}
                  </div>

                  {/* FIELD 4: Email ID — Required, with email validation */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-bold uppercase tracking-[0.032em] text-black"
                    >
                      4. Email ID <span className="text-[#fb4903]">*</span>
                    </label>
                    <input
                      type="email"
                      id="booking-email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 text-sm font-bold text-black outline-none bg-white border ${
                        errors.email ? "border-[#fb4903] ring-2 ring-[#fb4903]/30" : "border-black"
                      } rounded-2xl shadow-[3px_3px_0px_#000000] focus:ring-2 focus:ring-[#ffd731] transition-all placeholder:text-black/35`}
                    />
                    {errors.email && (
                      <p className="text-[#fb4903] text-[11px] font-bold flex items-center gap-1 pt-0.5">
                        <span>●</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* FIELD 5: Session — Required dropdown with Day and Afternoon options */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-session"
                      className="block text-xs font-bold uppercase tracking-[0.032em] text-black"
                    >
                      5. Session <span className="text-[#fb4903]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="booking-session"
                        name="session"
                        required
                        value={formData.session}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 text-sm font-bold text-black outline-none bg-white border ${
                          errors.session ? "border-[#fb4903] ring-2 ring-[#fb4903]/30" : "border-black"
                        } rounded-2xl shadow-[3px_3px_0px_#000000] focus:ring-2 focus:ring-[#ffd731] transition-all appearance-none cursor-pointer pr-10`}
                      >
                        <option value="">Select Dive Session *</option>
                        <option value="Day">Day Session (08:00 AM – 01:30 PM)</option>
                        <option value="Afternoon">Afternoon Session (01:30 PM – 05:30 PM)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black font-extrabold text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.session && (
                      <p className="text-[#fb4903] text-[11px] font-bold flex items-center gap-1 pt-0.5">
                        <span>●</span> {errors.session}
                      </p>
                    )}
                  </div>

                  {/* FIELD 6: Date of Booking — Required date picker that prevents past dates */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-bold uppercase tracking-[0.032em] text-black"
                    >
                      6. Date of Booking <span className="text-[#fb4903]">*</span>
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      name="bookingDate"
                      required
                      min={minDate}
                      value={formData.bookingDate}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3.5 text-sm font-bold text-black outline-none bg-white border ${
                        errors.bookingDate ? "border-[#fb4903] ring-2 ring-[#fb4903]/30" : "border-black"
                      } rounded-2xl shadow-[3px_3px_0px_#000000] focus:ring-2 focus:ring-[#ffd731] transition-all cursor-pointer`}
                    />
                    {errors.bookingDate && (
                      <p className="text-[#fb4903] text-[11px] font-bold flex items-center gap-1 pt-0.5">
                        <span>●</span> {errors.bookingDate}
                      </p>
                    )}
                  </div>

                </div>

                {/* Submit Action Area */}
                <div className="pt-4 flex flex-col items-center text-center space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto min-w-[280px] bg-black hover:bg-neutral-800 text-white font-extrabold text-sm md:text-base py-4 px-10 rounded-full border border-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:-translate-y-0.5 active:scale-95 transition-all uppercase tracking-[0.032em] inline-flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Confirming Slot...</span>
                      </>
                    ) : (
                      <>
                        <span>Book Your Slot</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c]"></span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                  <p className="text-black/75 text-xs font-semibold">
                    Prefer direct booking over the phone?{" "}
                    <a
                      href="tel:+917406329777"
                      className="text-black font-extrabold underline hover:text-[#fb4903] transition-colors"
                    >
                      Call +91 74063 29777
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://wa.me/917406329777?text=I%20want%20to%20book%20Scuba%20Diving"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-extrabold underline hover:text-[#55db9c] transition-colors"
                    >
                      WhatsApp Dive Desk
                    </a>
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
