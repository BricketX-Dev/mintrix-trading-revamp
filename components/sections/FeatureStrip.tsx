"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureStrip() {
  const features = [
    {
      no: "01",
      title: "Best-Origin Sourcing",
      desc: "Verified agricultural suppliers across the world's best harvest origins.",
      icon: "/images/home/icons/best-origin.svg", // Update filename as needed
    },
    {
      no: "02",
      title: "Quality Verified",
      desc: "Every container consignment inspected at origin prior to vessel dispatch.",
      icon: "/images/home/icons/quality-verified.svg", // Update filename as needed
    },
    {
      no: "03",
      title: "Full Documentation",
      desc: "Halal, FDA, COO & phytosanitary export dossiers prepared in-house.",
      icon: "/images/home/icons/full-document.svg", // Update filename as needed
    },
    {
      no: "04",
      title: "Live Tracking",
      desc: "End-to-end maritime logistics tracking directly into your destination port.",
      icon: "/images/home/icons/live-tracking.svg", // Update filename as needed
    },
  ];

  return (
    <section className="bg-[#0b0b0a] border-y border-white/[0.08] relative z-20 overflow-hidden select-none">
      
      {/* Central horizontal ambient illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[140px] bg-[#cea945]/[0.045] blur-[90px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/[0.07]">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center px-6 sm:px-8 py-14 sm:py-16 group transition-all duration-500 hover:bg-gradient-to-b hover:from-[#14201a]/50 hover:via-[#0e1612]/30 hover:to-transparent overflow-hidden"
            >
              {/* Expanding top gold indicator hairline on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent group-hover:w-full transition-all duration-700 opacity-0 group-hover:opacity-100" />

              {/* Pillar Ordinal Watermark */}
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#a89f8b]/40 uppercase mb-5 group-hover:text-[#cea945] transition-colors duration-300">
                Pillar {item.no}
              </span>

              {/* ─── Ultra-Premium Custom Icon Pedestal ─── */}
              <div className="relative mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#121c17]/90 border border-white/[0.08] shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:bg-[#16241d] group-hover:border-[#cea945]/50 group-hover:shadow-[0_0_25px_rgba(206,169,69,0.25)] transition-all duration-500 z-10">
                
                {/* Ambient hover ring */}
                <div className="absolute inset-0 rounded-2xl border border-[#cea945] opacity-0 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 pointer-events-none" />

                {/* Custom PNG Icon with Gold-Metallic Filter */}
                <div className="relative w-8 h-8 transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    sizes="32px"
                    className="object-contain filter invert sepia saturate-[5] hue-rotate-[5deg] brightness-[1.15] drop-shadow-[0_2px_8px_rgba(206,169,69,0.35)]"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-serif text-lg sm:text-[19px] font-bold tracking-tight mb-2.5 group-hover:text-[#cea945] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#cfc8ba] text-[13.5px] sm:text-[14px] leading-[1.7] max-w-[260px] font-light group-hover:text-white transition-colors duration-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}