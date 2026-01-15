"use client";

import { MapPin, Clock, Zap, ShoppingCart, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactInfoSection() {
  const t = useTranslations("contactInfo");

  return (
    <section
      className="py-24 bg-[#F8F9FA]"
      dir="ltr"   // 🔴 Force layout LTR
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">

          {/* LEFT CARD */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-10 shadow-sm mb-6 lg:mb-10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-emerald-700" />
              <h3 className="text-xl font-semibold text-gray-800">
                {t("office.title")}
              </h3>
            </div>

            <div className="h-px bg-emerald-100 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-8 text-left">
              {t("office.address")}
            </p>

            <h4 className="font-semibold text-gray-800 mb-4 text-left">
              {t("office.businessHoursTitle")}
            </h4>

            <div className="space-y-4 text-gray-600 text-left">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>{t("office.hours.weekday.label")}</span>
                <span>{t("office.hours.weekday.time")}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span>{t("office.hours.saturday.label")}</span>
                <span>{t("office.hours.saturday.time")}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("office.hours.sunday.label")}</span>
                <span className="font-medium text-gray-700">
                  {t("office.hours.sunday.time")}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-10 shadow-sm mb-6 lg:mb-10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-emerald-700" />
              <h3 className="text-xl font-semibold text-gray-800">
                {t("responseTimes.title")}
              </h3>
            </div>

            <div className="h-px bg-emerald-100 mb-6" />

            <div className="space-y-6">

              {/* ITEM */}
              <div className="flex items-center gap-4 border border-emerald-100 rounded-xl p-5 bg-white text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-orange-400 flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {t("responseTimes.general.label")}
                  </p>
                  <p className="text-emerald-700 text-sm font-semibold">
                    {t("responseTimes.general.time")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-emerald-100 rounded-xl p-5 bg-white text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-orange-400 flex items-center justify-center text-white">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {t("responseTimes.product.label")}
                  </p>
                  <p className="text-emerald-700 text-sm font-semibold">
                    {t("responseTimes.product.time")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-emerald-100 rounded-xl p-5 bg-white text-left">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-700 to-orange-400 flex items-center justify-center text-white">
                  <Headphones size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {t("responseTimes.support.label")}
                  </p>
                  <p className="text-emerald-700 text-sm font-semibold">
                    {t("responseTimes.support.time")}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
