import React from "react";
import { motion } from "framer-motion";
import { Cpu, Laptop, ShieldCheck, Truck, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../../data/siteData";

export default function NationwideSalesBanner() {
  const customPcWhatsAppText = encodeURIComponent(
    "Hi MS TECH, I am looking for a Custom PC build. My budget is around ₹______ and my usage is (Gaming / Video Editing / Office). Please share specs and price."
  );

  const refurbishedLaptopWhatsAppText = encodeURIComponent(
    "Hi MS TECH, I am looking to buy a 2nd Hand / Refurbished Laptop with warranty. Please share the available models, configurations and prices."
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#042B55] via-[#06386C] to-[#042B55] text-white relative overflow-hidden">
      {/* Background glow & mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0875D1]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#7DD3FC] text-xs font-extrabold uppercase tracking-wider mb-4"
          >
            <Truck className="w-4 h-4 text-emerald-400" />
            <span>Pan-India Safe Courier Delivery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
          >
            All-India <span className="text-[#38BDF8]">PC Building</span> & Verified <span className="text-emerald-400">2nd Hand Laptops</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-200"
          >
            You don’t have to be in Rasipuram to get MS TECH excellence. We build custom dream gaming & office PCs and supply certified pre-owned laptops with warranty — safely packaged and shipped to your doorstep anywhere in India.
          </motion.p>
        </div>

        {/* 2 Core Feature Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Card 1: Custom PC Builds */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 sm:p-9 flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all hover:shadow-2xl hover:shadow-[#0875D1]/20 group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0875D1] to-[#0284C7] flex items-center justify-center text-white shadow-lg shadow-[#0875D1]/30">
                  <Cpu className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Built to Your Exact Budget
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Custom PC Builds (Gaming, Editing & Office)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Engineered with high airflow cases, premium thermal dissipation, genuine Intel / AMD processors, and GPU power. Every PC goes through a rigorous 24-hour benchmark and thermal stress test before dispatch.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Budget Builds (₹20,000 - ₹35,000) for Students & Accounting",
                  "High-FPS Esports & AAA Gaming Rigs with NVIDIA RTX / AMD RX",
                  "Heavy Video Editing, 4K Rendering & 3D Animation Workstations",
                  "Secure Multi-Layer Thermocol & Wooden Crate Safe Packaging"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${customPcWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-700/30 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get PC Build Quote on WhatsApp</span>
              </a>
              <Link
                to="/services/desktop"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Specs & Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: 2nd Hand / Refurbished & Brand New Laptops */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-7 sm:p-9 flex flex-col justify-between hover:border-emerald-400/40 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                  <Laptop className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#0875D1]/30 text-[#7DD3FC] border border-[#0875D1]/40">
                  30+ Point Hardware QA Check
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Certified 2nd Hand & New Laptops
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Get premium enterprise-grade laptops at half the retail price. Ideal for students, working professionals, and business owners. Includes replacement warranty and testing reports.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Verified ThinkPad, Dell Latitude & HP EliteBook Laptops",
                  "Brand New Factory-Sealed Laptops with Official Brand Warranty",
                  "100% Tested Battery Health, Keyboard, Trackpad & Crystal Clear Display",
                  "Express Tracked Courier Delivery Across Every State in India"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=${refurbishedLaptopWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0875D1] hover:bg-[#0284C7] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#0875D1]/30 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire Available Laptops & Stock</span>
              </a>
              <Link
                to="/services/laptop"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <span>View Models</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* 3 Step Nationwide Lead Flow */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-emerald-400 shrink-0 border border-white/15">
              01
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Share Your Budget or Specs</h4>
              <p className="text-xs text-slate-300 mt-1">
                WhatsApp us your requirement — budget PC, gaming rig, or 2nd hand laptop configuration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-[#38BDF8] shrink-0 border border-white/15">
              02
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Get Live Photos & Video Testing</h4>
              <p className="text-xs text-slate-300 mt-1">
                We share real-time photos, stress test benchmark logs, and build videos before dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-amber-400 shrink-0 border border-white/15">
              03
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Safe Courier Doorstep Delivery</h4>
              <p className="text-xs text-slate-300 mt-1">
                Tracked all-India courier shipping with insurance and dedicated unboxing remote setup support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
