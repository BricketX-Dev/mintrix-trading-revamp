import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0a] text-[#c9c2b3] border-t border-white/10 pt-20 overflow-hidden">
      
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cea945]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#21332a]/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Four Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:pr-6">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/images/logo/04-01.png"
                alt="Mintrix Trading Logo"
                width={180}
                height={55}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-[#a89f8b] mb-6">
              A Dubai-based global food trading and procurement company sourcing premium agricultural commodities worldwide and delivering with absolute confidence.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#cea945] hover:border-[#cea945] hover:text-[#0b0b0a] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#cea945] hover:border-[#cea945] hover:text-[#0b0b0a] transition-all duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-[#cea945] hover:border-[#cea945] hover:text-[#0b0b0a] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-serif text-white text-[15px] font-bold mb-5 tracking-wide">
              Quick Links
            </h5>
            <ul className="space-y-3 text-[13px] text-[#a89f8b]">
              <li>
                <Link href="/" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Home</Link>
              </li>
              <li>
                <Link href="#why" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">About Us</Link>
              </li>
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Products</Link>
              </li>
              <li>
                <Link href="#faq" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">FAQs</Link>
              </li>
              <li>
                <Link href="#quote" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sourcing Categories */}
          <div>
            <h5 className="font-serif text-white text-[15px] font-bold mb-5 tracking-wide">
              Sourcing Categories
            </h5>
            <ul className="space-y-3 text-[13px] text-[#a89f8b]">
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Grains &amp; Cereals</Link>
              </li>
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Spices &amp; Seasonings</Link>
              </li>
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Pulses &amp; Legumes</Link>
              </li>
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Edible Oils &amp; Seeds</Link>
              </li>
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Poultry &amp; Protein</Link>
              </li>
              <li>
                <Link href="#products" className="inline-block hover:text-[#cea945] hover:translate-x-1.5 transition-all duration-300">Fresh &amp; Frozen Fruits</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details (Replaced Emojis with SVGs) */}
          <div>
            <h5 className="font-serif text-white text-[15px] font-bold mb-5 tracking-wide">
              Dubai Trade Desk
            </h5>
            <ul className="space-y-4 text-[13px] text-[#a89f8b]">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#cea945] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+971541662352" className="hover:text-[#cea945] transition-colors">
                  +971 54 166 2352
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#cea945] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:info@mintrixtrading.com" className="hover:text-[#cea945] transition-colors">
                  info@mintrixtrading.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#cea945] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="leading-relaxed">
                  Office No. 101-182, Muhammad Abdullah Property, Deira – Hor Al Anz, Dubai, UAE
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#726a5c] font-medium tracking-wide uppercase gap-4">
          <span>© {new Date().getFullYear()} Mintrix Trading. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#cea945] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#cea945] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}