import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Laptop,
  Monitor,
  Printer,
  ShieldAlert,
  Cpu,
  Wrench,
  HelpCircle
} from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import { SERVICES_DATA, BUSINESS_INFO } from "../data/siteData";
import { FadeUp, ScaleIn } from "../components/common/ScrollAnimation";

const iconMap = {
  Laptop: Laptop,
  Monitor: Monitor,
  Printer: Printer,
  ShieldAlert: ShieldAlert,
  Cpu: Cpu,
  Wrench: Wrench
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  // If slug is invalid, redirect back to main services catalogue
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComp = iconMap[service.icon] || Laptop;
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${service.title} | MS TECH Rasipuram, Tamil Nadu`}</title>
        <meta name="description" content={`${service.description} Dedicated support across Tamil Nadu.`} />
      </Helmet>

      <PageHero
        badge={service.badge || "Service Category"}
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: service.title }
        ]}
      />

      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Feature Hero Image with ScaleIn */}
              <ScaleIn className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 h-72 sm:h-96 relative flex items-center justify-center p-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-[#7DD3FC] tracking-wider">Service Scope</span>
                      <h2 className="text-xl sm:text-2xl font-bold">{service.title}</h2>
                    </div>
                  </div>
                </div>
              </ScaleIn>

              {/* Service Overview with FadeUp */}
              <FadeUp delay={0.1}>
                <h3 className="text-2xl font-black text-[#042B55] mb-3">Service Overview</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </FadeUp>

              {/* What We Provide (Features Checklist) with FadeUp */}
              <FadeUp delay={0.15} className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
                <h3 className="text-xl font-bold text-[#042B55] mb-4">
                  What We Provide
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#0875D1] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>

              {/* Common Requirements with FadeUp */}
              {service.commonRequirements && (
                <FadeUp delay={0.2} className="rounded-3xl p-6 sm:p-8 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-5 h-5 text-[#0875D1]" />
                    <h3 className="text-xl font-bold text-[#042B55]">Common Signs You Need This Service</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.commonRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-[#1687E8] shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              )}

              {/* Bottom Quick Contact Strip for this Service */}
              <ScaleIn delay={0.2} className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#042B55] to-[#0875D1] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <span className="text-xs uppercase font-bold text-[#7DD3FC] tracking-wider">Ready to repair or buy?</span>
                  <h4 className="text-xl font-bold mt-1">Need {service.title}?</h4>
                  <p className="text-xs text-slate-200 mt-1">
                    Call directly or send your requirements on WhatsApp for instant assistance.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    href={`tel:${BUSINESS_INFO.phone}`}
                    variant="white"
                    size="md"
                    icon={<Phone className="w-4 h-4 fill-current text-[#0875D1]" />}
                    iconPosition="left"
                  >
                    Call {BUSINESS_INFO.phone}
                  </Button>
                  <Button
                    href={`https://wa.me/919843777146?text=Hi%20MS%20TECH%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}.`}
                    variant="whatsapp"
                    size="md"
                    icon={<MessageCircle className="w-4 h-4 fill-current" />}
                    iconPosition="left"
                  >
                    WhatsApp
                  </Button>
                </div>
              </ScaleIn>

            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Highlights Widget */}
              <FadeUp delay={0.15} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <h4 className="text-base font-bold text-[#042B55] mb-4 pb-2 border-b border-slate-200">
                  Service Key Metrics
                </h4>
                <div className="space-y-4">
                  {service.highlights && service.highlights.map((hl, idx) => (
                    <div key={idx}>
                      <span className="text-xs text-slate-400 font-bold uppercase block">{hl.label}</span>
                      <span className="text-sm font-semibold text-slate-800">{hl.value}</span>
                    </div>
                  ))}
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Coverage Area</span>
                    <span className="text-sm font-semibold text-slate-800">All Over Tamil Nadu</span>
                  </div>
                </div>
              </FadeUp>

              {/* Store Walk-in Box */}
              <FadeUp delay={0.2} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
                <h4 className="text-base font-bold text-[#042B55] mb-2">Visit Rasipuram Center</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {BUSINESS_INFO.address.line1} {BUSINESS_INFO.address.line2} {BUSINESS_INFO.address.landmark} {BUSINESS_INFO.address.city}
                </p>
                <div className="space-y-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Get Directions on Google Maps →
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-2.5 px-4 rounded-xl bg-[#0875D1] hover:bg-[#063B73] text-xs font-bold text-white transition-colors"
                  >
                    Book Diagnostic Service
                  </Link>
                </div>
              </FadeUp>

              {/* Related Services Links */}
              <FadeUp delay={0.25} className="bg-white rounded-2xl p-6 border border-slate-200/80">
                <h4 className="text-base font-bold text-[#042B55] mb-3">Related Services</h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/services/${rel.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EAF6FF] text-xs font-semibold text-slate-700 hover:text-[#0875D1] transition-colors group"
                    >
                      <span>{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </FadeUp>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
