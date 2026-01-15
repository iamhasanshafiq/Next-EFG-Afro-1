"use client";

import Card from "../common/Card";
import { Wheat, Cpu, TrendingUp, Trophy, ListFilter } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BlogCategories() {
  const t = useTranslations("BlogCategories");

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

        {/* Cards – 🔒 LTR LOCK */}
        <div
          dir="ltr"
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              icon={cat.icon}
              title={cat.title}
              description={cat.description}
              articles={cat.articles}
              bgType={cat.bgType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
