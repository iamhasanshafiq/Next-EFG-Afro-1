"use client";
import React, { useEffect, useMemo, useState } from "react";
import { RotateCcw, Search } from "lucide-react";
import { useTranslations } from "next-intl";

import ProductCard from "../common/ProductCard";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import SearchSkeleton from "../skeletons/SearchSkeleton";

import { getCategories, getProducts } from "./api/products.api.js";

// ✅ HOME PAGE PRODUCT IMAGES (from src)
// import Cocoa from "/images/coffee.png";
// import Mango from "/images/mango.png";
// import Gold from "/images/gold.png";
// import Bag from "/images/bag.png";
const Cocoa = "/images/coffee.png";
const Mango = "/images/mango.png";
const Gold = "/images/gold.png";
const Bag = "/images/bag.png";

// ================== IMAGE RESOLVER (same as home) ==================
const getProductImage = (name = "") => {
  const key = (name || "").toLowerCase();

  if (key.includes("cocoa")) return Cocoa;
  if (key.includes("mango")) return Mango;
  if (key.includes("gold")) return Gold;
  if (key.includes("coffee")) return Cocoa;
  if (key.includes("cotton")) return Bag;
  if (key.includes("shea")) return Gold;
  if (key.includes("avocado")) return Bag;
  if (key.includes("cashew")) return Bag;
  if (key.includes("rice")) return Bag;
  if (key.includes("tea")) return Bag;
  if (key.includes("wheat")) return Bag;
  if (key.includes("spice")) return Bag;

  return Bag; // fallback
};

function OurProducts() {
  const t = useTranslations("OurProducts");

  const [categories, setCategories] = useState([]); // from API
  const [products, setProducts] = useState([]); // all mapped products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [activeCategory, setActiveCategory] = useState(t("ProductsAll"));
  const [search, setSearch] = useState("");

  // pagination (front-end)
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // ================== BUILD CATEGORY LIST ==================
  const categoryList = useMemo(() => {
    const normalized =
      categories
        ?.map((c) => (typeof c === "string" ? c : c?.name))
        .filter(Boolean) || [];

    return [t("ProductsAll"), ...Array.from(new Set(normalized))];
  }, [categories, t]);

  // ================== FETCH DATA ==================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [categoriesData, items] = await Promise.all([
          getCategories(),
          getProducts(60),
        ]);

        const mapped = (items || []).map((item) => ({
          ...item,
          image: getProductImage(item.name),
          origin: item.origin || t("ProductsOriginAfrica"),
          category: item.category || t("ProductsAll"),
        }));

        setCategories(categoriesData || []);
        setProducts(mapped);
        setError(null);
      } catch (err) {
        console.error("PRODUCT PAGE ERROR:", err);
       setError(t("ProductsError"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  // ================== APPLY FILTERS ==================
  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== t("ProductsAll")) {
      list = list.filter((p) => p.category === activeCategory);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => (p.name || "").toLowerCase().includes(q));
    }

    return list;
  }, [products, activeCategory, search, t]);

  // ================== PAGINATION ==================
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  useEffect(() => {
    setPage(1);
  }, [activeCategory, search]);

  const handleReset = () => {
    setActiveCategory(t("ProductsAll"));
    setSearch("");
    setPage(1);
  };

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  // ================== ERROR ==================
  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  return (
    <section 
     dir="ltr"
    className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-[#055440]">
            <span className="text-white font-semibold text-sm tracking-wide">
              {t("ProductsBadge")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
            {t("ProductsTitle")}
          </h2>

          {!loading ? (
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              {t("ProductsShowing")}{" "}
              <span className="font-semibold text-gray-900">
                {paginatedProducts.length ? (page - 1) * pageSize + 1 : 0}–
                {(page - 1) * pageSize + paginatedProducts.length}
              </span>{" "}
              {t("ProductsOf")}{" "}
              <span className="font-semibold text-gray-900">
                {filtered.length}
              </span>{" "}
              {t("ProductsProducts")}
            </p>
          ) : (
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              {t("ProductsLoadingProducts")}
            </p>
          )}
        </div>

        {/* SEARCH BAR */}
        <div className="w-full flex justify-center mb-10">
          {loading ? (
            <SearchSkeleton />
          ) : (
            <div className="w-full bg-white flex flex-wrap items-center justify-center p-3 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-full md:w-[90%] flex items-center gap-3">
                <div className="flex items-center gap-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-700">
                  <Search className="text-gray-400" size={18} />
                  <input
                    type="search"
                    placeholder={t("ProductsSearchPlaceholder")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none text-gray-700"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="p-3 w-[18%]  bg-gray-200 border-2 border-gray-400 text-green-900 hover:bg-orange-500 hover:text-white rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <RotateCcw size={18} /> {t("ProductsReset")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CATEGORY FILTERS */}
        {!loading && (
          <div className="flex gap-3 overflow-x-auto pb-4 mb-10 justify-center flex-wrap">
            {categoryList.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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
        )}

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id || product._id}
                  product={product}
                />
              ))}
        </div>

        {/* PAGINATION */}
        {!loading && (
          <>
            <hr className="w-full mx-auto mt-12" />
            <div className="w-full mx-auto flex items-center justify-between mt-5">
              <div className="flex gap-3 items-center">
                <button
                  onClick={goPrev}
                  disabled={page === 1}
                  className={`px-4 h-10 rounded-lg border flex items-center justify-center transition
                    ${
                      page === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-[#055440] hover:text-white"
                    }`}
                >
                  {t("ProductsPrev")}
                </button>

                <div className="px-4 h-10 rounded-lg border bg-white flex items-center justify-center">
                  {page}
                </div>

                <button
                  onClick={goNext}
                  disabled={page === totalPages}
                  className={`px-4 h-10 rounded-lg border flex items-center justify-center transition
                    ${
                      page === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 hover:bg-[#055440] hover:text-white"
                    }`}
                >
                  {t("ProductsNext")}
                </button>
              </div>

              <div className="text-gray-600">
                {t("ProductsPage")}{" "}
                <span className="font-semibold text-gray-900">{page}</span>{" "}
                {t("ProductsOfPages")}{" "}
                <span className="font-semibold text-gray-900">
                  {totalPages}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default OurProducts;
