"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Netrani Scuba", href: "/netrani-scuba-diving" },
    { name: "VIP Extended Dive", href: "/intro-scuba-diving" },
    { name: "Group Trips", href: "/bulk-scuba-booking" },
    { name: "Dive Gallery", href: "/gallery" },
    { name: "Guides & Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Slush Marquee Banner: Full-bleed horizontal band at page top */}
      <div className="w-full bg-[#000000] border-b border-[#000000] overflow-hidden py-1.5 pointer-events-auto select-none transition-colors">
        <div className="slush-marquee-track flex items-center gap-6 whitespace-nowrap text-[12px] font-bold tracking-[0.032em] text-[#ffffff] uppercase font-sans">
          <span>★ NETRANI SCUBA DIVE • KARNATAKA’S HEART-SHAPED CORAL REEF</span>
          <span className="text-[#ffd731]">• SLOTS FROM ₹3,500</span>
          <span>• PADI CERTIFIED OCEAN GUIDES</span>
          <span className="text-[#55db9c]">• 100% TRANSPARENT PRICING</span>
          <span>• CALL +91 74063 29777</span>
          <span>★ NETRANI SCUBA DIVE • KARNATAKA’S HEART-SHAPED CORAL REEF</span>
          <span className="text-[#ffd731]">• SLOTS FROM ₹3,500</span>
          <span>• PADI CERTIFIED OCEAN GUIDES</span>
          <span className="text-[#55db9c]">• 100% TRANSPARENT PRICING</span>
          <span>• CALL +91 74063 29777</span>
        </div>
      </div>

      {/* Slush Top Nav Bar */}
      <div className="pt-3 md:pt-4 px-4 md:px-8">
        <nav className="max-w-[1440px] mx-auto bg-[#ffffff] border border-[#000000] rounded-full px-3.5 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all shadow-[4px_4px_0px_#000000]">
          {/* Logo Mark: Circular black-outlined badge */}
          <BrandLogo size="md" />

          {/* Desktop Navigation Links: Pill Nav Buttons with outline */}
          <div className="hidden lg:flex items-center gap-2 text-[13px] font-bold tracking-[0.032em] text-[#000000]">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-1.5 px-3.5 rounded-full border transition-all hover:scale-105 active:scale-95 ${
                    isActive
                      ? "bg-[#ffd731] text-black border-black shadow-[2px_2px_0px_#000000]"
                      : "bg-[#ffffff] text-black border-black hover:bg-[#d8efff]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Controls: Plus Menu Button + Filled CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Plus Menu Button: Circular button with + glyph */}
            <button
              onClick={toggleMenu}
              className="w-10 h-10 rounded-full bg-[#ffffff] hover:bg-[#e9ccff] border border-black flex items-center justify-center text-black font-bold text-lg transition-transform hover:rotate-90 active:scale-95 shrink-0 cursor-pointer shadow-[2px_2px_0px_#000000]"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? "×" : "+"}
            </button>

            {/* Filled CTA Button */}
            <a
              href="tel:+917406329777"
              data-cta="call"
              className="hidden sm:inline-flex items-center gap-2 bg-[#000000] hover:bg-[#222222] text-[#ffffff] text-[13px] font-bold tracking-[0.032em] py-2.5 px-5 rounded-full border border-black transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#55db9c] uppercase"
            >
              <span>Book Slot</span>
              <span className="w-2 h-2 rounded-full bg-[#55db9c] animate-pulse"></span>
            </a>
          </div>
        </nav>
      </div>

      {/* Slush Mobile Menu Overlay: Sea Blue Paper with sticker cards */}
      <div
        className={`fixed inset-0 bg-[#bfe5ff] z-40 flex flex-col justify-between p-6 md:p-10 transition-all duration-300 ease-in-out pointer-events-auto ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1440px] mx-auto w-full bg-[#ffffff] border border-black rounded-full px-5 py-2.5 shadow-[3px_3px_0px_#000000]">
          <BrandLogo size="md" />
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-[#ffffff] border border-black flex items-center justify-center text-black font-bold text-xl hover:bg-[#fb4903] hover:text-white"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-2.5 my-auto max-w-[600px] mx-auto w-full py-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className={`text-xl sm:text-2xl font-bold tracking-[0.02em] p-4 rounded-[24px] border border-black transition-all flex items-center justify-between uppercase shadow-[3px_3px_0px_#000000] ${
                  isActive
                    ? "bg-[#ffd731] text-black"
                    : "bg-[#ffffff] text-black hover:bg-[#e9ccff]"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-sm">→</span>
              </Link>
            );
          })}
        </div>

        <div className="max-w-[600px] mx-auto w-full flex flex-col gap-3">
          <a
            href="tel:+917406329777"
            className="w-full py-4 text-center rounded-full bg-[#000000] text-[#ffffff] font-bold text-sm uppercase tracking-[0.032em] border border-black shadow-[3px_3px_0px_#000000]"
          >
            Call Desk: +91 74063 29777
          </a>
        </div>
      </div>
    </header>
  );
}
