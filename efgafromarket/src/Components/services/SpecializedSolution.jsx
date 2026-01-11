"use client";
import React, { useEffect, useState } from "react";
import { Truck, TrendingUp, GraduationCap, ShoppingCart, Leaf, Headset } from "lucide-react";

function SpecializedSolution() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Truck,
      title: "Authenticity",
      features: [
        "Online product catalog management",
        "Real-time inventory tracking",
        "Multi-language support",
        "Find top-rated products in one place",
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Market Research & Analytics",
      features: [
        "Market trend analysis",
        "Price monitoring",
        "Demand forecasting",
        "Competitive intelligence",
      ],
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Training & Consultation",
      features: [
        "Digital marketing training",
        "Business development",
        "Quality standards education",
        "Technology adoption support",
      ],
    },
    {
      id: 4,
      icon: Leaf,
      title: "Sustainability Consulting",
      features: [
        "Organic certification support",
        "Sustainable farming practices",
        "Environmental compliance",
        "Carbon footprint reduction",
      ],
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: "Buyer Support Services",
      features: [
        "Product sourcing assistance",
        "Supplier verification",
        "Quality assurance programs",
        "Order management support",
      ],
    },
    {
      id: 6,
      icon: Headset,
      title: "24/7 Customer Support",
      features: [
        "Round-the-clock assistance",
        "Multi-language support",
        "Technical troubleshooting",
        "Priority response system",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-5">
        <span
          className={`mx-auto w-fit flex items-center justify-center px-3 py-1 text-sm font-medium text-emerald-600 bg-gray-200 rounded-full mb-5 gap-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          SPECIALIZED SOLUTIONS
        </span>

        <h2
          className={`text-3xl mb-3 sm:text-4xl font-bold text-gray-800 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Additional Services
        </h2>

        <p
          className={`text-gray-500 mb-3 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Extended services to support every aspect of your business journey
        </p>
      </div>

      {/* Cards Container (FIXED: single-line className) */}
      <div
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:snap-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`snap-start flex-shrink-0 w-72 lg:w-auto bg-white border-2 border-transparent rounded-xl p-6 shadow-sm flex flex-col items-center justify-center hover:border-green-800 hover:-translate-y-2 group relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(22,101,52,0.4)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-800 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon */}
              <div className="bg-green-900 w-16 h-16 rounded-lg flex items-center justify-center text-white text-3xl group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-500">
                <IconComponent size={32} />
              </div>

              <h3 className="text-xl font-bold mt-4 text-center group-hover:text-green-800 transition-colors duration-300">
                {service.title}
              </h3>

              <ul className="space-y-2 mt-4 w-full">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-white mr-3 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-600 flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SpecializedSolution;
