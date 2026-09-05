"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    idx: "01",
    title: "Client Inquiry",
    description:
      "Send your product, quantity, specification and destination. A dedicated trade manager confirms within the hour.",
  },
  {
    idx: "02",
    title: "Origin Research",
    description:
      "Our sourcing team finds the best available origin right now — quality, pricing, certifications and lead times.",
  },
  {
    idx: "03",
    title: "Quotation in 24h",
    description:
      "You receive a competitive quote with full specification sheet, packing format, certifications and delivery timeline.",
  },
  {
    idx: "04",
    title: "Quality Verification",
    description:
      "Inspection at origin: grade testing, moisture analysis, packaging and batch-label review.",
  },
  {
    idx: "05",
    title: "Export Documentation",
    description:
      "Halal, FDA, Certificate of Origin, phytosanitary, fumigation, packing list and Bill of Lading — all prepared for you.",
  },
  {
    idx: "06",
    title: "Shipping & Live Tracking",
    description:
      "Goods loaded in 20ft/40ft dry or reefer containers, with live tracking to your destination port.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#0b0b0a] border-t border-white/5 relative overflow-hidden select-none">
      {/* ─── CONTAINER TERMINAL BACKGROUND ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home/pattern.jpg"
          alt="Container Logistics and Port Sourcing"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-30 scale-105"
        />

        {/* Vertical fades: Melts the section seamlessly into preceding and subsequent blocks */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a] via-[#0b0b0a]/65 to-[#0b0b0a]" />

        {/* Radial vignette: Keeps the content plane high-contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_#0b0b0a_85%)]" />

        {/* Ambient warm flare: Accentuates the natural backlight of the photography */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[350px] bg-[#cea945]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
            <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
              The Procurement Process
            </span>
            <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-serif font-bold text-white tracking-tight leading-[1.12]">
            From inquiry to delivered container,{" "}
            <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
              handled for you.
            </span>
          </h2>
        </div>

        {/* ─── 6-Step Process Grid ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
        >
          {steps.map((step) => (
            <motion.div key={step.idx} variants={cardVariants} className="h-full">
              <div className="group relative bg-[#0e1511]/85 backdrop-blur-md border border-white/[0.08] p-7 sm:p-9 rounded-2xl transition-all duration-500 hover:border-[#cea945]/50 hover:bg-[#121c17]/90 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-10px_rgba(0,0,0,0.85)] flex flex-col h-full overflow-hidden">
                {/* Subtle top gold accent sweep on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Giant Ambient Watermark Number */}
                <div className="absolute -bottom-3 -right-2 text-[100px] sm:text-[120px] font-serif font-bold text-white/[0.03] group-hover:text-[#cea945]/[0.07] transition-colors duration-500 pointer-events-none leading-none select-none">
                  {step.idx}
                </div>

                {/* Step Pill & Connector Line */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-[#cea945]/30 flex items-center justify-center text-[#cea945] font-bold text-sm group-hover:bg-[#cea945] group-hover:text-[#0b0b0a] group-hover:border-[#cea945] transition-all duration-300 shadow-sm">
                    {step.idx}
                  </div>
                  <div className="h-[1px] flex-grow bg-white/[0.07] group-hover:bg-[#cea945]/30 transition-colors duration-300" />
                </div>

                {/* Step Narrative */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-[19px] sm:text-[20px] font-serif font-bold text-white mb-2.5 group-hover:text-[#cea945] transition-colors duration-300 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#cfc8ba] leading-[1.7] font-light group-hover:text-[#e7e1d4] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}