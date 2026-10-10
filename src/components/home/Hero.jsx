import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, MapPin, ShieldCheck, Laptop, Printer, Monitor, Camera, Check } from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const categories = [
  { Icon: Laptop, label: "Laptop", detail: "Sales, repair & upgrades" },
  { Icon: Monitor, label: "Desktop", detail: "Custom builds & support" },
  { Icon: Printer, label: "Printer", detail: "Sales, service & refills" },
  { Icon: Camera, label: "CCTV", detail: "Supply & installation" },
];

export default function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-[1.03fr_.97fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="hero-eyebrow">
              <span className="hero-live-dot" /> RASIPURAM · NAMAKKAL · SALEM · TAMIL NADU
            </motion.div>

            {/* Google Reviews & Experience Trust Anchor directly under eyebrow */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, delay: .05 }} className="mt-3.5 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm leading-none">★</span>
                  ))}
                </div>
                <span className="text-xs font-extrabold text-[#10263F]">5.0 Rating</span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-semibold text-slate-500">Google Reviews</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/30 text-[#0875D1] shadow-xs">
                <ShieldCheck size={14} className="text-[#0875D1]" />
                <span className="text-xs font-extrabold">16+ Years Experience</span>
                <span className="text-[#0875D1]/40">•</span>
                <span className="text-[11px] font-semibold text-[#042B55]">Est. 2024</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }} className="mt-4 text-[2.6rem] sm:text-5xl lg:text-[3.9rem] leading-[1.08] tracking-[-.045em] font-extrabold text-[#10263F]">
              Expert Laptop Service & <span className="hero-title-accent">Premium Sales in Rasipuram.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }} className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
              Fast, reliable repairs for all brands. Upgrade your setup with our range of new and refurbished laptops. Authorized service & 100% genuine parts.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .23 }} className="mt-8 flex flex-wrap gap-3">
              <a 
                href={BUSINESS_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-primary-cta !bg-[#16A34A] hover:!bg-[#15803D] text-white shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle size={18} className="fill-current" /> Book a Repair <ArrowRight size={17} />
              </a>
              <a href="#service-estimator" className="hero-secondary-cta !border-[#0875D1]/30 hover:!border-[#0875D1] text-[#0875D1]">
                <span>Check Cost & Turnaround</span>
              </a>
              <Link to="/services/laptop" className="hero-secondary-cta">
                <Laptop size={17} className="text-[#1674C8]" /> View Laptops
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                <Phone size={16} className="text-[#1674C8]" /> {BUSINESS_INFO.phoneDisplay}
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }} className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-600">
              {["Authorized Service", "100% Genuine Parts", "Quick Turnaround", "Free Diagnostic"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check size={15} className="text-emerald-600 shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <MapPin size={15} className="text-[#1674C8] shrink-0" /> Opp. Kannan Department Store, New Bus Stand, Rasipuram
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .65, delay: .12 }} className="hero-showcase">
            <div className="hero-showcase-top"><div><span className="hero-showcase-kicker">MS TECH · YOUR LOCAL TECH PARTNER</span><h2>One team for all your tech.</h2></div><span className="hero-shield"><ShieldCheck size={19} /></span></div>
            <div className="hero-device-art" aria-hidden="true"><div className="hero-art-glow"/><div className="hero-screen"><div className="hero-screen-bar"><i/><i/><i/></div><div className="hero-screen-content"><span>MS</span><b>TECH</b><small>SALES · SERVICE · SUPPORT</small></div></div><div className="hero-phone"><div/><span>●</span><i/></div><div className="hero-device-base"/><div className="hero-art-orbit orbit-a"/><div className="hero-art-orbit orbit-b"/><div className="hero-art-chip">24/7<br/><b>CARE</b></div></div>
            <div className="hero-category-grid">{categories.map(({ Icon, label, detail }, i) => <Link key={label} to={i === 0 ? "/services/laptop" : "/services"} className="hero-category"><span className="hero-category-icon"><Icon size={19}/></span><span><b>{label}</b><small>{detail}</small></span><ArrowRight size={15} className="hero-category-arrow" /></Link>)}</div>
            <div className="hero-showcase-footer"><span className="hero-footer-pulse"/> Serving Rasipuram & across Tamil Nadu <Link to="/services">Explore services <ArrowRight size={14}/></Link></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
