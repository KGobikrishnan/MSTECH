import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/common/PageHero";
import ServiceCard from "../components/common/ServiceCard";
import Button from "../components/common/Button";
import CTASection from "../components/home/CTASection";
import { SERVICES_DATA, BUSINESS_INFO } from "../data/siteData";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Laptop, Desktop, Printer & CCTV Services | MS TECH Tamil Nadu</title>
        <meta
          name="description"
          content="Explore complete technology solutions from MS TECH. Laptop sales & chip-level repair, custom desktop assembly, printer servicing, CCTV camera installation, and computer accessories across Tamil Nadu."
        />
      </Helmet>

      <PageHero
        badge="Complete Technology Solutions"
        title="Technology Services Built Around You"
        subtitle="Explore our comprehensive sales, installation, diagnostic, and maintenance offerings for residential, commercial, and enterprise computing needs."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0875D1]">Service Catalogue</span>
            <h2 className="text-3xl font-black text-[#042B55] mt-1">
              Select a Category for Detailed Specifications
            </h2>
            <div className="h-1 w-12 bg-[#0875D1] rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv, idx) => (
              <ServiceCard key={srv.slug} service={srv} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Direct Inquiries Strip */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#042B55]">Need an immediate on-call consultation?</h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Call our technicians directly or send a photo of your issue on WhatsApp for a fast preliminary estimate.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              href={`tel:${BUSINESS_INFO.phone}`}
              variant="primary"
              size="md"
              icon={<Phone className="w-4 h-4 fill-current" />}
              iconPosition="left"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </Button>
            <Button
              href={BUSINESS_INFO.whatsappUrl}
              variant="whatsapp"
              size="md"
              icon={<MessageCircle className="w-4 h-4 fill-current" />}
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
