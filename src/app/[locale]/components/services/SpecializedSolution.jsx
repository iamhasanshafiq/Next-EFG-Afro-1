"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Truck,
  TrendingUp,
  GraduationCap,
  ShoppingCart,
  Leaf,
  Headset,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

function SpecializedSolution() {
  const t = useTranslations("SpecializedSolutionAlt");
  const sliderRef = useRef(null);

  // 🔒 HARD HYDRATION FIX
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ VERY IMPORTANT (prevents hydration error)
  if (!mounted) return null;

  const services = [
    {
      id: 1,
      icon: Truck,
      title: t("Service1Title"),
      features: [
        t("Service1Feature1"),
        t("Service1Feature2"),
        t("Service1Feature3"),
        t("Service1Feature4"),
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: t("Service2Title"),
      features: [
        t("Service2Feature1"),
        t("Service2Feature2"),
        t("Service2Feature3"),
        t("Service2Feature4"),
      ],
    },
    {
      id: 3,
      icon: GraduationCap,
      title: t("Service3Title"),
      features: [
        t("Service3Feature1"),
        t("Service3Feature2"),
        t("Service3Feature3"),
        t("Service3Feature4"),
      ],
    },
    {
      id: 4,
      icon: Leaf,
      title: t("Service4Title"),
      features: [
        t("Service4Feature1"),
        t("Service4Feature2"),
        t("Service4Feature3"),
        t("Service4Feature4"),
      ],
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: t("Service5Title"),
      features: [
        t("Service5Feature1"),
        t("Service5Feature2"),
        t("Service5Feature3"),
        t("Service5Feature4"),
      ],
    },
    {
      id: 6,
      icon: Headset,
      title: t("Service6Title"),
      features: [
        t("Service6Feature1"),
        t("Service6Feature2"),
        t("Service6Feature3"),
        t("Service6Feature4"),
      ],
    },
  ];

  // 🔹 Mobile: slide exactly ONE card (center)
  const slideLeft = () => {
    const card = sliderRef.current?.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 16),
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    const card = sliderRef.current?.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: card.offsetWidth + 16,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="text-center mb-8">
        <span className="mx-auto w-fit flex items-center justify-center px-3 py-1 text-sm font-medium text-emerald-600 bg-gray-200 rounded-full mb-5">
          {t("Badge")}
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          {t("Title")}
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          {t("Description")}
        </p>
      </div>

      {/* SLIDER / GRID */}
      <div className="relative">
        {/* LEFT BUTTON (mobile only) */}
        <button
          onClick={slideLeft}
          className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20
            bg-white shadow-lg rounded-full p-2
            hover:bg-green-900 hover:text-white transition"
        >
          <ChevronLeft />
        </button>

        {/* RIGHT BUTTON (mobile only) */}
        <button
          onClick={slideRight}
          className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20
            bg-white shadow-lg rounded-full p-2
            hover:bg-green-900 hover:text-white transition"
        >
          <ChevronRight />
        </button>

        {/* CARDS */}
        <div
          ref={sliderRef}
          dir="ltr"
          className="
            flex gap-4 overflow-x-auto pb-4 scrollbar-hide
            snap-x snap-mandatory
            px-[8vw]

            lg:grid lg:grid-cols-3 lg:gap-6
            lg:px-0 lg:overflow-visible lg:snap-none
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="
                  relative group
                  snap-center flex-shrink-0
                  w-[85vw] sm:w-[75vw] md:w-[320px] lg:w-auto
                  bg-white border-2 border-transparent
                  rounded-xl overflow-hidden
                  p-6 shadow-sm flex flex-col items-center justify-center
                  transition-all duration-300
                  hover:border-green-800 hover:-translate-y-2
                "
              >
                {/* TOP HOVER BORDER (ROUNDED & CLIPPED) */}
                <div
                  className="
                    absolute top-0 left-0 right-0
                    h-[3px] rounded-t-xl
                    bg-gradient-to-r from-green-800 to-orange-400
                    scale-x-0 group-hover:scale-x-100
                    origin-left transition-transform duration-500
                  "
                />

                {/* ICON */}
                <div
                  className="
                    bg-green-900 w-16 h-16 rounded-2xl
                    flex items-center justify-center text-white mb-4
                    group-hover:bg-orange-500 group-hover:rotate-6
                    transition-all duration-500
                  "
                >
                  <IconComponent size={32} />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-center mb-3 group-hover:text-green-800 transition-colors">
                  {service.title}
                </h3>

                {/* FEATURES */}
                <ul className="space-y-2 w-full">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SpecializedSolution;
