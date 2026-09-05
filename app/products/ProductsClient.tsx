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
<section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-32 sm:py-44 md:py-52 min-h-[75vh] md:min-h-[85vh] flex items-center justify-center border-b border-white/5 select-none">
  {/* ─── FLAT-LAY SPICE FRAME BACKGROUND ─── */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Image
      src="/images/products/hero-section.webp"
      alt="Mintrix Trading Premium Food Commodities"
      fill
      priority
      sizes="100vw"
      quality={95}
      className="object-cover object-center"
    />

    {/* 1. Global subtle tint to bring down harsh highlights while preserving spice colors */}
    <div className="absolute inset-0 bg-[#0b0b0a]/35" />

    {/* 2. Soft center shadow: gives the middle stone area contrast for the typography */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(11,11,10,0.7)_0%,_rgba(11,11,10,0.3)_45%,_transparent_75%)]" />

    {/* 3. Top & Bottom edge melts: ensures a seamless flow into the navbar and the catalog section */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/90 via-transparent to-[#0b0b0a]" />

    {/* 4. Subtle central warm gold glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cea945]/[0.06] blur-[120px] rounded-full pointer-events-none" />
  </div>

  {/* ─── CENTERED CONTENT ─── */}
  <div className="max-w-[1240px] mx-auto relative z-10 text-center w-full">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-[780px] mx-auto flex flex-col items-center"
    >
      {/* Eyebrow badge with glowing hairline rules */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center justify-center gap-3.5 mb-6 sm:mb-8"
      >
        <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
        <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_12px_rgba(206,169,69,0.5)]">
          Complete Catalog
        </span>
        <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={fadeInUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-bold text-white tracking-[-0.02em] leading-[1.08] mb-6 sm:mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
      >
        Wholesale foodstuff{" "}
        <span className="block mt-1 sm:mt-2">
          supplier in{" "}
          <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#c29633] bg-clip-text text-transparent italic">
            Dubai.
          </span>
        </span>
      </motion.h1>

      {/* Editorial Subtitle */}
      <motion.p
        variants={fadeInUp}
        className="text-[#e7e1d4]/90 text-sm sm:text-base md:text-[18px] leading-[1.75] max-w-[560px] font-light tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
      >
        Sourcing premium agricultural commodities across eight core divisions. Verified at origin and delivered worldwide for distributors, restaurants, and importers.
      </motion.p>
    </motion.div>
  </div>
</section>

{/* ─── FULL-WIDTH CATALOG GRID ─── */}
<section className="bg-[#0b0b0a] relative py-20 md:py-28">
  {/* Ambient background depth */}
  <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#21332a]/10 blur-[140px] pointer-events-none rounded-full" />
  <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#cea945]/[0.03] blur-[150px] pointer-events-none rounded-full" />

  <div className="max-w-[1400px] mx-auto px-[5%] space-y-32 relative z-10">
    {catalogData.map((category, catIdx) => {
      const categorySlug = slugify(category.title);

      return (
        <motion.div
          key={category.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Category Header */}
          <motion.div
            variants={fadeInUp}
            className="flex items-end justify-between pb-5 mb-10 border-b border-white/[0.08]"
          >
            <div className="flex items-baseline gap-4 md:gap-6">
              <span className="font-serif text-3xl md:text-4xl font-light text-[#cea945]/60 tracking-wider">
                {category.id}
              </span>
              <div>
                <h2 className="text-2xl md:text-[34px] font-bold text-white font-serif tracking-tight leading-none">
                  {category.title}
                </h2>
                {category.subtitle && (
                  <p className="hidden sm:block text-[12px] text-[#a89f8b] font-medium tracking-wider uppercase mt-2">
                    {category.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 pb-1">
              <span className="text-[11px] text-[#a89f8b] font-semibold tracking-[0.25em] uppercase">
                {category.items.length} Products
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] inline-block" />
            </div>
          </motion.div>

          {/* Product Grid: 4 balanced columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {category.items.map((item, i) => {
              const productSlug = slugify(item.name);
              const productUrl = `/products/${categorySlug}/${productSlug}`;

              return (
                <motion.div key={i} variants={fadeInUp}>
                  <Link
                    href={productUrl}
                    className="group relative flex flex-col aspect-[4/5] rounded-2xl overflow-hidden bg-[#141a17] border border-white/[0.07] transition-all duration-500 hover:border-[#cea945]/60 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85)] hover:-translate-y-1 block"
                  >
                    {/* Background Product Image */}
                    <div className="absolute inset-0 w-full h-full bg-[#0e1210]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={85}
                        className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                      />
                    </div>

                    {/* Multi-stage Contrast Gradient Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/50 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/40 via-transparent to-transparent opacity-60" />

                    {/* Category/Tag Pill */}
                    {(item.subcategory || item.latin) && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#cfc8ba] bg-[#0b0b0a]/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                          {item.subcategory || item.latin}
                        </span>
                      </div>
                    )}

                    {/* Bottom Card Content */}
                    <div className="relative z-10 p-5 md:p-6 mt-auto flex flex-col justify-end text-left">
                      <h4 className="text-[17px] md:text-[20px] font-bold text-white font-serif leading-snug tracking-tight group-hover:text-[#cea945] transition-colors duration-300 drop-shadow-md">
                        {item.name}
                      </h4>

                      {/* Interactive View Specs drawer */}
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/[0.08] text-[#a89f8b]">
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#a89f8b] group-hover:text-[#cfc8ba] transition-colors">
                          Export Grade
                        </span>
                        <span className="text-xs font-semibold text-[#cea945] flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                          Specs
                          <span className="text-sm font-bold leading-none">&rarr;</span>
                        </span>
                      </div>
                    </div>

                    {/* Subtle top edge gold highlight on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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