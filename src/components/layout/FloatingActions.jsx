import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#0875D1] text-white shadow-lg hover:bg-[#042B55] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp on Desktop */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex items-center gap-2.5 bg-[#16B95F] hover:bg-[#139E51] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="text-sm font-bold tracking-wide pr-1">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
