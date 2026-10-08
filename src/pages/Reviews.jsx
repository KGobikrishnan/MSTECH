import React from "react";
import { Helmet } from "react-helmet-async";
import { Star, MessageSquare, ExternalLink, ThumbsUp, CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";
import PageHero from "../components/common/PageHero";
import TestimonialCard from "../components/common/TestimonialCard";
import Button from "../components/common/Button";
import CTASection from "../components/home/CTASection";
import { REVIEWS_DATA, BUSINESS_INFO } from "../data/siteData";
import { ALL_GOOGLE_REVIEWS } from "../data/googleReviewsData";
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from "../components/common/ScrollAnimation";

export default function Reviews() {
  // Split Google reviews into 2 distinct rows for dual directional marquee
  const rowOneReviews = ALL_GOOGLE_REVIEWS.filter((_, idx) => idx % 2 === 0);
  const rowTwoReviews = ALL_GOOGLE_REVIEWS.filter((_, idx) => idx % 2 !== 0);

  return (
    <>
      <Helmet>
        <title>Customer Reviews & Ratings | MS TECH Rasipuram (5.0★ Google Reviews)</title>
        <meta
          name="description"
          content="Read 100+ verified 5-star customer reviews for MS TECH in Rasipuram. Fast laptop repairs, transparent pricing, chip-level service, and friendly customer support."
        />
        <link rel="canonical" href="https://mstechservices.in/reviews" />
        <meta property="og:title" content="MS TECH Customer Reviews | 5.0 Star Rating" />
        <meta property="og:description" content="Discover what clients say about MS TECH laptop repair and technology services in Rasipuram and across Tamil Nadu." />
        <meta property="og:url" content="https://mstechservices.in/reviews" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MS TECH",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "120"
            }
          })}
        </script>
      </Helmet>

      <PageHero
        badge="Customer Voice"
        title="What Our Clients Say"
        subtitle="Genuine experiences and honest feedback from home users, professionals, and local business owners."
        breadcrumbs={[{ label: "Reviews" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Top Aggregate Rating Banner with ScaleIn */}
          <ScaleIn className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md mb-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0875D1] to-[#042B55] text-white flex flex-col items-center justify-center shrink-0 shadow-lg shadow-[#0875D1]/20">
                <span className="text-3xl font-black leading-none">5.0</span>
                <span className="text-[10px] font-bold text-[#7DD3FC] mt-0.5">OUT OF 5</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#042B55] mt-1">Outstanding Service Satisfaction</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Over 100+ 5-star ratings from verified customers across Rasipuram, Namakkal & Tamil Nadu.
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
          </ScaleIn>

          {/* Section 1: Featured In-Store Customer Deliveries with Photos */}
          <FadeUp className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#0875D1] tracking-wider uppercase bg-[#EAF6FF] px-3 py-1 rounded-full border border-[#0875D1]/20">
                  Store Deliveries & Handover
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#042B55] mt-2">
                  Verified Store Customers & Delivery Moments
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Direct snapshots and testimonials from customers receiving their serviced and newly purchased computers.
              </p>
            </div>
          </FadeUp>

          {/* Reviews Grid with Staggered Scroll Animation */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {REVIEWS_DATA.map((review) => (
              <StaggerItem key={review.id}>
                <TestimonialCard review={review} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Transparent Notice */}
          <FadeUp delay={0.2} className="mt-10 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 max-w-2xl mx-auto text-xs text-slate-600 mb-20">
            <CheckCircle2 className="w-4 h-4 text-[#0875D1] shrink-0 mt-0.5" />
            <p>
              We value honest customer relationships. Feedback shown reflects real customer experiences for laptop servicing, upgrades, and CCTV setup provided at MS TECH Rasipuram.
            </p>
          </FadeUp>

        </div>

        {/* Section 2: Our Happy Customers with 5-Star Rating (Dual Row Infinite Marquee) */}
        <div className="border-t border-slate-200/90 bg-white py-16 sm:py-20 relative">
          {/* Subtle tech background accents */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#0875D1_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 mb-12">
            <FadeUp className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                Real Google Reviews Feed
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#042B55] tracking-tight">
                Our Happy Customers with 5-Star Rating
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Browse through genuine feedback from our beloved clients. Hover over any card to pause and read their complete experience.
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-[#0875D1] to-[#38BDF8] rounded-full mx-auto mt-4" />
            </FadeUp>
          </div>

          {/* Marquee Wrapper with side fade gradients */}
          <div className="relative w-full overflow-hidden space-y-6">
            {/* Side Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* Row 1: Left to Right Marquee */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee-right pause-hover flex gap-5 py-2">
                {[...rowOneReviews, ...rowOneReviews].map((item, idx) => (
                  <GoogleReviewTickerCard key={`r1-${idx}`} review={item} />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left Marquee */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee-left pause-hover flex gap-5 py-2">
                {[...rowTwoReviews, ...rowTwoReviews].map((item, idx) => (
                  <GoogleReviewTickerCard key={`r2-${idx}`} review={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="text-center mt-12 relative z-10">
            <a
              href={BUSINESS_INFO.socials.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold text-[#0875D1] transition-all hover:shadow-md"
            >
              <span>Read all verified 5-Star reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

// Compact Google Review Card tailored for continuous scrolling
function GoogleReviewTickerCard({ review }) {
  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 bg-slate-50/90 hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#0875D1]/50 shadow-xs hover:shadow-xl hover:shadow-[#0875D1]/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer select-none">
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] font-semibold text-slate-400">
            {review.date}
          </span>
        </div>

        <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed line-clamp-4 italic mb-3">
          "{review.comment}"
        </p>
      </div>

      <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0875D1] to-[#042B55] text-white font-extrabold flex items-center justify-center text-xs shadow-xs shrink-0">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-[#042B55] truncate group-hover:text-[#0875D1] transition-colors">
              {review.name}
            </h4>
            <span className="text-[10px] text-slate-400 block truncate">
              {review.badge || review.serviceUsed}
            </span>
          </div>
        </div>

        {/* Google Icon Badge */}
        <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0875D1] font-black text-[10px] shadow-2xs shrink-0">
          G
        </div>
      </div>
    </div>
  );
}
