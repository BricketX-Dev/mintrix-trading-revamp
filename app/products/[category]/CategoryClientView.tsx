"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { CategoryContent, CategorySpec } from "@/data/categoryContent";
import { catalogData } from "@/data/products";

interface CategoryClientViewProps {
  content: CategoryContent;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

export default function CategoryClientView({ content }: CategoryClientViewProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
    const timeout = setTimeout(() => window.scrollTo(0, 0), 100);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const headlineWords = content.hero.headline.split("—");
  const mainHeadline = headlineWords[0].trim();
  const subHeadline = headlineWords[1]?.trim() || "";

  // Get the available products for this category to validate links later
  const categoryData = catalogData.find(c => slugify(c.title) === content.slug);
  const categoryItems = categoryData?.items || [];

  // Fallback to split the main headline if catalog title isn't found
  const dynamicCategoryTitle = categoryData?.title || mainHeadline.replace(/ supplier.*/i, "");

  return (
    <div className="bg-[#0b0b0a] text-white pt-24 md:pt-32 pb-10">
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-28 md:pb-28 flex items-center border-b border-white/5 select-none">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#cea945]/[0.04] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#21332a]/10 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(11,11,10,0)_0%,_rgba(11,11,10,0.8)_100%)]" />
        </div>

        <div className="max-w-[1240px] mx-auto relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[900px]">
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#a89f8b] mb-10">
              {content.hero.breadcrumb.split('/').map((crumb, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className={idx === arr.length - 1 ? "text-white" : "hover:text-[#cea945] transition-colors cursor-pointer"}>
                    {crumb.trim()}
                  </span>
                  {idx < arr.length - 1 && <span className="text-[#cea945]">&gt;</span>}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-white tracking-[-0.02em] leading-[1.08] mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              {mainHeadline}
              {subHeadline && (
                <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-light opacity-95 text-[#a89f8b]">
                  - <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#c29633] bg-clip-text text-transparent italic">{subHeadline}</span>
                </span>
              )}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-[#e7e1d4]/90 text-sm sm:text-base md:text-[18px] leading-[1.75] max-w-[800px] font-light tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {content.hero.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {categoryItems.length > 0 && (
        <section className="px-[5%] py-20 bg-[#0b0b0a] relative z-10 border-b border-white/5">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#cea945]/[0.03] blur-[150px] pointer-events-none rounded-full" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="relative">
              <motion.div variants={fadeInUp} className="flex items-center gap-3.5 mb-10">
                <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                  Available Sourcing Range
                </span>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {categoryItems.map((item, i) => {
                  const productSlug = slugify(item.name);
                  const productUrl = `/products/${content.slug}/${productSlug}`;

                  return (
                    <motion.div key={i} variants={fadeInUp}>
                      <Link
                        href={productUrl}
                        scroll={true}
                        className="group relative flex flex-col aspect-[4/5] rounded-2xl overflow-hidden bg-[#141a17] border border-white/[0.07] transition-all duration-500 hover:border-[#cea945]/60 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85)] hover:-translate-y-1 block"
                      >
                        <div className="absolute inset-0 w-full h-full bg-[#0e1210]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={85}
                            className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                          />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-[#0b0b0a]/50 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0a]/40 via-transparent to-transparent opacity-60" />

                        {(item.subcategory || item.latin) && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#cfc8ba] bg-[#0b0b0a]/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                              {item.subcategory || item.latin}
                            </span>
                          </div>
                        )}

                        <div className="relative z-10 p-5 md:p-6 mt-auto flex flex-col justify-end text-left">
                          <h4 className="text-[17px] md:text-[20px] font-bold text-white font-serif leading-snug tracking-tight group-hover:text-[#cea945] transition-colors duration-300 drop-shadow-md">
                            {item.name}
                          </h4>

                          <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/[0.08] text-[#a89f8b]">
                            <span className="text-[11px] font-medium tracking-wider uppercase text-[#a89f8b] group-hover:text-[#cfc8ba] transition-colors">
                              Export Grade
                            </span>
                            <span className="text-xs font-semibold text-[#cea945] flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                              Specs
                              <span className="text-sm font-bold leading-none">&rarr;</span>
                            </span>
                          </div>
                        </div>

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="px-[5%] py-24 md:py-32 bg-[#0b0b0a] relative z-10 border-b border-white/5">
        <div className="max-w-[1240px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div variants={fadeInUp} className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="flex items-center gap-3.5 mb-5">
                <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                  Category Advantages
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-serif font-bold text-white leading-[1.12] mb-8 tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Why buy{" "}
                <span className="text-[#cea945]">
                  {categoryData?.title || "our products"}
                </span>{" "}
                <br className="hidden lg:block" />
                <span className="italic text-white">from</span>{" "}
                <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                  Mintrix.
                </span>
              </h2>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0e1511] border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)] group">
                <Image
                  src="/images/category/why_mintrix.png"
                  alt="Mintrix Sourcing Advantage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#cea945]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid gap-4 sm:gap-4.5">
              {content.benefits.map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative flex items-start gap-5 p-6 sm:p-7 rounded-2xl bg-[#0e1511]/85 backdrop-blur-md border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.75)] hover:border-[#cea945]/50 hover:bg-[#121c17]/90 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-[2.5px] bg-gradient-to-b from-[#cea945] via-[#eed484] to-[#cea945] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top" />
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[#cea945]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#cea945] group-hover:border-[#cea945] transition-all duration-300">
                    <span className="text-[#cea945] group-hover:text-[#0b0b0a] font-serif font-bold text-sm">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#cfc8ba] text-[15px] sm:text-[16px] leading-[1.7] font-light">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32 bg-[#0b0b0a] relative overflow-hidden select-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#21332a]/10 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-[1240px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="text-center max-w-[840px] mx-auto mb-16 md:mb-20">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
              <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                Commodity Directory
              </span>
              <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold font-serif text-white tracking-tight leading-[1.15]">
              {dynamicCategoryTitle} <br />
              <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                Product Types.
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content.productTypes.map((prod, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="group relative flex flex-col p-8 sm:p-10 rounded-2xl bg-[#141a17] border border-white/[0.07] transition-all duration-500 hover:border-[#cea945]/60 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85)] hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-xl md:text-2xl font-bold text-white font-serif leading-snug tracking-tight mb-4 group-hover:text-[#cea945] transition-colors duration-300">
                  {prod.title}
                </h3>
                
                <p className="text-[#cfc8ba] leading-[1.75] font-light text-[15px] mb-8 flex-grow">
                  {prod.description}
                </p>

                <div className="bg-[#0b0b0a]/50 p-5 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors mt-auto">
                  <p className="text-[#a89f8b] text-[11px] font-bold uppercase tracking-wider mb-2">
                    Common Question
                  </p>
                  <p className="font-serif text-[15px] font-bold text-white mb-2 leading-snug">
                    {prod.q}
                  </p>
                  <p className="text-[#cfc8ba] text-[13.5px] font-light leading-relaxed">
                    {prod.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-24 bg-[#0e1210] relative overflow-hidden select-none border-y border-white/5">
        <div className="max-w-[1240px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-3.5 mb-4">
                <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em]">
                  Logistics & Formats
                </span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Packing & Spec Summary
              </motion.h2>
            </div>
          </motion.div>

          {(() => {
            const groupedSpecs = content.packingTable.reduce((acc, row) => {
              const groupName = row.group || 'Default';
              if (!acc[groupName]) acc[groupName] = [];
              acc[groupName].push(row);
              return acc;
            }, {} as Record<string, CategorySpec[]>);

            return Object.entries(groupedSpecs).map(([groupName, items], gIdx) => (
              <motion.div 
                key={gIdx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInUp} 
                className="mb-14 last:mb-0"
              >
                {groupName !== 'Default' && (
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#e7e1d4] mb-5 tracking-tight flex items-center gap-3 pl-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cea945]"></span>
                    {groupName}
                  </h3>
                )}
                
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#141a17]/50 backdrop-blur-sm shadow-2xl">
                  <table className="w-full text-left whitespace-nowrap min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#16221c]">
                        <th className="py-6 px-8 text-[#cea945] font-bold uppercase tracking-[0.2em] text-[11px]">Product</th>
                        <th className="py-6 px-8 text-[#cea945] font-bold uppercase tracking-[0.2em] text-[11px]">Typical Packing</th>
                        <th className="py-6 px-8 text-[#cea945] font-bold uppercase tracking-[0.2em] text-[11px]">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {items.map((row, i) => {
                        const productSlug = slugify(row.product);
                        const productUrl = `/products/${content.slug}/${productSlug}`;
                        
                        const isProductClickable = categoryItems.some(item => slugify(item.name) === productSlug);

                        return (
                          <tr key={i} className="hover:bg-[#16221c]/80 transition-colors group">
                            <td className="py-5 px-8 text-[15px] font-bold font-serif">
                              {isProductClickable ? (
                                <Link 
                                  href={productUrl} 
                                  className="text-white hover:text-[#cea945] transition-colors inline-block w-full"
                                >
                                  {row.product}
                                </Link>
                              ) : (
                                <span className="text-white inline-block w-full cursor-default">
                                  {row.product}
                                </span>
                              )}
                            </td>
                            <td className="py-5 px-8 text-[14px] text-[#cfc8ba] font-light">{row.packing}</td>
                            <td className="py-5 px-8 text-[14px] text-[#a89f8b] italic font-light">{row.notes}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ));
          })()}
        </div>
      </section>

      <section className="px-[5%] py-24 sm:py-32 bg-[#0b0b0a] relative overflow-hidden select-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#21332a]/20 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center max-w-[840px] mx-auto mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
              <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em]">
                Category Questions
              </span>
              <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#cea945]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold font-serif text-white tracking-tight leading-[1.15]">
              Common questions about{" "}
              <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                {mainHeadline.toLowerCase()}.
              </span>
            </h2>
          </div>

          <div className="max-w-[880px] mx-auto space-y-4 mb-24 sm:mb-32">
            {content.faqs.map((faq, i) => {
              const isOpen = openFAQ === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#111714]/90 border-[#cea945]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                      : "bg-[#0e1511]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#111714]/60"
                  }`}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left p-6 sm:px-8 cursor-pointer group gap-4"
                  >
                    <span
                      className={`font-serif text-[16px] sm:text-[18px] font-bold transition-colors duration-300 leading-snug ${
                        isOpen ? "text-[#cea945]" : "text-white group-hover:text-[#eed484]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center text-sm transition-all duration-300 ${
                        isOpen
                          ? "bg-[#cea945] border-[#cea945] text-[#0b0b0a]"
                          : "bg-white/[0.03] border-white/10 text-[#cea945] group-hover:border-[#cea945]/50"
                      }`}
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-0 border-t border-white/[0.05]">
                      <p className="pt-4 text-[14px] sm:text-[15px] text-[#cfc8ba] leading-[1.8] font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="group relative rounded-3xl border border-white/[0.1] bg-[#0c130f] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)]"
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/about/cta-bg.webp"
                alt="Global Food Commodity Sourcing Desk"
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                quality={90}
                className="object-cover object-right opacity-40 transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c130f] via-[#0c130f]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0c130f]/60 via-transparent to-[#0c130f]/80" />
            </div>

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945]/70 to-transparent" />

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_auto] gap-10 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#cea945]" />
                  <span className="text-[#cea945] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.28em] drop-shadow-[0_0_10px_rgba(206,169,69,0.35)]">
                    Direct Trade Desk
                  </span>
                </div>

                <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white leading-[1.12] mb-5 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  {content.cta.header.replace("?", "")}
                  <span className="bg-gradient-to-r from-[#eed484] via-[#cea945] to-[#ba8d2f] bg-clip-text text-transparent italic">
                    ?
                  </span>
                </h2>

                <p className="text-[#cfc8ba] text-sm sm:text-base md:text-[16.5px] max-w-xl leading-[1.8] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {content.cta.text}
                </p>
              </div>

              <div className="flex flex-col gap-4 min-w-[240px] sm:min-w-[280px]">
                <Link
                  href={`/contact?category=${content.slug}`}
                  className="inline-flex items-center justify-center gap-3 bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.22em] px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_6px_25px_rgba(206,169,69,0.35)] shadow-[0_4px_16px_rgba(206,169,69,0.2)] cursor-pointer"
                >
                  <span>{content.cta.buttonText}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <div className="pt-2 flex items-center justify-center gap-2 text-[10.5px] uppercase tracking-wider text-[#a89f8b] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cea945]" />
                  <span>24h Commercial Response Guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}