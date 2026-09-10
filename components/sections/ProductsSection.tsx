"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { catalogData } from "@/data/products";
import { slugify } from "@/utils/slugify";

interface ProductGridProps {
  showHeader?: boolean;
  showCTA?: boolean;
  imageHeight?: string;
  bottomTagText?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function ProductGrid({
  showHeader = true,
  showCTA = true,
  imageHeight = "h-[240px]",
  bottomTagText,
}: ProductGridProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentCategory = catalogData[activeTab];
  const displayedProducts = showCTA ? currentCategory.items : [];

  const scrollTabs = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="products" 
      className="py-24 sm:py-32 md:py-36 bg-[#0b0b0a] border-t border-white/5 relative overflow-hidden select-none"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#cea945]/[0.04] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#21332a]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─── */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                  Our Commodities
                </span>
              </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-serif leading-[1.12] tracking-tight text-white mb-4">
              Wholesale{" "}
              <span className="inline-block pr-2.5 bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                Foodstuff
              </span>{" "}
              Dubai
            </h2>
              <p className="text-[#cfc8ba] text-[15px] sm:text-[16.5px] leading-[1.75] max-w-xl font-light">
                Bulk agricultural commodities UAE buyers rely on — verified for export grade, moisture thresholds, and complete customs dossiers.
              </p>
            </div>

            {/* Fast Stats Badge */}
            <div className="flex items-center gap-6 sm:gap-8 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-[#0e1511]/85 backdrop-blur-md border border-white/[0.08] shadow-[0_15px_30px_rgba(0,0,0,0.5)] self-start md:self-auto">
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#cea945]">8</span>
                <span className="text-[10px] text-[#a89f8b] font-bold uppercase tracking-[0.2em]">Divisions</span>
              </div>
              <div className="w-px h-9 bg-white/[0.08]" />
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#cea945]">50+</span>
                <span className="text-[10px] text-[#a89f8b] font-bold uppercase tracking-[0.2em]">Origins</span>
              </div>
              <div className="w-px h-9 bg-white/[0.08]" />
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#cea945]">24h</span>
                <span className="text-[10px] text-[#a89f8b] font-bold uppercase tracking-[0.2em]">Quotes</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── Executive Horizontal Tab Bar with Control Chevrons ─── */}
        {showCTA && (
          <div className="relative mb-10 sm:mb-12 flex items-center">
            {/* Left Scroll Arrow */}
            <button
              onClick={() => scrollTabs("left")}
              aria-label="Scroll categories left"
              className="hidden md:flex shrink-0 w-9 h-9 mr-3 rounded-xl bg-[#0e1511] border border-white/10 items-center justify-center text-[#cea945] hover:bg-[#cea945] hover:text-[#0b0b0a] hover:border-[#cea945] transition-all duration-300 z-20 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Track with Edge Fade Masks */}
            <div
              ref={scrollContainerRef}
              className="flex-grow overflow-x-auto scrollbar-none flex items-center gap-2.5 sm:gap-3 py-2 scroll-smooth touch-pan-x [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 px-2">
                {catalogData.map((cat, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={cat.title}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`relative whitespace-nowrap px-5 sm:px-6 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shrink-0 cursor-pointer ${
                        isActive
                          ? "bg-[#cea945] text-[#0b0b0a] shadow-[0_4px_20px_rgba(206,169,69,0.35)] scale-[1.02]"
                          : "bg-[#0e1511]/90 text-[#cfc8ba] border border-white/[0.08] hover:border-[#cea945]/40 hover:text-white hover:bg-[#131d17]"
                      }`}
                    >
                      <span>{cat.title}</span>
                      <span className={`ml-2 text-[10px] font-mono ${
                        isActive ? "text-[#0b0b0a]/80 font-black" : "text-[#a89f8b]"
                      }`}>
                        ({cat.items.length})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => scrollTabs("right")}
              aria-label="Scroll categories right"
              className="hidden md:flex shrink-0 w-9 h-9 ml-3 rounded-xl bg-[#0e1511] border border-white/10 items-center justify-center text-[#cea945] hover:bg-[#cea945] hover:text-[#0b0b0a] hover:border-[#cea945] transition-all duration-300 z-20 cursor-pointer shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* ─── Product Cards Grid ─── */}
        {showCTA && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5"
            >
              {displayedProducts.map((item, i) => {
                const categorySlug = slugify(currentCategory.title);
                const productSlug = slugify(item.name);
                const productUrl = `/products/${categorySlug}/${productSlug}`;

                return (
                  <motion.div key={`${item.name}-${i}`} variants={cardVariants} layout>
                    <Link 
                      href={productUrl} 
                      className="group relative flex flex-col h-[240px] sm:h-[260px] md:h-[285px] bg-[#0c130f] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#cea945]/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.85)] block"
                    >
                      {/* Product Image */}
                      <div className="absolute inset-0 w-full h-full bg-[#0b0b0a]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          quality={85}
                          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      </div>

                      {/* Multi-layered Vignette for Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080c0a] via-[#080c0a]/65 to-transparent opacity-95" />
                      
                      {/* Top Hairline Accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10" />

                      {/* Upper Badge */}
                      <div className="absolute top-3.5 right-3.5 z-10 bg-[#0b0b0a]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/[0.1] text-[8.5px] sm:text-[9px] uppercase font-bold text-[#a89f8b] tracking-widest transition-colors group-hover:border-[#cea945]/50 group-hover:text-[#cea945]">
                        {bottomTagText || "Bulk Export"}
                      </div>

                      {/* Content Area */}
                      <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col h-full justify-end text-left">
                        <h4 className="text-[14.5px] sm:text-[16px] md:text-[17.5px] font-bold text-white font-serif group-hover:text-[#cea945] transition-colors duration-300 drop-shadow-md leading-snug line-clamp-2">
                          {item.name}
                        </h4>
                        
                        {(item.latin || item.subcategory) && (
                          <p className="mt-1 text-[10.5px] sm:text-[11.5px] text-[#cfc8ba] italic leading-snug line-clamp-1 font-light opacity-80">
                            {item.latin || item.subcategory}
                          </p>
                        )}

                        {/* Hover Prompt */}
                        <div className="mt-2.5 overflow-hidden h-0 group-hover:h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                          <span className="text-[#cea945] text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-1">
                            Specifications &rarr;
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ─── Global Catalog CTA ─── */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-14 sm:mt-18"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-[#0e1511] border border-white/20 text-white font-bold text-xs uppercase tracking-[0.22em] px-9 sm:px-11 py-4 sm:py-5 rounded-xl hover:border-[#cea945] hover:text-[#cea945] hover:shadow-[0_0_25px_rgba(206,169,69,0.2)] transition-all duration-300 cursor-pointer"
            >
              <span>View Complete Catalog</span>
              <span aria-hidden="true" className="text-sm font-bold">&rarr;</span>
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}