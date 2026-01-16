"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../common/Card";
import {
  Wheat,
  Cpu,
  TrendingUp,
  Trophy,
  ListFilter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function BlogCategories() {
  const t = useTranslations("BlogCategories");
  const sliderRef = useRef(null);

  // 🔒 HARD HYDRATION FIX
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ prevent hydration mismatch
  if (!mounted) return null;

  const categories = [
    {
      icon: Wheat,
      title: t("AgricultureTitle"),
      description: t("AgricultureDescription"),
      articles: 1,
      bgType: "gradient",
    },
    {
      icon: Cpu,
      title: t("TechnologyTitle"),
      description: t("TechnologyDescription"),
      articles: 0,
      bgType: "gradient",
    },
    {
      icon: TrendingUp,
      title: t("MarketInsightsTitle"),
      description: t("MarketInsightsDescription"),
      articles: 1,
      bgType: "gradient",
    },
    {
      icon: Trophy,
      title: t("SuccessStoriesTitle"),
      description: t("SuccessStoriesDescription"),
      articles: 0,
      bgType: "gradient",
    },
  ];

  // 🔹 Mobile: slide exactly ONE card (center)
  const slideLeft = () => {
    const card = sliderRef.current?.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 24),
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    const card = sliderRef.current?.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: card.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-900/20 bg-green-900/10 text-green-900 font-semibold">
            <ListFilter className="w-4 h-4 text-orange-500" />
            <span>{t("Badge")}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-center text-5xl md:text-4xl font-bold text-gray-800">
          {t("Title")}
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          {t("Description")}
        </p>

        {/* SLIDER / GRID */}
        <div className="relative mt-16">
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
              flex gap-8 overflow-x-auto scrollbar-hide
              snap-x snap-mandatory
              px-[10vw]

              lg:grid lg:grid-cols-4 lg:gap-10
              lg:px-0 lg:overflow-visible lg:snap-none
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="
                  snap-center flex-shrink-0
                  w-[85vw] sm:w-[70vw] md:w-[320px] lg:w-auto
                "
              >
                <Card
                  icon={cat.icon}
                  title={cat.title}
                  description={cat.description}
                  articles={cat.articles}
                  bgType={cat.bgType}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
