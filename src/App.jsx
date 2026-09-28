import React from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileActionBar from "./components/layout/MobileActionBar";
import FloatingActions from "./components/layout/FloatingActions";
import ScrollToTop from "./components/layout/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-[#0875D1] selection:text-white">
      <ScrollToTop />
      
      {/* Desktop Header */}
      <TopBar />
      <Navbar />

      {/* Main Multi-page Route Content */}
      <div className="flex-1 pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileActionBar />

      {/* Floating Actions (WhatsApp & Back-to-Top) */}
      <FloatingActions />
    </div>
  );
}
