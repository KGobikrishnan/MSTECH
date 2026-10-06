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
              <span className="hero-live-dot" /> RASIPURAM · SERVING TAMIL NADU
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }} className="mt-6 text-[2.7rem] sm:text-6xl lg:text-[4.3rem] leading-[1.05] tracking-[-.055em] font-extrabold text-[#10263F]">
              Technology that <span className="hero-title-accent">works for you.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .16 }} className="mt-6 text-base sm:text-lg leading-8 text-slate-600 max-w-xl">
              Reliable sales, expert repairs and security solutions for your home and business. Get clear advice from a local team that knows its craft.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .23 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-primary-cta"><MessageCircle size={18} /> Get a free consultation <ArrowRight size={17} /></a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hero-secondary-cta"><Phone size={17} /> Call {BUSINESS_INFO.phoneDisplay}</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              {["Clear, upfront estimates", "Genuine parts", "Friendly local support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check size={15} className="text-emerald-600" />{item}</span>)}
            </motion.div>
            <div className="mt-7 inline-flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} className="text-[#1674C8]" /> Opp. Kannan Department Store, New Bus Stand, Rasipuram</div>
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
