import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Meet the Team: PADI Certified Instructors & Guides | Netrani Scuba Dive",
  description:
    "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Netrani Scuba Dive.",
  keywords: [
    "Netrani Scuba Dive team",
    "padi instructors murudeshwar",
    "scuba diving team murudeshwara",
    "certified divemasters netrani island",
    "murudeshwar scuba guides",
    "safe scuba diving in murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/team",
  },
  openGraph: {
    title: "Meet the Team: PADI Certified Instructors & Guides | Netrani Scuba Dive",
    description:
      "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Netrani Scuba Dive.",
    url: "https://www.murudeshwarscubadive.in/team",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/gallery/gallery-1.webp",
        width: 1200,
        height: 630,
        alt: "PADI Certified Instructors and Guides at Netrani Scuba Dive",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADI Certified Instructors & Guides | Netrani Scuba Dive",
    description:
      "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Netrani Scuba Dive.",
    images: ["/images/gallery/gallery-1.webp"],
  },
};

export default function Team() {
  const members = [
    {
      name: "Captain Raghu",
      role: "Lead Boat Captain",
      desc: "With over 15 years of coastal maritime navigation between Murudeshwar beach and Netrani Island, Captain Raghu handles ocean crossings with deep local knowledge of Arabian Sea swells, weather patterns, and safe anchorage.",
      image: "/images/gallery/gallery-7.jpg",
      experience: "15+ Years at Sea",
    },
    {
      name: "Vikram Shenoy",
      role: "PADI Master Scuba Diver Trainer",
      desc: "With more than 3,000 logged dives, Vikram oversees instructor training, emergency first response protocols, and equipment inspection to ensure every dive adheres to global safety standards.",
      image: "/images/gallery/gallery-8.jpg",
      experience: "3,000+ Logged Dives",
    },
    {
      name: "Pooja Hegde",
      role: "PADI Scuba Instructor",
      desc: "Guiding first-time and beginner divers at Netrani across 5 active seasons, Pooja's patient orientation and reassuring underwater guidance help even hesitant non-swimmers dive with total confidence.",
      image: "/images/gallery/gallery-9.jpg",
      experience: "5+ Seasons at Netrani",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": "https://www.murudeshwarscubadive.in/team/#aboutpage",
      "url": "https://www.murudeshwarscubadive.in/team",
      "name": "Meet the Team: PADI Certified Instructors & Guides",
      "description": "Meet the experienced PADI certified scuba instructors, divemasters, and boat captains at Netrani Scuba Dive.",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": members.length,
        "itemListElement": members.map((m, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Person",
            "name": m.name,
            "jobTitle": m.role,
            "description": m.desc,
            "image": `https://www.murudeshwarscubadive.in${m.image}`,
          },
        })),
      },
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
          "name": "Meet the Team",
          "item": "https://www.murudeshwarscubadive.in/team",
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
      {/* Team Header — Full-bleed Sea Blue (#bfe5ff) Canvas with 3D Ribbon & Stickers */}
      <section className="bg-[#bfe5ff] pt-36 md:pt-44 pb-20 md:pb-24 px-6 border-b border-black text-center relative overflow-hidden">
        {/* Signature 3D Ribbon Motif */}
        <InflatableRibbon variant="wave" className="-top-12 -left-20 w-[500px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

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
            <span>Professional Maritime Crew</span>
          </div>
          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            Meet the Team <br />
            <span className="bg-[#ffd731] px-4 py-1.5 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              at Netrani Scuba Dive.
            </span>
          </h1>
          <p className="text-black text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            The certified dive instructors, licensed divemasters, and experienced maritime crew dedicated to making every dive at Netrani Island safe, comfortable, and memorable.
          </p>
        </div>
      </section>

      {/* Team Cards — Paper White (#ffffff) Section */}
      <section className="py-20 md:py-28 px-6 relative z-10 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {members.map((m, idx) => {
            return (
              <div
                key={idx}
                className="bg-white border border-black rounded-[28px] p-5 flex flex-col transition-all duration-300 hover:bg-[#d8efff] shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1"
              >
                <div className="h-72 relative rounded-[20px] overflow-hidden border border-black bg-[#e9e9e9] mb-5">
                  <Image
                    src={m.image}
                    alt={`${m.name} - ${m.role} at Netrani Scuba Dive`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3.5 right-3.5 bg-[#ffd731] text-black border border-black px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.032em] shadow-[2px_2px_0px_#000000]">
                    {m.experience}
                  </div>
                </div>
                <div className="px-2 pb-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.032em] px-3.5 py-1 bg-[#e9ccff] text-black border border-black rounded-full">
                      {m.role}
                    </span>
                    <h3 className="text-2xl font-bold text-black tracking-tight">{m.name}</h3>
                    <p className="text-neutral-800 text-sm leading-relaxed font-medium pt-1">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
