"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../common/Card";
import {
  MessageCircle,
  ShoppingCart,
  LineChart,
  LifeBuoy,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function InquiryTypeSection() {
  const t = useTranslations("inquiry");
  const sliderRef = useRef(null);

  // 🔒 HARD HYDRATION FIX
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  const items = [
    {
      icon: MessageCircle,
      title: t("items.general.title"),
      description: t("items.general.description"),
      buttonText: t("items.general.button"),
      bgType: "gradient",
    },
    {
      icon: ShoppingCart,
      title: t("items.product.title"),
      description: t("items.product.description"),
      buttonText: t("items.product.button"),
      bgType: "gradient",
    },
    {
      icon: LineChart,
      title: t("items.market.title"),
      description: t("items.market.description"),
      buttonText: t("items.market.button"),
      bgType: "gradient",
    },
    {
      icon: LifeBuoy,
      title: t("items.support.title"),
      description: t("items.support.description"),
      buttonText: t("items.support.button"),
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
    <section
      dir="ltr"
      className="w-full bg-white py-20 text-left"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-900/20 bg-green-900/10 text-green-900 font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>{t("badge")}</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-5 text-center">
          <h3 className="text-green-900 font-extrabold tracking-widest text-4xl">
            {t("heading")}
          </h3>
        </div>

        {/* Subtitle */}
        <div className="mt-4 flex justify-center">
          <p className="text-gray-500 text-xl leading-relaxed text-center max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* SLIDER / GRID */}
        <div className="relative mt-14">
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
              flex gap-10 overflow-x-auto scrollbar-hide
              snap-x snap-mandatory
              px-[10vw]

              lg:grid lg:grid-cols-4 lg:gap-10
              lg:px-0 lg:overflow-visible lg:snap-none
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {items.map((it, idx) => (
              <div
                key={idx}
                className="
                  snap-center flex-shrink-0
                  w-[85vw] sm:w-[70vw] md:w-[320px] lg:w-auto
                "
              >
                <Card
                  icon={it.icon}
                  title={it.title}
                  description={it.description}
                  buttonText={it.buttonText}
                  onButtonClick={() =>
                    console.log(`${it.title} clicked`)
                  }
                  bgType={it.bgType}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
