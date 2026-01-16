"use client";

import {
  HeroSection,
  ExploreProducts,
  OurFoundation,
  OurPurpose,
  OurStory,
  WhyChoose
} from "@/app/[locale]/Components/index.js";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("About");

  return (
    <div className="w-full bg-white m-0 p-0">
      <HeroSection
        title={t("AboutTitle")}
        highlight={t("AboutHighlight")}
        description={t("AboutDescription")}
        badgeText={t("AboutBadgeText")}
        badgeIcon={Star}
        showStats={false}
      />

      <OurStory />
      <OurPurpose />
      <OurFoundation />
      <WhyChoose />
      <ExploreProducts />
    </div>
  );
}

export default About;
