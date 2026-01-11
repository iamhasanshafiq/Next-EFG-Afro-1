"use client";
import React, { useEffect, useMemo, useState } from "react";
import { RotateCcw, Search } from "lucide-react";

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
  const [categories, setCategories] = useState([]); // from API
  const [products, setProducts] = useState([]); // all mapped products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  // pagination (front-end)
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // ================== BUILD CATEGORY LIST ==================
  const categoryList = useMemo(() => {
    // If your API returns: ["Agricultural", "Fruits"...]
    // Or returns objects: [{id, name}] -> we normalize both.
    const normalized =
      categories?.map((c) => (typeof c === "string" ? c : c?.name)).filter(Boolean) || [];

    // Always include "All" on top, and keep unique
    return ["All", ...Array.from(new Set(normalized))];
  }, [categories]);

  // ================== FETCH DATA ==================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // ✅ You can increase this number if you want more products on product page
        const [categoriesData, items] = await Promise.all([
          getCategories(),
          getProducts(60),
        ]);

        const mapped = (items || []).map((item) => ({
          ...item,
          image: getProductImage(item.name), // ✅ same card image logic
          origin: item.origin || "Africa",
          category: item.category || "All",
        }));

        setCategories(categoriesData || []);
        setProducts(mapped);
        setError(null);
      } catch (err) {
        console.error("PRODUCT PAGE ERROR:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ================== APPLY FILTERS ==================
  const filtered = useMemo(() => {
    let list = [...products];

    // category filter
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    // search filter (name)
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => (p.name || "").toLowerCase().includes(q));
    }

    return list;
  }, [products, activeCategory, search]);

  // ================== PAGINATION (front-end) ==================
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  // reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [activeCategory, search]);

  const handleReset = () => {
    setActiveCategory("All");
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
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-[#055440]">
            <span className="text-white font-semibold text-sm tracking-wide">
              PRODUCTS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
            Our Products
          </h2>

          {!loading ? (
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {paginatedProducts.length ? (page - 1) * pageSize + 1 : 0}–
                {(page - 1) * pageSize + paginatedProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
              products
            </p>
          ) : (
            <p className="text-lg text-gray-600 text-center max-w-2xl">
              Loading products...
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
                    placeholder="Search Product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full outline-none text-gray-700"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-3 bg-gray-200 text-green-900 hover:bg-orange-500 hover:text-white rounded-xl flex items-center gap-2 transition"
                >
                  <RotateCcw size={18} /> Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CATEGORY FILTERS (same style as home) */}
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

        {/* PRODUCTS GRID (uses SAME ProductCard) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <ProductSkeleton key={i} />)
            : paginatedProducts.map((product) => (
                <ProductCard key={product.id || product._id} product={product} />
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
                  Pre
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
                  Next
                </button>
              </div>

              <div className="text-gray-600">
                Page <span className="font-semibold text-gray-900">{page}</span> of{" "}
                <span className="font-semibold text-gray-900">{totalPages}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default OurProducts;
