"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { catalogData } from "@/data/products";
import { slugify } from "@/utils/slugify";

interface ProductGridProps {
  showHeader?: boolean;
  showCTA?: boolean;
  imageHeight?: string; // e.g., "h-[240px]"
  bottomTagText?: string;
}

// Upgraded container variants for clean exits and slight delays
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  }
};

// Upgraded card variants for a sleek scale-up and fade-out
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 15,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeIn" },
  }
};

export default function ProductGrid({
  showHeader = true,
  showCTA = true,
  imageHeight = "h-[240px]",
  bottomTagText,
}: ProductGridProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Retrieve the currently active category data
  const currentCategory = catalogData[activeTab];
  const displayedProducts = showCTA ? currentCategory.items : [];

  return (
    <section 
      id="products" 
      className="py-24 md:py-32 px-[5%] bg-[#0b0b0a] border-t border-white/5 relative overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#cea945]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#cea945]/60" />
                <span className="text-[#cea945] text-[11px] font-bold uppercase tracking-[0.25em]">
                  Our Commodities
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-serif leading-[1.05] tracking-tight text-white mb-4">
                Wholesale <span className="text-[#cea945] italic">Foodstuff</span> Dubai.
              </h2>
              <p className="text-[#cfc8ba] text-[15px] md:text-[17px] leading-[1.7] max-w-xl font-light">
                Bulk food products UAE buyers rely on — sourced and verified for export quality with complete trade documentation.
              </p>
            </div>

            {/* Fast Stats Badge */}
            <div className="hidden lg:flex items-center gap-8 px-8 py-5 rounded-2xl bg-[#111a15] border border-white/5 shadow-xl">
              <div>
                <span className="block text-3xl font-serif font-bold text-[#cea945]">8</span>
                <span className="text-[10px] text-[#a89f8b] font-bold uppercase tracking-[0.2em]">Divisions</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="block text-3xl font-serif font-bold text-[#cea945]">50+</span>
                <span className="text-[10px] text-[#a89f8b] font-bold uppercase tracking-[0.2em]">Origins</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Filters (For homepage mode) */}
        {showCTA && (
          <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-8 scrollbar-none snap-x">
            {catalogData.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-6 py-3 rounded-[4px] text-[11px] uppercase tracking-[0.2em] transition-all duration-300 snap-start shrink-0 ${
                  activeTab === idx
                    ? "bg-[#cea945] text-[#0b0b0a] font-bold shadow-[0_4px_14px_rgba(206,169,69,0.2)]"
                    : "bg-[#111a15] text-[#cfc8ba] font-semibold border border-white/5 hover:border-[#cea945]/40 hover:text-white"
                }`}
              >
                {cat.title} <span className="opacity-60 ml-1">({cat.items.length})</span>
              </button>
            ))}
          </div>
        )}

        {/* HOMEPAGE TABBED VIEW with AnimatePresence for smooth category switching */}
        {showCTA && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5"
            >
              {displayedProducts.map((item, i) => {
                const categorySlug = slugify(currentCategory.title);
                const productSlug = slugify(item.name);
                const productUrl = `/products/${categorySlug}/${productSlug}`;

                return (
                  <motion.div key={`${item.name}-${i}`} variants={cardVariants} layout>
                    <Link 
                      href={productUrl} 
                      className="group relative flex flex-col h-[220px] md:h-[260px] bg-[#16221c] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#cea945]/30 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] block"
                    >
                      {/* Image Container */}
                      <div className="absolute inset-0 w-full h-full bg-[#0b0b0a]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          quality={80}
                          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      </div>

                      {/* Heavy bottom gradient for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/95 via-[#0b0b0a]/30 to-transparent opacity-95 transition-opacity duration-500" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-[#0b0b0a]/80 backdrop-blur-md px-2.5 py-1.5 rounded-[4px] border border-white/10 text-[9px] uppercase font-bold text-[#a89f8b] tracking-wider transition-colors group-hover:border-[#cea945]/40 group-hover:text-[#cea945]">
                        {bottomTagText || "Bulk Export"}
                      </div>

                      {/* Content Area */}
                      <div className="relative z-10 p-5 md:p-6 flex flex-col h-full justify-end text-left">
                        <h4 className="text-[15px] md:text-[17px] font-bold text-white font-serif group-hover:text-[#cea945] transition-colors duration-300 drop-shadow-md leading-tight">
                          {item.name}
                        </h4>
                        
                        {(item.latin || item.subcategory) && (
                          <p className="mt-1 text-[11px] md:text-[12px] text-[#cfc8ba] italic leading-snug line-clamp-1 drop-shadow-sm font-light opacity-80">
                            {item.latin || item.subcategory}
                          </p>
                        )}

                        {/* View Specifications prompt that appears on hover */}
                        <div className="mt-3 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-[#cea945] text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-1">
                            Specs <span className="text-sm leading-none">&rarr;</span>
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

        {/* Global CTA */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-16"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-[#111a15] border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] hover:border-[#cea945] hover:text-[#cea945] transition-all duration-300"
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