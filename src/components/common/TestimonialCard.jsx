import React from "react";
import { Star, ShieldCheck } from "lucide-react";

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#0875D1]/40 shadow-xs hover:shadow-xl hover:shadow-[#0875D1]/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
      <div>
        {/* Top accent & stars */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
            <ShieldCheck className="w-3 h-3" />
            Verified Customer
          </span>
        </div>

        {/* Real Customer Delivery Photo if present */}
        {review.customerImage && (
          <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-slate-200/80 bg-slate-100 shadow-inner group-hover:shadow-md transition-all">
            <img
              src={review.customerImage}
              alt={`${review.name} at MS TECH Rasipuram`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#042B55]/85 text-white text-[10px] font-bold backdrop-blur-xs">
              Rasipuram Store Delivery
            </div>
          </div>
        )}

        {/* Comment */}
        <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
          "{review.comment}"
        </p>
      </div>

      {/* Author Info */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {review.customerImage ? (
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#0875D1]/30 shadow-xs shrink-0">
              <img
                src={review.customerImage}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0875D1] to-[#042B55] text-white font-extrabold flex items-center justify-center text-sm shadow-xs shrink-0">
              {review.name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="text-sm font-bold text-[#042B55] leading-none">
              {review.name}
            </h4>
            <span className="text-xs text-slate-400 mt-1 block">
              {review.serviceUsed || review.date}
            </span>
          </div>
        </div>

        {/* Google G badge */}
        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0875D1] font-bold text-xs shrink-0">
          G
        </div>
      </div>
    </div>
  );
}
