"use client";

import React, { FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// SVG Micro-icons
const MailIcon = () => (
  <svg className="w-4 h-4 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="w-4 h-4 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ShieldCheckIcon = () => (
  <svg className="w-4 h-4 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dubaiTime, setDubaiTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDubaiTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " GST (UTC+4)"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error?.message || "Failed to submit request.");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to send message. Please reach our desk directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-[#080d0a]/90 border border-white/[0.1] text-white placeholder-[#858074] px-4 py-3.5 rounded-lg outline-none hover:border-white/25 focus:border-[#cea945] focus:bg-[#0e1511] transition-all duration-200 text-[14px] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.6)] disabled:opacity-50";
  const labelClasses =
    "block text-[10.5px] font-bold text-[#b5ad9a] uppercase tracking-[0.18em] mb-2";

  return (
    <main className="bg-[#0b0b0a] min-h-screen pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 relative overflow-hidden text-white">
      {/* ─── Hero Background Visual (Port / Global Maritime) ─── */}
      <div className="absolute top-0 left-0 right-0 h-[480px] md:h-[600px] pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/images/map.jpg"
          alt="Global Maritime Port Map"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/70 via-[#0b0b0a]/90 to-[#0b0b0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_#0b0b0a_80%)]" />
      </div>

      {/* Atmospheric Accent Lighting */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#cea945]/[0.05] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-[45%] right-0 w-[450px] h-[450px] bg-[#21332a]/30 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Editorial Header ─── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3.5 mb-5 sm:mb-6">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
            <span className="text-[#cea945] text-[10px] sm:text-[11.5px] font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.3)]">
              Direct Trade Desk
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-serif leading-[1.08] tracking-tight mb-5 sm:mb-6"
          >
            Direct access to our{" "}
            <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
              procurement team.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#cfc8ba] text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.75] font-light max-w-[640px] mx-auto px-2"
          >
            Operating from Dubai across 50+ origin ports. Submit specifications for prompt vessel allocation, MOQs, and FOB/CIF commercial pricing.
          </motion.p>
        </motion.div>

        {/* ─── Main Two-Column Structure ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* ─── LEFT COLUMN: Desk Status, Authority & Credentials (Span 5) ─── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            {/* Live Operational Status Card */}
            <motion.div
              variants={fadeInUp}
              className="p-5 sm:p-6 rounded-2xl bg-[#111714]/90 border border-white/[0.08] shadow-xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cea945] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#cea945]" />
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    Trade Desk Status
                  </span>
                </div>
                <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#cea945] bg-[#cea945]/10 px-2.5 py-0.5 rounded border border-[#cea945]/30">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <span className="block text-[10px] text-[#a89f8b] uppercase tracking-wider font-semibold mb-1">
                    Dubai Time
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-mono text-white tracking-tight">
                    {dubaiTime || "12:00:00 GST"}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#a89f8b] uppercase tracking-wider font-semibold mb-1">
                    Response Window
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-white font-medium">
                    &lt; 24h Guaranteed
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Points */}
            <motion.div
              variants={fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-[#111714]/90 border border-white/[0.08] space-y-5 backdrop-blur-md"
            >
              <h3 className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#a89f8b] pb-2.5 border-b border-white/[0.06]">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+971541662352"
                  className="flex items-start gap-4 text-white hover:text-[#cea945] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#cea945]/40 transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <span className="block text-[10.5px] text-[#a89f8b] uppercase tracking-wider font-medium">
                      Direct Trade Line
                    </span>
                    <span className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide">
                      +971 54 166 2352
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@mintrixtrading.com"
                  className="flex items-start gap-4 text-white hover:text-[#cea945] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#cea945]/40 transition-colors">
                    <MailIcon />
                  </div>
                  <div>
                    <span className="block text-[10.5px] text-[#a89f8b] uppercase tracking-wider font-medium">
                      Commercial Inquiries
                    </span>
                    <span className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide break-all">
                      info@mintrixtrading.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <span className="block text-[10.5px] text-[#a89f8b] uppercase tracking-wider font-medium">
                      Headquarters
                    </span>
                    <span className="text-[13px] sm:text-[13.5px] text-[#cfc8ba] leading-relaxed block font-light">
                      Office No. 101-182, Muhammad Abdullah Property,<br />
                      Deira – Hor Al Anz, Dubai, UAE[cite: 1]
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Operational Hub Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl"
            >
              <Image
                src="/images/products/hero-bg.webp"
                alt="Dubai Logistics Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/65 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#cea945] block mb-1">
                    Logistics Gateway
                  </span>
                  <h4 className="text-white font-serif text-[16px] sm:text-[17px] font-bold leading-tight">
                    Jebel Ali Port &amp; Air Cargo Network
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#111714]/90 backdrop-blur-sm border border-white/15 flex items-center justify-center text-[#cea945] text-xs">
                  ↗
                </div>
              </div>
            </motion.div>

            {/* Procurement Assurances Card */}
            <motion.div
              variants={fadeInUp}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#111714] to-[#14201a] border border-[#cea945]/25 relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-3 text-[#cea945]">
                <ShieldCheckIcon />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  B2B Trade Protocol
                </span>
              </div>
              <ul className="space-y-2.5 text-[12px] sm:text-[12.5px] text-[#cfc8ba] font-light">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] shrink-0" />
                  <span>SGS / Bureau Veritas pre-shipment inspection on demand</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] shrink-0" />
                  <span>LC (Letter of Credit) &amp; verified escrow trade finance accepted</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] shrink-0" />
                  <span>Phytosanitary, Halal, COO, and FDA-compliant documentation</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Channels */}
            <motion.div variants={fadeInUp} className="flex items-center justify-between pt-1 px-1">
              <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#a89f8b] font-medium">
                Verified Channels
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { href: "https://www.facebook.com/mintrixtrading", label: "Facebook", icon: <FacebookIcon /> },
                  { href: "https://www.linkedin.com/company/mintrix-trading/", label: "LinkedIn", icon: <LinkedInIcon /> },
                  { href: "https://www.instagram.com/mintrixtrading/", label: "Instagram", icon: <InstagramIcon /> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 hover:border-[#cea945]/60 hover:bg-[#cea945] hover:text-[#0b0b0a] transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Commercial Dossier Form (Span 7) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-[#111714]/95 border border-white/[0.1] rounded-2xl p-6 sm:p-9 lg:p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] relative backdrop-blur-md">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#cea945]/[0.03] blur-[90px] pointer-events-none" />

              <div className="mb-7 sm:mb-8 pb-5 sm:pb-6 border-b border-white/[0.08]">
                <span className="text-[10px] sm:text-[10.5px] font-bold text-[#cea945] uppercase tracking-[0.25em] block mb-1.5">
                  Inquiry Form
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Request Wholesale Quotation
                </h2>
                <p className="text-[13px] sm:text-[13.5px] text-[#a89f8b] font-light mt-1.5">
                  Complete this dossier to receive itemized CIF/FOB pricing, packing specs, and lead times.
                </p>
              </div>

              {isSuccess ? (
                <div className="bg-[#14201a] border border-[#cea945]/30 rounded-xl p-8 sm:p-10 text-center my-6">
                  <div className="w-14 h-14 bg-[#cea945]/10 border border-[#cea945]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#cea945]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-white mb-2">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-[14px] text-[#cfc8ba] max-w-md mx-auto font-light leading-relaxed mb-6">
                    Your requirements have been logged at the Dubai trade desk. A trade manager will contact you with commercial terms within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cea945] hover:text-white transition-colors"
                  >
                    Submit Another Inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-[13px] p-4 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className={labelClasses}>
                        Full Name <span className="text-[#cea945]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Tariq Al-Mansoor"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Company / Enterprise <span className="text-[#cea945]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="e.g. Al-Noor Import &amp; Export"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Corporate Email <span className="text-[#cea945]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="procurement@company.com"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Phone / WhatsApp <span className="text-[#cea945]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+971 50 000 0000"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Commodity Division <span className="text-[#cea945]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          name="product"
                          defaultValue=""
                          className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                          disabled={isSubmitting}
                        >
                          <option value="" disabled hidden>
                            Select commodity...
                          </option>
                          <option value="Grains & Cereals (Rice & Wheat)">Grains &amp; Cereals (Rice &amp; Wheat)</option>
                          <option value="Spices & Seasonings">Spices &amp; Seasonings</option>
                          <option value="Pulses & Legumes (Beans & Lentils)">Pulses &amp; Legumes (Beans &amp; Lentils)</option>
                          <option value="Edible Oils & Oil Seeds">Edible Oils &amp; Oil Seeds</option>
                          <option value="Poultry & Protein (Halal Chicken)">Poultry &amp; Protein (Halal Chicken)</option>
                          <option value="Nuts & Dry Fruits">Nuts &amp; Dry Fruits</option>
                          <option value="Processed & Canned Food">Processed &amp; Canned Food</option>
                          <option value="Fresh Produce">Fresh Produce</option>
                          <option value="Multi-Commodity Order">Multi-Commodity Consolidated Container</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#cea945]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        Required Volume <span className="text-[#cea945]">*</span>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        required
                        placeholder="e.g. 2x 40ft FCL / 50 MT"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className={labelClasses}>
                        Discharge Port / Destination <span className="text-[#cea945]">*</span>
                      </label>
                      <input
                        type="text"
                        name="destination"
                        required
                        placeholder="e.g. Jebel Ali / Port of Sohar"
                        className={inputClasses}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Preferred Incoterm</label>
                      <div className="relative">
                        <select
                          name="incoterm"
                          defaultValue="CIF"
                          className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                          disabled={isSubmitting}
                        >
                          <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                          <option value="FOB">FOB (Free On Board - Origin)</option>
                          <option value="CFR">CFR (Cost &amp; Freight)</option>
                          <option value="EXW">EXW (Ex Works)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#cea945]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Detailed Specifications</label>
                    <textarea
                      rows={3}
                      name="details"
                      placeholder="Specify grading requirements, grain length, moisture limits, customized 25kg/50kg PP bag labeling, or target shipment window..."
                      className={`${inputClasses} resize-none`}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="pt-2 sm:pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#cea945] hover:bg-white text-[#0b0b0a] font-bold text-[12px] sm:text-[12.5px] uppercase tracking-[0.22em] py-4 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(206,169,69,0.25)] flex items-center justify-center gap-3 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        "Transmitting to Trade Desk..."
                      ) : (
                        <>
                          <span>Submit Trade Inquiry</span>
                          <span className="text-base leading-none">&rarr;</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10.5px] sm:text-[11px] text-[#8e8778] text-center mt-3 font-light">
                      Non-disclosure assured. Commercial inquiries are held under strict trade confidence.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}