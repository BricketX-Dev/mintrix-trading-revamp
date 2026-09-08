"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center bg-[#0b0b0a] overflow-hidden pt-[80px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/noise.jpg" 
          alt="Mintrix Trading Grains and Spices Assortment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-center"
        />
        {/* Deep architectural gradient for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a] via-[#0b0b0a]/90 to-transparent w-full md:w-[85%]" />
        <div className="absolute inset-0 bg-[#0b0b0a]/30 md:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[640px]"
        >
          {/* Cursive Subtitle */}
          <motion.div variants={itemVariants}>
            <span
              style={{ fontFamily: "var(--font-sacramento), cursive" }}
              className="text-[#cea945] text-[3.5rem] md:text-[4.5rem] block leading-none mb-3 -ml-1"
            >
              Global Sourcing
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-white text-[2.75rem] sm:text-5xl md:text-[3.8rem] lg:text-[4.2rem] font-bold leading-[1.1] tracking-tight mb-6"
          >
            Premium Commodities, <br className="hidden sm:block" />
            Delivered with Trust.
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-[#cfc8ba] text-[15px] md:text-[17px] leading-[1.6] max-w-[500px] mb-8 font-light"
          >
            A UAE-registered wholesale food supplier connecting buyers with verified origins worldwide. We handle bulk sourcing, quality control, and end-to-end logistics.
          </motion.p>

          {/* Trust Badge */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-[2px] h-[34px] bg-[#cea945]" />
            <div className="text-[#e2bd76] text-[13px] md:text-[14px] font-medium tracking-wide">
              Inquiry confirmed within the hour <span className="opacity-50 mx-1">|</span> Full quotation in 24h
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products"
              scroll={true}
              className="inline-flex items-center justify-center bg-[#cea945] text-[#0b0b0a] font-bold text-[11px] uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] transition-all duration-300 hover:bg-white hover:text-[#0b0b0a] shadow-[0_4px_14px_rgba(206,169,69,0.2)]"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              scroll={true}
              className="inline-flex items-center justify-center bg-transparent border border-white/25 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] transition-all duration-300 hover:border-[#cea945] hover:text-[#cea945]"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}