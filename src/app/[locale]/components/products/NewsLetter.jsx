"use client";

import { Info } from "lucide-react";
import { useTranslations } from "next-intl";

function NewsLetter() {
  const t = useTranslations("productsNewsLetter");

  return (
    <section
      dir="ltr"
      className="w-full flex justify-center my-16 px-4"
    >
      <div
        className="
          relative w-full max-w-7xl
          rounded-3xl overflow-hidden
          bg-cover bg-center
          bg-[url('/images/newsletter-bg.jfif')]
          md:bg-[url('/images/photo-1614531341773-3bff8b7cb3fc.jfif')]
        "
      >
        {/* DARK GREEN OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-900/70 to-green-900/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-14 py-14 md:py-16">
          
          {/* LEFT TEXT */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              {t("productsNewsLetterTitle")}
            </h2>

            <p className="text-white/90 text-base md:text-lg mt-4 max-w-2xl">
              {t("productsNewsLetterDescription")}
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <button
              className="
                flex items-center gap-3
                px-7 py-4
                rounded-xl
                border border-white/60
                text-white font-semibold
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-white hover:text-green-900
                hover:shadow-xl hover:shadow-black/30
              "
            >
              <Info size={20} />
              {t("productsNewsLetterButton")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
