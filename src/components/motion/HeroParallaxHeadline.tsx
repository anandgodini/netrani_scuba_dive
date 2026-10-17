"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  DiverMaskSticker,
  TankSticker,
  StarfishSticker,
  DepthSticker,
  IslandPinSticker,
} from "@/components/SlushElements";

export default function HeroParallaxHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
  });

  // Parallax offsets for each sticker
  const maskY = useTransform(smooth, [0, 1], [0, -55]);
  const maskRotate = useTransform(smooth, [0, 1], [-2, 7]);

  const tankY = useTransform(smooth, [0, 1], [0, 50]);
  const tankRotate = useTransform(smooth, [0, 1], [4, -8]);

  const starfishY = useTransform(smooth, [0, 1], [0, 40]);
  const starfishRotate = useTransform(smooth, [0, 1], [-6, 6]);

  const depthY = useTransform(smooth, [0, 1], [0, -45]);
  const depthRotate = useTransform(smooth, [0, 1], [3, -7]);

  const pinY = useTransform(smooth, [0, 1], [0, -65]);
  const pinRotate = useTransform(smooth, [0, 1], [-8, 10]);

  // Headline parallax drift & subtle depth scale
  const headlineY = useTransform(smooth, [0, 1], [0, 40]);
  const headlineScale = useTransform(smooth, [0, 1], [1, 0.96]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto my-4 md:my-8 px-4 select-none"
    >
      {/* Enormous Crushed Lateral Headline with spring entrance and scroll drift */}
      <motion.div
        style={{ y: headlineY, scale: headlineScale }}
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="slush-display-hero text-black tracking-tight">
          NETRANI <br className="sm:hidden" />
          <span className="inline-block relative">
            SCUBA DIVE
            <span className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-3 md:h-6 bg-[#ffd731] border-y border-black -z-10 rounded-full" />
          </span>
        </h1>
      </motion.div>

      {/* Diver Mask Sticker — Top Left */}
      <motion.div
        style={{ y: maskY, rotate: maskRotate }}
        className="absolute -top-10 left-2 sm:-left-8 hidden md:block pointer-events-auto"
      >
        <div className="animate-float-slow">
          <DiverMaskSticker label="PADI 12M DIVE" />
        </div>
      </motion.div>

      {/* Tank Sticker — Top Right */}
      <motion.div
        style={{ y: tankY, rotate: tankRotate }}
        className="absolute -top-8 right-2 sm:-right-8 hidden md:block pointer-events-auto"
      >
        <div className="animate-float-reverse">
          <TankSticker label="O2 NITROX GEAR" />
        </div>
      </motion.div>

      {/* Starfish Sticker — Bottom Left */}
      <motion.div
        style={{ y: starfishY, rotate: starfishRotate }}
        className="absolute -bottom-10 left-4 sm:-left-6 hidden lg:block pointer-events-auto"
      >
        <div className="animate-float-reverse">
          <StarfishSticker label="CORAL REEF" />
        </div>
      </motion.div>

      {/* Depth Sticker — Bottom Right */}
      <motion.div
        style={{ y: depthY, rotate: depthRotate }}
        className="absolute -bottom-10 right-4 sm:-right-6 hidden lg:block pointer-events-auto"
      >
        <div className="animate-float-slow">
          <DepthSticker depth="30M DEPTH" />
        </div>
      </motion.div>

      {/* Island Pin Sticker — Mid Right */}
      <motion.div
        style={{ y: pinY, rotate: pinRotate }}
        className="absolute top-1/2 -right-10 hidden xl:block pointer-events-auto"
      >
        <div className="animate-float-fast">
          <IslandPinSticker label="NETRANI ISLAND" />
        </div>
      </motion.div>
    </div>
  );
}
