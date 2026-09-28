import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Logo({ variant = "light", className = "" }) {
  const isDarkBg = variant === "dark";
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Official MS TECH Logo Image Container */}
      {!imgError ? (
        <div className="relative w-12 h-12 rounded-2xl bg-white p-1 shadow-md shadow-[#0875D1]/15 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
          <img
            src="/logo.png"
            alt="MS TECH Logo"
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
          {/* Active status pulse indicator */}
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white animate-pulse" />
        </div>
      ) : (
        /* Fallback emblem if image fails to load */
        <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0875D1] via-[#042B55] to-[#10B981] p-0.5 shadow-md shadow-[#0875D1]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
          <div className={`w-full h-full ${isDarkBg ? "bg-[#042B55]" : "bg-white"} rounded-[14px] flex items-center justify-center overflow-hidden relative`}>
            <span className={`font-black text-lg tracking-tight z-10 transition-colors ${isDarkBg ? "text-white group-hover:text-[#7DD3FC]" : "text-[#042B55] group-hover:text-[#0875D1]"}`}>
              MS
            </span>
            <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          </div>
        </div>
      )}

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`text-2xl sm:text-[26px] font-black tracking-tight leading-none ${isDarkBg ? "text-white" : "text-[#042B55]"}`}>
            MS
          </span>
          <span className="text-2xl sm:text-[26px] font-black tracking-tight leading-none text-[#0875D1] ml-1">
            TECH
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase ${isDarkBg ? "text-[#7DD3FC]" : "text-slate-500"}`}>
            TRUSTED SERVICE HERE
          </span>
        </div>
      </div>
    </Link>
  );
}
