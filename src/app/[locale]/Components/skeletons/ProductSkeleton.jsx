"use client";

import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow animate-pulse">
      <div className="h-40 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-1/4"></div>
    </div>
  );
};

export default ProductSkeleton;
