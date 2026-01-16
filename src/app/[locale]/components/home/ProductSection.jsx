"use client";

import { useTranslations, useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import { getProducts } from "../products/api/products.api";
import Container from "../../container";

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

        // API se max 12 products
        const items = await getProducts(12);

        // Products ko map kar ke image + default values add kar rahe hain
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

  // ================== CATEGORY FILTER ==================
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    setFiltered(
      category === "All"
        ? products
        : products.filter((p) => p.category === category)
    );
  };

  // ================== ERROR UI ==================
  if (error) {
    return (
      <p className="text-center text-red-500 mt-20">
        {error}
      </p>
    );
  }

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-16"
    >
      <Container>

        {/* ================= HEADER ================= */}
        <div
          className={`flex flex-col items-center mb-10 ${
            isRTL ? "text-right" : "text-center"
          }`}
        >
          <div className="inline-flex items-center mb-5 px-4 py-2 rounded-full bg-[#055440]">
            <span className="text-white font-semibold text-sm">
              {t("PRODUCTS")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("RecommendedForYou")}
          </h2>

          <p className="text-base text-gray-600 max-w-2xl">
            {t("PRODUCTSDescription")}
          </p>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div
          className={`flex gap-2 mb-10 justify-center flex-wrap ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all
                ${
                  activeCategory === category
                    ? "bg-[#055440] text-white border-[#055440]"
                    : "border-gray-300 text-gray-700 hover:bg-[#055440] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <div
          dir="ltr" // ✅ PRODUCTS LTR rahenge even in Arabic
          className="
            grid
            grid-cols-2        /* 📱 Mobile → 2 cards per row */
            sm:grid-cols-3     /* 📱 Large mobile → 3 cards */
            md:grid-cols-4     /* 💻 Tablet */
            lg:grid-cols-6     /* 🖥 Desktop */
            gap-4              /* 🔽 Gap thoda kam for mobile */
          "
        >
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
        </div>

      </Container>
    </section>
  );
}

export default ProductSection;
