import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  MapPin
} from "lucide-react";
import Logo from "../common/Logo";
import { BUSINESS_INFO, SERVICES_DATA } from "../../data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3" 
        : "bg-white border-b border-slate-100 py-3.5"
    }`}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo variant="light" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-bold transition-all py-1 relative ${
                isActive ? "text-[#0875D1]" : "text-slate-700 hover:text-[#0875D1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Home</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0875D1] rounded-full shadow-sm shadow-[#0875D1]/40" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-bold transition-all py-1 relative ${
                isActive ? "text-[#0875D1]" : "text-slate-700 hover:text-[#0875D1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>About Us</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0875D1] rounded-full shadow-sm shadow-[#0875D1]/40" />
                )}
              </>
            )}
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className={`flex items-center gap-1.5 text-sm font-bold transition-all py-1 cursor-pointer ${
                location.pathname.startsWith("/services") ? "text-[#0875D1]" : "text-slate-700 hover:text-[#0875D1]"
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#0875D1]" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full -left-10 w-84 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/90 p-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="p-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#042B55] uppercase tracking-wider">
                    Our Specialized Services
                  </span>
                  <Link to="/services" className="text-xs font-bold text-[#0875D1] hover:underline">
                    View All →
                  </Link>
                </div>
                <div className="grid gap-1">
                  {SERVICES_DATA.map((srv) => (
                    <Link
                      key={srv.slug}
                      to={`/services/${srv.slug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#EAF6FF] hover:text-[#0875D1] transition-all group"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0875D1] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                        {srv.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-sm font-bold transition-all py-1 relative ${
                isActive ? "text-[#0875D1]" : "text-slate-700 hover:text-[#0875D1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Gallery</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0875D1] rounded-full shadow-sm shadow-[#0875D1]/40" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `text-sm font-bold transition-all py-1 relative ${
                isActive ? "text-[#0875D1]" : "text-slate-700 hover:text-[#0875D1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Reviews</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0875D1] rounded-full shadow-sm shadow-[#0875D1]/40" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-bold transition-all py-1 relative ${
                isActive ? "text-[#0875D1]" : "text-slate-700 hover:text-[#0875D1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Contact</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0875D1] rounded-full shadow-sm shadow-[#0875D1]/40" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Desktop Call & WhatsApp Conversion Badges */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#EAF6FF] text-[#042B55] hover:text-[#0875D1] font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 border border-slate-200/80"
          >
            <Phone className="w-4 h-4 text-[#0875D1] fill-current" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#10B981]/25 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-[#0875D1] transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-6 space-y-5 animate-in slide-in-from-top-4 duration-300">
          <div className="grid gap-2 border-b border-slate-100 pb-4">
            <Link to="/" className="px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EAF6FF] hover:text-[#0875D1] text-base">
              Home
            </Link>
            <Link to="/about" className="px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EAF6FF] hover:text-[#0875D1] text-base">
              About Us
            </Link>
            <Link to="/services" className="px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EAF6FF] hover:text-[#0875D1] text-base">
              Services Overview
            </Link>

            <div className="ml-4 pl-3 border-l-2 border-[#0875D1]/30 grid gap-1.5 my-2">
              {SERVICES_DATA.map((srv) => (
                <Link
                  key={srv.slug}
                  to={`/services/${srv.slug}`}
                  className="py-1 text-sm font-medium text-slate-600 hover:text-[#0875D1] flex items-center justify-between"
                >
                  <span>{srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>

            <Link to="/gallery" className="px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EAF6FF] hover:text-[#0875D1] text-base">
              Gallery
            </Link>
            <Link to="/reviews" className="px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EAF6FF] hover:text-[#0875D1] text-base">
              Reviews
            </Link>
            <Link to="/contact" className="px-4 py-2.5 rounded-xl font-bold text-slate-800 hover:bg-[#EAF6FF] hover:text-[#0875D1] text-base">
              Contact
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="py-3 px-4 rounded-xl bg-slate-100 border border-slate-200 text-[#042B55] font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#0875D1] fill-current" />
              <span>Call Store</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#10B981] text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
