import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/data/posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const pageTitle = post.metaTitle || post.title;
  const pageDescription = post.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      ...post.tags.map((t) => `${t.toLowerCase()} murudeshwar`),
      "murudeshwara scuba diving",
      "murudeshwar scuba diving",
      "netrani island scuba diving",
      "scuba diving in murudeshwar",
      "netrani scuba",
      "gandhada gudi netrani",
      "puneeth rajkumar netrani scuba",
      "amoghavarsha netrani",
      "scuba diving in karnataka",
    ],
    alternates: {
      canonical: `https://www.murudeshwarscubadive.in/blog/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://www.murudeshwarscubadive.in/blog/${slug}`,
      siteName: "Netrani Scuba Dive",
      images: [
        {
          url: post.coverImage || "/images/netrani-scuba-cover.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [post.coverImage || "/images/netrani-scuba-cover.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const isGandhadaGudi = slug === "gandhada-gudi-netrani-scuba-diving-puneeth-rajkumar";

  // Helper to parse inline markdown (bold, italic, links)
  const parseInlineMarkdown = (text: string) => {
    // Match markdown links [label](url), bold **text**, and italic *text*
    const regex = /(\[[^\]]+\]\([^)]+\)|\*\*.*?\*\*|\*.*?\*)/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
        const lastBracketIndex = part.indexOf("](");
        if (lastBracketIndex !== -1) {
          const label = part.slice(1, lastBracketIndex);
          const url = part.slice(lastBracketIndex + 2, -1);
          const isExternal = url.startsWith("http");
          return (
            <Link
              key={idx}
              href={url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-[#2c2e2a] hover:text-[#000000] underline underline-offset-4 decoration-[#8ed462] font-medium transition-colors"
            >
              {label}
            </Link>
          );
        }
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-medium text-[#2c2e2a]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
        return (
          <em key={idx} className="italic text-[#80827f]">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];

    let currentList: { text: string; idx: number }[] = [];
    let currentTable: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-6 space-y-3">
            {currentList.map((item, lidx) => (
              <li key={lidx} className="flex items-start gap-3 text-[#2c2e2a] text-base md:text-lg leading-relaxed">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-[#8ed462] shrink-0" />
                <span className="flex-1">{parseInlineMarkdown(item.text)}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    const flushTable = () => {
      if (currentTable.length === 0) return;

      const isSeparator = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?\|?$/.test(
        currentTable[1] || ""
      );

      if (currentTable.length >= 2 && isSeparator) {
        const splitRow = (rowStr: string): string[] => {
          let str = rowStr.trim();
          if (str.startsWith("|")) str = str.slice(1);
          if (str.endsWith("|")) str = str.slice(0, -1);
          return str.split("|").map((c) => c.trim());
        };

        const headers = splitRow(currentTable[0]);
        const separatorCells = splitRow(currentTable[1]);
        const alignments = separatorCells.map((sep) => {
          const s = sep.trim();
          if (s.startsWith(":") && s.endsWith(":")) return "center";
          if (s.endsWith(":")) return "right";
          return "left";
        });

        const rows = currentTable.slice(2).map((rowStr) => {
          const cells = splitRow(rowStr);
          while (cells.length < headers.length) {
            cells.push("");
          }
          return cells;
        });

        const getAlignClass = (align: string) => {
          if (align === "center") return "text-center";
          if (align === "right") return "text-right";
          return "text-left";
        };

        elements.push(
          <div
            key={`table-${elements.length}`}
            className="my-8 md:my-10 w-full overflow-hidden rounded-[36px] border border-[#d5d5d4] bg-[#ffffff]"
          >
            {/* Mobile horizontal scroll hint */}
            <div className="md:hidden px-4 py-2 text-[11px] text-[#80827f] border-b border-[#d5d5d4] bg-[#f5f1e4] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 inline-block text-[#8ed462]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Swipe horizontally to view full table
              </span>
              <span className="text-[#2c2e2a] font-medium">↔</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left min-w-[620px]">
                <thead>
                  <tr className="border-b border-[#d5d5d4] bg-[#f5f1e4] text-xs font-medium uppercase tracking-wider text-[#2c2e2a]">
                    {headers.map((th, hIdx) => {
                      const align = alignments[hIdx] || "left";
                      return (
                        <th
                          key={hIdx}
                          className={`py-4 px-5 sm:px-6 font-medium ${getAlignClass(align)} ${
                            hIdx !== 0 ? "border-l border-[#d5d5d4]" : ""
                          }`}
                        >
                          {parseInlineMarkdown(th)}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d5d5d4] text-sm md:text-base text-[#2c2e2a]">
                  {rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={`transition-colors duration-150 hover:bg-[#f5f1e4]/50 ${
                        rIdx % 2 === 1 ? "bg-[#f5f1e4]/30" : ""
                      }`}
                    >
                      {row.map((cell, cIdx) => {
                        const align = alignments[cIdx] || "left";
                        return (
                          <td
                            key={cIdx}
                            className={`py-4 px-5 sm:px-6 leading-relaxed ${getAlignClass(align)} ${
                              cIdx !== 0 ? "border-l border-[#d5d5d4]" : ""
                            } ${cIdx === 0 ? "font-medium text-[#2c2e2a] whitespace-nowrap" : "text-[#80827f]"}`}
                          >
                            {parseInlineMarkdown(cell)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      } else {
        // Fallback: render raw lines if it wasn't a valid table
        currentTable.forEach((line, tIdx) => {
          elements.push(
            <p
              key={`fallback-${elements.length}-${tIdx}`}
              className="text-[#2c2e2a] leading-relaxed mb-6 text-base md:text-lg font-normal"
            >
              {parseInlineMarkdown(line)}
            </p>
          );
        });
      }

      currentTable = [];
    };

    lines.forEach((rawLine, idx) => {
      const trimmed = rawLine.trim();

      // Markdown Table row
      if (trimmed.startsWith("|")) {
        flushList();
        currentTable.push(trimmed);
        return;
      }

      // Flush table when encountering any non-table line
      flushTable();

      // Heading 1 (ignored inside body if single H1 is already in Hero)
      if (trimmed.startsWith("# ")) {
        flushList();
        return;
      }

      // Heading 2
      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <div key={idx} className="pt-8 pb-3 mt-6 border-b border-black">
            <h2 className="font-lateral text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight leading-[0.85] flex items-center gap-3">
              <span className="w-2.5 h-6 bg-[#55db9c] border border-black rounded-full inline-block"></span>
              {trimmed.slice(3)}
            </h2>
          </div>
        );
        return;
      }

      // Heading 3
      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3
            key={idx}
            className="text-xl md:text-2xl font-bold text-black mt-8 mb-3 tracking-tight"
          >
            {trimmed.slice(4)}
          </h3>
        );
        return;
      }

      // Markdown Image ![alt|caption](url) or ![alt](url)
      if (trimmed.startsWith("![")) {
        flushList();
        const lastBracketIndex = trimmed.indexOf("](");
        if (lastBracketIndex !== -1 && trimmed.endsWith(")")) {
          const altAndCaption = trimmed.slice(2, lastBracketIndex);
          const src = trimmed.slice(lastBracketIndex + 2, -1);
          let alt = altAndCaption;
          let caption = "";
          if (altAndCaption.includes("|")) {
            [alt, caption] = altAndCaption.split("|");
          }
          elements.push(
            <figure key={idx} className="my-8 rounded-[28px] overflow-hidden border border-black bg-white p-3 relative">
              <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-[20px] overflow-hidden border border-black bg-[#e9e9e9]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                />
              </div>
              {caption && (
                <figcaption className="p-3 text-xs sm:text-sm text-neutral-700 font-medium text-center">
                  {caption}
                </figcaption>
              )}
            </figure>
          );
          return;
        }
      }

      // Unordered list item
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        currentList.push({ text: trimmed.slice(2), idx });
        return;
      }

      // Ordered list item (e.g. 1. Check-in & briefing)
      const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (olMatch) {
        flushList();
        elements.push(
          <div key={idx} className="my-3 flex items-start gap-4 text-black text-base md:text-lg leading-relaxed font-medium">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ffd731] text-black border border-black font-bold text-xs shrink-0 mt-0.5">
              {olMatch[1]}
            </span>
            <div className="flex-1 pt-0.5">{parseInlineMarkdown(olMatch[2])}</div>
          </div>
        );
        return;
      }

      // Flush any list when encountering non-list items
      flushList();

      // Horizontal rule
      if (trimmed === "---") {
        elements.push(
          <div key={idx} className="my-10 flex items-center justify-center gap-3">
            <div className="h-[1px] w-1/3 bg-black"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black"></div>
            <div className="h-[1px] w-1/3 bg-black"></div>
          </div>
        );
        return;
      }

      // Empty line
      if (trimmed === "") {
        elements.push(<div key={idx} className="h-4" />);
        return;
      }

      // Blockquote / Pull-Quote
      if (trimmed.startsWith("> ")) {
        const quoteText = trimmed.slice(2).replace(/^"/, "").replace(/"$/, "");
        elements.push(
          <div
            key={idx}
            className="my-10 relative overflow-hidden rounded-[28px] border border-black bg-[#e9ccff] p-8 md:p-10"
          >
            <div className="text-4xl text-black font-serif leading-none mb-2">“</div>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-black tracking-tight italic leading-snug">
              {quoteText}
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.032em] text-neutral-800 font-bold">
              — Netrani Island Scuba Diving Guide
            </p>
          </div>
        );
        return;
      }

      // Callout box with 👉
      if (trimmed.startsWith("👉")) {
        elements.push(
          <div
            key={idx}
            className="my-8 p-6 md:p-8 rounded-[28px] bg-[#dceeff] border border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-[0.032em] uppercase text-black bg-[#ffd731] border border-black px-3 py-0.5 rounded-full inline-block">
                Featured Experience
              </span>
              <p className="text-black font-bold text-lg md:text-xl">
                Experience Netrani Scuba Diving from Murudeshwar
              </p>
              <p className="text-neutral-700 text-xs md:text-sm font-medium">
                PADI certified instructors, 1:1 guidance, boat transport &amp; free underwater HD photos/videos.
              </p>
            </div>
            <Link
              href="/#packages"
              className="slush-btn-black text-xs px-6 py-3.5 rounded-full whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>Explore Packages</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
            </Link>
          </div>
        );
        return;
      }

      // Standard Paragraph
      elements.push(
        <p
          key={idx}
          className="text-[#2c2e2a] leading-relaxed mb-6 text-base md:text-lg font-normal"
        >
          {parseInlineMarkdown(trimmed)}
        </p>
      );
    });

    flushList();
    flushTable();
    return elements;
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://www.murudeshwarscubadive.in/blog/${slug}/#article`,
      "url": `https://www.murudeshwarscubadive.in/blog/${slug}`,
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "image": `https://www.murudeshwarscubadive.in${post.coverImage || "/images/netrani-scuba-cover.png"}`,
      "author": {
        "@type": "Organization",
        "name": "Netrani Scuba Dive",
        "url": "https://www.murudeshwarscubadive.in",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Netrani Scuba Dive",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.murudeshwarscubadive.in/logo.png",
        },
      },
      "mainEntityOfPage": `https://www.murudeshwarscubadive.in/blog/${slug}`,
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
          "name": "Blog",
          "item": "https://www.murudeshwarscubadive.in/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.murudeshwarscubadive.in/blog/${slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Netrani Scuba Dive",
      "image": "https://www.murudeshwarscubadive.in/images/netrani-scuba-cover.png",
      "telephone": "+917829975777",
      "email": "murudeshwar.scuba.dive@gmail.com",
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
      "url": "https://www.murudeshwarscubadive.in",
      "priceRange": "₹1,999 - ₹3,500",
    },
  ];

  if (post.faq && post.faq.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    } as any);
  }

  return (
    <main className="min-h-screen bg-[#ffffff] text-black font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section — Sea Blue (#bfe5ff) Canvas with Ample Gaps */}
      <section className="bg-[#bfe5ff] pt-36 md:pt-44 pb-16 md:pb-20 px-6 border-b border-black relative">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold text-neutral-600">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-black font-bold truncate max-w-[240px] md:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Category Tag & Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-black bg-[#ffd731] border border-black px-3.5 py-1 uppercase tracking-[0.032em] rounded-full">
              {post.category}
            </span>
            <span className="text-xs font-bold text-black bg-white px-3 py-1 border border-black rounded-full">
              {post.readTime}
            </span>
            <span className="text-xs text-neutral-700 font-bold">
              {post.date}
            </span>
          </div>

          {/* Editorial H1 Heading */}
          <h1 className="font-lateral text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-black uppercase leading-[0.80] tracking-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Editorial Subtitle */}
          {post.subtitle && (
            <p className="mt-5 text-base md:text-xl text-neutral-800 font-medium max-w-3xl leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {/* Author / Editorial Credit */}
          <div className="mt-6 pt-6 border-t border-black/20 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#55db9c] border border-black rounded-full flex items-center justify-center text-black font-extrabold text-sm">
              NSD
            </div>
            <div>
              <p className="text-xs font-bold text-black uppercase tracking-[0.032em]">
                Netrani Scuba Dive Editorial
              </p>
              <p className="text-[11px] text-neutral-700 font-medium">
                PADI Certified Ocean Guides &amp; Explorers • Netrani Island, Karnataka
              </p>
            </div>
          </div>

          {/* Hero Cover Image Card */}
          <div className="mt-10 rounded-[28px] overflow-hidden border border-black bg-white p-3">
            <div className="relative h-72 sm:h-96 md:h-[460px] w-full rounded-[20px] overflow-hidden border border-black bg-[#e9e9e9]">
              <Image
                src={post.coverImage || "/images/netrani-diver.jpg"}
                alt={`${post.title} - Netrani Island Scuba Diving Karnataka`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid — Paper White (#ffffff) Canvas */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Main Article Column */}
            <article className="lg:col-span-2 space-y-8">

              {/* Special Story Connection Box for Gandhada Gudi */}
              {isGandhadaGudi && (
                <div className="border border-black bg-[#dceeff] text-black p-8 md:p-10 rounded-[28px] space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.032em] text-neutral-700">
                      The Editorial Connection
                    </span>
                  </div>
                  <h2 className="font-lateral text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tight leading-[0.85]">
                    Where Cinema, Wildlife &amp; The Arabian Sea Intersect
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                    <div className="p-4 bg-white rounded-[20px] border border-black">
                      <p className="text-[10px] text-black font-bold uppercase tracking-wider bg-[#ffd731] border border-black px-2 py-0.5 rounded-full inline-block">Icon</p>
                      <p className="text-sm font-bold text-black mt-2">Dr. Puneeth Rajkumar</p>
                      <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">Appu’s authentic curiosity &amp; love for nature</p>
                    </div>
                    <div className="p-4 bg-white rounded-[20px] border border-black">
                      <p className="text-[10px] text-black font-bold uppercase tracking-wider bg-[#e9ccff] border border-black px-2 py-0.5 rounded-full inline-block">Filmmaker</p>
                      <p className="text-sm font-bold text-black mt-2">Amoghavarsha JS</p>
                      <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">National Award winning conservation storyteller</p>
                    </div>
                    <div className="p-4 bg-white rounded-[20px] border border-black col-span-2 sm:col-span-1">
                      <p className="text-[10px] text-black font-bold uppercase tracking-wider bg-[#55db9c] border border-black px-2 py-0.5 rounded-full inline-block">Destination</p>
                      <p className="text-sm font-bold text-black mt-2">Netrani Island</p>
                      <p className="text-[11px] text-neutral-600 mt-0.5 font-medium">Karnataka’s premier coral reef diving paradise</p>
                    </div>
                  </div>

                  {/* Puneeth Rajkumar Authentic Press & Photo Showcase */}
                  <div className="mt-6 border border-black bg-white rounded-[24px] overflow-hidden">
                    <div className="p-4 bg-white border-b border-black flex items-center justify-between text-black">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
                        <span className="text-xs font-bold uppercase tracking-[0.032em] text-black">
                          Archival Press Archive • Prajavani
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-600 font-bold">
                        Netrani Island, Murudeshwar
                      </span>
                    </div>

                    <div className="relative w-full bg-white p-4">
                      <Image
                        src="/images/puneeth-rajkumar-netrani.png"
                        alt="Dr. Puneeth Rajkumar Scuba Diving at Netrani Island Murudeshwar Prajavani Newspaper Report"
                        width={1080}
                        height={720}
                        className="w-full h-auto object-contain rounded-[16px] border border-black"
                        priority
                      />
                    </div>

                    <div className="p-6 bg-white border-t border-black space-y-3">
                      <span className="text-xs font-bold text-black bg-[#ffd731] border border-black px-3 py-1 rounded-full inline-block">
                        &ldquo;ಸ್ಕೂಬಾ ಡೈವಿಂಗ್ ಸಾಹಸ — ಮುರ್ಡೇಶ್ವರ&rdquo;
                      </span>
                      <p className="text-sm sm:text-base font-bold text-black leading-relaxed">
                        &ldquo;After scuba diving here, he expressed that diving at Netrani Island in Karnataka brought him even greater happiness than diving in foreign destinations abroad.&rdquo;
                      </p>
                      <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                        Dr. Puneeth Rajkumar during his scuba diving exploration at Netrani Island for <em>Gandhada Gudi</em>, capturing the unseen underwater beauty of Karnataka.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Rendered Article Body */}
              <div className="max-w-none text-black font-medium leading-relaxed">
                {renderMarkdown(post.content)}
              </div>

              {/* Mid-Article Editorial Callout */}
              <div className="border border-black bg-[#dceeff] text-black p-8 md:p-12 my-10 rounded-[28px] relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] border border-black rounded-full">
                    Live the Legacy
                  </span>
                  <h3 className="font-lateral text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tight leading-[0.85]">
                    Inspired by Gandhada Gudi? Experience Netrani For Yourself.
                  </h3>
                  <p className="text-neutral-800 text-sm md:text-base leading-relaxed font-medium">
                    Step off the shore of Murudeshwar into the turquoise waters of Netrani Island. Our certified PADI divemasters provide dedicated 1:1 supervision for beginners, non-swimmers, and experienced adventurers alike.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      href="https://www.murudeshwarscubadive.in/?utm_source=chatgpt.com"
                      className="slush-btn-black text-xs uppercase tracking-[0.032em] px-8 py-4 inline-flex items-center gap-2"
                    >
                      <span>Explore Netrani Scuba Diving</span>
                      <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
                    </Link>
                    <a
                      href="tel:+917829975777"
                      className="slush-pill-btn bg-white hover:bg-[#55db9c] text-black border border-black text-xs uppercase tracking-[0.032em] px-6 py-4 inline-flex items-center gap-2"
                    >
                      <span>Call +91 78299 75777</span>
                      <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Internal Quick Links to Explore Karnataka Scuba */}
              <div className="pt-8 border-t border-black/20">
                <h4 className="text-xs font-bold uppercase tracking-[0.032em] text-neutral-600 mb-4">
                  Explore More Murudeshwar Resources
                </h4>
                <div className="flex flex-wrap gap-2.5 text-xs">
                  <Link
                    href="/netrani-scuba-diving"
                    className="px-4 py-2 bg-white text-black border border-black hover:bg-[#ffd731] rounded-full transition-colors font-bold"
                  >
                    Netrani Island Package (₹3,500)
                  </Link>
                  <Link
                    href="/intro-scuba-diving"
                    className="px-4 py-2 bg-white text-black border border-black hover:bg-[#ffd731] rounded-full transition-colors font-bold"
                  >
                    VIP Extended Dive (₹4,500)
                  </Link>
                  <Link
                    href="/how-to-reach-murudeshwar"
                    className="px-4 py-2 bg-white text-black border border-black hover:bg-[#ffd731] rounded-full transition-colors font-bold"
                  >
                    How to Reach Murudeshwar
                  </Link>
                  <Link
                    href="/gallery"
                    className="px-4 py-2 bg-white text-black border border-black hover:bg-[#ffd731] rounded-full transition-colors font-bold"
                  >
                    Photos &amp; Videos Gallery
                  </Link>
                  <Link
                    href="/team"
                    className="px-4 py-2 bg-white text-black border border-black hover:bg-[#ffd731] rounded-full transition-colors font-bold"
                  >
                    Meet Our PADI Dive Team
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Sidebar Booking Pane */}
            <aside className="space-y-6">
              <div className="p-8 space-y-6 sticky top-28 bg-white text-black border border-black rounded-[28px]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#55db9c] text-black text-xs font-bold uppercase tracking-[0.032em] mb-3 border border-black rounded-full">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    Season Active: Oct – May
                  </div>
                  <h3 className="font-lateral text-2xl font-extrabold text-black uppercase tracking-tight leading-[0.85]">
                    Netrani Island Scuba Packages
                  </h3>
                  <p className="text-neutral-700 text-xs leading-relaxed mt-1 font-medium">
                    Book direct with Murudeshwar’s premier PADI dive team. 100% transparent pricing.
                  </p>
                </div>

                <hr className="border-t border-black/20" />

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center p-4 bg-[#ffd731]/30 rounded-[20px] border border-black">
                    <div>
                      <p className="text-black font-bold">Full Netrani Dive</p>
                      <p className="text-[11px] text-neutral-600 font-medium">30–40 min reef bottom time</p>
                    </div>
                    <span className="text-black font-extrabold text-base">₹3,500</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#e9ccff] rounded-[20px] border border-black">
                    <div>
                      <p className="text-black font-bold">VIP Extended Experience</p>
                      <p className="text-[11px] text-neutral-600 font-medium">45–55 min deep reef time</p>
                    </div>
                    <span className="text-[#fb4903] font-extrabold text-base">₹4,500</span>
                  </div>

                  <div className="flex justify-between items-center px-4 py-2.5 bg-white border border-black rounded-full text-black text-xs font-bold">
                    <span>HD Photos &amp; Video Pack</span>
                    <span className="text-[#55db9c] bg-black px-2 py-0.5 rounded-full text-[10px]">INCLUDED FREE</span>
                  </div>
                </div>

                <hr className="border-t border-black/20" />

                <div className="space-y-3 text-xs font-bold">
                  <a
                    href="tel:+917829975777"
                    className="w-full flex items-center justify-center gap-2 slush-btn-black py-3.5 rounded-full uppercase tracking-[0.032em]"
                  >
                    <span>Call Booking Desk</span>
                    <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
                  </a>
                  <a
                    href="https://wa.me/917406329777?text=Hi%2C%20I%20want%20to%20book%20scuba%20diving%20at%20Netrani%20Island%20in%20Murudeshwar.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 slush-pill-btn bg-white hover:bg-[#55db9c] text-black border border-black py-3.5 rounded-full uppercase tracking-[0.032em]"
                  >
                    <span>WhatsApp Desk</span>
                    <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
                  </a>
                </div>

                <div className="p-4 bg-[#dceeff] rounded-[20px] text-center space-y-1 border border-black">
                  <p className="text-xs text-black font-bold">
                    Reserve with ₹500 Advance
                  </p>
                  <p className="text-[11px] text-neutral-700 leading-relaxed font-medium">
                    Balance payable upon morning reporting. Free cancellation up to 48 hrs prior.
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Articles Section — Sea Blue (#bfe5ff) Section */}
      <section className="bg-[#bfe5ff] py-20 md:py-28 border-t border-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-1">
              <span className="inline-block px-3.5 py-1 bg-white text-black font-bold text-xs uppercase tracking-[0.032em] border border-black rounded-full shadow-[3px_3px_0px_#000000]">
                Curated Travel Journal
              </span>
              <h2 className="font-lateral text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
                Discover More Netrani Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-black inline-flex items-center gap-1.5 uppercase tracking-[0.032em] hover:underline"
            >
              View All 20+ Guides →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link
              href="/blog/netrani-island-guide"
              className="group bg-white text-black border border-black rounded-[28px] p-8 hover:bg-[#dceeff] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#ffd731] text-black font-bold text-[11px] uppercase tracking-[0.032em] border border-black rounded-full">
                  Island Guide
                </span>
                <h3 className="text-base font-bold text-black transition-colors mt-3 leading-snug tracking-tight group-hover:underline">
                  Discover Netrani Island: Distance, Marine Life &amp; Travel
                </h3>
                <p className="text-neutral-700 text-xs leading-relaxed mt-2 line-clamp-3 font-medium">
                  Everything you need to know about Karnataka’s heart-shaped Pigeon Island, situated 19 km off Murudeshwar beach.
                </p>
              </div>
              <span className="text-xs font-bold text-black mt-6 inline-flex items-center gap-1.5 pt-3 border-t border-black/20">
                <span>Read guide</span>
                <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
              </span>
            </Link>

            {/* Card 2 */}
            <Link
              href="/blog/murudeshwar-scuba-diving-price-cost"
              className="group bg-white text-black border border-black rounded-[28px] p-8 hover:bg-[#dceeff] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#e9ccff] text-black font-bold text-[11px] uppercase tracking-[0.032em] border border-black rounded-full">
                  Pricing &amp; Cost
                </span>
                <h3 className="text-base font-bold text-black transition-colors mt-3 leading-snug tracking-tight group-hover:underline">
                  Complete Guide to Netrani Scuba Diving Prices &amp; Packages (2026)
                </h3>
                <p className="text-neutral-700 text-xs leading-relaxed mt-2 line-clamp-3 font-medium">
                  Compare ₹1,999 Intro and ₹3,500 Netrani packages, equipment inclusions, and how to get group booking discounts.
                </p>
              </div>
              <span className="text-xs font-bold text-black mt-6 inline-flex items-center gap-1.5 pt-3 border-t border-black/20">
                <span>Read guide</span>
                <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
              </span>
            </Link>

            {/* Card 3 */}
            <Link
              href="/blog/best-time-scuba-diving-murudeshwar"
              className="group bg-white text-black border border-black rounded-[28px] p-8 hover:bg-[#dceeff] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#55db9c] text-black font-bold text-[11px] uppercase tracking-[0.032em] border border-black rounded-full">
                  Best Season
                </span>
                <h3 className="text-base font-bold text-black transition-colors mt-3 leading-snug tracking-tight group-hover:underline">
                  Best Time for Scuba Diving in Murudeshwar &amp; Netrani
                </h3>
                <p className="text-neutral-700 text-xs leading-relaxed mt-2 line-clamp-3 font-medium">
                  Month-by-month ocean visibility breakdown (15-30m), weather conditions, and monsoon safety schedule.
                </p>
              </div>
              <span className="text-xs font-bold text-black mt-6 inline-flex items-center gap-1.5 pt-3 border-t border-black/20">
                <span>Read guide</span>
                <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Booking Call to Action */}
      <section className="bg-white py-20 px-6 relative border-t border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 md:p-14 bg-white border border-black rounded-[36px] space-y-6">
            <span className="text-xs font-bold text-black bg-[#ffd731] border border-black px-4 py-1.5 inline-block uppercase tracking-[0.032em] rounded-full">
              Start Your Ocean Journey
            </span>
            <h2 className="font-lateral text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight leading-[0.80]">
              Your Netrani Adventure Starts Here.
            </h2>
            <p className="text-base md:text-lg text-neutral-800 max-w-2xl mx-auto leading-relaxed font-medium">
              Come to Murudeshwar. Meet the Arabian Sea. Dive into Netrani and discover the Karnataka beneath the waves.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#packages"
                className="w-full sm:w-auto slush-btn-black text-xs md:text-sm px-8 py-4 uppercase tracking-[0.032em] inline-flex items-center justify-center gap-2"
              >
                <span>Book Your Scuba Diving Experience</span>
                <span className="w-2 h-2 rounded-full bg-[#55db9c]"></span>
              </Link>
              <a
                href="tel:+917829975777"
                className="w-full sm:w-auto slush-pill-btn bg-white hover:bg-[#55db9c] text-black border border-black text-xs md:text-sm uppercase tracking-[0.032em] px-8 py-4 inline-flex items-center justify-center gap-2"
              >
                <span>Direct Desk: +91 78299 75777</span>
                <span className="w-2 h-2 rounded-full bg-[#55db9c] border border-black"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
