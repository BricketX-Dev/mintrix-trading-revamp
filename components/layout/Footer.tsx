import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#070b09] text-[#c9c2b3] border-t border-white/[0.08] pt-14 sm:pt-20 pb-10 sm:pb-12 overflow-hidden select-none">
      
      {/* ─── Ambient Glow Accents (Restrained, No Mobile Overflow) ─── */}
      <div className="absolute top-0 right-1/3 w-[300px] sm:w-[500px] h-[250px] sm:h-[300px] bg-[#cea945]/[0.025] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[300px] bg-[#21332a]/20 blur-[110px] pointer-events-none rounded-full" />

      {/* Top Hairline Gold Accent Rule */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#cea945]/40 to-transparent" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── Main Content Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-white/[0.06]">
          
          {/* Column 1: Brand Authority & Legal Identity (Span 5 on Desktop) */}
          <div className="lg:col-span-5 pr-0 lg:pr-10">
            <Link href="/" className="inline-block mb-4 sm:mb-5 group">
              <Image
                src="/images/logo/04-01.png"
                alt="Mintrix Trading Logo"
                width={150}
                height={45}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-[13px] sm:text-[13.5px] leading-[1.75] text-[#a89f8b] mb-5 sm:mb-6 font-light max-w-md">
              A UAE-registered food commodities trading company operating out of Dubai. Direct procurement across 50+ origins, verified documentation, and structured B2B trade execution worldwide.
            </p>

            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-[10.5px] sm:text-[11px] text-[#cfc8ba] mb-6 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#cea945] animate-pulse" />
              <span>Deira, Dubai Desk Active</span>
              <span className="text-white/20">|</span>
              <span className="text-[#a89f8b]">GMT+4</span>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5">
              {[
                {
                  href: "https://www.facebook.com/mintrixtrading",
                  label: "Facebook",
                  icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                },
                {
                  href: "https://www.linkedin.com/company/mintrix-trading/",
                  label: "LinkedIn",
                  icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                },
                {
                  href: "https://www.instagram.com/mintrixtrading/",
                  label: "Instagram",
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#cfc8ba] hover:bg-[#cea945] hover:border-[#cea945] hover:text-[#0b0b0a] transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Combined Navigation & Divisions Grid for Clean Mobile Flow (Span 4 on Desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Navigation Column */}
            <div>
              <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] text-[#cea945] font-bold block mb-3.5 sm:mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#a89f8b]">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Catalog", href: "/products" },
                  { name: "FAQs", href: "/#faq" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 hover:text-[#cea945] hover:translate-x-1 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sourcing Divisions Column */}
            <div>
              <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] text-[#cea945] font-bold block mb-3.5 sm:mb-4">
                Divisions
              </span>
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#a89f8b]">
                {[
                  { name: "Grains & Rice", href: "/products" },
                  { name: "Spices", href: "/products" },
                  { name: "Pulses & Beans", href: "/products" },
                  { name: "Edible Oils", href: "/products" },
                  { name: "Frozen Poultry", href: "/products" },
                  { name: "Dry Fruits & Nuts", href: "/products" },
                ].map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={cat.href}
                      className="inline-block py-0.5 hover:text-[#cea945] hover:translate-x-1 transition-all duration-200"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Dubai Commercial Desk (Span 3 on Desktop) */}
          <div className="lg:col-span-3">
            <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] text-[#cea945] font-bold block mb-3.5 sm:mb-4">
              Dubai Trade Desk
            </span>

            <div className="space-y-3 text-[13px] text-[#a89f8b]">
              <a
                href="tel:+971541662352"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#cfc8ba] hover:text-[#cea945] hover:border-[#cea945]/30 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-[#cea945] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span className="font-medium tracking-wide">+971 54 166 2352</span>
              </a>

              <a
                href="mailto:info@mintrixtrading.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#cfc8ba] hover:text-[#cea945] hover:border-[#cea945]/30 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-[#cea945] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 6 10 7 10-7" />
                </svg>
                <span className="font-medium break-all">info@mintrixtrading.com</span>
              </a>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[12px] leading-relaxed text-[#8f8674]">
                <svg className="w-4 h-4 text-[#cea945] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Office No. 101-182, Muhammad Abdullah Property, Deira – Hor Al Anz, Dubai, UAE</span>
              </div>
            </div>
          </div>

        </div>

        {/* ─── Bottom Legal Bar (Minimal & Stacked on Mobile) ─── */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-[11.5px] text-[#6b6455] font-medium tracking-wider uppercase gap-3 sm:gap-4 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Mintrix Trading LLC. All Rights Reserved.</span>
          <div className="flex items-center justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#cea945] transition-colors py-1">
              Privacy Policy
            </Link>
            <span className="text-white/10">•</span>
            <Link href="/terms" className="hover:text-[#cea945] transition-colors py-1">
              Terms of Trade
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}