"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
} from "@/components/SlushElements";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    {
      src: "/images/murudeshwara/murudeshwar_scuba_diving.webp",
      alt: "Scuba diver exploring vibrant coral reef formations at Netrani Island with Netrani Scuba Dive",
      location: "Netrani Island, Murudeshwar",
      category: "reef",
    },
    {
      src: "/images/murudeshwara/netrani_island_scuba_diving.webp",
      alt: "PADI certified dive instructor guiding a first-time scuba diver near Netrani coral reefs",
      location: "Netrani Island, Murudeshwar",
      category: "divers",
    },
    {
      src: "/images/murudeshwara/murudeshwar_diving_experience.webp",
      alt: "Scuba divers enjoying an underwater diving experience in the clear waters of Netrani Island",
      location: "Netrani Island, Murudeshwar",
      category: "divers",
    },
    {
      src: "/images/murudeshwara/netrani_island_coral_reef.webp",
      alt: "Healthy tropical coral reef ecosystem teeming with coastal marine life around Netrani Island",
      location: "Netrani Coral Reef",
      category: "reef",
    },
    {
      src: "/images/murudeshwara/murudeshwar_scuba_diver.webp",
      alt: "Certified scuba diver navigating clear turquoise Arabian Sea waters in Murudeshwar",
      location: "Netrani Island, Murudeshwar",
      category: "divers",
    },
    {
      src: "/images/murudeshwara/netrani_island_marine_life.webp",
      alt: "Reef fishes and diverse Arabian Sea marine life thriving at Netrani Island sanctuary",
      location: "Marine Life Sanctuary",
      category: "marine",
    },
    {
      src: "/images/murudeshwara/murudeshwar_underwater_diving.webp",
      alt: "Deep underwater exploration and clear ocean visibility during a Netrani dive trip",
      location: "Netrani Scuba Dive",
      category: "reef",
    },
    {
      src: "/images/murudeshwara/netrani_island_underwater_diving.webp",
      alt: "Diver maintaining neutral buoyancy while gliding over underwater rocky pinnacles",
      location: "Netrani Island, Murudeshwar",
      category: "divers",
    },
    {
      src: "/images/murudeshwara/netrani_island_diving_experience.webp",
      alt: "First-hand scuba diving experience and 1:1 guided session at Netrani Island",
      location: "Netrani Island, Murudeshwar",
      category: "divers",
    },
    {
      src: "/images/murudeshwara/netrani_island_sea_diving.webp",
      alt: "Open-water sea diving expedition with tropical reef fish in Netrani Island waters",
      location: "Netrani Island, Murudeshwar",
      category: "marine",
    },
    {
      src: "/images/murudeshwara/netrani_island_underwater_photography.webp",
      alt: "Free HD underwater photography capturing scuba divers in action at Netrani Island",
      location: "Underwater Photography",
      category: "marine",
    },
    {
      src: "/images/murudeshwara/netrani_scuba_diver_underwater.webp",
      alt: "Close-up of a scuba diver exploring rich coral beds and marine flora off Murudeshwar",
      location: "Netrani Island, Murudeshwar",
      category: "reef",
    },
    {
      src: "/images/murudeshwara/scuba_diving_near_murudeshwar.webp",
      alt: "Scuba diving excursion near Murudeshwar and Netrani Island with high visibility",
      location: "Murudeshwar Coastal Waters",
      category: "reef",
    },
    {
      src: "/images/murudeshwara/GP013752.webp",
      alt: "Action camera capture of scuba diver exploring the underwater world of Netrani Island",
      location: "Netrani Island, Murudeshwar",
      category: "divers",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "@id": "https://www.murudeshwarscubadive.in/gallery/#imagegallery",
      "url": "https://www.murudeshwarscubadive.in/gallery",
      "name": "Netrani Island Scuba Diving Underwater Gallery",
      "description": "Real underwater photos and videos from our daily scuba diving trips with Netrani Scuba Dive at Netrani Island.",
      "image": images.map((img) => ({
        "@type": "ImageObject",
        "url": `https://www.murudeshwarscubadive.in${img.src}`,
        "caption": img.alt,
        "contentLocation": img.location,
      })),
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
          "name": "Gallery",
          "item": "https://www.murudeshwarscubadive.in/gallery",
        },
      ],
    },
  ];

  return (
    <main className="bg-[#ffffff] min-h-screen text-black font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Intro Header — Full-bleed Sea Blue (#bfe5ff) Canvas with Ample Gaps */}
      <section className="bg-[#bfe5ff] pt-36 md:pt-44 pb-20 md:pb-24 px-6 md:px-12 border-b border-black text-center relative overflow-hidden">
        {/* Animated 3D Ribbon Motif */}
        <InflatableRibbon variant="arc" className="-top-12 -left-20 w-[500px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

        {/* Floating Playful Stickers */}
        <div className="absolute top-28 right-8 md:right-24 z-10 hidden sm:block animate-float-slow">
          <DiverMaskSticker className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-12 right-12 md:right-32 z-10 hidden sm:block animate-float-reverse">
          <TankSticker className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        <div className="max-w-5xl mx-auto relative z-20 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black text-black font-bold text-xs uppercase tracking-[0.032em] shadow-[3px_3px_0px_#000000]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span>Real Photography Archive</span>
          </div>
          
          <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold tracking-tight leading-[0.80] text-black uppercase">
            Netrani Underwater <br />
            <span className="bg-[#ffd731] px-4 py-1.5 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
              Gallery.
            </span>
          </h1>

          <p className="text-black max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Explore real captures from our morning expeditions at Netrani Island with <strong className="text-black font-bold">Netrani Scuba Dive</strong>—including vibrant coral reef ecosystems, colorful marine life, and first-time diver milestones.
          </p>

          {/* Filter Control — Pill with 1px Black Border & Tactile Shadow */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 pt-2 p-2 rounded-full bg-white border border-black shadow-[4px_4px_0px_#000000]">
            {[
              { id: "all", label: "All Photos" },
              { id: "divers", label: "Divers in Action" },
              { id: "reef", label: "Coral Reefs" },
              { id: "marine", label: "Marine Life" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.032em] transition-all border ${
                  activeFilter === tab.id
                    ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                    : "bg-white text-black hover:bg-[#bfe5ff] border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid — Hand-cut sticker frames on Paper White (#ffffff) canvas */}
      <section className="px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group break-inside-avoid rounded-[28px] overflow-hidden bg-white border border-black p-3.5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative rounded-[20px] overflow-hidden border border-black bg-[#e9e9e9]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hand-Cut Sticker Caption Panel — Solid fills, no gradients */}
              <div className="pt-3.5 px-1 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-black text-xs font-bold uppercase tracking-[0.032em] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
                    {img.location}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.032em] px-2.5 py-0.5 rounded-full bg-[#e9ccff] text-black border border-black font-mono">
                    {img.category}
                  </span>
                </div>
                <p className="text-neutral-800 text-xs font-medium leading-relaxed">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Billboard — Sea Blue (#bfe5ff) Ground with Tactile White Card */}
      <section className="bg-[#bfe5ff] py-20 md:py-28 px-6 border-t border-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-white border border-black rounded-[36px] p-10 md:p-14 text-center space-y-8 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
          <h2 className="font-lateral text-4xl sm:text-6xl md:text-7xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
            Ready to Capture Your Own Dive Moments?
          </h2>
          <p className="text-base md:text-lg text-neutral-800 leading-relaxed max-w-2xl mx-auto font-medium">
            Complimentary high-definition underwater photography and action video clips are included with every dive package. Reserve your spot today and take home real memories.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link
              href="/netrani-scuba-diving"
              className="slush-btn-black text-xs md:text-sm px-8 py-4"
            >
              <span>View Packages</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </Link>
            <a
              href="tel:+917829975777"
              className="slush-pill-btn bg-white hover:bg-[#55db9c] text-black border border-black text-xs md:text-sm px-8 py-4"
            >
              <span>Call to Book (+91 78299 75777)</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
