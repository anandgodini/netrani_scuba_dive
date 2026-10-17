"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function ParallaxBubbles() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 150, damping: 25 });

  const b1 = useTransform(smoothY, [0, 800], [0, -160]);
  const b2 = useTransform(smoothY, [0, 800], [0, -240]);
  const b3 = useTransform(smoothY, [0, 800], [0, -190]);
  const b4 = useTransform(smoothY, [0, 800], [0, -280]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.span
        style={{ y: b1 }}
        className="absolute left-[8%] bottom-16 w-5 h-5 rounded-full bg-white/50 border border-black/20 animate-float-slow"
      />
      <motion.span
        style={{ y: b2 }}
        className="absolute left-[22%] bottom-28 w-8 h-8 rounded-full bg-white/60 border border-black/20 animate-float-reverse"
      />
      <motion.span
        style={{ y: b3 }}
        className="absolute right-[14%] bottom-20 w-6 h-6 rounded-full bg-white/50 border border-black/20 animate-float-slow"
      />
      <motion.span
        style={{ y: b4 }}
        className="absolute right-[28%] bottom-12 w-4 h-4 rounded-full bg-white/70 border border-black/20 animate-float-reverse"
      />
    </div>
  );
}
