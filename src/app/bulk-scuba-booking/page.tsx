import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Group & Bulk Scuba Diving with Netrani Scuba Dive: College & Corporate Packages",
  description:
    "Organizing a group dive trip to Netrani Island? Custom discounted packages, dedicated boat charters, and seamless logistics for groups of 10+ divers with Netrani Scuba Dive.",
  keywords: [
    "bulk scuba booking murudeshwar",
    "Netrani Scuba Dive group booking",
    "group scuba diving murudeshwara",
    "corporate scuba diving netrani",
    "college trip scuba diving murudeshwar",
    "discount scuba booking murudeshwara",
    "netrani group dive packages",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
  },
  openGraph: {
    title: "Group & Bulk Scuba Diving with Netrani Scuba Dive: College & Corporate Packages",
    description:
      "Organizing a group dive trip to Netrani Island? Custom discounted packages, dedicated boat charters, and seamless logistics for groups of 10+ divers with Netrani Scuba Dive.",
    url: "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/group-expedition.jpg",
        width: 1200,
        height: 630,
        alt: "Group and corporate scuba diving expeditions at Netrani Island with Netrani Scuba Dive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group & Bulk Scuba Bookings | Netrani Scuba Dive",
    description:
      "Custom discounted rates, dedicated boat charters, and personalized group packages for Netrani Island scuba diving.",
    images: ["/images/group-expedition.jpg"],
  },
};

export default function BulkBooking() {
  const corporateBenefits = [
    {
      title: "Tiered Group Rates",
      desc: "Special transparent pricing structures for college batches, family reunions, and corporate teams with 10 or more participants.",
      icon: (
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
          className="text-[#2c2e2a] w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Exclusive Boat Charters",
      desc: "Charter an entire dive boat exclusively for your group, aligning departure schedules and dive rotations around your travel itinerary.",
      icon: (
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
          className="text-[#2c2e2a] w-6 h-6"
        >
          <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
          <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
          <path d="M12 2v3"></path>
          <path d="M12 10v4"></path>
        </svg>
      ),
    },
    {
      title: "Coordinated Ocean Excursions",
      desc: "Seamlessly blend scuba diving rotations with group surface snorkeling, action video coverage, and local sightseeing guidance.",
      icon: (
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
          className="text-[#2c2e2a] w-6 h-6"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.murudeshwarscubadive.in/bulk-scuba-booking/#webpage",
      "url": "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
      "name": "Group & Bulk Scuba Diving with Netrani Scuba Dive: College & Corporate Packages",
      "description": "Organizing a group dive trip to Netrani Island? Custom discounted packages, dedicated boat charters, and seamless logistics for groups of 10+ divers with Netrani Scuba Dive.",
    },
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
          "name": "Bulk Scuba Booking",
          "item": "https://www.murudeshwarscubadive.in/bulk-scuba-booking",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-black font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section — Full-bleed Sea Blue (#bfe5ff) Canvas with Ample Gaps */}
      <section className="bg-[#bfe5ff] pt-36 md:pt-44 pb-20 md:pb-24 px-6 border-b border-black text-center relative overflow-hidden">
        {/* Signature 3D Ribbon Motif */}
        <InflatableRibbon variant="loop" className="-top-12 -right-24 w-[500px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

        {/* Floating Playful Stickers */}
        <div className="absolute top-28 left-8 md:left-24 z-10 hidden sm:block animate-float-slow">
          <DiverMaskSticker className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-10 right-16 md:right-32 z-10 hidden sm:block animate-float-reverse">
          <TankSticker className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black text-black font-bold text-xs uppercase tracking-[0.032em] shadow-[3px_3px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Group Expeditions</span>
          </div>

          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            Group &amp; Bulk <br />
            <span className="bg-[#ffd731] px-4 py-1.5 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              Bookings.
            </span>
          </h1>

          <p className="text-black max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed">
            Custom itineraries, private boat charter options, and tiered group rates for college tours, corporate retreats, and large family gatherings at Netrani Island.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917829975777"
              className="slush-btn-black text-xs md:text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <span>Call Coordinator (+91 78299 75777)</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </a>
            <a
              href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20plan%20a%20group%20scuba%20booking%20for%20our%20trip.%20Please%20connect%20us."
              target="_blank"
              rel="noopener noreferrer"
              className="slush-pill-btn bg-white hover:bg-[#55db9c] text-black border border-black text-xs md:text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <span>WhatsApp Booking</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </a>
          </div>
        </div>

        {/* Hand-cut Sticker Image Card */}
        <div className="max-w-5xl mx-auto mt-14 rounded-[28px] overflow-hidden border border-black bg-white p-3.5 shadow-[6px_6px_0px_#000000]">
          <div className="relative h-72 sm:h-96 w-full rounded-[20px] overflow-hidden border border-black bg-[#e9e9e9]">
            <Image
              src="/images/colorblock/boat-expedition.jpg"
              alt="Group and corporate scuba diving expeditions at Netrani Island with Netrani Scuba Dive"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section — Paper White (#ffffff) Canvas */}
      <section className="py-20 md:py-28 px-6 relative z-10 max-w-5xl mx-auto">
        <div className="space-y-16">
          {/* Benefits */}
          <div className="space-y-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block px-3.5 py-1 bg-[#e9ccff] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">Advantages</span>
              <h2 className="font-lateral text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[0.80] text-black">
                Why Book As A Group
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {corporateBenefits.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-white text-black border border-black rounded-[28px] p-8 transition-all duration-300 hover:bg-[#d8efff] space-y-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#ffd731] border border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000000]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-medium text-neutral-800">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Group Billboard — Sea Blue (#bfe5ff) Ground with Tactile White Card */}
      <section className="bg-[#bfe5ff] py-20 md:py-28 px-6 border-t border-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-white border border-black rounded-[36px] p-10 md:p-14 text-center space-y-8 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
          <h2 className="font-lateral text-4xl sm:text-6xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            Request A Custom Group Quote
          </h2>
          <p className="text-neutral-800 leading-relaxed text-base md:text-lg max-w-2xl mx-auto font-medium">
            Planning a trip with 10 or more people? Connect directly with our Netrani Scuba Dive group coordinator via phone or WhatsApp to lock in private boat availability, customized dive rotations, and group pricing.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href="tel:+917829975777"
              className="slush-btn-black text-xs md:text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <span>Call Coordinator (+91 78299 75777)</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </a>
            <a
              href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20plan%20a%20group%20scuba%20booking%20for%20our%20trip.%20Please%20connect%20us."
              target="_blank"
              rel="noopener noreferrer"
              className="slush-pill-btn bg-white hover:bg-[#55db9c] text-black border border-black text-xs md:text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <span>WhatsApp Booking</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
