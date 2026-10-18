import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
  DepthSticker,
  CheckmarkSticker,
  StarfishSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Beginner Scuba Diving with Netrani Scuba Dive: Intro Try Dive (₹1,999)",
  description:
    "Experience beginner scuba diving at Netrani Island with Netrani Scuba Dive for ₹1,999. Ideal entry-level dive for beginners and non-swimmers with 1:1 certified instructor & free HD media.",
  keywords: [
    "Beginner scuba diving in Murudeshwar",
    "Netrani Scuba Dive",
    "Scuba diving for non swimmers",
    "Murudeshwar scuba diving",
    "intro scuba diving murudeshwar",
    "try scuba dive murudeshwara",
    "beginner scuba diving murudeshwar",
    "netrani island try dive",
    "first time scuba diving murudeshwar",
    "netrani beginner scuba package",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/intro-scuba-diving",
  },
  openGraph: {
    title: "Beginner Scuba Diving with Netrani Scuba Dive: Intro Try Dive (₹1,999)",
    description:
      "Experience beginner scuba diving at Netrani Island with Netrani Scuba Dive for ₹1,999. Ideal entry-level dive for beginners and non-swimmers with 1:1 certified instructor & free HD media.",
    url: "https://www.murudeshwarscubadive.in/intro-scuba-diving",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/group-divers.png",
        width: 1200,
        height: 630,
        alt: "First-time divers enjoying an introductory scuba dive at Netrani Island with Netrani Scuba Dive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intro Scuba Try Dive | Netrani Scuba Dive",
    description:
      "Beginner-friendly scuba diving try package at Netrani Island starting at ₹1,999 with 1:1 guidance and free HD media.",
    images: ["/images/group-divers.png"],
  },
};

export default function IntroScubaDiving() {
  const whyChoose = [
    {
      title: "Accessible Pricing",
      desc: "At ₹1,999 per person, this entry-level package allows first-time divers, students, and families to experience the Netrani reef without committing to a full excursion.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#2997FF] w-7 h-7"
        >
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
        </svg>
      ),
    },
    {
      title: "Comfortable & Reassuring",
      desc: "A gentle 10–15 minute guided dive at 5–8m depth is designed specifically to help nervous beginners and non-swimmers feel calm and confident underwater.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#2997FF] w-7 h-7"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
        </svg>
      ),
    },
    {
      title: "Identical Island Trip",
      desc: "You travel on the exact same boat route to Netrani Island, soak in the scenic coastal views, and explore the same crystal-clear Arabian Sea waters.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#2997FF] w-7 h-7"
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
      title: "Complimentary HD Media",
      desc: "High-resolution photos and underwater action videos are recorded and shared directly to your mobile at no additional charge.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#2997FF] w-7 h-7"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
    },
  ];

  const compare = [
    { name: "Cost", intro: "₹1,999", full: "₹3,500", highlight: true },
    { name: "Time Underwater", intro: "10-15 Mins", full: "30-40 Mins" },
    { name: "Depth", intro: "5-8 Meters", full: "Up to 12 Meters" },
    { name: "Boat Ride", intro: "Included", full: "Included" },
    { name: "Photos & Videos", intro: "Included", full: "Included" },
  ];

  const inclusions = [
    "Round-trip boat cruise to Netrani Island",
    "10–15 min 1:1 guided reef dive (5–8m depth)",
    "Dedicated certified instructor by your side",
    "Free HD underwater photos & video clips",
    "Surface snorkeling gear & life vest",
    "Complete sanitized scuba gear & wetsuit",
  ];

  const faqs = [
    {
      q: "Can I upgrade to the Full Netrani package later?",
      a: "Yes. If sea conditions and instructor scheduling allow on the day, you can comfortably upgrade to the 30–40 minute Full Netrani Dive by paying the remaining fare difference at our desk.",
    },
    {
      q: "Is this package safe for non-swimmers and first-timers?",
      a: "Yes. Non-swimmers can complete the Intro Dive with absolute confidence. Your personal certified instructor manages your buoyancy, depth, and movement throughout the dive while your BCD jacket provides natural flotation.",
    },
    {
      q: "Are group discounts available for families and student groups?",
      a: "Yes. For college groups, corporate outings, and family gatherings with 10 or more participants, we provide custom scheduling and group packages. Reach out via phone or WhatsApp to coordinate.",
    },
    {
      q: "What is the total duration of the trip?",
      a: "The activity is structured as a comprehensive morning sea expedition. Reporting begins around 8:00 AM, followed by the boat cruise to Netrani, guided dive turns, surface snorkeling, and a return to Murudeshwar beach by early afternoon.",
    },
    {
      q: "How deep will I go during the Intro Try Dive?",
      a: "The Intro Try Dive reaches a comfortable depth of 5 to 8 metres. At this level, natural sunlight penetrates clearly, illuminating vibrant coral heads and schooling reef fish with minimal water pressure.",
    },
    {
      q: "What if I feel nervous or want to surface during the dive?",
      a: "Your instructor is holding your harness 1-on-1 throughout the session. If you feel any discomfort or simply want to pause, give the thumbs-up hand signal and your instructor will gently guide you to the calm surface within seconds.",
    },
    {
      q: "How do I equalize ear pressure underwater?",
      a: "During the shallow-water briefing, your instructor teaches you the simple Valsalva technique: gently pinch your nostrils closed and exhale softly through your nose. This equalizes your middle ears smoothly as you descend.",
    },
    {
      q: "Is there a safe place to store luggage and valuables?",
      a: "Yes. You can store heavy bags in our secure shore reporting facility, or keep your personal day items in dry compartments provided aboard our dive boat.",
    },
    {
      q: "What are the medical considerations for the Intro Dive?",
      a: "Participants should be in normal health. Conditions such as untreated heart issues, severe asthma requiring continuous medication, epilepsy, recent major surgeries, or pregnancy preclude scuba diving for safety.",
    },
  ];

  const guides = [
    {
      title: "Netrani Scuba Rates & Cost Breakdown (2026)",
      desc: "Transparent breakdown of Murudeshwar scuba diving fees, gear rentals, and package inclusions.",
      href: "/blog/murudeshwar-scuba-diving-price-cost",
      label: "Rate Breakdown",
    },
    {
      title: "Diver Eligibility & Medical Standards",
      desc: "Clear age eligibility, medical criteria, and health recommendations for diving at Netrani Island.",
      href: "/blog/scuba-diving-age-limit",
      label: "Participation Rules",
    },
    {
      title: "Peak Diving Months & Sea Visibility",
      desc: "Seasonal weather and sea visibility breakdown for Murudeshwar, with monsoon closure timelines.",
      href: "/blog/best-time-scuba-diving-murudeshwar",
      label: "Seasonal Calendar",
    },
    {
      title: "Excursion Schedule & Boat Timings",
      desc: "Reporting times, boat departure slots, dive rotation schedules, and return timings.",
      href: "/blog/scuba-diving-timings",
      label: "Daily Timetable",
    },
    {
      title: "Bangalore to Murudeshwar Travel Plan",
      desc: "Optimal road, bus, and train travel routes for weekend scuba excursions from Bangalore.",
      href: "/blog/murudeshwar-scuba-diving-from-bangalore",
      label: "Route Advice",
    },
    {
      title: "How to Reach Murudeshwar Beach",
      desc: "Step-by-step travel directions via Konkan Railway, NH 66, and nearest coastal airports.",
      href: "/how-to-reach-murudeshwar",
      label: "Transit Map",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.murudeshwarscubadive.in/intro-scuba-diving/#service",
      "name": "Intro Scuba Try Dive Package",
      "serviceType": "Beginner Scuba Diving Experience",
      "image": "https://www.murudeshwarscubadive.in/images/group-divers.png",
      "description": "Try scuba diving at Netrani Island with Netrani Scuba Dive. Perfect entry package for beginners and non-swimmers. Includes 1:1 instructor guidance, gear rental, and free HD photos & videos.",
      "provider": {
        "@type": "SportsActivityLocation",
        "name": "Netrani Scuba Dive",
        "url": "https://www.murudeshwarscubadive.in",
        "telephone": "+917406329777",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Temple Main Road, Murudeshwar Beach",
          "addressLocality": "Murudeshwar",
          "addressRegion": "Karnataka",
          "postalCode": "581350",
          "addressCountry": "IN"
        }
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Murudeshwar, Karnataka, India"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.murudeshwarscubadive.in/intro-scuba-diving",
        "priceCurrency": "INR",
        "price": "1999",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock"
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
          "name": "Intro Scuba Try Dive",
          "item": "https://www.murudeshwarscubadive.in/intro-scuba-diving"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <main className="bg-[#ffffff] min-h-screen text-black font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section — Full-bleed Sea Blue (#bfe5ff) Canvas with Animated Ribbon & Stickers */}
      <section className="relative w-full bg-[#bfe5ff] pt-40 md:pt-48 pb-24 border-b border-black overflow-hidden">
        {/* Animated 3D Ribbon Motif */}
        <InflatableRibbon variant="loop" className="-top-10 -right-24 w-[500px] h-[340px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

        {/* Floating Playful Stickers */}
        <div className="absolute top-28 left-8 md:left-24 z-10 hidden sm:block animate-float-slow">
          <DiverMaskSticker className="w-16 h-16 md:w-20 md:h-20" label="TRY DIVE" />
        </div>
        <div className="absolute bottom-16 right-12 md:right-32 z-10 hidden sm:block animate-float-reverse">
          <StarfishSticker className="w-14 h-14 md:w-16 md:h-16" label="BEGINNER" />
        </div>
        <div className="absolute top-48 right-1/3 z-10 hidden lg:block animate-float-fast">
          <DepthSticker depth="8M" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black border border-black text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>First-Time Diver Special</span>
          </div>

          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-black uppercase tracking-tight leading-[0.78] max-w-5xl">
            Intro Scuba <br />
            <span className="bg-[#ffd731] px-3.5 py-1 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              (Try Dive).
            </span>
          </h1>

          {/* Price Module — White Pill with 1px Black Border */}
          <div className="inline-flex flex-wrap items-center gap-4 p-4 px-8 bg-white border border-black rounded-full shadow-[4px_4px_0px_#000000]">
            <p className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">₹1,999</p>
            <p className="text-neutral-500 line-through font-bold text-2xl">₹3,000</p>
            <span className="px-3.5 py-1 bg-[#55db9c] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">
              per person
            </span>
          </div>

          <p className="text-black/90 max-w-2xl text-base md:text-lg font-medium leading-relaxed">
            The ideal beginner-friendly <strong className="text-black font-bold">scuba diving package with Netrani Scuba Dive</strong>. Includes scenic Netrani Island boat transit, dedicated 1:1 certified instructor guidance, shallow reef exploration, and complimentary HD media.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="tel:+917406329777"
              className="slush-btn-black text-xs md:text-sm px-8 py-3.5 shadow-[4px_4px_0px_#000000]"
            >
              <span>Book Intro Slot (+91 74063 29777)</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </a>
            <a
              href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20Intro%20Scuba%20Try%20Dive%20(%E2%82%B91%2C999).%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="slush-pill-btn bg-white hover:bg-[#55db9c] text-black text-xs md:text-sm px-8 py-3.5"
            >
              <span>WhatsApp Us</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="space-y-0 relative z-10">
        {/* About Intro Scuba — Paper White (#ffffff) Section */}
        <section className="bg-white text-black py-20 border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-8">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#dceeff] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">Introduction</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                About Intro Scuba
              </h2>
            </div>
            <div className="text-neutral-800 text-base md:text-lg leading-relaxed space-y-6 font-medium max-w-4xl">
              <p>
                The <strong className="text-black font-bold bg-[#ffd731] px-2 py-0.5 border border-black rounded">Intro Scuba (Try Dive)</strong> is specifically designed for first-time adventurers, non-swimmers, families, and travelers who want to explore Netrani Island&apos;s marine beauty without committing to a longer, deeper dive on day one.
              </p>
              <p>
                You experience the complete coastal sea journey—including the 19-kilometer boat crossing across the Arabian Sea, comprehensive equipment briefing, and certified gear rental. Your underwater session provides 10 to 15 minutes of bottom time at an easy, sun-drenched depth of 5 to 8 meters, where healthy coral gardens and curious fish thrive.
              </p>
              <p>
                With your personal Netrani Scuba Dive instructor holding your harness throughout the dive, you can breathe calmly, enjoy the feeling of weightlessness, and take your first memorable steps into the underwater world.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Grid — Sea Blue (#bfe5ff) Ground */}
        <section className="bg-[#bfe5ff] text-black py-20 md:py-28 border-b border-black relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black shadow-[3px_3px_0px_#000000]">Highlights</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                Why Choose This Package?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 border border-black rounded-[28px] space-y-3 transition-colors hover:bg-[#dceeff]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 bg-[#ffd731] border border-black rounded-full flex items-center justify-center shrink-0 text-black">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">{item.title}</h3>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Compare Table — Paper White (#ffffff) Section */}
        <section className="bg-white text-black py-20 border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#e9ccff] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">Comparison</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                Quick Compare
              </h2>
            </div>
            <div className="overflow-x-auto border border-black bg-white rounded-[28px] p-4 md:p-6">
              <table className="w-full text-left min-w-[500px]">
                <thead className="border-b border-black text-xs uppercase tracking-[0.032em] font-bold text-black">
                  <tr>
                    <th className="p-4 md:p-5">Feature</th>
                    <th className="p-4 md:p-5 text-black bg-[#ffd731] rounded-2xl border border-black">
                      Intro Dive
                    </th>
                    <th className="p-4 md:p-5 text-neutral-600">
                      Full Dive
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 text-black text-sm md:text-base font-medium">
                  {compare.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#dceeff]/40 transition-colors">
                      <td className="p-4 md:p-5 font-bold text-black">
                        {row.name}
                      </td>
                      <td
                        className={`p-4 md:p-5 bg-[#ffd731]/20 text-black ${
                          row.highlight ? "font-bold text-lg text-[#fb4903]" : ""
                        }`}
                      >
                        {row.intro}
                      </td>
                      <td className="p-4 md:p-5 text-neutral-600 font-medium">
                        {row.full}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* You Get Checklist — Sea Blue (#bfe5ff) Section */}
        <section className="bg-[#bfe5ff] text-black py-20 md:py-28 border-b border-black relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black shadow-[3px_3px_0px_#000000]">Everything Included</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                What&apos;s Included
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inclusions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 bg-white border border-black rounded-[24px] transition-all hover:bg-[#e9ccff] shadow-[3px_3px_0px_#000000] hover:-translate-y-1"
                >
                  <div className="w-9 h-9 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-black shrink-0 font-bold">
                    ✓
                  </div>
                  <span className="text-sm md:text-base font-bold text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs — Paper White (#ffffff) Section */}
        <section className="bg-white text-black py-20 border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-8">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#55db9c] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">Answers</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-black rounded-[24px] overflow-hidden transition-colors hover:border-black"
                >
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-base md:text-lg text-black select-none">
                    <span className="pr-4">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-[#55db9c] text-black flex items-center justify-center font-bold group-[open]:rotate-180 transition-transform text-xs shrink-0 border border-black">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-neutral-700 text-sm md:text-base leading-relaxed border-t border-black/20 pt-4 font-medium">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Billboard — Sea Blue (#bfe5ff) Ground with Tactile Card */}
        <section className="bg-[#bfe5ff] text-black py-20 md:py-28 border-b border-black relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="p-8 md:p-14 bg-white border border-black rounded-[36px] text-center space-y-8 shadow-[6px_6px_0px_#000000]">
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold text-black uppercase tracking-tight leading-[0.78]">
                Start Your Diving Journey
              </h2>
              <p className="text-base md:text-lg text-neutral-800 max-w-xl mx-auto leading-relaxed font-medium">
                Experience the magic of Netrani Island for just ₹1,999. Reserve your morning slot with an advance deposit of ₹500 per diver.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+917406329777"
                  className="slush-btn-black text-xs md:text-sm px-10 py-4 inline-flex"
                >
                  <span>Call to Book Now (+91 74063 29777)</span>
                  <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
                </a>
              </div>
              <p className="text-black text-xs font-bold tracking-[0.032em] uppercase">
                Immediate confirmation • Pay ₹500 advance to block seat
              </p>
            </div>
          </div>
        </section>

        {/* Plan Local Guides Grid — Paper White (#ffffff) Section */}
        <section className="bg-white text-black py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#ffd731] text-black border border-black font-bold text-xs uppercase tracking-[0.032em] rounded-full">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                Knowledge Base
              </div>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                Murudeshwar Scuba Guides &amp; Travel Advice
              </h2>
              <p className="text-neutral-700 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
                Authoritative local resources providing verified answers on <strong className="text-black font-bold">package prices</strong>, <strong className="text-black font-bold">age eligibility</strong>, <strong className="text-black font-bold">boat schedules</strong>, travel routes, and underwater safety for your 2026 trip.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, idx) => (
                <Link
                  key={idx}
                  className="group bg-white border border-black rounded-[28px] p-7 transition-colors hover:bg-[#dceeff] flex flex-col justify-between"
                  href={guide.href}
                >
                  <div className="space-y-3 mb-6">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.032em] px-3 py-1 bg-[#e9ccff] text-black rounded-full border border-black">
                      {guide.label}
                    </span>
                    <h3 className="text-lg font-bold text-black group-hover:underline transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-neutral-700 text-xs leading-relaxed font-medium">
                      {guide.desc}
                    </p>
                  </div>
                  <span className="text-black text-xs font-bold flex items-center justify-between pt-3 border-t border-black/20">
                    <span>Read Guide</span> <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
