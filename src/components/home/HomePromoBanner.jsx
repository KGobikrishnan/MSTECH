import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

import b1 from "../../assets/banner/b1.png";
import b2 from "../../assets/banner/b2.png";
import b3 from "../../assets/banner/b3.png";
import b4 from "../../assets/banner/b4.png";

const BANNERS = [
  {
    id: "banner-1",
    image: b1,
    alt: "MS TECH Rasipuram Featured Promotion 1",
    whatsappText: "Hi MS TECH, I saw your banner on the website and want to know more details and current offers."
  },
  {
    id: "banner-2",
    image: b2,
    alt: "MS TECH Rasipuram Featured Promotion 2",
    whatsappText: "Hi MS TECH, I am interested in the services/products shown in your banner offer. Please share details."
  },
  {
    id: "banner-3",
    image: b3,
    alt: "MS TECH Rasipuram Featured Promotion 3",
    whatsappText: "Hi MS TECH, please share more details about your latest offers and pricing."
  },
  {
    id: "banner-4",
    image: b4,
    alt: "MS TECH Rasipuram Featured Promotion 4",
    whatsappText: "Hi MS TECH, I would like to enquire about your laptop/PC sales and repair services."
  }
];

export default function HomePromoBanner({ className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextBanner = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  const current = BANNERS[currentIndex];

  return (
    <section 
      className={`py-4 sm:py-6 lg:py-8 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Banner Container with strict 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-200/90 bg-slate-900 group">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(current.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer relative"
                title="Click to WhatsApp MS TECH about this offer"
              >
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />

                {/* Subtle Hover Gradient for interaction hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-6 lg:p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-white/20">
                    <MessageCircle size={16} className="text-[#10B981] fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevBanner}
            aria-label="Previous Banner"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-lg opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer z-10 active:scale-95"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextBanner}
            aria-label="Next Banner"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-lg opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer z-10 active:scale-95"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
            {BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white shadow-sm"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
