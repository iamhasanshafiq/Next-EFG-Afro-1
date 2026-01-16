"use client";

import {
  Globe,
  RefreshCw,
  Settings,
  Shield,
  Truck,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRef, useEffect, useState } from "react";
import Container from "../../container";

export default function ExcellenceSection() {
  const t = useTranslations("ExcellenceSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const sliderRef = useRef(null);

  // 🔥 HYDRATION FIX
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // =========================
  // SERVICES DATA
  // =========================
  const services = [
    { id: 1, titleKey: "Card1Title", descKey: "Card1Description", icon: Globe },
    { id: 2, titleKey: "Card2Title", descKey: "Card2Description", icon: RefreshCw },
    { id: 3, titleKey: "Card3Title", descKey: "Card3Description", icon: Settings },
    { id: 4, titleKey: "Card4Title", descKey: "Card4Description", icon: Shield },
    { id: 5, titleKey: "Card5Title", descKey: "Card5Description", icon: Truck },
    { id: 6, titleKey: "Card6Title", descKey: "Card6Description", icon: Eye },
  ];

  // =========================
  // SLIDE ONE CARD (CENTER)
  // =========================
  const slideLeft = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 32), // gap-8
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: card.offsetWidth + 32,
      behavior: "smooth",
    });
  };

  return (
    <section
      dir="ltr"
      className="w-full bg-white py-16 md:py-24 lg:py-32"
    >
      <Container>
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

        {/* 🔹 SLIDER WRAPPER */}
        <div className="relative">
          {/* LEFT BUTTON (mobile only) */}
          <button
            onClick={slideLeft}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-teal-700 hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON (mobile only) */}
          <button
            onClick={slideRight}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-teal-700 hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* 🔥 HYDRATION SAFE */}
          {mounted && (
            <div
              ref={sliderRef}
              className="
                flex gap-8 overflow-x-auto scrollbar-hide
                snap-x snap-mandatory
                px-[12vw]

                md:grid md:grid-cols-2 lg:grid-cols-3
                md:px-0 md:overflow-visible md:snap-none
              "
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {services.map((service) => {
                const IconComponent = service.icon;
                const isExploreCard = service.icon === Eye;

                return (
                  <div
                    key={service.id}
                    className="
                      snap-center flex-shrink-0
                      w-[300px]
                      md:w-auto
                    "
                  >
                    <div
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
