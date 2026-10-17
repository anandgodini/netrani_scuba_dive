import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  InflatableRibbon,
  CheckmarkSticker,
} from "@/components/SlushElements";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";
import LiveDepthHUD from "@/components/motion/LiveDepthHUD";
import BackToSurfaceButton from "@/components/motion/BackToSurfaceButton";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import ParallaxRibbon from "@/components/motion/ParallaxRibbon";
import ParallaxBubbles from "@/components/motion/ParallaxBubbles";
import HeroParallaxHeadline from "@/components/motion/HeroParallaxHeadline";
import BookingSection from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Netrani Scuba Dive | Packages & Netrani Island Dive Booking",
  description:
    "Experience scuba diving at Netrani Island with Netrani Scuba Dive. Transparent packages from ₹3,500, beginner & non-swimmer guidance, sanitized gear, and free HD underwater photos.",
  keywords: [
    "Netrani Scuba Dive",
    "Netrani Island scuba diving",
    "Scuba diving in Murudeshwar",
    "Murudeshwara scuba dive",
    "Best scuba diving in Murudeshwar",
    "Netrani Island diving",
    "Scuba diving near Netrani Island",
    "Beginner scuba diving in Murudeshwar",
    "Scuba diving packages in Murudeshwar",
    "murudeshwara scuba diving",
    "scuba diving in murudeshwara",
    "netrani scuba diving",
    "netrani island murudeshwar",
    "murudeshwara netrani scuba diving",
    "murudeshwar scuba diving price",
    "scuba diving for non swimmers",
    "pigeon island scuba diving",
    "scuba diving in karnataka",
    "best scuba diving in karnataka",
    "murudeshwar beach scuba diving",
    "netrani scuba packages",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in",
  },
  openGraph: {
    title: "Netrani Scuba Dive | Packages & Netrani Island Dive Booking",
    description:
      "Experience scuba diving at Netrani Island with Netrani Scuba Dive. Transparent packages from ₹3,500, beginner & non-swimmer guidance, sanitized gear, and free HD underwater photos.",
    url: "https://www.murudeshwarscubadive.in",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/colorblock/hero-diver.jpg",
        width: 1200,
        height: 630,
        alt: "Netrani Scuba Dive certified scuba diving adventures at Netrani Island reef",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Dive | Packages & Netrani Island Booking",
    description:
      "Discover scuba diving at Netrani Island with packages from ₹3,500. Certified instructors, full gear, and free HD underwater photos.",
    images: ["/images/colorblock/hero-diver.jpg"],
  },
};

export default function Home() {
  const faqs = [
    {
      q: "How much does scuba diving cost at Netrani Island per person?",
      a: "Netrani Scuba Dive package prices start at ₹3,500 for the Netrani Island Deep Reef Dive (30–40 minutes underwater) and ₹4,500 for the VIP Extended Experience (45–55 minutes underwater). Both packages include the scenic boat cruise to Netrani Island, full gear rental, personal 1:1 certified divemaster guidance, surface snorkeling, and complimentary HD photos and videos.",
      link: "/blog/murudeshwar-scuba-diving-price-cost",
      linkText: "View Complete Pricing Guide ->",
    },
    {
      q: "Which months offer the clearest underwater visibility in Murudeshwar?",
      a: "The ideal season for scuba diving in Murudeshwar is from October through May. During these months, the Arabian Sea is calm and water visibility around Netrani Island typically ranges between 15 and 30 metres. Scuba diving operations remain closed during the annual monsoon period from June to September for safety.",
      link: "/blog/best-time-scuba-diving-murudeshwar",
      linkText: "Inspect Seasonal Visibility Guide ->",
    },
    {
      q: "What are the minimum age criteria and health prerequisites for diving?",
      a: "Participants must be at least 10 years of age to dive. There is no upper age limit as long as you are medically fit. Guests with active asthma requiring regular inhalers, heart conditions, recent major surgery, or pregnancy should refrain from tank diving for safety reasons.",
      link: "/blog/scuba-diving-age-limit",
      linkText: "Review Age & Health Guide ->",
    },
    {
      q: "Can individuals who cannot swim still experience scuba diving in Murudeshwar?",
      a: "Yes, absolutely. Non-swimmers can comfortably participate in both the Netrani Island Deep Reef Dive and the VIP Extended Experience. You wear a buoyancy control jacket (BCD) that keeps you effortlessly floating on the surface, and your personal certified instructor holds onto you underwater throughout the entire dive.",
      link: "/blog/scuba-diving-murudeshwar-non-swimmers",
      linkText: "Read Non-Swimmer Diving Guide ->",
    },
    {
      q: "What is the daily schedule and boat departure time for Netrani Island?",
      a: "Boats depart daily between 8:00 AM and 9:00 AM from Murudeshwar beach. The boat journey to Netrani Island takes approximately 60 to 75 minutes. After dive rotations and surface snorkeling, the boat returns to Murudeshwar by 2:30 PM to 3:30 PM. Advance reservation is recommended.",
      link: "/blog/scuba-diving-timings",
      linkText: "Check Daily Schedule Guide ->",
    },
    {
      q: "Why is Netrani Island considered Karnataka's premier scuba diving destination?",
      a: "Netrani Island (also known as Pigeon Island) is a protected coral reef sanctuary located 19 km off Murudeshwar. Its crystal-clear waters and thriving marine ecosystem—home to butterflyfish, parrotfish, moray eels, stingrays, and sea turtles—make it the premier scuba diving destination in Karnataka.",
      link: "/blog/best-scuba-diving-netrani-island",
      linkText: "Compare Coastal Dive Sites ->",
    },
    {
      q: "How can I connect with your direct Murudeshwar dive coordinators?",
      a: "You can reach our Netrani Scuba Dive booking desk directly at +91 78299 75777 or message us on WhatsApp (+91 74063 29777). Our coordinators are local divers who provide immediate slot confirmations, boat reporting locations, and live sea condition reports.",
      link: "/blog/murudeshwar-scuba-diving-photos-videos",
      linkText: "View Live Photos & Videos ->",
    },
    {
      q: "What is the best way to travel to Murudeshwar from Bangalore or Mangalore?",
      a: "Murudeshwar is well connected via NH 66 and the Konkan Railway network. Overnight KSRTC and private sleeper buses operate daily from Bangalore (approx. 9–10 hours). Regular express trains stop at Murudeshwar Railway Station (MRDW), which is only 3 km from the beach. Mangalore Airport is 165 km to the south.",
      link: "/blog/murudeshwar-scuba-diving-from-bangalore",
      linkText: "Read Bangalore Route Itinerary ->",
    },
    {
      q: "Why are there different spelling variants like Murdeshwar or Murudeshwara?",
      a: "Both spellings refer to the same coastal town in Uttara Kannada, Karnataka (ಮುರುಡೇಶ್ವರ), also written as Murdeshwar, Murdeshvar, or Murudeshwara. Regardless of spelling variations in search, the boat departure point and Netrani Island diving experience are identical.",
      link: "/how-to-reach-murudeshwar",
      linkText: "Read Direction & Route Guide ->",
    },
    {
      q: "How far in advance should I book my scuba diving slot in Murudeshwar?",
      a: "We recommend reserving your slot 3 to 5 days ahead, particularly for weekends and holiday periods between October and January. A nominal advance deposit of ₹500 per person reserves your boat seat and guarantees your dedicated 1:1 instructor assignment.",
      link: "/blog/scuba-diving-booking-murudeshwar",
      linkText: "Read Booking & Deposit Guide ->",
    },
    {
      q: "What should I wear and pack for the Netrani Island boat trip?",
      a: "Pack comfortable swimwear or quick-drying t-shirt and shorts, a dry towel, a fresh change of clothes, sunglasses, sunscreen, and a waterproof bag for your smartphone. We provide clean neoprene wetsuits, dive masks, fins, and all certified scuba apparatus.",
      link: "/blog/beginner-scuba-diving-guide",
      linkText: "See Beginner Packing Checklist ->",
    },
    {
      q: "What happens if the sea is rough or the weather is bad?",
      a: "Guest safety is strictly prioritized in alignment with Indian Coast Guard advisories. If rough sea conditions or weather warnings prompt a trip cancellation, you receive a 100% full refund of your booking deposit or free rescheduling to any future date of your choice.",
      link: "/blog/murudeshwar-scuba-diving-safety",
      linkText: "Check Safety & Weather Policies ->",
    },
    {
      q: "Can family members or friends who don't want to dive join the boat?",
      a: "Yes! Non-diving companions, family members, or children can book a Non-Diver Boat Pass (₹1,500). They enjoy the scenic 19 km Arabian Sea cruise to Netrani Island, safety life jackets, and surface snorkeling gear over the shallow reef.",
      link: "/blog/murudeshwar-boating-price",
      linkText: "View Boating & Companion Prices ->",
    },
    {
      q: "Are underwater photos and videos included in the package price?",
      a: "Yes. High-definition underwater photos and action video clips captured by your instructor are included free of charge with both the ₹3,500 Netrani Deep Dive and ₹4,500 VIP Extended Experience. Media files are transferred directly to your mobile phone or shared via private cloud link on the same day.",
      link: "/blog/murudeshwar-scuba-diving-photos-videos",
      linkText: "Learn About Underwater Media ->",
    },
    {
      q: "Can I fly or travel to high altitudes immediately after scuba diving?",
      a: "In accordance with standard international PADI safety guidelines, divers should wait at least 12 to 18 hours after a single introductory dive and 24 hours after multiple dives before boarding an airplane or traveling to high-altitude hill stations (above 1,000 feet).",
      link: "/blog/scuba-diving-timings",
      linkText: "Read Safety Timings & Rest Guide ->",
    },
    {
      q: "Can I scuba dive if I wear spectacles or contact lenses?",
      a: "Standard spectacles cannot be worn inside a scuba mask because the frame breaks the watertight silicone seal. However, soft contact lenses are completely safe and comfortable to wear while diving. Underwater refraction also naturally magnifies objects by about 33%, allowing divers with mild correction to see distinctly without lenses.",
      link: "/blog/scuba-diving-age-limit",
      linkText: "Read Medical & Vision Guidelines ->",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": "https://www.murudeshwarscubadive.in/#location",
      "name": "Netrani Scuba Dive",
      "image": "https://www.murudeshwarscubadive.in/hero.webp",
      "telephone": "+917829975777",
      "email": "murudeshwar.scuba.dive@gmail.com",
      "url": "https://www.murudeshwarscubadive.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Temple Main Road, Murudeshwar Beach",
        "addressLocality": "Murudeshwar",
        "addressRegion": "Karnataka",
        "postalCode": "581350",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.0945,
        "longitude": 74.4844,
      },
      "priceRange": "₹1999 - ₹3500",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "08:00",
        "closes": "15:00",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Netrani Scuba Dive Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Netrani Island Deep Reef Dive",
              "description":
                "Full 30-40 minute scuba diving package at Netrani Island with boat transfer, 1:1 divemaster, gear, and free HD media.",
              "url": "https://www.murudeshwarscubadive.in/netrani-scuba-diving",
              "provider": {
                "@type": "SportsActivityLocation",
                "name": "Netrani Scuba Dive",
              },
            },
            "price": "3500",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP Extended Experience",
              "description":
                "VIP Extended Deep Dive with 45-55 minutes of deep reef bottom time at Netrani Island, 1:1 certified divemaster, boat cruise, gear, surface snorkeling, refreshments, and free HD media.",
              "url": "https://www.murudeshwarscubadive.in/intro-scuba-diving",
              "provider": {
                "@type": "SportsActivityLocation",
                "name": "Netrani Scuba Dive",
              },
            },
            "price": "4500",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.murudeshwarscubadive.in/#organization",
      "name": "Netrani Scuba Dive",
      "url": "https://www.murudeshwarscubadive.in",
      "logo": "https://www.murudeshwarscubadive.in/logo.png",
      "sameAs": ["https://www.instagram.com/murudeshwar_scuba_dive/"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-78299-75777",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.murudeshwarscubadive.in/#website",
      "url": "https://www.murudeshwarscubadive.in",
      "name": "Netrani Scuba Dive",
      "description":
        "Book scuba diving at Netrani Island with packages starting from ₹3,500.",
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
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#000000] relative font-sans overflow-x-hidden">
      {/* Live Depth HUD & Scroll Progress Bar */}
      <ScrollProgressBar />
      <LiveDepthHUD />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* SECTION 1: HERO SECTION — Sea Blue (#bfe5ff) Ground with Spacious Gaps, Lateral Display Type & Animated 3D Ribbon */}
      <section className="relative w-full min-h-[96dvh] bg-[#bfe5ff] overflow-hidden flex flex-col justify-between pt-40 md:pt-48 pb-20 md:pb-28 border-b border-black">
        {/* Subtle animated sea bubbles with scroll parallax */}
        <ParallaxBubbles />

        {/* 3D Electric Blue Inflatable Ribbon wrapping behind the text with scroll-linked wave */}
        <div className="absolute top-[28%] left-0 right-0 z-0 opacity-90 pointer-events-none">
          <ParallaxRibbon variant="wave" direction="left" speed={90} />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          {/* Sticker Badges Row with Smooth Entrance */}
          <ScrollReveal
            variant="fade-down"
            delay={0.05}
            className="flex flex-wrap items-center justify-center gap-3 mb-8 md:mb-10"
          >
            <span className="slush-sticker-badge bg-[#ffd731] text-black shadow-[2px_2px_0px_#000000] font-bold">
              <span className="text-black">★★★★★</span> 5,000+ Happy Customers
            </span>
            <span className="slush-sticker-badge bg-[#55db9c] text-black shadow-[2px_2px_0px_#000000]">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse-glow"></span>
              ★ Netrani Island Coral Sanctuary
            </span>
            <span className="slush-sticker-badge bg-[#e9ccff] text-black hidden sm:inline-flex shadow-[2px_2px_0px_#000000]">
              PADI Certified Guides
            </span>
            <span className="slush-sticker-badge bg-white text-black hidden md:inline-flex shadow-[2px_2px_0px_#000000]">
              October – May Diving Season
            </span>
          </ScrollReveal>

          {/* Enormous Crushed Lateral Headline with Parallax Floating Vinyl Stickers */}
          <HeroParallaxHeadline />

          {/* Tagline Subhead: Properly Spaced & Breathable */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <p className="slush-subheading max-w-3xl mx-auto mt-6 mb-8 text-black/90 font-medium leading-relaxed">
              <strong className="text-black font-bold">Netrani Scuba Dive</strong> invites you into Karnataka&apos;s breathtaking Arabian Sea coral reef at Netrani Island. Experience fully guided coral reef diving with{" "}
              <strong className="text-black font-bold">1:1 certified instructor assistance</strong>, transparent{" "}
              <strong className="text-black font-bold">package pricing</strong>, sanitized international gear, and complimentary high-definition photos &amp; videos.
            </p>
          </ScrollReveal>

          {/* Soft Highlight Sticker Chips with Proper Margin */}
          <ScrollReveal
            variant="fade-up"
            delay={0.22}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mb-10 md:mb-12"
          >
            <span className="px-4 py-2 rounded-full bg-white border border-black text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000] hover:bg-[#ffd731] transition-colors">
              Transparent Pricing from ₹3,500
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-black text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000] hover:bg-[#d8efff] transition-colors">
              Morning Boat Slots 8:00–9:00 AM
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-black text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000] hover:bg-[#e9ccff] transition-colors">
              Open to Ages 10 &amp; Above
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-black text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000] hover:bg-[#55db9c] transition-colors">
              Beginners &amp; Non-Swimmers Fully Guided
            </span>
          </ScrollReveal>

          {/* Action Triggers: Properly Spaced & Tactile Pop on Hover */}
          <ScrollReveal
            variant="fade-up"
            delay={0.3}
            className="flex flex-wrap items-center justify-center gap-4 mb-4"
          >
            <a
              href="#booking-form"
              className="slush-btn-black text-sm md:text-base px-9 py-4 shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000]"
            >
              <span>Book Your Slot</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] animate-pulse"></span>
            </a>

            <a
              href="tel:+917829975777"
              data-cta="call"
              className="slush-pill-btn bg-white text-black text-sm md:text-base px-8 py-4 shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:bg-[#ffd731]"
            >
              <span>Call Reservation</span>
              <span>📞</span>
            </a>

            <a
              href="https://wa.me/917829975777?text=I%20want%20to%20book%20Scuba%20Diving"
              target="_blank"
              rel="noopener noreferrer"
              className="slush-pill-btn bg-[#55db9c] text-black text-sm md:text-base px-8 py-4 shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:bg-[#45cb8c]"
            >
              <span>WhatsApp Booking</span>
              <span>💬</span>
            </a>

            <Link
              href="/netrani-scuba-diving"
              className="slush-pill-btn bg-white text-black text-sm md:text-base px-8 py-4 shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:bg-[#e9ccff]"
            >
              <span>Netrani Deep Dive (₹3,500)</span>
              <span>→</span>
            </Link>
          </ScrollReveal>

          {/* Mobile / Tablet 5,000+ Happy Customers Highlight */}
          <div className="md:hidden mt-6 inline-flex items-center gap-3 bg-white border border-black rounded-full px-5 py-2.5 shadow-[3px_3px_0px_#000000]">
            <div className="flex -space-x-1.5">
              <span className="w-6 h-6 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-[10px]">🤿</span>
              <span className="w-6 h-6 rounded-full bg-[#ffd731] border border-black flex items-center justify-center text-[10px]">⭐</span>
            </div>
            <div className="text-left leading-tight">
              <div className="text-[11px] font-extrabold text-black uppercase tracking-tight">
                5,000+ Happy Customers
              </div>
              <div className="text-[10px] text-black/70 font-semibold">
                Rated 4.9/5 by Netrani Divers
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Strip: High Contrast 1px Black Border White Pill Bar with Proper Margin */}
        <ScrollReveal
          variant="fade-up"
          delay={0.38}
          className="hidden md:block w-full z-20 mt-16 md:mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="bg-[#ffffff] border border-black rounded-[36px] p-5 px-10 flex items-center justify-between gap-6 shadow-[6px_6px_0px_#000000]">
              <div className="flex items-center gap-4">
                <div className="w-3.5 h-3.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></div>
                <div>
                  <h3 className="text-black text-sm font-bold tracking-tight uppercase">
                    Guided Netrani Island Diving &amp; Marine Coral Excursions
                  </h3>
                  <p className="text-xs text-black/75 font-medium">
                    Murudeshwar, Karnataka • 1:1 PADI Certified Guides • Sanitized Equipment
                  </p>
                </div>
              </div>

              {/* Prominent Hero Statistics Area: 5,000+ Happy Customers */}
              <div className="flex items-center gap-3 px-6 border-x border-black/20">
                <div className="flex -space-x-2">
                  <span className="w-9 h-9 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shadow-sm">🤿</span>
                  <span className="w-9 h-9 rounded-full bg-[#ffd731] border border-black flex items-center justify-center text-xs font-bold shadow-sm">🌊</span>
                  <span className="w-9 h-9 rounded-full bg-[#e9ccff] border border-black flex items-center justify-center text-xs font-bold shadow-sm">⭐</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-[#fb4903] text-xs font-bold">
                    ★★★★★ <span className="text-black font-extrabold text-sm ml-1">4.9/5</span>
                  </div>
                  <span className="text-black text-xs font-extrabold uppercase tracking-tight block">
                    5,000+ Happy Customers
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-black font-extrabold text-2xl tracking-tight">
                    <span className="text-xs font-bold text-black/60 mr-1.5 uppercase tracking-wider">
                      Starts at
                    </span>
                    ₹3,500
                  </span>
                  <span className="text-black/50 text-sm line-through font-bold">
                    ₹4,500
                  </span>
                </div>
                <a
                  href="#booking-form"
                  className="bg-black hover:bg-neutral-800 text-white text-xs font-bold py-3.5 px-7 rounded-full border border-black transition-all hover:scale-105 active:scale-95 uppercase tracking-[0.032em]"
                >
                  Book Your Slot ↓
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* DEDICATED BOOKING FORM SECTION — Immediately Below Hero Section */}
      <BookingSection />


      {/* SECTION 2: DEPTH PROFILE BAR — Paper White (#ffffff) Ground with 30px Sticker Cards */}
      <section className="py-20 md:py-24 bg-[#ffffff] text-[#000000] relative border-b border-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <ScrollReveal variant="fade-up" className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#ffd731] border border-black"></span>
              <span className="text-xs font-bold uppercase tracking-[0.032em] text-[#000000]">
                The Netrani Depth Profile
              </span>
            </div>
            <span className="text-xs text-black font-bold hidden sm:inline bg-[#bfe5ff] border border-black px-4 py-1 rounded-full uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000]">
              Arabian Sea Coral Sanctuary Exploration Zones
            </span>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.09}>
            <StaggerItem distance={36} className="h-full">
              <div className="bg-[#bfe5ff] border border-black p-7 rounded-[30px] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-3xl md:text-5xl font-extrabold font-lateral text-black tracking-tight block">0M</span>
                  <span className="text-xs font-bold text-black uppercase tracking-[0.032em] block mt-1">Surface Calm</span>
                </div>
                <p className="text-xs text-black/80 mt-2 font-medium leading-relaxed">Clear surface snorkeling &amp; calm offshore boat anchorage</p>
              </div>
            </StaggerItem>
            <StaggerItem distance={36} className="h-full">
              <div className="bg-[#55db9c] border border-black p-7 rounded-[30px] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-3xl md:text-5xl font-extrabold font-lateral text-black tracking-tight block">5M - 8M</span>
                  <span className="text-xs font-bold text-black uppercase tracking-[0.032em] block mt-1">Try Dive Coral Zone</span>
                </div>
                <p className="text-xs text-black/80 mt-2 font-medium leading-relaxed">Gentle reef diving for beginners and non-swimmers</p>
              </div>
            </StaggerItem>
            <StaggerItem distance={36} className="h-full">
              <div className="bg-[#ffd731] border border-black p-7 rounded-[30px] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-3xl md:text-5xl font-extrabold font-lateral text-black tracking-tight block">12M</span>
                  <span className="text-xs font-bold text-black uppercase tracking-[0.032em] block mt-1">Deep Reef Pinnacle</span>
                </div>
                <p className="text-xs text-black/80 mt-2 font-medium leading-relaxed">Thriving hard and soft corals with large schools of fish</p>
              </div>
            </StaggerItem>
            <StaggerItem distance={36} className="h-full">
              <div className="bg-[#e9ccff] border border-black p-7 rounded-[30px] shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-3xl md:text-5xl font-extrabold font-lateral text-black tracking-tight block">20M+</span>
                  <span className="text-xs font-bold text-black uppercase tracking-[0.032em] block mt-1">Pelagic Blue Trench</span>
                </div>
                <p className="text-xs text-black/80 mt-2 font-medium leading-relaxed">Stingrays, moray eels, barracudas, and sea turtles</p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 3: SCUBA PACKAGES & PRICING — Sea Blue (#bfe5ff) Ground with 3D Ribbon & Animated Sticker Accents */}
      <section className="py-24 md:py-32 px-6 relative bg-[#bfe5ff] text-[#000000] border-b border-black overflow-hidden">
        {/* Parallax 3D Arc Ribbon across the top */}
        <div className="absolute top-4 left-0 right-0 z-0 opacity-80 pointer-events-none">
          <ParallaxRibbon variant="arc" direction="right" speed={120} />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] border border-black text-[#000000] text-xs font-bold tracking-[0.032em] uppercase shadow-[2px_2px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-[#fb4903]"></span>
              Signature Dive Plans
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-lateral font-extrabold text-[#000000] leading-[0.78] uppercase">
              Netrani Scuba Diving Packages &amp; Pricing
            </h2>
            <p className="text-black/85 text-sm md:text-base leading-relaxed font-medium pt-2">
              Explore our transparent scuba options tailored for both first-timers and active ocean explorers. Every package guarantees your 19 km boat crossing to Netrani Island, dedicated one-on-one certified instructor supervision, sterilized international-standard gear, and complimentary high-definition underwater footage. Season operates October through May (closed during monsoon).
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.14}>
            {/* Card 1: Full Netrani Dive — White Slush Card with 1px black outline */}
            <StaggerItem distance={44}>
              <div className="group relative rounded-[36px] overflow-hidden bg-[#ffffff] border border-black flex flex-col p-8 md:p-10 transition-transform hover:-translate-y-1 h-full">
                <div className="h-64 rounded-[24px] overflow-hidden relative shrink-0 mb-6 border border-black">
                  <Image
                    alt="Certified scuba diver swimming near the coral reef of Netrani Island with Netrani Scuba Dive"
                    src="/images/colorblock/boat-expedition.jpg"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffd731] text-black font-bold text-xs px-3.5 py-1 rounded-full border border-black uppercase tracking-[0.032em]">
                    Most Popular
                  </div>
                </div>

                <div className="flex-grow flex flex-col text-black">
                  <div className="bg-[#e9ccff] border border-black rounded-full py-1 px-3.5 inline-block mb-3.5 self-start">
                    <span className="text-[11px] font-bold text-black uppercase tracking-[0.032em]">
                      Signature Experience
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-lateral font-extrabold text-black mb-4 leading-[0.85] uppercase">
                    Netrani Island <br /> Deep Reef Dive
                  </h3>
                  <ul className="space-y-3 mb-8 text-black/85 text-sm flex-grow font-medium">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>
                        19 km scenic offshore boat cruise to <strong className="text-black font-bold">Netrani Island</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>
                        30 to 40 minutes of deep reef bottom time (up to 12m)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>One-on-one certified PADI / SSI divemaster by your side</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Professional HD underwater video &amp; portrait photography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Bonus surface snorkeling with life vests and masks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Fresh fruits, refreshments, and bottled water on board</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Sanitized international-standard diving suit, mask &amp; BCD gear</span>
                    </li>
                  </ul>

                  <div className="flex items-baseline gap-2.5 mb-7 mt-auto pt-4 border-t border-black/20">
                    <span className="text-black text-3xl md:text-5xl font-extrabold font-lateral tracking-tight">
                      ₹3,500
                    </span>
                    <span className="text-black/50 text-base line-through font-bold">
                      ₹4,500
                    </span>
                    <span className="text-black/70 text-xs font-bold uppercase tracking-wider">
                      / Person
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/netrani-scuba-diving"
                      className="flex-1 flex items-center justify-center bg-[#ffffff] hover:bg-[#dceeff] border border-black text-black font-bold text-xs py-3.5 px-4 rounded-full transition-transform active:scale-95 text-center uppercase tracking-[0.032em]"
                    >
                      Deep Dive Details
                    </Link>
                    <a
                      href="tel:+917829975777"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#000000] hover:bg-neutral-800 text-white font-bold text-xs py-3.5 px-4 rounded-full border border-black transition-transform active:scale-95 text-center uppercase tracking-[0.032em]"
                    >
                      <span>Book Deep Dive</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#55db9c]"></span>
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2: VIP Extended Experience — White Slush Card */}
            <StaggerItem distance={44}>
              <div className="group relative rounded-[36px] overflow-hidden bg-[#ffffff] border border-black flex flex-col p-8 md:p-10 transition-transform hover:-translate-y-1 h-full">
                <div className="h-64 rounded-[24px] overflow-hidden relative shrink-0 mb-6 border border-black">
                  <Image
                    alt="VIP extended deep dive with certified divemaster at Netrani Island with Netrani Scuba Dive"
                    src="/images/colorblock/intro-dive.jpg"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffd731] text-black font-bold text-xs px-3.5 py-1 rounded-full border border-black uppercase tracking-[0.032em]">
                    VIP Experience
                  </div>
                </div>

                <div className="flex-grow flex flex-col text-black">
                  <div className="bg-[#ffd731] border border-black rounded-full py-1 px-3.5 inline-block mb-3.5 self-start">
                    <span className="text-[11px] font-bold text-black uppercase tracking-[0.032em]">
                      VIP Extended Experience
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-lateral font-extrabold text-black mb-4 leading-[0.85] uppercase">
                    Netrani Island <br /> Extended Deep Dive
                  </h3>
                  <ul className="space-y-3 mb-8 text-black/85 text-sm flex-grow font-medium">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>
                        19 km scenic offshore boat cruise to <strong className="text-black font-bold">Netrani Island</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>
                        45 to 55 minutes of deep reef bottom time (up to 12m)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>One-on-one certified PADI / SSI divemaster by your side</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Professional HD underwater video &amp; portrait photography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Bonus surface snorkeling with life vests and masks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Fresh fruits, refreshments, and bottled water on board</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      <span>Sanitized international-standard diving suit, mask &amp; BCD gear</span>
                    </li>
                  </ul>

                  <div className="flex items-baseline gap-2.5 mb-7 mt-auto pt-4 border-t border-black/20">
                    <span className="text-black text-3xl md:text-5xl font-extrabold font-lateral tracking-tight">
                      ₹4,500
                    </span>
                    <span className="text-black/50 text-base line-through font-bold">
                      ₹6,000
                    </span>
                    <span className="text-black/70 text-xs font-bold uppercase tracking-wider">
                      / Person
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/intro-scuba-diving"
                      className="flex-1 flex items-center justify-center bg-[#ffffff] hover:bg-[#dceeff] border border-black text-black font-bold text-xs py-3.5 px-4 rounded-full transition-transform active:scale-95 text-center uppercase tracking-[0.032em]"
                    >
                      VIP Dive Details
                    </Link>
                    <a
                      href="#booking-form"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#000000] hover:bg-neutral-800 text-white font-bold text-xs py-3.5 px-4 rounded-full border border-black transition-transform active:scale-95 text-center uppercase tracking-[0.032em]"
                    >
                      <span>Book VIP Dive</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#55db9c]"></span>
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 4: TRIP PREPARATION & PROTOCOL — Paper White (#ffffff) with 24-30px Cards */}
      <section className="bg-[#ffffff] text-[#000000] py-24 md:py-32 px-6 md:px-12 relative font-sans border-b border-black">
        <div className="max-w-[1440px] mx-auto relative z-10 space-y-16">
          <ScrollReveal variant="fade-up" className="text-center max-w-4xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e9ccff] text-black border border-black">
              <span className="w-2 h-2 rounded-full bg-[#5c4ade]"></span>
              <span className="font-bold text-xs uppercase tracking-[0.032em]">
                Trip Preparation &amp; Protocol
              </span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-lateral font-extrabold uppercase leading-[0.78] text-black">
              Essential Details Before You Reserve
            </h2>
            <p className="text-sm md:text-base text-black/80 max-w-3xl mx-auto leading-relaxed font-medium pt-2">
              Planning a scuba trip to Murudeshwar is straightforward when you have clear facts. Review the essential points travelers confirm before reserving: package costs, morning departure times, physical fitness guidelines, and dedicated non-swimmer safety.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.09}>
            {/* Box 1 */}
            <StaggerItem distance={36} className="h-full">
              <div className="rounded-[30px] border border-black bg-[#ffffff] text-black p-8 md:p-10 transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#ffd731] border border-black p-3 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2.5 tracking-tight uppercase">
                    Package Pricing &amp; Inclusions
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80 mb-6 font-medium">
                    The Full Netrani Dive starts at ₹3,500 per person, while the VIP Extended Experience is ₹4,500. Both options include the boat cruise, full gear rental, 1:1 instructor guidance, and complimentary HD media.
                  </p>
                </div>
                <div>
                  <Link
                    href="/blog/murudeshwar-scuba-diving-price-cost"
                    className="inline-flex items-center rounded-full bg-black hover:bg-neutral-800 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-[0.032em] border border-black"
                  >
                    Review Pricing Guide →
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* Box 2 */}
            <StaggerItem distance={36} className="h-full">
              <div className="rounded-[30px] border border-black bg-[#ffffff] text-black p-8 md:p-10 transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#55db9c] border border-black p-3 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2.5 tracking-tight uppercase">
                    Morning Departure Schedule
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80 mb-6 font-medium">
                    Daily dive boats depart between 8:00 AM and 9:00 AM from Murudeshwar beach. The round trip to Netrani Island and dive rotations return to shore by early afternoon.
                  </p>
                </div>
                <div>
                  <Link
                    href="/blog/scuba-diving-timings"
                    className="inline-flex items-center rounded-full bg-black hover:bg-neutral-800 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-[0.032em] border border-black"
                  >
                    View Complete Timetable →
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* Box 3 */}
            <StaggerItem distance={36} className="h-full">
              <div className="rounded-[30px] border border-black bg-[#ffffff] text-black p-8 md:p-10 transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#e9ccff] border border-black p-3 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2.5 tracking-tight uppercase">
                    Age &amp; Medical Guidelines
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80 mb-6 font-medium">
                    Participants must be at least 10 years old. General good health is required; guests with active asthma, heart conditions, or pregnancy should consult safety rules before booking.
                  </p>
                </div>
                <div>
                  <Link
                    href="/blog/scuba-diving-age-limit"
                    className="inline-flex items-center rounded-full bg-black hover:bg-neutral-800 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-[0.032em] border border-black"
                  >
                    Review Health Guidelines →
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* Box 4 */}
            <StaggerItem distance={36} className="h-full">
              <div className="rounded-[30px] border border-black bg-[#ffffff] text-black p-8 md:p-10 transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-5 inline-flex items-center justify-center rounded-full bg-[#4da2ff] border border-black p-3 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2.5 tracking-tight uppercase">
                    Non-Swimmer Safety Protocol
                  </h3>
                  <p className="text-sm leading-relaxed text-black/80 mb-6 font-medium">
                    Swimming skills are not required. A personal certified instructor guides you with a buoyancy vest (BCD), ensuring a calm and safe introduction to the underwater world.
                  </p>
                </div>
                <div>
                  <Link
                    href="#booking-form"
                    className="inline-flex items-center rounded-full bg-black hover:bg-neutral-800 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-[0.032em] border border-black"
                  >
                    Reserve Your Slot →
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>

          {/* Three Steps to Verify — Lavender Container */}
          <ScrollReveal variant="scale-up" duration={0.65} className="rounded-[36px] border border-black bg-[#e9ccff] p-8 md:p-12 max-w-5xl mx-auto">
            <div className="max-w-3xl space-y-2 mb-8">
              <h3 className="text-2xl md:text-4xl font-lateral font-extrabold uppercase leading-[0.85] text-black">
                Three Steps to Verify Your Dive Booking
              </h3>
              <p className="text-sm md:text-base text-black/80 leading-relaxed font-medium">
                Before paying any advance deposit, verify your operator&apos;s direct contact, review authentic underwater photography, and confirm instructor allocation for total peace of mind.
              </p>
            </div>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
              <StaggerItem distance={28} className="h-full">
                <div className="rounded-[24px] border border-black bg-[#ffffff] text-black p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#dceeff] p-2.5 text-black border border-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <h4 className="text-base font-bold text-black mb-2 uppercase">
                      Speak with our Harbor Coordinator
                    </h4>
                    <p className="text-xs leading-relaxed text-black/75 mb-5 font-medium">
                      Contact our direct booking desk to confirm daily seat availability, reporting location, and real-time sea conditions.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-black hover:underline uppercase tracking-[0.032em]"
                  >
                    Go to Contact Page →
                  </Link>
                </div>
              </StaggerItem>

              <StaggerItem distance={28} className="h-full">
                <div className="rounded-[24px] border border-black bg-[#ffffff] text-black p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#ffd731] p-2.5 text-black border border-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                    </div>
                    <h4 className="text-base font-bold text-black mb-2 uppercase">
                      Inspect Authentic Underwater Media
                    </h4>
                    <p className="text-xs leading-relaxed text-black/75 mb-5 font-medium">
                      Browse authentic underwater photos and video clips captured by our team at Netrani Island to see actual water clarity and marine life.
                    </p>
                  </div>
                  <Link
                    href="/gallery"
                    className="text-xs font-bold text-black hover:underline uppercase tracking-[0.032em]"
                  >
                    Browse Media Gallery →
                  </Link>
                </div>
              </StaggerItem>

              <StaggerItem distance={28} className="h-full">
                <div className="rounded-[24px] border border-black bg-[#ffffff] text-black p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#55db9c] p-2.5 text-black border border-black">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <h4 className="text-base font-bold text-black mb-2 uppercase">
                      Review Dive Team Credentials
                    </h4>
                    <p className="text-xs leading-relaxed text-black/75 mb-5 font-medium">
                      Learn about the certified instructors, divemasters, and experienced boat captains dedicated to your safety.
                    </p>
                  </div>
                  <Link
                    href="/team"
                    className="text-xs font-bold text-black hover:underline uppercase tracking-[0.032em]"
                  >
                    Explore Team Profiles →
                  </Link>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5: NETRANI KNOWLEDGE BASE / BLOG GUIDES — Sea Blue (#bfe5ff) */}
      <section className="bg-[#bfe5ff] py-24 md:py-32 px-6 border-b border-black relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] text-black border border-black shadow-[3px_3px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-[#fb4903]"></span>
              <span className="font-bold text-xs uppercase tracking-[0.032em]">
                Netrani Knowledge Base
              </span>
            </div>
            <h2 className="text-3xl sm:text-6xl font-lateral font-extrabold text-black uppercase leading-[0.78]">
              Murudeshwar Scuba Guides &amp; Travel Advice
            </h2>
            <p className="text-black/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium pt-2">
              Authoritative local resources providing verified answers on <strong className="text-black font-bold">package prices</strong>, <strong className="text-black font-bold">age eligibility</strong>, <strong className="text-black font-bold">boat schedules</strong>, travel routes, and underwater safety for your 2026 trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Guide 1 */}
            <Link
              href="/blog/murudeshwar-scuba-diving-price-cost"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#ffd731] border border-black flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Rate Breakdown
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Netrani Scuba Rates &amp; Cost Breakdown (2026)
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Transparent breakdown of Murudeshwar scuba diving fees, gear rentals, and package inclusions.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 2 */}
            <Link
              href="/blog/scuba-diving-age-limit"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Participation Rules
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Diver Eligibility &amp; Medical Standards
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Clear age eligibility, medical criteria, and health recommendations for diving at Netrani Island.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 3 */}
            <Link
              href="/blog/best-time-scuba-diving-murudeshwar"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#e9ccff] border border-black flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Seasonal Calendar
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Peak Diving Months &amp; Sea Visibility
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Seasonal weather and sea visibility breakdown for Murudeshwar, with monsoon closure timelines.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 4 */}
            <Link
              href="/blog/scuba-diving-timings"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#4da2ff] border border-black flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Daily Timetable
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Excursion Schedule &amp; Boat Timings
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Reporting times, boat departure slots, dive rotation schedules, and return timings.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 5 */}
            <Link
              href="/blog/murudeshwar-scuba-diving-from-bangalore"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#fb4903] border border-black flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Route Advice
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Bangalore to Murudeshwar Travel Plan
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Optimal road, bus, and train travel routes for weekend scuba excursions from Bangalore.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 6 */}
            <Link
              href="/how-to-reach-murudeshwar"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#5c4ade] border border-black flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Transit Map
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                How to Reach Murudeshwar Beach
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Step-by-step travel directions via Konkan Railway, NH 66, and nearest coastal airports.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 7 */}
            <Link
              href="/blog/beginner-scuba-diving-guide"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#ffd731] border border-black flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Novice Tips
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                First-Time Diver Essentials 101
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                Essential advice for first-time divers, from equalizing ears to underwater hand signals.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 8 */}
            <Link
              href="/blog/scuba-diving-murudeshwar-non-swimmers"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#55db9c] border border-black flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Non-Swimmer Info
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Scuba Diving Guide for Non-Swimmers
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                How buoyancy control jackets and 1:1 instructor assistance make diving accessible to non-swimmers.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>

            {/* Guide 9 */}
            <Link
              href="/blog/murudeshwar-scuba-diving-safety"
              className="group bg-[#ffffff] text-black border border-black rounded-[28px] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#fb4903] border border-black flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.032em] text-black/70">
                  Risk &amp; Protocol
                </span>
              </div>
              <h3 className="text-base font-bold text-black mb-2 tracking-tight group-hover:underline uppercase">
                Marine Safety Standards &amp; Gear Protocols
              </h3>
              <p className="text-black/75 text-xs leading-relaxed mb-4 font-medium">
                A transparent overview of safety procedures, sanitized gear, emergency oxygen, and Coast Guard protocols.
              </p>
              <span className="text-black text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                Read Guide <span>-&gt;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPEDITION GALLERY SECTION — Paper White (#ffffff) with 24-30px Black-Bordered Photo Frames */}
      <section className="py-24 md:py-32 bg-[#ffffff] text-[#000000] relative border-b border-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-[#55db9c] border border-black"></span>
                <span className="text-xs font-bold tracking-[0.032em] uppercase text-black">
                  Netrani Expedition Moments
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-lateral font-extrabold uppercase leading-[0.78] text-black">
                Undersea Wonders at Netrani Island
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#ffd731] hover:bg-[#ffc800] border border-black px-6 py-3 rounded-full font-bold text-xs text-black uppercase tracking-[0.032em] transition-transform active:scale-95"
            >
              <span>Explore Full Dive Gallery</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Gallery item 1 */}
            <div className="relative group overflow-hidden rounded-[30px] border border-black md:col-span-2 md:row-span-2 bg-[#000000]">
              <Image
                alt="First-time scuba diver experiencing Netrani Island coral reef with Netrani Scuba Dive certified guide"
                src="/images/murudeshwara/netrani_island_scuba_diving.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <span className="text-[#ffd731] text-xs font-bold uppercase tracking-[0.032em] mb-1.5">
                  Netrani Island Coral Sanctuary
                </span>
                <p className="text-white text-sm max-w-md font-bold leading-relaxed">
                  First-time diver celebrating an unforgettable moment in crystal-clear Arabian Sea waters
                </p>
              </div>
            </div>

            {/* Gallery item 2 */}
            <div className="relative group overflow-hidden rounded-[30px] border border-black bg-[#000000]">
              <Image
                alt="Scuba diver recording underwater memories during a guided Netrani Island dive"
                src="/images/murudeshwara/murudeshwar_scuba_diving.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[#4da2ff] text-[10px] font-bold uppercase tracking-[0.032em] mb-1">
                  Netrani Pinnacle
                </span>
                <p className="text-white text-xs font-bold leading-relaxed">
                  Under-surface action captured on HD underwater action cameras
                </p>
              </div>
            </div>

            {/* Gallery item 3 */}
            <div className="relative group overflow-hidden rounded-[30px] border border-black bg-[#000000]">
              <Image
                alt="Diver practicing calm buoyancy and breathing among Netrani reef fish"
                src="/images/murudeshwara/netrani_island_coral_reef.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[#55db9c] text-[10px] font-bold uppercase tracking-[0.032em] mb-1">
                  Marine Sanctuary
                </span>
                <p className="text-white text-xs font-bold leading-relaxed">
                  Calm breathing and neutral buoyancy beside thriving coastal marine life
                </p>
              </div>
            </div>

            {/* Gallery item 4 */}
            <div className="relative group overflow-hidden rounded-[30px] border border-black bg-[#000000]">
              <Image
                alt="Pufferfish swimming near rocky coral formations at Netrani Island with Netrani Scuba Dive"
                src="/images/murudeshwara/netrani_island_marine_life.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[#fb4903] text-[10px] font-bold uppercase tracking-[0.032em] mb-1">
                  Reef Ecosystem
                </span>
                <p className="text-white text-xs font-bold leading-relaxed">
                  Resident pufferfish and reef fauna frequenting shallow rock crevices
                </p>
              </div>
            </div>

            {/* Gallery item 5 */}
            <div className="relative group overflow-hidden rounded-[30px] border border-black bg-[#000000]">
              <Image
                alt="Dive buddies sharing underwater hand signals during a guided dive session"
                src="/images/murudeshwara/murudeshwar_diving_experience.webp"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <span className="text-[#ffd731] text-[10px] font-bold uppercase tracking-[0.032em] mb-1">
                  Buddy Team Dive
                </span>
                <p className="text-white text-xs font-bold leading-relaxed">
                  Clear underwater communication and guided buddy-system exploration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ SECTION — Sea Blue (#bfe5ff) Ground with White Sticker Cards */}
      <section className="py-24 md:py-32 bg-[#bfe5ff] text-[#000000] relative border-b border-black">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] text-black border border-black shadow-[2px_2px_0px_#000000]">
              <span className="w-2 h-2 rounded-full bg-[#55db9c] animate-pulse"></span>
              <span className="font-bold text-xs uppercase tracking-[0.032em]">
                Helpful Answers &amp; Queries
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-lateral font-extrabold text-black uppercase leading-[0.78]">
              Frequently Asked Questions About Netrani Scuba
            </h2>
            <p className="text-black/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium pt-2">
              Key answers regarding boat departures, underwater safety, pricing structures, and traveler logistics for your Netrani Scuba Dive trip.
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => {
              return (
                <div
                  key={index}
                  className="rounded-[24px] p-6 md:p-8 bg-[#ffffff] border border-black transition-transform hover:-translate-y-0.5"
                >
                  <h3 className="text-base md:text-lg font-bold mb-2.5 tracking-tight text-black uppercase">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3.5 font-medium text-black/80">
                    {faq.a}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-black hover:underline uppercase tracking-[0.032em]"
                    >
                      {faq.linkText}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA BANNER — Sea Blue (#bfe5ff) Ground with 3D Ribbon and White Card */}
      <section className="py-20 md:py-28 bg-[#bfe5ff] text-black relative border-b border-black overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 z-0 opacity-80 -translate-y-1/2 animate-ribbon-wave pointer-events-none">
          <InflatableRibbon variant="loop" />
        </div>

        <div className="max-w-[1440px] mx-6 md:mx-auto bg-[#ffffff] border border-black rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative z-10 shadow-[6px_6px_0px_#000000]">
          <div className="relative z-10 lg:w-1/2 pb-8 lg:pb-0 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd731] text-black border border-black text-xs font-bold uppercase tracking-[0.032em]">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              Reserve Advance Boat Slot
            </div>
            <h2 className="text-4xl sm:text-6xl font-lateral font-extrabold text-black leading-[0.78] uppercase">
              Ready to Explore <br />
              <span className="underline decoration-[#fb4903] decoration-8 underline-offset-4">
                Netrani Island?
              </span>
            </h2>
            <p className="text-black/80 text-sm md:text-base max-w-md leading-relaxed font-medium">
              Reserve your scuba diving slot with a simple advance deposit of ₹500 per person. Have questions about sea conditions, boat timings, or custom group bookings? Our Netrani Scuba Dive coordinator is available daily from 8:00 AM to 8:00 PM to help you plan.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href="tel:+917829975777"
                className="bg-black hover:bg-neutral-800 text-white text-xs font-bold py-3.5 px-7 rounded-full border border-black transition-transform active:scale-95 uppercase tracking-[0.032em] inline-flex items-center gap-2"
              >
                <span>Call Now (+91 78299 75777)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#55db9c]"></span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-black bg-[#ffffff] hover:bg-[#dceeff] text-black text-xs font-bold py-3.5 px-7 rounded-full transition-transform active:scale-95 uppercase tracking-[0.032em]"
              >
                <span>Contact &amp; Directions</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
            <div className="relative w-64 md:w-[340px] h-64 md:h-[340px] rounded-[30px] bg-[#e9ccff] border border-black p-4 flex items-center justify-center">
              <Image
                alt="Vibrant tropical marine fish species living in the coral reefs of Netrani Island with Netrani Scuba Dive"
                src="/images/tropical-fish1.png"
                fill
                className="object-contain p-6 hover:scale-105 transition-transform duration-700"
              />
              <CheckmarkSticker className="absolute -bottom-3 -left-3 rotate-[-6deg]" />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Surface Floating Button */}
      <BackToSurfaceButton />

      {/* Sticky Bottom Bar for Mobile — 1px Black Border Pill */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-[60] bg-[#ffffff] border border-black rounded-full p-2.5 px-5 pointer-events-auto flex items-center justify-between gap-3 shadow-none">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold text-black/70 uppercase tracking-[0.032em]">
            Netrani Scuba Desk
          </span>
          <span className="text-xs font-bold text-black">+91 78299 75777</span>
        </div>
        <a
          href="tel:+917829975777"
          className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.032em] border border-black"
        >
          Call Now
        </a>
      </div>
    </main>
  );
}
