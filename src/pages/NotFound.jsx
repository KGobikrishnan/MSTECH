import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, ArrowRight, Wrench } from "lucide-react";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | MS TECH</title>
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#EAF6FF] text-[#0875D1] flex items-center justify-center mx-auto mb-5 shadow-inner">
            <Wrench className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#0875D1]">Error 404</span>
          <h1 className="text-3xl font-black text-[#042B55] mt-1">Page Not Found</h1>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            The technology you're looking for seems to have gone offline or moved to another link.
          </p>

          <div className="mt-8 space-y-3">
            <Button
              to="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
              className="w-full"
            >
              Back to Home
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
