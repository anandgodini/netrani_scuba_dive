"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-[28px] border border-black p-6 md:p-10 shadow-none">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-black/10 last:border-0">
            <button
              onClick={() => toggle(index)}
              className="w-full py-6 flex items-center justify-between text-left group gap-4"
              aria-expanded={isOpen}
              aria-label={`${isOpen ? "Collapse" : "Expand"}: ${item.question}`}
              type="button"
            >
              <span
                className={`text-lg md:text-xl font-bold font-aeonik transition-colors ${
                  isOpen ? "text-black" : "text-black group-hover:text-black/70"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-black transition-all ${
                  isOpen
                    ? "bg-[#ffd731] text-black"
                    : "bg-[#e9e9e9] text-black group-hover:bg-[#bfe5ff]"
                }`}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-minus"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-black/80 font-medium leading-relaxed text-sm md:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-8 pt-6 border-t border-black/10 text-center">
        <p className="text-black/70 font-medium mb-4">Still have questions? We are here to help.</p>
        <a
          href="https://wa.me/917406329777?text=I%20want%20to%20book%20Scuba%20Diving"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-xs md:text-sm font-bold border border-black hover:bg-black/85 transition-all tracking-wider uppercase"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
}
