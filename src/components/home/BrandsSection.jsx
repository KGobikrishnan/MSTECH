import React from "react";
import BrandLogo from "../common/BrandLogo";
import { BRANDS_DATA } from "../../data/siteData";
import { Cpu } from "lucide-react";

export default function BrandsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Global Tech Standards
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#042B55] tracking-tight">
            Brands We Service & Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            100% genuine spares & authorized components sourced for world-class computer and surveillance brands.
          </p>
          <div className="h-1 w-12 bg-[#0875D1] rounded-full mx-auto mt-4" />
        </div>

        {/* Responsive Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {BRANDS_DATA.map((brand, idx) => (
            <BrandLogo key={idx} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
