import Link from "next/link";

// Polished SVG micro-icons
const MailIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#cea945]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Topbar() {
  return (
    <aside aria-label="Quick contact and credentials" className="bg-[#0b0b0a] text-[#cfc8ba] border-b border-white/[0.08] relative z-[110] select-none">
      <div className="max-w-[1400px] mx-auto px-[5%] h-11 flex justify-between items-center text-[11px] md:text-[11.5px]">
        
        {/* Left Side: Credential Pill & Operational Scope */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 bg-[#cea945]/10 border border-[#cea945]/25 px-2 py-0.5 rounded-[3px] text-[10px] font-bold text-[#cea945] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#cea945] animate-pulse" />
            Dubai, UAE
          </span>
          <span className="hidden md:inline-block text-white/40">•</span>
          <span className="text-white/70 font-light tracking-wide hidden md:inline-block">
            UAE-Registered Global Food Trading Desk
          </span>
        </div>

        {/* Right Side: Direct Contacts & Social Icons */}
        <div className="flex items-center gap-5 sm:gap-6">
          
          {/* Email */}
          <a
            href="mailto:info@mintrixtrading.com"
            className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-[#cea945] transition-colors duration-300 font-medium tracking-wide"
          >
            <MailIcon />
            <span>info@mintrixtrading.com</span>
          </a>

          <div className="hidden sm:block w-[1px] h-3.5 bg-white/10" />

          {/* Phone */}
          <a
            href="tel:+971585130941"
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#cea945] transition-colors duration-300 font-medium tracking-wide"
          >
            <PhoneIcon />
            <span>+971 54 166 2352</span>
          </a>

          <div className="w-[1px] h-3.5 bg-white/10" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.facebook.com/mintrixtrading", label: "Facebook", icon: <FacebookIcon /> },
              { href: "https://www.linkedin.com/company/mintrix-trading/", label: "LinkedIn", icon: <LinkedInIcon /> },
              { href: "https://www.instagram.com/mintrixtrading/", label: "Instagram", icon: <InstagramIcon /> },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:border-[#cea945]/50 hover:bg-[#cea945] hover:text-[#0b0b0a] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

      </div>
    </aside>
  );
}