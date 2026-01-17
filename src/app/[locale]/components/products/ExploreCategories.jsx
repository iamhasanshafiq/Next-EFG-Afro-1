"use client";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const sliderRef = useRef(null);

  // 🔹 1 click = 1 card (center)
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
    <section dir="ltr" className="w-full py-20 bg-white">
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

        {/* SLIDER WRAPPER */}
        <div className="relative mt-14">
          {/* LEFT BUTTON (mobile only) */}
          <button
            onClick={slideLeft}
            className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20
              bg-white shadow-lg rounded-full p-2
              hover:bg-green-800 hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON (mobile only) */}
          <button
            onClick={slideRight}
            className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20
              bg-white shadow-lg rounded-full p-2
              hover:bg-green-800 hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* CATEGORY CARDS */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-[12vw] sm:flex-wrap sm:justify-center sm:overflow-visible sm:snap-none sm:px-0"

            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {categories.length === 0
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="snap-center flex-shrink-0 w-[260px]"
                  >
                    <CategorySkeleton />
                  </div>
                ))
              : categories.map((item, index) => (
                  <div
                    key={index}
                    className="
                      snap-center flex-shrink-0
                      w-[260px] sm:w-[280px]
                      relative h-[280px]
                      rounded-3xl overflow-hidden
                      cursor-pointer shadow-lg group
                    "
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

                    {/* TEXT */}
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
      </div>
    </section>
  );
}

export default ExploreCategories;
