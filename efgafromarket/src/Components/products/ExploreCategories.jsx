"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Images
// import Beauti1 from "/images/lush-rice-paddy-field-neat-600nw-2499404003.jpg";
// import Beauti2 from "/images/istockphoto-1204893081-612x612.jpg";
// import Beauti3 from "/images/Oil-field-site.jpg";
// import Beauti4 from "/images/Blog_pics_wide_2240_x_1300_px_7.png";

// Reusable Skeleton
import CategorySkeleton from "../skeletons/CategorySkeleton";

// const images = [Beauti1, Beauti2, Beauti3, Beauti4];
const images = [
  "/images/lush-rice-paddy-field-neat-600nw-2499404003.jpg",
  "/images/istockphoto-1204893081-612x612.jpg",
  "/images/Oil-field-site.jpg",
  "/images/Blog_pics_wide_2240_x_1300_px_7.png",
];


function ExploreCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://15.184.197.96/catalog/api/categories"
        );

        if (res.data?.status === "success") {
          const mappedCategories = res.data.data.items.map(
            (item, index) => ({
              ...item,
              image: images[index % images.length],
              productsCount: item.products_count || "0+",
            })
          );

          setCategories(mappedCategories);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full mx-auto items-center justify-center">
      {/* Header */}
      <div className="w-fit px-6 py-2 bg-gray-200 text-green-900 rounded-full shadow font-medium mx-auto mt-5">
        ⭐ Explore Categories
      </div>

      <h1 className="text-4xl text-center font-bold mt-2">
        Our Products
      </h1>

      <p className="text-sm text-center font-medium text-[#333] mt-2">
        Discover our most popular product categories from across Africa
        with Digital Commerce
      </p>

      {/* Category Cards */}
      <div className="w-[90%] flex flex-wrap justify-center items-center gap-5 mx-auto mt-8">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))
          : categories.map((category) => (
              <div
                key={category.id}
                className="relative w-80 h-auto my-5 rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-55 object-cover rounded-2xl"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-6 left-8 right-2 text-white z-10">
                  <h3 className="text-lg font-bold">
                    {category.name}
                  </h3>

                  <p className="text-xs my-1">
                    {category.description ||
                      "Premium products sourced from Africa"}
                  </p>

                  <span className="inline-block text-xs font-semibold bg-green-900 px-2 py-1 rounded-full">
                    {category.productsCount} Products
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ExploreCategories;
