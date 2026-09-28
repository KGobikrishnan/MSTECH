import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#0875D1] to-[#042B55] text-white shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#16B95F] text-white shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Map Location */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 shadow-sm active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-red-500 mb-0.5" />
          <span className="text-[11px] font-bold">Location</span>
        </a>
      </div>
    </div>
  );
}
