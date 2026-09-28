import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const FAQS = [
  {
    q: "How long does a typical laptop screen or keyboard replacement take?",
    qTamil: "லேப்டாப் ஸ்கிரீன் அல்லது கீபோர்டு மாற்ற எவ்வளவு நேரம் ஆகும்?",
    a: "Standard screen, keyboard, RAM, and SSD upgrades are usually completed in 2 to 4 hours on the same day if parts are in stock. Complex chip-level motherboard diagnostics take 24–48 hours for full stress testing."
  },
  {
    q: "Do you offer doorstep pickup and delivery in and around Rasipuram?",
    qTamil: "ராசிபுரம் மற்றும் சுற்றுவட்டார பகுதிகளில் டோர்ஸ்டெப் சேவை உள்ளதா?",
    a: "Yes! We offer doorstep pickup and delivery for laptops, desktops, and CCTV setups across Rasipuram, Namakkal, and neighboring areas. For commercial CCTV and network setups, our on-site team travels across Tamil Nadu."
  },
  {
    q: "Do you service Apple MacBooks (Air / Pro / M1 / M2 / M3)?",
    qTamil: "ஆப்பிள் மேக்புக் (MacBook) சர்வீஸ் செய்கிறீர்களா?",
    a: "Yes. We handle MacBook battery replacement, liquid spill recovery, display changes, logic board chip-level repairs, and macOS restoration using specialized micro-soldering tools."
  },
  {
    q: "Will my hard disk data remain private and secure during repair?",
    qTamil: "எனது டேட்டா (Data) பாதுகாப்பாக இருக்குமா?",
    a: "100% yes. We follow strict data confidentiality protocols. We never access, transfer, or modify your personal files. For added peace of mind, customers can also remove their storage drive before handing over the device for external hardware repairs."
  },
  {
    q: "Do you provide genuine GST tax invoices for business purchases and repairs?",
    qTamil: "நிறுவனங்களுக்கு GST இன்வாய்ஸ் கிடைக்குமா?",
    a: "Yes, we provide official GST bills for all corporate orders, school/college IT contracts, CCTV camera installations, and retail hardware purchases."
  },
  {
    q: "What warranty do you offer on replacement parts and repairs?",
    qTamil: "மாற்றப்படும் பாகங்களுக்கு வாரண்டி (Warranty) உண்டா?",
    a: "All OEM replacement components (Screens, SSDs, RAM, Batteries, SMPS, CCTV cameras) carry standard manufacturer warranties ranging from 6 months up to 3–5 years depending on the brand."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Summary & Direct Contact */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] text-xs font-bold uppercase tracking-wider mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-[#0875D1]" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#042B55] tracking-tight leading-tight">
                Got Questions? <br />
                <span className="text-[#0875D1]">
                  We Have Clear Answers.
                </span>
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Everything you need to know about our repair turnaround, doorstep support, data privacy, and warranty standards.
              </p>

              {/* Still have questions card */}
              <div className="mt-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 shadow-xs">
                <h4 className="text-sm font-bold text-[#042B55] mb-1">
                  Have a specific device issue?
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Speak directly with our senior technician for an instant diagnosis.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#042B55] text-xs font-bold transition-all border border-slate-300 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0875D1]" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#EAF6FF]/40 border-[#0875D1]/50 shadow-md shadow-[#0875D1]/5"
                      : "bg-white border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-base sm:text-lg font-bold text-[#042B55] block">
                        {faq.q}
                      </span>
                      <span className="text-xs text-[#0875D1] font-tamil font-semibold block mt-1">
                        {faq.qTamil}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#0875D1] text-white border-[#0875D1] rotate-180"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
