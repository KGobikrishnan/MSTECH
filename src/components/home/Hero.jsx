import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Laptop, 
  Camera, 
  Printer 
} from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const HERO_SLIDES = [
  {
    id: "omen-gaming",
    badge: "HP & ASUS AUTHORIZED SALES",
    accentKicker: "GAMING BEASTS · RT-SERIES",
    titleHighlight: "HP OMEN",
    titleSub: "PREMIUM LINE OF GAMING LAPTOPS",
    description: "High-refresh rate display, NVIDIA GeForce RTX graphics, liquid thermal management & factory-sealed warranty.",
    ctaText: "Shop Now ↗",
    ctaLink: "/services/laptop",
    whatsappQuery: "Hi MS TECH, I am interested in buying an HP Omen / Victus / Gaming Laptop with warranty. Please share pricing and specs.",
    bgTheme: "from-[#0F172A] via-[#1E1B4B] to-[#0A0F1D]",
    accentGradient: "from-[#EC4899] via-[#EF4444] to-[#F59E0B]",
    accentColor: "#EF4444",
    productImage: "https://storage-asset.msi.com/event/2024/NB/msi-laptop-holiday-sales/images/kv-pd.png",
    specs: ["144Hz - 240Hz", "NVIDIA RTX 40-Series", "Gen4 NVMe 1TB", "Official Warranty"]
  },
  {
    id: "custom-pc",
    badge: "ALL-INDIA SAFE COURIER",
    accentKicker: "ENGINEERED FOR POWER",
    titleHighlight: "CUSTOM PC",
    titleSub: "GAMING, 4K EDITING & WORKSTATIONS",
    description: "Tailored to your budget (₹20,000 to ₹2L+). Intel Core & AMD Ryzen platforms with 24-hr stress testing & wooden-crate safe delivery.",
    ctaText: "Build Dream PC ↗",
    ctaLink: "/services/desktop",
    whatsappQuery: "Hi MS TECH, I want to build a Custom PC. My budget is around ₹______ for Gaming/Editing. Please share best build specs.",
    bgTheme: "from-[#042B55] via-[#06386C] to-[#02182F]",
    accentGradient: "from-[#38BDF8] via-[#0875D1] to-[#6366F1]",
    accentColor: "#38BDF8",
    productImage: "/pc.jpeg",
    specs: ["Intel Core / Ryzen", "RTX & Radeon", "Liquid Cooling", "Wooden Crate"]
  },
  {
    id: "brand-new-laptops",
    badge: "TOP BRANDS WITH WARRANTY",
    accentKicker: "COLLEGE · OFFICE · CODING",
    titleHighlight: "NEW LAPTOPS",
    titleSub: "DELL, HP, LENOVO, ASUS & ACER",
    description: "Factory sealed brand new laptops for students & professionals. Pre-configured with genuine Windows, Office & free essentials.",
    ctaText: "Shop Laptops ↗",
    ctaLink: "/services/laptop",
    whatsappQuery: "Hi MS TECH, I am looking to buy a Brand New Laptop for Office/Study. Please share today's models & offer pricing.",
    bgTheme: "from-[#064E3B] via-[#065F46] to-[#022C22]",
    accentGradient: "from-[#34D399] via-[#10B981] to-[#059669]",
    accentColor: "#34D399",
    productImage: "/laptop.jpeg",
    specs: ["Factory Sealed", "Brand Warranty", "Genuine Windows", "Express Delivery"]
  },
  {
    id: "chip-level-service",
    badge: "16+ YEARS MASTERY",
    accentKicker: "RASIPURAM'S TRUSTED LAB",
    titleHighlight: "CHIP SERVICE",
    titleSub: "LAPTOP, DESKTOP, PRINTER & CCTV",
    description: "Micro-soldering, motherboard dead fix, screen replacement & same-day turnaround. 5.0 Google Rated service across Tamil Nadu.",
    ctaText: "Book Repair ↗",
    ctaLink: "/contact",
    whatsappQuery: "Hi MS TECH, I need urgent chip-level repair / service for my laptop / desktop. Please help.",
    bgTheme: "from-[#18181B] via-[#27272A] to-[#09090B]",
    accentGradient: "from-[#F59E0B] via-[#D97706] to-[#B45309]",
    accentColor: "#F59E0B",
    productImage: "/office/20240215_201713.webp",
    specs: ["Same-Day Fix", "Genuine Spares", "Micro-Soldering", "5.0 Rating"]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide every 5.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = HERO_SLIDES[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      className="relative overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgTheme}`}
        >
          {/* Subtle Ambient Mesh Orbs */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none" style={{ backgroundColor: slide.accentColor }} />
          <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-[130px] opacity-20 pointer-events-none" style={{ backgroundColor: slide.accentColor }} />
          
          {/* Tech Angular Accent Polygons (Exact HP OMEN Red/Coral triangles from screenshot) */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -right-8 w-44 sm:w-72 h-44 sm:h-72 pointer-events-none opacity-80"
            style={{
              clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
              background: `linear-gradient(135deg, ${slide.accentColor}, #BE123C)`
            }}
          />
          <div 
            className="absolute -bottom-10 left-0 w-36 sm:w-60 h-36 sm:h-60 pointer-events-none opacity-80"
            style={{
              clipPath: "polygon(0 0, 0 100%, 100% 100%)",
              background: `linear-gradient(135deg, ${slide.accentColor}, #BE123C)`
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ========================================================
          MOBILE VIEW: Exact 16:9 Clean Aspect Ratio Banner (HP OMEN style)
          ======================================================== */}
      <div className="lg:hidden relative z-10 w-full max-w-[560px] mx-auto px-2.5 pt-2 pb-3">
        {/* Aspect Ratio Box (16 / 9) */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-md shadow-2xl flex flex-col justify-between p-3.5 sm:p-5">
          
          {/* Top Info Bar inside 16:9 container */}
          <div className="flex items-center justify-between text-[10px] font-bold">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-white tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {slide.badge}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <span>★ 5.0</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300">MS TECH</span>
            </div>
          </div>

          {/* Center Stage: Exact HP OMEN Typography from User's Screenshot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="text-center my-auto flex flex-col items-center justify-center px-1"
            >
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none uppercase">
                <span className={`block bg-gradient-to-r ${slide.accentGradient} bg-clip-text text-transparent drop-shadow-sm`}>
                  {slide.titleHighlight}
                </span>
              </h1>
              
              <h2 className="text-[11px] sm:text-xs font-black tracking-widest text-white uppercase mt-1 max-w-[280px] leading-tight">
                {slide.titleSub}
              </h2>

              {/* Exact Screenshot Button Style: White Box + Black Font + Arrow */}
              <div className="mt-2.5 sm:mt-3 flex items-center justify-center gap-2">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(slide.whatsappQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-md bg-white hover:bg-slate-100 text-slate-900 font-black text-xs shadow-lg transition-transform active:scale-95 inline-flex items-center gap-1.5"
                >
                  <span>{slide.ctaText}</span>
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(slide.whatsappQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-md bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs shadow-md transition-transform active:scale-95 inline-flex items-center gap-1"
                >
                  <MessageCircle size={13} className="fill-current" />
                  <span className="text-[10px]">Quote</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Slider Indicators inside 16:9 box */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? "w-6 h-1.5 bg-white shadow-sm"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================
          DESKTOP & TABLET VIEW: Expansive Banner with Rich Detail
          ======================================================== */}
      <div className="hidden lg:flex max-w-[1536px] mx-auto px-6 lg:px-12 pt-8 pb-14 lg:pt-14 lg:pb-16 relative z-10 min-h-[640px] flex-col justify-between">
        
        {/* Top Floating Trust Indicators */}
        <div className="flex items-center justify-between text-xs mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-extrabold tracking-wider uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {slide.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold">
              <Truck size={13} className="text-emerald-400" /> All-India Courier & Rasipuram Store
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <div className="flex items-center text-amber-400 text-sm">
              {"★".repeat(5)}
            </div>
            <span className="font-extrabold text-white text-xs">5.0 Rating</span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300 text-xs font-semibold">16+ Yrs Mastery</span>
          </div>
        </div>

        {/* Slide Content Grid: Left Text + Right Device Art */}
        <div className="grid grid-cols-12 gap-12 items-center flex-1">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                {/* Kicker Tag */}
                <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase mb-2" style={{ color: slide.accentColor }}>
                  <Sparkles size={14} />
                  <span>{slide.accentKicker}</span>
                </div>

                {/* Big Bold Headline with Gradient Highlight */}
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase">
                  <span className={`block bg-gradient-to-r ${slide.accentGradient} bg-clip-text text-transparent`}>
                    {slide.titleHighlight}
                  </span>
                  <span className="block text-white text-3xl lg:text-5xl mt-1 tracking-tight font-extrabold">
                    {slide.titleSub}
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
                  {slide.description}
                </p>

                {/* Key Specs Pills */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {slide.specs.map((spec, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-slate-200"
                    >
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Dual Action CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(slide.whatsappQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#042B55] hover:bg-slate-100 font-black text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(slide.whatsappQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-base shadow-xl shadow-[#10B981]/25 hover:scale-105 active:scale-95 transition-all"
                  >
                    <MessageCircle size={18} className="fill-current" />
                    <span>WhatsApp Quote</span>
                  </a>

                  <Link
                    to={slide.ctaLink}
                    className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Visual Showcase Device Card with Dynamic Imagery */}
          <div className="col-span-5 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full relative"
              >
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-2xl overflow-hidden group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                      MS TECH SHOWCASE
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white/10 text-emerald-400 border border-white/15">
                      Verified Genuine
                    </span>
                  </div>

                  <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 flex items-center justify-center p-4">
                    <img
                      src={slide.productImage}
                      alt={slide.titleHighlight}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-10 px-2 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                      <span className="font-bold flex items-center gap-1.5 text-emerald-300">
                        <ShieldCheck size={14} /> Full Warranty
                      </span>
                      <span className="text-slate-300 text-[11px]">
                        Doorstep Delivery
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold">{slide.titleHighlight}</span>
                    <Link to={slide.ctaLink} className="text-white font-bold hover:underline flex items-center gap-1">
                      <span>View Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Navigation: Slider Dots & Next/Prev Controls */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === index
                    ? "w-8 h-2.5 bg-white shadow-lg"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="text-[11px] text-slate-400 font-bold ml-2">
              {currentSlide + 1} / {HERO_SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
            <Link to="/services/laptop" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Laptop size={14} className="text-[#38BDF8]" /> Laptops
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/services/desktop" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Cpu size={14} className="text-emerald-400" /> Custom PC
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/services/printer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Printer size={14} className="text-amber-400" /> Printers
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/services/cctv" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Camera size={14} className="text-rose-400" /> CCTV
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
