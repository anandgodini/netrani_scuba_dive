"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  InflatableRibbon,
  DiverMaskSticker,
  TankSticker,
  StarfishSticker,
  DepthSticker,
  IslandPinSticker,
} from "@/components/SlushElements";

export default function HeroScrollMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
  });

  // Parallax values for floating elements
  const ribbonX = useTransform(smoothProgress, [0, 1], [0, -120]);
  const ribbonScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  const bubbleY1 = useTransform(smoothProgress, [0, 1], [0, -180]);
  const bubbleY2 = useTransform(smoothProgress, [0, 1], [0, -260]);
  const bubbleY3 = useTransform(smoothProgress, [0, 1], [0, -220]);

  // Floating stickers parallax
  const maskY = useTransform(smoothProgress, [0, 1], [0, -70]);
  const maskRotate = useTransform(smoothProgress, [0, 1], [-2, 8]);

  const tankY = useTransform(smoothProgress, [0, 1], [0, 60]);
  const tankRotate = useTransform(smoothProgress, [0, 1], [4, -8]);

  const starfishY = useTransform(smoothProgress, [0, 1], [0, 45]);
  const starfishRotate = useTransform(smoothProgress, [0, 1], [-5, 6]);

  const depthY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const depthRotate = useTransform(smoothProgress, [0, 1], [3, -6]);

  const pinY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const pinRotate = useTransform(smoothProgress, [0, 1], [-6, 10]);

  // Headline parallax fade
  const textY = useTransform(smoothProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.7, 0.2]);

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden">
      {/* Background Animated Sea Bubbles with scroll parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.span
          style={{ y: bubbleY1 }}
          className="absolute left-[8%] bottom-16 w-5 h-5 rounded-full bg-white/50 border border-black/20 animate-float-slow"
        />
        <motion.span
          style={{ y: bubbleY2 }}
          className="absolute left-[22%] bottom-28 w-8 h-8 rounded-full bg-white/60 border border-black/20 animate-float-reverse"
        />
        <motion.span
          style={{ y: bubbleY1 }}
          className="absolute right-[14%] bottom-20 w-6 h-6 rounded-full bg-white/50 border border-black/20 animate-float-slow"
        />
        <motion.span
          style={{ y: bubbleY3 }}
          className="absolute right-[28%] bottom-12 w-4 h-4 rounded-full bg-white/70 border border-black/20 animate-float-reverse"
        />
      </div>

      {/* 3D Electric Blue Inflatable Ribbon wrapping behind text with scroll-linked wave */}
      <div className="absolute top-[28%] left-0 right-0 z-0 opacity-90 pointer-events-none">
        <motion.div
          style={{ x: ribbonX, scale: ribbonScale }}
          className="w-full animate-ribbon-wave"
        >
          <InflatableRibbon variant="wave" />
        </motion.div>
      </div>

      {/* Hero Content with parallax shift */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>

      {/* Floating Parallax Sticker Accents around headline */}
      {/* Desktop/Tablet stickers positioned relative to the hero section */}
      <div className="absolute inset-0 pointer-events-none z-20 max-w-[1440px] mx-auto px-6">
        {/* Diver Mask - Top Left */}
        <motion.div
          style={{ y: maskY, rotate: maskRotate }}
          className="absolute top-[23%] left-[10%] hidden md:block pointer-events-auto"
        >
          <div className="animate-float-slow">
            <DiverMaskSticker label="PADI 12M DIVE" />
          </div>
        </motion.div>

        {/* Tank - Top Right */}
        <motion.div
          style={{ y: tankY, rotate: tankRotate }}
          className="absolute top-[24%] right-[10%] hidden md:block pointer-events-auto"
        >
          <div className="animate-float-reverse">
            <TankSticker label="O2 NITROX GEAR" />
          </div>
        </motion.div>

        {/* Starfish - Mid/Bottom Left */}
        <motion.div
          style={{ y: starfishY, rotate: starfishRotate }}
          className="absolute top-[37%] left-[6%] hidden lg:block pointer-events-auto"
        >
          <div className="animate-float-reverse">
            <StarfishSticker label="CORAL REEF" />
          </div>
        </motion.div>

        {/* Depth Meter - Mid/Bottom Right */}
        <motion.div
          style={{ y: depthY, rotate: depthRotate }}
          className="absolute top-[37%] right-[6%] hidden lg:block pointer-events-auto"
        >
          <div className="animate-float-slow">
            <DepthSticker depth="30M DEPTH" />
          </div>
        </motion.div>

        {/* Island Pin - Far Right */}
        <motion.div
          style={{ y: pinY, rotate: pinRotate }}
          className="absolute top-[31%] right-[2%] hidden xl:block pointer-events-auto"
        >
          <div className="animate-float-fast">
            <IslandPinSticker label="NETRANI ISLAND" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
