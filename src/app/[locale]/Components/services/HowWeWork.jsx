"use client";
import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  DraftingCompass,
  Wrench,
  ChartLine,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

function HowWeWork() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("HowWeWork");
  const locale = useLocale();
  const isRTL = locale === "ar";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { id: "01", icon: MessageCircle, title: t("Step1Title"), desc: t("Step1Desc"), delay: 100 },
    { id: "02", icon: DraftingCompass, title: t("Step2Title"), desc: t("Step2Desc"), delay: 300, alignRight: true },
    { id: "03", icon: Wrench, title: t("Step3Title"), desc: t("Step3Desc"), delay: 500 },
    { id: "04", icon: ChartLine, title: t("Step4Title"), desc: t("Step4Desc"), delay: 700, alignRight: true },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
            {t("Badge")}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            {t("Title")}
          </h2>
          <p className="mt-3 text-gray-600">
            {t("Description")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-green-800 -translate-x-1/2"></div>
          <div className="md:hidden absolute left-6 top-0 h-full w-[2px] bg-green-800"></div>

          {steps.map((step) => {
            const Icon = step.icon;

            // 🔑 RTL flip logic (sirf positioning)
            const alignEnd = isRTL ? !step.alignRight : step.alignRight;

            return (
              <div
                key={step.id}
                className={`relative flex mb-16 md:mb-24 group transition-all duration-1000 transform
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  ${alignEnd ? "md:justify-end" : ""}
                `}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                {/* Dot & Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="relative ml-2 md:ml-0 pt-10">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-green-800 text-white text-xs font-bold flex items-center justify-center z-20 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      {step.id}
                    </span>

                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center border border-gray-100 shadow-md transition-all duration-500 ease-out group-hover:bg-green-800 group-hover:scale-125 group-hover:shadow-lg group-hover:z-30">
                      <Icon className="w-7 h-7 text-green-800 transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                {/* Content (HOVER SAME AS BEFORE) */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    alignEnd
                      ? isRTL
                        ? "md:pr-16 text-left"
                        : "md:pl-16 text-left"
                      : isRTL
                        ? "md:pl-16 text-left"
                        : "md:pr-16 md:mr-auto text-left md:text-right"
                  }`}
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm cursor-default
                    transition-all duration-500 ease-out
                    hover:-translate-y-3 hover:border-green-600
                    hover:shadow-[0_20px_40px_rgba(22,163,74,0.15)]"
                  >
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
