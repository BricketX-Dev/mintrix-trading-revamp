"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Reusable SVG Icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#cea945] flex-none mt-0.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
    <circle cx="12" cy="12" r="9" strokeOpacity="0.5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function AboutClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const stats = [
    { b: "2016", s: "Trading Since" },
    { b: "$50M+", s: "Trade Executed" },
    { b: "14", s: "Countries Served" },
    { b: "50+", s: "Countries Sourced" },
    { b: "18+", s: "Commodities" },
    { b: "24h", s: "Quote Response" },
  ];

  const countries = [
    { flag: "/images/Countries/united-states_197484.png", name: "USA" },
    { flag: "/images/Countries/china_4628706.png", name: "China" },
    { flag: "/images/Countries/thailand_4855805.png", name: "Thailand" },
    { flag: "/images/Countries/world_16021893.png", name: "Argentina" },
    { flag: "/images/Countries/brazil_9906449.png", name: "Brazil" },
    { flag: "/images/Countries/pak.png", name: "Pakistan" },
    { flag: "/images/Countries/kenya.png", name: "Kenya" },
    { flag: "/images/Countries/south-africa_8363054.png", name: "South Africa" },
    { flag: "/images/Countries/sri-lanka_5315348.png", name: "Sri Lanka" },
    { flag: "/images/Countries/colombia-flag_11654450.png", name: "Colombia" },
    { flag: "/images/Countries/india.png", name: "India" },
    { flag: "/images/Countries/circle_12364093.png", name: "Iraq" },
    { flag: "/images/Countries/world_16022620.png", name: "Saudi Arabia" },
    { flag: "/images/Countries/chile_7826434.png", name: "Chile" },
  ];

  const faqs = [
    { q: "What is Mintrix Trading?", a: "Mintrix Trading is a UAE-registered global food trading and procurement company based in Dubai. Established in 2016, it sources premium agricultural commodities and food products from verified suppliers worldwide and delivers to buyers across the UAE and beyond, handling quality, documentation and logistics end-to-end." },
    { q: "Where is Mintrix Trading based?", a: "Mintrix Trading is based in Dubai, UAE, at Office No. 101-182, Muhammad Abdullah Property, Deira, Hor Al Anz. From this Dubai base, the company sources food commodities from more than 50 countries and delivers to buyers worldwide." },
    { q: "Is Mintrix Trading a legitimate food trading company?", a: "Yes. Mintrix Trading is a UAE-registered company that has traded since 2016, executing more than $50M in food and agricultural commodity trade and supplying buyers in 14 countries, with verified suppliers and full export documentation on every shipment." },
    { q: "How long has Mintrix Trading been in business?", a: "Mintrix Trading has been trading since 2016, almost a decade of sourcing and delivering bulk food and agricultural commodities. In that time it has executed more than $50M in trade and now supplies buyers in 14 countries." },
  ];

  return (
    <div className="bg-[#0b0b0a] text-white overflow-hidden min-h-screen">
      
      {/* ─── CINEMATIC HERO ─── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-[5%] border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#cea945]/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[900px]">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
              <span className="text-[#cea945] text-[11px] md:text-xs font-bold uppercase tracking-[0.25em]">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold font-serif leading-[1.05] tracking-tight mb-8">
              A global food trading company built since <span className="text-[#cea945] italic">2016.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#cfc8ba] text-base md:text-[18px] leading-[1.8] max-w-[700px] font-light mb-10">
              Mintrix Trading is a UAE-registered food trading company in Dubai, sourcing agricultural commodities and food products from the world's best origins. Since 2016 we've grown into a global sourcing partner, moving more than $50M in trade across 14 countries, without ever tying ourselves to a single origin.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Link href="#story" className="inline-flex items-center gap-3 bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[2px] transition-all duration-300 hover:bg-white shadow-[0_4px_14px_rgba(206,169,69,0.2)]">
                Read Our Story <ArrowIcon />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-3 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[2px] transition-all duration-300 hover:border-[#cea945] hover:text-[#cea945]">
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── EXECUTIVE STATS STRIP ─── */}
      <section className="bg-[#111a15] border-b border-white/5 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((st, i) => (
              <motion.div key={i} variants={fadeInUp} className="py-10 px-6 text-center group">
                <span className="block font-serif font-bold text-3xl md:text-[34px] text-[#cea945] leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                  {st.b}
                </span>
                <span className="text-[11px] md:text-xs text-[#a89f8b] font-bold uppercase tracking-widest">
                  {st.s}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section id="story" className="py-24 md:py-32 px-[5%] bg-[#0b0b0a] relative">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
              <span className="text-[#cea945] text-[11px] font-bold uppercase tracking-[0.25em]">Our Story</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-[40px] font-bold font-serif leading-[1.15] text-white mb-6">
              From a small Dubai trading desk to a global sourcing network.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#cfc8ba] leading-[1.8] text-[15px] md:text-[16px] font-light mb-5">
              Mintrix Trading started in 2016 with a simple idea: buyers in the UAE needed a food trading company in Dubai they could actually trust, one that sourced from wherever a product was best, not wherever was convenient or familiar.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[#cfc8ba] leading-[1.8] text-[15px] md:text-[16px] font-light">
              That idea grew into a full trade operation. Today Mintrix Trading supplies 18+ bulk food and agricultural commodity categories, sources from more than 50 countries, and delivers to buyers in 14 countries, all run from a UAE-registered office in Deira, Dubai.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-5 bg-[#111a15] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
            {[
              "Started as a Dubai-based foodstuff trading desk in 2016",
              "Expanded into 18+ bulk food and agricultural commodity categories",
              "Built direct relationships with suppliers across 50+ sourcing countries",
              "Now delivering to buyers in 14 countries, with $50M+ in trade executed"
            ].map((point, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start">
                <CheckIcon />
                <span className="text-[15px] text-[#e7e1d4] leading-relaxed pt-0.5">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── GLOBAL PRESENCE ─── */}
      <section className="py-24 md:py-32 px-[5%] bg-[#111a15] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#cea945]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-[700px] mx-auto mb-16">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
              <span className="text-[#cea945] text-[11px] font-bold uppercase tracking-[0.25em]">Global Presence</span>
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-[40px] font-bold font-serif leading-[1.1] text-white mb-6">
              Trading in 14 countries since 2016.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#a89f8b] leading-[1.8] text-[15px] md:text-[16px] font-light">
              A decade of relationships with growers, mills and export houses across four continents, built on trust, repeat orders and more than $50M in trade executed.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {countries.map((c, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-[#16221c] border border-white/5 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cea945]/40 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-inner">
                  <Image src={c.flag} alt={c.name} fill sizes="40px" className="object-cover" />
                </div>
                <span className="font-bold text-[12px] uppercase tracking-wider text-[#e7e1d4]">
                  {c.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION & VISION & HOW WE WORK ─── */}
      <section className="py-24 md:py-32 px-[5%] bg-[#0b0b0a] relative">
        <div className="max-w-[1240px] mx-auto">
          
          {/* Mission/Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-32">
            {[
              {
                title: "Our Mission",
                desc: "To be the most reliable link between global food producers and buyers in the UAE and beyond, sourcing with integrity, verifying every shipment, and delivering without excuses.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#cea945]"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
              },
              {
                title: "Our Vision",
                desc: "To become the food trading company buyers across the Middle East, Africa, Asia and the Americas think of first for bulk food and agricultural commodities, global reach, backed by a Dubai-based team.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#cea945]"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
              }
            ].map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#111a15] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start transition-all hover:border-[#cea945]/30">
                <div className="w-16 h-16 rounded-xl bg-[#cea945]/10 border border-[#cea945]/20 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-[#a89f8b] leading-relaxed text-[15px] font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How We Work Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-[700px] mx-auto mb-16">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
              <span className="text-[#cea945] text-[11px] font-bold uppercase tracking-[0.25em]">How We Work</span>
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-[40px] font-bold font-serif leading-[1.1] text-white mb-6">
              The principles behind every shipment.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Global by Design", desc: "We don't source from one country and call it global. Every product is sourced from wherever it's best right now, and delivered anywhere in the world." },
              { n: "02", title: "Verified at Every Step", desc: "Grade testing, moisture analysis and batch-label review happen at origin, before a shipment is ever packed." },
              { n: "03", title: "Compliance as Standard", desc: "Halal certification, food-safety documentation, Certificates of Origin and phytosanitary paperwork are prepared for every order." },
              { n: "04", title: "Direct Relationships", desc: "We work with manufacturers and growers directly, cutting out unnecessary middlemen and keeping pricing competitive." },
              { n: "05", title: "UAE-Registered", desc: "Based in Deira, Dubai, Mintrix Trading gives international buyers and suppliers a trusted, professional base for trade." },
              { n: "06", title: "Built for Speed", desc: "A dedicated trade manager confirms every inquiry within the hour and returns a full quotation within 24 hours." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-[#111a15] border border-white/5 rounded-2xl p-8 hover:border-[#cea945]/40 transition-colors duration-300 group">
                <div className="font-serif font-bold text-2xl text-[#cea945] opacity-50 mb-4 group-hover:opacity-100 transition-opacity">{item.n}</div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[#a89f8b] leading-relaxed text-[14px] font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── COMPLIANCE & FAQ ─── */}
      <section className="py-24 md:py-32 px-[5%] bg-[#111a15] border-y border-white/5 relative">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Compliance */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#cea945]/60" />
              <span className="text-[#cea945] text-[11px] font-bold uppercase tracking-[0.25em]">Documentation</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-[38px] font-bold font-serif leading-[1.15] text-white mb-6">
              Every shipment leaves origin fully documented.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#cfc8ba] leading-[1.8] text-[15px] md:text-[16px] font-light mb-8">
              As a UAE-registered agricultural commodity trader, Mintrix Trading treats documentation as standard practice, not an afterthought. Every order is prepared with the paperwork buyers and customs authorities need, before it ever reaches your port.
            </motion.p>
            <div className="space-y-4">
              {[
                "Halal certification for eligible products",
                "FDA-type food safety documentation",
                "Certificate of Origin (COO) for every shipment",
                "Phytosanitary certificates where required",
                "Full packing list and Bill of Lading"
              ].map((c, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start">
                  <CheckIcon />
                  <span className="text-[15px] text-[#e7e1d4]">{c}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[#0b0b0a] rounded-2xl border border-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4">Answers about Mintrix Trading</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFAQ === i;
                return (
                  <div key={i} className="border border-white/5 rounded-xl bg-[#111a15] overflow-hidden transition-all duration-300 hover:border-[#cea945]/30">
                    <button onClick={() => setOpenFAQ(isOpen ? null : i)} className="w-full flex items-center justify-between text-left p-5 cursor-pointer group">
                      <span className="font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#cea945] transition-colors pr-4">{faq.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-[#16221c] border border-white/5 flex items-center justify-center text-[#cea945] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="px-5 pb-5 text-[14px] text-[#a89f8b] leading-[1.7] font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-[5%] bg-[#0b0b0a]">
        <div className="max-w-[1240px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#111a15] border border-[#cea945]/20 rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#21332a]/30 to-transparent pointer-events-none" />
            
            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-[1px] bg-[#cea945]" />
                  <span className="text-[#cea945] text-[10px] font-bold uppercase tracking-[0.25em]">Work With Us</span>
                </div>
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
                  A food trading company in Dubai you can verify.
                </h2>
                <p className="text-[#a89f8b] text-[15px] max-w-xl leading-relaxed font-light">
                  Since 2016, Mintrix Trading has built its name on documentation, quality checks and response times you can rely on. Send us your requirement and see it for yourself.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[2px] transition-all duration-300 hover:bg-white shadow-[0_4px_14px_rgba(206,169,69,0.2)]">
                  Request a Quote <ArrowIcon />
                </Link>
                <Link href="/products" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-[2px] transition-all duration-300 hover:border-[#cea945] hover:text-[#cea945]">
                  Explore Products
                </Link>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

    </div>
  );
}