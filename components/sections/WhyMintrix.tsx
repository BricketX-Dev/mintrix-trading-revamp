"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const reasons = [
  {
    no: "01",
    title: "Verified Supplier Network",
    desc: "Direct relationships with certified tier-1 mills and processing facilities — bypassing commercial intermediaries.",
    icon: "/images/why-mintrix/Verified Supplier Network.png",
    metric: "50+ Direct Mills",
    tag: "Direct Origin",
  },
  {
    no: "02",
    title: "Quality-Focused Verification",
    desc: "Rigorous pre-shipment inspections: moisture analysis, grading metrics, and batch testing before container dispatch.",
    icon: "/images/why-mintrix/Quality-Focused Verification.png",
    metric: "SGS / BV Standard",
    tag: "Batch Certified",
  },
  {
    no: "03",
    title: "Global Market Reach",
    desc: "Cross-continental logistics across 50+ source nations, delivering bulk consignments to destination ports in 14 countries.",
    icon: "/images/why-mintrix/Global Market Reach.png",
    metric: "$50M+ Executed",
    tag: "14 Export Ports",
  },
  {
    no: "04",
    title: "End-to-End Compliance",
    desc: "Halal verification, FDA-standard documentation, Certificate of Origin, and complete customs dossiers prepared in-house.",
    icon: "/images/why-mintrix/End-to-End Compliance.png",
    metric: "100% Validated",
    tag: "Customs Cleared",
  },
  {
    no: "05",
    title: "UAE-Based Trade Desk",
    desc: "Headquartered and registered in Dubai, offering buyers a transparent, legally secure jurisdiction for international trade.",
    icon: "/images/why-mintrix/Uae Based trade Desk.png",
    metric: "Dubai Legal Base",
    tag: "UAE Jurisdiction",
  },
  {
    no: "06",
    title: "Dedicated Trade Manager",
    desc: "A single accountable contact coordinating commercial pricing, vessel allocation, and transit tracking from end to end.",
    icon: "/images/why-mintrix/Dedicated Trade Manager.png",
    metric: "Direct Line Account",
    tag: "Accountable Lead",
  },
];

export default function WhyMintrix() {
  return (
    <section 
      id="why" 
      className="py-24 sm:py-32 md:py-36 bg-[#f4f0e6] border-y border-[#dfd6c5] relative overflow-hidden select-none"
    >
      {/* ─── Ambient Section Depth ─── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cea945]/[0.09] blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-multiply">
        <Image
          src="/images/pattern/pattern-01.svg"
          alt="Geometric Line Pattern"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Header ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
              <span className="text-[#8c6d23] text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase">
                Institutional Trust
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0e1712] leading-[1.12] tracking-tight">
              The wholesale partner{" "}
              <span className="italic text-[#8c6d23]">
                UAE buyers rely on.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[#4e483d] text-base md:text-[17px] leading-[1.8] mb-6 font-light">
              International commodity procurement introduces severe friction — unverified mills, moisture variance, and intricate customs logistics. Mintrix Trading acts as the definitive buffer: verifying specifications at origin, arranging compliance, and guaranteeing container transit into your destination port.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0e1712]">
              <span>Direct Mill Contracts</span>
              <span className="text-[#cea945]">•</span>
              <span>Zero Intermediaries</span>
              <span className="text-[#cea945]">•</span>
              <span className="text-[#8c6d23]">24h Commercial Quotation</span>
            </div>
          </div>
        </div>

        {/* ─── Bottom Grid: 6 Sculpted Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group relative p-8 sm:p-9 rounded-2xl bg-[#faf7f0] border border-[#d8cebe] shadow-[0_8px_30px_rgba(20,32,26,0.06)] transition-all duration-400 hover:border-[#8c6d23]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(20,32,26,0.16)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Gold Sweep Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8c6d23] via-[#cea945] to-[#8c6d23] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

              {/* Top Ambient Corner Flare on Hover */}
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#cea945]/0 group-hover:bg-[#cea945]/15 transition-all duration-500 blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header Row: Icon Badge + Pillar Index */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#e5dcce]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-xl bg-[#0e1712] p-2.5 flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#16241c] group-hover:shadow-lg">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={26}
                        height={26}
                        className="object-contain filter invert sepia saturate-[4] hue-rotate-[5deg] brightness-[1.1]"
                      />
                    </div>
                    <div>
                      <span className="block text-[9.5px] font-bold uppercase tracking-[0.22em] text-[#8c6d23]">
                        {item.tag}
                      </span>
                      <span className="text-[12px] font-mono font-semibold text-[#6e6657]">
                        Pillar {item.no}
                      </span>
                    </div>
                  </div>

                  <span className="font-serif text-3xl font-bold text-[#b0944e]/50 group-hover:text-[#8c6d23] transition-colors duration-300">
                    {item.no}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-[20px] font-serif font-bold text-[#0e1712] mb-3 leading-snug group-hover:text-[#8c6d23] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#443f35] leading-[1.75] font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Custom Metric Pill */}
              <div className="mt-8 pt-4 border-t border-[#e5dcce] flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-bold text-[#5c5445] relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d23]" />
                  <span className="group-hover:text-[#0e1712] transition-colors duration-300">
                    {item.metric}
                  </span>
                </div>
                <span className="text-[#8c6d23] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom Deep Forest-Green Anchor Banner ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-2xl bg-[#0e1712] border border-[#1e2e24] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(14,23,18,0.25)] relative overflow-hidden"
        >
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#cea945]/[0.1] blur-[80px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Looking for a dependable supply partner?
            </h4>
            <p className="text-xs sm:text-sm text-[#cfc8ba] font-light">
              Inquiries confirmed within the hour <span className="opacity-40 mx-2">|</span> Full specification sheet in 24 hours
            </p>
          </div>

          <Link
            href="/contact"
            className="relative z-10 shrink-0 bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#0e1712] shadow-lg cursor-pointer"
          >
            Request a Quote &rarr;
          </Link>
        </motion.div>

      </div>
    </section>
  );
}