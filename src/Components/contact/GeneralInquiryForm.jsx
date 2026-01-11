"use client";

import { useState } from "react";
import {
  User,
  Building2,
  MessageSquareText,
  SlidersHorizontal,
  Send,
  ChevronDown,
} from "lucide-react";

export default function GeneralInquiryForm() {
  const [form, setForm] = useState({
    priority: "Normal",
    message: "",
    agree: false,
  });

  const countries = [
    "United Arab Emirates",
    "Saudi Arabia",
    "Pakistan",
    "United States",
    "United Kingdom",
    "Nigeria",
    "Kenya",
  ];

  const timezones = [
    "GMT +04:00 (Dubai)",
    "GMT +05:00 (Pakistan)",
    "GMT +03:00 (Riyadh)",
    "GMT +00:00 (London)",
    "GMT -05:00 (New York)",
  ];

  const inputBase =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition " +
    "focus:border-emerald-200 focus:ring-2 focus:ring-emerald-100/80";

  const labelBase = "text-sm font-medium text-gray-700";
  const sectionTitle =
    "flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-800";
  const divider = "h-px w-full bg-gray-100";

  const checkboxBase =
    "h-4 w-4 rounded border-gray-300 accent-emerald-700 focus:ring-2 focus:ring-emerald-100";


  const Select = ({ value, onChange, children, className = "" }) => (
    <div className="relative mt-2">
      <select
        value={value}
        onChange={onChange}
        className={`${inputBase} appearance-none pr-10 ${className}`}
      >
        {children}
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Card */}
        <div className="bg-white border border-emerald-100 rounded-2xl shadow-lg shadow-black/5 overflow-hidden">
          {/* Header */}
          <div className="px-10 pt-10 pb-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              General Inquiry
            </h2>
            <p className="mt-3 text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>

          <div className="px-10">
            <div className={divider} />
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="px-10 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Personal Information */}
              <div>
                <div className={sectionTitle}>
                  <User size={18} />
                  PERSONAL INFORMATION
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <label className={labelBase}>First Name</label>
                    <input className={`${inputBase} mt-2`} />
                  </div>

                  <div>
                    <label className={labelBase}>Last Name</label>
                    <input className={`${inputBase} mt-2`} />
                  </div>

                  <div>
                    <label className={labelBase}>Email Address</label>
                    <input type="email" className={`${inputBase} mt-2`} />
                  </div>

                  <div>
                    <label className={labelBase}>Phone Number</label>
                    <input className={`${inputBase} mt-2`} />
                    <p className="mt-2 text-xs text-gray-500">
                      Include country code (e.g., +1 234 567 8900)
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <div className={sectionTitle}>
                  <Building2 size={18} />
                  COMPANY INFORMATION
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <label className={labelBase}>Company / Organization</label>
                    <input className={`${inputBase} mt-2`} />
                  </div>

                  <div>
                    <label className={labelBase}>Country</label>
                    <Select value="" onChange={() => { }}>
                      <option value="">Select your country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <label className={labelBase}>Subject</label>
                    <input
                      className={`${inputBase} mt-2`}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label className={labelBase}>Priority Level</label>
                    <Select
                      value={form.priority}
                      onChange={(e) =>
                        setForm({ ...form, priority: e.target.value })
                      }
                    >
                      <option>Normal</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-12">
              <div className={divider} />
              <div className="mt-10">
                <div className={sectionTitle}>
                  <MessageSquareText size={18} />
                  YOUR MESSAGE
                </div>

                <div className="mt-6">
                  <label className={labelBase}>Message</label>
                  <textarea
                    className={`${inputBase} mt-2 min-h-[150px] resize-none`}
                    placeholder="Please provide detailed information about your inquiry, requirements, or questions."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    maxLength={1000}
                  />
                  <div className="flex justify-end">
                    <p className="mt-2 text-xs text-gray-400">
                      {form.message.length} / 1000 characters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Preferences */}
            <div className="mt-12">
              <div className={divider} />
              <div className="mt-10">
                <div className={sectionTitle}>
                  <SlidersHorizontal size={18} />
                  COMMUNICATION PREFERENCES
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Preferred Contact Method
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-700">
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" className={checkboxBase} />
                        Email
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" className={checkboxBase} />
                        Phone
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="checkbox" className={checkboxBase} />
                        WhatsApp
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Your Timezone
                    </p>

                    <div className="mt-2">
                      <div className="relative">
                        <select className={`${inputBase} appearance-none pr-10`}>
                          <option>Select your timezone</option>
                          {timezones.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                      </div>
                    </div>

                    <label className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                      <input type="checkbox" className={`${checkboxBase} mt-1`} />
                      Subscribe to our newsletter for updates and insights
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Agree Box */}
            <div className="mt-12">
              <div className={divider} />
              <div className="mt-10">
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl px-6 py-5">
                  <label className="flex items-start gap-3 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      className={`${checkboxBase} mt-1`}
                      checked={form.agree}
                      onChange={(e) =>
                        setForm({ ...form, agree: e.target.checked })
                      }
                    />
                    <span>
                      I agree to the{" "}
                      <a
                        href="#"
                        className="font-medium text-emerald-800 hover:underline"
                      >
                        Terms &amp; Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-emerald-800 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-12">
              <div className={divider} />
              <div className="pt-8 flex flex-col items-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-900 to-amber-900 hover:from-emerald-950 hover:to-amber-950 shadow-lg shadow-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                >

                  <Send size={16} />
                  Send Message
                </button>

                <p className="mt-4 text-xs text-gray-400">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
