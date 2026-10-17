import type { Metadata } from "next";
import Link from "next/link";
import { InflatableRibbon, CheckmarkSticker } from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Privacy Policy: Netrani Scuba Dive",
  description:
    "Learn how Netrani Scuba Dive collects, stores, and protects your information when booking scuba diving packages.",
  keywords: [
    "Netrani Scuba Dive privacy policy",
    "netrani scuba booking privacy",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy: Netrani Scuba Dive",
    description:
      "Learn how Netrani Scuba Dive collects, stores, and protects your information when booking scuba diving packages.",
    url: "https://www.murudeshwarscubadive.in/privacy-policy",
    siteName: "Netrani Scuba Dive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Netrani Scuba Dive",
    description:
      "Learn how Netrani Scuba Dive collects, stores, and protects your information when booking scuba diving packages.",
  },
};

export default function PrivacyPolicy() {
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
          "name": "Privacy Policy",
          "item": "https://www.murudeshwarscubadive.in/privacy-policy",
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
          <InflatableRibbon variant="loop" className="-top-12 -right-16 w-[420px] max-w-[50vw] opacity-85 animate-ribbon-wave" />
          <div className="absolute top-24 right-12 hidden lg:block rotate-6 animate-float-slow">
            <CheckmarkSticker label="DATA SAFE" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-black font-bold text-xs uppercase tracking-wider border border-black rounded-full shadow-[3px_3px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Legal &amp; Data Security</span>
          </div>
          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.80] uppercase tracking-tight text-black">
            Privacy Policy.
          </h1>
          <p className="text-black/85 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            How Netrani Scuba Dive manages and protects the contact details you share with us.
          </p>
        </div>
      </section>

      {/* Content Section — Paper White canvas */}
      <section className="py-20 md:py-28 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto bg-white border border-black rounded-[32px] p-8 md:p-14 space-y-10 text-black leading-relaxed text-sm md:text-base shadow-[6px_6px_0px_#000000]">
          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              1. Information Collection
            </h2>
            <p className="font-medium text-black/80">
              We collect minimal contact details (such as your Name, Phone number, and Email address) only when you submit inquiry forms, book slots, or call our coordinator desk.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              2. Use of Information
            </h2>
            <p className="font-medium text-black/80">
              We use your contact information solely to coordinate boat seats, send reporting locations, confirm advance transactions, and deliver the HD underwater photos/videos of your dive.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              3. Data Protection
            </h2>
            <p className="font-medium text-black/80">
              Your contact details are stored securely. We do not sell, rent, share, or lease your personal information to third-party marketing services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-aeonik text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-b border-black/15 pb-3">
              4. Media Consent
            </h2>
            <p className="font-medium text-black/80">
              High-definition underwater photos and action video clips captured during the dive are shared directly with participants for their personal keep. Any promotional usage on our social channels is done with diver consent.
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
