import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
  DepthSticker,
  CheckmarkSticker,
  IslandPinSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Netrani Island Scuba Diving with Netrani Scuba Dive: Package & Price (₹3,500)",
  description:
    "Book the full Netrani Island scuba diving experience with Netrani Scuba Dive for ₹3,500. Includes 30–40 min reef dive, 1:1 certified instructor, boat trip, gear, and free HD media.",
  keywords: [
    "Netrani Island scuba diving",
    "Netrani Scuba Dive",
    "Scuba diving in Murudeshwar",
    "Netrani Island diving",
    "Scuba diving near Netrani Island",
    "netrani scuba diving",
    "netrani scuba package",
    "murudeshwara netrani scuba diving",
    "netrani scuba diving price",
    "netrani island booking",
    "padi scuba netrani island",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
  },
  openGraph: {
    title: "Netrani Island Scuba Diving with Netrani Scuba Dive: Package & Price (₹3,500)",
    description:
      "Book the full Netrani Island scuba diving experience with Netrani Scuba Dive for ₹3,500. Includes 30–40 min reef dive, 1:1 certified instructor, boat trip, gear, and free HD media.",
    url: "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/netrani-diver.png",
        width: 1200,
        height: 630,
        alt: "Scuba diver exploring vibrant coral reef ecosystem at Netrani Island with Netrani Scuba Dive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Diving Package | Netrani Scuba Dive",
    description:
      "Complete Netrani Island scuba diving packages. Official price starting at ₹3,500 with gear, 1:1 instructor, and HD photos included.",
    images: ["/images/netrani-diver.png"],
  },
};

export default function NetraniScubaDiving() {
  const features = [
    {
      title: "Scenic Boat Crossing",
      desc: "Around 60–75 min coastal voyage each way from Murudeshwar beach past the Shiva statue.",
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
          className="w-7 h-7 text-[#2997FF] flex-shrink-0"
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
      title: "30–40 Min Dive",
      desc: "Extended bottom time reaching depths up to 12 metres across thriving coral reef formations.",
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
          className="w-7 h-7 text-[#2997FF] flex-shrink-0"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "1:1 Certified Instructor",
      desc: "Personal certified dive professional by your side through briefing, descent, dive, and return.",
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
          className="w-7 h-7 text-[#2997FF] flex-shrink-0"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Complimentary HD Media",
      desc: "High-definition underwater photographs and action video clips included at no extra charge.",
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
          className="w-7 h-7 text-[#2997FF] flex-shrink-0"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Surface Snorkeling",
      desc: "Complimentary snorkeling gear to explore surface reef life while waiting on the boat.",
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
          className="w-7 h-7 text-[#2997FF] flex-shrink-0"
        >
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Full Equipment Rental",
      desc: "Sanitized wetsuit, silicone mask, snorkel, fins, regulator, and BCD buoyancy jacket provided.",
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
          className="w-7 h-7 text-[#2997FF] flex-shrink-0"
        >
          <path d="M12 6v16"></path>
          <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path>
          <path d="M9 11h6"></path>
          <circle cx="12" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ];

  const timeline = [
    {
      time: "8:00 AM – 8:30 AM",
      title: "Reporting & Safety Briefing",
      desc: "Meet our Netrani Scuba Dive team near Murudeshwar Temple Beach, verify booking confirmation, fill medical declarations, and get fitted with sanitized gear.",
      highlight: true,
    },
    {
      time: "8:30 AM – 9:45 AM",
      title: "Boat Departure for Netrani",
      desc: "Board the licensed dive boat for a 19 km cruise across the Arabian Sea, enjoying panoramic coastline vistas and frequent dolphin sightings.",
    },
    {
      time: "9:45 AM – 10:15 AM",
      title: "Shallow Skills & Breathing Practice",
      desc: "Anchor in Netrani's sheltered bay. Learn regulator breathing, mask equalization, and underwater hand communications in calm surface waters.",
    },
    {
      time: "10:15 AM – 1:30 PM",
      title: "Guided Coral Reef Dive",
      desc: "Descend 1-on-1 with your personal instructor for 30–40 minutes of reef exploration. Relax on the boat, have refreshments, or snorkel between dive turns.",
    },
    {
      time: "1:30 PM – 2:30 PM",
      title: "Return Boat Journey",
      desc: "Cruising back toward the Murudeshwar shoreline. Review your dive experience, unwind under the sun canopy, and prepare for shore arrival.",
    },
    {
      time: "2:30 PM – 3:00 PM",
      title: "Shore Arrival & Media Transfer",
      desc: "Disembark at Murudeshwar beach and receive your high-resolution underwater photos and HD video clips directly to your smartphone.",
      highlight: true,
    },
  ];

  const faqs = [
    {
      q: "Is this the official Netrani scuba diving package in Murudeshwar?",
      a: "Yes. This is our comprehensive Netrani Island diving expedition departing directly from Murudeshwar beach with Netrani Scuba Dive. It features dedicated 1:1 certified instructor guidance, full boat transit, premium equipment, extended bottom time, and free HD media.",
    },
    {
      q: "Is it safe for beginners and first-timers?",
      a: "Yes. Every beginner diver is paired individually with a certified dive instructor throughout the entire dive. You receive a thorough theory and shallow-water briefing before entering the water, and your instructor maintains physical contact to regulate buoyancy and depth.",
    },
    {
      q: "What is the eligible age limit for scuba diving at Netrani?",
      a: "Participants must be at least 10 years old, with general medical fitness up to age 60. Children under 10 are welcome on the boat under parental supervision to enjoy snorkeling and dolphin watching, but cannot dive with scuba cylinders.",
    },
    {
      q: "Can I dive if I wear spectacles or prescription glasses?",
      a: "Standard eyeglasses cannot be worn inside a scuba mask as they prevent a watertight seal. Soft contact lenses are completely safe and widely used during diving. Guests with mild vision corrections can comfortably dive without corrective lenses due to natural underwater magnification.",
    },
    {
      q: "What happens if weather or sea conditions are unfavorable?",
      a: "Diver safety is our paramount priority. If port or coastal authorities issue weather alerts or sea swells exceed safe operational limits, the boat trip is cancelled. Guests receive a 100% full refund or the option to reschedule to another date with zero penalties.",
    },
    {
      q: "Can I bring my mobile phone and personal action camera on the boat?",
      a: "Yes, you can bring mobile devices and action cameras. We recommend keeping phones in waterproof pouches or dry bags. You are also welcome to carry your personal GoPro or action camera with waterproof housing on your dive.",
    },
    {
      q: "How far is Netrani Island from Murudeshwar Beach and how long is the boat ride?",
      a: "Netrani Island is situated approximately 19 km off the Murudeshwar coast in the open Arabian Sea. The scenic cruise takes roughly 60 to 75 minutes each way, offering views of the famous 123-foot Shiva statue and coastal horizons.",
    },
    {
      q: "What marine life can I expect to see underwater at Netrani Island?",
      a: "Netrani's rocky coral reef hosts rich marine biodiversity, including parrotfish, butterflyfish, clownfish, angelfish, honeycomb moray eels, barracudas, stingrays, and occasional sea turtles or coral reef sharks.",
    },
    {
      q: "Do you provide all the scuba gear and safety equipment on the boat?",
      a: "Yes. We supply complete, well-maintained equipment including neoprene wetsuits, silicone dive masks, BCD buoyancy jackets, balanced regulators, filled scuba cylinders, fins, and marine life jackets.",
    },
    {
      q: "What is the difference between the Full Netrani Dive (₹3,500) and the VIP Extended Experience (₹4,500)?",
      a: "The Full Netrani Dive gives you 30–40 minutes of bottom time reaching up to 12m depth with 1:1 certified instructor guidance. The VIP Extended Experience provides 45 to 55 minutes of deep reef bottom time (up to 12m), 1:1 certified divemaster, surface snorkeling, fresh fruits & refreshments on board, sanitized premium gear, and complimentary HD photos & videos.",
    },
    {
      q: "Are underwater photos and videos really free with this package?",
      a: "Yes. Your instructor records high-resolution underwater photos and HD video clips during your dive session using action cameras. These files are transferred directly to your smartphone on the same day at zero extra cost.",
    },
    {
      q: "How does the ₹500 advance slot booking work?",
      a: "To reserve your boat seat and allocate your dedicated 1:1 certified instructor, you pay a nominal advance deposit of ₹500 per person online. The remaining balance is paid conveniently in cash or via UPI during morning check-in at Murudeshwar.",
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
      "@id": "https://www.murudeshwarscubadive.in/netrani-scuba-diving/#service",
      "name": "Netrani Island Scuba Diving Package",
      "serviceType": "Scuba Diving Excursion",
      "image": "https://www.murudeshwarscubadive.in/images/netrani-diver.png",
      "description": "Full Netrani Island scuba diving experience with Netrani Scuba Dive. Includes scenic boat crossing, 30-40 mins dive time, gear rental, PADI instructor guidance, and free HD photos & videos.",
      "provider": {
        "@type": "SportsActivityLocation",
        "name": "Netrani Scuba Dive",
        "url": "https://www.murudeshwarscubadive.in",
        "telephone": "+917829975777",
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
        "url": "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
        "priceCurrency": "INR",
        "price": "3500",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": "Netrani Island Scuba Diving Day Trip",
      "description": "Full day sea excursion to Netrani Island with 1:1 guided scuba diving, snorkeling, and underwater photography.",
      "touristType": ["Beginner Divers", "Certified Divers", "Adventure Travelers"],
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": timeline.length,
        "itemListElement": timeline.map((step, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": step.title,
          "description": step.desc
        }))
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
          "name": "Netrani Scuba Diving",
          "item": "https://www.murudeshwarscubadive.in/netrani-scuba-diving"
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

      {/* Hero Banner Section — Full-bleed Sea Blue (#bfe5ff) Canvas with Animated 3D Ribbon & Stickers */}
      <section className="relative w-full bg-[#bfe5ff] pt-40 md:pt-48 pb-24 border-b border-black overflow-hidden">
        {/* Animated 3D Ribbon Motif */}
        <InflatableRibbon variant="wave" className="-top-12 -left-20 w-[550px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

        {/* Floating Playful Stickers */}
        <div className="absolute top-28 right-8 md:right-24 z-10 hidden sm:block animate-float-slow">
          <DiverMaskSticker className="w-16 h-16 md:w-20 md:h-20" label="PADI 12M" />
        </div>
        <div className="absolute bottom-16 right-12 md:right-40 z-10 hidden sm:block animate-float-reverse">
          <TankSticker className="w-14 h-14 md:w-16 md:h-16" label="FULL DIVE" />
        </div>
        <div className="absolute top-44 left-1/2 ml-44 z-10 hidden lg:block animate-float-fast">
          <DepthSticker depth="12M" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black border border-black text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Signature Ocean Experience</span>
          </div>

          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-black uppercase tracking-tight leading-[0.78] max-w-5xl">
            Netrani Island <br />
            <span className="bg-[#ffd731] px-3.5 py-1 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              Deep Reef Dive.
            </span>
          </h1>

          {/* Price Module — White Pill with 1px Black Border */}
          <div className="inline-flex flex-wrap items-center gap-4 p-4 px-8 bg-white border border-black rounded-full shadow-[4px_4px_0px_#000000]">
            <p className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">₹3,500</p>
            <p className="text-neutral-500 line-through font-bold text-2xl">₹4,500</p>
            <span className="px-3.5 py-1 bg-[#55db9c] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">
              per person
            </span>
          </div>

          <p className="text-black/90 max-w-2xl text-base md:text-lg font-medium leading-relaxed">
            Immerse yourself in Karnataka&apos;s most celebrated marine ecosystem with 30 to 40 minutes of bottom time, dedicated 1:1 instructor guidance, full equipment, and complimentary HD media with <strong className="text-black font-bold">Netrani Scuba Dive</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="tel:+917829975777"
              className="slush-btn-black text-xs md:text-sm px-8 py-3.5 shadow-[4px_4px_0px_#000000]"
            >
              <span>Book Dive Slot (+91 78299 75777)</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </a>
            <a
              href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20Netrani%20Island%20Scuba%20Diving%20(%E2%82%B93%2C500).%20Please%20share%20details."
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
        {/* About the Dive — Paper White (#ffffff) Section */}
        <section className="bg-white text-black py-20 border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-8">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#dceeff] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">Overview</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                About The Dive
              </h2>
            </div>
            <div className="text-neutral-800 text-base md:text-lg leading-relaxed space-y-6 font-medium max-w-4xl">
              <p>
                Netrani Island—often referred to as Pigeon Island—is an uninhabited oceanic sanctuary located 19 kilometers off the Murudeshwar coastline. Rising from the Arabian Sea, its surrounding waters feature vibrant coral reef gardens, dramatic rock pinnacles, and rich marine biodiversity.
              </p>
              <p>
                Our Netrani Island Scuba Diving package is crafted for adventure seekers, couples, families, and first-time explorers who desire a complete underwater journey. From licensed boat transit and international-standard gear to personalized 1-on-1 instructor support throughout your dive, every detail is organized to ensure comfort, enjoyment, and complete peace of mind.
              </p>
              <p>
                Whether you wish to glide alongside schools of butterflyfish and triggerfish or experience the tranquil sensation of neutral buoyancy beneath the surface, this full excursion delivers generous underwater time and crystal-clear memories.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-4 text-xs font-bold max-w-4xl">
              <Link
                href="/blog/murudeshwar-scuba-diving-price-cost"
                className="p-4 bg-white border border-black rounded-full text-black hover:bg-[#ffd731] transition-colors flex items-center justify-between"
              >
                <span>Murudeshwar scuba diving price guide</span> <span className="font-bold text-black">→</span>
              </Link>
              <Link
                href="/blog/scuba-diving-timings"
                className="p-4 bg-white border border-black rounded-full text-black hover:bg-[#ffd731] transition-colors flex items-center justify-between"
              >
                <span>Netrani boat timings and schedule</span> <span className="font-bold text-black">→</span>
              </Link>
              <Link
                href="/blog/scuba-diving-age-limit"
                className="p-4 bg-white border border-black rounded-full text-black hover:bg-[#ffd731] transition-colors flex items-center justify-between"
              >
                <span>Scuba age limit and medical rules</span> <span className="font-bold text-black">→</span>
              </Link>
              <Link
                href="/blog/best-time-scuba-diving-murudeshwar"
                className="p-4 bg-white border border-black rounded-full text-black hover:bg-[#ffd731] transition-colors flex items-center justify-between"
              >
                <span>Best season for Netrani scuba</span> <span className="font-bold text-black">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* No Swimming Needed — Sea Blue (#bfe5ff) Ground with Tactile Card */}
        <section className="bg-[#bfe5ff] text-black py-20 md:py-28 border-b border-black relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="bg-white border border-black rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#55db9c] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  Zero Swimming Experience Required
                </div>
                <h3 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold text-black uppercase tracking-tight leading-[0.78]">
                  No Swimming Needed
                </h3>
                <div className="text-neutral-800 text-base md:text-lg leading-relaxed space-y-4 font-medium">
                  <p>
                    A common question from first-time visitors is: <em className="text-black italic font-bold">&quot;Can I do scuba diving if I don&apos;t know how to swim?&quot;</em>
                  </p>
                  <p>
                    The reassuring answer is: <strong className="text-black font-bold bg-[#ffd731] px-2 py-0.5 border border-black rounded">Absolutely, yes.</strong> Scuba diving does not require swimming skills or treading water. You stay effortlessly afloat on the surface wearing your BCD (Buoyancy Control Device) jacket. Underwater, your certified instructor holds your harness, managing your buoyancy, depth, and direction while you simply relax and breathe naturally through your regulator.
                  </p>
                  <p className="border-l-4 border-black pl-4 font-bold text-black bg-[#e9ccff] py-2.5 rounded-r-xl">
                    Over 70% of our daily participants with Netrani Scuba Dive are first-time non-swimmers who have an unforgettable, secure experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Grid — Paper White (#ffffff) Section */}
        <section className="bg-white text-black py-20 border-b border-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-[#e9ccff] text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black">Inclusions</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                What You Get
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-5 p-7 bg-white border border-black rounded-[28px] transition-colors hover:bg-[#dceeff]"
                >
                  <div className="w-14 h-14 bg-[#ffd731] border border-black rounded-full flex items-center justify-center shrink-0 text-black">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-black text-xl">{item.title}</h4>
                    <p className="text-neutral-700 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section — Sea Blue (#bfe5ff) Section */}
        <section className="bg-[#bfe5ff] text-black py-20 md:py-28 border-b border-black relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-10">
            <div className="space-y-3">
              <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] rounded-full border border-black shadow-[3px_3px_0px_#000000]">Itinerary</span>
              <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.78] text-black">
                How The Day Usually Flows
              </h2>
              <p className="text-black font-medium bg-white p-4 rounded-full border border-black inline-block text-sm shadow-[3px_3px_0px_#000000]">
                Need exact timings for your date? Use the dedicated{" "}
                <Link
                  href="/blog/scuba-diving-timings"
                  className="text-black underline font-bold hover:text-[#fb4903] transition-colors"
                >
                  Murudeshwar scuba timings guide
                </Link>
                . This section only shows the usual package flow.
              </p>
            </div>
            
            <div className="space-y-4">
              {timeline.map((step, idx) => (
                <div 
                  key={idx} 
                  className="p-7 border border-black bg-white rounded-[28px] transition-colors hover:bg-[#e9ccff]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold tracking-[0.032em] uppercase px-3.5 py-1 bg-[#ffd731] text-black rounded-full border border-black">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-medium text-neutral-700">
                    {step.desc}
                  </p>
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
                Ready for Your Netrani Expedition?
              </h2>
              <p className="text-base md:text-lg text-neutral-800 max-w-xl mx-auto leading-relaxed font-medium">
                Slots are limited each morning to maintain dedicated 1:1 instructor attention and uncrowded boat rotations. Lock in your dive date with an advance deposit of ₹500 per diver.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+917829975777"
                  className="slush-btn-black text-xs md:text-sm px-10 py-4 inline-flex"
                >
                  <span>Call to Book Now (+91 78299 75777)</span>
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
