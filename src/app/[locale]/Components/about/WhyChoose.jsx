"use client";

import React, { useState, useEffect } from "react";
import { Settings, Truck, Headset, Clock, Medal, Check } from "lucide-react";
import { useTranslations } from "next-intl";

function WhyChoose() {
  const t = useTranslations("WhyChoose");

  const [activeTab, setActiveTab] = useState("technology");
  const [imageScale, setImageScale] = useState(1);

  const TABS = {
    technology: {
      title: t("TechnologyTitle"),
      desc: t("TechnologyDescription"),
      image:
        "/images/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg",
      label: t("AdvancedTechnology"),
      icon: Settings,
      points: [
        t("AIpoweredqualityverification"),
        t("Blockchainsecuredtransactions"),
        t("IoTenabledsupplychaintracking"),
        t("Mobilefirstdesign"),
      ],
    },
    logistics: {
      title: t("LogisticsTitle"),
      desc: t("LogisticsDescription"),
      image: "/images/glgofficial_cover.jpg",
      label: t("GlobalLogistics"),
      icon: Truck,
      points: [
        t("Coldchainfacilities"),
        t("Expressshipping"),
        t("Customsclearance"),
        t("Realtimetracking"),
      ],
    },
    support: {
      title: t("SupportTitle"),
      desc: t("SupportDescription"),
      image:
        "/images/360_F_542604531_DGyPu4WuqiUykOtt6DwadjlRmgOzQaM5.jpg",
      label: t("DedicatedSupport"),
      icon: Headset,
      points: [
        t("customersupport"),
        t("Multilingualhelp"),
        t("Producertraining"),
        t("Marketinsights"),
      ],
    },
  };

  const current = TABS[activeTab];
  const Icon = current.icon;

  useEffect(() => {
    setImageScale(0.96);
    const t1 = setTimeout(() => setImageScale(1.04), 150);
    const t2 = setTimeout(() => setImageScale(1), 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [activeTab]);

  return (
    <section className="bg-gray-50 py-24 w-full flex justify-center">
      {/* 🔒 FORCE LTR LAYOUT */}
      <div
        dir="ltr"
        className="max-w-7xl w-full flex flex-col md:flex-row gap-12 items-center"
      >
        {/* LEFT — TEXT */}
        <div className="w-full md:w-1/2 px-6 rtl:items-end">
          <span
            dir="ltr"
            className="inline-flex self-start items-center gap-2 bg-gray-200 text-green-900 px-3 py-1 rounded-full mb-6"
          >
            <Medal className="text-amber-500" />
            {t("WhyChoose")}
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t("WhyChooseTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-green-500 to-yellow-500">
              {t("WhyChooseHighlight")}
            </span>
          </h2>

          <p className="text-gray-500 mb-10">
            {t("WhyChooseDescription")}
          </p>

          {/* TABS (LTR LOCKED) */}
          <div dir="ltr" className="flex gap-3 flex-wrap mb-10">
            {Object.keys(TABS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-green-900 text-white scale-105"
                      : "border text-gray-500 hover:bg-green-900 hover:text-white"
                  }`}
              >
                {tab === "technology" && <Settings />}
                {tab === "logistics" && <Truck />}
                {tab === "support" && <Headset />}
                {t(tab.charAt(0).toUpperCase() + tab.slice(1))}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <h3 className="text-2xl font-semibold mb-3">
            {current.title}
          </h3>
          <p className="text-gray-400 mb-6">
            {current.desc}
          </p>

          <ul dir="ltr" className="space-y-4">
            {current.points.map((item, i) => (
              <li key={i} className="flex gap-3 items-center">
                <Check className="text-green-900" />
                <span className="text-gray-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — IMAGE (ALWAYS RIGHT) */}
        <div
          dir="ltr"
          className="w-full md:w-[40%] relative flex justify-center"
        >
          <div
            className="w-full h-[400px] overflow-hidden rounded-2xl transition-transform duration-500"
            style={{ transform: `scale(${imageScale})` }}
          >
            <img
              src={current.image}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
            <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <p className="text-xl font-semibold">{current.label}</p>
          </div>

          <div className="absolute top-5 right-0 md:right-[-10%] bg-white border rounded-full shadow-md py-1 px-5 flex gap-2 animate-bounce-slow">
            <Medal className="text-green-700" />
            <p className="font-semibold">{t("ISOCertified")}</p>
          </div>

          <div className="absolute top-1/2 left-0 md:left-[-10%] -translate-y-1/2 bg-white border rounded-full shadow-md py-1 px-5 animate-bounce-slow">
            <p className="font-semibold">{t("SecurePlatform")}</p>
          </div>

          <div className="absolute bottom-5 right-0 md:right-[-10%] bg-white border rounded-full shadow-md py-1 px-5 flex gap-2 animate-bounce-slow">
            <Clock className="text-green-700" />
            <p className="font-semibold">{t("Available")}</p>
          </div>

          <style>
            {`
              @keyframes bounce-slow {
                0%,100% { transform: translateY(0); }
                50% { transform: translateY(-10%); }
              }
              .animate-bounce-slow {
                animation: bounce-slow 3s infinite;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
