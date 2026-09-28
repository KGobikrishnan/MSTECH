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

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const current = TECH_SOLUTIONS[activeTab];
  const IconComp = current.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TECH_SOLUTIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (issue) => {
    const text = `Hi MS TECH, I need assistance for:
- Service: ${current.name}
- Problem: ${issue || current.headline}
- Location: Rasipuram / Tamil Nadu

Please provide quick estimate & availability.`;
    return `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white text-slate-900 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200/80">
      
      {/* Background Mesh & Accent Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid-pattern opacity-60" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#0875D1]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-[#E0F2FE]/70 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        
        {/* Top Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-extrabold tracking-widest uppercase text-[#0875D1]">
              MS TECH RASIPURAM • AUTHORIZED DIAGNOSTIC LAB
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700 font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#0875D1]" />
              <span>{BUSINESS_INFO.coverage}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
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

              {/* Main Featured Customer Delivery Image */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-4 border border-slate-200/90 shadow-inner bg-slate-900 group/img">
                <img
                  src="/person/Happy Customer/IMG_20250112_143043.webp"
                  alt="MS TECH Happy Customer Delivery in Rasipuram"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/85 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#042B55]/90 text-white text-[10px] font-extrabold backdrop-blur-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>Rasipuram Store Handover</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-snug">
                    "Trusted laptop servicing, prompt delivery & genuine spare parts."
                  </p>
                  <span className="text-[10px] text-[#7DD3FC] font-semibold">
                    100% Verified Customer Experience
                  </span>
                </div>
              </div>

              {/* Secondary Happy Customer Thumbnails Strip */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-4/3 group/thumb">
                  <img
                    src="/person/Happy Customer/20240321_131053.webp"
                    alt="Customer Handover"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-white font-bold">
                    Laptop
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-4/3 group/thumb">
                  <img
                    src="/person/Happy Customer/20240430_172545.webp"
                    alt="Customer Handover"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-white font-bold">
                    Desktop
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-4/3 group/thumb">
                  <img
                    src="/person/Happy Customer/IMG_20250109_205427.webp"
                    alt="Customer Handover"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-white font-bold">
                    Printer & PC
                  </div>
                </div>
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
