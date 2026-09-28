import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Check, 
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Award,
  Cpu,
  Clock,
  ChevronRight,
  TrendingUp,
  Headphones
} from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

// 4 Core Technology Featured Tabs with Real User Images & Tech Highlights
const HERO_HARDWARE_DEVICES = [
  {
    id: "laptop",
    tabTitle: "Gaming & Laptops",
    badge: "MSI / ASUS / DELL / HP / APPLE",
    title: "High-Performance Laptops",
    subtitle: "Sales, NVMe Upgrades & Chip-Level BGA Diagnostics",
    image: "https://storage-asset.msi.com/event/2024/NB/msi-laptop-holiday-sales/images/kv-pd.png",
    statNumber: "15-30 Mins",
    statLabel: "Rapid Lab Diagnosis",
    accentColor: "#0875D1",
    tagline: "Thin & Light, Creator & RTX Gaming Laptops",
    features: ["Liquid Damage & BGA Chip Reballing", "Original FHD/OLED Display Replacement", "NVMe SSD 10x Speed Performance Upgrades"]
  },
  {
    id: "desktop",
    tabTitle: "Custom PC Builds",
    badge: "INTEL CORE & AMD RYZEN RIGS",
    title: "Custom Workstations & Gaming Rigs",
    subtitle: "Tailored Airflow, High-FPS GPUs & CAD/Accounting Systems",
    image: "https://cdn.mos.cms.futurecdn.net/2eKFdkNfo4vHcWPDQuFJ86.jpg",
    statNumber: "100% Genuine",
    statLabel: "OEM Parts & GST Bills",
    accentColor: "#10B981",
    tagline: "Custom Built for Editing, Coding & Gaming",
    features: ["Tested Thermal Repasting & Cable Management", "High-Wattage Gold SMPS Power Solutions", "Multi-Monitor High Refresh Rate Setups"]
  },
  {
    id: "printer",
    tabTitle: "Printer Care",
    badge: "HP / EPSON / CANON / BROTHER",
    title: "Laser & Ink Tank Solutions",
    subtitle: "Original Toner Refilling, Printhead Reconditioning & Network Share",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngxy8E_DG88jZrGCePLCfDZfp5VU9iUr0f-ZCubeiN3P43KoPSynyFM8M&s=10",
    statNumber: "Same Day",
    statLabel: "Laser Refill & Service",
    accentColor: "#F59E0B",
    tagline: "Low Cost Per Page & Sharp Commercial Prints",
    features: ["Continuous Ink Flow System Calibration", "Roller & Paper Jam Mechanism Overhaul", "Wireless Multi-Device Office Printing"]
  },
  {
    id: "cctv",
    tabTitle: "CCTV Security",
    badge: "HIKVISION & CP PLUS HD / IP",
    title: "Smart Security Surveillance",
    subtitle: "Color Night Vision, 4K Recorders & Live Mobile Phone Sync",
    image: "https://www.swiftechindia.in/cdn/shop/articles/2dde54cbc6fccd15051b9e7076e18f5e-removebg-preview_456498f0-2e93-4c15-87da-e69d8d3b1e3e.png?v=1739513859",
    statNumber: "24/7 Mobile",
    statLabel: "Live Stream Setup",
    accentColor: "#8B5CF6",
    tagline: "Homes, Commercial Warehouses & Stores",
    features: ["Motion Sensor Alarm & Infrared Detection", "Long Backup Hard Disk Surveillance Storage", "Statewide On-Site Installation Across TN"]
  }
];

// Happy Customers Delivery List for Dynamic Social Proof Floating Pill
const HAPPY_CUSTOMERS_PILL = [
  { img: "/person/Happy Customer/IMG_20250112_143043.webp", name: "Suresh K.", text: "Laptop chip repair delivered in 3 hours!" },
  { img: "/person/Happy Customer/20240321_131053.webp", name: "Gokul M.", text: "Fast desktop upgrade & original SSD!" },
  { img: "/person/Happy Customer/20240430_172545.webp", name: "Praveen R.", text: "Gaming PC assembly with warranty!" },
  { img: "/person/Happy Customer/IMG_20250109_205427.webp", name: "Kavitha S.", text: "Printer laser refill done in 20 mins!" }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [pillIndex, setPillIndex] = useState(0);

  // Auto rotate devices every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % HERO_HARDWARE_DEVICES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto rotate customer delivery pill every 4 seconds
  useEffect(() => {
    const pillTimer = setInterval(() => {
      setPillIndex((prev) => (prev + 1) % HAPPY_CUSTOMERS_PILL.length);
    }, 4000);
    return () => clearInterval(pillTimer);
  }, []);

  const currentDevice = HERO_HARDWARE_DEVICES[activeTab];
  const currentPill = HAPPY_CUSTOMERS_PILL[pillIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF5FF] via-[#F8FAFC] to-white text-slate-900 pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-slate-200/80">
      
      {/* High-Tech Background Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid-pattern opacity-70" />
        <div className="absolute top-10 right-10 w-[650px] h-[550px] bg-[#0875D1]/15 rounded-full blur-[150px]" />
        <div className="absolute -bottom-10 left-10 w-[550px] h-[450px] bg-[#38BDF8]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        
        {/* Top Status Strip: Guaranteed Single-Line on Mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 mb-6 sm:mb-8 border-b border-slate-200/90 text-xs">
          <div className="flex items-center gap-2 overflow-hidden w-full sm:w-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping shrink-0" />
            <span className="font-extrabold tracking-tight sm:tracking-widest uppercase text-[#0875D1] whitespace-nowrap truncate text-[10px] xs:text-[11px] sm:text-xs">
              MS TECH RASIPURAM • AUTHORIZED DIAGNOSTIC LAB
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 font-bold text-[10px] sm:text-xs">
              <MapPin className="w-3 h-3 text-[#0875D1]" />
              <span>{BUSINESS_INFO.coverage}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> GST Billing Available
            </span>
          </div>
        </div>

        {/* 2-Column Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 7-COLUMNS: High-Impact Typography, Value Prop & Live Trust Proofs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Eyebrow with Pulsing Star */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0875D1]/30 text-[#0875D1] text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0875D1] fill-current animate-pulse" />
              <span>RELIABLE SALES & TECHNICAL LAB</span>
            </div>

            {/* Giant Modern High-Tech Headline with Gradient Accents */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#042B55] leading-[1.12]">
              LAPTOP <span className="text-[#0875D1]">•</span> DESKTOP <br />
              <span className="bg-gradient-to-r from-[#0875D1] via-[#1687E8] to-[#042B55] bg-clip-text text-transparent">
                PRINTER
              </span> <span className="text-[#042B55]">•</span> CCTV
            </h1>

            {/* Sub-headline Tech Pill Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-600">
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[#042B55]">Laptop Sales & Service</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[#042B55]">Custom PC Builds</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[#042B55]">Laser Printer Care</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[#042B55]">HD CCTV Setup</span>
            </div>

            {/* Bilingual Tamil Feature Card */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-[#042B55]/5 max-w-xl w-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#0875D1] to-[#10B981]" />
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-tamil pl-2">
                {BUSINESS_INFO.tamilHeadline}
              </p>
              <div className="mt-3 pl-2 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" /> 100% Genuine Spares
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" /> Fast Turnaround
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" /> Transparent Price
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#042B55] to-[#0875D1] hover:from-[#0875D1] hover:to-[#042B55] text-white font-black text-xs sm:text-sm shadow-xl shadow-[#0875D1]/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#042B55] font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#0875D1] fill-current" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#10B981]/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Proof Live Delivery Pill (Shows real delivery photo & review) */}
            <div className="mt-6 flex items-center gap-3 p-2.5 pr-4 rounded-full bg-white border border-slate-200/90 shadow-md max-w-md animate-in fade-in duration-500">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#0875D1] shrink-0">
                <img
                  src={currentPill.img}
                  alt={currentPill.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-[#042B55]">{currentPill.name}</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">Verified Delivery</span>
                </div>
                <p className="text-[11px] text-slate-500 truncate italic">
                  "{currentPill.text}"
                </p>
              </div>
              <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xs">★</span>
                ))}
              </div>
            </div>

            {/* Store Location Landmark */}
            <div className="mt-4 flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Opp. Kannan Department Store, New Bus Stand, Rasipuram</span>
            </div>
          </div>

          {/* RIGHT 5-COLUMNS: Ultra-Modern 3D Hardware Studio Showpiece */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-5 sm:p-7 overflow-hidden group">
              
              {/* Dynamic Top Ambient Colored Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500"
                style={{ backgroundColor: currentDevice.accentColor }}
              />

              {/* 4 Category Hardware Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 rounded-2xl bg-slate-100 border border-slate-200/80 mb-5">
                {HERO_HARDWARE_DEVICES.map((dev, idx) => (
                  <button
                    key={dev.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-1 rounded-xl text-[9px] xs:text-[10px] sm:text-[11px] font-black tracking-tight text-center transition-all cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#042B55] text-white shadow-md scale-[1.03]"
                        : "text-slate-600 hover:text-[#042B55] hover:bg-white"
                    }`}
                  >
                    {dev.tabTitle.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Hardware Title & Badge */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#0875D1] block mb-0.5">
                    {currentDevice.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#042B55] leading-tight">
                    {currentDevice.title}
                  </h3>
                </div>
                
                {/* Metric Badge */}
                <div className="text-right shrink-0 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <span className="text-xs sm:text-sm font-black text-[#0875D1] block leading-none">
                    {currentDevice.statNumber}
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">
                    {currentDevice.statLabel}
                  </span>
                </div>
              </div>

              {/* 3D Hardware Display Window with Visual Depth */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-slate-900 via-[#042B55] to-slate-900 border border-slate-800 shadow-xl flex items-center justify-center p-3 group/stage">
                
                {/* Stage Lighting Halo */}
                <div
                  className="absolute inset-0 opacity-40 blur-2xl transition-colors duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${currentDevice.accentColor} 0%, transparent 70%)` }}
                />

                {/* Subtle Grid Lines */}
                <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />

                {/* Hardware Photo with 3D Float Animation */}
                <img
                  key={currentDevice.id}
                  src={currentDevice.image}
                  alt={currentDevice.title}
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-500 group-hover/stage:scale-105 transition-transform"
                />

                {/* Live Floating Guarantee Pill */}
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[10px] font-black flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>Authorized Care</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white text-[11px] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <span className="font-bold text-[#7DD3FC] truncate">{currentDevice.tagline}</span>
                  <span className="text-slate-300 font-semibold text-[10px] shrink-0">Auto: 6s</span>
                </div>
              </div>

              {/* Hardware Features Bullet Pills */}
              <div className="space-y-1.5 mb-5">
                {currentDevice.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0875D1] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services"
                  className="text-xs font-black text-[#0875D1] hover:text-[#042B55] flex items-center gap-1 transition-colors"
                >
                  <span>Explore All Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(`Hello MS Tech, I want to enquire about ${currentDevice.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-[#10B981] text-emerald-700 hover:text-white border border-emerald-200 text-xs font-black transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Get Quick Quote</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Compact Trust Indicators: 2-Column Grid on Mobile */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
            {/* 1. Trusted Service */}
            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#042B55] leading-tight">
                  Trusted Service
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Reliable, transparent solutions
                </p>
              </div>
            </div>

            {/* 2. Quality Support */}
            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#042B55] leading-tight">
                  Quality Support
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Skilled diagnostic & repairs
                </p>
              </div>
            </div>

            {/* 3. Customer Satisfaction WITH REAL HAPPY CUSTOMER PHOTOS */}
            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 relative overflow-hidden group">
              <div className="flex -space-x-3 shrink-0">
                <img
                  src="/person/Happy Customer/20240321_131053.webp"
                  alt="Happy Customer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
                <img
                  src="/person/Happy Customer/20240430_172545.webp"
                  alt="Happy Customer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
                <img
                  src="/person/Happy Customer/IMG_20250112_143043.webp"
                  alt="Happy Customer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                  <span className="text-[11px] font-black text-[#042B55] ml-1">5.0</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#042B55] leading-tight truncate">
                  Happy Customers
                </h4>
                <p className="text-xs text-slate-500 font-medium truncate">
                  Verified client deliveries
                </p>
              </div>
            </div>

            {/* 4. All Over Tamil Nadu */}
            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#042B55] leading-tight">
                  All Over Tamil Nadu
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Rasipuram base, statewide reach
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
