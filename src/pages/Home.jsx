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

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MS TECH | Laptop, Desktop, Printer & CCTV Sales & Service</title>
        <meta
          name="description"
          content="MS TECH - Your Technology Partner in Rasipuram and across Tamil Nadu. Trusted sales, chip-level diagnostics, laser printer repairs, and CCTV security installations."
        />
        <meta property="og:title" content="MS TECH | Laptop, Desktop, Printer & CCTV Sales & Service" />
        <meta
          property="og:description"
          content="Trusted sales and service for laptops, desktops, printers, and CCTV cameras in Rasipuram and across Tamil Nadu."
        />
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

        {/* Final Conversion CTA */}
        <CTASection />
      </main>
    </>
  );
}
