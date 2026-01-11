"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const deliverBadges = [
    "100% FRESH",
    "HEALTHY PRODUCT",
    "QUALITY FIRST",
    "ECO FRIENDLY",
    "FARM FOOD",
    "NATURAL FOOD",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter box */}
        <div className="mb-16 lg:mb-24 animate-fadeIn">
          <div className="relative bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl p-8 lg:p-12 shadow-lg overflow-hidden">

            <div className="absolute top-8 right-12 opacity-10 text-4xl">🍃</div>
            <div className="absolute bottom-4 right-32 opacity-10 text-5xl">🍃</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3 animate-slideUp">
                  Don't Miss Out on EFG Afro Market Updates
                </h2>
                <p className="text-white text-lg opacity-90 animate-slideUp">
                  Stay updated with the latest products, offers, and market insights
                </p>
              </div>

              <form onSubmit={handleSubmit} className="animate-slideUp">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        {/* We Deliver */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 animate-fadeIn">
            We Deliver
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {deliverBadges.map((badge, index) => (
              <div
                key={badge}
                className="border-2 border-teal-600 rounded-2xl px-4 py-6 text-center hover:scale-105 hover:shadow-lg animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-teal-600 font-bold text-sm lg:text-base">
                  {badge}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
