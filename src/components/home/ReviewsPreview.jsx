import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, MessageSquareQuote } from "lucide-react";
import TestimonialCard from "../common/TestimonialCard";
import { REVIEWS_DATA } from "../../data/siteData";
import { FadeUp, StaggerContainer, StaggerItem } from "../common/ScrollAnimation";

export default function ReviewsPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#0875D1]" />
              Verified Google Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#042B55] tracking-tight">
              Customer <span className="text-[#0875D1]">Stories & Trust</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl font-tamil">
              வாடிக்கையாளர்களின் உண்மையான கருத்துக்கள் மற்றும் திருப்தியான அனுபவங்கள்
            </p>
          </div>

          {/* Google Style Rating Box */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-md flex items-center gap-4 shrink-0">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-black text-[#042B55] leading-none">5.0</span>
              <div className="flex items-center gap-1 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div>
              <span className="text-xs font-bold text-[#042B55] block">Google Business Rating</span>
              <span className="text-[11px] text-emerald-600 font-bold">100% Satisfaction Focus</span>
            </div>
          </div>
        </FadeUp>

        {/* Reviews Grid with Staggered Scroll Animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.12}>
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <StaggerItem key={review.id}>
              <TestimonialCard review={review} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#042B55] border border-slate-300 text-sm font-bold transition-all hover:border-[#0875D1] shadow-xs"
          >
            <span>Read All Reviews & Testimonials</span>
            <ArrowRight className="w-4 h-4 text-[#0875D1]" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
