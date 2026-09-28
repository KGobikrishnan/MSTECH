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
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#042B55] leading-[1.12]">
              LAPTOP <span className="text-[#0875D1]">•</span> DESKTOP <br />
              <span className="text-[#0875D1]">PRINTER</span> <span className="text-[#042B55]">•</span> CCTV
            </h1>

            {/* Tagline Row */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Sales</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Service</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Installation</span>
              <span className="text-[#0875D1]">•</span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs">Support</span>
            </div>

            {/* Bilingual Tamil Feature Card */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md max-w-xl w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0875D1]" />
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-tamil pl-2">
                {BUSINESS_INFO.tamilHeadline}
              </p>
              <div className="mt-3 pl-2 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600">
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
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#042B55] to-[#0875D1] hover:from-[#0875D1] hover:to-[#042B55] text-white font-bold text-sm shadow-lg shadow-[#0875D1]/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#042B55] font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#0875D1] fill-current" />
                <span>Call Store</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/25 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Store Location Landmark */}
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Opp. Kannan Department Store, New Bus Stand, Rasipuram</span>
            </div>
          </div>

          {/* RIGHT 5-COLUMNS: Interactive Hardware Diagnostic Monitor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-xl overflow-hidden group">
              
              {/* Blue Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#042B55] via-[#0875D1] to-[#10B981]" />

              {/* 4 Category Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1.5 mb-6 p-1 rounded-xl bg-slate-100 border border-slate-200/80">
                {TECH_SOLUTIONS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-1 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-tight text-center transition-all cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#0875D1] text-white shadow-md shadow-[#0875D1]/30 scale-[1.02]"
                        : "text-slate-600 hover:text-[#042B55] hover:bg-white"
                    }`}
                  >
                    {item.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Live Diagnostic Status Card */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF6FF] border border-[#0875D1]/20 flex items-center justify-center text-[#0875D1] shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#0875D1] block">
                      {current.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#042B55] leading-tight">
                      {current.name}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  {current.eta}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {current.desc}
              </p>

              {/* Direct Problem Solution Picker */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Click your issue to get instant WhatsApp quote:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.problems.map((problem, idx) => (
                    <a
                      key={idx}
                      href={handleWhatsApp(problem)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-[#EAF6FF] border border-slate-200/90 hover:border-[#0875D1]/40 transition-all text-left flex items-center justify-between text-xs text-slate-700 group/prob cursor-pointer"
                    >
                      <span className="truncate pr-1 font-semibold">{problem}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/prob:text-[#0875D1] group-hover/prob:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Lab Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Need custom assistance?
                </span>
                <a
                  href={handleWhatsApp("Custom Requirement")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0875D1] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Compact Trust Indicators */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {TRUST_INDICATORS.map((indicator, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3 sm:gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#042B55] leading-tight">
                    {indicator.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium hidden sm:block">
                    {indicator.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
