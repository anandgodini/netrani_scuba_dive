"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { InflatableRibbon } from "@/components/SlushElements";

interface ParallaxRibbonProps {
  variant?: "wave" | "loop" | "arc";
  direction?: "left" | "right";
  className?: string;
  speed?: number;
}

export default function ParallaxRibbon({
  variant = "wave",
  direction = "left",
  className = "",
  speed = 100,
}: ParallaxRibbonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xRange =
    direction === "left"
      ? [speed * 0.5, -speed * 0.5]
      : [-speed * 0.5, speed * 0.5];

  const x = useTransform(scrollYProgress, [0, 1], xRange);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98]);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <motion.div style={{ x, scale }} className="w-full">
        <InflatableRibbon variant={variant} />
      </motion.div>
    </div>
  );
}
