import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/data/posts";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
} from "@/components/SlushElements";

export const metadata: Metadata = {
  title: "Netrani Scuba Dive Guides (2026): Price, Timings, Age Limit & Booking",
  description:
    "Price, timings, booking, age limit, travel planning, and safety guides for Murudeshwar & Netrani scuba diving.",
  keywords: [
    "netrani scuba dive guide",
    "murudeshwar scuba guide",
    "murudeshwara scuba diving blog",
    "netrani scuba diving tips",
    "murudeshwar scuba price guide",
    "netrani island diving guide",
    "scuba diving age limit murudeshwar",
    "scuba diving timings murudeshwara",
    "best time for scuba diving in murudeshwar",
  ],
  alternates: {
    canonical: "https://www.murudeshwarscubadive.in/blog",
  },
  openGraph: {
    title: "Netrani Scuba Dive Guides (2026): Price, Timings, Age Limit & Booking",
    description:
      "Price, timings, booking, age limit, travel planning, and safety guides for Murudeshwar scuba diving.",
    url: "https://www.murudeshwarscubadive.in/blog",
    siteName: "Netrani Scuba Dive",
    images: [
      {
        url: "/images/netrani-diver.jpg",
        width: 1200,
        height: 630,
        alt: "Netrani Scuba Dive Guides and Journal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netrani Scuba Dive Guides (2026)",
    description:
      "Price, timings, booking, age limit, travel planning, and safety guides for Murudeshwar scuba diving.",
    images: ["/images/netrani-diver.jpg"],
  },
};

export default function BlogListing() {
  const posts = getAllPosts();

  // Featured Priority Guides
  const featuredSlugs = [
    "murudeshwar-scuba-diving-packages",
    "scuba-diving-in-murudeshwar",
    "murudeshwar-scuba-diving-complete-guide-netrani-island",
    "best-scuba-diving-in-murudeshwara",
    "murudeshwar-scuba-diving-first-timer-guide",
    "scuba-diving-murudeshwar-netrani-island-guide",
    "gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar",
    "best-time-scuba-diving-murudeshwar",
    "scuba-diving-timings",
    "how-to-reach-murudeshwar",
    "scuba-diving-booking-murudeshwar",
    "scuba-diving-packages-murudeshwar",
  ];

  const priorityGuides = posts.filter((p) => featuredSlugs.includes(p.slug));
  const generalPosts = posts.filter((p) => !featuredSlugs.includes(p.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://www.murudeshwarscubadive.in/blog/#blog",
      "url": "https://www.murudeshwarscubadive.in/blog",
      "name": "Netrani Scuba Dive Guides & Journal",
      "description": "Your ultimate guide to diving in Murudeshwar & Netrani Island. Discover sea conditions, plan travel, and see safety guidelines.",
      "blogPost": posts.map((post) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `https://www.murudeshwarscubadive.in/blog/${post.slug}`,
        "datePublished": post.date,
        "image": `https://www.murudeshwarscubadive.in${post.coverImage || '/images/netrani-diver.jpg'}`
      }))
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
          "name": "Blog",
          "item": "https://www.murudeshwarscubadive.in/blog"
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
      <div>
        {/* Hero Header — Full-bleed Sea Blue (#bfe5ff) Canvas with Ample Gaps */}
        <div className="bg-[#bfe5ff] pt-36 md:pt-44 pb-20 md:pb-24 border-b border-black relative overflow-hidden">
          {/* Signature 3D Ribbon Motif */}
          <InflatableRibbon variant="wave" className="-top-12 -left-20 w-[500px] h-[320px] opacity-90 hidden sm:block pointer-events-none animate-ribbon-wave" />

          {/* Floating Playful Stickers */}
          <div className="absolute top-28 right-8 md:right-24 z-10 hidden sm:block animate-float-slow">
            <DiverMaskSticker className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          <div className="absolute bottom-10 right-16 md:right-32 z-10 hidden sm:block animate-float-reverse">
            <TankSticker className="w-14 h-14 md:w-16 md:h-16" />
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-20">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] border border-black rounded-full shadow-[3px_3px_0px_#000000]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
                <span>Netrani Scuba Dive Journal</span>
              </div>
              <h1 className="font-lateral text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold uppercase tracking-tight leading-[0.80] text-black">
                Explore <br />
                <span className="bg-[#ffd731] px-4 py-1.5 border border-black inline-block mt-3 shadow-[4px_4px_0px_#000000]">
                  The Deep Blue.
                </span>
              </h1>
              <p className="text-base md:text-xl text-black leading-relaxed max-w-2xl mx-auto font-medium">
                Your authoritative resource for diving at Netrani Island and Murudeshwar with Netrani Scuba Dive. Discover sea conditions, plan trip logistics, and explore Arabian Sea marine life.
              </p>
            </div>
          </div>
        </div>

        {/* Priority Guides Section — Paper White (#ffffff) Section */}
        <div className="py-20 border-b border-black bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="mb-12 border border-black bg-[#dceeff] p-8 md:p-12 rounded-[28px]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                  <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] border border-black rounded-full">
                    Priority Guides
                  </span>
                  <h2 className="font-lateral text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
                    Plan Your Dive Before You Book
                  </h2>
                </div>
                <p className="max-w-xl text-sm text-neutral-800 leading-relaxed font-medium">
                  These planning guides cover the key questions travelers ask: seasonality, daily timing, directions, booking workflow, package choice, and included media.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {priorityGuides.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-black rounded-[28px] p-8 md:p-9 hover:bg-[#dceeff] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3.5 py-1 bg-[#ffd731] text-black font-bold text-[11px] uppercase tracking-[0.032em] border border-black rounded-full">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-lg md:text-xl font-bold text-black transition-colors group-hover:underline min-h-[3.5rem] leading-snug tracking-tight">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-700 line-clamp-3 font-medium">
                      {post.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-black pt-4 border-t border-black/20">
                    <span>Read guide</span>
                    <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* General Articles Grid — Sea Blue (#bfe5ff) Section */}
        <div className="bg-[#bfe5ff] py-20 md:py-28 border-t border-black relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
            <div className="mb-12 space-y-2 text-center md:text-left">
              <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] border border-black rounded-full shadow-[3px_3px_0px_#000000]">
                Archive
              </span>
              <h2 className="font-lateral text-4xl sm:text-6xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
                All Guides &amp; Articles
              </h2>
              <p className="text-neutral-800 text-base font-medium">
                Browse our complete library of local scuba diving guides and tips.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col h-full bg-white border border-black rounded-[28px] p-5 hover:bg-[#dceeff] transition-colors overflow-hidden"
                >
                  <div className="relative h-56 rounded-[20px] overflow-hidden border border-black bg-[#e9e9e9] mb-5">
                    <Image
                      src={post.coverImage || "/images/netrani-diver.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-[#ffd731] border border-black px-3 py-1 rounded-full text-[11px] font-bold text-black uppercase tracking-[0.032em]">
                      {post.readTime}
                    </div>
                  </div>

                  <div className="px-2 pb-2 flex flex-col flex-grow text-black">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-[#e9ccff] text-black font-bold text-[11px] uppercase tracking-[0.032em] border border-black rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-black transition-colors leading-snug line-clamp-2 tracking-tight group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-neutral-700 text-xs leading-relaxed mb-6 line-clamp-3 font-medium">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-black/20 flex items-center justify-between text-xs font-medium text-neutral-600">
                      <span>{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-bold text-black inline-flex items-center gap-1.5 hover:underline"
                      >
                        <span>Read Article</span>
                        <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
