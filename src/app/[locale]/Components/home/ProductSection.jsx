"use client";

import { useTranslations, useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import { getProducts } from "../products/api/products.api";

// ================== IMAGES ==================
const Cocoa = "/images/coffee.png";
const Mango = "/images/mango.png";
const Gold = "/images/gold.png";
const Bag = "/images/bag.png";

// ================== CATEGORY LIST ==================
const CATEGORIES = [
  "All",
  "Agricultural",
  "Fruits",
  "Natural Resources",
  "Crafts",
  "Livestock",
];

// ================== IMAGE RESOLVER ==================
const getProductImage = (name = "") => {
  const key = name.toLowerCase();

  if (key.includes("cocoa")) return Cocoa;
  if (key.includes("coffee")) return Cocoa;
  if (key.includes("mango")) return Mango;
  if (key.includes("gold")) return Gold;

  return Bag;
};

// ================== COMPONENT ==================
function ProductSection() {
  const t = useTranslations("ProductSection");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ================== FETCH PRODUCTS ==================
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const items = await getProducts(12);

        const mapped = items.map((item) => ({
          ...item,
          image: getProductImage(item.name),
          origin: item.origin || "Africa",
          category: item.category || "All",
        }));

        setProducts(mapped);
        setFiltered(mapped);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ================== FILTER ==================
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFiltered(
      category === "All"
        ? products
        : products.filter((p) => p.category === category)
    );
  };

  // ================== ERROR ==================
  if (error) {
    return <p className="text-center text-red-500 mt-20">{error}</p>;
  }

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div
          className={`flex flex-col items-center justify-center mb-12 ${
            isRTL ? "text-right" : "text-center"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-[#055440]">
            <span className="text-white font-semibold text-sm tracking-wide">
              {t("PRODUCTS")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("RecommendedForYou")}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            {t("PRODUCTSDescription")}
          </p>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div
          className={`flex gap-3 pb-6 mb-12 justify-center flex-wrap ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium border-2 transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#055440] text-white border-[#055440]"
                    : "border-gray-300 text-gray-700 hover:bg-[#055440] hover:text-white hover:border-[#055440]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <div
  dir="ltr"   // ✅ FIX: PRODUCTS HAMESHA SEEDHE
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
>
  {loading
    ? Array.from({ length: 12 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))
    : filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
</div>
      </div>
    </section>
  );
}

export default ProductSection;
