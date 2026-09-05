// src/components/layout/Topbar.tsx
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="bg-[#0b0b0a] text-[#cfc8ba] text-[11px] md:text-xs border-b border-white/5 relative z-[110]">
      <div className="max-w-[1400px] mx-auto px-[5%] h-10 flex justify-center sm:justify-between items-center">
        
        {/* Left Side: Welcome Message */}
        <div className="opacity-70 hidden md:block tracking-wide">
          <span>Welcome to Mintrix Trading — UAE-Registered Global Food Trading Company</span>
        </div>
        
        {/* Right Side: Contact & Socials */}
        <div className="flex items-center gap-5 sm:gap-6 opacity-90 font-medium">
          <a 
            href="mailto:info@mintrixtrading.com" 
            className="hover:text-[#cea945] transition-colors duration-300 hidden sm:block"
          >
            info@mintrixtrading.com
          </a>
          <a 
            href="tel:+971585130941" 
            className="hover:text-[#cea945] transition-colors duration-300"
          >
            +971 58 513 0941
          </a>
          
          <div className="flex items-center gap-2">
            <a 
              href="#" 
              aria-label="Facebook" 
              className="w-[22px] h-[22px] border border-white/20 rounded-full flex items-center justify-center text-[9px] hover:border-[#cea945] hover:text-[#cea945] transition-colors duration-300"
            >
              f
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="w-[22px] h-[22px] border border-white/20 rounded-full flex items-center justify-center text-[9px] hover:border-[#cea945] hover:text-[#cea945] transition-colors duration-300"
            >
              in
            </a>
            <a 
              href="#" 
              aria-label="Instagram" 
              className="w-[22px] h-[22px] border border-white/20 rounded-full flex items-center justify-center text-[9px] hover:border-[#cea945] hover:text-[#cea945] transition-colors duration-300"
            >
              ig
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}