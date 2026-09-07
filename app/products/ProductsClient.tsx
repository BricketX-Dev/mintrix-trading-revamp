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

          <div className="absolute inset-0 bg-[#0b0b0a]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(11,11,10,0.7)_0%,_rgba(11,11,10,0.3)_45%,_transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/90 via-transparent to-[#0b0b0a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cea945]/[0.06] blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10 text-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[780px] mx-auto flex flex-col items-center"
          >
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
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#21332a]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#cea945]/[0.03] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-[5%] space-y-32 relative z-10">
          {catalogData.map((category) => {
            const categorySlug = slugify(category.title);
            const categoryUrl = `/products/${categorySlug}`;

            return (
              <motion.div
                key={category.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="relative"
              >
                {/* ─── CLICKABLE CATEGORY HEADER ─── */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-end justify-between pb-5 mb-10 border-b border-white/[0.08]"
                >
                  <Link 
                    href={categoryUrl}
                    scroll={true}
                    className="group inline-flex items-baseline gap-4 md:gap-6 cursor-pointer"
                  >
                    <span className="font-serif text-3xl md:text-4xl font-light text-[#cea945]/60 tracking-wider group-hover:text-[#cea945] transition-colors">
                      {category.id}
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-[34px] font-bold text-white font-serif tracking-tight leading-none group-hover:text-[#cea945] transition-colors flex items-center gap-3">
                        {category.title}
                        <span className="text-base md:text-xl text-[#cea945] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                          &rarr;
                        </span>
                      </h2>
                      {category.subtitle && (
                        <p className="hidden sm:block text-[12px] text-[#a89f8b] font-medium tracking-wider uppercase mt-2 group-hover:text-[#cfc8ba] transition-colors">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                  </Link>

                  <Link
                    href={categoryUrl}
                    scroll={true}
                    className="group flex items-center gap-2.5 pb-1 text-[#a89f8b] hover:text-[#cea945] transition-colors"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.25em] uppercase">
                      {category.items.length} Products
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] inline-block group-hover:scale-125 transition-transform" />
                  </Link>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {category.items.map((item, i) => {
                    const productSlug = slugify(item.name);
                    const productUrl = `/products/${categorySlug}/${productSlug}`;

                    return (
                      <motion.div key={i} variants={fadeInUp}>
                        <Link
                          href={productUrl}
                          scroll={true}
                          className="group relative flex flex-col aspect-[4/5] rounded-2xl overflow-hidden bg-[#141a17] border border-white/[0.07] transition-all duration-500 hover:border-[#cea945]/60 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85)] hover:-translate-y-1 block"
                        >
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

                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/50 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-90" />
                          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/40 via-transparent to-transparent opacity-60" />

                          {(item.subcategory || item.latin) && (
                            <div className="absolute top-4 left-4 z-10">
                              <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#cfc8ba] bg-[#0b0b0a]/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                                {item.subcategory || item.latin}
                              </span>
                            </div>
                          )}

                          <div className="relative z-10 p-5 md:p-6 mt-auto flex flex-col justify-end text-left">
                            <h4 className="text-[17px] md:text-[20px] font-bold text-white font-serif leading-snug tracking-tight group-hover:text-[#cea945] transition-colors duration-300 drop-shadow-md">
                              {item.name}
                            </h4>

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
      <section className="px-[5%] py-28 sm:py-36 md:py-40 bg-[#0b0b0a] border-y border-white/5 relative overflow-hidden select-none">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/products/sourcing-bg.webp"
            alt="Mintrix Global Port Consolidation & Logistics"
            fill
            sizes="100vw"
            quality={92}
            className="object-cover object-right md:object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a] via-[#0b0b0a]/85 to-[#0b0b0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a] via-transparent to-[#0b0b0a]" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#cea945]/[0.06] blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="lg:col-span-5"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3.5 mb-5">
                <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                  Sourcing Advantage
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif font-bold text-white leading-[1.12] mb-6 tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
              >
                One sourcing partner across{" "}
                <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                  every category.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#cfc8ba] leading-[1.8] text-[15px] sm:text-[16px] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
              >
                Buying multiple commodity types usually means managing fragmented suppliers and disjointed logistics. Mintrix Trading consolidates that into a single relationship: one trade desk, uniform export documentation, and standardized quality verification across every origin port.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="lg:col-span-7 grid gap-4 sm:gap-4.5"
            >
              {[
                {
                  title: "Consistent Quality Verification",
                  desc: "Uniform grading, moisture thresholds, and purity testing executed across every origin prior to vessel booking.",
                },
                {
                  title: "Unified Export Documentation",
                  desc: "One coordinated dossier (Halal, FDA, Certificate of Origin, phytosanitary) regardless of commodity mix.",
                },
                {
                  title: "Mixed-Category Consolidation",
                  desc: "Consolidated container packing across diverse product divisions to optimize freight economics on targeted orders.",
                },
                {
                  title: "Single 24-Hour Commercial Quotation",
                  desc: "A singular commercial quotation encompassing all line items on your requisition with complete CIF/FOB terms.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-[#0e1511]/85 backdrop-blur-md border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.75)] hover:border-[#cea945]/50 hover:bg-[#121c17]/90 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-[2.5px] bg-gradient-to-b from-[#cea945] via-[#eed484] to-[#cea945] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />

                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-[#cea945]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#cea945] group-hover:border-[#cea945] transition-all duration-300">
                    <span className="text-[#cea945] group-hover:text-[#0b0b0a] font-serif font-bold text-xs sm:text-sm">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-[16.5px] sm:text-[17.5px] text-white mb-1.5 group-hover:text-[#cea945] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#cfc8ba] text-[13.5px] sm:text-[14px] leading-[1.7] font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── FAQ & FINAL CTA ─── */}
      <section className="px-[5%] py-24 sm:py-32 bg-[#0b0b0a] relative overflow-hidden select-none border-t border-white/5">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#21332a]/20 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[400px] bg-[#cea945]/[0.035] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center max-w-[840px] mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
              <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                General Procurement
              </span>
              <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold font-serif text-white tracking-tight leading-[1.15]">
              Common questions about{" "}
              <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                bulk food sourcing.
              </span>
            </h2>
          </div>

          <div className="max-w-[880px] mx-auto space-y-4 mb-24 sm:mb-32">
            {faqsData.map((faq, i) => {
              const isOpen = openFAQ === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#111714]/90 border-[#cea945]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                      : "bg-[#0e1511]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#111714]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left p-6 sm:px-8 cursor-pointer group gap-4"
                  >
                    <span
                      className={`font-serif text-[16px] sm:text-[18px] font-bold transition-colors duration-300 leading-snug ${
                        isOpen ? "text-[#cea945]" : "text-white group-hover:text-[#eed484]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center text-sm transition-all duration-300 ${
                        isOpen
                          ? "bg-[#cea945] border-[#cea945] text-[#0b0b0a]"
                          : "bg-white/[0.03] border-white/10 text-[#cea945] group-hover:border-[#cea945]/50"
                      }`}
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-0 border-t border-white/[0.05]">
                      <p className="pt-4 text-[14px] sm:text-[15px] text-[#cfc8ba] leading-[1.8] font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── FINAL CTA ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="group relative rounded-3xl border border-white/[0.1] bg-[#0c130f] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)]"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/about/cta-bg.webp"
                alt="Global Food Commodity Sourcing Desk"
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                quality={90}
                className="object-cover object-right opacity-40 transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c130f] via-[#0c130f]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0c130f]/60 via-transparent to-[#0c130f]/80" />
            </div>

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945]/70 to-transparent" />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_auto] gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                  <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                    Direct Trade Desk
                  </span>
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white leading-[1.12] mb-5 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  A food trading company in Dubai{" "}
                  <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                    you can verify.
                  </span>
                </h2>

                <p className="text-[#cfc8ba] text-sm sm:text-base md:text-[16.5px] max-w-xl leading-[1.8] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Since 2016, Mintrix Trading has built its name on verifiable origin documentation, rigid pre-shipment inspections, and commercial response times you can rely on. Send us your requirements to receive a formal quotation within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[240px] sm:min-w-[280px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.22em] px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_6px_25px_rgba(206,169,69,0.35)] shadow-[0_4px_16px_rgba(206,169,69,0.2)] cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 bg-[#0b0b0a]/50 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-[0.22em] px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 hover:border-[#cea945] hover:text-[#cea945] cursor-pointer"
                >
                  <span>Explore Products</span>
                </Link>

                <div className="pt-2 flex items-center justify-center gap-2 text-[10.5px] uppercase tracking-wider text-[#a89f8b] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cea945]" />
                  <span>24h Commercial Response Guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}