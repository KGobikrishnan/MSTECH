import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Award, Users, MapPin, Phone, MessageCircle, ArrowRight, Wrench } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import BrandsSection from "../components/home/BrandsSection";
import CTASection from "../components/home/CTASection";
import { BUSINESS_INFO, WHY_CHOOSE_ITEMS } from "../data/siteData";
import { FadeUp, StaggerContainer, StaggerItem, ScaleIn } from "../components/common/ScrollAnimation";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About MS TECH | 16+ Years Tech Experience | Rasipuram, Tamil Nadu</title>
        <meta
          name="description"
          content="Learn more about MS TECH Rasipuram, founded with 16+ years of specialized technical expertise in laptop diagnostics, chip-level logic board repairs, and custom PC builds across Tamil Nadu."
        />
        <link rel="canonical" href="https://mstechservices.in/about" />
        <meta property="og:title" content="About MS TECH | Technology Sales & Service Partner" />
        <meta property="og:description" content="Dedicated technology sales and service center founded in 2024 with 16+ years of field experience in Rasipuram, Tamil Nadu." />
        <meta property="og:url" content="https://mstechservices.in/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "MS TECH",
              "foundingDate": "2024",
              "description": "Technology sales and service center specializing in chip-level computer repairs with 16+ years of expert hands-on field experience.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.5 Balasubramaniyan Theater Road, Opp. Kannan Department Store",
                "addressLocality": "Rasipuram",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>

      <PageHero
        badge="About Our Company"
        title="About MS TECH"
        subtitle="Dedicated technology sales and service center providing dependable solutions for laptops, desktops, printers, CCTV systems and computer essentials."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Main Narrative Section with Real Storefront */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <FadeUp className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0875D1]/10 text-[#0875D1] text-xs font-bold tracking-wider uppercase">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#042B55] tracking-tight">
                Your Technology Partner in Rasipuram & Across Tamil Nadu
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-[#0875D1] to-[#1687E8] rounded-full" />

              <p className="text-base text-slate-600 leading-relaxed">
                MS TECH is a dedicated technology sales and service center based in Rasipuram, Tamil Nadu. We specialize in sales, chip-level diagnostics, repairs, and preventative maintenance for laptops, desktop computers, laser & inkjet printers, and security CCTV installations.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Our business positioning is built around being <strong>"Your Technology Partner"</strong>. Instead of transactional sales, we focus on long-term customer satisfaction, genuine products and replacement parts, transparent diagnostics, and dependable after-sales assistance.
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] uppercase font-bold text-[#0875D1] tracking-wider block">Field Experience</span>
                  <p className="text-xl font-extrabold text-[#042B55] mt-1">16+ Years</p>
                  <span className="text-[11px] text-slate-500">Chip-level Mastery</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] uppercase font-bold text-[#0875D1] tracking-wider block">Established</span>
                  <p className="text-xl font-extrabold text-[#042B55] mt-1">Since 2024</p>
                  <span className="text-[11px] text-slate-500">Rasipuram Center</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <span className="text-[11px] uppercase font-bold text-[#0875D1] tracking-wider block">Service Reach</span>
                  <p className="text-xl font-extrabold text-[#042B55] mt-1">Tamil Nadu</p>
                  <span className="text-[11px] text-slate-500">Statewide Support</span>
                </div>
              </div>
            </FadeUp>

            {/* Visual Image with Real Store Front with ScaleIn */}
            <ScaleIn delay={0.2} className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <img
                  src="/office/20240215_201713.webp"
                  alt="MS TECH Rasipuram Service Center Storefront"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0875D1] text-xs font-bold mb-2">
                    Rasipuram Service Center
                  </div>
                  <h4 className="text-lg font-bold">MS TECH Store & Lab</h4>
                  <p className="text-xs text-slate-300 mt-1">Opp. Kannan Department Store, New Bus Stand Road</p>
                </div>
              </div>
            </ScaleIn>

          </div>
        </div>
      </section>

      {/* Leadership / Owner Profile Section with ScaleIn */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80 relative">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScaleIn className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xl relative overflow-hidden">
            {/* Ambient background glow accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0875D1]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Owner Photo Showcase - Premium Large Format */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-[#0875D1]/20 shadow-2xl shadow-[#042B55]/15 bg-slate-900 group">
                  {/* Aspect ratio to show the full workspace with laptop nicely */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                    <img
                      src="/person/owner.png"
                      alt="MS TECH Owner & Chief Technical Lead"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </div>

                  {/* Floating In-Store Status Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[11px] font-extrabold text-[#042B55] tracking-tight">Available In-Store</span>
                  </div>

                  {/* Bottom Image Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-[#042B55] leading-none">
                        Manikandan
                      </h4>
                      <p className="text-[11px] font-bold text-[#0875D1] mt-1">
                        Founder & Chief Hardware Specialist
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#EAF6FF] text-[#0875D1] text-[10px] font-extrabold border border-[#0875D1]/20 shrink-0">
                      16+ Yrs Exp
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0875D1]" />
                  <span>Direct One-on-One Technical Consultation in Rasipuram</span>
                </div>
              </div>

              {/* Owner Message & Commitments */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] border border-[#0875D1]/25 text-[#0875D1] text-xs font-bold uppercase tracking-wider">
                  Founder's Promise
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042B55] tracking-tight leading-snug">
                  "Every Device is Repaired with Complete Transparency & Responsibility."
                </h3>

                <div className="p-4 rounded-2xl bg-[#EAF6FF]/60 border border-[#0875D1]/20">
                  <p className="text-sm sm:text-base text-[#042B55] font-tamil font-semibold leading-relaxed">
                    எங்கள் வாடிக்கையாளர்களுக்கு எப்போதும் சிறந்த சேவை, அசல் உதிரிபாகங்கள் மற்றும் நியாயமான கட்டணத்தை வழங்குவதே எங்களின் முதன்மையான நோக்கம்.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  With over <strong>16+ years of specialized field experience</strong> in multi-brand chip-level motherboard diagnostics, SMPS power circuits, and high-precision laser printing systems, our Rasipuram workshop ensures you get genuine parts and precise chip-level care without trial-and-error costs.
                </p>

                {/* Key Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0875D1] block">Diagnostics</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#042B55] mt-0.5 block">100% Transparent</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0875D1] block">Replacement Parts</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#042B55] mt-0.5 block">OEM Verified</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0875D1] block">Turnaround</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#042B55] mt-0.5 block">Same-Day Priority</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0875D1] hover:bg-[#042B55] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md shadow-[#0875D1]/20 hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Talk Directly: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Our Workshop & Lab Gallery Preview with Staggered Grid */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0875D1]">Behind The Scenes</span>
              <h2 className="text-3xl font-black text-[#042B55] mt-1">Our Rasipuram Workshop & Store</h2>
              <div className="h-1 w-12 bg-[#0875D1] rounded-full mt-3" />
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0875D1] hover:text-[#042B55] transition-colors"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 group">
                <img
                  src="/office/20240203_133946.webp"
                  alt="MS TECH Store Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 group">
                <img
                  src="/office/20240203_134007.webp"
                  alt="MS TECH Diagnostic Bench"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 group">
                <img
                  src="/office/20240215_201650.webp"
                  alt="MS TECH Hardware Spares"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 group">
                <img
                  src="/office/20240215_201728.webp"
                  alt="MS TECH Work Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeUp className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0875D1]">How We Work</span>
            <h2 className="text-3xl font-black text-[#042B55] mt-1">Our Service Approach</h2>
            <div className="h-1 w-12 bg-[#0875D1] rounded-full mx-auto mt-3" />
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0875D1] font-black text-xl flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#042B55] mb-2">Honest Diagnostic Inspection</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Before initiating any service, we inspect your computer, printer, or security camera to identify root causes. You receive clear details on what parts need attention.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0875D1] font-black text-xl flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#042B55] mb-2">Verified Spares & Precision Repair</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We only install verified genuine replacement components, certified SSDs, tested RAM modules, and original accessories to safeguard performance and lifespan.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0875D1] font-black text-xl flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#042B55] mb-2">Dependable Post-Service Care</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We verify stability before handoff. If you need driver guidance or follow-up tips, our phone and WhatsApp support is always ready to assist.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <BrandsSection />
      <CTASection />
    </>
  );
}
