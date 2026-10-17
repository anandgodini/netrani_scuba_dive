"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function LiveDepthHUD() {
  const { scrollYProgress } = useScroll();
  const [depth, setDepth] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth progress value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  // Virtual depth in meters from 0 to 30m
  const virtualDepth = useTransform(smoothProgress, [0, 1], [0, 30]);

  useEffect(() => {
    const unsubscribe = virtualDepth.on("change", (latest) => {
      setDepth(latest);
      // Show HUD once user starts scrolling slightly
      if (latest > 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => unsubscribe();
  }, [virtualDepth]);

  // Determine active ocean zone info
  const getZone = (d: number) => {
    if (d < 4) {
      return {
        name: "Surface Calm",
        sub: "Boat Anchorage",
        color: "#bfe5ff",
        textColor: "#000000",
      };
    }
    if (d < 10) {
      return {
        name: "Coral Try Dive",
        sub: "Shallow Reef 5M-8M",
        color: "#55db9c",
        textColor: "#000000",
      };
    }
    if (d < 18) {
      return {
        name: "Pinnacle Reef",
        sub: "Coral Gardens 12M",
        color: "#ffd731",
        textColor: "#000000",
      };
    }
    if (d < 26) {
      return {
        name: "Pelagic Trench",
        sub: "Moray & Rays 20M+",
        color: "#e9ccff",
        textColor: "#000000",
      };
    }
    return {
      name: "Sanctuary Floor",
      sub: "Deep Abyss 30M",
      color: "#4da2ff",
      textColor: "#000000",
    };
  };

  const zone = getZone(depth);
  const pressure = (1 + depth / 10).toFixed(1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 30,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-6 z-40 hidden md:block select-none"
    >
      <div className="bg-[#ffffff] text-black border border-black rounded-[26px] p-3.5 shadow-[4px_4px_0px_#000000] min-w-[240px] max-w-[270px] transition-all">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-black/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-black animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.032em] uppercase text-black/75">
              Netrani Dive Depth Log
            </span>
          </div>

          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-5 h-5 rounded-full bg-black/5 hover:bg-black/15 flex items-center justify-center text-[11px] font-bold text-black transition-colors"
            title={isMinimized ? "Expand depth meter" : "Minimize depth meter"}
            aria-label="Toggle depth gauge display"
          >
            {isMinimized ? "+" : "−"}
          </button>
        </div>

        {!isMinimized ? (
          <>
            {/* Depth Numbers & Zone Banner */}
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <span className="text-3xl font-extrabold font-lateral tracking-tight text-black">
                  {depth.toFixed(1)}
                  <span className="text-sm font-bold text-black/60 ml-0.5">M</span>
                </span>
                <span className="text-[10px] text-black/60 font-semibold block -mt-1">
                  Pressure: {pressure} bar
                </span>
              </div>

              <div
                style={{ backgroundColor: zone.color, color: zone.textColor }}
                className="px-2.5 py-1 rounded-full border border-black text-[10px] font-bold uppercase tracking-[0.032em] transition-colors"
              >
                {zone.name}
              </div>
            </div>

            {/* Depth Progress Bar */}
            <div className="w-full h-2.5 bg-[#e5f4ff] border border-black rounded-full overflow-hidden mb-2.5 p-0.5">
              <motion.div
                className="h-full rounded-full transition-colors"
                style={{
                  width: `${Math.min(100, (depth / 30) * 100)}%`,
                  backgroundColor: zone.color,
                }}
              />
            </div>

            {/* Sub-label and Quick Jump to Surface */}
            <div className="flex items-center justify-between text-[10px] font-bold text-black/80">
              <span className="truncate pr-2">{zone.sub}</span>
              <button
                onClick={scrollToTop}
                className="text-[10px] font-bold uppercase tracking-wider text-black bg-[#ffd731] hover:bg-[#ffc800] border border-black px-2 py-0.5 rounded-full transition-transform active:scale-95 shrink-0"
                title="Scroll back to surface (0m)"
              >
                ↑ Surface
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold font-lateral text-black">
              {depth.toFixed(1)}M
            </span>
            <div
              style={{ backgroundColor: zone.color }}
              className="w-3 h-3 rounded-full border border-black"
              title={zone.name}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
