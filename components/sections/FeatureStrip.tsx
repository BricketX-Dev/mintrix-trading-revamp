"use client";

import { motion } from "framer-motion";

export default function FeatureStrip() {
  const features = [
    {
      no: "01",
      title: "Best-Origin Sourcing",
      desc: "Verified agricultural suppliers across the world's best harvest origins.",
      icon: "/images/home/icons/best-origin.png",
    },
    {
      no: "02",
      title: "Quality Verified",
      desc: "Every container consignment inspected at origin prior to vessel dispatch.",
      icon: "/images/home/icons/quality-verified.png",
    },
    {
      no: "03",
      title: "Full Documentation",
      desc: "Halal, FDA, COO & phytosanitary export dossiers prepared in-house.",
      icon: "/images/home/icons/full-document.png",
    },
    {
      no: "04",
      title: "Live Tracking",
      desc: "End-to-end maritime logistics tracking directly into your destination port.",
      icon: "/images/home/icons/live-tracking.png",
    },
  ];

  return (
    <section className="bg-[#080c0a] border-y border-white/[0.08] relative z-20 overflow-hidden select-none py-12 sm:py-16 md:py-20">
      {/* ─── Ambient Section Lighting ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[180px] bg-[#cea945]/[0.05] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 right-1/4 w-[450px] h-[220px] bg-[#21332a]/30 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl bg-[#0c1410] border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:border-[#cea945]/60 hover:bg-[#111c16] hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(206,169,69,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Top ambient gold hairline accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              {/* Ambient radial flare behind the icon that blooms on hover */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#cea945]/[0.06] group-hover:bg-[#cea945]/20 blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Pillar Index Tag */}
              <div className="flex items-center gap-2 mb-8 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] shadow-[0_0_8px_rgba(206,169,69,0.8)]" />
                <span className="text-[10.5px] font-mono tracking-[0.28em] text-[#d4af37] uppercase font-bold">
                  PILLAR {item.no}
                </span>
              </div>

              {/* ─── PURE GOLD ICON MASK (Eliminates the muddy filter look) ─── */}
              <div className="relative mb-8 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-[0_4px_18px_rgba(206,169,69,0.45)]">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500"
                  style={{
                    maskImage: `url('${item.icon}')`,
                    WebkitMaskImage: `url('${item.icon}')`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    background: "linear-gradient(180deg, #fff2be 0%, #cea945 50%, #9e751d 100%)",
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-serif text-[19px] sm:text-[20px] font-bold tracking-tight mb-3 group-hover:text-[#cea945] transition-colors duration-300 relative z-10 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#cfc8ba] text-[13.5px] sm:text-[14px] leading-[1.75] max-w-[270px] font-light group-hover:text-white transition-colors duration-300 relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}