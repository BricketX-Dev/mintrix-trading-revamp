"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ProductItem } from "@/data/products";

interface ProductClientViewProps {
  product: ProductItem;
  categoryTitle: string;
  categorySlug: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProductClientView({ product, categoryTitle, categorySlug }: ProductClientViewProps) {
  return (
    <div className="bg-[#0b0b0a] text-white pt-32 pb-24 min-h-screen relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cea945]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#21332a]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1300px] mx-auto px-[5%] relative z-10">
        
        {/* Breadcrumb Navigation */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#a89f8b] mb-12 md:mb-16">
          <Link href="/products" className="hover:text-[#cea945] transition-colors">Products</Link>
          <span className="text-[#cea945]">&gt;</span>
          <span className="text-white">{categoryTitle}</span>
          <span className="text-[#cea945]">&gt;</span>
          <span className="text-white">{product.name}</span>
        </motion.div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div variants={fadeInUp} className="mb-6">
              {(product.latin || product.subcategory) && (
                <div className="inline-block px-3 py-1.5 mb-4 rounded border border-[#cea945]/20 bg-[#cea945]/10 text-[#cea945] text-[10px] font-bold uppercase tracking-[0.15em]">
                  {product.subcategory || "Export Commodity"}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-serif leading-[1.05] tracking-tight text-white mb-3">
                {product.name}
              </h1>
              {product.latin && (
                <p className="text-[#a89f8b] text-[15px] italic font-light tracking-wide">
                  {product.latin}
                </p>
              )}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-[#cfc8ba] leading-[1.7] text-[15px] font-light mb-10">
              Mintrix Trading supplies wholesale {product.name.toLowerCase()} sourced from verified origins. Every shipment undergoes strict quality inspection, moisture testing, and compliance verification before dispatch to ensure premium export grade.
            </motion.p>

            <motion.div variants={fadeInUp} className="bg-[#111a15] border border-white/5 rounded-xl p-6 md:p-8 mb-10 shadow-lg">
              <h3 className="text-white font-serif text-xl font-bold mb-6 border-b border-white/10 pb-4">Trade Specifications</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start gap-4">
                  <span className="text-[#a89f8b] text-[13px] font-bold uppercase tracking-wider shrink-0">Supply Type</span>
                  <span className="text-right text-[#cfc8ba] text-[14px]">Wholesale / Bulk Export</span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="text-[#a89f8b] text-[13px] font-bold uppercase tracking-wider shrink-0">Quality</span>
                  <span className="text-right text-[#cfc8ba] text-[14px]">Premium Export Grade</span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="text-[#a89f8b] text-[13px] font-bold uppercase tracking-wider shrink-0">Documentation</span>
                  <span className="text-right text-[#cfc8ba] text-[14px]">COO, Health / Phytosanitary</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#cea945] text-[#0b0b0a] font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] transition-all duration-300 hover:bg-white shadow-[0_4px_20px_rgba(206,169,69,0.25)]"
              >
                Request Quotation
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image Showcase */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[#16221c] border border-white/5 shadow-2xl">
              <Image
                src={product.image}
                alt={`${product.name} Wholesale`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={95}
                priority
                className="object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0a]/80 via-transparent to-[#0b0b0a]/30 pointer-events-none" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="text-[#cea945] font-serif text-3xl md:text-5xl font-bold opacity-30 select-none">
                  Mintrix.
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}