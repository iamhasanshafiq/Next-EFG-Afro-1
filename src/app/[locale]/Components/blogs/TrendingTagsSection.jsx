"use client";

import { useMemo } from "react";
import { Flame } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TrendingTagsSection() {
  const t = useTranslations("TrendingTagsSection");

  const tags = useMemo(
    () => [
      "AfricanTrade",
      "SustainableFarming",
      "DigitalAgriculture",
      "ExportOpportunities",
      "MarketAccess",
      "Blockchain",
      "CoffeeExport",
      "SupplyChain",
      "FairTrade",
      "AgTech",
      "CocoaIndustry",
      "TradeFinance",
      "GreenTechnology",
      "FoodSecurity",
      "EcommercePlatform",
    ],
    []
  );

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-gray-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-900/20 bg-green-900/10 text-green-900 font-semibold">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>{t("Badge")}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-center text-5xl md:text-4xl font-extrabold text-gray-800">
          {t("Title")}
        </h2>

        {/* Underline */}
        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-20 bg-[#D67C2A] rounded-full" />
        </div>

        {/* Tags container */}
        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-5xl bg-white/90 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/60 px-8 py-10">
            <div className="flex flex-wrap justify-center gap-5">
              {tags.map((key) => (
                <button
                  key={key}
                  className="group relative overflow-hidden px-6 py-3 rounded-2xl font-semibold bg-white border border-gray-300 text-gray-800 shadow-sm transition-all duration-300 ease-out hover:text-white hover:shadow-md hover:border-transparent"
                >
                  {/* Sliding background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0B4E3C] to-[#D67C2A] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

                  {/* Text */}
                  <span className="relative z-10">
                    {t(`Tags.${key}`)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
