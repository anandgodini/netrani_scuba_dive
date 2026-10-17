import React from "react";

/**
 * MindMarket Paper-Cut Storybook Illustrations
 * Flat vibrant paper cutout character art in Fresh Grass (#8ed462), Sky Pop (#2ba0ff),
 * Coral Pop (#ff705d), Sunshine Pop (#f5e211), and Ink Black (#2c2e2a).
 */

export function DiverPaperCutArtwork({ className = "w-full max-w-xl mx-auto h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 640 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        {/* Soft background sticker clouds / water swirls */}
        <path
          d="M60 280 C110 240, 190 270, 240 230 C290 190, 360 210, 420 180 C480 150, 560 170, 600 220"
          stroke="#e0dbce"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="14 14"
        />
        <path
          d="M40 330 C120 300, 220 350, 320 320 C420 290, 500 340, 590 310"
          stroke="#8ed462"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Paper-cut Coral Garden - Left */}
        <g>
          {/* Coral fan - Coral Pop */}
          <path
            d="M50 380 C45 320, 60 280, 80 270 C95 260, 115 285, 120 310 C125 290, 145 280, 160 300 C175 320, 165 355, 170 380 Z"
            fill="#ff705d"
          />
          {/* Coral details */}
          <circle cx="80" cy="290" r="4" fill="#ffffff" />
          <circle cx="100" cy="305" r="5" fill="#ffffff" />
          <circle cx="140" cy="320" r="4" fill="#ffffff" />

          {/* Sea Anemone - Sunshine Pop */}
          <path
            d="M20 380 C15 340, 35 320, 45 330 C55 315, 75 330, 70 380 Z"
            fill="#f5e211"
          />
          {/* Starfish - Sky Pop */}
          <path
            d="M105 375 L112 360 L125 365 L118 377 L126 388 L111 385 L102 395 L103 381 Z"
            fill="#2ba0ff"
          />
        </g>

        {/* Paper-cut Sea Turtle - Gliding Top Left */}
        <g transform="translate(90, 90) rotate(12)">
          {/* Flippers */}
          <ellipse cx="60" cy="18" rx="28" ry="10" fill="#8ed462" transform="rotate(-30 60 18)" />
          <ellipse cx="60" cy="62" rx="28" ry="10" fill="#8ed462" transform="rotate(30 60 62)" />
          {/* Shell */}
          <ellipse cx="40" cy="40" rx="30" ry="24" fill="#2ba0ff" />
          {/* Shell inner segments */}
          <ellipse cx="40" cy="40" rx="22" ry="16" fill="#f5e211" opacity="0.9" />
          <ellipse cx="40" cy="40" rx="14" ry="10" fill="#2c2e2a" />
          {/* Head & rear flippers */}
          <circle cx="75" cy="40" r="10" fill="#8ed462" />
          <circle cx="78" cy="38" r="2.5" fill="#2c2e2a" />
          <ellipse cx="14" cy="28" rx="12" ry="6" fill="#8ed462" transform="rotate(20 14 28)" />
          <ellipse cx="14" cy="52" rx="12" ry="6" fill="#8ed462" transform="rotate(-20 14 52)" />
        </g>

        {/* Paper-cut Scuba Diver Character - Center */}
        <g transform="translate(240, 110)">
          {/* Air Tank - Sunshine Pop */}
          <rect x="70" y="25" width="90" height="32" rx="16" fill="#f5e211" />
          <rect x="58" y="35" width="14" height="12" rx="4" fill="#2c2e2a" />
          <path d="M60 40 C45 40, 35 60, 42 75" stroke="#2c2e2a" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Diver Body / Wetsuit - Fresh Grass #8ed462 */}
          {/* Torso */}
          <path
            d="M75 50 C95 40, 160 45, 190 65 C180 85, 140 95, 85 85 Z"
            fill="#8ed462"
          />
          {/* Legs */}
          <path
            d="M185 65 C220 75, 275 80, 310 70 L305 88 C265 96, 215 95, 175 82 Z"
            fill="#8ed462"
          />
          {/* Second leg overlap for depth */}
          <path
            d="M180 75 C215 95, 265 110, 300 108 L295 124 C255 125, 205 108, 170 88 Z"
            fill="#2c2e2a"
          />

          {/* Flippers - Coral Pop #ff705d */}
          <path
            d="M305 68 L360 55 C370 75, 360 85, 305 85 Z"
            fill="#ff705d"
          />
          <path
            d="M295 108 L355 115 C360 135, 345 142, 290 125 Z"
            fill="#ff705d"
          />

          {/* Diver Arms extended forward */}
          <path
            d="M95 65 C70 80, 45 100, 25 110 C20 102, 35 88, 65 72 Z"
            fill="#8ed462"
          />
          {/* Camera / Torch in hands - Sky Pop */}
          <rect x="10" y="105" width="24" height="18" rx="6" fill="#2ba0ff" />
          <circle cx="22" cy="114" r="5" fill="#f5e211" />

          {/* Diver Head & Hood - Ink Black */}
          <circle cx="58" cy="62" r="22" fill="#2c2e2a" />
          {/* Face Area */}
          <ellipse cx="48" cy="64" rx="10" ry="12" fill="#f5f1e4" />
          {/* Diving Mask - Sky Pop with White Glint */}
          <rect x="36" y="55" width="22" height="18" rx="7" fill="#2ba0ff" stroke="#2c2e2a" strokeWidth="2.5" />
          <ellipse cx="45" cy="61" rx="5" ry="3" fill="#ffffff" opacity="0.9" />
          {/* Snorkel tube - Coral Pop */}
          <path d="M52 74 C58 78, 64 78, 66 70 L72 38" stroke="#ff705d" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Air Bubbles Rising - Sky Pop & White */}
          <circle cx="28" cy="48" r="8" fill="#ffffff" stroke="#2ba0ff" strokeWidth="2.5" />
          <circle cx="18" cy="28" r="6" fill="#ffffff" stroke="#2ba0ff" strokeWidth="2" />
          <circle cx="8" cy="12" r="4.5" fill="#2ba0ff" />
          <circle cx="34" cy="8" r="3" fill="#8ed462" />
        </g>

        {/* Paper-cut Fish School - Right */}
        <g transform="translate(500, 160)">
          {/* Fish 1 - Sunshine Pop */}
          <path d="M40 20 C20 5, 0 18, -15 8 L-10 20 L-15 32 C0 22, 20 35, 40 20 Z" fill="#f5e211" />
          <circle cx="26" cy="18" r="2.5" fill="#2c2e2a" />
          {/* Fish 2 - Coral Pop */}
          <path d="M80 60 C65 48, 50 58, 38 50 L42 60 L38 70 C50 62, 65 72, 80 60 Z" fill="#ff705d" />
          <circle cx="70" cy="58" r="2" fill="#2c2e2a" />
          {/* Fish 3 - Sky Pop */}
          <path d="M20 90 C8 78, -5 88, -15 80 L-12 90 L-15 100 C-5 92, 8 102, 20 90 Z" fill="#2ba0ff" />
          <circle cx="10" cy="88" r="2" fill="#2c2e2a" />
        </g>

        {/* Paper-cut Coral Garden - Right Base */}
        <g transform="translate(480, 290)">
          {/* Tall branch - Fresh Grass */}
          <path
            d="M70 100 C70 50, 85 20, 100 10 C110 3, 120 18, 115 45 C125 35, 140 45, 135 70 C145 65, 155 75, 150 100 Z"
            fill="#8ed462"
          />
          {/* Round brain coral - Sky Pop */}
          <circle cx="30" cy="85" r="35" fill="#2ba0ff" />
          <circle cx="30" cy="85" r="25" fill="#f5f1e4" />
          <circle cx="30" cy="85" r="14" fill="#ff705d" />
        </g>
      </svg>
    </div>
  );
}

export function BoatPaperCutArtwork({ className = "w-full max-w-md mx-auto h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 480 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        {/* Sunshine Sun - Sunshine Pop */}
        <circle cx="90" cy="90" r="42" fill="#f5e211" />
        <circle cx="90" cy="90" r="32" fill="#ff705d" opacity="0.15" />

        {/* Paper-cut Clouds */}
        <ellipse cx="280" cy="70" rx="45" ry="18" fill="#ffffff" />
        <ellipse cx="310" cy="65" rx="30" ry="16" fill="#ffffff" />
        <ellipse cx="260" cy="75" rx="25" ry="14" fill="#ffffff" />

        {/* Netrani Heart-shaped Island Silhouette in distance */}
        <path
          d="M320 200 C340 160, 390 150, 410 180 C430 150, 480 160, 490 200 C470 230, 410 240, 320 200 Z"
          fill="#8ed462"
          opacity="0.8"
        />

        {/* Ocean Wave Layers - Paper Cutouts */}
        <path
          d="M0 240 Q60 215, 120 240 T240 240 T360 240 T480 240 L480 320 L0 320 Z"
          fill="#2ba0ff"
          opacity="0.3"
        />
        <path
          d="M0 260 Q60 240, 120 260 T240 260 T360 260 T480 260 L480 320 L0 320 Z"
          fill="#2ba0ff"
          opacity="0.6"
        />

        {/* Dive Boat */}
        <g transform="translate(140, 155)">
          {/* Boat Hull - Pure White */}
          <path
            d="M0 55 L35 90 L160 90 L195 55 Z"
            fill="#ffffff"
            stroke="#2c2e2a"
            strokeWidth="3.5"
          />
          {/* Waterline Stripe - Coral Pop */}
          <path d="M15 72 L180 72" stroke="#ff705d" strokeWidth="5" strokeLinecap="round" />

          {/* Cabin - Fresh Grass & Sky Pop */}
          <rect x="45" y="15" width="85" height="40" rx="10" fill="#8ed462" stroke="#2c2e2a" strokeWidth="3" />
          <circle cx="65" cy="35" r="9" fill="#2ba0ff" stroke="#2c2e2a" strokeWidth="2.5" />
          <circle cx="95" cy="35" r="9" fill="#2ba0ff" stroke="#2c2e2a" strokeWidth="2.5" />

          {/* Canopy / Roof - Sunshine Pop */}
          <path d="M35 15 L140 15 L130 5 L45 5 Z" fill="#f5e211" stroke="#2c2e2a" strokeWidth="2.5" />

          {/* Dive Flag on Stern - Coral Pop with White Stripe */}
          <line x1="160" y1="55" x2="160" y2="10" stroke="#2c2e2a" strokeWidth="3" />
          <polygon points="160,10 190,20 160,30" fill="#ff705d" />
          <line x1="160" y1="10" x2="190" y2="30" stroke="#ffffff" strokeWidth="2.5" />
        </g>

        {/* Foreground Wave - Deep Cut */}
        <path
          d="M0 280 Q60 260, 120 280 T240 280 T360 280 T480 280 L480 320 L0 320 Z"
          fill="#2ba0ff"
        />
      </svg>
    </div>
  );
}
