"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const reasons = [
  {
    no: "01",
    title: "Verified Supplier Network",
    desc: "Direct relationships with verified manufacturers — cutting out unnecessary intermediaries.",
  },
  {
    no: "02",
    title: "Quality-Focused Verification",
    desc: "Independent quality inspection and batch testing before every single dispatch.",
  },
  {
    no: "03",
    title: "Global Market Reach",
    desc: "Sourcing across 50+ countries and supplying buyers across the Middle East, Africa, and Europe.",
  },
  {
    no: "04",
    title: "End-to-End Compliance",
    desc: "Halal, FDA, Certificate of Origin, and complete export documentation handled for you.",
  },
  {
    no: "05",
    title: "UAE-Based Trade Desk",
    desc: "UAE-registered in Dubai, offering a trusted, legally secure base for international trade.",
  },
  {
    no: "06",
    title: "Dedicated Trade Manager",
    desc: "A single accountable contact from initial inquiry to delivered container at your port.",
  },
];

export default function WhyMintrix() {
  return (
    <section id="why" className="py-24 md:py-32 bg-[#fffdfa] border-y border-[#e7e1d4] relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-multiply">
        <Image
          src="/images/pattern/pattern-01.svg" // Ensure this matches your public folder path (e.g., "/images/Patten-01.jpg")
          alt="Geometric Background Pattern"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Split: Executive Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#cea945]" />
              <span className="text-xs font-bold text-[#cea945] tracking-[0.2em] uppercase">
                Why Mintrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-[#0b0b0a] leading-tight">
              The wholesale food supplier UAE buyers rely on.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[#726a5c] text-base leading-relaxed mb-6">
              Sourcing food commodities across borders is hard — unverified suppliers, quality risk, customs paperwork, and tangled logistics. Mintrix Trading takes the entire job off your desk. We source from wherever a product is best, verify it at origin, and deliver it directly to your destination port.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold uppercase tracking-wider text-[#21332a]">
              <span>Direct Farm &amp; Mill Contracts</span>
              <span className="hidden sm:inline text-[#cea945]">·</span>
              <span>Zero Intermediaries</span>
              <span className="hidden sm:inline text-[#cea945]">·</span>
              <span>24h Quotation</span>
            </div>
          </div>
        </div>

        {/* Bottom Grid: 6 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative p-8 rounded-xl bg-white border border-[#e7e1d4] transition-all duration-300 hover:border-[#21332a] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(33,51,42,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top accent line that expands on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#21332a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div>
                <span className="font-serif text-3xl font-bold text-[#cea945] block mb-3 transition-colors duration-300 group-hover:text-[#21332a]">
                  {item.no}
                </span>
                <h3 className="text-lg font-bold text-[#0b0b0a] mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#726a5c] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar (Using your Brand Green) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-8 rounded-xl bg-[#21332a] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Subtle gold ambient glow inside the green banner */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#cea945]/10 blur-[60px] pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            <h4 className="text-lg font-serif font-bold text-white mb-1">
              Looking for a dependable supply partner?
            </h4>
            <p className="text-xs text-[#a4b2a4]">
              Inquiries confirmed within the hour <span className="opacity-50 mx-1">|</span> Full specification sheet in 24 hours
            </p>
          </div>
          <Link
            href="#quote"
            className="relative z-10 shrink-0 bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[2px] transition-all duration-300 hover:bg-white hover:text-[#21332a] shadow-md"
          >
            Request a Quote
          </Link>
        </motion.div>

      </div>
    </section>
  );
}