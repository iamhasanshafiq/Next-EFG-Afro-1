"use client";

import React from "react";

const SearchSkeleton = () => {
  return (
    <div className="w-[92%] bg-white p-4 rounded-xl animate-pulse mb-10">
      <div className="h-12 bg-gray-300 rounded-xl"></div>
    </div>
  );
};

export default SearchSkeleton;
