import React, { useState } from "react";
import { Calculator, MessageCircle, ArrowRight, CheckCircle2, Sparkles, Wrench, ShieldCheck, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const SERVICE_OPTIONS = [
  {
    id: "laptop",
    label: "Laptop Repair",
    issues: [
      { id: "display", label: "Broken Display / Screen Lines", eta: "2-4 Hours", note: "Genuine OEM Screen Replacement" },
      { id: "ssd", label: "System Very Slow / SSD Upgrade", eta: "1-2 Hours", note: "Supercharge boot & app speed with NVMe SSD" },
      { id: "battery", label: "Battery Draining / Dead", eta: "Same Day", note: "Original brand battery with warranty" },
      { id: "os", label: "OS Crash / Boot Loop / Virus", eta: "1-2 Hours", note: "Clean OS installation with data backup" },
      { id: "chip", label: "No Power / Motherboard Issue", eta: "24-48 Hours", note: "Chip-level circuit diagnostics & repair" }
    ]
  },
  {
    id: "desktop",
    label: "Custom PC & Desktop",
    issues: [
      { id: "custom_build", label: "New Custom PC (Office / Gaming)", eta: "1-2 Days", note: "Custom assembly tailored to your budget" },
      { id: "no_display", label: "PC Turns On but No Display", eta: "Same Day", note: "RAM/GPU/Motherboard test & fix" },
      { id: "smps", label: "Power Supply (SMPS) Failure", eta: "Same Day", note: "Certified power supply replacement" },
      { id: "tuneup", label: "Deep Cleaning & Thermal Repasting", eta: "2 Hours", note: "Improves cooling and stops sudden shutdown" }
    ]
  },
  {
    id: "printer",
    label: "Laser & Inkjet Printer",
    issues: [
      { id: "toner", label: "Toner Refill / Cartridge Issue", eta: "30-45 Mins", note: "High yield black & color toner refill" },
      { id: "jam", label: "Paper Jam & Roller Sound", eta: "Same Day", note: "Mechanism inspection & roller replacement" },
      { id: "head", label: "Faded Print / Streaks / Lines", eta: "Same Day", note: "Printhead ultrasonic cleaning & alignment" },
      { id: "wifi", label: "Office Network / Wi-Fi Setup", eta: "Same Day", note: "Connect all computers to single printer" }
    ]
  },
  {
    id: "cctv",
    label: "CCTV Surveillance",
    issues: [
      { id: "home_4ch", label: "Home 4-Channel HD/IP Setup", eta: "1-2 Days", note: "Day/Night audio cameras + DVR + Mobile Live" },
      { id: "shop_8ch", label: "Shop / Commercial 8-Channel Setup", eta: "2-3 Days", note: "High resolution wide-angle surveillance" },
      { id: "mobile_sync", label: "Mobile Live Streaming Fix", eta: "Same Day", note: "View cameras remotely anywhere on 4G/5G" },
      { id: "hdd_record", label: "Recording Stopped / Hard Disk Issue", eta: "Same Day", note: "Surveillance hard drive check & replacement" }
    ]
  }
];

export default function ServiceEstimator() {
  const [activeCategory, setActiveCategory] = useState("laptop");
  const [selectedIssue, setSelectedIssue] = useState(SERVICE_OPTIONS[0].issues[0].id);
  const [customerName, setCustomerName] = useState("");
  const [customerTown, setCustomerTown] = useState("");

  const currentCategoryObj = SERVICE_OPTIONS.find((c) => c.id === activeCategory) || SERVICE_OPTIONS[0];
  const currentIssueObj = currentCategoryObj.issues.find((i) => i.id === selectedIssue) || currentCategoryObj.issues[0];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const firstIssue = SERVICE_OPTIONS.find((c) => c.id === catId)?.issues[0]?.id;
    if (firstIssue) setSelectedIssue(firstIssue);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi MS TECH, I need a quick estimate / service booking:
- Service: ${currentCategoryObj.label}
- Issue/Requirement: ${currentIssueObj.label}
${customerName ? `- Name: ${customerName}` : ""}
${customerTown ? `- Location: ${customerTown}` : "- Location: Tamil Nadu"}

Please share the estimated cost and availability.`;

    return `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#042B55] via-[#0875D1] to-[#10B981]" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Quick Service Estimator
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#042B55]">
            Check Service Time & Get Instant Quote
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Choose your device and issue to see turnaround time and get direct WhatsApp pricing from our Rasipuram lab.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-emerald-100 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Transparent Pricing</span>
        </div>
      </div>

      {/* Step 1: Select Service Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {SERVICE_OPTIONS.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleCategoryChange(cat.id)}
            className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center border cursor-pointer ${
              activeCategory === cat.id
                ? "bg-[#0875D1] text-white border-[#0875D1] shadow-md shadow-[#0875D1]/25 scale-[1.02]"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Step 2: Select Specific Issue */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
          Select Common Problem / Requirement:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentCategoryObj.issues.map((issue) => (
            <button
              key={issue.id}
              type="button"
              onClick={() => setSelectedIssue(issue.id)}
              className={`p-3.5 rounded-xl text-left border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                selectedIssue === issue.id
                  ? "border-[#0875D1] bg-[#EAF6FF]/70 ring-2 ring-[#0875D1]/20 shadow-xs"
                  : "border-slate-200 hover:border-slate-300 bg-white"
              }`}
            >
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#042B55] block leading-snug">
                  {issue.label}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">
                  {issue.note}
                </span>
              </div>
              <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#0875D1]">
                ETA: {issue.eta}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Step 3: Optional Quick Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
        <div>
          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
            Your Name (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Anand"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0875D1]"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
            Your Location / Town (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Rasipuram / Salem / Namakkal"
            value={customerTown}
            onChange={(e) => setCustomerTown(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0875D1]"
          />
        </div>
      </div>

      {/* Result & High-Converting CTA Box */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#042B55] via-[#06427D] to-[#0875D1] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg shadow-[#042B55]/15">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#7DD3FC]">
              Selected Service
            </span>
            <span className="text-white/40">•</span>
            <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
              <Clock className="w-3 h-3" /> Turnaround: {currentIssueObj.eta}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            {currentCategoryObj.label} — {currentIssueObj.label}
          </h4>
          <p className="text-xs text-slate-200 mt-0.5">
            Get exact spare price, diagnostic steps & book your slot directly with MS TECH Rasipuram.
          </p>
        </div>

        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all shrink-0 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Get Quote on WhatsApp →</span>
        </a>
      </div>
    </div>
  );
}
