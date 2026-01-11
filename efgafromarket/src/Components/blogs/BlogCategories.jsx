"use client";

import Card from "@/Components/common/Card";
import { Wheat, Cpu, TrendingUp, Trophy, ListFilter } from "lucide-react";

export default function BlogCategories() {
  const categories = [
    {
      icon: Wheat,
      title: "Agriculture",
      description:
        "Updates and insights on African agriculture, exports, and farming growth.",
      articles: 1,
      bgType: "gradient",
    },
    {
      icon: Cpu,
      title: "Technology",
      description:
        "Trade tech, digital platforms, and innovation shaping African markets.",
      articles: 0,
      bgType: "gradient",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Trends, pricing signals, supply chains, and market opportunities.",
      articles: 1,
      bgType: "gradient",
    },
    {
      icon: Trophy,
      title: "Success Stories",
      description:
        "Real stories of businesses and communities achieving trade success.",
      articles: 0,
      bgType: "gradient",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-green-900/20 bg-green-900/10 text-green-900 font-semibold">
            <ListFilter className="w-4 h-4 text-orange-500" />
            <span>Blog Categories</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-center text-5xl md:text-4xl font-bold text-gray-800">
          Explore Categories
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-center text-lg text-gray-500 max-w-2xl mx-auto">
          Browse articles by category and discover insights across Africa’s trade,
          technology, and success stories.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              icon={cat.icon}
              title={cat.title}
              description={cat.description}
              articles={cat.articles}
              bgType={cat.bgType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
