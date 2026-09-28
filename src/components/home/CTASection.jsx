import React from "react";
import { Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../../data/siteData";
import { ScaleIn } from "../common/ScrollAnimation";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F0F7FF] text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0875D1]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <ScaleIn duration={0.6} className="rounded-3xl bg-gradient-to-r from-[#042B55] via-[#06427D] to-[#0875D1] p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-[#042B55]/25 relative overflow-hidden text-white">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#7DD3FC] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Instant Support & Consultation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl mx-auto leading-tight text-white">
            Have an Issue with Your Laptop, Printer or CCTV Setup?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Speak directly with our senior technician in Rasipuram. Get genuine advice, upfront estimates, and fast turnaround across Tamil Nadu.
          </p>

          <p className="mt-2 text-sm text-[#7DD3FC] font-tamil max-w-xl mx-auto font-medium">
            உங்கள் கணினி அல்லது லேப்டாப்பில் ஏதேனும் பிரச்சனையா? இப்போதே அழைக்கவும் அல்லது WhatsApp-ல் தொடர்பு கொள்ளவும்!
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#042B55] text-sm font-extrabold shadow-xl transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#0875D1] fill-current" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-sm font-extrabold shadow-xl shadow-[#10B981]/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold transition-all"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Address snippet */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#7DD3FC] shrink-0" />
              <span>{BUSINESS_INFO.address.full}</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Same-Day Diagnostic Available</span>
            </div>
          </div>

        </ScaleIn>
      </div>
    </section>
  );
}
