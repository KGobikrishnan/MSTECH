import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import ProcessSteps from "../components/home/ProcessSteps";
import ServiceEstimator from "../components/home/ServiceEstimator";
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
        <title>MS TECH | Premium Laptop Sales & Service Center in Rasipuram</title>
        <meta
          name="description"
          content="MS TECH Rasipuram: 16+ years experience in chip-level laptop service, desktop PC builds, printer repair & CCTV camera installation. Authorized spares, same-day diagnosis & 5.0 Google rating."
        />
        <meta
          name="keywords"
          content="laptop service in rasipuram, computer service rasipuram, laptop repair near me, best laptop shop in rasipuram, hp service rasipuram, dell service rasipuram, lenovo service rasipuram, cctv installation rasipuram, printer service rasipuram, ms tech rasipuram"
        />
        <link rel="canonical" href="https://mstechservices.in/" />
        <meta property="og:title" content="MS TECH | Premium Laptop Sales & Service in Rasipuram" />
        <meta
          property="og:description"
          content="Rasipuram's highest-rated computer & laptop care center. Over 16+ years hands-on field experience. Fast diagnosis, genuine OEM parts, transparent pricing."
        />
        <meta property="og:url" content="https://mstechservices.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://mstechservices.in/office/shopentrance.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["LocalBusiness", "ComputerStore", "ElectronicsRepairShop"],
                "@id": "https://mstechservices.in/#store",
                "name": "MS TECH",
                "alternateName": ["M-Tech Solutions", "MS Tech Rasipuram", "MS TECH Computer Service"],
                "url": "https://mstechservices.in",
                "logo": "https://mstechservices.in/logo.png",
                "image": [
                  "https://mstechservices.in/office/shopentrance.jpeg",
                  "https://mstechservices.in/office/20240215_201713.webp"
                ],
                "description": "MS TECH is Rasipuram's top-rated computer, laptop, printer sales and chip-level service center with 16+ years of field experience. Authorized replacement spares, free preliminary diagnostics, custom PC builds, and statewide Tamil Nadu CCTV support.",
                "telephone": "+919843777146",
                "email": "mstechservices.in@gmail.com",
                "priceRange": "₹₹",
                "currenciesAccepted": "INR",
                "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
                "foundingDate": "2024",
                "founder": {
                  "@type": "Person",
                  "name": "Manikandan",
                  "jobTitle": "Lead Chip-Level Hardware Specialist & Founder"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "No.5 Balasubramaniyan Theater Road, Opp. Kannan Department Store, New Bus Stand",
                  "addressLocality": "Rasipuram",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "637408",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.4647,
                  "longitude": 78.1755
                },
                "hasMap": "https://maps.app.goo.gl/4yPx1LWsoEexhwy99",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:30",
                    "closes": "20:30"
                  }
                ],
                "areaServed": [
                  { "@type": "City", "name": "Rasipuram" },
                  { "@type": "AdministrativeArea", "name": "Namakkal" },
                  { "@type": "AdministrativeArea", "name": "Salem" },
                  { "@type": "AdministrativeArea", "name": "Erode" },
                  { "@type": "State", "name": "Tamil Nadu" }
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Computer, Laptop & Tech Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Chip-Level Laptop Repair & Screen Replacement"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "High-Speed SSD Upgrades & RAM Expansion"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom RGB Gaming & Office Desktop PC Assembly"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Laser & Ink Tank Printer Head Repair & Cartridge Refill"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial HD CCTV Camera Installation & Mobile Streaming"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "New & Refurbished Branded Laptop Sales with Warranty"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": "120",
                  "reviewCount": "120"
                },
                "sameAs": [
                  "https://maps.app.goo.gl/4yPx1LWsoEexhwy99",
                  "https://www.facebook.com/share/p/1CAqWKxsf6/",
                  "https://www.instagram.com/mstechrasipuram?stkn=cDFwMHRhenV5MTds",
                  "https://youtube.com/@mstech_rasipuram?si=HFjX70Byg5tPgdTK"
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://mstechservices.in/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which is the best laptop service center in Rasipuram?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "MS TECH (M-Tech Solutions) is recognized as the best-rated laptop service center in Rasipuram with a 5.0-star Google rating and 16+ years of specialized chip-level repair experience. Located opposite Kannan Department Store, New Bus Stand Road, Rasipuram."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a laptop screen, keyboard or SSD upgrade take at MS TECH?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "At MS TECH Rasipuram, standard screen replacements, keyboard changes, RAM expansions, and SSD speed upgrades are completed in 2 to 4 hours on the same day. Motherboard chip-level diagnostics take 24–48 hours for stress testing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where can I buy brand new and refurbished laptops in Rasipuram?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "MS TECH offers brand new and certified refurbished laptops from Dell, HP, Lenovo, ASUS, and Acer with official manufacturer warranty, genuine operating system configurations, and free accessory bundles."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does MS TECH provide doorstep computer repair and CCTV installation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! MS TECH provides prompt doorstep pickup and delivery in Rasipuram and Namakkal, as well as on-site commercial CCTV camera installations across Tamil Nadu."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can MS TECH fix water damaged laptops and dead motherboards?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, MS TECH specializes in micro-soldering, SMD component replacement, short-circuit troubleshooting, and liquid spill ultrasonic cleaning for Windows laptops and Apple MacBooks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the contact details and shop timings of MS TECH Rasipuram?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "MS TECH is open Monday through Saturday from 9:30 AM to 8:30 PM. Call or WhatsApp +91 9843777146. Address: No.5 Balasubramaniyan Theater Road, Opp. Kannan Department Store, New Bus Stand, Rasipuram, Tamil Nadu 637408."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="bg-[#F8FAFC]">
        {/* Sleek Bento Grid Hero */}
        <Hero />

        {/* 4-Step Transparent Repair Process */}
        <ProcessSteps />

        {/* Instant Funnel Conversion: Service Estimator & WhatsApp Lead Generator */}
        <section id="service-estimator" className="py-16 sm:py-20 bg-slate-100/70 border-t border-slate-200/80 relative">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ServiceEstimator />
          </div>
        </section>

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
