import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import ServiceCard from "../common/ServiceCard";
import { SERVICES_DATA, BUSINESS_INFO } from "../../data/siteData";

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#0875D1]" />
              Comprehensive Technology Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042B55] tracking-tight leading-tight">
              Our Core <span className="text-[#0875D1]">Services & Solutions</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-tamil">
              ராசிபுரம் மற்றும் தமிழ்நாடு முழுவதும் நம்பகமான கணினி, லேப்டாப், பிரிண்டர் & சிசிடிவி சர்வீஸ்
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#042B55] border border-slate-200/90 text-xs font-bold transition-all shrink-0 hover:border-[#0875D1]/40 shadow-xs"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 text-[#0875D1]" />
          </Link>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#042B55] via-[#06427D] to-[#0875D1] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl shadow-[#042B55]/15 relative overflow-hidden">
          <div className="relative z-10 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7DD3FC] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Looking for Custom Business Setup?
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-1 text-white">
              Need an immediate chip-level diagnostic or bulk spares quote?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl">
              Visit our Rasipuram service lab opposite Kannan Department Store or chat directly with our senior technician on WhatsApp.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-sm font-extrabold shadow-lg shadow-[#10B981]/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Get Free Estimate on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
