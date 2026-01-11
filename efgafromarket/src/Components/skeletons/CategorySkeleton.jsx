"use client";

import React from "react";

const CategorySkeleton = ({
  width = "w-80",
  height = "h-55",
}) => {
  return (
    <div
      className={`relative ${width} ${height} my-5 rounded-2xl overflow-hidden bg-gray-300 animate-pulse`}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute bottom-6 left-8 right-2 z-10">
        <div className="h-4 w-40 bg-gray-400 rounded mb-2"></div>
        <div className="h-3 w-56 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 w-24 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
