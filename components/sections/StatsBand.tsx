"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "2016", suffix: "", label: "Trading Since" },
  { value: "$50M+", suffix: "", label: "Trade Executed" },
  { value: "14", suffix: "", label: "Countries Served" },
  { value: "50+", suffix: "", label: "Countries Sourced" },
  { value: "2,000", suffix: "MT", label: "Monthly Capacity" },
  { value: "24h", suffix: "", label: "Quote Response" },
];

export default function StatsBand() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden border-y border-[#cea945]/20 bg-[#0b0b0a]">
      
      {/* Animated Background Image for a premium, cinematic feel */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.06 }}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/home/stats-bg.webp" 
          alt="Mintrix Trading Statistics Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
          quality={90}
        />
        {/* Multi-layered cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a] via-transparent to-[#0b0b0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0a] via-transparent to-[#0b0b0a]" />
        {/* Subtle backdrop blur to separate text from the noisy beans/spices background */}
        <div className="absolute inset-0 bg-[#0b0b0a]/40 backdrop-blur-[2px]" />
      </motion.div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
              <span className="text-[#cea945] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                Why Choose Us
              </span>
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-serif tracking-tight text-white leading-tight drop-shadow-lg">
              Your Trusted Partner in Global Food Trade
            </h2>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-2 md:divide-x divide-white/10 text-center items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="px-2 flex flex-col items-center justify-center group"
            >
              {/* Metallic Gold Gradient Text (Kept Strictly in 1 Line) */}
              <div className="text-[2.25rem] sm:text-[2.5rem] lg:text-[2.65rem] font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#f7e7b4] via-[#cea945] to-[#a97c2c] leading-none mb-3 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-sm whitespace-nowrap flex items-baseline justify-center">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="text-[0.48em] font-sans font-bold tracking-wider ml-1.5 align-baseline opacity-90">
                    {stat.suffix}
                  </span>
                )}
              </div>
              
              {/* Label */}
              <div className="text-[11px] md:text-xs text-[#a89f8b] font-medium tracking-widest uppercase mt-1 group-hover:text-[#cfc8ba] transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}