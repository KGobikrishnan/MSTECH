import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import ProcessSteps from "../components/home/ProcessSteps";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BrandsSection from "../components/home/BrandsSection";
import ReviewsPreview from "../components/home/ReviewsPreview";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import GoogleMapEmbed from "../components/common/GoogleMapEmbed";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MS Tech | Premium Laptop Sales & Service in Rasipuram</title>
        <meta
          name="description"
          content="Expert laptop repair, screen replacement, and sales of new/refurbished laptops in Rasipuram, Namakkal, and Salem. Call us today for a free diagnostic."
        />
        <meta property="og:title" content="MS Tech | Premium Laptop Sales & Service in Rasipuram" />
        <meta
          property="og:description"
          content="Expert laptop repair, screen replacement, and sales of new/refurbished laptops in Rasipuram, Namakkal, and Salem. Authorized Service | 100% Genuine Parts."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MS Tech",
            "image": "https://mstech.in/office/20240215_201713.webp",
            "telephone": "+919843777146",
            "email": "mstechservices.in@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No.5 Balasubramaniyan Theater Road, Opp. Kannan Department Store, New Bus Stand",
              "addressLocality": "Rasipuram",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.4647",
              "longitude": "78.1755"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:30",
                "closes": "20:30"
              }
            ],
            "priceRange": "₹₹",
            "areaServed": ["Rasipuram", "Namakkal", "Salem", "Tamil Nadu"]
          })}
        </script>
      </Helmet>

      <main className="bg-[#F8FAFC]">
        {/* Sleek Bento Grid Hero */}
        <Hero />

        {/* 4-Step Transparent Repair Process */}
        <ProcessSteps />

        {/* Core Services Catalog */}
        <ServicesPreview />

        {/* About Section */}
        <AboutPreview />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Brands Carousel & Grid */}
        <BrandsSection />

        {/* Customer Reviews & Google Rating */}
        <ReviewsPreview />

        {/* Interactive FAQ Section (Grace Computers R&D Feature) */}
        <FAQSection />

        {/* Live Interactive Google Map & Store Directions */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
            <GoogleMapEmbed 
              title="Store Location & Route Map" 
              subtitle="Visit MS TECH opposite Kannan Department Store, New Bus Stand, Rasipuram"
            />
          </div>
        </section>

        {/* Final Conversion CTA */}
        <CTASection />
      </main>
    </>
  );
}
