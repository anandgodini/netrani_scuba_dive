import type { Metadata } from "next";
import Link from "next/link";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Contact Netrani Scuba Dive: Phone Number, WhatsApp & Dive Desk",
  description:
    "Direct contact number, WhatsApp desk, map directions, and reporting location details for Netrani Scuba Dive bookings at Netrani Island.",
  keywords: [
    "Netrani Scuba Dive contact number",
    "Netrani Scuba Dive phone number",
    "netrani scuba diving contact",
    "scuba diving murudeshwar direct contact",
    "netrani scuba whatsapp number",
    "scuba dive reporting point murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/contact",
  },
  openGraph: {
    title: "Contact Netrani Scuba Dive: Phone Number, WhatsApp & Dive Desk",
    description:
      "Direct contact number, WhatsApp desk, map directions, and reporting location details for Netrani Scuba Dive bookings at Netrani Island.",
    url: "https://www.murudeshwarscubadive.in/contact",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Netrani Scuba Dive desk and support",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Netrani Scuba Dive Direct Desk",
    description:
      "Get the direct Netrani scuba diving contact number, WhatsApp desk, directions, and reporting location.",
    images: ["/hero.jpg"],
  },
};

export default function Contact() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://www.murudeshwarscubadive.in/contact/#contactpage",
      "url": "https://www.murudeshwarscubadive.in/contact",
      "name": "Contact Netrani Scuba Dive",
      "description": "Direct Netrani scuba diving contact number, WhatsApp desk, map directions, and reporting location details.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917406329777",
        "contactType": "customer service",
        "email": "murudeshwar.scuba.dive@gmail.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.murudeshwarscubadive.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.murudeshwarscubadive.in/contact"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-black font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Contact Header — Full-bleed Sea Blue (#bfe5ff) Canvas with Ample Gaps */}
      <section className="bg-[#bfe5ff] pt-36 md:pt-44 pb-20 md:pb-24 px-6 border-b border-black text-center relative overflow-hidden">
        {/* Signature 3D Ribbon Motif */}
        <InflatableRibbon variant="arc" className="-top-12 -left-20 w-[500px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

        {/* Floating Playful Stickers */}
        <div className="absolute top-28 right-8 md:right-24 z-10 hidden sm:block animate-float-slow">
          <DiverMaskSticker className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-10 right-16 md:right-32 z-10 hidden sm:block animate-float-reverse">
          <TankSticker className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black text-black font-bold text-xs uppercase tracking-[0.032em] shadow-[3px_3px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Direct Harbor Coordination Desk</span>
          </div>
          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            Contact <br />
            <span className="bg-[#ffd731] px-4 py-1.5 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              Netrani Scuba Dive.
            </span>
          </h1>
          <p className="text-black text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Have questions about sea conditions, morning boat departures, or reserving your Netrani Island dive? Reach our dive coordinators directly.
          </p>
        </div>
      </section>

      {/* Grid Section — 4 Distinct Hand-cut Sticker Cards on Paper White (#ffffff) */}
      <section className="py-20 md:py-28 px-6 relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Call */}
          <a
            href="tel:+917406329777"
            className="group bg-white border border-black rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#d8efff] text-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-[#ffd731] border border-black rounded-full flex items-center justify-center mb-6 text-black shadow-[2px_2px_0px_#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h2 className="text-xs uppercase tracking-[0.032em] text-neutral-600 font-bold mb-1">Call Booking Desk</h2>
            <p className="text-black text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
              +91 74063 29777
            </p>
            <p className="text-neutral-700 text-sm font-medium">Direct desk &amp; boat slot reservations</p>
            <span className="mt-6 slush-btn-black text-xs px-6 py-2.5 inline-flex items-center gap-2">
              <span>Call Now</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </span>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20scuba%20diving%20with%20Netrani%20Scuba%20Dive.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-black rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#d8efff] text-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-[#55db9c] border border-black rounded-full flex items-center justify-center mb-6 text-black shadow-[2px_2px_0px_#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h2 className="text-xs uppercase tracking-[0.032em] text-neutral-600 font-bold mb-1">WhatsApp Chat</h2>
            <p className="text-black text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
              +91 74063 29777
            </p>
            <p className="text-neutral-700 text-sm font-medium">Quick responses &amp; itinerary assistance</p>
            <span className="mt-6 slush-pill-btn bg-white hover:bg-[#55db9c] text-black text-xs px-6 py-2.5 inline-flex items-center gap-2">
              <span>Message on WhatsApp</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </span>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:murudeshwar.scuba.dive@gmail.com"
            className="group bg-white border border-black rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#d8efff] text-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-[#e9ccff] border border-black rounded-full flex items-center justify-center mb-6 text-black shadow-[2px_2px_0px_#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>
            <h2 className="text-xs uppercase tracking-[0.032em] text-neutral-600 font-bold mb-1">Email</h2>
            <p className="text-black text-base sm:text-lg md:text-xl font-extrabold mb-2 truncate max-w-full">
              murudeshwar.scuba.dive@gmail.com
            </p>
            <p className="text-neutral-700 text-sm font-medium">Group proposals &amp; formal booking inquiries</p>
            <span className="mt-6 slush-pill-btn bg-white hover:bg-[#ffd731] text-black text-xs px-6 py-2.5 inline-flex items-center gap-2">
              <span>Send Email</span>
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </span>
          </a>

          {/* Card 4: Location */}
          <div className="bg-white text-black border border-black rounded-[28px] p-8 md:p-10 flex flex-col items-center text-center shadow-[4px_4px_0px_#000000]">
            <div className="w-16 h-16 bg-[#ffd731] border border-black rounded-full flex items-center justify-center mb-6 text-black shadow-[2px_2px_0px_#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-black"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h2 className="text-xs uppercase tracking-[0.032em] text-neutral-600 font-bold mb-1">Harbor Desk Location</h2>
            <p className="text-black font-extrabold text-xl">Temple Main Road</p>
            <p className="text-neutral-700 text-sm font-medium">Murudeshwar, Karnataka 581350</p>
            <p className="text-neutral-600 text-xs mt-1 font-medium">Near Murudeshwar Temple &amp; Main Beach</p>
            <Link
              href="/how-to-reach-murudeshwar"
              className="mt-6 slush-pill-btn bg-white hover:bg-[#e9ccff] text-black text-xs px-6 py-2.5 inline-flex items-center gap-2"
            >
              <span>Get Directions &amp; Transit Map</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Hours — Sea Blue (#bfe5ff) Ground with Tactile White Card */}
      <section className="bg-[#bfe5ff] py-20 md:py-28 px-6 border-t border-b border-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-white border border-black rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
          <div className="text-center space-y-2 mb-10">
            <p className="text-black text-xs font-bold uppercase tracking-[0.032em]">Schedule</p>
            <h2 className="font-lateral text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
              Operational Hours
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-black/20">
            <div>
              <p className="text-neutral-600 text-xs font-bold uppercase mb-1">
                Office Hours
              </p>
              <p className="text-black font-extrabold text-base md:text-lg">7:00 AM – 8:00 PM</p>
            </div>
            <div>
              <p className="text-neutral-600 text-xs font-bold uppercase mb-1">
                Dive Times
              </p>
              <p className="text-black font-extrabold text-base md:text-lg">8:00 AM – 3:00 PM</p>
            </div>
            <div>
              <p className="text-neutral-600 text-xs font-bold uppercase mb-1">
                Days Open
              </p>
              <p className="text-black font-extrabold text-base md:text-lg">All 7 Days</p>
            </div>
            <div>
              <p className="text-neutral-600 text-xs font-bold uppercase mb-1">
                Diving Season
              </p>
              <p className="text-black font-extrabold text-base md:text-lg">October – May</p>
            </div>
          </div>
          <p className="text-center text-neutral-700 text-xs mt-10 font-medium">
            Diving operations pause during monsoon season (June through September) per maritime authority guidelines
          </p>
        </div>
      </section>

      {/* Quick Booking Links — Paper White (#ffffff) Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-lateral text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            Quick Booking Links
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto text-xs font-bold">
            <Link
              href="/netrani-scuba-diving"
              className="flex-1 slush-btn-black py-3.5 px-6 inline-flex items-center justify-center gap-2"
            >
              <span>Full Dive ₹3,500</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </Link>
            <Link
              href="/intro-scuba-diving"
              className="flex-1 slush-pill-btn bg-white hover:bg-[#ffd731] text-black py-3.5 px-6 inline-flex items-center justify-center gap-2"
            >
              <span>Intro Dive ₹1,999</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </Link>
            <Link
              href="/bulk-scuba-booking"
              className="flex-1 slush-pill-btn bg-white hover:bg-[#e9ccff] text-black py-3.5 px-6 inline-flex items-center justify-center gap-2"
            >
              <span>Group Booking</span>
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
