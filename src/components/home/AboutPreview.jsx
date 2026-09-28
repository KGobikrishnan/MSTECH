import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Zap, UserCheck, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Rasipuram Store Lab & Owner Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Primary Real Store Front Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <img
                src="/office/20240215_201713.webp"
                alt="MS TECH Service Store Front in Rasipuram"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/95 via-[#042B55]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#7DD3FC]" />
                  Rasipuram Store
                </div>
                <h4 className="text-xl font-extrabold text-white">MS TECH Sales & Service Center</h4>
                <p className="text-xs text-slate-200 mt-1">
                  Opp. Kannan Department Store, New Bus Stand Road
                </p>
              </div>
            </div>

            {/* Overlapping Owner Badge Card with Real owner.webp */}
            <div className="absolute -bottom-8 -right-3 sm:-right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200 flex items-center gap-4 max-w-xs">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#0875D1] shadow-md shrink-0">
                <img
                  src="/person/owner.webp"
                  alt="MS TECH Founder & Chief Technician"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold text-[#0875D1] tracking-wider block">
                  Lead Technician & Founder
                </span>
                <span className="text-sm sm:text-base font-extrabold text-[#042B55] block leading-tight">
                  MS TECH Leadership
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Direct Hands-on Diagnostic Care
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-[#0875D1]" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#042B55] tracking-tight leading-tight">
              About <span className="text-[#0875D1]">MS TECH</span>
            </h2>
            <div className="h-1 w-14 bg-gradient-to-r from-[#042B55] to-[#0875D1] rounded-full my-5" />

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              MS TECH is a dedicated technology sales and service center providing state-of-the-art solutions for laptops, custom gaming & workstation desktops, high-speed printers, and commercial CCTV setups.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              With hands-on experience and professional chip-level repair tools, we focus on transparent diagnosis, OEM replacement parts, and dedicated customer support across Rasipuram and all of Tamil Nadu.
            </p>

            {/* Tamil translation callout */}
            <div className="mt-5 p-4 rounded-xl bg-[#EAF6FF]/80 border border-[#0875D1]/20 text-xs text-[#042B55] font-tamil font-semibold leading-relaxed">
              தொழில்நுட்ப தேவைகளுக்கான நம்பகமான மையம் — தரமான உதிரிபாகங்கள், வெளிப்படையான சர்வீஸ் மற்றும் உடனடி ஆதரவு.
            </div>

            {/* Bullet Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#0875D1] shrink-0" />
                <span>Laptop & Desktop Chip-Level Care</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#0875D1] shrink-0" />
                <span>Laser & Ink Tank Printer Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#0875D1] shrink-0" />
                <span>Commercial CCTV Setup & Mobile Sync</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#0875D1] shrink-0" />
                <span>Prompt Support Across Tamil Nadu</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#042B55] to-[#0875D1] hover:from-[#0875D1] hover:to-[#042B55] text-white text-sm font-extrabold shadow-lg shadow-[#0875D1]/20 transition-all"
              >
                <span>Meet Our Team & Lab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#042B55] border border-slate-300 text-sm font-bold transition-all shadow-xs"
              >
                <span>Visit Our Shop</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
