"use client";

import { Info } from "lucide-react";
function NewsLetter() {
  return (
    <div className="relative w-full my-10 bg-white h-auto overflow-hidden flex justify-center">
      {/* ================= IMAGE BOX (75% width) ================= */}
      {/* <div
        className="
            relative w-[90%] md:w-[85%] h-auto p-6 
            bg-green-900 
            md:bg-[url('/src/images/photo-1614531341773-3bff8b7cb3fc.jfif')] 
            bg-cover bg-center 
            rounded-3xl 
            overflow-hidden
          "
      > */}
      <div
        className="relative w-[90%] md:w-[85%] h-auto p-6 bg-green-900 bg-cover bg-center rounded-3xl overflow-hidden"
        style={{
          backgroundImage: "url('/images/newsletter-bg.jfif')",
        }}
      >

        {/* ===== Dark Overlay ===== */}
        <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center"></div>

        {/* ===== CONTENT AREA (flex-col mobile, flex-row desktop) ===== */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between m-auto h-60 md:h-50 gap-4 md:gap-0">

          {/* ---------- LEFT TEXT ---------- */}
          <div className="w-full h-full md:w-2/3 text-start md:text-left flex flex-col items-start justify-center">
            <h1 className="text-white text-2xl text-start md:text-3xl font-bold">
              Ready to Start Trading?
            </h1>
            <p className="text-white text-base md:text-lg font-medium mt-2">
              Connect with African suppliers and discover authentic products for your business. Join thousands of satisfied buyers worldwide.
            </p>
          </div>
          {/* ---------- RIGHT BUTTON ---------- */}
          <div className="w-full  md:w-1/3 flex justify-center items-center r md:justify-end  my-auto">
            <button className="flex items-center  justify-center gap-2 border border-white rounded-2xl text-white font-semibold py-4 px-4 hover:bg-white hover:text-green-900 transition duration-300">
              {/* Icon can be added here */}
              <Info className="text-2xl" />
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter