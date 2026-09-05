"use client";

import { motion } from "framer-motion";

export default function FeatureStrip() {
  const features = [
    {
      title: "Best-Origin Sourcing",
      desc: "Verified suppliers across the world's best origins.",
      icon: (
        <svg className="w-7 h-7 text-[#cea945]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Quality Verified",
      desc: "Every shipment inspected at origin before dispatch.",
      icon: (
        <svg className="w-7 h-7 text-[#cea945]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Full Documentation",
      desc: "Halal, FDA, COO & strict export compliance handled.",
      icon: (
        <svg className="w-7 h-7 text-[#cea945]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Live Tracking",
      desc: "End-to-end logistics & tracking to your destination port.",
      icon: (
        <svg className="w-7 h-7 text-[#cea945]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#0b0b0a] border-y border-white/10 relative z-20 overflow-hidden">
      
      {/* Central horizontal ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[120px] bg-[#cea945]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center px-6 py-14 group transition-colors duration-500 hover:bg-gradient-to-b hover:from-[#21332a]/40 hover:to-transparent"
            >
              {/* Expanding top gold indicator line on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100" />

              {/* Ultra-Premium Icon Container */}
              <div className="relative mb-7 flex items-center justify-center w-16 h-16 rounded-full bg-[#111a15] border border-white/5 group-hover:bg-[#21332a] group-hover:border-[#cea945]/40 transition-all duration-500 z-10">
                {/* Outer pulsing ring on hover */}
                <div className="absolute inset-0 rounded-full border border-[#cea945] opacity-0 group-hover:animate-ping group-hover:opacity-20" />
                
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(206,169,69,0.3)]">
                  {item.icon}
                </div>
              </div>

              {/* Title with typographic hierarchy */}
              <h3 className="text-white font-serif text-lg md:text-[19px] font-bold tracking-wide mb-3 group-hover:text-[#cea945] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Refined Description */}
              <p className="text-[#a89f8b] text-[13px] md:text-[14px] leading-relaxed max-w-[240px] font-medium group-hover:text-[#cfc8ba] transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}