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
        <title>Contact MS TECH | Laptop & Computer Service Center in Rasipuram</title>
        <meta
          name="description"
          content="Contact MS TECH Rasipuram: Call +91 9843777146 or visit our center opposite Kannan Department Store, New Bus Stand Road. Free preliminary diagnostic & immediate support."
        />
        <link rel="canonical" href="https://mstechservices.in/contact" />
        <meta property="og:title" content="Contact MS TECH | Rasipuram Technology Center" />
        <meta property="og:description" content="Reach out to MS TECH in Rasipuram for fast laptop diagnosis, PC assembly, and CCTV inquiries." />
        <meta property="og:url" content="https://mstechservices.in/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "MS TECH",
              "telephone": "+919843777146",
              "email": "mstechservices.in@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.5 Balasubramaniyan Theater Road, Opp. Kannan Department Store, New Bus Stand",
                "addressLocality": "Rasipuram",
                "addressRegion": "Tamil Nadu",
                "postalCode": "637408",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
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

            {/* Map Visual Interactive Preview */}
            <div className="md:w-1/2 min-h-[360px] relative">
              <iframe
                title="MS TECH Rasipuram Location Map"
                src="https://maps.google.com/maps?q=No.5+Balasubramaniyan+Theater+Road,+Opp.+Kannan+Department+Store,+New+Bus+Stand,+Rasipuram,+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
