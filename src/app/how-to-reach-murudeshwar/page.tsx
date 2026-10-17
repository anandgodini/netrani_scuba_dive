import type { Metadata } from "next";
import {
  InflatableRibbon,
  IslandPinSticker,
  DiverMaskSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "How to Reach Murudeshwar for Netrani Scuba Dive: Directions, Map & Travel Info",
  description:
    "Easiest ways to reach Murudeshwar for scuba diving with Netrani Scuba Dive. Travel guidelines from Bangalore, Mangalore, Gokarna, and Udupi by bus, train, or road.",
  keywords: [
    "how to reach murudeshwara",
    "Netrani Scuba Dive directions",
    "how to reach murudeshwar for scuba diving",
    "bangalore to murudeshwar scuba diving",
    "mangalore to murudeshwara",
    "murudeshwar scuba diving travel guide",
    "reach netrani island from murudeshwar",
    "murudeshwar railway station scuba",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
  },
  openGraph: {
    title: "How to Reach Murudeshwar for Netrani Scuba Dive: Directions, Map & Travel Info",
    description:
      "Easiest ways to reach Murudeshwar for scuba diving with Netrani Scuba Dive. Travel guidelines from Bangalore, Mangalore, Gokarna, and Udupi by bus, train, or road.",
    url: "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Directions and map for reaching Murudeshwar for Netrani Scuba Dive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reach Murudeshwar for Scuba Diving | Netrani Scuba Dive",
    description:
      "Directions, travel guide, and road maps from Bangalore, Mangalore, and Goa to Murudeshwar.",
    images: ["/hero.jpg"],
  },
};

export default function HowToReach() {
  const travelModes = [
    {
      title: "By Train",
      desc: "Murudeshwar Railway Station (station code: MRDW) is well-connected on the Konkan Railway network. Regular express and passenger trains link Murudeshwar directly to Bengaluru, Mangaluru, Goa (Madgaon), Mumbai, and Karwar. The railway station is situated just 3 km from Murudeshwar beach and temple, with auto-rickshaws readily available.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#2c2e2a]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect width="16" height="16" x="4" y="3" rx="2" />
          <path d="M4 11h16" />
          <path d="M12 3v8" />
          <path d="m8 19-2 2" />
          <path d="m16 19 2 2" />
          <circle cx="8" cy="15" r="1" />
          <circle cx="16" cy="15" r="1" />
        </svg>
      ),
    },
    {
      title: "By Road / Bus",
      desc: "Murudeshwar lies directly on National Highway 66 (NH 66). Overnight state (KSRTC) and private sleeper buses operate daily from Bengaluru (9–10 hours), Mangaluru (3 hours), Mysuru, Hubballi, and Pune/Mumbai. Buses drop passengers at Murudeshwar Highway Cross, where frequent auto-rickshaws connect to the beachfront in under 5 minutes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#2c2e2a]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v10h1c0 1.7 1.3 3 3 3s3-1.3 3-3h4c0 1.7 1.3 3 3 3s3-1.3 3-3h1" />
          <circle cx="8" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M12 10H5" />
          <path d="M16 10v3" />
        </svg>
      ),
    },
    {
      title: "By Air",
      desc: "Mangaluru International Airport (IXE) is the closest airport, situated approximately 160 km south via NH 66. Goa International Airports (Dabolim and Mopa) are roughly 200 km to the north. Taxis, rental vehicles, and connected express trains make transit from either airport straightforward.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#2c2e2a]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M12 22V12" />
          <path d="M12 12 4 7.5" />
          <path d="M12 12 20 7.5" />
        </svg>
      ),
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar/#webpage",
      "url": "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
      "name": "How to Reach Murudeshwar for Netrani Scuba Dive: Directions, Map & Travel Info",
      "description": "Easiest ways to reach Murudeshwar for scuba diving with Netrani Scuba Dive. Travel guidelines from Bangalore, Mangalore, Gokarna, and Udupi by bus, train, or road.",
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
          "name": "How to Reach Murudeshwar",
          "item": "https://www.murudeshwarscubadive.in/how-to-reach-murudeshwar",
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
      {/* Header — Full-bleed Sea Blue (#bfe5ff) Canvas with Ample Gaps */}
      <section className="bg-[#bfe5ff] pt-36 md:pt-44 pb-20 md:pb-24 px-6 border-b border-black text-center relative overflow-hidden">
        {/* Signature 3D Ribbon Motif */}
        <InflatableRibbon variant="wave" className="-top-12 -left-20 w-[500px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

        {/* Floating Playful Stickers */}
        <div className="absolute top-28 right-8 md:right-24 z-10 hidden sm:block animate-float-slow">
          <IslandPinSticker className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-10 left-12 md:left-28 z-10 hidden sm:block animate-float-reverse">
          <DiverMaskSticker className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[0.032em] border border-black shadow-[3px_3px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Travel &amp; Route Logistics</span>
          </div>
          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            How to Reach <br />
            <span className="bg-[#ffd731] px-4 py-1.5 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              Murudeshwar.
            </span>
          </h1>
          <p className="text-black text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Plan your travel smoothly with train schedules, highway driving tips, interstate bus connections, and morning dive reporting details for Netrani Scuba Dive.
          </p>
        </div>
      </section>

      {/* Travel Modes Section — Paper White (#ffffff) Canvas */}
      <section className="py-20 md:py-28 px-6 relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Mode list */}
        <div className="grid gap-6">
          {travelModes.map((mode, idx) => (
            <div
              key={idx}
              className="bg-white border border-black rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:bg-[#d8efff] shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#ffd731] border border-black rounded-full flex items-center justify-center shrink-0 text-black shadow-[2px_2px_0px_#000000]">
                {mode.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black tracking-tight">{mode.title}</h3>
                <p className="text-neutral-800 leading-relaxed text-sm md:text-base font-medium">
                  {mode.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reporting Location Card — Sticker Card with Tactile Shadow */}
        <div className="bg-white border border-black rounded-[32px] p-8 md:p-12 space-y-6 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
          <div className="space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#e9ccff] text-black font-bold text-xs uppercase tracking-[0.032em] border border-black">
              Reporting Desk
            </span>
            <h2 className="font-lateral text-2xl md:text-4xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
              Netrani Scuba Dive Reporting Location
            </h2>
          </div>
          <p className="text-neutral-800 leading-relaxed text-sm md:text-base font-medium">
            Upon booking confirmation, report directly to our dive desk on Temple Main Road near Murudeshwar Beach. Spacious public vehicle parking for four-wheelers, tempo travelers, and two-wheelers is available in the main temple parking area, just a 2-minute walk from our facility.
          </p>
          <div className="bg-[#d8efff] border border-black rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <h4 className="text-lg md:text-xl font-bold text-black">
                Netrani Scuba Dive Desk
              </h4>
              <p className="text-sm text-neutral-800 font-medium">
                Temple Main Road, Murudeshwar Beach, Karnataka 581350
              </p>
            </div>
            <a
              href="https://www.google.com/maps?q=14.0946,74.4838"
              target="_blank"
              rel="noopener noreferrer"
              className="slush-btn-black text-xs md:text-sm px-7 py-3.5 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Open Google Maps</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
