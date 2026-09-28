import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageCircle, 
  Laptop, 
  Monitor, 
  Printer, 
  ShieldAlert, 
  Cpu, 
  Wrench, 
  CheckCircle
} from "lucide-react";
import { BUSINESS_INFO } from "../../data/siteData";

const iconMap = {
  Laptop: Laptop,
  Monitor: Monitor,
  Printer: Printer,
  ShieldAlert: ShieldAlert,
  Cpu: Cpu,
  Wrench: Wrench
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.icon] || Laptop;

  const whatsappMessage = encodeURIComponent(
    `Hi MS TECH, I would like to enquire about ${service.title} at your Rasipuram store.`
  );
  const serviceWhatsAppUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${whatsappMessage}`;

  return (
    <div className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-[#0875D1]/40 shadow-sm hover:shadow-xl hover:shadow-[#0875D1]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5">
      
      {/* Top ambient highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0875D1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Service Image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 shadow-inner flex items-center justify-center p-2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
          
          {service.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-lg text-[10px] font-extrabold bg-[#042B55] text-white shadow-sm z-10">
              {service.badge}
            </span>
          )}

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] z-10">
            <span className="font-semibold text-emerald-300 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Genuine Spares
            </span>
            <span className="text-slate-200 font-medium">Fast Turnaround</span>
          </div>
        </div>

        {/* Header with Icon */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-[#EAF6FF] border border-[#0875D1]/20 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-xs">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#042B55] group-hover:text-[#0875D1] transition-colors leading-snug">
              {service.title}
            </h3>
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              {service.category}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Features preview bullet points */}
        <ul className="space-y-1.5 mb-5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
          {service.features.slice(0, 3).map((feat, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0875D1] shrink-0" />
              <span className="truncate font-semibold text-slate-700">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          to={`/services/${service.slug}`}
          className="text-xs sm:text-sm font-bold text-[#0875D1] hover:text-[#042B55] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Scope</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          href={serviceWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-[#10B981] text-emerald-700 hover:text-white border border-emerald-200 font-bold text-xs transition-all shadow-xs"
          title={`Enquire on WhatsApp about ${service.title}`}
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>Enquire</span>
        </a>
      </div>
    </div>
  );
}
