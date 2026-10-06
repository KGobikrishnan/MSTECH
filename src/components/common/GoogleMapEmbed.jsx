import React from "react";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

export default function GoogleMapEmbed({ 
  title = "Visit Our Store", 
  subtitle = "Conveniently located near New Bus Stand, Rasipuram", 
  showInfoCard = true,
  className = ""
}) {
  // Free, high-performance, official Google Maps Embed URL without requiring billing API key
  const embedUrl = "https://maps.google.com/maps?q=No.5+Balasubramaniyan+Theater+Road,+Opp.+Kannan+Department+Store,+New+Bus+Stand,+Rasipuram,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div className={`relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white ${className}`}>
      {/* Top Header if used standalone */}
      {title && (
        <div className="p-5 sm:p-6 bg-white border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Live Interactive Map
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#042B55]">{title}</h3>
            {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0875D1] hover:bg-[#042B55] text-white text-xs font-bold transition-all shadow-md shadow-[#0875D1]/20 hover:scale-105 active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#042B55] text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#0875D1] fill-current" />
              <span>Call Store</span>
            </a>
          </div>
        </div>
      )}

      {/* Map Frame Container */}
      <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100">
        <iframe
          title="MS TECH Rasipuram Location Map"
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Interactive Route Pin Card (Desktop) */}
        {showInfoCard && (
          <div className="hidden sm:block absolute bottom-5 left-5 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/90 text-left z-10 pointer-events-auto">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0875D1] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#042B55]">MS TECH Service Lab</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Opp. Kannan Department Store, New Bus Stand, Rasipuram
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0875D1] hover:underline"
                  >
                    <span>Turn-by-turn Directions</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
