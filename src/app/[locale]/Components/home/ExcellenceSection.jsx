"use client";

import { Globe, RefreshCw, Settings, Shield, Truck, Eye } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function ExcellenceSection() {
  const t = useTranslations("ExcellenceSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  // =========================
  // SERVICES DATA (ORIGINAL)
  // =========================
  const services = [
    { id: 1, titleKey: "Card1Title", descKey: "Card1Description", icon: Globe },
    { id: 2, titleKey: "Card2Title", descKey: "Card2Description", icon: RefreshCw },
    { id: 3, titleKey: "Card3Title", descKey: "Card3Description", icon: Settings },
    { id: 4, titleKey: "Card4Title", descKey: "Card4Description", icon: Shield },
    { id: 5, titleKey: "Card5Title", descKey: "Card5Description", icon: Truck },
    { id: 6, titleKey: "Card6Title", descKey: "Card6Description", icon: Eye }, // Explore card
  ];

  // =========================
  // RTL ORDER LOGIC
  // =========================
  const mainServices = services.slice(0, 5);
  const lastService = services[5];

  const displayedServices = isRTL
    ? [...mainServices].reverse().concat(lastService)
    : services;

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full bg-white py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-block bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
            {t("OUREXCELLENCE")}
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          {t("ComprehensiveServicesActivities")}
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-lg md:text-xl mb-16">
          {t("OUREXCELLENCEDescription")}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => {
            const IconComponent = service.icon;
            const isExploreCard = service.icon === Eye;

            return (
              <div
                key={service.id}
                dir="ltr"
                className={`rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
                  isExploreCard
                    ? "bg-[#055440] text-white"
                    : "bg-teal-50 border-2 border-teal-600 hover:border-orange-500 hover:shadow-lg"
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div
                    className={`rounded-2xl p-4 ${
                      isExploreCard
                        ? "bg-white text-[#055440]"
                        : "bg-teal-700 text-white"
                    }`}
                  >
                    <IconComponent size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold text-center mb-4 ${
                    isExploreCard ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p
                  className={`text-center mb-8 flex-grow ${
                    isExploreCard ? "text-white" : "text-gray-600"
                  }`}
                >
                  {t(service.descKey)}
                </p>

                {/* Button */}
                <div className="flex justify-center">
                  <button
                    className={`rounded-full p-3 transition-all duration-300 ${
                      isExploreCard
                        ? "bg-white text-[#055440]"
                        : "bg-teal-700 text-white hover:bg-teal-800 hover:scale-110"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isRTL ? "rotate-180" : ""
                      }`}
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
