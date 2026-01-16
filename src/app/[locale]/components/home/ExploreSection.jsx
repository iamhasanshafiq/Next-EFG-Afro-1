"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import {
  Wheat,
  Apple,
  Gem,
  Palette,
  Cat,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CategorySkeleton from "../skeletons/CategorySkeleton";
import axios from "axios";
import Container from "../../container";

const ICONS_MAP = {
  wheat: Wheat,
  apple: Apple,
  diamond: Gem,
  palette: Palette,
  cat: Cat,
};

function ExploreSection() {
  const t = useTranslations("ExploreSection");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://api.efgafromarket.ae/catalog/api/categories"
        );
        if (res.data.status === "success") {
          const mapped = res.data.data.items.map((item, index) => ({
            id: item.id,
            name: item.name,
            count: item.products_count
              ? `${item.products_count}+ Products`
              : "0+ Products",
            icon:
              Object.keys(ICONS_MAP)[
                index % Object.keys(ICONS_MAP).length
              ],
          }));
          setCategories(mapped);
        } else {
          setError("Failed to load categories");
        }
      } catch (err) {
        console.error("Explore Categories API error:", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const renderIcon = (iconType) => {
    const Icon = ICONS_MAP[iconType];
    return Icon ? (
      <Icon size={48} className="text-white" strokeWidth={1.5} />
    ) : null;
  };

  // Mobile slider
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

  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">
        {error}
      </p>
    );
  }

  return (
    <section
      dir="ltr"
      className="w-full py-20"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <Container>
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div
            className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full border"
            style={{ backgroundColor: "#055440", borderColor: "#055440" }}
          >
            <span className="text-[#f8f8f8] font-semibold text-sm tracking-wide">
              {t("EXPLORE")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            {t("PopularCategories")}
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-2xl">
            {t("EXPLOREDescription")}
          </p>
        </div>

        {/* SLIDER + GRID */}
        <div className="relative">
          {/* Mobile arrows */}
          <button
            onClick={slideLeft}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-[#055440] hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={slideRight}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-[#055440] hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* CATEGORIES */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-auto scrollbar-hide
              snap-x snap-mandatory
              px-[12vw]

              md:grid md:grid-cols-5
              md:justify-center
              md:gap-8
              md:px-0
              md:overflow-visible md:snap-none
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="snap-center flex-shrink-0 w-[260px]"
                  >
                    <CategorySkeleton />
                  </div>
                ))
              : categories.map((category, index) => (
                  <div
                    key={category.id}
                    className="
                      snap-center flex-shrink-0 md:w-[230px] w-[250px]
                      bg-white rounded-2xl p-8 shadow-sm
                      transition-all duration-300 ease-out
                      hover:scale-105 cursor-pointer group
                      border border-gray-200 hover:border-[#055440]
                    "
                    style={{
                      animation: `slideUp 0.6s ease-out ${
                        index * 0.1
                      }s both`,
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-24 h-24 rounded-xl mb-6 mx-auto"
                      style={{ backgroundColor: "#055440" }}
                    >
                      {renderIcon(category.icon)}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {category.name}
                    </h3>

                    <p className="text-center text-gray-600 text-sm">
                      {category.count}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExploreSection;
