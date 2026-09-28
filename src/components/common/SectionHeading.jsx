import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center", // center, left
  color = "dark", // dark, light
  className = ""
}) {
  const isCenter = align === "center";
  const isLight = color === "light";

  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center mx-auto" : "items-start text-left"} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0875D1]/10 border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold tracking-wider uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0875D1]" />
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${isLight ? "text-white" : "text-[#042B55]"}`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base lg:text-lg font-normal ${isLight ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}

      {/* Modern Accent Bar */}
      <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#0875D1] to-[#1687E8] ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}
