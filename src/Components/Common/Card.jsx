"use client";

import { ArrowRight } from "lucide-react";
function Card({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  articles,
  bgType,
}) {
  const bgClass =
    bgType === "gradient"
      ? "bg-gradient-to-br from-green-900 to-orange-400/80"
      : "bg-teal-800";
  return (
    <div className="hover:subtle-bounce group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-800 overflow-hidden transform hover:scale-[1.02]">
      {/* Animated Shine */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-white via-green-900/5 to-white -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      </div>
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className={`w-20 h-20 rounded-2xl 
        ${bgClass}
        group-hover:bg-orange-500 transition-all duration-500 
        flex items-center justify-center group-hover:rotate-6 transform
        shadow-[0_8px_50px_rgba(0,40,0,0.2)]`}
          >
            <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
          {title}
        </h3>
        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed text-sm mb-4">
          {description}
        </p>
        {/* Conditional Rendering */}
        <div className="flex justify-center mt-4">
          {/* Show Article Count */}
          {articles !== undefined && (
            <span className="px-4 py-2 text-sm border bg-green-900/10 border-green-900/20 text-green-900 rounded-full">
              {articles} Articles
            </span>
          )}
          {/* Show Button */}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-green-900/50 text-black hover:text-white text-sm hover:bg-green-900 shadow-md transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;