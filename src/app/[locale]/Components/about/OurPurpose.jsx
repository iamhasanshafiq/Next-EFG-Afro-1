"use client";

import React, { useState } from "react";
import { Eye, Flag, Target, Trophy, Gem, Users, Check } from "lucide-react";
import { useTranslations } from "next-intl";

function OurPurpose() {
  const t = useTranslations("OurPurpose");
  const [cardWidth] = useState(48);

  return (
    <section className="w-full flex flex-col items-center py-20 my-10 bg-gray-50">
      <style>
        {`
          @keyframes smoothBounce {
            0%   { transform: translateY(0); }
            40%  { transform: translateY(-6px); }
            60%  { transform: translateY(2px); }
            100% { transform: translateY(0); }
          }
          .bounce-hover {
            border-style: solid;
            border-top-width: 4px;
            border-top-color: #166534;
            border-left-width: 0;
            border-right-width: 0;
            border-bottom-width: 0;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
            transition: all 0.3s ease-in-out;
            border-radius: 0.5rem;
            background-color: #ffffff;
          }
          .bounce-hover:hover {
            animation: smoothBounce 3s ease-in-out infinite;
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
            transform: scale(1.03);
          }
        `}
      </style>

      <div className="container max-w-[1450px] w-full mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="w-fit block px-3 py-1 text-sm font-medium text-green-900 bg-gray-200 rounded-full mb-3 flex items-center justify-center gap-2 mx-auto">
            <Flag className="text-amber-600" />
            {t("OurPurpose")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {t("OurPurposeTitle")}
          </h2>

          <p className="text-gray-500 mt-2">
            {t("OurPurposeDescription")}
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {/* MISSION */}
          <div
            className="bounce-hover h-auto p-6 md:p-8 order-1 rtl:order-2"
            style={{ width: `${cardWidth}%` }}
            dir="ltr"
          >
            <div className="flex items-center mb-4">
              <div className="w-15 h-15 bg-green-900 rounded-2xl text-4xl text-white flex items-center justify-center">
                <Target />
              </div>
              <h3 className="text-2xl font-bold ml-3 text-gray-800">
                {t("OurMission")}
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              {t("OurMissionDescription")}
            </p>

            <ul className="space-y-3">
              {[
                t("DigitallyempowerAfricanproducers"),
                t("Simplifyglobaltradeprocesses"),
                t("Createsustainableeconomicopportunities"),
                t("Connectinternationalbuyersseamlessly"),
              ].map((point, i) => (
                <li key={i} className="flex items-start text-gray-600 gap-2">
                  <Check className="text-emerald-500 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* VISION */}
          <div
            className="bounce-hover h-auto p-6 md:p-8 order-2 rtl:order-1"
            style={{ width: `${cardWidth}%` }}
            dir="ltr"
          >
            <div className="flex items-center mb-4">
              <div className="w-15 h-15 bg-amber-600 rounded-2xl text-4xl text-white flex items-center justify-center">
                <Eye />
              </div>
              <h3 className="text-2xl font-bold ml-3 text-gray-800">
                {t("OurVision")}
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              {t("OurVisionDescription")}
            </p>

            <div className="space-y-4">
              {[
                { icon: Trophy, title: t("MarketLeadership"), desc: t("MarketLeadershipDescription") },
                { icon: Gem, title: t("ResourceShowcase"), desc: t("ResourceShowcaseDescription") },
                { icon: Users, title: t("InclusiveGrowth"), desc: t("InclusiveGrowthDescription") },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-l-6 rtl:border-l-0 rtl:border-r-6 border-amber-600 p-4 bg-gray-100 hover:bg-[#fcf2ef] rounded-2xl flex items-center gap-4 transform transition-transform duration-500 hover:translate-x-2 rtl:hover:-translate-x-2"
                >
                  <div className="w-12 h-12 bg-amber-600 rounded-2xl text-2xl text-white flex items-center justify-center">
                    <item.icon />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPurpose;
