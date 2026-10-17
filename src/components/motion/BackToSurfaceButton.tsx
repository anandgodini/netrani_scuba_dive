"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function BackToSurfaceButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-24 z-40 hidden sm:flex items-center gap-2 bg-[#ffffff] hover:bg-[#ffd731] text-black border border-black rounded-full px-4 py-2.5 shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:-translate-y-0.5 active:scale-95 transition-all text-xs font-bold tracking-[0.032em] uppercase select-none cursor-pointer"
          aria-label="Scroll back to surface"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#bfe5ff] border border-black text-[11px]">
            ↑
          </span>
          <span>Surface 0M</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
