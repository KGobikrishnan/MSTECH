import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X, ZoomIn, Eye } from "lucide-react";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/home/CTASection";
import { GALLERY_DATA } from "../data/siteData";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/common/ScrollAnimation";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const categories = ["All", "Customer", "Store", "Service", "Laptop", "Desktop", "Printer", "CCTV"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>MS TECH Gallery | Technology Products & Service Operations</title>
        <meta
          name="description"
          content="Browse photos of MS TECH's diagnostic lab, laptop and desktop assemblies, printer maintenance, and CCTV surveillance setups in Rasipuram and across Tamil Nadu."
        />
      </Helmet>

      <PageHero
        badge="Visual Showcase"
        title="Our Work & Products Gallery"
        subtitle="Explore real photos of custom PC assemblies, precision chip-level laptop repairs, CCTV security projects, and quality computer peripherals."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Category Filter Tabs with FadeUp */}
          <FadeUp className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0875D1] text-white shadow-md shadow-[#0875D1]/20 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          {/* Gallery Grid with Staggered Scroll Animation */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 font-medium">No images available in this category.</p>
            </div>
          ) : (
            <StaggerContainer key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {filteredItems.map((item) => (
                <StaggerItem key={item.id}>
                  <div
                    onClick={() => setActiveLightboxImage(item)}
                    className="h-full group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#042B55]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="w-6 h-6" />
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#042B55]/85 text-white backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-base text-[#042B55] group-hover:text-[#0875D1] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          onClick={() => setActiveLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxImage.image}
                alt={activeLightboxImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0875D1]/10 text-[#0875D1] text-xs font-bold">
                  {activeLightboxImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#042B55]">{activeLightboxImage.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{activeLightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}
