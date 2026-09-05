"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the morph slightly after scrolling past the topbar
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Added the new Contact page to the main navigation
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

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
              ? "w-full max-w-[1000px] h-[70px] bg-[#0b0b0a]/90 backdrop-blur-lg border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] rounded-full px-6 sm:px-10"
              : "w-full max-w-[1400px] h-[90px] md:h-[100px] bg-transparent border-b border-white/5 rounded-none px-[5%]"
          }`}
        >
          {/* ─── LOGO SECTION ─── */}
          <div className="flex-shrink-0 relative z-20">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo/04-01.png"
                alt="Mintrix Trading Logo"
                width={400}
                height={120}
                className={`h-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                  scrolled ? "w-[120px] md:w-[140px]" : "w-[150px] md:w-[180px]"
                }`}
                priority
              />
            </Link>
          </div>

          {/* ─── DESKTOP NAVIGATION ─── */}
          <div className="hidden md:flex items-center gap-10 h-full">
            <ul className="flex gap-8 list-none items-center h-full">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.name} className="h-full flex items-center">
                    <Link
                      href={link.href}
                      className={`relative group text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                        active ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-2 left-0 h-[1px] bg-[#cea945] transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="w-[1px] h-6 bg-white/10" />

            {/* High-End Bordered CTA (Updated to route to the new Contact page) */}
            <Link
              href="/contact"
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
        } md:hidden`}
      >
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

        <div className="flex flex-col items-center justify-center h-full gap-10 px-[5%] text-center">
          {navLinks.map((link, i) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-light tracking-[0.2em] uppercase transition-colors relative group ${
                  active ? "text-[#cea945]" : "text-white hover:text-[#cea945]"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-[#cea945] transition-all duration-300 ${
                    active ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 w-full max-w-[280px] border border-[#cea945] text-[#cea945] hover:bg-[#cea945] hover:text-[#0b0b0a] px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300"
          >
            Request Quote
          </Link>

          <div className="mt-12 flex flex-col gap-4 text-xs text-white/50 font-medium tracking-widest uppercase">
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