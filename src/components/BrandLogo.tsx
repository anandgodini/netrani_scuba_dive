import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  imageOnly?: boolean;
}

export default function BrandLogo({
  size = "md",
  showText = true,
  className = "",
  imageOnly = false,
}: BrandLogoProps) {
  const iconSize = size === "sm" ? 38 : size === "lg" ? 54 : 44;

  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      aria-label="Netrani Scuba Dive - Home"
    >
      {/* Official Netrani Scuba Dive Logo Mark */}
      <div
        className="relative flex items-center justify-center rounded-full bg-[#ffffff] border border-[#000000] shrink-0 overflow-hidden shadow-[2px_2px_0px_#000000] transition-transform group-hover:rotate-2"
        style={{ width: iconSize, height: iconSize }}
      >
        <Image
          src="/logo.png"
          alt="Netrani Scuba Dive Logo"
          width={iconSize * 2}
          height={iconSize * 2}
          className="w-full h-full object-contain p-0.5"
          priority
        />
      </div>

      {showText && !imageOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span
              className={`font-sans font-bold tracking-[0.032em] text-[#000000] uppercase transition-colors ${
                size === "sm"
                  ? "text-sm"
                  : size === "lg"
                  ? "text-2xl"
                  : "text-base md:text-lg"
              }`}
            >
              NETRANI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb4903]"></span>
          </div>
          <span
            className={`font-sans font-bold tracking-[0.08em] text-[#000000]/70 uppercase transition-colors ${
              size === "sm"
                ? "text-[9px]"
                : size === "lg"
                ? "text-[12px]"
                : "text-[10px]"
            }`}
          >
            SCUBA DIVE
          </span>
        </div>
      )}
    </Link>
  );
}
