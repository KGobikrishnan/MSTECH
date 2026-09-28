import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Navigation } from "lucide-react";
import Button from "../common/Button";
import { BUSINESS_INFO } from "../../data/siteData";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0875D1]/10 text-[#0875D1] text-xs font-bold tracking-wider uppercase mb-3">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#042B55]">
          Visit MS TECH Store & Service Center
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Conveniently located near the New Bus Stand in Rasipuram, opposite Kannan Department Store. We welcome walk-in customers and on-site corporate requests.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4">
        {/* Address Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EAF6FF] text-[#0875D1] flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#042B55]">Store Address</h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {BUSINESS_INFO.address.line1}<br />
              {BUSINESS_INFO.address.line2}<br />
              {BUSINESS_INFO.address.landmark} {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0875D1] hover:underline mt-2.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps →</span>
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-[#042B55]">Direct Phone & Support</h4>
            <p className="text-sm text-slate-600 mt-0.5">
              Available for instant quotes and status updates.
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <Button
                href={`tel:${BUSINESS_INFO.phone}`}
                variant="primary"
                size="sm"
                icon={<Phone className="w-3.5 h-3.5 fill-current" />}
                iconPosition="left"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </Button>
              <Button
                href={BUSINESS_INFO.whatsappUrl}
                variant="whatsapp"
                size="sm"
                icon={<MessageCircle className="w-3.5 h-3.5 fill-current" />}
                iconPosition="left"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0875D1] flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#042B55]">Email Address</h4>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-sm font-semibold text-slate-700 hover:text-[#0875D1] transition-colors mt-0.5 block"
            >
              {BUSINESS_INFO.email}
            </a>
            <span className="text-xs text-slate-400 mt-1 block">For quotations and commercial enquiries</span>
          </div>
        </div>

        {/* Working Hours / Coverage Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#042B55]">Service Coverage</h4>
            <p className="text-sm text-slate-600 mt-0.5">
              All Over Tamil Nadu with base store in Rasipuram.
            </p>
            <span className="inline-block mt-2 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md">
              Mon - Sat: 9:30 AM - 8:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
