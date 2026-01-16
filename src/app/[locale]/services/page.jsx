"use client";

import {
  HowWeWork,
  OurExpertise,
  SpecializedSolution,
  HeroSection
} from "@/app/[locale]/components/index.js";
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations("Services");

  return (
    <div>
      {/* HERO SECTION AT TOP */}
      <HeroSection
        title={t("HeroTitle")}
        highlight={t("HeroHighlight")}
        description={t("HeroDescription")}
        badgeText={t("HeroBadgeText")}
        badgeIcon={Settings}
        useIcons={true}
        enableFloating={true}
        reverseGradient={true}
        reduceIconSpacing={true}
        images={{
          left: "1",
          right: "1",
          bottomLeft: "1",
          bottomRight: "1",
        }}
      />

      <OurExpertise />
      <SpecializedSolution />
      <HowWeWork />
    </div>
  );
}

export default Services;
