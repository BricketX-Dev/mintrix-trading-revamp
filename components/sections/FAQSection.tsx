"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who are the best food suppliers in Dubai?",
    answer:
      "The best food suppliers in Dubai are foodstuff trading companies that source from verified global suppliers, check quality at origin and handle documentation and logistics. Mintrix Trading is a UAE-registered example, supplying eight bulk categories worldwide with a quote inside 24 hours.",
  },
  {
    question: "Which is the best foodstuff trading company in Dubai?",
    answer:
      "A strong foodstuff trading company in Dubai combines global sourcing, origin quality checks, full export documentation and reliable logistics. Mintrix Trading offers all four — sourcing from 50+ countries and delivering to 14, from its Deira office in Dubai.",
  },
  {
    question: "How do I buy bulk food for the UAE market?",
    answer:
      "To buy bulk food for the UAE, send a supplier your product, quantity, specification and destination. Mintrix Trading confirms within the hour, sources the best origin, and returns a quote within 24 hours covering specification, packing, certifications and delivery timeline.",
  },
  {
    question: "What food products can be imported in bulk to the UAE?",
    answer:
      "Bulk food products imported to the UAE span grains and cereals, spices, pulses and beans, edible oils and oil seeds, frozen poultry, dry nuts and dry fruits, canned food, and fresh produce — all sourced globally and delivered in bulk.",
  },
  {
    question: "Is your frozen chicken halal-certified?",
    answer:
      "Yes. Mintrix Trading's frozen chicken is sourced from halal-certified export facilities and shipped in temperature-controlled reefer containers to maintain the cold chain.",
  },
  {
    question: "How fast can I get a quotation?",
    answer:
      "Inquiries are confirmed within the hour, and a full quotation — specification, packing, certifications and delivery timeline — follows within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 sm:py-32 md:py-36 bg-[#f7f4ed] border-b border-[#e2dcce] relative overflow-hidden select-none"
    >
      {/* ─── Ambient Glow in Center ─── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#cea945]/[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Editorial Header ─── */}
        <div className="text-center max-w-[760px] mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
            <span className="text-[#967624] text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em]">
              Trade Dossier &amp; FAQs
            </span>
            <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#14201a] tracking-tight leading-[1.12]">
            Answers for bulk food{" "}
            <span className="italic text-[#967624]">
              buyers in the UAE.
            </span>
          </h2>
        </div>

        {/* ─── 2-Column Split: Visual Card (Left) & Accordion (Right) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ─── LEFT COLUMN: Visual Authority Card (Span 5) ─── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="group relative rounded-3xl overflow-hidden bg-[#14201a] text-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(20,32,26,0.22)] border border-[#21332a]">
              
              {/* Background Image Layer with Gradient Fade */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src="/images/products/hero-bg.webp"
                  alt="Dubai Logistics and Trade Desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={90}
                  className="object-cover object-center opacity-35 transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14201a] via-[#14201a]/80 to-[#14201a]/40" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#cea945]/15 border border-[#cea945]/30 px-3 py-1 rounded-full text-[10.5px] font-bold text-[#cea945] uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] animate-pulse" />
                    Dubai Trade Desk
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3 leading-snug">
                    Verified Global Sourcing &amp; Export
                  </h3>

                  <p className="text-[#cfc8ba] text-[14px] leading-[1.75] font-light mb-8">
                    Every consignment is supported by origin quality checks, phytosanitary clearance, and transparent commercial contracts.
                  </p>

                  <div className="space-y-3.5 pb-8 mb-8 border-b border-white/[0.08] text-[13px] text-[#e7e1d4]">
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#cea945]/20 text-[#cea945] flex items-center justify-center text-xs font-bold">✓</span>
                      <span>Quotes issued within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#cea945]/20 text-[#cea945] flex items-center justify-center text-xs font-bold">✓</span>
                      <span>Halal, FDA &amp; COO export documentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#cea945]/20 text-[#cea945] flex items-center justify-center text-xs font-bold">✓</span>
                      <span>Direct port transit across 50+ origins</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-[#cea945] hover:bg-white text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-lg transition-all duration-300 shadow-md text-center flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <span className="text-sm leading-none">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Accordion (Span 7) ─── */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const formattedIndex = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                    isOpen
                      ? "bg-[#fdfcf9] border-[#967624]/40 shadow-[0_15px_35px_rgba(20,32,26,0.08)]"
                      : "bg-[#fdfcf9]/85 border-[#ded6c7] hover:border-[#967624]/30 hover:bg-[#fdfcf9]"
                  }`}
                >
                  {/* Top gold accent line sweep when open */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`} 
                  />

                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left p-6 sm:p-7 gap-4 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-2">
                      <span className={`font-serif text-sm sm:text-base font-bold transition-colors duration-300 ${
                        isOpen ? "text-[#967624]" : "text-[#a39885] group-hover:text-[#967624]"
                      }`}>
                        {formattedIndex}
                      </span>
                      <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 leading-snug ${
                        isOpen ? "text-[#967624]" : "text-[#14201a] group-hover:text-[#967624]"
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Brass Toggle Button */}
                    <div
                      className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#cea945] border-[#cea945] text-[#0b0b0a]"
                          : "bg-[#f2ede2] border-[#ded6c7] text-[#967624] group-hover:border-[#cea945] group-hover:bg-[#fdfcf9]"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                        <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-[#eee8dc] ml-10 sm:ml-12">
                          <p className="pt-4 text-[14px] sm:text-[15.5px] text-[#595346] leading-[1.8] font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}