"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const privacyFaqs = [
  {
    question: "What information does Mintrix Trading collect?",
    answer:
      "Mintrix Trading may collect contact, business and enquiry information that visitors voluntarily submit, together with certain technical or analytics information generated when the website is used.",
  },
  {
    question: "How does Mintrix Trading use personal information?",
    answer:
      "Information may be used to respond to business enquiries, prepare quotations, communicate with customers and suppliers, improve the website, maintain security and meet applicable business or legal requirements.",
  },
  {
    question: "Does Mintrix Trading sell personal information?",
    answer:
      "Mintrix Trading does not intend to sell personal information as a commercial product. Information may be shared where reasonably necessary for business operations, service delivery, security or legal obligations.",
  },
  {
    question: "How can I contact Mintrix Trading about privacy?",
    answer:
      "Privacy questions can be sent to info@mintrixtrading.com or Mintrix Trading's Dubai office using the contact details published on the website.",
  },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[#0b0b0a] pt-[120px]">
      {/* ─── Page Header (Dark Theme) ─── */}
      <section className="relative px-[5%] py-16 md:py-24 max-w-[1400px] mx-auto text-center z-10 select-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
            <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
              Legal & Compliance
            </span>
            <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.12] tracking-tight mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#cfc8ba] text-[15px] sm:text-base md:text-[17px] leading-[1.7] font-light max-w-xl mx-auto"
          >
            How Mintrix Trading collects, uses, and protects your information.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── Main Content Section (Light Theme) ─── */}
      <section className="relative bg-[#f7f4ed] rounded-t-[40px] md:rounded-t-[60px] border-t border-[#e2dcce] px-[5%] py-20 md:py-32 overflow-hidden">
        {/* Ambient Glow in Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#cea945]/[0.08] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[840px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12 md:space-y-16 text-[#595346] font-light leading-[1.8] text-[14.5px] md:text-[16px]"
          >
            {/* 1. Introduction */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                1. Introduction
              </h2>
              <p className="mb-4">
                Mintrix Trading ("Mintrix Trading," "we," "us," or "our") respects the privacy of visitors, business customers, suppliers, partners and other users of www.mintrixtrading.com. This Privacy Policy explains what information may be collected when you use our website or contact us, how we may use that information, and the steps we take to protect it.
              </p>
              <p>
                Mintrix Trading is a UAE-registered food trading and procurement company based in Dubai. Our website provides information about our food commodities, global sourcing capabilities, wholesale supply services and business enquiry process.
              </p>
            </motion.div>

            {/* 2. Information We May Collect */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                2. Information We May Collect
              </h2>
              <p className="mb-4">
                We may collect information that you voluntarily provide when you submit an enquiry, request a quotation, contact our team or communicate with us about products and sourcing requirements.
              </p>
              <ul className="list-none space-y-3 pl-2 text-[#595346]">
                {[
                  "Name and job title or business role.",
                  "Company or organisation name.",
                  "Business email address and telephone number.",
                  "Destination country, port or delivery information provided for a quotation.",
                  "Product requirements, specifications, estimated quantities and other trade enquiry details.",
                  "Information included in messages, forms or other communications you send to us.",
                  "Technical information such as browser type, device information, IP address and website interaction data where collected through website technologies or analytics tools."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 3. How We Use Information */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                3. How We Use Information
              </h2>
              <p className="mb-4">We use information for legitimate business and website purposes, including:</p>
              <ul className="list-none space-y-3 pl-2">
                {[
                  "Responding to wholesale food sourcing and quotation enquiries.",
                  "Understanding product, quantity, specification and destination requirements.",
                  "Communicating with prospective or existing business customers and suppliers.",
                  "Preparing and managing commercial quotations and business communications.",
                  "Improving website content, usability, security and performance.",
                  "Managing website analytics and understanding how visitors use the site.",
                  "Maintaining records required for business, compliance, security or legal purposes.",
                  "Detecting, preventing or addressing fraud, misuse, security incidents or unlawful activity."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 4. Business Enquiries and Quotations */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                4. Business Enquiries and Quotations
              </h2>
              <p className="mb-4">
                When you request a quotation from Mintrix Trading, the information you provide may be used to assess your sourcing requirement and prepare a commercial response. A quotation may require details such as product, grade or specification, quantity, packaging, destination and delivery requirements.
              </p>
              <p>
                Submitting an enquiry does not by itself create a binding purchase contract. Commercial terms, availability, specifications, pricing, delivery arrangements and other conditions are subject to confirmation by Mintrix Trading.
              </p>
            </motion.div>

            {/* 5. Cookies and Analytics */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                5. Cookies and Analytics
              </h2>
              <p className="mb-4">
                Our website may use cookies, analytics tools and similar technologies to support website functionality, understand visitor behaviour, improve performance and maintain website security. The exact cookies and third-party services used on the live website should be reviewed and listed by the website administrator before publication of this policy.
              </p>
              <p>
                Where required, cookie consent or other applicable notices should be provided through the website's cookie-management mechanism.
              </p>
            </motion.div>

            {/* 6. Sharing of Information */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                6. Sharing of Information
              </h2>
              <p className="mb-4">
                Mintrix Trading does not intend to sell personal information as a commercial product. Information may be shared with service providers, professional advisers, technology providers, logistics or business partners, regulators, government authorities or other parties where reasonably necessary to provide requested services, operate the website, comply with legal obligations, protect rights and security, or complete a business transaction.
              </p>
              <p>
                Only information reasonably necessary for the relevant purpose should be shared, subject to applicable law and contractual or confidentiality requirements.
              </p>
            </motion.div>

            {/* Sections 7 to 12 */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">7. Data Security</h2>
              <p>We take reasonable technical, organisational and administrative measures designed to protect information against unauthorised access, loss, misuse, alteration or disclosure. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">8. Data Retention</h2>
              <p>We retain information for as long as reasonably necessary for the purpose for which it was collected, for legitimate business requirements, or where retention is required or permitted by applicable law. Retention periods may vary depending on the nature of the information and the relevant business or legal requirement.</p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">9. Your Privacy Rights</h2>
              <p>Depending on applicable UAE law and the circumstances of the processing, individuals may have rights relating to their personal information, including rights concerning access, correction, processing restrictions, consent and other data-protection matters. Requests should be assessed against the applicable legal requirements and Mintrix Trading's actual processing activities.</p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">10. Third-Party Websites</h2>
              <p>Our website may contain links to third-party websites or services. Mintrix Trading is not responsible for the privacy practices, content or security of third-party websites. We recommend reviewing the privacy notice of any external website before submitting personal information.</p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">11. Children's Privacy</h2>
              <p>The Mintrix Trading website is intended primarily for business and commercial audiences. We do not knowingly seek to collect personal information from children through the website.</p>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">12. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our website, business practices, technology or applicable legal requirements. The updated version will be published on this page with a revised effective date.</p>
            </motion.div>

            {/* ─── 13. Redesigned Premium Contact Card ─── */}
            <motion.div 
              variants={fadeUpVariants} 
              className="group relative overflow-hidden mt-6 p-8 md:p-12 bg-[#14201a] border border-[#21332a] rounded-3xl shadow-[0_20px_50px_rgba(20,32,26,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(20,32,26,0.3)]"
            >
              {/* Animated Top Sweep */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-20" />

              {/* Ambient Hover Glow */}
              <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#cea945]/0 group-hover:bg-[#cea945]/[0.08] blur-[120px] rounded-full pointer-events-none transition-all duration-700 ease-in-out" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#cea945]/15 border border-[#cea945]/30 px-3 py-1 rounded-full text-[10.5px] font-bold text-[#cea945] uppercase tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] animate-pulse" />
                  Direct Desk
                </div>

                <h2 className="text-white text-2xl md:text-[32px] font-serif font-bold mb-4 tracking-tight leading-snug">
                  13. Contact Mintrix Trading
                </h2>
                
                <p className="text-[#cfc8ba] text-[15px] leading-[1.7] font-light mb-10 max-w-xl">
                  For privacy-related questions, data compliance requests, or any security inquiries, please contact our dedicated team directly.
                </p>
                
                <ul className="space-y-4">
                  {/* Sub-card: Email */}
                  <li className="flex flex-col sm:flex-row sm:items-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors duration-300 hover:bg-white/[0.06] hover:border-[#cea945]/30">
                    <span className="text-[#cea945] font-bold text-[11px] uppercase tracking-[0.18em] w-24 shrink-0 mb-1 sm:mb-0">
                      Email
                    </span>
                    <a href="mailto:info@mintrixtrading.com" className="text-[#e7e1d4] font-medium hover:text-[#cea945] transition-colors">
                      info@mintrixtrading.com
                    </a>
                  </li>

                  {/* Sub-card: Phone */}
                  <li className="flex flex-col sm:flex-row sm:items-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors duration-300 hover:bg-white/[0.06] hover:border-[#cea945]/30">
                    <span className="text-[#cea945] font-bold text-[11px] uppercase tracking-[0.18em] w-24 shrink-0 mb-1 sm:mb-0">
                      Phone
                    </span>
                    <a href="tel:+971541662352" className="text-[#e7e1d4] font-medium hover:text-[#cea945] transition-colors">
                      +971 54 166 2352
                    </a>
                  </li>

                  {/* Sub-card: Office */}
                  <li className="flex flex-col sm:flex-row sm:items-start p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors duration-300 hover:bg-white/[0.06] hover:border-[#cea945]/30">
                    <span className="text-[#cea945] font-bold text-[11px] uppercase tracking-[0.18em] w-24 shrink-0 mb-2 sm:mb-0 sm:mt-0.5">
                      Office
                    </span>
                    <span className="text-[#e7e1d4] font-medium leading-relaxed">
                      Office No. 101-182, Muhammad Abdullah Property,<br className="hidden sm:block" /> Deira – Hor Al Anz, Dubai, UAE
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* ─── FAQ Accordion Section ─── */}
            <motion.div variants={fadeUpVariants} className="pt-10 mt-10 md:pt-12 md:mt-12 border-t border-[#e2dcce]">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
                  <span className="text-[#967624] text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em]">
                    Data & Security
                  </span>
                  <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14201a] tracking-tight leading-[1.12]">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="space-y-4">
                {privacyFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  const formattedIndex = String(idx + 1).padStart(2, "0");

                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden relative select-none ${
                        isOpen
                          ? "bg-[#fdfcf9] border-[#967624]/40 shadow-[0_15px_35px_rgba(20,32,26,0.08)]"
                          : "bg-[#fdfcf9]/85 border-[#ded6c7] hover:border-[#967624]/30 hover:bg-[#fdfcf9]"
                      }`}
                    >
                      {/* Top gold accent line sweep when open */}
                      <div 
                        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`} 
                      />

                      <button
                        type="button"
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between text-left p-6 sm:p-7 gap-4 cursor-pointer group"
                      >
                        <div className="flex items-center gap-4 sm:gap-6 pr-2">
                          <span className={`font-serif text-sm sm:text-base font-bold transition-colors duration-300 ${
                            isOpen ? "text-[#967624]" : "text-[#a39885] group-hover:text-[#967624]"
                          }`}>
                            {formattedIndex}
                          </span>
                          <span className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 leading-snug ${
                            isOpen ? "text-[#967624]" : "text-[#14201a] group-hover:text-[#967624]"
                          }`}>
                            {faq.question}
                          </span>
                        </div>

                        {/* Brass Toggle Button */}
                        <div
                          className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#cea945] border-[#cea945] text-[#0b0b0a]"
                              : "bg-[#f2ede2] border-[#ded6c7] text-[#967624] group-hover:border-[#cea945] group-hover:bg-[#fdfcf9]"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                          </svg>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-[#eee8dc] ml-10 sm:ml-12">
                              <p className="pt-4 text-[14px] sm:text-[15.5px] text-[#595346] leading-[1.8] font-light">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}