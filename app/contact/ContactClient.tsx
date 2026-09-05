"use client";

import React, { FormEvent, useState } from "react";
import { motion, Variants } from "framer-motion";

const FacebookIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const LinkedInIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
const PinterestIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.17 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg>
);

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error?.message || "Failed to send message.");
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong. Please try emailing us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared classes for professional input styling
  const inputClasses = "w-full bg-white/[0.03] border border-white/10 text-white placeholder-[#a89f8b]/50 px-4 py-3.5 rounded-lg outline-none hover:border-white/20 focus:border-[#cea945] focus:bg-white/[0.05] transition-all duration-300 text-[14.5px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed";
  const labelClasses = "block text-[11px] font-bold text-[#a89f8b] uppercase tracking-[0.15em] mb-2 ml-1";

  return (
    <main className="bg-[#0b0b0a] min-h-screen pt-32 md:pt-40 pb-24 relative overflow-hidden text-white">
      
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cea945]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#21332a]/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-[5%] relative z-10">
        
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-16 md:mb-24">
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#cea945]/60" />
            <span className="text-[#cea945] text-[11px] md:text-xs font-bold uppercase tracking-[0.25em]">Get in Touch</span>
            <span className="w-8 h-[1px] bg-[#cea945]/60" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold font-serif leading-[1.05] tracking-tight mb-6">
            Connect With Our <span className="text-[#cea945]">Trade Desk</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#cfc8ba] text-base md:text-[18px] leading-[1.7] max-w-[640px] mx-auto font-light">
            Our trade experts verify stock metrics and finalize detailed commercial quotations rapidly. Tell us what you need, and we’ll handle the rest.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Information */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12 lg:sticky lg:top-32">
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-[#a89f8b] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">Direct Contact</h3>
              <div className="space-y-4">
                <a href="tel:+971541662352" className="flex items-center gap-4 text-[16px] font-medium text-white hover:text-[#cea945] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#cea945]/40 transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                  </div>
                  +971 54 166 2352
                </a>
                <a href="mailto:info@mintrixtrading.com" className="flex items-center gap-4 text-[16px] font-medium text-white hover:text-[#cea945] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#cea945]/40 transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>
                  </div>
                  info@mintrixtrading.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-[#a89f8b] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Global Headquarters</h3>
              <p className="text-[#cfc8ba] leading-[1.8] text-[15px] font-light max-w-[280px]">
                Mintrix Trading LLC<br />
                Dubai, United Arab Emirates<br />
                Operating worldwide across 50+ origins.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-[#a89f8b] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Connect</h3>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FacebookIcon />, href: "https://www.facebook.com/mintrixtrading" },
                  { icon: <InstagramIcon />, href: "https://www.instagram.com/mintrixtrading/" },
                  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/mintrix-trading/" },
                  { icon: <PinterestIcon />, href: "https://www.pinterest.com/MintrixTrading/" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#cfc8ba] hover:text-[#0b0b0a] hover:bg-[#cea945] hover:border-[#cea945] transition-all duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Wholesale Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
            <div className="bg-[#111a15] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              
              <div className="mb-10 pb-6 border-b border-white/10">
                <h3 className="font-serif font-bold text-2xl md:text-[28px] text-white mb-2 tracking-tight">Request a wholesale quote</h3>
                <p className="text-[14px] text-[#a89f8b] font-light">B2B food sourcing inquiries · Reply within 24 hours</p>
              </div>
              
              {isSuccess ? (
                <div className="bg-[#1a2820] border border-[#cea945]/30 rounded-xl p-8 text-center text-white my-8">
                  <div className="w-16 h-16 bg-[#cea945]/10 border border-[#cea945]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#cea945]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-bold font-serif text-2xl mb-2">Request Received</h3>
                  <p className="text-[15px] text-[#cfc8ba] mb-6 font-light leading-relaxed">Our trade manager is reviewing your specifications and will reply to your email shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-[12px] font-bold uppercase tracking-widest text-[#cea945] hover:text-white transition-colors">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-[13px] p-4 rounded-lg flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                      <span className="leading-relaxed">{errorMessage}</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Full name <span className="text-[#cea945]">*</span></label>
                      <input type="text" name="name" required placeholder="John Doe" className={inputClasses} disabled={isSubmitting} />
                    </div>
                    <div>
                      <label className={labelClasses}>Company</label>
                      <input type="text" name="company" placeholder="Company Ltd." className={inputClasses} disabled={isSubmitting} />
                    </div>
                    <div>
                      <label className={labelClasses}>Work email <span className="text-[#cea945]">*</span></label>
                      <input type="email" name="email" required placeholder="you@company.com" className={inputClasses} disabled={isSubmitting} />
                    </div>
                    <div>
                      <label className={labelClasses}>Phone</label>
                      <input type="tel" name="phone" placeholder="+971 50 000 0000" className={inputClasses} disabled={isSubmitting} />
                    </div>
                    <div>
                      <label className={labelClasses}>Product <span className="text-[#cea945]">*</span></label>
                      <div className="relative">
                        <select required name="product" defaultValue="" className={`${inputClasses} appearance-none cursor-pointer`} disabled={isSubmitting}>
                          <option value="" disabled hidden>Select a product</option>
                          <option value="Rice">Rice</option>
                          <option value="Wheat Flour">Wheat Flour</option>
                          <option value="Spices & Seasonings">Spices & Seasonings</option>
                          <option value="Cooking Oil & Oil Seeds">Cooking Oil & Oil Seeds</option>
                          <option value="Pulses & Beans">Pulses & Beans</option>
                          <option value="Frozen Chicken">Frozen Chicken</option>
                          <option value="Dry Nuts & Fruits">Dry Nuts & Fruits</option>
                          <option value="Canned Food">Canned Food</option>
                          <option value="Fresh Produce">Fresh Produce</option>
                          <option value="Other / Multiple">Other / Multiple</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#a89f8b]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className={labelClasses}>Est. quantity</label>
                      <input type="text" name="quantity" placeholder="e.g. 25 MT / 1 FCL" className={inputClasses} disabled={isSubmitting} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Destination (port / country)</label>
                    <input type="text" name="destination" placeholder="e.g. Jebel Ali, UAE" className={inputClasses} disabled={isSubmitting} />
                  </div>

                  <div>
                    <label className={labelClasses}>Trade Details</label>
                    <textarea rows={4} name="details" placeholder="Please specify your packing format, target price, and desired timeline..." className={`${inputClasses} resize-none`} disabled={isSubmitting}></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#cea945] text-[#0b0b0a] font-bold text-[13px] uppercase tracking-[0.2em] px-8 py-4 rounded-lg hover:bg-white hover:shadow-[0_4px_20px_rgba(206,169,69,0.25)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Sending Request...' : 'Request Quotation'}
                      {!isSubmitting && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>}
                    </button>
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