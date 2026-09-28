import React from "react";
import { Award, ShieldCheck, Coins, HeartHandshake, Compass, Headphones, MapPin } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "../../data/siteData";
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from "../common/ScrollAnimation";

const iconMap = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  Coins: Coins,
  HeartHandshake: HeartHandshake,
  Compass: Compass,
  Headphones: Headphones
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big typography & Highlights */}
          <FadeUp className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0875D1]" />
              Value & Reliability
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#042B55] tracking-tight leading-tight">
              Why Choose <br />
              <span className="text-[#0875D1]">
                MS TECH?
              </span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#042B55] to-[#0875D1] rounded-full my-5" />

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              We treat every device like our own. Our focus is transparent diagnostics, verified original spares, and dedicated service that businesses and families can rely on day after day.
            </p>

            {/* Tamil Nadu Partner Card */}
            <ScaleIn delay={0.2} className="rounded-2xl p-6 bg-gradient-to-br from-[#042B55] to-[#0875D1] text-white shadow-xl shadow-[#042B55]/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#7DD3FC]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#7DD3FC] tracking-wider">Your Technology Partner</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">All Over Tamil Nadu</h3>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    Local Support in Rasipuram. Statewide Service for Namakkal, Salem, Erode, and beyond.
                  </p>
                </div>
              </div>
            </ScaleIn>
          </FadeUp>

          {/* Right Column: Feature List Grid with Staggered Scroll Animation */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" staggerDelay={0.08}>
              {WHY_CHOOSE_ITEMS.map((item, index) => {
                const IconComp = iconMap[item.icon] || Award;
                return (
                  <StaggerItem key={index}>
                    <div className="h-full bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#0875D1]/40 transition-all duration-300 group hover:shadow-lg hover:shadow-[#0875D1]/10">
                      <div className="flex items-start gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-[#042B55] group-hover:text-[#0875D1] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
