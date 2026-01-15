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
          suppressHydrationWarning
          className="relative w-[90%] md:w-[100%] h-auto p-6
          bg-green-900
          md:bg-[url('/images/photo-1614531341773-3bff8b7cb3fc.jfif')]
          bg-cover bg-center
          rounded-3xl overflow-hidden"
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-green-900/70 rounded-3xl"></div>

          {/* 🔒 LAYOUT LOCK */}
          <div
            dir="ltr"
            className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between m-auto h-60 md:h-50 gap-4 md:gap-0 px-10"
          >
            {/* TEXT */}
            <div className="w-full h-full md:w-2/3 flex flex-col justify-center rtl:text-right">
              <h1 className="text-white text-2xl md:text-3xl font-bold">
                {t("ExploreProductsTitle")}
              </h1>

              <p className="text-white text-base md:text-lg font-medium mt-2">
                {t("ExploreProductsDescription")}
              </p>
            </div>

            {/* BUTTON (ALWAYS RIGHT) */}
            <div
              dir="ltr"
              className="w-full md:w-1/3 flex justify-center items-center md:justify-end my-auto"
            >
              <button
                suppressHydrationWarning
                className="flex items-center justify-center text-lg gap-2
                bg-white/10 backdrop-blur-sm border-2 border-gray-300
                rounded-3xl text-white font-medium py-4 px-5
                transform transition-all duration-500
                hover:-translate-y-1 hover:bg-white hover:text-green-900
                focus:-translate-y-1 focus:bg-white focus:text-green-900"
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
