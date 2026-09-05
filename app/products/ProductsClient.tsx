"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { catalogData, faqsData } from "@/data/products";

// Helper to generate URLs that match your dynamic routing structure
const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProductsClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="bg-[#0b0b0a] text-white pt-24 md:pt-32 pb-10">
      
      {/* ─── CINEMATIC HERO SECTION ─── */}
      <section className="relative overflow-hidden px-[5%] py-32 md:py-48 border-b border-[#cea945]/15 flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/products/hero-bg.webp" 
            alt="Mintrix Trading Global Sourcing"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/90 via-[#0b0b0a]/70 to-[#111a15]" />
          <div className="absolute inset-0 bg-[#0b0b0a]/30 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-[1240px] mx-auto relative z-10 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[800px] mx-auto">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#cea945]/80 shadow-[0_0_8px_rgba(206,169,69,0.5)]" />
              <span className="text-[#cea945] text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] drop-shadow-md">
                Complete Catalog
              </span>
              <span className="w-8 h-[1px] bg-[#cea945]/80 shadow-[0_0_8px_rgba(206,169,69,0.5)]" />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold font-serif leading-[1.05] tracking-tight mb-8 drop-shadow-xl text-white">
              Wholesale foodstuff supplier in <span className="text-[#cea945]">Dubai.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[#e7e1d4] text-base md:text-[18px] leading-[1.8] max-w-[640px] mx-auto font-medium drop-shadow-md">
              Sourcing premium agricultural commodities across eight core divisions. Verified at origin and delivered worldwide for distributors, restaurants, and importers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── FULL-WIDTH CATALOG GRID ─── */}
      <section className="bg-[#111a15] relative">
        <div className="max-w-[1400px] mx-auto px-[5%] py-24 space-y-24">
          {catalogData.map((category, catIdx) => {
            const categorySlug = slugify(category.title);
            
            return (
              <motion.div 
                key={category.id} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="relative"
              >
                
                {/* Category Header */}
                <motion.div variants={fadeInUp} className="flex items-baseline justify-between pb-6 mb-8 border-b border-white/10">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[#cea945] font-serif text-2xl md:text-3xl font-bold">
                      {category.id}
                    </span>
                    <h2 className="text-2xl md:text-[32px] font-bold text-white font-serif tracking-tight">
                      {category.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-[#a89f8b] font-bold uppercase tracking-[0.2em]">
                    <span>{category.items.length} PRODUCTS</span>
                    <span className="text-[#cea945] text-lg leading-none mb-1">•</span>
                  </div>
                </motion.div>

                {/* Product Grid (Cinematic Cards linked to their dynamic routes) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                  {category.items.map((item, i) => {
                    const productSlug = slugify(item.name);
                    const productUrl = `/products/${categorySlug}/${productSlug}`;

                    return (
                      <motion.div key={i} variants={fadeInUp}>
                        <Link href={productUrl} className="group relative flex flex-col h-[200px] md:h-[240px] bg-[#16221c] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#cea945]/30 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)]">
                          
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
                          
                          {/* Content Area */}
                          <div className="relative z-10 p-5 flex flex-col h-full justify-end text-left">
                            <h4 className="text-[15px] md:text-[17px] font-bold text-white font-serif group-hover:text-[#cea945] transition-colors duration-300 drop-shadow-md leading-tight">
                              {item.name}
                            </h4>
                            
                            {(item.latin || item.subcategory) && (
                              <p className="mt-1 text-[11px] text-[#cfc8ba] italic leading-snug line-clamp-1 drop-shadow-sm font-light opacity-80">
                                {item.latin || item.subcategory}
                              </p>
                            )}

                            {/* View Specifications prompt that appears on hover */}
                            <div className="mt-3 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                              <span className="text-[#cea945] text-[10px] uppercase tracking-widest font-bold flex items-center gap-1">
                                View Specs <span className="text-sm leading-none">&rarr;</span>
                              </span>
                            </div>
                          </div>

                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── SOURCING ADVANTAGE ─── */}
      <section className="px-[5%] py-24 bg-[#0b0b0a] border-y border-white/5 relative">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-5">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#cea945]/60" />
                <span className="text-[#cea945] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Sourcing Advantage</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-serif leading-[1.1] mb-6">
                One sourcing partner across every category.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#a89f8b] leading-relaxed font-light">
                Buying multiple commodity types usually means managing multiple suppliers. Mintrix Trading consolidates that into a single relationship: one trade manager, one documentation process and one quality standard, whichever category you're ordering.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-7 grid gap-4">
              {[
                "Consistent grading and moisture/purity testing across every commodity",
                "One export documentation set (Halal, FDA, COO, phytosanitary) regardless of product mix",
                "Mixed-category container consolidation to reduce freight cost on smaller orders",
                "A single 24-hour quotation covering every product on your order, not one per category"
              ].map((text, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-5 p-6 rounded-xl bg-[#16221c]/40 border border-white/5 hover:bg-[#21332a]/60 hover:border-[#cea945]/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#cea945]/10 border border-[#cea945]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#cea945] font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-[#cfc8ba] text-[14px] leading-[1.7]">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ & FINAL CTA ─── */}
      <section className="px-[5%] py-24 bg-[#111a15] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#21332a]/20 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-[840px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-5">Common questions about bulk food sourcing</h2>
            <div className="w-12 h-[2px] bg-[#cea945] mx-auto" />
          </div>

          <div className="space-y-4 mb-24">
            {faqsData.map((faq, i) => {
              const isOpen = openFAQ === i;
              return (
                <div key={i} className="border border-white/5 rounded-xl bg-[#0b0b0a]/60 overflow-hidden transition-all duration-300 hover:border-[#cea945]/30">
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left p-6 sm:px-8 cursor-pointer group"
                  >
                    <span className="font-bold text-[15px] sm:text-[17px] text-white group-hover:text-[#cea945] transition-colors">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#21332a] flex items-center justify-center text-[#cea945] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 sm:px-8 pb-6 text-[14px] sm:text-[15px] text-[#a89f8b] leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-10 md:p-16 rounded-2xl bg-[#0b0b0a] border border-[#cea945]/20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#21332a]/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-[32px] font-bold font-serif mb-5 leading-tight">Don't see your product listed?<br/>Ask us anyway.</h3>
              <p className="text-[#a89f8b] text-[15px] mb-10 max-w-lg mx-auto leading-relaxed">
                Mintrix Trading sources beyond these categories on request. Tell us the product, volume and destination, and we'll confirm within the hour whether we can source it.
              </p>
              <Link
                href="/#quote"
                className="inline-block bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] transition-all duration-300 hover:bg-white hover:text-[#0b0b0a] shadow-[0_10px_20px_rgba(206,169,69,0.2)]"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}