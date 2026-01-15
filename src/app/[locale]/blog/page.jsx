"use client";

import { useTranslations } from "next-intl";

import HeroSection from "../components/common/HeroSection";
import BlogCategories from "../components/blogs/BlogCategories";
import RecentPostsSection from "../components/blogs/RecentPostsSection";
import TrendingTagsSection from "../components/blogs/TrendingTagsSection";

function Blog() {
  const t = useTranslations("BlogPage");

  return (
    <>
      <HeroSection
        badgeText={t("BadgeText")}
        badgeIcon="newspaper"
        title={t("Title")}
        highlight={t("Highlight")}
        description={t("Description")}
        showImages={false}
        showStats={true}
        stats={[
          { value: 1, label: t("Stats.Articles") },
          { value: 8, label: t("Stats.Categories") },
          { value: 110, label: t("Stats.Readers") },
        ]}
      />

      <BlogCategories />
      <RecentPostsSection />
      <TrendingTagsSection />
    </>
  );
}

export default Blog;
