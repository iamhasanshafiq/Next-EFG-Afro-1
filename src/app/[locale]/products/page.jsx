"use client";

import { HeroSection, ExploreCategories, NewsLetter, OurProducts } from "@/app/[locale]/Components";
import { useTranslations } from "next-intl";

function Products() {
  const t = useTranslations("Products");

  return (
    <>
      <div>
        {/* HERO SECTION AT TOP */}
        <HeroSection
          title={t("ProductsTitle")}
          highlight={t("Productshighlight")}
          description={t("ProductsDescription")}
          badgeText={t("ProductsbadgeText")}
          badgeIcon="leaf"   // SAME as tumhara

         
          showStats={true}
        />

        <OurProducts />
        <ExploreCategories />
        <NewsLetter />
      </div>
    </>
  );
}

export default Products;
