import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Image as GalleryIcon, PhoneCall, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
    icon: Home,
    end: true
  },
  {
    label: "About Us",
    to: "/about",
    icon: Users
  },
  {
    label: "Gallery",
    to: "/gallery",
    icon: GalleryIcon
  },
  {
    label: "Contact",
    to: "/contact",
    icon: PhoneCall
  }
];

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-2 py-1.5 safe-area-bottom"
    >
      <div className="grid grid-cols-5 items-center justify-between gap-1 max-w-md mx-auto">
        {/* 1. Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#0875D1] font-extrabold bg-[#EAF6FF]"
                : "text-slate-500 hover:text-slate-800 font-medium"
            }`
          }
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Home</span>
        </NavLink>

        {/* 2. About Us */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#0875D1] font-extrabold bg-[#EAF6FF]"
                : "text-slate-500 hover:text-slate-800 font-medium"
            }`
          }
        >
          <Users className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">About</span>
        </NavLink>

        {/* Center Quick WhatsApp Action */}
        <div className="flex flex-col items-center justify-center -mt-4">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg shadow-[#10B981]/30 active:scale-90 transition-transform border-2 border-white"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </a>
          <span className="text-[9px] font-bold text-slate-500 mt-0.5">Chat</span>
        </div>

        {/* 4. Gallery */}
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#0875D1] font-extrabold bg-[#EAF6FF]"
                : "text-slate-500 hover:text-slate-800 font-medium"
            }`
          }
        >
          <GalleryIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Gallery</span>
        </NavLink>

        {/* 5. Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-[#0875D1] font-extrabold bg-[#EAF6FF]"
                : "text-slate-500 hover:text-slate-800 font-medium"
            }`
          }
        >
          <PhoneCall className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
}
