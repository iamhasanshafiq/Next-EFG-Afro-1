// ExploreProducts.jsx
"use client";

import { Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "../../container";

function ExploreProducts() {
  const t = useTranslations("ExploreProducts");

  return (
    <div className="flex justify-center">
      <Container>
        <div
          className="
            relative
            w-[90%] md:w-full
            h-auto
            p-6 md:p-10
            bg-green-900
            md:bg-[url('/images/photo-1614531341773-3bff8b7cb3fc.jfif')]
            bg-cover bg-center
            rounded-3xl
            overflow-hidden
            mx-auto
          "
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-green-900/70 rounded-3xl"></div>

          {/* MAIN CONTENT */}
          <div
            className="
              relative z-10
              flex flex-col md:flex-row
              items-center md:items-start
              justify-between
              gap-6 md:gap-0
              px-4 md:px-10
              py-8 md:py-0
              min-h-[320px] md:min-h-0
            "
            style={{
              direction: "ltr",        // ✅ hydration-safe
              unicodeBidi: "isolate",  // ✅ RTL page se isolate
            }}
          >
            {/* TEXT */}
            <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left">
              <h1 className="text-white text-2xl md:text-3xl font-bold">
                {t("ExploreProductsTitle")}
              </h1>

              <p className="text-white text-base md:text-lg font-medium mt-3">
                {t("ExploreProductsDescription")}
              </p>
            </div>

            {/* BUTTON */}
            <div
              className="w-full md:w-1/3 flex justify-center md:justify-end items-center"
              style={{
                direction: "ltr",
                unicodeBidi: "isolate",
              }}
            >
              <button
                className="
                  flex items-center justify-center gap-2
                  text-base md:text-lg
                  bg-white/10 backdrop-blur-sm
                  border-2 border-gray-300
                  rounded-3xl
                  text-white font-medium
                  py-3 md:py-4 px-6
                  transform transition-all duration-500
                  hover:-translate-y-1 hover:bg-white hover:text-green-900
                  focus:-translate-y-1 focus:bg-white focus:text-green-900
                "
              >
                <Eye className="text-lg" />
                {t("ExploreProductsBtn")}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ExploreProducts;
