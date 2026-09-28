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
  Laptop, 
  Monitor, 
  Printer, 
  ShieldAlert, 
  ShieldCheck,
  Clock
} from "lucide-react";
import { BUSINESS_INFO, TRUST_INDICATORS } from "../../data/siteData";

const TECH_SOLUTIONS = [
  {
    id: "laptop",
    name: "Laptop Lab Care",
    badge: "Chip-Level Diagnostic",
    icon: Laptop,
    headline: "Display, Hinges & Motherboard Repair",
    desc: "Precision BGA chip rework, liquid damage recovery, original LED screens, and high-speed NVMe SSD speed tune-ups.",
    eta: "Same-Day Return",
    problems: ["Broken Screen Replacement", "NVMe SSD 10x Speed Upgrade", "Battery Draining Fast Fix", "No Power / Motherboard Circuit"]
  },
  {
    id: "desktop",
    name: "Custom PC Builds",
    badge: "Office & Gaming Rigs",
    icon: Monitor,
    headline: "Custom Assembly & Hardware Upgrades",
    desc: "Workstations, CAD design, accounting systems, and Intel Core / AMD Ryzen gaming rigs built with tested airflow.",
    eta: "1-2 Days",
    problems: ["No Display on Monitor Fix", "Power Supply SMPS Replacement", "RAM & Graphic Card Expansion", "Dust Cleaning & Repasting"]
  },
  {
    id: "printer",
    name: "Printer Solutions",
    badge: "LaserJet & Tank Setup",
    icon: Printer,
    headline: "Laser Cartridge & Ink Tank Servicing",
    desc: "Toner refilling, continuous ink tank calibration, paper jam mechanism repairs, and office network wireless sharing.",
    eta: "30-45 Mins",
    problems: ["Laser Toner Refills", "Paper Jam / Roller Grinding", "Printhead Ultrasonic Cleaning", "Wireless Multi-PC Setup"]
  },
  {
    id: "cctv",
    name: "CCTV Surveillance",
    badge: "Smart Security",
    icon: ShieldAlert,
    headline: "HD / IP Cameras with Mobile Streaming",
    desc: "Commercial stores, homes, and warehouses. Color night vision with remote viewing on Android & iPhone from anywhere.",
    eta: "Prompt Setup",
    problems: ["Mobile App Live Video Setup", "Hard Drive Recording Issue", "4 / 8 Channel HD Dome Setup", "CCTV Relocation & AMC"]
  }
];

// Happy Customers photo carousel list
const HAPPY_CUSTOMERS_LIST = [
  {
    image: "/person/Happy Customer/IMG_20250112_143043.webp",
    quote: "Trusted laptop servicing, prompt delivery & genuine spare parts.",
    tag: "Laptop Service Delivery",
    device: "Laptop"
  },
  {
    image: "/person/Happy Customer/20240321_131053.webp",
    quote: "Quick diagnostic turnaround and transparent component pricing.",
    tag: "Hardware Upgrade Handover",
    device: "Desktop"
  },
  {
    image: "/person/Happy Customer/20240430_172545.webp",
    quote: "Custom gaming & office PC setup delivered in perfect condition.",
    tag: "Custom PC Build Handover",
    device: "Custom PC"
  },
  {
    image: "/person/Happy Customer/IMG_20250109_205427.webp",
    quote: "Commercial printer servicing & network sharing setup done smoothly.",
    tag: "Printer Solution Handover",
    device: "Printer"
  },
  {
    image: "/person/Happy Customer/IMG_20241218_182311.webp",
    quote: "Excellent customer care and reliable warranty support in Rasipuram.",
    tag: "Verified Client Handover",
    device: "All-in-One"
  }
];

export default function Hero() {
  const [customerIdx, setCustomerIdx] = useState(0);

  // 5 seconds auto transition for Happy Customers
  useEffect(() => {
    const custTimer = setInterval(() => {
      setCustomerIdx((prev) => (prev + 1) % HAPPY_CUSTOMERS_LIST.length);
    }, 5000);
    return () => clearInterval(custTimer);
  }, []);

  const currentCustomer = HAPPY_CUSTOMERS_LIST[customerIdx];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white text-slate-900 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200/80">
      
      {/* Background Mesh & Accent Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid-pattern opacity-60" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#0875D1]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-[#E0F2FE]/70 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        
        {/* Top Status Strip: Single line on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 mb-6 sm:mb-8 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-2 overflow-hidden w-full sm:w-auto">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping shrink-0" />
            <span className="font-extrabold tracking-tight sm:tracking-widest uppercase text-[#0875D1] whitespace-nowrap truncate text-[10px] xs:text-[11px] sm:text-xs">
              MS TECH RASIPURAM • AUTHORIZED DIAGNOSTIC LAB
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 font-bold text-[10px] sm:text-xs">
              <MapPin className="w-3 h-3 text-[#0875D1]" />
              <span>{BUSINESS_INFO.coverage}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" /> GST Billing Available
            </span>
          </div>
        </div>

        {/* 2-Column Bento Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT 7-COLUMNS: Brand Hook, Headline & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0875D1]" />
              <span>RELIABLE SALES & TECHNICAL LAB</span>
            </div>

            {/* Giant Modern Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#042B55] leading-[1.15]">
              LAPTOP <span className="text-[#0875D1]">•</span> DESKTOP <br />
              <span className="text-[#0875D1]">PRINTER</span> <span className="text-[#042B55]">•</span> CCTV
            </h1>

            {/* Tagline Row */}
            <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Sales</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Service</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Installation</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Support</span>
            </div>

            {/* Bilingual Tamil Feature Card */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md max-w-xl w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0875D1]" />
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-tamil pl-2">
                {BUSINESS_INFO.tamilHeadline}
              </p>
              <div className="mt-3 pl-2 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" /> 100% Genuine Spares
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" /> Fast Turnaround
                </span>
                <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" /> Transparent Price
                </span>
              </div>
            </div>

            {/* Conversion Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              <Link
                to="/services"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#042B55] to-[#0875D1] hover:from-[#0875D1] hover:to-[#042B55] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#0875D1]/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#042B55] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#0875D1] fill-current" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Store Location Landmark */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Opp. Kannan Department Store, New Bus Stand, Rasipuram</span>
            </div>
          </div>

          {/* RIGHT 5-COLUMNS: Real Happy Customers Delivery Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-slate-200 shadow-xl overflow-hidden group">
              
              {/* Blue Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#042B55] via-[#0875D1] to-[#10B981]" />

              {/* Header: Verified Customer Deliveries */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#0875D1] block">
                      Real Store Deliveries
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#042B55] leading-tight">
                      Happy Customers
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-black">
                  <span>★</span>
                  <span>5.0 / 5.0 Rating</span>
                </div>
              </div>

              {/* Main Featured Customer Delivery Image (Changes every 5 seconds) */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-4 border border-slate-200/90 shadow-inner bg-slate-900 group/img">
                <img
                  key={customerIdx}
                  src={currentCustomer.image}
                  alt="MS TECH Happy Customer Delivery in Rasipuram"
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/90 via-[#042B55]/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#042B55]/90 text-white text-[10px] font-extrabold backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>{currentCustomer.tag}</span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 text-white text-[9px] font-bold">
                  {customerIdx + 1} / {HAPPY_CUSTOMERS_LIST.length}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-snug">
                    "{currentCustomer.quote}"
                  </p>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-[#7DD3FC]">
                    <span className="font-semibold">100% Verified Customer Experience</span>
                    <span className="text-slate-300 font-medium">Auto: 5s</span>
                  </div>
                </div>
              </div>

              {/* Happy Customer Thumbnails Strip (Clickable to switch immediately) */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {HAPPY_CUSTOMERS_LIST.slice(0, 4).map((cust, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCustomerIdx(idx)}
                    className={`relative rounded-xl overflow-hidden border aspect-4/3 transition-all cursor-pointer ${
                      customerIdx === idx
                        ? "border-[#0875D1] ring-2 ring-[#0875D1]/40 scale-105 shadow-md"
                        : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={cust.image}
                      alt={cust.device}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 left-1 px-1 py-0.2 rounded bg-black/60 text-[8px] text-white font-bold truncate max-w-[90%]">
                      {cust.device}
                    </div>
                  </button>
                ))}
              </div>

              {/* Bottom Quick Testimonial Link & WhatsApp */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/reviews"
                  className="text-xs font-bold text-[#0875D1] hover:underline flex items-center gap-1"
                >
                  <span>View All Customer Reviews</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent("Hello MS Tech, I would like to enquire about your services and customer delivery.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-[#10B981] text-emerald-700 hover:text-white border border-emerald-200 text-xs font-bold transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Compact Trust Indicators with Happy Customers Real Showcase */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {/* 1. Trusted Service */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3 sm:gap-4">
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
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3 sm:gap-4">
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
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden group">
              <div className="flex -space-x-3 shrink-0">
                <img
                  src="/person/Happy Customer/20240321_131053.webp"
                  alt="Happy Customer"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
                <img
                  src="/person/Happy Customer/20240430_172545.webp"
                  alt="Happy Customer"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
                <img
                  src="/person/Happy Customer/IMG_20250112_143043.webp"
                  alt="Happy Customer"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm group-hover:scale-105 transition-transform"
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
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3 sm:gap-4">
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
