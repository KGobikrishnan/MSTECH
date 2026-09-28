import React from "react";
import { Helmet } from "react-helmet-async";
import { Star, MessageSquare, ExternalLink, ThumbsUp, CheckCircle2 } from "lucide-react";
import PageHero from "../components/common/PageHero";
import TestimonialCard from "../components/common/TestimonialCard";
import Button from "../components/common/Button";
import CTASection from "../components/home/CTASection";
import { REVIEWS_DATA, BUSINESS_INFO } from "../data/siteData";

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>MS TECH Reviews | Customer Experiences & Verified Feedback</title>
        <meta
          name="description"
          content="Read genuine customer reviews for MS TECH. Reliable laptop repairs, fast SSD upgrades, desktop assembly, and CCTV installations in Rasipuram and across Tamil Nadu."
        />
      </Helmet>

      <PageHero
        badge="Customer Voice"
        title="What Our Clients Say"
        subtitle="Genuine experiences and honest feedback from home users, professionals, and local business owners."
        breadcrumbs={[{ label: "Reviews" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Top Aggregate Rating Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0875D1] to-[#042B55] text-white flex flex-col items-center justify-center shrink-0 shadow-lg">
                <span className="text-3xl font-black leading-none">5.0</span>
                <span className="text-[10px] font-bold text-[#7DD3FC] mt-0.5">OUT OF 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#042B55] mt-1">Outstanding Service Satisfaction</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Based on local customer reviews across Rasipuram and Tamil Nadu.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href={BUSINESS_INFO.socials.maps}
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
              >
                View on Google Reviews
              </Button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS_DATA.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          {/* Transparent Notice */}
          <div className="mt-12 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 max-w-2xl mx-auto text-xs text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-[#0875D1] shrink-0 mt-0.5" />
            <p>
              We value honest customer relationships. Feedback shown reflects customer experiences for laptop servicing, upgrades, and CCTV setup provided at MS TECH Rasipuram.
            </p>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
