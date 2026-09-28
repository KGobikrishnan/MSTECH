import React from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Navigation, Phone, MessageCircle } from "lucide-react";
import PageHero from "../components/common/PageHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Button from "../components/common/Button";
import { BUSINESS_INFO } from "../data/siteData";
import { FadeUp, ScaleIn } from "../components/common/ScrollAnimation";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact MS TECH | Rasipuram Technology Service Center</title>
        <meta
          name="description"
          content="Contact MS TECH in Rasipuram, Tamil Nadu. Phone: 9843777146. Address: No.5 Balasubramaniyan Theater Road, Opp Kannan Department Store, New Bus Stand."
        />
      </Helmet>

      <PageHero
        badge="Contact & Support"
        title="We're Here to Help You"
        subtitle="Reach out for laptop diagnostics, desktop assemblies, printer maintenance, or CCTV camera inquiries. Walk into our Rasipuram store or call us today."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 6 Columns: Contact Details & Info with FadeUp */}
            <FadeUp className="lg:col-span-6">
              <ContactInfo />
            </FadeUp>

            {/* Right 6 Columns: Contact Enquiry Form with FadeUp */}
            <FadeUp delay={0.15} className="lg:col-span-6">
              <ContactForm />
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Embedded Location & Directions Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <ScaleIn className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 flex flex-col md:flex-row items-stretch">
            
            {/* Map Info Box */}
            <div className="p-8 md:w-1/2 bg-[#042B55] text-white flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#7DD3FC] tracking-wider block mb-2">
                  Store Location
                </span>
                <h3 className="text-2xl font-bold">MS TECH Service Center</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>

                <div className="mt-6 space-y-2 text-xs text-slate-300">
                  <p><strong>Landmark:</strong> Opp. Kannan Department Store, near New Bus Stand</p>
                  <p><strong>Town:</strong> Rasipuram, Namakkal District, Tamil Nadu</p>
                  <p><strong>Service Radius:</strong> Statewide dispatch & remote support</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={BUSINESS_INFO.googleMapsUrl}
                  variant="primary"
                  size="md"
                  icon={<Navigation className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Get Directions →
                </Button>

                <Button
                  href={`tel:${BUSINESS_INFO.phone}`}
                  variant="outline"
                  size="md"
                  className="!border-white/30 !text-white hover:!bg-white/10"
                >
                  Call Store Now
                </Button>
              </div>
            </div>

            {/* Map Visual Preview / Directions Graphic */}
            <div className="md:w-1/2 bg-slate-200 min-h-[300px] relative flex items-center justify-center p-8 tech-grid-pattern">
              <div className="text-center p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200 max-w-sm">
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Google Maps Location</h4>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Open live turn-by-turn navigation directly in Google Maps for accurate routing to MS TECH.
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#0875D1] text-white text-xs font-bold hover:bg-[#063B73] transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </ScaleIn>
        </div>
      </section>
    </>
  );
}
