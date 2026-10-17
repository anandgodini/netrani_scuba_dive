"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[4px] z-[70] pointer-events-none overflow-hidden bg-black/10"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full bg-gradient-to-r from-[#55db9c] via-[#4da2ff] via-50% via-[#ffd731] to-[#fb4903] shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
}
