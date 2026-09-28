import React, { useState } from "react";

export default function BrandLogo({ brand }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-lg hover:border-[#0875D1]/40 hover:bg-[#F8FAFC] transition-all duration-300 group h-28 sm:h-32">
      <div className="h-12 w-full flex items-center justify-center px-2">
        {brand.logoUrl && !imageError ? (
          <img
            src={brand.logoUrl}
            alt={`${brand.name} logo`}
            className="max-h-9 sm:max-h-10 max-w-[120px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#042B55] group-hover:text-[#0875D1] transition-colors font-mono">
            {brand.logoText || brand.name}
          </span>
        )}
      </div>
      <span className="text-[11px] font-semibold text-slate-400 mt-2 block group-hover:text-slate-600 transition-colors truncate w-full">
        {brand.desc}
      </span>
    </div>
  );
}
