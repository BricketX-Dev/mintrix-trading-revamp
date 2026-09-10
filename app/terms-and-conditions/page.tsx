"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const termsFaqs = [
  {
    question: "Do Mintrix Trading website product pages create a binding order?",
    answer:
      "No. Website product information and enquiry forms are primarily for information and business enquiries. A binding commercial transaction requires confirmation through the applicable quotation, purchase order, contract or other agreed documentation.",
  },
  {
    question: "Are product prices on the Mintrix Trading website guaranteed?",
    answer:
      "Not unless a price is expressly confirmed in an applicable written quotation or commercial agreement. Commodity prices and trade costs can vary according to product, origin, quantity, freight and other transaction factors.",
  },
  {
    question: "Does Mintrix Trading guarantee the same certification for every product?",
    answer:
      "No. Certifications and export documents depend on the product, origin, destination and applicable requirements. Shipment-specific documentation should be confirmed before dispatch.",
  },
  {
    question: "Where is Mintrix Trading based?",
    answer:
      "Mintrix Trading is based in Deira – Hor Al Anz, Dubai, UAE, and operates as a UAE-registered food trading and procurement company.",
  },
  {
    question: "How can I contact Mintrix Trading?",
    answer:
      "Business enquiries can be sent to info@mintrixtrading.com or by phone at +971 54 166 2352. The published office location is Office No. 101-182, Muhammad Abdullah Property, Deira – Hor Al Anz, Dubai, UAE.",
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

export default function TermsAndConditions() {
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
            Terms & Conditions
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#cfc8ba] text-[15px] sm:text-base md:text-[17px] leading-[1.7] font-light max-w-xl mx-auto"
          >
            Rules and guidelines governing your access to and use of the Mintrix Trading platform.
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
                These Terms and Conditions govern your access to and use of www.mintrixtrading.com ("Website"). By accessing or using the Website, you agree to these Terms and Conditions. If you do not agree with them, please discontinue use of the Website.
              </p>
              <p>
                Mintrix Trading operates as a UAE-registered food trading and procurement company based in Dubai and uses the Website to present its product categories, sourcing capabilities and business contact channels.
              </p>
            </motion.div>

            {/* 2. Website Purpose */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                2. Website Purpose
              </h2>
              <p>
                The Website is primarily an informational and business enquiry platform. Product pages and commodity information are provided to help buyers understand the categories and specifications that Mintrix Trading may be able to source. Website content does not automatically constitute a binding offer to sell.
              </p>
            </motion.div>

            {/* 3. Product Information */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                3. Product Information
              </h2>
              <p className="mb-4">
                We aim to keep product descriptions, specifications and other information useful and accurate. However, product availability, origin, grade, packaging, certifications, specifications, quantities, lead times and other commercial details may vary by shipment and destination.
              </p>
              <p>
                Final product specifications and commercial terms should be confirmed in writing before any purchase, shipment or contractual commitment.
              </p>
            </motion.div>

            {/* 4. Wholesale Enquiries and Quotations */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                4. Wholesale Enquiries and Quotations
              </h2>
              <p className="mb-4">
                Users may contact Mintrix Trading with product, quantity, specification and destination requirements. Mintrix Trading may review the enquiry and issue a quotation or request additional information.
              </p>
              <p>
                A website enquiry or quotation request does not guarantee product availability, price, allocation, delivery date or acceptance of an order. Any binding commercial relationship is subject to the applicable written quotation, purchase order, contract or other agreed commercial documentation.
              </p>
            </motion.div>

            {/* 5. Pricing and Commercial Terms */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                5. Pricing and Commercial Terms
              </h2>
              <p className="mb-4">
                Prices and commercial terms may depend on commodity origin, grade, quantity, packaging, market conditions, freight, destination, customs requirements, insurance, taxes, duties and other factors. Where a price or quotation is provided, the applicable quotation will state its validity and relevant conditions where appropriate.
              </p>
              <p>
                Unless expressly stated otherwise in a written commercial agreement, information displayed on the Website should not be treated as a fixed price commitment.
              </p>
            </motion.div>

            {/* 6. Quality, Compliance and Documentation */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                6. Quality, Compliance and Documentation
              </h2>
              <p className="mb-4">
                Mintrix Trading's website describes quality verification, export documentation and logistics support as part of its sourcing approach. The homepage identifies documentation such as halal certification for eligible products, Certificate of Origin, phytosanitary documentation, fumigation documentation, packing lists and Bills of Lading as relevant to shipments where applicable.
              </p>
              <p>
                The specific certifications, inspection documents and regulatory requirements applicable to a shipment depend on the product, origin, destination and applicable regulations. No certification should be understood as applying to every product unless confirmed for that shipment.
              </p>
            </motion.div>

            {/* 7. Shipping and Delivery */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                7. Shipping and Delivery
              </h2>
              <p>
                Shipping arrangements, container type, delivery timeline, destination port, freight terms and tracking availability depend on the specific transaction and agreed commercial terms. Website references to dry or reefer containers and live tracking describe available trade processes and should not be interpreted as a guarantee that every shipment will use a particular method.
              </p>
            </motion.div>

            {/* 8. User Responsibilities */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                8. User Responsibilities
              </h2>
              <p className="mb-4">When using the Website or submitting a business enquiry, you agree to:</p>
              <ul className="list-none space-y-3 pl-2 text-[#595346]">
                {[
                  "Provide information that is accurate and not intentionally misleading.",
                  "Use the Website only for lawful purposes.",
                  "Not attempt to disrupt, damage or gain unauthorised access to the Website or its systems.",
                  "Not introduce malicious code, harmful files or automated activity intended to interfere with the Website.",
                  "Respect Mintrix Trading's intellectual property and confidential business information."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 9. Intellectual Property */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                9. Intellectual Property
              </h2>
              <p className="mb-4">
                Unless otherwise stated, the Website's text, branding, logos, graphics, layouts, photographs, documents and other original materials are owned by or licensed to Mintrix Trading and are protected by applicable intellectual property laws.
              </p>
              <p>
                You may view Website content for legitimate business and informational purposes. You may not reproduce, republish, distribute, modify, sell or commercially exploit Website content without prior written permission, except where permitted by applicable law.
              </p>
            </motion.div>

            {/* 10. Third-Party Links and Services */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                10. Third-Party Links and Services
              </h2>
              <p>
                The Website may contain links or references to third-party websites, tools or services. These are provided for convenience or business purposes. Mintrix Trading does not control third-party websites and is not responsible for their content, availability, security, privacy practices or terms.
              </p>
            </motion.div>

            {/* 11. Website Availability and Accuracy */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                11. Website Availability and Accuracy
              </h2>
              <p>
                We aim to maintain an accessible and reliable Website, but we do not guarantee that the Website will always be available, uninterrupted, error-free or free of harmful components. Website information may be changed, updated or removed without prior notice.
              </p>
            </motion.div>

            {/* 12. Disclaimer */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                12. Disclaimer
              </h2>
              <p className="mb-4">
                To the extent permitted by applicable law, Website information is provided for general informational and business enquiry purposes. Mintrix Trading does not make a blanket guarantee that every product, specification, price, origin, certification, availability statement or delivery estimate displayed on the Website will apply to a particular transaction.
              </p>
              <p>
                Specific commercial rights and obligations are determined by the applicable written agreement, quotation, purchase order or other contractual documentation.
              </p>
            </motion.div>

            {/* 13. Limitation of Liability */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                13. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Mintrix Trading will not be responsible for indirect, incidental, special or consequential losses arising solely from use of the Website or reliance on general Website information. Nothing in these Terms is intended to exclude or limit liability that cannot lawfully be excluded or limited under applicable law.
              </p>
            </motion.div>

            {/* 14. Privacy */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                14. Privacy
              </h2>
              <p>
                Your use of the Website may involve the processing of personal information. Please review the Mintrix Trading Privacy Policy for information about data collection, use, security and related privacy practices.
              </p>
            </motion.div>

            {/* 15. Changes to These Terms */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                15. Changes to These Terms
              </h2>
              <p>
                Mintrix Trading may update these Terms and Conditions from time to time to reflect changes to the Website, business operations, services or applicable requirements. Updated terms will be published on this page with a revised effective date. Continued use of the Website after an update may constitute acceptance to the extent permitted by applicable law.
              </p>
            </motion.div>

            {/* 16. Governing Law and Jurisdiction */}
            <motion.div variants={fadeUpVariants}>
              <h2 className="text-[#14201a] text-2xl md:text-[28px] font-serif font-bold mb-4 tracking-tight leading-snug">
                16. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms and Conditions are intended to operate subject to the applicable laws and regulations of the United Arab Emirates. The governing law and competent jurisdiction for any particular commercial transaction should be confirmed in the applicable written contract or quotation. This clause should be reviewed and finalised by Mintrix Trading's UAE legal adviser before publication.
              </p>
            </motion.div>

            {/* ─── 17. Premium Contact Card ─── */}
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
                  17. Contact Mintrix Trading
                </h2>
                
                <p className="text-[#cfc8ba] text-[15px] leading-[1.7] font-light mb-10 max-w-xl">
                  For questions about these Terms and Conditions, or any other legal inquiries, please contact our dedicated team directly.
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

            {/* ─── FAQ Accordion Section (Reduced Top Spacing) ─── */}
            <motion.div variants={fadeUpVariants} className="pt-10 mt-10 md:pt-12 md:mt-12 border-t border-[#e2dcce]">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
                  <span className="text-[#967624] text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em]">
                    Terms & Obligations
                  </span>
                  <span className="w-8 sm:w-10 h-[2px] bg-[#cea945]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14201a] tracking-tight leading-[1.12]">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="space-y-4">
                {termsFaqs.map((faq, idx) => {
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