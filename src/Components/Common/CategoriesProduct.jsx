"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
export default function CategoriesProduct({ categories = [], products = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
        p => p.category?.name === activeCategory
      );
  return (
    <div className="w-full">
      {/* ================= CATEGORY BUTTONS ================= */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.length > 0 &&
          categories.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-3 px-5 py-2 rounded-full font-medium transition-all duration-300
                ${activeCategory === category.name
                  ? "bg-green-900 text-white"
                  : "text-gray-800 border-2 border-gray-300 hover:bg-green-900 hover:text-white"
                }`}
            >
              {category.icon && <span className="text-lg">{category.icon}</span>}
              {category.name}
            </button>
          ))}
      </div>
      {/* ================= PRODUCTS GRID ================= */}
      <div className="flex flex-wrap gap-7 px-5 mb-20 justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="w-30 md:w-45 h-90 flex flex-col justify-between bg-white rounded-2xl p-1 py-5 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
            >
              {/* Product Image */}
              <img
                src={product.images?.[0]?.imagePath || ""}
                alt={product.images?.[0]?.altText || product.name}
                className="w-full md:w-40 h-auto rounded-xl object-contain mx-auto mb-3"
              />
              {/* Product Name & Origin */}
              <div>
                <p className="font-semibold text-lg text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-600">
                  Origin: {product.originCountry || "Africa"}
                </p>
              </div>
              {/* Inquiry Button */}
              <button className="mt-4 w-full py-2 rounded-full text-white bg-gradient-to-r from-[rgb(30,100,30)] to-[rgb(220,130,50)] hover:from-[rgb(220,130,50)] hover:to-[rgb(39,39,39)] transition-all duration-300 flex items-center justify-center gap-2">
                <Mail /> Inquiry
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full mt-10">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
