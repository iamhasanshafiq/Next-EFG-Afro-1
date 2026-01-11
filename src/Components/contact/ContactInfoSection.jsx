"use client";

import { MapPin, Clock, Zap, ShoppingCart, Headphones } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-10 shadow-sm mb-6 lg:mb-10">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-emerald-700" />
              <h3 className="text-xl font-semibold text-gray-800">
                Our Office
              </h3>
            </div>

            <div className="h-px bg-emerald-100 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-8">
              Office 206, Abraj Al Mamzar Building, Block A Al Ittihad Road,
              PO Box 15058 Dubai, United Arab Emirates
            </p>

            <h4 className="font-semibold text-gray-800 mb-4">
              Business Hours
            </h4>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Monday – Friday</span>
                <span>9:00 AM – 6:00 PM (GST)</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>Saturday</span>
                <span>10:00 AM – 4:00 PM (GST)</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-gray-700">Closed</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-10 shadow-sm mb-6 lg:mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-emerald-700" />
              <h3 className="text-xl font-semibold text-gray-800">
                Response Times
              </h3>
            </div>

            <div className="h-px bg-emerald-100 mb-6" />

            <div className="space-y-6">

              <div className="flex items-center gap-4 border border-emerald-100 rounded-xl p-5 bg-white">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-orange-400 flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    General Inquiries
                  </p>
                  <p className="text-emerald-700 text-sm font-semibold">
                    Within 4 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-emerald-100 rounded-xl p-5 bg-white">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-orange-400 flex items-center justify-center text-white">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Product Inquiries
                  </p>
                  <p className="text-emerald-700 text-sm font-semibold">
                    Within 2 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-emerald-100 rounded-xl p-5 bg-white">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-orange-400 flex items-center justify-center text-white">
                  <Headphones size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Technical Support
                  </p>
                  <p className="text-emerald-700 text-sm font-semibold">
                    Within 1 hour
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
