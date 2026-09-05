"use client";

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
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0b0b0a] border-t border-[#cea945]/20 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#21332a]/30 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cea945]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#cea945]" />
            <span className="text-[#cea945] text-xs font-bold uppercase tracking-[0.22em]">
              The Procurement Process
            </span>
            <span className="w-8 h-[2px] bg-[#cea945]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-white tracking-tight leading-tight">
            From inquiry to delivered container, handled for you.
          </h2>
        </div>

        {/* 6-Step Process Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.idx} variants={cardVariants}>
              <div className="group relative bg-[#111a15] border border-[#21332a] p-8 md:p-10 rounded-xl transition-all duration-500 hover:bg-[#21332a] hover:border-[#cea945]/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden">
                
                {/* Giant Watermark Number */}
                <div className="absolute -bottom-4 -right-4 text-[130px] font-serif font-bold text-[#21332a]/40 group-hover:text-[#cea945]/10 transition-colors duration-500 pointer-events-none leading-none select-none">
                  {step.idx}
                </div>

                {/* Top Border Accent (Animates on hover) */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#cea945] to-[#e2bd76] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Step Indicator */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#21332a] border border-[#cea945]/30 flex items-center justify-center text-[#cea945] font-bold text-sm group-hover:bg-[#cea945] group-hover:text-[#0b0b0a] transition-colors duration-300 shadow-sm">
                    {step.idx.replace("0", "")}
                  </div>
                  <div className="h-px flex-grow bg-[#21332a] group-hover:bg-[#cea945]/30 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#cea945] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#cfc8ba] leading-relaxed group-hover:text-white transition-colors duration-300">
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