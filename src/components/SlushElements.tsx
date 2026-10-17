import React from "react";

/**
 * Slush 3D Inflatable Ribbon:
 * Electric Blue (#4da2ff) tubular sculptural form that wraps behind display headlines.
 * Crafted with SVG radial & specular highlights to mimic a glossy, inflated 3D vinyl tube.
 */
export function InflatableRibbon({
  className = "",
  variant = "wave",
}: {
  className?: string;
  variant?: "wave" | "loop" | "arc";
}) {
  if (variant === "loop") {
    return (
      <svg
        viewBox="0 0 1000 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full pointer-events-none select-none ${className}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main 3D tubular lighting gradient */}
          <linearGradient id="ribbonLoopShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#80c0ff" />
            <stop offset="28%" stopColor="#4da2ff" />
            <stop offset="70%" stopColor="#2480e6" />
            <stop offset="100%" stopColor="#105cb3" />
          </linearGradient>
          <linearGradient id="ribbonSpec" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Back tube shadow */}
        <path
          d="M-50 180 C 180 320, 320 20, 520 180 C 720 340, 840 80, 1050 190"
          stroke="#000000"
          strokeWidth="68"
          strokeLinecap="round"
          opacity="0.12"
        />

        {/* Main 3D Electric Blue inflated tube */}
        <path
          d="M-50 170 C 180 310, 320 10, 520 170 C 720 330, 840 70, 1050 180"
          stroke="url(#ribbonLoopShade)"
          strokeWidth="62"
          strokeLinecap="round"
        />

        {/* Specular inflatable highlight tube */}
        <path
          d="M-50 160 C 180 300, 320 0, 520 160 C 720 320, 840 60, 1050 170"
          stroke="#ffffff"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="140 220"
          opacity="0.75"
        />
      </svg>
    );
  }

  if (variant === "arc") {
    return (
      <svg
        viewBox="0 0 900 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full pointer-events-none select-none ${className}`}
      >
        <defs>
          <linearGradient id="ribbonArcShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#99ccff" />
            <stop offset="35%" stopColor="#4da2ff" />
            <stop offset="85%" stopColor="#1a70d1" />
          </linearGradient>
        </defs>
        <path
          d="M -20 120 C 220 -40, 680 -40, 920 140"
          stroke="url(#ribbonArcShade)"
          strokeWidth="56"
          strokeLinecap="round"
        />
        <path
          d="M 10 108 C 240 -28, 660 -28, 890 128"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    );
  }

  // Default wave ribbon
  return (
    <svg
      viewBox="0 0 1200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full pointer-events-none select-none ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ribbonWaveShade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#99ccff" />
          <stop offset="25%" stopColor="#4da2ff" />
          <stop offset="75%" stopColor="#2078db" />
          <stop offset="100%" stopColor="#0a4d9e" />
        </linearGradient>
      </defs>
      <path
        d="M -30 190 C 240 40, 480 320, 800 120 C 980 10, 1120 220, 1230 140"
        stroke="url(#ribbonWaveShade)"
        strokeWidth="64"
        strokeLinecap="round"
      />
      <path
        d="M -25 178 C 242 28, 482 308, 802 108 C 982 -2, 1122 208, 1225 130"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="180 260"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Slush Sticker Accents:
 * Hand-cut vinyl sticker elements with 1px solid black border, 16–20px radii,
 * and saturated fills from the 6 Slush palette colors.
 */
export function DiverMaskSticker({
  className = "",
  label = "PADI DIVE",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 bg-[#ffd731] border border-black rounded-[20px] select-none shadow-none transform transition-transform hover:scale-105 ${className}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect x="2" y="5" width="20" height="13" rx="6" fill="#4da2ff" stroke="#000000" strokeWidth="1.5" />
        <ellipse cx="8" cy="11" rx="4" ry="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />
        <ellipse cx="16" cy="11" rx="4" ry="3.5" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />
        <circle cx="9" cy="10" r="1.2" fill="#4da2ff" />
        <circle cx="17" cy="10" r="1.2" fill="#4da2ff" />
        <path d="M12 11.5 V15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="font-sans font-bold text-[11px] tracking-[0.032em] uppercase text-black">
        {label}
      </span>
    </div>
  );
}

export function TankSticker({
  className = "",
  label = "O2 NITROX",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 bg-[#fb4903] text-white border border-black rounded-[20px] select-none shadow-none transform transition-transform hover:scale-105 ${className}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect x="7" y="5" width="10" height="15" rx="5" fill="#ffd731" stroke="#000000" strokeWidth="1.5" />
        <rect x="10" y="2" width="4" height="3" rx="1" fill="#000000" />
        <path d="M10 10 H14" stroke="#000000" strokeWidth="1.2" />
        <path d="M10 13 H14" stroke="#000000" strokeWidth="1.2" />
      </svg>
      <span className="font-sans font-bold text-[11px] tracking-[0.032em] uppercase text-white">
        {label}
      </span>
    </div>
  );
}

export function StarfishSticker({
  className = "",
  label = "CORAL REEF",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 bg-[#55db9c] border border-black rounded-[20px] select-none shadow-none transform transition-transform hover:scale-105 ${className}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path
          d="M12 2 L14.5 8.5 L21.5 9 L16 13.5 L18 20.5 L12 16.5 L6 20.5 L8 13.5 L2.5 9 L9.5 8.5 Z"
          fill="#ffd731"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="1.5" fill="#fb4903" />
      </svg>
      <span className="font-sans font-bold text-[11px] tracking-[0.032em] uppercase text-black">
        {label}
      </span>
    </div>
  );
}

export function DepthSticker({
  className = "",
  label,
  depth = "30M DEPTH",
}: {
  className?: string;
  label?: string;
  depth?: string;
}) {
  const text = label || depth;
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 bg-[#5c4ade] text-white border border-black rounded-[20px] select-none shadow-none transform transition-transform hover:scale-105 ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <circle cx="12" cy="12" r="9" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
        <path d="M12 7 V12 L15 15" stroke="#fb4903" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#000000" />
      </svg>
      <span className="font-sans font-bold text-[11px] tracking-[0.032em] uppercase text-white">
        {text}
      </span>
    </div>
  );
}

export function CheckmarkSticker({
  className = "",
  label = "PADI CERTIFIED",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-2 bg-[#55db9c] border border-black rounded-[20px] select-none shadow-none transform transition-transform hover:scale-105 ${className}`}
    >
      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
        ✓
      </div>
      <span className="font-sans font-bold text-[11px] tracking-[0.032em] uppercase text-black">
        {label}
      </span>
    </div>
  );
}

export function IslandPinSticker({
  className = "",
  label = "NETRANI ISLAND",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-2 bg-[#e9ccff] border border-black rounded-[20px] select-none shadow-none transform transition-transform hover:scale-105 ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path
          d="M12 21 C12 21 19 14.5 19 9 C19 5.1 15.9 2 12 2 C8.1 2 5 5.1 5 9 C5 14.5 12 21 12 21 Z"
          fill="#fb4903"
          stroke="#000000"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="9" r="3" fill="#ffffff" stroke="#000000" strokeWidth="1" />
      </svg>
      <span className="font-sans font-bold text-[11px] tracking-[0.032em] uppercase text-black">
        {label}
      </span>
    </div>
  );
}

