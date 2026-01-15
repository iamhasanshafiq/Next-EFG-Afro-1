"use client";
import React from "react";
import { useTranslations } from "next-intl";

// Reusable Skeleton
import CategorySkeleton from "../skeletons/CategorySkeleton";

const categories = [
  {
    image: "/images/lush-rice-paddy-field-neat-600nw-2499404003.jpg",
    key: "Agriculture",
  },
  {
    image: "/images/istockphoto-1204893081-612x612.jpg",
    key: "Fruits",
  },
  {
    image: "/images/Oil-field-site.jpg",
    key: "Resources",
  },
  {
    image: "/images/Blog_pics_wide_2240_x_1300_px_7.png",
    key: "Crafts",
  },
];

function ExploreCategories() {
  const t = useTranslations("ExploreCategories");

  return (
    <section
      dir="ltr"
      className="w-full py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* BADGE */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-green-50 text-green-900 font-medium shadow">
            ⭐ {t("ExploreCategoriesBadge")}
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          {t("ExploreCategoriesTitle")}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          {t("ExploreCategoriesDescription")}
        </p>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {categories.length === 0
            ? Array.from({ length: 4 }).map((_, i) => (
                <CategorySkeleton key={i} />
              ))
            : categories.map((item, index) => (
                <div
                  key={index}
                  className="group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={t(`${item.key}.${item.key}Title`)}
                    className="
                      absolute inset-0 w-full h-full object-cover
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:-translate-y-2
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/45"></div>

                  {/* TEXT CONTENT */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <h3 className="text-xl font-bold">
                      {t(`${item.key}.${item.key}Title`)}
                    </h3>

                    <p className="text-sm mt-2 leading-snug opacity-90">
                      {t(`${item.key}.${item.key}Description`)}
                    </p>

                    <span className="inline-block mt-4 text-xs font-semibold bg-green-800 px-4 py-1.5 rounded-full">
                      {t(`${item.key}.${item.key}Products`)}
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategories;
