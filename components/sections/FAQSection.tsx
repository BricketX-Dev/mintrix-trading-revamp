"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who are the best food suppliers in Dubai?",
    answer:
      "The best food suppliers in Dubai are foodstuff trading companies that source from verified global suppliers, check quality at origin and handle documentation and logistics. Mintrix Trading is a UAE-registered example, supplying eight bulk categories worldwide with a quote inside 24 hours.",
  },
  {
    question: "Which is the best foodstuff trading company in Dubai?",
    answer:
      "A strong foodstuff trading company in Dubai combines global sourcing, origin quality checks, full export documentation and reliable logistics. Mintrix Trading offers all four — sourcing from 50+ countries and delivering to 14, from its Deira office in Dubai.",
  },
  {
    question: "How do I buy bulk food for the UAE market?",
    answer:
      "To buy bulk food for the UAE, send a supplier your product, quantity, specification and destination. Mintrix Trading confirms within the hour, sources the best origin, and returns a quote within 24 hours covering specification, packing, certifications and delivery timeline.",
  },
  {
    question: "What food products can be imported in bulk to the UAE?",
    answer:
      "Bulk food products imported to the UAE span grains and cereals, spices, pulses and beans, edible oils and oil seeds, frozen poultry, dry nuts and dry fruits, canned food, and fresh produce — all sourced globally and delivered in bulk.",
  },
  {
    question: "Is your frozen chicken halal-certified?",
    answer:
      "Yes. Mintrix Trading's frozen chicken is sourced from halal-certified export facilities and shipped in temperature-controlled reefer containers to maintain the cold chain.",
  },
  {
    question: "How fast can I get a quotation?",
    answer:
      "Inquiries are confirmed within the hour, and a full quotation — specification, packing, certifications and delivery timeline — follows within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#fffdfa] border-b border-[#e7e1d4]">
      <div className="max-w-[880px] mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-[#cea945] text-xs font-bold uppercase tracking-[0.22em] block mb-2">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-[#0b0b0a] tracking-tight leading-tight">
            Answers for bulk food buyers in the UAE
          </h2>
          <div className="w-14 h-[2px] bg-[#cea945] mx-auto mt-4" />
        </div>

        <div className="divide-y divide-[#e7e1d4] border-y border-[#e7e1d4]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#0b0b0a] group-hover:text-[#a97c2c] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#e7e1d4] flex items-center justify-center text-lg font-light transition-all duration-300 ${
                      isOpen
                        ? "bg-[#cea945] text-[#0b0b0a] border-[#cea945] rotate-45"
                        : "text-[#726a5c] group-hover:border-[#cea945] group-hover:text-[#cea945]"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm sm:text-base text-[#726a5c] leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}