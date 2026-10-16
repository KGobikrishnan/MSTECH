import React, { useState, useEffect } from "react";
import { MessageCircle, Cpu, Laptop, Sparkles, X, ChevronRight } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

export default function MobileLeadPill() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  const messages = [
    {
      badge: "PC Building",
      icon: Cpu,
      title: "Custom Gaming & Office PC Builds",
      subtitle: "Get specs & price quote • All-India shipping",
      queryText: "Hi MS TECH, I am looking for a Custom PC build. Please share specs and price quotation."
    },
    {
      badge: "2nd Hand Stock",
      icon: Laptop,
      title: "Certified 2nd Hand Laptops Available",
      subtitle: "Starting ₹14,999 • 30+ QA tested with warranty",
      queryText: "Hi MS TECH, I am looking to buy a verified 2nd hand / refurbished laptop. Please share today's ready stock and prices."
    }
  ];

  // Show after scrolling a little or after 2.5 seconds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && !isDismissed) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 2800);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed]);

  // Alternate message every 4 seconds to show both PC build and Refurbished Laptops
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [messages.length]);

  if (!isVisible || isDismissed) return null;

  const currentMsg = messages[activeMessageIndex];
  const IconComp = currentMsg.icon;

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(currentMsg.queryText)}`;

  return (
    <aside
      aria-label="Quick Stock & Custom PC Notification"
      className="lg:hidden fixed bottom-[68px] left-3 right-3 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="relative bg-gradient-to-r from-[#042B55] via-[#063F7B] to-[#0875D1] text-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-white/20 backdrop-blur-xl flex items-center justify-between gap-3 overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl pointer-events-none" />

        {/* Clickable Lead Trigger */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center gap-2.5 min-w-0"
        >
          {/* Animated Glowing Icon */}
          <div className="relative w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
            <IconComp className="w-5 h-5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>

          {/* Text Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {currentMsg.badge}
              </span>
              <span className="text-[10px] text-[#7DD3FC] font-semibold">● Live Enquiries</span>
            </div>
            <p className="text-xs font-bold text-white truncate mt-0.5">
              {currentMsg.title}
            </p>
            <p className="text-[10px] text-slate-200 truncate flex items-center gap-1">
              <span>{currentMsg.subtitle}</span>
            </p>
          </div>

          {/* WhatsApp Action Button */}
          <div className="shrink-0 flex items-center gap-1 bg-[#10B981] hover:bg-[#059669] text-white px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold shadow-md active:scale-95 transition-transform">
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Chat</span>
          </div>
        </a>

        {/* Dismiss Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center shrink-0 border border-white/10"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
}
