import { MapPin, Phone, Mail, Clock, Compass } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../common/SocialIcons";
import { BUSINESS_INFO } from "../../data/siteData";

export default function TopBar() {
  return (
    <div className="bg-[#042B55] text-white text-xs border-b border-white/10 hidden md:block relative z-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 py-2 flex items-center justify-between">
        {/* Left Side: Coverage & Tagline */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-[#1687E8]" />
            <span className="font-semibold tracking-wide text-white">{BUSINESS_INFO.coverage}</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-[#1687E8] font-bold">●</span>
            <span>{BUSINESS_INFO.positioning}</span>
          </div>
        </div>

        {/* Right Side: Quick Phone & Socials */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#16B95F]" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
