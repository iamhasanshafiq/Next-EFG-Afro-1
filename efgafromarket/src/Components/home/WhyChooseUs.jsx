"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "100% Organic Products",
      description: "Certified organic products straight from African farms",
      icon: "🌿",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
      image: "/fresh-vegetables-in-wooden-crate.jpg",
      heading: "Healthy Food is The Key to Your Good Mood",
      content:
        "Our organic products are carefully selected from certified farms across Africa. Each product undergoes rigorous quality testing to ensure you receive only the finest African produce.",
      benefits: [
        "Certified organic farms across Africa",
        "Rigorous quality testing standards",
        "Direct from farm to market",
        "Sustainable farming practices",
      ],
    },
    {
      id: 1,
      title: "Express Global Delivery",
      description: "Fast and secure shipping worldwide",
      icon: "🚚",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
      image: "/shipping-cargo-containers.jpg",
      heading: "Fast & Secure Global Shipping",
      content:
        "We provide express shipping options with real-time tracking to ensure your African products reach you fresh and on time, no matter where you are in the world.",
      benefits: [
        "Express shipping options available",
        "Real-time tracking for all orders",
        "Temperature-controlled transportation",
        "Secure packaging guaranteed",
      ],
    },
    {
      id: 2,
      title: "100% Satisfaction Guarantee",
      description: "Your satisfaction is our top priority",
      icon: "🎯",
      borderColor: "border-orange-400",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-500",
      image: "/team-collaboration.jpg",
      heading: "Your Satisfaction is Our Promise",
      content:
        "We stand behind every product we sell. Our commitment to excellence means you can shop with confidence, knowing we'll make things right if you're not completely satisfied.",
      benefits: [
        "30-day money-back guarantee",
        "24/7 customer support",
        "Quality assurance on every order",
        "Hassle-free returns and exchanges",
      ],
    },
  ];

  const currentFeature = features[selectedFeature];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-12 flex items-start">
          <div className="inline-block bg-teal-700 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-widest animate-fadeIn">
            WHY CHOOSE US
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-1 space-y-6 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose EFG Afro Market
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`w-full text-left rounded-2xl p-6 border-2 transition-all duration-300 ${
                    selectedFeature === index
                      ? `${feature.borderColor} ${feature.bgColor} shadow-lg scale-105`
                      : "border-gray-200 bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-lg ${
                        selectedFeature === index
                          ? feature.iconBg
                          : "bg-gray-200"
                      } flex items-center justify-center text-white text-2xl`}
                    >
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="lg:col-span-1 flex justify-center">
            <div
              key={selectedFeature}
              className="relative w-full max-w-sm animate-fadeIn"
            >
              <div className="rounded-3xl overflow-hidden border-8 border-orange-400 shadow-xl">
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.heading}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-500 animate-fadeIn">
              {currentFeature.heading}
            </h3>

            <p className="text-gray-600 animate-fadeIn">
              {currentFeature.content}
            </p>

            <div className="space-y-4">
              {currentFeature.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 pb-4 border-l-4 border-orange-400 pl-4 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-700 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
