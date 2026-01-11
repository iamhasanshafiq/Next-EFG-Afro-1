"use client";

import { Globe, RefreshCw, Settings, Shield, Truck, Eye } from "lucide-react";
export default function ExcellenceSection() {
  const services = [
    {
      id: 1,
      title: "Global Marketplace Platform",
      description:
        "Online product listing and cataloging of African commodities, cultural goods, and natural resources.",
      icon: Globe,
    },
    {
      id: 2,
      title: "Supply Chain Management",
      description:
        "Complete supply chain design, from farmgate to final buyer with real-time tracking.",
      icon: RefreshCw,
    },
    {
      id: 3,
      title: "Agri-Technology Integration",
      description:
        "Smart agriculture practices through digital tools, sensors, and mobile advisory services.",
      icon: Settings,
    },
    {
      id: 4,
      title: "Secure Payment Systems",
      description:
        "Multi-currency payment gateway with blockchain-backed transaction validation.",
      icon: Shield,
    },
    {
      id: 5,
      title: "Export & Import Facilitation",
      description:
        "Customs clearance, documentation, and international market access consulting.",
      icon: Truck,
    },
    {
      id: 6,
      title: "Explore All Services",
      description:
        "Discover our complete range of comprehensive services & activities with detailed insights.",
      icon: Eye,
    },
  ];
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-block bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
            OUR EXCELLENCE
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Comprehensive Services & Activities
        </h2>
        <p className="text-center text-gray-600 text-lg md:text-xl mb-16">
          Discover our complete range of professional services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${index === 5
                  ? "bg-[#055440] text-white"
                  : "bg-teal-50 border-2 border-teal-600 hover:border-orange-500 hover:shadow-lg"
                  }`}
              >
                <div className="flex justify-center mb-8">
                  <div
                    className={`rounded-2xl p-4 ${index === 5 ? "bg-white text-[#055440]" : "bg-teal-700 text-white"
                      }`}
                  >
                    <IconComponent size={32} />
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold text-center mb-4 ${index === 5 ? "text-white" : "text-gray-900"
                    }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-center mb-8 flex-grow ${index === 5 ? "text-white" : "text-gray-600"
                    }`}
                >
                  {service.description}
                </p>

                <div className="flex justify-center">
                  <button
                    className={`rounded-full p-3 transition-all duration-300 ${index === 5
                      ? "bg-white text-[#055440]"
                      : "bg-teal-700 text-white hover:bg-teal-800 hover:scale-110"
                      }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
