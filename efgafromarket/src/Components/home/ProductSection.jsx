"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import ProductSkeleton from "../skeletons/ProductSkeleton"; // ✅ Reusable skeleton
import { getProducts } from "../products/api/products.api";

// ✅ HOME PAGE PRODUCT IMAGES (from src)
// import Cocoa from "/src/images/coffee.png";
// import Mango from "/src/images/mango.png";
// import Gold from "/src/images/gold.png";
// import Bag from "/src/images/bag.png";

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

// ================== COMPONENT ==================
function ProductSection() {
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

                const items = await getProducts(12); // fetch 12 products for home page

                const mappedProducts = items.map((item) => ({
                    ...item,
                    image: getProductImage(item.name), // correct image mapping
                    origin: item.origin || "Africa",
                    category: item.category || "All",
                }));

                setProducts(mappedProducts);
                setFiltered(mappedProducts);
            } catch (err) {
                console.error("HOME PRODUCTS ERROR:", err);
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

        if (category === "All") {
            setFiltered(products);
        } else {
            setFiltered(products.filter((product) => product.category === category));
        }
    };

    // ================== ERROR ==================
    if (error) {
        return (
            <p className="text-center text-red-500 mt-20">{error}</p>
        );
    }

    return (
        <section className="w-full bg-gradient-to-b from-white via-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full bg-[#055440]">
                        <span className="text-white font-semibold text-sm tracking-wide">
                            PRODUCTS
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
                        Recommended For You
                    </h2>

                    <p className="text-lg text-gray-600 text-center max-w-2xl">
                        Handpicked products based on global demand
                    </p>
                </div>

                {/* CATEGORY FILTERS */}
                <div className="flex gap-3 overflow-x-auto pb-6 mb-12 justify-center flex-wrap">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2 rounded-full font-medium border-2 transition-all duration-300
                                ${activeCategory === category
                                    ? "bg-[#055440] text-white border-[#055440]"
                                    : "border-gray-300 text-gray-700 hover:bg-[#055440] hover:text-white hover:border-[#055440]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {loading
                        ? Array.from({ length: 12 }).map((_, i) => (
                            <ProductSkeleton key={i} />
                        ))
                        : filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
