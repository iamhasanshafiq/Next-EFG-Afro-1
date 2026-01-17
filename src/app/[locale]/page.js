"use client";

import { useTranslations } from "next-intl";

import {
  HeroSection,
  ExcellenceSection,
  ExploreSection,
  ProductSection,
  WhyChooseUs,
} from "@/app/[locale]/Components";

import NewsLetter from "@/app/[locale]/Components/home/NewsLetter";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div>
      <HeroSection
        title={t("Title")}
        highlight={t("highlight")}
        description={t("Description")}
        badgeText={t("BadgeText")}
        badgeIcon="shield"
        btnPrimary={t("BtnPrimary")}
        btnSecondary={t("BtnSecondary")}
        showImages={true}
        showStats={true}
        images={{
          left: "/images/bag.png",
          right: "/images/mango.png",
          bottomLeft: "/images/gold.png",
          bottomRight: "/images/coffee.png",
        }}
      />

      <ExploreSection />
      <ProductSection />
      <WhyChooseUs />
      <ExcellenceSection />
      <NewsLetter />
    </div>
  );
}
