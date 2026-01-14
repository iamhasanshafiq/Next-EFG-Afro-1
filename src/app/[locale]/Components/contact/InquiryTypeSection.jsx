"use client";

import Card from "../common/Card";
import {
  MessageCircle,
  ShoppingCart,
  LineChart,
  LifeBuoy,
  HelpCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function InquiryTypeSection() {
  const t = useTranslations("inquiry");

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

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-900/20 bg-green-900/10 text-green-900 font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>{t("badge")}</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-10">
          <h3 className="text-green-900 font-extrabold tracking-widest text-sm">
            {t("heading")}
          </h3>
        </div>

        {/* Subtitle */}
        <div className="mt-4 flex justify-center">
          <p className="text-gray-500 text-xl leading-relaxed text-center max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((it, idx) => (
            <Card
              key={idx}
              icon={it.icon}
              title={it.title}
              description={it.description}
              buttonText={it.buttonText}
              onButtonClick={() => console.log(`${it.title} clicked`)}
              bgType={it.bgType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
