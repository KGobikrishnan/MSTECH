import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../common/SocialIcons";
import Logo from "../common/Logo";
import { BUSINESS_INFO, SERVICES_DATA } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#042B55] text-white pt-16 pb-24 lg:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0875D1]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (Spans 2 cols on mobile, 1 col on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-3.5">
            <Logo variant="dark" />
            <p className="text-xs text-slate-300 leading-relaxed pt-1 max-w-lg">
              Your comprehensive technology partner in Rasipuram and across Tamil Nadu. Dedicated to sales, chip-level repairs, printer servicing, and CCTV setups.
            </p>
            
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 max-w-md">
              <span className="text-[10px] font-bold text-[#7DD3FC] uppercase tracking-wider block mb-0.5">
                Official Motto
              </span>
              <p className="text-xs text-slate-200 italic">
                "Technology Today, A Better Tomorrow."
              </p>
              <p className="text-[11px] text-[#7DD3FC] font-tamil mt-0.5">
                இன்றைய தொழில்நுட்பம், நாளைய சிறப்பான எதிர்காலம்.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#0875D1] hover:text-white text-slate-300 border border-white/10 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#0875D1] hover:text-white text-slate-300 border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#0875D1] hover:text-white text-slate-300 border border-white/10 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 hover:bg-[#0875D1] hover:text-white text-slate-300 border border-white/10 flex items-center justify-center transition-all"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#7DD3FC]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 1 on mobile 2-col grid) */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-3 relative pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-[#0875D1]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                  <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Col 2 on mobile 2-col grid) */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-3 relative pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-[#0875D1]">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-[#7DD3FC] flex items-center gap-1 transition-colors truncate"
                  >
                    <ChevronRight className="w-3 h-3 text-[#0875D1] shrink-0" />
                    <span className="truncate">{srv.title.replace("Sales & Service", "").replace("Solutions", "").trim()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Spans 2 cols on mobile, 1 col on lg) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 pt-3 sm:pt-0 border-t border-white/5 sm:border-t-0">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-3 relative pb-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-[#0875D1]">
              Service Center
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0875D1] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#7DD3FC] font-semibold">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0875D1] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#7DD3FC] truncate">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-[11px] text-[#7DD3FC] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Doorstep & Statewide Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 MS TECH. All Rights Reserved. Trusted Computer Partner | All Over Tamil Nadu</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">Store Directions</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-white transition-colors">Service Scope</Link>
            <span>•</span>
            <span className="text-[#7DD3FC] font-semibold">Rasipuram, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
