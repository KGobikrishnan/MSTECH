import React from "react";
import { Search, FileText, Cpu, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from "../common/ScrollAnimation";

const STEPS = [
  {
    step: "01",
    title: "Free Diagnostics",
    subtitle: "இலவச ஆரம்ப பரிசோதனை",
    desc: "Bring your laptop, PC or printer or request a doorstep check. We perform deep hardware chip & voltage testing before touching any components.",
    icon: Search,
    highlight: "15-30 Mins"
  },
  {
    step: "02",
    title: "Transparent Quote",
    subtitle: "முன்கூட்டியே தெளிவான விலை",
    desc: "Zero hidden charges. You receive an upfront written breakdown of replacement spares and service charges for your approval before work begins.",
    icon: FileText,
    highlight: "100% Upfront"
  },
  {
    step: "03",
    title: "Expert Repair",
    subtitle: "அசல் உதிரிபாகங்களுடன் பழுதுநீக்கம்",
    desc: "Conducted in our anti-static ESD Rasipuram lab using high-precision thermal imaging, BGA soldering, and 100% OEM genuine parts.",
    icon: Cpu,
    highlight: "ESD Safe Lab"
  },
  {
    step: "04",
    title: "Testing & Handover",
    subtitle: "சோதனை & வாரண்டியுடன் டெலிவரி",
    desc: "Rigorous 24-point benchmark stress test followed by clean handover, GST bill, and official warranty on all replaced hardware.",
    icon: CheckCircle2,
    highlight: "With Warranty"
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#0875D1]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#E0F2FE]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header with Scroll Animation */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5 text-[#0875D1]" />
            Clear, Transparent & Hassle-Free
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042B55] tracking-tight">
            How Our <span className="text-[#0875D1]">Repair Process</span> Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Inspired by customer-first standards. No surprises, no unexplained charges — just straightforward, reliable service.
          </p>
        </FadeUp>

        {/* 4-Step Process Grid with Staggered Scroll Animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" staggerDelay={0.12}>
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx}>
                <div className="h-full group relative rounded-2xl p-6 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#0875D1]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#0875D1]/10 flex flex-col justify-between">
                  {/* Step number badge */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-slate-300 group-hover:text-[#0875D1] transition-colors font-mono">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EAF6FF] text-[#0875D1] border border-[#0875D1]/20">
                        {item.highlight}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0875D1] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-[#042B55] group-hover:text-[#0875D1] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-[#0875D1] font-tamil font-semibold block mt-0.5 mb-2.5">
                      {item.subtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom line accent */}
                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center text-xs font-semibold text-slate-500 group-hover:text-[#0875D1] transition-colors">
                    <span>Guaranteed Standards</span>
                    <ShieldCheck className="w-4 h-4 ml-auto text-[#10B981]" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Assurance Banner with Scroll Scale Effect */}
        <ScaleIn delay={0.2} className="mt-12 rounded-2xl bg-gradient-to-r from-[#042B55] to-[#0875D1] text-white p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#042B55]/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#7DD3FC]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                No Fix, No Diagnostic Fee Guarantee
              </h4>
              <p className="text-xs text-slate-200 mt-0.5">
                If we cannot determine the issue or if the motherboard is unrepairable, you don't pay standard service fees.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#042B55] hover:text-[#0875D1] text-sm font-extrabold transition-all shadow-md shrink-0"
          >
            <span>Book Diagnosis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </ScaleIn>
      </div>
    </section>
  );
}
