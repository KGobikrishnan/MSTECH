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
  Printer,
  Wrench,
  Check,
  Star,
  MapPin,
  Clock,
  ExternalLink
} from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const SHOWCASE_PRODUCTS = [
  {
    id: "omen-gaming",
    badge: "HP & ASUS AUTHORIZED",
    category: "Gaming Beasts",
    title: "HP OMEN & VICTUS",
    subtitle: "RTX 40-Series Gaming Laptops",
    description: "High refresh-rate 144Hz–240Hz IPS displays, NVIDIA Ada Lovelace graphics, Tempest cooling & factory-sealed official brand warranty.",
    tags: ["RTX 4060/4070", "144Hz–240Hz", "1TB Gen4 NVMe", "Brand Warranty"],
    priceTag: "Starting ₹54,990",
    image: "https://storage-asset.msi.com/event/2024/NB/msi-laptop-holiday-sales/images/kv-pd.png",
    accentGradient: "from-rose-500 to-amber-500",
    glowColor: "rgba(244, 63, 94, 0.15)",
    borderHover: "hover:border-rose-400/50",
    link: "/services/laptop",
    whatsappMsg: "Hi MS TECH, I'm interested in buying an HP OMEN / Gaming Laptop with warranty. Please share current stock, specs and best offer price."
  },
  {
    id: "custom-pc",
    badge: "ALL-INDIA COURIER",
    category: "Custom Rig Builder",
    title: "CUSTOM RIG BUILDS",
    subtitle: "Gaming, 4K Editing & Workstations",
    description: "Tailored to your exact budget (₹20,000 to ₹2,50,000+). Intel Core & AMD Ryzen platforms, dual 24-hr load testing & wooden crate safe shipping.",
    tags: ["Intel Core / Ryzen", "RTX & RX GPUs", "Custom ARGB / AIO", "Wooden Crate"],
    priceTag: "Build from ₹20,000",
    image: "/pc.jpeg",
    accentGradient: "from-[#0875D1] to-sky-400",
    glowColor: "rgba(8, 117, 209, 0.15)",
    borderHover: "hover:border-[#0875D1]/50",
    link: "/services/desktop",
    whatsappMsg: "Hi MS TECH, I want to build a Custom Desktop PC. My budget is around ₹______ for (Gaming / Video Editing / Office). Please suggest the best configuration."
  },
  {
    id: "brand-new-laptops",
    badge: "SEALED BOX PIECES",
    category: "Brand New Laptops",
    title: "DELL, HP, ASUS & LENOVO",
    subtitle: "Official Factory Warranty Included",
    description: "Genuine laptops for students, IT coders & corporate teams. 100% factory-sealed with official manufacturer warranty, pre-loaded Windows & Office.",
    tags: ["Factory Sealed", "Brand Warranty", "Original OS", "Free Essentials"],
    priceTag: "Direct Authorized Spares",
    image: "/laptop.jpeg",
    accentGradient: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
    borderHover: "hover:border-emerald-400/50",
    link: "/services/laptop",
    whatsappMsg: "Hi MS TECH, I am looking to buy a Brand New Laptop with official brand warranty. Please share today's models & prices."
  },
  {
    id: "chip-level-lab",
    badge: "16+ YEARS EXPERTISE",
    category: "Rasipuram Lab",
    title: "CHIP-LEVEL SERVICE",
    subtitle: "Dead Board Fix & BGA Micro-Soldering",
    description: "Motherboard repair, broken hinges, display replacements, liquid damage restoration and high-speed SSD/RAM upgrades done in 2–4 hours.",
    tags: ["Same-Day Turnaround", "Micro-Soldering", "Dead Board Revival", "5.0 Google Rating"],
    priceTag: "Free Quick Diagnosis",
    image: "/office/20240215_201713.webp",
    accentGradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
    borderHover: "hover:border-amber-400/50",
    link: "/services/laptop",
    whatsappMsg: "Hi MS TECH, I need urgent chip-level service for my Laptop / Desktop / Printer. Please provide diagnosis and repair quote."
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto rotate tabs every 6 seconds if not hovered
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeProduct = SHOWCASE_PRODUCTS[activeTab];

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FA] via-[#F8FAFC] to-[#FFFFFF] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/70"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Subtle Background Mesh & Geometry */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#0875D1]/10 via-[#38BDF8]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#042B55 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Top Trust & Kicker Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-slate-200/70">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Live Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-700 text-xs font-black tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Store Open · 9:30 AM – 8:30 PM
            </span>

            {/* Courier Banner */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4FE] border border-[#0875D1]/30 text-[#0875D1] text-xs font-extrabold tracking-wide shadow-xs">
              <Truck size={14} className="text-[#0875D1]" />
              Safe Pan-India Courier & Rasipuram Walk-in
            </span>
          </div>

          {/* Social Proof */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-current text-amber-400" />
              ))}
            </div>
            <span className="font-black text-[#042B55]">5.0 Rating</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-semibold">120+ Google Reviews</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#0875D1] font-bold">16+ Yrs Experience</span>
          </div>
        </div>

        {/* ========================================================
            MAIN HERO SECTION: Clean Light Design with Dynamic Product Showcase
            ======================================================== */}
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: Editorial Pitch & High-Converting CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-[#0875D1] mb-3">
              <Sparkles size={15} className="text-[#0875D1]" />
              <span>RASIPURAM'S PREMIER COMPUTER & LAPTOP CARE CENTER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[#042B55] leading-[1.12]">
              Custom PC Builds,{" "}
              <span className="bg-gradient-to-r from-[#0875D1] via-[#1687E8] to-[#042B55] bg-clip-text text-transparent">
                Brand New Laptops
              </span>{" "}
              & Chip-Level Service.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Specialized in high-performance custom gaming & workstation PCs, factory-sealed brand new laptops with official warranty, and precision micro-soldering motherboard repairs by technician Manikandan with 16+ years of field mastery.
            </p>

            {/* Trust Checklist Badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-2.5 max-w-xl text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>All-India Safe Courier Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Brand New Laptops with Warranty</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Custom Builds (₹20k – ₹2.5L+)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Same-Day Chip-Level Diagnostics</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* WhatsApp Lead Button */}
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(activeProduct.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <MessageCircle size={19} className="fill-current" />
                <span>WhatsApp Quote for {activeProduct.category}</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>

              {/* Instant Cost Estimator CTA */}
              <a
                href="#service-estimator"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#042B55] border-2 border-slate-200 hover:border-[#0875D1] font-extrabold text-sm sm:text-base shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Instant Cost Estimator</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
                title="Call MS TECH directly"
              >
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Physical Location Anchor */}
            <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
              <MapPin size={16} className="text-[#0875D1] shrink-0" />
              <span>Opp. Kannan Department Store, New Bus Stand, Rasipuram, Namakkal (637408)</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Product Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-4 sm:p-6 overflow-hidden">
              
              {/* Card Ambient Header Glow */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeProduct.glowColor }}
              />

              {/* Interactive Tabs Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0875D1]" />
                  <span className="text-xs font-black tracking-wider uppercase text-slate-700">
                    MS TECH SHOWCASE
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab((prev) => (prev - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length)}
                    aria-label="Previous showcase"
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length)}
                    aria-label="Next showcase"
                    className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Tab Selector Pills */}
              <div className="relative z-10 grid grid-cols-4 gap-1 sm:gap-1.5 my-3.5 bg-slate-100/80 p-1 rounded-xl">
                {SHOWCASE_PRODUCTS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-1.5 px-2 rounded-lg text-[10px] sm:text-xs font-extrabold transition-all cursor-pointer text-center truncate ${
                      activeTab === idx
                        ? "bg-white text-[#042B55] shadow-sm font-black"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {item.category.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Active Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {/* Badge & Category Row */}
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] sm:text-[11px] font-black text-slate-700 tracking-wider uppercase">
                      <Sparkles size={11} className="text-[#0875D1]" />
                      {activeProduct.badge}
                    </span>
                    <span className="text-[11px] font-extrabold text-[#0875D1]">
                      {activeProduct.priceTag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-3 text-xl sm:text-2xl font-black text-[#042B55] tracking-tight leading-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">
                    {activeProduct.subtitle}
                  </p>

                  {/* Dynamic Product Visual Box */}
                  <div className="relative my-4 w-full h-44 sm:h-52 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/80 border border-slate-200/80 flex items-center justify-center p-3 overflow-hidden group">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      loading="eager"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] text-slate-700 font-bold shadow-xs">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <ShieldCheck size={14} /> 100% Genuine
                      </span>
                      <span className="text-slate-500 text-[10px]">
                        Doorstep / Walk-in
                      </span>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {activeProduct.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-700 border border-slate-200/60"
                      >
                        <Check size={11} className="text-emerald-500" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom CTA Row */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-2.5">
                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(activeProduct.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0875D1] hover:bg-[#0662B0] text-white font-extrabold text-xs shadow-md shadow-[#0875D1]/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={15} className="fill-current" />
                      <span>Inquire This Item</span>
                    </a>

                    <Link
                      to={activeProduct.link}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#042B55] font-extrabold text-xs active:scale-95 transition-all flex items-center justify-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {SHOWCASE_PRODUCTS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    aria-label={`Showcase slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeTab === index
                        ? "w-6 h-1.5 bg-[#0875D1]"
                        : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Quick Category Jump Bar at bottom of Hero */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <Link
            to="/services/laptop"
            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0875D1] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EBF4FE] text-[#0875D1] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Laptop size={20} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-extrabold text-[#042B55] truncate group-hover:text-[#0875D1]">
                Brand New Laptops
              </span>
              <span className="block text-[11px] text-slate-500 font-semibold truncate">
                Sales & Chip Service
              </span>
            </div>
          </Link>

          <Link
            to="/services/desktop"
            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0875D1] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Cpu size={20} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-extrabold text-[#042B55] truncate group-hover:text-[#0875D1]">
                Custom PC Builds
              </span>
              <span className="block text-[11px] text-slate-500 font-semibold truncate">
                Gaming & Workstations
              </span>
            </div>
          </Link>

          <Link
            to="/services/printer"
            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0875D1] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Printer size={20} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-extrabold text-[#042B55] truncate group-hover:text-[#0875D1]">
                Printer Services
              </span>
              <span className="block text-[11px] text-slate-500 font-semibold truncate">
                Laser, Tank & Toner
              </span>
            </div>
          </Link>

          <Link
            to="/services/cctv"
            className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0875D1] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Camera size={20} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-extrabold text-[#042B55] truncate group-hover:text-[#0875D1]">
                CCTV Security
              </span>
              <span className="block text-[11px] text-slate-500 font-semibold truncate">
                Setup & Remote View
              </span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
