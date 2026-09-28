import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { SERVICES_DATA, BUSINESS_INFO } from "../../data/siteData";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Enquiry Received!", {
        description: "Thank you for reaching out to MS TECH. We will contact you shortly."
      });
      reset();
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl relative">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0875D1]">Quick Enquiry</span>
        <h3 className="text-2xl font-black text-[#042B55] mt-1">Send Us a Message</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Fill out your requirement below, or send us a quick message directly on WhatsApp.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-[#042B55]">Message Sent Successfully!</h4>
          <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
            Our technical support team will review your requirement and call you back on your provided number.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Send Another Enquiry
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#16B95F] text-white font-semibold text-sm hover:bg-[#139E51] transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-[#042B55] uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Suresh Kumar"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-500 bg-red-50/20" : "border-slate-200"
              } text-sm focus:outline-none focus:ring-2 focus:ring-[#0875D1] transition-all`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#042B55] uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. 9843777146"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\s-]{8,15}$/,
                    message: "Please enter a valid phone number"
                  }
                })}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-200"
                } text-sm focus:outline-none focus:ring-2 focus:ring-[#0875D1] transition-all`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#042B55] uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. name@example.com"
                {...register("email", {
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0875D1] transition-all"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Service Required */}
          <div>
            <label className="block text-xs font-bold text-[#042B55] uppercase tracking-wider mb-1.5">
              Service Required *
            </label>
            <select
              {...register("service", { required: "Please select a service" })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0875D1] transition-all bg-white"
            >
              <option value="">-- Choose a Service --</option>
              {SERVICES_DATA.map((srv) => (
                <option key={srv.slug} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="General Technical Support">General Technical Support / Other</option>
            </select>
            {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-[#042B55] uppercase tracking-wider mb-1.5">
              Message / Device Issue Description *
            </label>
            <textarea
              rows={4}
              placeholder="Describe your laptop model, printer error code, CCTV requirement, or any question..."
              {...register("message", { required: "Please describe your requirement" })}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? "border-red-500 bg-red-50/20" : "border-slate-200"
              } text-sm focus:outline-none focus:ring-2 focus:ring-[#0875D1] transition-all resize-y`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0875D1] to-[#042B55] hover:from-[#1687E8] hover:to-[#063B73] text-white font-bold text-sm shadow-md shadow-[#0875D1]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Sending Enquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Enquiry →</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
