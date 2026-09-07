"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { catalogData } from "@/data/products";
import { slugify } from "@/utils/slugify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // Mobile accordion state
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route changes
  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Outer Wrapper: Starts below Topbar (top-[40px]), moves to top-6 on scroll */}
      <nav
        className={`fixed left-0 right-0 z-[100] flex justify-center transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          scrolled ? "top-4 sm:top-6 px-4" : "top-[40px] px-0"
        }`}
      >
        {/* Inner Wrapper: Morphs from full-width rectangle to floating pill */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
            scrolled
              ? "w-full max-w-[1050px] h-[70px] bg-[#0b0b0a]/90 backdrop-blur-lg border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] rounded-full px-6 sm:px-10"
              : "w-full max-w-[1400px] h-[90px] md:h-[100px] bg-transparent border-b border-white/5 rounded-none px-[5%]"
          }`}
        >
          {/* ─── LOGO SECTION ─── */}
          <div className="flex-shrink-0 relative z-20">
            <Link href="/" scroll={true} className="flex items-center group">
              <Image
                src="/images/logo/04-01.png"
                alt="Mintrix Trading Logo"
                width={400}
                height={120}
                style={{ height: "auto" }}
                className={`object-contain transition-all duration-500 group-hover:scale-105 ${
                  scrolled ? "w-[120px] md:w-[140px]" : "w-[150px] md:w-[180px]"
                }`}
                priority
              />
            </Link>
          </div>

          {/* ─── DESKTOP NAVIGATION ─── */}
          <div className="hidden md:flex items-center gap-10 h-full">
            <ul className="flex gap-8 list-none items-center h-full">
              
              {/* Home Link */}
              <li className="h-full flex items-center">
                <Link
                  href="/"
                  scroll={true}
                  className={`relative group text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                    pathname === "/" ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
                  }`}
                >
                  Home
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] bg-[#cea945] transition-all duration-300 ${
                      pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>

              {/* About Us Link */}
              <li className="h-full flex items-center">
                <Link
                  href="/about"
                  scroll={true}
                  className={`relative group text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                    isLinkActive("/about") ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
                  }`}
                >
                  About Us
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] bg-[#cea945] transition-all duration-300 ${
                      isLinkActive("/about") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>

              {/* Products Dropdown Menu */}
              <li className="h-full flex items-center relative group">
                <Link
                  href="/products"
                  scroll={true}
                  className={`relative flex items-center gap-1.5 text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 py-4 ${
                    isLinkActive("/products") ? "text-[#cea945]" : "text-white group-hover:text-[#cea945]"
                  }`}
                >
                  <span>Products</span>
                  <svg
                    className="w-3 h-3 text-[#cea945] transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] bg-[#cea945] transition-all duration-300 ${
                      isLinkActive("/products") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-[320px] bg-[#0c120f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#cea945] to-transparent" />
                    
                    <div className="text-[9.5px] uppercase tracking-[0.25em] font-bold text-[#cea945] px-3 py-1.5 mb-1">
                      Commodity Divisions
                    </div>

                    <div className="space-y-1">
                      {catalogData.map((cat) => {
                        const catSlug = slugify(cat.title);
                        return (
                          <Link
                            key={cat.id}
                            href={`/products/${catSlug}`}
                            scroll={true}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] text-[#cfc8ba] hover:text-[#cea945] hover:bg-white/[0.04] transition-all group/item"
                          >
                            <span className="font-serif tracking-wide">{cat.title}</span>
                            <span className="text-[10px] text-[#a89f8b] tracking-wider opacity-60 group-hover/item:opacity-100">
                              {cat.items.length} items
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/5">
                      <Link
                        href="/products"
                        scroll={true}
                        className="flex items-center justify-between px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#cea945] hover:text-white transition-colors"
                      >
                        <span>View All Catalog</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* Contact Link */}
              <li className="h-full flex items-center">
                <Link
                  href="/contact"
                  scroll={true}
                  className={`relative group text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                    isLinkActive("/contact") ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
                  }`}
                >
                  Contact
                  <span
                    className={`absolute -bottom-2 left-0 h-[1px] bg-[#cea945] transition-all duration-300 ${
                      isLinkActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>

            </ul>

            <div className="w-[1px] h-6 bg-white/10" />

            {/* High-End Bordered CTA */}
            <Link
              href="/contact"
              scroll={true}
              className={`group relative px-7 py-3 text-[11px] font-bold text-white tracking-[0.2em] uppercase border border-white/20 hover:border-[#cea945] overflow-hidden transition-all duration-300 ${
                scrolled ? "rounded-full" : "rounded-[2px]"
              }`}
            >
              <span className="relative z-10 group-hover:text-[#0b0b0a] transition-colors duration-300">
                Get a Quote
              </span>
              <div className="absolute inset-0 bg-[#cea945] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            </Link>
          </div>

          {/* ─── MOBILE HAMBURGER BUTTON ─── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white focus:outline-none relative z-[110]"
            aria-label="Toggle Menu"
          >
            <div className="w-7 flex flex-col items-end gap-1.5">
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "w-7 rotate-45 translate-y-[8px]" : "w-7"
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-5"
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "w-7 -rotate-45 -translate-y-[8px]" : "w-3"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ─── HIGH-END MOBILE MENU OVERLAY ─── */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0b0b0a] transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        } md:hidden overflow-y-auto`}
      >
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

        <div className="flex flex-col items-center justify-center min-h-full py-24 gap-8 px-[5%] text-center">
          
          <Link
            href="/"
            scroll={true}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
              pathname === "/" ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            scroll={true}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
              isLinkActive("/about") ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
            }`}
          >
            About Us
          </Link>

          {/* Mobile Collapsible Products Section */}
          <div className="flex flex-col items-center w-full max-w-[280px]">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`flex items-center justify-center gap-2 text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
                isLinkActive("/products") ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
              }`}
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 text-[#cea945] transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Mobile Categories Accordion */}
            <div
              className={`w-full overflow-hidden transition-all duration-300 ${
                productsOpen ? "max-h-[450px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-[#111714] border border-white/10 rounded-xl p-3 flex flex-col gap-2 text-left">
                <Link
                  href="/products"
                  scroll={true}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 text-xs uppercase tracking-widest text-[#cea945] font-bold border-b border-white/5"
                >
                  All Products Overview &rarr;
                </Link>
                {catalogData.map((cat) => {
                  const catSlug = slugify(cat.title);
                  return (
                    <Link
                      key={cat.id}
                      href={`/products/${catSlug}`}
                      scroll={true}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-1 text-sm text-[#cfc8ba] hover:text-[#cea945] transition-colors"
                    >
                      {cat.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            scroll={true}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
              isLinkActive("/contact") ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
            }`}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            scroll={true}
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full max-w-[280px] border border-[#cea945] text-[#cea945] hover:bg-[#cea945] hover:text-[#0b0b0a] px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300"
          >
            Request Quote
          </Link>

          <div className="mt-8 flex flex-col gap-2 text-xs text-white/50 font-medium tracking-widest uppercase">
            <p className="hover:text-[#cea945] transition-colors">
              info@mintrixtrading.com
            </p>
            <p>Dubai, UAE</p>
          </div>
        </div>
      </div>
    </>
  );
}