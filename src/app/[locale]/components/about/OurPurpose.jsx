"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Eye,
  Flag,
  Target,
  Trophy,
  Gem,
  Users,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

function OurPurpose() {
  const t = useTranslations("OurPurpose");
  const sliderRef = useRef(null);

  // 🔥 Hydration-safe
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ 1 click = 1 card (center)
  const slideLeft = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: -(card.offsetWidth + 24),
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector(".snap-center");
    if (!card) return;

    sliderRef.current.scrollBy({
      left: card.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-20 bg-gray-50 overflow-x-hidden">
      {/* 🔹 Hover animation */}
      <style>{`
        @keyframes smoothBounce {
          0% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }
        .bounce-hover {
          border-top: 4px solid #166534;
          border-radius: 0.75rem;
          background: white;
          transition: all 0.3s ease;
        }
        .bounce-hover:hover {
          animation: smoothBounce 3s ease-in-out infinite;
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
          transform: scale(1.03);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="mx-auto w-fit flex items-center gap-2 px-3 py-1 text-sm font-medium text-green-900 bg-gray-200 rounded-full mb-3">
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

        {/* SLIDER WRAPPER */}
        <div className="relative">
          {/* ARROWS (mobile only) */}
          <button
            onClick={slideLeft}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-green-900 hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={slideRight}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-green-900 hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* CONTENT */}
          {mounted && (
            <div
              ref={sliderRef}
              className="
                flex gap-6 overflow-x-auto scrollbar-hide
                snap-x snap-mandatory
                px-[12vw]

                md:px-[8vw]
                lg:grid lg:grid-cols-2 lg:gap-8
                lg:overflow-visible lg:snap-none
              "
              style={{
                WebkitOverflowScrolling: "touch",
                direction: "ltr",          // ✅ ADDED (fix RTL flip)
                unicodeBidi: "isolate",    // ✅ ADDED (isolate from RTL tree)
              }}
            >
              {/* MISSION */}
              <div
                className="
                  bounce-hover snap-center flex-shrink-0
                  w-[85vw] sm:w-[70vw] md:w-[60vw]
                  lg:w-auto
                  p-6 md:p-8
                  force-left
                "
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-green-900 rounded-2xl text-white flex items-center justify-center text-2xl">
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
                    <li key={i} className="flex gap-2 text-gray-600">
                      <Check className="text-emerald-500 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* VISION */}
              <div
                className="
                  bounce-hover snap-center flex-shrink-0
                  w-[85vw] sm:w-[70vw] md:w-[60vw]
                  lg:w-auto
                  p-6 md:p-8
                  force-left
                "
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-amber-500 rounded-2xl text-white flex items-center justify-center text-2xl">
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
                    {
                      icon: Trophy,
                      title: t("MarketLeadership"),
                      desc: t("MarketLeadershipDescription"),
                    },
                    {
                      icon: Gem,
                      title: t("ResourceShowcase"),
                      desc: t("ResourceShowcaseDescription"),
                    },
                    {
                      icon: Users,
                      title: t("InclusiveGrowth"),
                      desc: t("InclusiveGrowthDescription"),
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-center bg-gray-100 hover:bg-[#fcf2ef] p-4 rounded-2xl border-l-4 border-amber-500 transition-transform duration-500 hover:translate-x-2"
                    >
                      <div className="w-12 h-12 bg-amber-500 rounded-2xl text-white flex items-center justify-center text-xl">
                        <item.icon />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurPurpose;
