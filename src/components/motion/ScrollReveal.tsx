"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?:
    | "fade-up"
    | "fade-down"
    | "fade-in"
    | "scale-up"
    | "slide-left"
    | "slide-right"
    | "pop";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.65,
  distance = 36,
  className = "",
  once = true,
  amount = 0.15,
  ...props
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case "fade-down":
        return {
          initial: { opacity: 0, y: -distance },
          animate: { opacity: 1, y: 0 },
        };
      case "slide-left":
        return {
          initial: { opacity: 0, x: -distance },
          animate: { opacity: 1, x: 0 },
        };
      case "slide-right":
        return {
          initial: { opacity: 0, x: distance },
          animate: { opacity: 1, x: 0 },
        };
      case "scale-up":
        return {
          initial: { opacity: 0, scale: 0.94 },
          animate: { opacity: 1, scale: 1 },
        };
      case "pop":
        return {
          initial: { opacity: 0, scale: 0.88, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
        };
      case "fade-in":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        };
      case "fade-up":
      default:
        return {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
        };
    }
  };

  const v = getVariants();

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
