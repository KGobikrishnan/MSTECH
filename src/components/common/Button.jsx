import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary", // primary, whatsapp, outline, secondary, white
  size = "md", // sm, md, lg
  icon,
  iconPosition = "right",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-bold shadow-md"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#0875D1] to-[#042B55] text-white hover:from-[#1687E8] hover:to-[#063B73] shadow-[#0875D1]/25 hover:shadow-lg focus:ring-[#0875D1]",
    whatsapp: "bg-[#16B95F] hover:bg-[#139E51] text-white shadow-md shadow-[#16B95F]/20 hover:shadow-lg focus:ring-[#16B95F]",
    outline: "border-2 border-[#0875D1] text-[#0875D1] hover:bg-[#0875D1] hover:text-white focus:ring-[#0875D1]",
    secondary: "bg-[#EAF6FF] text-[#0875D1] hover:bg-[#D4EDFF] focus:ring-[#0875D1]",
    white: "bg-white text-[#042B55] hover:bg-slate-100 shadow-md focus:ring-white"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {renderContent()}
    </button>
  );
}
