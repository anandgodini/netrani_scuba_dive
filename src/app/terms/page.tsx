import type { Metadata } from "next";
import Link from "next/link";
import { InflatableRibbon, CheckmarkSticker } from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Terms and Conditions: Booking & Cancellations | Netrani Scuba Dive",
  description:
    "Review our booking policy, cancellation terms, refund procedures, and weather-related rescheduling guidelines at Netrani Scuba Dive.",
  keywords: [
    "Netrani Scuba Dive booking terms",
    "scuba diving cancellation policy murudeshwara",
    "netrani scuba refund policy",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/terms",
  },
  openGraph: {
    title: "Terms and Conditions: Booking & Cancellations | Netrani Scuba Dive",
    description:
      "Review our booking policy, cancellation terms, refund procedures, and weather-related rescheduling guidelines at Netrani Scuba Dive.",
    url: "https://www.murudeshwarscubadive.in/terms",
    siteName: "Netrani Scuba Dive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions - Netrani Scuba Dive",
    description:
      "Review our booking policy, cancellation terms, refund procedures, and weather-related rescheduling guidelines.",
  },
};

export default function Terms() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.murudeshwarscubadive.in",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms and Conditions",
          "item": "https://www.murudeshwarscubadive.in/terms",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-aeonik overflow-x-hidden selection:bg-[#ffd731] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero Section — Sea Blue (#bfe5ff) full-bleed band with Ample Gaps */}
      <section className="bg-[#bfe5ff] border-b border-black pt-36 md:pt-44 pb-20 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <InflatableRibbon variant="arc" className="-top-12 -right-16 w-[420px] max-w-[50vw] opacity-85 animate-ribbon-wave" />
          <div className="absolute top-24 right-12 hidden lg:block rotate-6 animate-float-slow">
            <CheckmarkSticker label="OFFICIAL POLICY" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-black font-bold text-xs uppercase tracking-wider border border-black rounded-full shadow-[3px_3px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Booking Policy &amp; Terms</span>
          </div>
          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.80] uppercase tracking-tight text-black">
            Terms &amp; Conditions.
          </h1>
          <p className="text-black/85 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Clear guidelines covering reservation deposits, cancellation timeframes, weather policies, and medical safety requirements for Netrani Scuba Dive.
          </p>
        </div>
      </section>

      {/* Content Section — Paper White canvas */}
      <section className="py-20 md:py-28 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto bg-white border border-black rounded-[32px] p-8 md:p-14 space-y-10 text-black leading-relaxed text-sm md:text-base shadow-[6px_6px_0px_#000000]">
          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              1. Booking &amp; Slot Blocks
            </h2>
            <p className="font-medium text-black/80">
              To confirm and hold a scuba diving reservation at Netrani Island with Netrani Scuba Dive, an advance deposit of <strong className="text-black font-bold bg-[#ffd731] px-2.5 py-0.5 rounded-full border border-black">₹500 per person</strong> is required. The remaining package balance is settled during morning check-in at our Murudeshwar dive desk before boarding the boat.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              2. Cancellation &amp; Refunds
            </h2>
            <ul className="space-y-3 list-disc pl-5 font-medium text-black/80">
              <li>Cancellations made <strong className="text-black font-bold">48 hours or more</strong> prior to the scheduled dive date receive a <strong className="text-black font-bold bg-[#55db9c] px-2.5 py-0.5 rounded-full border border-black">100% full refund</strong> of the booking advance.</li>
              <li>Cancellations made within <strong className="text-black font-bold">48 hours</strong> of the scheduled dive date are non-refundable.</li>
              <li>No-shows on the morning of the scheduled excursion forfeit the booking advance deposit.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              3. Weather-Related Policies
            </h2>
            <p className="font-medium text-black/80">
              Netrani Island is located in the open Arabian Sea. All boat departures operate strictly subject to coastal maritime clearances and wave conditions. If unexpected weather events, high sea swells, or maritime safety advisories lead to trip cancellation, guest safety is our unconditional priority.
            </p>
            <p className="font-medium text-black/80">
              Under any weather-related trip cancellation, guests receive a <strong className="text-black font-bold bg-[#ffd731] px-2.5 py-0.5 rounded-full border border-black">100% full refund</strong> of their deposit or may choose a complimentary reschedule to any future date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              4. Medical Guidelines
            </h2>
            <p className="font-medium text-black/80">
              Participants must confirm they do not suffer from medical conditions incompatible with scuba diving (such as severe asthma requiring active inhaler therapy, heart ailments, epilepsy, pregnancy, or recent major surgery). Certified instructors reserve the right to recommend surface snorkeling or deny sub-surface diving to anyone assessed as medically vulnerable.
            </p>
          </div>

          <div className="pt-6 border-t border-black/15 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-bold text-black/60">Updated for 2026 Season</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-black hover:bg-black/85 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
